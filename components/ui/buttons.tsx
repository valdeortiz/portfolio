import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

/**
 * El botón del diseño original estaba hecho de dos capas: una de atrás con el
 * degradado brillante (cyan → violeta) y una de adelante más apagada
 * (turquesa → púrpura) que se desvanece al pasar el mouse.
 *
 * Acá se logra lo mismo sin duplicar el texto: el fondo del enlace es la capa
 * brillante y un `span` con `-z-10` hace de capa de adelante. El `isolate`
 * crea el contexto de apilamiento para que ese `span` quede sobre el fondo
 * propio del enlace pero debajo del contenido.
 */
type GradientButtonProps = {
  children: ReactNode;
  href: string;
  /** Abre en otra pestaña (con rel seguro). */
  external?: boolean;
  /** Variante naranja del diseño original. */
  alt?: boolean;
  className?: string;
};

export function GradientButton({
  children,
  href,
  external,
  alt,
  className: extraClassName,
}: GradientButtonProps) {
  const className = clsx(
    "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full bg-linear-to-l font-semibold text-white transition-shadow duration-500",
    "active:shadow-[inset_0_2px_1px_rgb(46_49_55_/_0.15),inset_0_0_4px_rgb(20_20_55_/_0.3)]",
    alt
      ? "h-[52px] w-[150px] from-flame to-violet text-xl"
      : "h-8 w-full from-cyan to-violet text-sm sm:h-12 sm:w-[184px] sm:text-base md:h-16 md:w-[262px] md:text-2xl",
    extraClassName,
  );

  const content = (
    <>
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 -z-10 bg-linear-to-l transition-opacity duration-[400ms] ease-in-out group-hover:opacity-0",
          alt ? "from-flame to-purple" : "from-teal to-purple",
        )}
      />
      {children}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={className}
    >
      {content}
    </a>
  );
}

/** `SecondaryBtn` del diseño original: píldora de contorno que se invierte. */
export function OutlineButton({
  children,
  href,
  external,
  className,
}: {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={clsx(
        "inline-flex w-full items-center justify-center rounded-full border border-edge px-4 py-2 text-sm leading-4 font-semibold text-ink transition-colors duration-[400ms]",
        "hover:border-white hover:bg-white hover:text-canvas",
        "sm:w-fit sm:px-6 sm:py-4 sm:text-xl sm:leading-5",
        className,
      )}
    >
      {children}
    </a>
  );
}
