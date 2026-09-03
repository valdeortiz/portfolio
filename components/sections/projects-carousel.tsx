"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useReducedMotion,
} from "motion/react";

import { projects } from "@/lib/site";

/** Velocidad del auto-scroll, en píxeles por segundo. */
const SPEED = 45;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Tarjeta: imagen arriba, título y descripción abajo.
 * Si el proyecto tiene href válido, todo el bloque es un link;
 * si el href está vacío o es "#", se renderiza como bloque no clickeable.
 */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const href = project.href.trim();
  const hasLink = href !== "" && href !== "#";
  const external = href.startsWith("http");

  const className =
    "group flex h-full w-64 shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 sm:w-80";

  const content = (
    <>
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
        <h3 className="text-lg font-bold text-ink sm:text-xl">{project.title}</h3>
        <p className="mt-2 text-sm leading-[22px] text-muted sm:text-base sm:leading-7">
          {project.description}
        </p>
      </div>
    </>
  );

  if (!hasLink) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${className} hover:border-accent`}
    >
      {content}
    </a>
  );
}

/**
 * Carrusel horizontal de proyectos. Se desplaza solo en bucle infinito y,
 * mientras el cursor está encima, se pausa y se puede recorrer con la rueda
 * del mouse (o arrastrando en pantallas táctiles). Las tarjetas entran
 * escalonadas cuando la sección aparece. Respeta `prefers-reduced-motion`:
 * ahí queda como una lista con scroll manual y snap.
 */
export function ProjectsCarousel() {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const inView = useInView(scrollerRef, { margin: "-80px" });
  const [started, setStarted] = useState(false);

  // Ancho de un ciclo (una copia de la lista); el scroll vive centrado en la
  // copia del medio para poder ir y volver sin topar con un borde.
  const cycleRef = useRef(0);
  const centeredRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[projects.length] as HTMLElement | undefined;
      const cycle = first && second ? second.offsetLeft - first.offsetLeft : 0;
      const prev = cycleRef.current;
      cycleRef.current = cycle;
      if (cycle <= 0) return;

      if (!centeredRef.current) {
        scroller.scrollLeft = cycle;
        centeredRef.current = true;
      } else if (prev > 0 && prev !== cycle) {
        // En un resize, conservar la posición relativa dentro del ciclo.
        const frac = (((scroller.scrollLeft % prev) + prev) % prev) / prev;
        scroller.scrollLeft = cycle + frac * cycle;
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  // El auto-scroll y la entrada arrancan juntos, la primera vez que se ve.
  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  // Rueda del mouse -> scroll horizontal. Listener nativo (no pasivo) para
  // poder cancelar el evento; `data-lenis-prevent` evita que Lenis lo tome.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || reduceMotion) return;

    const onWheel = (event: WheelEvent) => {
      const raw =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      if (raw === 0) return;
      // Normalizar: algunas ruedas informan líneas o páginas, no píxeles.
      const unit =
        event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? scroller.clientWidth : 1;
      scroller.scrollLeft += raw * unit;
      event.preventDefault();
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, [reduceMotion]);

  useAnimationFrame((_, delta) => {
    const scroller = scrollerRef.current;
    const cycle = cycleRef.current;
    if (!scroller || cycle <= 0) return;

    if (!reduceMotion && !paused && started && inView) {
      // Cap del delta: si la pestaña estuvo en segundo plano, evita un salto.
      scroller.scrollLeft += (SPEED * Math.min(delta, 40)) / 1000;
    }

    // Mantener la vista dentro de la copia del medio, [cycle, 2·cycle), sea
    // por el auto-scroll o por el scroll manual. Las copias son idénticas,
    // así que reencuadrar por un múltiplo de `cycle` no se nota.
    const sl = scroller.scrollLeft;
    if (sl < cycle || sl >= cycle * 2) {
      const wrapped = (((sl - cycle) % cycle) + cycle) % cycle;
      scroller.scrollLeft = cycle + wrapped;
    }
  });

  if (reduceMotion) {
    return (
      <ul className="no-scrollbar -mx-4 mb-12 flex list-none snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-12 sm:px-12">
        {projects.map((project) => (
          <li key={project.title} className="flex snap-start">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    );
  }

  // La lista va 3 veces: la copia del medio es la que se ve, con una de
  // reserva a cada lado para poder scrollear en los dos sentidos sin cortes.
  const middleStart = projects.length;
  const loop = [...projects, ...projects, ...projects];

  return (
    <div
      ref={scrollerRef}
      data-lenis-prevent
      className="no-scrollbar edge-fade-x -mx-4 mb-12 overflow-x-auto overscroll-x-contain sm:-mx-12"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <ul
        ref={trackRef}
        className="flex w-max list-none items-stretch gap-5 px-4 sm:px-12"
      >
        {loop.map((project, i) => {
          // Solo la copia del medio anima su entrada; las de los costados van
          // fuera del árbol de accesibilidad (no se tabulan ni se leen de más).
          const isMiddle = i >= middleStart && i < middleStart + projects.length;
          const hidden = { opacity: 0, scale: 0.92 };
          const shown = { opacity: 1, scale: 1 };

          return (
            <motion.li
              key={`${project.title}-${i}`}
              className="flex"
              inert={isMiddle ? undefined : true}
              initial={isMiddle ? hidden : false}
              animate={isMiddle ? (started ? shown : hidden) : undefined}
              transition={{
                duration: 0.6,
                delay: isMiddle ? (i - middleStart) * 0.1 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
