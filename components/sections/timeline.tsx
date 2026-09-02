"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { timeline } from "@/lib/site";

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  // La línea vertical se dibuja a medida que la sección atraviesa el viewport.
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="trayectoria" className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Cómo llegué hasta acá"
          description="De los primeros proyectos de la carrera a sistemas con usuarios reales en producción."
        />

        <ol ref={ref} className="relative mt-16 ml-4 sm:ml-6">
          {/* Riel base + progreso animado encima. */}
          <div className="absolute top-2 bottom-2 left-0 w-px bg-line" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-0 w-px origin-top bg-linear-to-b from-accent to-cool"
          />

          {timeline.map((milestone, index) => (
            <li key={milestone.year} className="relative pb-14 pl-10 last:pb-0 sm:pl-14">
              <Reveal delay={index * 0.05} direction="right">
                <span
                  aria-hidden
                  className="absolute top-2 -left-[5px] h-[11px] w-[11px] rounded-full border-2 border-canvas bg-accent"
                />
                <p className="font-mono text-sm tracking-widest text-accent">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight">
                  {milestone.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  {milestone.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
