import { Reveal } from "@/components/motion/reveal";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";
import { getContent, sectionIds, type Lang } from "@/lib/site";

/** Sección de proyectos: carrusel horizontal con scroll automático. */
export function Projects({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <Section id={sectionIds.projects}>
      <SectionDivider className="my-10" />

      <Reveal>
        <SectionTitle>{t.work.title}</SectionTitle>
        <SectionText>{t.work.text}</SectionText>
      </Reveal>

      <ProjectsCarousel lang={lang} />

      <SectionDivider alt />
    </Section>
  );
}
