import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { socialIcons } from "@/components/ui/icons";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "@/components/ui/section";
import { site, socials } from "@/lib/site";

/**
 * Cierre del sitio. La foto va sobre el halo radial del `ImageContainer`
 * original, que en la rama master estaba definido pero sin usar.
 */
export function Contact() {
  return (
    <Section id="contacto">
      <SectionDivider className="my-10" />

      <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionTitle>Hablemos</SectionTitle>
          <SectionText>
            ¿Tenés un proyecto en mente? Escribime y lo conversamos.
          </SectionText>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <GradientButton href={site.whatsapp} external>
              WhatsApp
            </GradientButton>
            <OutlineButton href={`mailto:${site.email}`}>
              {site.email}
            </OutlineButton>
          </div>

          <ul className="mt-8 flex list-none items-center gap-2">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="block rounded-full p-2 text-white transition duration-300 hover:scale-[1.2] hover:bg-surface-2"
                  >
                    <Icon className="h-[26px] w-[26px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal direction="left">
          <figure className="radial-glow flex flex-col items-center justify-center p-8 md:p-14">
            <Image
              src={site.avatar}
              alt={site.name}
              width={668}
              height={1002}
              sizes="(max-width: 768px) 12rem, 15rem"
              className="h-48 w-48 rounded-full border border-line object-cover md:h-60 md:w-60"
            />
            <figcaption className="mt-6 text-center">
              <SectionSubText>
                {site.name} — {site.role} de {site.location}.
              </SectionSubText>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <SectionDivider alt className="my-10" />
    </Section>
  );
}
