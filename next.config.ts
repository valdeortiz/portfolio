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
};

export default nextConfig;
