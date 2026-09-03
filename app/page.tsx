import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { site, socials } from "@/lib/site";

/** Datos estructurados para que Google entienda de quién es el sitio. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}${site.avatar}`,
  address: { "@type": "PostalAddress", addressCountry: "PY" },
  sameAs: socials.map((social) => social.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Stack />
      <Timeline />
      <Projects />
      <Contact />
    </>
  );
}
