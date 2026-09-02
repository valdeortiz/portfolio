"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

import { Magnetic } from "@/components/motion/magnetic";
import { Marquee } from "@/components/motion/marquee";
import { marquee, site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center pt-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponible para proyectos
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
            >
              <span className="text-gradient">{site.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl"
            >
              {site.role} de {site.location}. {site.description}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-canvas transition-shadow hover:shadow-[0_0_40px_-8px_var(--color-accent)]"
                >
                  Contactame
                  <span aria-hidden>→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center rounded-full border border-line px-7 py-3.5 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {site.email}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-accent/25 via-transparent to-cool/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface">
              <Image
                src={site.avatar}
                alt={site.name}
                width={668}
                height={1002}
                priority
                sizes="(max-width: 768px) 20rem, 24rem"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-surface to-transparent p-5 pt-16">
                <p className="font-mono text-xs tracking-widest text-accent uppercase">
                  {site.location}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Marquee items={marquee} />
      </div>
    </section>
  );
}
