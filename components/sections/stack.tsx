import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { skills } from "@/lib/site";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="En qué trabajo"
          description="Las herramientas que uso a diario, ordenadas por el peso que tienen en mi trabajo."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {skills.map((skill, index) => (
            <Reveal key={skill.area} delay={index * 0.08}>
              <article className="group h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium">{skill.area}</h3>
                  <span className="font-mono text-xs text-muted/50">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {skill.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-canvas/60 px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
