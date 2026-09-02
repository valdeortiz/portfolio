import Link from "next/link";
import { site, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm text-accent">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.role} de {site.location}. {site.tagline}
            </p>
          </div>

          <nav aria-label="Redes">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex flex-col"
                  >
                    <span className="text-muted transition-colors group-hover:text-accent">
                      {social.label}
                    </span>
                    <span className="font-mono text-xs text-muted/60">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/60 pt-6 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <Link href="/condiciones" className="transition-colors hover:text-accent">
            Bases y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
