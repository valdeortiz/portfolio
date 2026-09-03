# Notas del proyecto

Portafolio personal de Valdemar Ortiz. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind v4 + Motion. Se ejecuta en Docker.

## Reglas

- **El contenido va en `lib/site.ts`**, no incrustado en los componentes.
- **No inventar datos**: proyectos, métricas o logros sólo si son reales.
  El sitio anterior arrastraba datos de tutorial (proyectos ficticios,
  "1900 seguidores") que se eliminaron a propósito.
- **El diseño es el de la rama `master`** (styled-components), reimplementado
  en Tailwind. Antes de cambiar la estética, mirá cómo lo resolvía el
  original: `git show master:src/styles/GlobalComponents/index.js`.
- Los colores salen de los tokens de `app/globals.css` (`@theme`). No usar
  colores literales en las clases.
  Ojo: el token de fondo se llama `canvas`, no `base`, porque `text-base`
  ya es un tamaño de fuente en Tailwind.
- Los breakpoints del diseño original eran `max-width` (sm ≤640, md ≤768).
  Al traducirlos a Tailwind, que es mobile-first, se invierten:
  master sm → base, master md → `sm:`, master default → `md:`.
- El original corría con `html { font-size: 62.5% }`, así que sus `rem`
  valían 10px: `3rem` eran 30px, no 48px. No copiar los valores tal cual.
- Íconos: SVG inline en `components/ui/icons.tsx`. No agregar `react-icons`.
- Toda animación debe respetar `prefers-reduced-motion` (usar
  `useReducedMotion` de Motion).
- `"use client"` sólo en componentes que realmente necesitan interacción o
  animación; el resto queda como Server Component.
- `/condiciones` es requisito de Google Play para las apps publicadas. No
  borrar la ruta.

## Comandos

```bash
docker compose up dev        # desarrollo
npm run lint && npm run typecheck
```
