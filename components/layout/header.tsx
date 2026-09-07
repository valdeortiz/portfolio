import Link from "next/link";

import { LanguageSwitch } from "@/components/layout/language-switch";
import { LogoMark, socialIcons } from "@/components/ui/icons";
import { getContent, routes, socials, type Lang } from "@/lib/site";

/**
 * Cabecera del diseño original: la marca a la izquierda, los enlaces al centro
 * y las redes a la derecha. En pantallas chicas se parte en dos filas (marca +
 * redes arriba, enlaces abajo), así que no hace falta menú hamburguesa ni
 * JavaScript: es un Server Component (salvo el conmutador de idioma, que
 * necesita saber la ruta actual).
 *
 * Dos desvíos del original, los dos por lo mismo: la fila única no entra.
 *
 * 1. El original usaba cinco columnas iguales también en una fila. Con columnas
 *    iguales el bloque de la derecha tiene un quinto del ancho, y cuatro íconos
 *    sociales necesitan ~168px: por debajo de ~970px se montaban sobre los
 *    enlaces. Acá las columnas de los costados son `auto` (ocupan lo que
 *    necesitan) y el centro se queda con el resto.
 * 2. La fila única arranca en `md:` (768px) y no en `sm:` (640px), que es lo
 *    que pedía la traducción de breakpoints del original: a 640px la suma de
 *    marca + enlaces + redes + idioma no entra de ninguna forma, y las dos
 *    filas de mobile sí. Los breakpoints de adentro acompañan.
 */
export function Header({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <header className="mx-auto grid w-full max-w-[1280px] grid-cols-5 grid-rows-[repeat(2,60px)] items-center gap-2 p-2.5 pt-5 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:gap-x-8">
      <div className="col-start-1 col-end-3 row-start-1 flex items-center md:col-end-2">
        <Link
          href={routes[lang].home}
          className="flex items-center gap-2 text-ink transition-colors hover:text-accent"
        >
          <LogoMark className="h-[30px] w-[30px] shrink-0" />
          <span className="text-lg font-semibold">{t.brand}</span>
        </Link>
      </div>

      <nav
        aria-label={t.navLabel}
        className="col-start-2 col-end-6 row-start-2 md:col-start-2 md:col-end-3 md:row-start-1"
      >
        {/* Con 4 ítems, si no entran en una fila se acomodan en dos en vez de desbordar. */}
        <ul className="flex flex-wrap list-none justify-center gap-x-1 md:flex-nowrap md:justify-around md:gap-0">
          {t.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="p-2 text-sm leading-8 text-muted transition-colors duration-[400ms] hover:text-white md:p-0 md:text-base lg:text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* En mobile arranca en la columna 3 (la marca ocupa 1-2): hay que meter
          una cosa más que en el diseño original. */}
      <div className="col-start-3 col-end-6 row-start-1 flex items-center justify-end gap-1 md:col-start-3 md:col-end-4">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full p-1 text-white transition duration-300 hover:scale-[1.2] hover:bg-surface-2"
            >
              <Icon className="h-[22px] w-[22px] md:h-[26px] md:w-[26px]" />
            </a>
          );
        })}

        <LanguageSwitch lang={lang} />
      </div>
    </header>
  );
}
