import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";
import { projects } from "@/lib/site";

/** Tarjeta: imagen arriba, título y descripción abajo. Todo el bloque es un link. */
function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const external = project.href.startsWith("http");

  return (
    <a
      href={project.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent sm:w-80"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-canvas">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 16rem, 20rem"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-[22px] text-muted sm:text-base sm:leading-7">
          {project.description}
        </p>
      </div>
    </a>
  );
}

/** Lista horizontal de proyectos, con scroll snap. */
export function Projects() {
  return (
    <Section id="proyectos">
      <SectionDivider className="my-10" />

      <Reveal>
        <SectionTitle>Proyectos</SectionTitle>
        <SectionText>
          De la idea al deploy
        </SectionText>
      </Reveal>

      <Reveal>
        <ul className="no-scrollbar -mx-4 mb-12 flex list-none snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-12 sm:px-12">
          {projects.map((project) => (
            <li key={project.title} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Reveal>

      <SectionDivider alt />
    </Section>
  );
}
