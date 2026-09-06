import { GradientButton } from "@/components/ui/buttons";
import { SectionText, SectionTitle } from "@/components/ui/section";
import { getContent, routes, type Lang } from "@/lib/site";

export function NotFoundView({ lang }: { lang: Lang }) {
  const t = getContent(lang).notFound;

  return (
    <section className="mx-auto grid min-h-[60svh] max-w-[1040px] place-items-center px-4 text-center sm:px-12">
      <div className="flex flex-col items-center">
        <p className="text-gradient text-[80px] leading-none font-extrabold">404</p>
        <SectionTitle className="mt-4 mx-auto">{t.title}</SectionTitle>
        <SectionText className="mx-auto">{t.text}</SectionText>
        <GradientButton href={routes[lang].home} className="mt-6 max-w-[280px]">
          {t.home}
        </GradientButton>
      </div>
    </section>
  );
}
