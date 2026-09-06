import { Reveal } from "@/components/motion/reveal";
import { skillIcons } from "@/components/ui/icons";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";
import { getContent, sectionIds, skills, type Lang } from "@/lib/site";

/**
 * Sección "Technologies" del diseño original: divisor, título, bajada y una
 * lista de áreas con ícono. En mobile cada ítem se acuesta (ícono a la
 * izquierda) y en pantallas grandes queda en columna dentro de una grilla.
 */
export function Stack({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <Section id={sectionIds.tech}>
      <SectionDivider className="my-10" />

      <Reveal>
        <SectionTitle>{t.stack.title}</SectionTitle>
        <SectionText>{t.stack.text}</SectionText>
      </Reveal>

      <Reveal>
        <ul className="my-8 flex list-none flex-col sm:my-16 sm:grid sm:grid-cols-3 sm:gap-6 md:gap-10 lg:my-[30px]">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.id];
            const { area, summary } = t.stack.areas[skill.id];

            return (
              <li
                key={skill.id}
                className="mb-3.5 flex max-w-[320px] flex-row sm:mb-0 sm:max-w-[203px] sm:flex-col md:max-w-[320px]"
              >
                <Icon className="h-[30px] w-[30px] shrink-0 text-accent" />

                <div className="ml-[18px] flex flex-col sm:ml-0 sm:mt-3">
                  <h3 className="mb-1 text-xl leading-7 font-bold tracking-[0.02em] text-white sm:mb-2 sm:text-2xl md:text-[28px] md:leading-8">
                    {area}
                  </h3>
                  <p className="text-sm leading-[22px] text-muted sm:text-base sm:leading-7 md:text-lg md:leading-[30px]">
                    {summary}
                  </p>
                  <ul className="mt-3 flex list-none flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-edge px-2.5 py-0.5 text-xs leading-5 text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <SectionDivider alt />
    </Section>
  );
}
