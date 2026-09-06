import { Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { getContent, type Lang } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/**
 * El documento completo, `<html>` incluido.
 *
 * Cada idioma tiene su propio root layout (`app/(es)` y `app/(en)`) porque el
 * atributo `lang` del `<html>` sólo se puede fijar ahí, y tiene que decir la
 * verdad: es lo que usan los lectores de pantalla para elegir la pronunciación.
 * Los dos layouts son este mismo componente con distinto `lang`.
 */
export function SiteDocument({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const t = getContent(lang);

  return (
    <html lang={t.htmlLang} className={spaceGrotesk.variable}>
      <body className="min-h-svh font-sans">
        <SmoothScroll />
        <ScrollProgress />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
        >
          {t.skipToContent}
        </a>
        <Header lang={lang} />
        <main id="contenido">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
