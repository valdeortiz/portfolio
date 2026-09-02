# syntax=docker/dockerfile:1

# ---------------------------------------------------------------
# Build multi-etapa. La imagen final sólo lleva el server standalone
# de Next: sin node_modules de desarrollo y sin código fuente.
# ---------------------------------------------------------------
ARG NODE_VERSION=24-alpine

# 1) Dependencias -------------------------------------------------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# npm ci si hay lockfile (reproducible), npm install en el primer arranque.
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# 2) Build --------------------------------------------------------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Runtime ------------------------------------------------------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Usuario sin privilegios.
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
# output: "standalone" ya trae el server y sólo las deps que usa en runtime.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]

# 4) Desarrollo (hot reload) --------------------------------------
FROM node:${NODE_VERSION} AS dev
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    WATCHPACK_POLLING=true
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
