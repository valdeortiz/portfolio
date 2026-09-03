"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import clsx from "clsx";

import {
  Section,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";
import { timeline } from "@/lib/site";

const TOTAL = timeline.length;

/** La línea que sale de cada año, difuminándose hacia la derecha. */
function YearLine() {
  // `useId` evita que los cinco degradados compartan el mismo id en el DOM.
  const gradientId = useId();

  return (
    <svg
      width="208"
      height="6"
      viewBox="0 0 208 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      className="ml-4 w-full overflow-visible sm:ml-[21px] sm:line-fade"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.33"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0.5"
          x2="208"
          y2="0.500295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.79478" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Carrusel de años del diseño original. En pantallas grandes se ve la línea de
 * tiempo completa; en mobile se convierte en un carrusel con scroll snap y
 * puntos de navegación.
 */
export function Timeline() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  const scrollTo = (left: number) => {
    carouselRef.current?.scrollTo({
      left,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleDotClick = (index: number) => {
    const node = carouselRef.current;
    if (!node) return;
    scrollTo(Math.floor(node.scrollWidth * 0.7 * (index / TOTAL)));
  };

  const handleScroll = () => {
    const node = carouselRef.current;
    if (!node) return;
    const index = Math.round((node.scrollLeft / (node.scrollWidth * 0.7)) * TOTAL);
    // El cálculo puede pasarse de rango en los extremos del scroll.
    setActive(Math.min(Math.max(index, 0), TOTAL - 1));
  };

  // Al cambiar el tamaño de la ventana se vuelve al inicio: si no, veníamos de
  // una pantalla chica y parte del contenido queda tapado.
  useEffect(() => {
    const handleResize = () => carouselRef.current?.scrollTo({ left: 0 });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>Cómo llegué hasta acá</SectionTitle>
      <SectionText>
        De los primeros proyectos de la carrera a sistemas con usuarios reales en
        producción.
      </SectionText>

      <ul
        ref={carouselRef}
        onScroll={handleScroll}
        className="no-scrollbar mb-2 flex touch-pan-x snap-x snap-mandatory list-none overflow-x-scroll bg-canvas sm:mb-20 sm:touch-auto sm:snap-none sm:justify-between sm:overflow-visible"
      >
        {timeline.map((milestone, index) => (
          <li
            key={milestone.year}
            className={clsx(
              "flex min-w-min sm:min-w-0",
              // El último nodo se estira para que el ítem final pueda quedar
              // alineado a la izquierda al hacer snap.
              index === TOTAL - 1 && "min-w-[120%] sm:min-w-0",
            )}
          >
            <div
              className={clsx(
                "ml-8 min-w-[120px] snap-start rounded-[3px] bg-surface p-1 transition-opacity",
                "sm:ml-0 sm:min-w-0 sm:max-w-[124px] sm:bg-canvas sm:p-0 sm:opacity-100",
                "md:max-w-[196px]",
                active === index ? "opacity-100" : "opacity-50",
              )}
            >
              <h3 className="text-gradient-tight mb-1 flex items-center text-base leading-6 font-bold tracking-[0.02em] sm:text-xl sm:leading-7 md:mb-2 md:text-2xl md:leading-8">
                {milestone.year}
                <YearLine />
              </h3>
              <p className="pr-0 text-[10px] leading-4 tracking-[0.02em] text-muted sm:pr-8 sm:text-xs sm:leading-[18px] md:pr-4 md:text-sm md:leading-[22px]">
                <span className="block font-semibold text-ink">
                  {milestone.title}
                </span>
                {milestone.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Navegación por puntos: sólo hace falta cuando el carrusel scrollea. */}
      <div className="mb-12 flex w-72 sm:hidden">
        {timeline.map((milestone, index) => (
          <button
            key={milestone.year}
            type="button"
            onClick={() => handleDotClick(index)}
            aria-label={`Ir a ${milestone.year}`}
            aria-current={active === index}
            className={clsx(
              "box-border cursor-pointer border-none bg-transparent p-1 transition-transform",
              active === index ? "scale-[1.6] opacity-100" : "opacity-30",
            )}
          >
            <span className="m-auto block h-[3px] w-[3px] rounded-[10px] bg-white" />
          </button>
        ))}
      </div>
    </Section>
  );
}
