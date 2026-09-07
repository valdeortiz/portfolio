import type { Metadata } from "next";

import { getContent, routes, site, type Lang } from "@/lib/site";

type Page = "home" | "terms";

/**
 * `hreflang`: le dice a los buscadores que estas dos URLs son la misma página
 * en dos idiomas, y no contenido duplicado. `x-default` apunta al español, que
 * es el que vive en la raíz del dominio.
 */
function languages(page: Page) {
  return {
    "es-PY": routes.es[page],
    en: routes.en[page],
    "x-default": routes.es[page],
  };
}

/** Metadatos comunes a todas las páginas de un idioma. Van en el root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const t = getContent(lang);
  const title = `${site.name} — ${site.role}`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s — ${site.name}` },
    description: t.description,
    keywords: [...t.keywords],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      url: `${site.url}${routes[lang].home}`,
      siteName: site.name,
      title,
      description: t.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Canonical y alternates de la portada. */
export function homeMetadata(lang: Lang): Metadata {
  return {
    alternates: {
      canonical: routes[lang].home,
      languages: languages("home"),
    },
  };
}

/** Las bases y condiciones: mismo texto legal, una URL por idioma. */
export function termsMetadata(lang: Lang): Metadata {
  const t = getContent(lang).terms;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: routes[lang].terms,
      languages: languages("terms"),
    },
    robots: { index: true, follow: true },
  };
}
