import type { MetadataRoute } from "next";

import { routes, site } from "@/lib/site";

/**
 * Las cuatro URLs del sitio: portada y bases y condiciones, en los dos idiomas.
 * `alternates.languages` repite el `hreflang` de los `<head>`, que es donde
 * Google espera encontrar el par español/inglés.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const alternates = (page: "home" | "terms") => ({
    languages: {
      "es-PY": `${site.url}${routes.es[page]}`,
      en: `${site.url}${routes.en[page]}`,
    },
  });

  return [
    {
      url: `${site.url}${routes.es.home}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternates("home"),
    },
    {
      url: `${site.url}${routes.en.home}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("home"),
    },
    {
      url: `${site.url}${routes.es.terms}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("terms"),
    },
    {
      url: `${site.url}${routes.en.terms}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("terms"),
    },
  ];
}
