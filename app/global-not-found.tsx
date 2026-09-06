import type { Metadata, Viewport } from "next";

import { SiteDocument } from "@/components/layout/document";
import { NotFoundView } from "@/components/pages/not-found";
import { DEFAULT_LANG, getContent, site } from "@/lib/site";

import "./globals.css";

/**
 * 404 de las URLs que no matchean ninguna ruta.
 *
 * Tiene que ser `global-not-found` y no un `not-found.tsx` común: al haber dos
 * root layouts (uno por idioma), Next no puede elegir cuál usar para el 404
 * global y cae en su pantalla pelada por defecto. Este archivo renderiza el
 * documento entero por su cuenta y arregla eso.
 *
 * Va en español, que es el idioma por defecto: si la URL no existe, no hay de
 * dónde deducir el idioma del visitante.
 */
export const metadata: Metadata = {
  title: `${getContent(DEFAULT_LANG).notFound.title} — ${site.name}`,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0f1624",
  colorScheme: "dark",
};

export default function GlobalNotFound() {
  return (
    <SiteDocument lang={DEFAULT_LANG}>
      <NotFoundView lang={DEFAULT_LANG} />
    </SiteDocument>
  );
}
