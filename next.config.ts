import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un server mínimo y autocontenido en .next/standalone,
  // que es lo que copia la etapa final del Dockerfile.
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Cabeceras de seguridad. El sitio es estático y no maneja sesiones, así que
   * lo que hay para proteger es al visitante: que el navegador no adivine tipos
   * MIME, que nadie lo embeba en un iframe y que una vez que entró por HTTPS no
   * vuelva a intentar por HTTP.
   *
   * No hay CSP todavía: el JSON-LD de `app/page.tsx` va por
   * `dangerouslySetInnerHTML` y `next/font` inyecta estilos, así que una CSP
   * estricta necesita nonces y eso obliga a renderizar dinámico. Queda pendiente.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // 2 años, con subdominios. Recién agregar `preload` cuando el
            // dominio lleve un tiempo sirviendo esto sin sobresaltos.
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // El sitio no usa ninguna de estas APIs.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
