import { BackgroundAnimation } from "@/components/motion/background-animation";
import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { Section, SectionText, SectionTitle } from "@/components/ui/section";
import { getContent, site, type Lang } from "@/lib/site";

/**
 * Hero del diseño original: texto a la izquierda y la animación de partículas
 * a la derecha, que en mobile pasa debajo.
 */
export function Hero({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <Section className="grid items-center gap-6 md:grid-cols-2">
      <div className="w-full">
        <SectionTitle as="h1" main>
          {site.name}
        </SectionTitle>

        <SectionText>
          {site.role}
          <br />
          {t.tagline}
          <br />
          {site.location}.
        </SectionText>

        <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center sm:gap-6 md:pb-20">
          <GradientButton href={site.whatsapp} external>
            {t.hero.contact}
          </GradientButton>
          <OutlineButton href={`mailto:${site.email}`}>{site.email}</OutlineButton>
        </div>
      </div>

      <BackgroundAnimation className="mx-auto w-full max-w-[380px] md:max-w-none" />
    </Section>
  );
}
