import { GradientButton } from "@/components/ui/buttons";
import { SectionText, SectionTitle } from "@/components/ui/section";

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[60svh] max-w-[1040px] place-items-center px-4 text-center sm:px-12">
      <div className="flex flex-col items-center">
        <p className="text-gradient text-[80px] leading-none font-extrabold">404</p>
        <SectionTitle className="mt-4 mx-auto">Esta página no existe</SectionTitle>
        <SectionText className="mx-auto">
          Puede que el enlace haya cambiado.
        </SectionText>
        <GradientButton href="/" className="mt-6 max-w-[280px]">
          Volver al inicio
        </GradientButton>
      </div>
    </section>
  );
}
