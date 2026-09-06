"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { flagIcons } from "@/components/ui/icons";
import { getContent, otherLang, routes, type Lang } from "@/lib/site";

/**
 * Ruta equivalente a `pathname` en el idioma `target`. Cambiar de idioma no
 * debería devolverte a la home: si estabas en las bases y condiciones, caés en
 * las bases y condiciones del otro idioma. Es la única razón por la que esto
 * es un Client Component — necesita saber en qué página está.
 */
function counterpart(pathname: string, target: Lang): string {
  const source = routes[otherLang(target)];
  const destination = routes[target];

  // Sin la barra final, para que `/en/terms/` también matchee.
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  return path === source.terms ? destination.terms : destination.home;
}

/**
 * Conmutador de idioma de la cabecera: la bandera del idioma al que se va
 * (Estados Unidos para el inglés, Paraguay para el español) más su código.
 *
 * Es un enlace, no un botón: cada idioma tiene su propia URL, así que se puede
 * compartir, indexar y abrir en otra pestaña. Como cada idioma tiene su propio
 * root layout, Next hace una navegación completa; es lo esperado.
 */
export function LanguageSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const target = otherLang(lang);
  const Flag = flagIcons[target];
  const label = getContent(lang).switchTo;

  return (
    <Link
      href={counterpart(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
      className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2 py-1 text-white transition duration-300 hover:scale-110 hover:border-edge hover:bg-surface-2 md:px-2.5 md:py-1.5"
    >
      <Flag className="h-[13px] w-[20px] shrink-0 rounded-[2px] md:h-[15px] md:w-[22px]" />
      <span className="text-[11px] leading-none font-semibold tracking-wide uppercase md:text-xs">
        {target}
      </span>
    </Link>
  );
}
