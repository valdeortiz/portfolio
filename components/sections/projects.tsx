import { Reveal } from "@/components/motion/reveal";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";

/** Sección de proyectos: carrusel horizontal con scroll automático. */
export function Projects() {
  return (
    <Section id="proyectos">
      <SectionDivider className="my-10" />

      <Reveal>
        <SectionTitle>Proyectos</SectionTitle>
        <SectionText>De la idea al deploy</SectionText>
      </Reveal>

      <ProjectsCarousel />

      <SectionDivider alt />
    </Section>
  );
}
