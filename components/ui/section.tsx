import type { ReactNode } from "react";
import clsx from "clsx";

/**
 * Primitivas de maquetación del diseño original (`styles/GlobalComponents`
 * en la rama master), traducidas a Tailwind.
 *
 * Nota sobre breakpoints: el diseño original usaba media queries `max-width`
 * (sm ≤640, md ≤768). Acá van al revés, mobile-first:
 *   master sm      → base
 *   master md      → `sm:`
 *   master default → `md:`
 */

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Contenedor de 1040px con el padding del diseño original. */
export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative mx-auto w-full max-w-[1040px] scroll-mt-8 px-4 pt-4 sm:px-12 sm:pt-6 md:pt-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

type SectionTitleProps = {
  children: ReactNode;
  /** Título principal del hero: un escalón más grande que el resto. */
  main?: boolean;
  /** El hero necesita `h1`; el resto de las secciones son `h2`. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({
  children,
  main,
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  return (
    <Tag
      className={clsx(
        "text-gradient mb-2 w-max max-w-full font-extrabold sm:mb-3 md:mb-4",
        main
          ? "pt-4 pb-2 text-[28px] leading-8 sm:pt-10 sm:pb-3 sm:text-[56px] sm:leading-[56px] md:pt-14 md:pb-4 md:text-[65px] md:leading-[72px]"
          : "text-[32px] leading-10 sm:text-[48px] sm:leading-[48px] md:text-[56px] md:leading-[56px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Bajada de sección: el texto grande y tenue bajo cada título. */
export function SectionText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "max-w-[800px] pb-4 text-base leading-6 font-light text-faint sm:pb-6 sm:text-xl sm:leading-8 md:pb-9 md:text-2xl md:leading-10",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Variante más chica y más legible, para párrafos secundarios. */
export function SectionSubText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "max-w-[800px] text-sm leading-[22px] font-light text-muted sm:text-base sm:leading-[25px] md:text-lg md:leading-8",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * La barrita de degradado que separa secciones. `alt` la pinta naranja,
 * igual que el `colorAlt` del diseño original.
 */
export function SectionDivider({
  alt,
  className,
}: {
  alt?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={clsx(
        "h-0.5 w-8 rounded-[10px] bg-linear-to-l sm:h-1 sm:w-12 md:h-1.5 md:w-16",
        alt ? "from-flame to-purple" : "from-teal to-purple",
        className,
      )}
    />
  );
}
