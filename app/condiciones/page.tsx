import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bases y Condiciones de Uso",
  description:
    "Bases y condiciones de uso de las aplicaciones publicadas por " + site.name + ".",
  robots: { index: true, follow: true },
};

/** Texto legal de las apps publicadas en Google Play. */
const terms = [
  {
    title: "Introducción",
    body: "Bienvenido(a), una aplicación diseñada para brindarte las herramientas sin la necesidad de recoger datos sensibles.",
  },
  {
    title: "Aceptación de Términos",
    body: "Al descargar, instalar y utilizar esta aplicación, aceptas cumplir con los términos y condiciones aquí establecidos. Si no estás de acuerdo con estos términos, por favor, abstente de utilizar la aplicación.",
  },
  {
    title: "Recolección de Datos",
    body: "Esta aplicación ha sido diseñada para no recoger datos sensibles del usuario. No se solicitarán ni almacenarán información personal identificable, como nombres, direcciones, números de teléfono, información financiera u otros datos sensibles.",
  },
  {
    title: "Datos Recopilados",
    body: "La aplicación podrá recopilar datos no personales y anónimos, como información sobre el rendimiento de la aplicación, preferencias de uso y estadísticas generales con el único propósito de mejorar la calidad y funcionalidad del servicio.",
  },
  {
    title: "Privacidad y Seguridad",
    body: "La seguridad y privacidad de tus datos son nuestra prioridad. Implementamos medidas de seguridad estándar de la industria para proteger cualquier información recopilada. Sin embargo, ten en cuenta que la transmisión de datos a través de internet nunca es completamente segura, y aunque nos esforzamos por proteger tu información, no podemos garantizar la seguridad absoluta.",
  },
  {
    title: "Uso de Cookies",
    body: "Esta aplicación puede utilizar cookies u otras tecnologías de seguimiento para mejorar la experiencia del usuario. Estas cookies no recopilarán información personal y puedes gestionar su uso a través de la configuración de tu dispositivo.",
  },
  {
    title: "Actualizaciones y Cambios",
    body: "Nos reservamos el derecho de realizar cambios en estas bases y condiciones en cualquier momento. Te recomendamos revisar periódicamente esta sección para estar al tanto de las actualizaciones.",
  },
  {
    title: "Responsabilidad del Usuario",
    body: "Al utilizar la aplicación, aceptas ser el único responsable de cualquier información proporcionada voluntariamente. La aplicación no se hace responsable por el mal uso de datos personales que hayas decidido compartir voluntariamente con terceros, ya que no se espera ni se solicita dicha información.",
  },
  {
    title: "Contacto",
    body: `Si tienes alguna pregunta o inquietud sobre estas bases y condiciones, o sobre la privacidad y seguridad de la aplicación, no dudes en ponerte en contacto con nosotros en ${site.email}.`,
  },
];

export default function CondicionesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 pb-20 sm:px-12">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← Volver
      </Link>

      <h1 className="text-gradient mt-8 text-4xl font-extrabold sm:text-5xl">
        Bases y Condiciones de Uso
      </h1>
      <p className="mt-4 text-muted">
        Aplican a las aplicaciones móviles publicadas por {site.name}.
      </p>

      <ol className="mt-12 space-y-10">
        {terms.map((term, index) => (
          <li key={term.title}>
            <h2 className="text-xl font-medium">
              <span className="mr-2 text-accent">{index + 1}.</span>
              {term.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{term.body}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
