import Link from "next/link";

import { socialIcons } from "@/components/ui/icons";
import { getContent, routes, site, socials, type Lang } from "@/lib/site";

/** Enlace de columna: se corre un poco a la derecha al pasar el mouse. */
function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "mb-2 flex items-center text-xs leading-5 text-muted transition duration-300 hover:translate-x-1.5 hover:text-white sm:mb-4 sm:text-base sm:leading-7 md:text-lg md:leading-[30px]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full max-w-[220px] flex-col">
      <h3 className="mb-2 text-[10px] leading-3 font-semibold tracking-wide uppercase text-faint sm:mb-4 sm:text-xs sm:leading-6">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <footer className="mx-auto mt-2.5 w-full max-w-[1040px] px-4 pt-5 pb-10 sm:px-12">
      <div className="grid grid-cols-[repeat(3,minmax(85px,220px))] gap-[5px] border-t border-line px-1 pt-8 pb-4 sm:gap-4 md:gap-10 lg:pt-10 lg:pb-7">
        <FooterColumn title={t.footer.phone}>
          <FooterLink href={site.whatsapp} external>
            {site.phone}
          </FooterLink>
        </FooterColumn>

        <FooterColumn title={t.footer.email}>
          <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t.footer.legal}>
          {/* Requisito de Google Play para las apps publicadas. */}
          <FooterLink href={routes[lang].terms}>{t.footer.terms}</FooterLink>
        </FooterColumn>
      </div>

      <div className="flex w-full max-w-[1040px] flex-col justify-between sm:flex-row">
        <div className="mb-8 flex flex-col items-center sm:mr-auto sm:mb-0 sm:flex-wrap sm:items-baseline">
          <p className="min-w-[100px] p-2.5 text-sm leading-[22px] tracking-[0.02em] text-faint sm:min-w-[280px] sm:text-base sm:leading-7 md:text-lg md:leading-[30px]">
            {t.footer.role}
          </p>
        </div>

        <nav
          aria-label={t.socialsLabel}
          className="flex flex-wrap items-center justify-center sm:pr-4"
        >
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full p-2 text-white transition duration-300 hover:scale-[1.2] hover:bg-surface-2"
              >
                <Icon className="h-[26px] w-[26px]" />
              </a>
            );
          })}
        </nav>
      </div>

      <p className="mt-6 px-2.5 text-xs text-faint">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
