# Notas del proyecto

Portafolio personal de Valdemar Ortiz. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind v4 + Motion. Se ejecuta en Docker.

## Reglas

- **El contenido va en `lib/site.ts`**, no incrustado en los componentes.
- **No inventar datos**: proyectos, métricas o logros sólo si son reales.
  El sitio anterior arrastraba datos de tutorial (proyectos ficticios,
  "1900 seguidores") que se eliminaron a propósito.
- Los colores salen de los tokens de `app/globals.css` (`@theme`). No usar
  colores literales en las clases.
  Ojo: el token de fondo se llama `canvas`, no `base`, porque `text-base`
  ya es un tamaño de fuente en Tailwind.
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
