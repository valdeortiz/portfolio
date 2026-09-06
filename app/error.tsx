"use client";

import { useEffect } from "react";

import { GradientButton } from "@/components/ui/buttons";
import { SectionText, SectionTitle } from "@/components/ui/section";

/**
 * Error boundary de la app. Sin esto, si algo revienta en cliente (el carrusel,
 * Lenis) el visitante ve la pantalla cruda de Next. Misma estética que el 404.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // En producción el mensaje viene ofuscado; `digest` es lo que permite
    // cruzarlo con el log del servidor.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto grid min-h-[60svh] max-w-[1040px] place-items-center px-4 text-center sm:px-12">
      <div className="flex flex-col items-center">
        <p className="text-gradient text-[80px] leading-none font-extrabold">Ups</p>
        <SectionTitle className="mt-4 mx-auto">Algo salió mal</SectionTitle>
        <SectionText className="mx-auto">
          Hubo un error al cargar esta parte del sitio.
        </SectionText>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-edge px-6 py-4 text-xl leading-5 font-semibold text-ink transition-colors duration-[400ms] hover:border-white hover:bg-white hover:text-canvas sm:w-fit"
          >
            Reintentar
          </button>
          <GradientButton href="/" className="max-w-[280px]">
            Volver al inicio
          </GradientButton>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-faint">Referencia: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
