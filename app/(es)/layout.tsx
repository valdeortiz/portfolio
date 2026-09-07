import type { Metadata, Viewport } from "next";

import { SiteDocument } from "@/components/layout/document";
import { rootMetadata } from "@/lib/metadata";

import "../globals.css";

/**
 * Root layout del español, que vive en la raíz del dominio (`/`).
 * El inglés tiene el suyo en `app/(en)`: son dos root layouts, uno por idioma,
 * porque el `lang` del `<html>` no se puede cambiar desde un layout anidado.
 */
export const metadata: Metadata = rootMetadata("es");

export const viewport: Viewport = {
  themeColor: "#0f1624",
  colorScheme: "dark",
};

export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="es">{children}</SiteDocument>;
}
