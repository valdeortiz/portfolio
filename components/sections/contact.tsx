import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { site, socials } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 px-8 py-16 text-center sm:px-16 sm:py-24">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
            />

            <div className="relative">
              <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
                Contacto
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted text-pretty">
                Escribime y lo conversamos. Respondo por WhatsApp o correo.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Magnetic>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-canvas transition-shadow hover:shadow-[0_0_40px_-8px_var(--color-accent)]"
                  >
                    WhatsApp
                    <span aria-hidden>→</span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center rounded-full border border-line px-8 py-4 font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    {site.email}
                  </a>
                </Magnetic>
              </div>

              <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-sm text-muted">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
