# Notas del proyecto

Portafolio personal de Valdemar Ortiz. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind v4 + Motion. Se ejecuta en Docker.

## Reglas

- **El contenido va en `lib/site.ts`**, no incrustado en los componentes.
  El archivo tiene dos mitades: lo neutro (contacto, redes, imágenes, enlaces,
  ids de sección) suelto arriba, y todo el texto dentro de `content`, con una
  entrada por idioma. El tipo `Content` obliga a que las dos estén completas:
  si agregás una clave en `es`, TypeScript la exige en `en`.
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

## Idiomas

El sitio es bilingüe y cada idioma tiene su propia URL:

| | Español (por defecto) | Inglés |
|---|---|---|
| Portada | `/` | `/en` |
| Bases y condiciones | `/condiciones` | `/en/terms` |

- El español vive en la raíz porque es la URL que ya está indexada; no moverlo
  a `/es`.
- Son **dos root layouts** (`app/(es)/layout.tsx` y `app/(en)/layout.tsx`),
  no un segmento `[lang]`. El motivo es el atributo `lang` del `<html>`: sólo
  se puede fijar en un root layout, y tiene que decir la verdad para los
  lectores de pantalla. Los dos renderizan el mismo `SiteDocument`.
  Consecuencia esperada: navegar de un idioma al otro recarga la página entera.
- Los archivos de ruta son cáscaras de cinco líneas; el cuerpo real está en
  `components/pages/`. Al agregar una página hay que crearla en los dos
  idiomas y sumarla a `routes` de `lib/site.ts`, al `sitemap.ts` y a
  `languages()` de `lib/metadata.ts` (el `hreflang`).
- Los componentes reciben `lang` por prop y leen su texto con
  `getContent(lang)`. Ninguno importa un idioma fijo.
- Los ids de las secciones (`#tech`, `#about`, `#proyectos`, `#contacto`) son
  los mismos en los dos idiomas, a propósito: un solo juego de anclas que no
  se puede desincronizar del `nav`.
- El conmutador (`components/layout/language-switch.tsx`) es lo único que lleva
  `"use client"` de la cabecera: usa `usePathname` para llevarte a la página
  equivalente, no a la home.

## Comandos

```bash
docker compose --profile dev up dev   # desarrollo (el servicio tiene perfil)
npm run lint && npm run typecheck
```
