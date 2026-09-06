"use client";

import { useEffect } from "react";

import { GradientButton } from "@/components/ui/buttons";
import { SectionText, SectionTitle } from "@/components/ui/section";
import { getContent, routes, type Lang } from "@/lib/site";

/**
 * Cuerpo del error boundary. Sin esto, si algo revienta en cliente (el
 * carrusel, Lenis) el visitante ve la pantalla cruda de Next. Misma estética
 * que el 404.
 */
export function ErrorView({
  lang,
  error,
  reset,
}: {
  lang: Lang;
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = getContent(lang).error;

  useEffect(() => {
    // En producción el mensaje viene ofuscado; `digest` es lo que permite
    // cruzarlo con el log del servidor.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto grid min-h-[60svh] max-w-[1040px] place-items-center px-4 text-center sm:px-12">
      <div className="flex flex-col items-center">
        <p className="text-gradient text-[80px] leading-none font-extrabold">{t.heading}</p>
        <SectionTitle className="mt-4 mx-auto">{t.title}</SectionTitle>
        <SectionText className="mx-auto">{t.text}</SectionText>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-edge px-6 py-4 text-xl leading-5 font-semibold text-ink transition-colors duration-[400ms] hover:border-white hover:bg-white hover:text-canvas sm:w-fit"
          >
            {t.retry}
          </button>
          <GradientButton href={routes[lang].home} className="max-w-[280px]">
            {getContent(lang).notFound.home}
          </GradientButton>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-faint">
            {t.reference}: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
