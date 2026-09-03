import Link from "next/link";

import { LogoMark, socialIcons } from "@/components/ui/icons";
import { nav, socials } from "@/lib/site";

/**
 * Cabecera del diseño original: una grilla de cinco columnas con la marca a la
 * izquierda, los enlaces al centro y las redes a la derecha. En pantallas
 * chicas se parte en dos filas (marca + redes arriba, enlaces abajo), así que
 * no hace falta menú hamburguesa ni JavaScript: es un Server Component.
 */
export function Header() {
  return (
    <header className="mx-auto grid w-full max-w-[1280px] grid-cols-5 grid-rows-[repeat(2,60px)] items-center gap-2 p-2.5 pt-5 sm:grid-rows-1 sm:gap-x-8">
      <div className="col-start-1 col-end-3 row-start-1 flex items-center sm:col-end-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink transition-colors hover:text-accent"
        >
          <LogoMark className="h-[30px] w-[30px] shrink-0" />
          <span className="text-lg font-semibold">Portfolio</span>
        </Link>
      </div>

      <nav
        aria-label="Principal"
        className="col-start-2 col-end-6 row-start-2 sm:col-start-2 sm:col-end-4 sm:row-start-1"
      >
        <ul className="flex list-none justify-around">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="p-2 text-base leading-8 text-muted transition-colors duration-[400ms] hover:text-white sm:p-0 sm:text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="col-start-4 col-end-6 row-start-1 flex items-center justify-around sm:col-start-5 sm:col-end-6">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full p-1 text-white transition duration-300 hover:scale-[1.2] hover:bg-surface-2 sm:p-2"
            >
              <Icon className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
            </a>
          );
        })}
      </div>
    </header>
  );
}
