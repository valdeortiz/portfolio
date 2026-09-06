import type { SkillIconName, SocialIconName } from "@/components/ui/icons";

/**
 * Fuente única de verdad del contenido del sitio.
 * Editá este archivo para actualizar el portafolio: los componentes leen de acá.
 *
 * El sitio es bilingüe. El archivo está partido en dos mitades:
 *
 * 1. Lo que NO cambia con el idioma (nombre, contacto, redes, imágenes,
 *    enlaces, íconos, ids de sección). Vive suelto, arriba.
 * 2. Lo que SÍ cambia: todo el texto, dentro de `content`, con una entrada
 *    por idioma. El tipo `Content` obliga a que ninguno quede incompleto:
 *    si agregás una clave en `es`, TypeScript la exige también en `en`.
 */

export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** El español es el idioma por defecto: vive en la raíz del dominio. */
export const DEFAULT_LANG: Lang = "es";

/** Rutas equivalentes en cada idioma, para el conmutador y los `hreflang`. */
export const routes = {
  es: { home: "/", terms: "/condiciones" },
  en: { home: "/en", terms: "/en/terms" },
} as const satisfies Record<Lang, { home: string; terms: string }>;

export const site = {
  name: "Valdemar Ortiz",
  shortName: "Valdemar Ortiz",
  role: "Software Developer",
  location: "Asunción, Paraguay",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://valdeortiz.com",
  email: "valdeortiz15@gmail.com",
  phone: "+595 971 921 474",
  whatsapp: "https://wa.me/595971921474",
  avatar: "/images/profile.jpeg",
} as const;

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: SocialIconName;
};

export const socials: readonly Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/valdeortiz",
    handle: "@valdeortiz",
    icon: "github",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/valdeortiz",
    handle: "@valdeortiz",
    icon: "gitlab",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/valdeortiz/",
    handle: "in/valdeortiz",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    handle: site.phone,
    icon: "whatsapp",
  },
];

/**
 * Los ids de las secciones son los mismos en los dos idiomas: así el ancla
 * `#proyectos` sigue funcionando en los links que ya andan dando vueltas, y no
 * hay dos juegos de ids que puedan quedar desincronizados con el `nav`.
 */
export const sectionIds = {
  tech: "tech",
  about: "about",
  projects: "proyectos",
  contact: "contacto",
} as const;

/** El id de cada área es también el nombre de su ícono. */
export type SkillId = SkillIconName;

/** De cada skill, lo neutro: el ícono y la lista de tecnologías. */
export const skills: readonly { id: SkillId; items: readonly string[] }[] = [
  { id: "backend", items: ["Python", "Django", "FastAPI"] },
  { id: "mobile", items: ["Flutter", "Dart", "Google Play", "iOS"] },
  { id: "frontend", items: ["React", "Next.js", "Angular", "TypeScript"] },
  { id: "data", items: ["PostgreSQL", "MongoDB", "Docker", "Linux"] },
];

export type ProjectId = "mas" | "basa" | "pagsa" | "claro" | "telefonica";

/** De cada proyecto, lo neutro: la imagen y el enlace. */
export const projects: readonly { id: ProjectId; image: string; href: string }[] = [
  { id: "mas", image: "/images/mas.jpeg", href: "https://www.mastarjeta.com.py/" },
  { id: "basa", image: "/images/basa.png", href: "https://www.bancobasa.com.py/" },
  { id: "pagsa", image: "/images/pagsa.jpeg", href: "#" },
  { id: "claro", image: "/images/claro.png", href: "https://www.clarovideo.com/" },
  { id: "telefonica", image: "/images/telefonica.jpg", href: "#" },
];

export type Milestone = {
  year: string;
  title: string;
  detail: string;
};

type Text = { title: string; text: string };

/** Todo lo traducible. Una entrada por idioma, misma forma en las dos. */
export type Content = {
  /** Valor del atributo `lang` del `<html>`. */
  htmlLang: string;
  /** Valor de `og:locale`. */
  ogLocale: string;
  /** Nombre del idioma en su propio idioma, para el conmutador. */
  langName: string;
  tagline: string;
  /**
   * Alimenta el <meta description>, el Open Graph y la Twitter card: es el
   * texto que se ve en Google y en la preview al compartir el link.
   * Conviene mantenerlo entre 120 y 160 caracteres.
   */
  description: string;
  keywords: readonly string[];
  brand: string;
  skipToContent: string;
  navLabel: string;
  socialsLabel: string;
  /** Etiqueta accesible del botón que lleva al OTRO idioma. */
  switchTo: string;
  nav: readonly { label: string; href: string }[];
  hero: { contact: string };
  stack: Text & { areas: Record<SkillId, { area: string; summary: string }> };
  about: Text & { milestones: readonly Milestone[]; goTo: (year: string) => string };
  work: Text & { items: Record<ProjectId, { title: string; description: string }> };
  contact: Text & { cta: string };
  footer: {
    phone: string;
    email: string;
    legal: string;
    terms: string;
    /** "Software Developer de Asunción, Paraguay". */
    role: string;
  };
  notFound: { title: string; text: string; home: string };
  error: {
    /** El "404" del error: una interjección grande. */
    heading: string;
    title: string;
    text: string;
    retry: string;
    reference: string;
  };
  terms: {
    back: string;
    title: string;
    intro: string;
    description: string;
    sections: readonly { title: string; body: string }[];
  };
};

export const content: Record<Lang, Content> = {
  es: {
    htmlLang: "es",
    ogLocale: "es_PY",
    langName: "Español",
    tagline: "De la idea a producción",
    description:
      "Software developer en Asunción, Paraguay. Construyo APIs y servicios backend con Python, Django y FastAPI, y apps móviles con Flutter.",
    keywords: [
      site.name,
      "portafolio",
      "software developer",
      "Paraguay",
      "Python",
      "Flutter",
      "backend",
    ],
    brand: "HOLA 👋",
    skipToContent: "Saltar al contenido",
    navLabel: "Principal",
    socialsLabel: "Redes",
    switchTo: "View this site in English",
    nav: [
      { label: "Tecnologías", href: `#${sectionIds.tech}` },
      { label: "Sobre mí", href: `#${sectionIds.about}` },
      { label: "Proyectos", href: `#${sectionIds.projects}` },
      { label: "Contacto", href: `#${sectionIds.contact}` },
    ],
    hero: { contact: "Contacto" },
    stack: {
      title: "En qué trabajo",
      text: "Las herramientas que uso a diario.",
      areas: {
        backend: {
          area: "Back-End",
          summary:
            "Mi terreno principal: APIs, modelos de datos y servicios en producción.",
        },
        mobile: {
          area: "Mobile",
          summary:
            "Apps multiplataforma publicadas en tiendas, de la UI al release.",
        },
        frontend: {
          area: "Front-End",
          summary:
            "Interfaces que consumen mis propias APIs, con foco en lo funcional.",
        },
        data: {
          area: "Datos e Infra",
          summary:
            "Persistencia y despliegue: donde el proyecto deja de ser local.",
        },
      },
    },
    about: {
      title: "Cómo llegué hasta acá",
      text: "De los primeros proyectos de la carrera a sistemas con usuarios reales en producción.",
      goTo: (year) => `Ir a ${year}`,
      milestones: [
        {
          year: "2016",
          title: "Arranca la ingeniería",
          detail:
            "Empiezo la carrera de ingeniería y los primeros proyectos de código fuera del aula.",
        },
        {
          year: "2019",
          title: "Desarrollo freelance",
          detail:
            "Primeros clientes: sitios y servicios a medida, gestionando el proyecto de punta a punta.",
        },
        {
          year: "2020",
          title: "Foco en backend y mobile",
          detail:
            "Me especializo en Python del lado del servidor y en Flutter para aplicaciones móviles.",
        },
        {
          year: "2021",
          title: "Dos proyectos grandes en producción",
          detail:
            "Sistemas con usuarios reales, mantenimiento continuo y despliegues sostenidos en el tiempo.",
        },
        {
          year: "Hoy",
          title: "Construyendo",
          detail:
            "Sigo escribiendo software: APIs, apps y las herramientas que las sostienen.",
        },
      ],
    },
    work: {
      title: "Proyectos",
      text: "De la idea al deploy",
      items: {
        mas: {
          title: "Mas Tarjeta - Billetaje electrónico",
          description:
            "Plataforma de billetaje electrónico para el transporte público en Asunción, con funcionalidades de recarga de tarjetas, pago de boletos y más.",
        },
        basa: {
          title: "App BASA",
          description:
            "Aplicación móvil para el Banco BASA, con funcionalidades de home banking, pagos, transferencias y más.",
        },
        pagsa: {
          title: "Pagsa control de acceso",
          description:
            "Sistema de control de acceso para Pagsa S.A. con funcionalidades de registro de entrada - salida, y gestión de usuarios.",
        },
        claro: {
          title: "Claro video",
          description:
            "Desarrollo backend de aplicaciones web robustas y escalables para Claro Video, plataforma de streaming de alto trafico.",
        },
        telefonica: {
          title: "Telefonica IOT",
          description:
            "Plataforma IoT para el monitoreo y gestión de dispositivos conectados para ciudades inteligentes.",
        },
      },
    },
    contact: {
      title: "Hablemos",
      text: "¿Tenés un proyecto en mente? Escribime y lo hacemos realidad.",
      cta: "WhatsApp",
    },
    footer: {
      phone: "Teléfono",
      email: "Email",
      legal: "Legal",
      terms: "Bases y condiciones",
      role: `${site.role} de ${site.location}`,
    },
    notFound: {
      title: "Esta página no existe",
      text: "Puede que el enlace haya cambiado.",
      home: "Volver al inicio",
    },
    error: {
      heading: "Ups",
      title: "Algo salió mal",
      text: "Hubo un error al cargar esta parte del sitio.",
      retry: "Reintentar",
      reference: "Referencia",
    },
    terms: {
      back: "← Volver",
      title: "Bases y Condiciones de Uso",
      intro: `Aplican a las aplicaciones móviles publicadas por ${site.name}.`,
      description: `Bases y condiciones de uso de las aplicaciones publicadas por ${site.name}.`,
      sections: [
        {
          title: "Introducción",
          body: `Bienvenido(a). Estas bases y condiciones regulan el uso de las aplicaciones móviles publicadas por ${site.name}, diseñadas para brindarte sus herramientas sin necesidad de recoger datos sensibles.`,
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
      ],
    },
  },

  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    langName: "English",
    tagline: "From idea to production",
    description:
      "Software developer based in Asunción, Paraguay. I build backend APIs and services with Python, Django and FastAPI, and mobile apps with Flutter.",
    keywords: [
      site.name,
      "portfolio",
      "software developer",
      "Paraguay",
      "Python",
      "Flutter",
      "backend",
    ],
    brand: "HELLO 👋",
    skipToContent: "Skip to content",
    navLabel: "Main",
    socialsLabel: "Social",
    switchTo: "Ver este sitio en español",
    nav: [
      { label: "Technologies", href: `#${sectionIds.tech}` },
      { label: "About", href: `#${sectionIds.about}` },
      { label: "Projects", href: `#${sectionIds.projects}` },
      { label: "Contact", href: `#${sectionIds.contact}` },
    ],
    hero: { contact: "Get in touch" },
    stack: {
      title: "What I work with",
      text: "The tools I use every day.",
      areas: {
        backend: {
          area: "Back-End",
          summary:
            "My main ground: APIs, data models and services running in production.",
        },
        mobile: {
          area: "Mobile",
          summary:
            "Cross-platform apps shipped to the stores, from the UI to the release.",
        },
        frontend: {
          area: "Front-End",
          summary:
            "Interfaces that consume my own APIs, with a focus on what actually works.",
        },
        data: {
          area: "Data & Infra",
          summary:
            "Persistence and deployment: where the project stops being local.",
        },
      },
    },
    about: {
      title: "How I got here",
      text: "From my first projects at university to systems with real users in production.",
      goTo: (year) => `Go to ${year}`,
      milestones: [
        {
          year: "2016",
          title: "Engineering begins",
          detail:
            "I start my engineering degree and the first coding projects outside the classroom.",
        },
        {
          year: "2019",
          title: "Freelance development",
          detail:
            "First clients: custom sites and services, running the project end to end.",
        },
        {
          year: "2020",
          title: "Focus on backend and mobile",
          detail:
            "I specialise in Python on the server side and in Flutter for mobile applications.",
        },
        {
          year: "2021",
          title: "Two large projects in production",
          detail:
            "Systems with real users, continuous maintenance and deployments sustained over time.",
        },
        {
          year: "Today",
          title: "Building",
          detail:
            "Still writing software: APIs, apps and the tools that keep them running.",
        },
      ],
    },
    work: {
      title: "Projects",
      text: "From idea to deploy",
      items: {
        mas: {
          title: "Mas Tarjeta - Electronic ticketing",
          description:
            "Electronic ticketing platform for public transport in Asunción, with card top-ups, fare payments and more.",
        },
        basa: {
          title: "BASA App",
          description:
            "Mobile application for Banco BASA, with home banking, payments, transfers and more.",
        },
        pagsa: {
          title: "Pagsa access control",
          description:
            "Access control system for Pagsa S.A. with check-in and check-out logging, and user management.",
        },
        claro: {
          title: "Claro Video",
          description:
            "Backend development of robust, scalable web applications for Claro Video, a high-traffic streaming platform.",
        },
        telefonica: {
          title: "Telefonica IoT",
          description:
            "IoT platform for monitoring and managing connected devices for smart cities.",
        },
      },
    },
    contact: {
      title: "Let's talk",
      text: "Got a project in mind? Write to me and we'll make it happen.",
      cta: "WhatsApp",
    },
    footer: {
      phone: "Phone",
      email: "Email",
      legal: "Legal",
      terms: "Terms and conditions",
      role: `${site.role} from ${site.location}`,
    },
    notFound: {
      title: "This page does not exist",
      text: "The link may have changed.",
      home: "Back to home",
    },
    error: {
      heading: "Oops",
      title: "Something went wrong",
      text: "There was an error loading this part of the site.",
      retry: "Try again",
      reference: "Reference",
    },
    terms: {
      back: "← Back",
      title: "Terms and Conditions of Use",
      intro: `They apply to the mobile applications published by ${site.name}.`,
      description: `Terms and conditions of use for the applications published by ${site.name}.`,
      sections: [
        {
          title: "Introduction",
          body: `Welcome. These terms and conditions govern the use of the mobile applications published by ${site.name}, designed to give you their tools without collecting sensitive data.`,
        },
        {
          title: "Acceptance of Terms",
          body: "By downloading, installing and using this application, you agree to comply with the terms and conditions set out here. If you do not agree with these terms, please refrain from using the application.",
        },
        {
          title: "Data Collection",
          body: "This application has been designed not to collect sensitive user data. No personally identifiable information — such as names, addresses, phone numbers, financial information or other sensitive data — will be requested or stored.",
        },
        {
          title: "Data Collected",
          body: "The application may collect non-personal, anonymous data such as information about the application's performance, usage preferences and general statistics, for the sole purpose of improving the quality and functionality of the service.",
        },
        {
          title: "Privacy and Security",
          body: "The security and privacy of your data are our priority. We apply industry-standard security measures to protect any information collected. Please bear in mind, however, that transmitting data over the internet is never completely secure and, although we strive to protect your information, we cannot guarantee absolute security.",
        },
        {
          title: "Use of Cookies",
          body: "This application may use cookies or other tracking technologies to improve the user experience. These cookies do not collect personal information and you can manage their use through your device's settings.",
        },
        {
          title: "Updates and Changes",
          body: "We reserve the right to make changes to these terms and conditions at any time. We recommend reviewing this section periodically to stay up to date with any updates.",
        },
        {
          title: "User Responsibility",
          body: "By using the application, you accept that you are solely responsible for any information you provide voluntarily. The application is not liable for the misuse of personal data you have chosen to share voluntarily with third parties, since such information is neither expected nor requested.",
        },
        {
          title: "Contact",
          body: `If you have any question or concern about these terms and conditions, or about the privacy and security of the application, do not hesitate to contact us at ${site.email}.`,
        },
      ],
    },
  },
};

/** Texto del idioma pedido. */
export function getContent(lang: Lang): Content {
  return content[lang];
}

/** El otro idioma: el que ofrece el conmutador de la cabecera. */
export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
