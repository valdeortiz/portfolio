# Portafolio — Valdemar Ortiz

Sitio personal construido con Next.js 16 (App Router), React 19, TypeScript,
Tailwind CSS v4 y Motion. Contenedorizado con Docker.

**Producción:** https://valdeortiz.com

---

## Stack

| Capa        | Tecnología                                            |
| ----------- | ----------------------------------------------------- |
| Framework   | Next.js 16 — App Router, React Server Components       |
| UI          | React 19 + TypeScript 5                                |
| Estilos     | Tailwind CSS v4 (tokens CSS-first en `app/globals.css`)|
| Animación   | Motion 13 + Lenis (scroll suave)                       |
| Contenedor  | Docker multi-etapa sobre `output: "standalone"`        |
| Calidad     | ESLint 9 (flat config) + `tsc --noEmit`                |

## Arrancar con Docker (no necesitás Node instalado)

```bash
# Desarrollo con hot reload → http://localhost:3000
docker compose up dev

# Producción, build optimizado → http://localhost:3000
docker compose up --build web
```

O sin compose:

```bash
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```

## Arrancar con Node (>= 20.9)

```bash
npm install
npm run dev
```

| Comando             | Qué hace                          |
| ------------------- | --------------------------------- |
| `npm run dev`       | Servidor de desarrollo            |
| `npm run build`     | Build de producción (standalone)  |
| `npm start`         | Sirve el build                    |
| `npm run lint`      | ESLint                            |
| `npm run typecheck` | Chequeo de tipos                  |

## Editar el contenido

Casi todo el texto del sitio vive en un único archivo: **`lib/site.ts`**
(datos personales, redes, stack, trayectoria). Cambiás ahí y se propaga a
todas las secciones, al SEO, al sitemap y a la imagen de Open Graph.

## Estructura

```
app/
  layout.tsx            Layout raíz: fuentes, metadata, header/footer, animaciones globales
  page.tsx              Home: Hero → Stack → Trayectoria → Contacto
  globals.css           Tokens de diseño y utilidades (Tailwind v4)
  condiciones/          Bases y condiciones (requerido por Google Play)
  opengraph-image.tsx   Imagen social generada en build
  sitemap.ts robots.ts  SEO
components/
  layout/               Header (grilla de 5 columnas) y Footer
  sections/             Hero, Stack, Timeline, Contact
  ui/                   Primitivas del diseño: Section, botones, íconos SVG
  motion/               SmoothScroll, Reveal, ScrollProgress, BackgroundAnimation
lib/site.ts             Fuente única de contenido
```

## Diseño

El lenguaje visual viene del portafolio original (rama `master`,
styled-components) y se reimplementó sobre Tailwind v4:

- Fondo azul noche `#0f1624` y tipografía Space Grotesk.
- Títulos con degradado blanco → blanco 66% (`text-gradient`).
- La tríada de marca turquesa → púrpura → naranja, que aparece en los
  divisores de sección, en los botones de dos capas y en la animación del hero.
- Botones cuyo degradado apagado se desvanece al pasar el mouse y deja ver
  el degradado brillante de atrás.

Los íconos son SVG inline (`components/ui/icons.tsx`): el diseño original
usaba `react-icons`, que se reemplazó para no arrastrar la dependencia.

## Animaciones

- **Scroll suave** con Lenis, integrado con los enlaces `#ancla`.
- **Barra de progreso** de lectura arriba de todo.
- **Reveals** al entrar en viewport (`components/motion/reveal.tsx`).
- **Partículas del hero**: SMIL puro (`animateMotion` + `mpath`), sin coste por
  frame en JS (`components/motion/background-animation.tsx`).
- **Carrusel de años** con scroll snap en mobile y puntos de navegación.

Todo respeta `prefers-reduced-motion`: si el sistema pide menos movimiento,
las animaciones se desactivan.

## Variables de entorno

Copiá `.env.example` a `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://valdeortiz.com
```

Se usa para metadata, canonical, sitemap y Open Graph.

## Historial

El portafolio anterior (Next 10 + styled-components) quedó archivado en el
tag `portfolio-legacy-2021`:

```bash
git show portfolio-legacy-2021
```
