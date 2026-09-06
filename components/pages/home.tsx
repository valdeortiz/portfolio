import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { getContent, routes, site, socials, type Lang } from "@/lib/site";

/** Datos estructurados para que Google entienda de quién es el sitio. */
function personSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: getContent(lang).description,
    email: `mailto:${site.email}`,
    url: `${site.url}${routes[lang].home}`,
    image: `${site.url}${site.avatar}`,
    address: { "@type": "PostalAddress", addressCountry: "PY" },
    sameAs: socials.map((social) => social.href),
  };
}

/** La portada. Las dos rutas (`/` y `/en`) renderizan esto con distinto idioma. */
export function Home({ lang }: { lang: Lang }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(lang)) }}
      />
      <Hero lang={lang} />
      <Stack lang={lang} />
      <Timeline lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
