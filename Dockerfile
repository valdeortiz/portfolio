# syntax=docker/dockerfile:1

# ---------------------------------------------------------------
# Build multi-etapa. La imagen final sólo lleva el server standalone
# de Next: sin node_modules de desarrollo y sin código fuente.
# ---------------------------------------------------------------
# Se pinea el minor: `24-alpine` es un tag flotante y el mismo commit podía
# construirse con otro Node según el día. El patch queda libre a propósito, para
# seguir recibiendo los rebuilds con parches de seguridad de la imagen base.
ARG NODE_VERSION=24.20-alpine

# 1) Dependencias -------------------------------------------------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2) Build --------------------------------------------------------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

# NEXT_PUBLIC_* se inlinea en build-time, no en runtime: si esto no llega acá,
# el sitemap, el canonical y las OG images quedan con el valor por defecto de
# lib/site.ts sin importar lo que diga el `environment:` del compose.
ARG NEXT_PUBLIC_SITE_URL=https://valdeortiz.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Desarrollo (hot reload) --------------------------------------
FROM node:${NODE_VERSION} AS dev
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    WATCHPACK_POLLING=true
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]

# 4) Runtime (etapa por defecto) ----------------------------------
# Va última a propósito: `docker build` sin --target construye la última etapa,
# así que el default tiene que ser producción, no desarrollo.
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

# Punto de montaje del volumen de caché de imágenes. Tiene que existir con el
# owner correcto: Docker inicializa el volumen copiando permisos de este
# directorio, y si no está lo crea como root y el server no puede escribirlo.
RUN mkdir -p .next/cache/images && chown -R nextjs:nodejs .next

USER nextjs
EXPOSE 3000

# Pega a /api/health, que es estático: pedir `/` renderizaba la home entera
# cada 30 segundos.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
