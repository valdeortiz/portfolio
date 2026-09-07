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
docker compose --profile dev up dev

# Stack de producción completo (Next + Caddy) → https://localhost
docker compose up --build
```

Sin dominio configurado, Caddy sirve `localhost` con su CA interna: el
certificado no lo firma nadie conocido, así que el navegador va a advertir y
`curl` necesita `-k`. Es el mismo camino que en producción, sólo que sin DNS.

Para probar sólo la app, sin proxy:

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
  (es)/                 Español, en la raíz del dominio
    layout.tsx          Root layout <html lang="es">
    page.tsx            /            Hero → Stack → Trayectoria → Proyectos → Contacto
    condiciones/        /condiciones Bases y condiciones (requerido por Google Play)
    opengraph-image.tsx Imagen social generada en build
    error.tsx           Error boundary
  (en)/                 Inglés, bajo /en
    layout.tsx          Root layout <html lang="en">
    en/page.tsx         /en
    en/terms/           /en/terms
    en/opengraph-image.tsx
    en/error.tsx
  global-not-found.tsx  404 de las URLs que no existen (en los dos grupos)
  globals.css           Tokens de diseño y utilidades (Tailwind v4)
  sitemap.ts robots.ts  SEO
components/
  layout/               Header, Footer, LanguageSwitch y el documento compartido
  pages/                Cuerpo de cada página, parametrizado por idioma
  sections/             Hero, Stack, Timeline, Projects, Contact
  ui/                   Primitivas del diseño: Section, botones, íconos SVG
  motion/               SmoothScroll, Reveal, ScrollProgress, BackgroundAnimation
  og-image.tsx          Imagen de Open Graph compartida por los dos idiomas
lib/site.ts             Fuente única de contenido (neutro + texto por idioma)
lib/metadata.ts         Metadata, canonical y hreflang de cada página
```

## Idiomas

El sitio está en español e inglés, cada uno con su propia URL:

| | Español | Inglés |
| --- | --- | --- |
| Portada | `/` | `/en` |
| Bases y condiciones | `/condiciones` | `/en/terms` |

Se cambia de idioma con la bandera de la cabecera, que lleva a la página
equivalente en el otro idioma (no a la portada). Cada URL declara su
`hreflang`, su `canonical` y su propia imagen de Open Graph, así que las dos
versiones se indexan por separado y se pueden compartir sueltas.

El español vive en la raíz porque es la URL ya indexada. Son dos root layouts
—uno por grupo— en vez de un segmento `[lang]`: es la única forma de que el
atributo `lang` del `<html>` diga la verdad en cada idioma. El precio es que
pasar de un idioma al otro recarga la página entera.

Para traducir algo, se edita `lib/site.ts`: el tipo `Content` obliga a que los
dos idiomas tengan las mismas claves, así que no se puede olvidar una.

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

Copiá `.env.example` a `.env`:

| Variable               | Para qué                                        |
| ---------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Metadata, canonical, sitemap y Open Graph        |
| `SITE_DOMAIN`          | Dominio que atiende Caddy                        |
| `SITE_WWW`             | Variante con www, redirige al anterior           |

`NEXT_PUBLIC_SITE_URL` es una variable `NEXT_PUBLIC_*`: Next la **inlinea en
build-time**, no se lee en runtime. El `docker-compose.yml` la pasa como `args`
del build justo por eso. Cambiarla exige reconstruir la imagen, no basta con
reiniciar el contenedor.

## Deploy en el VPS

Requisitos: Docker con el daemon habilitado en el arranque
(`systemctl enable docker`) y los registros `A` de `valdeortiz.com` y
`www.valdeortiz.com` apuntando a la IP del server **antes** del primer
`up` — si no, el challenge HTTP-01 de Let's Encrypt falla.

```bash
git clone git@github.com:valdeortiz/portfolio.git && cd portfolio
cp .env.example .env          # y completar SITE_DOMAIN / SITE_WWW
docker compose up -d --build
```

Actualizar:

```bash
cd ~/portfolio && git pull && docker compose up -d --build
docker image prune -f && docker builder prune -f

```

Caddy termina TLS y renueva los certificados solo. `web` no publica puertos al
host: sale a internet únicamente a través del proxy. Los certificados viven en
el volumen `caddy-data` — si se borra, cada redeploy vuelve a pedirlos y Let's
Encrypt aplica rate limit.

## Historial

El portafolio anterior (Next 10 + styled-components) quedó archivado en el
tag `portfolio-legacy-2021`:

```bash
git show portfolio-legacy-2021
```
