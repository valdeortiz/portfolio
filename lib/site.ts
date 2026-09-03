import type { SkillIconName, SocialIconName } from "@/components/ui/icons";

/**
 * Fuente única de verdad del contenido del sitio.
 * Editá este archivo para actualizar el portafolio: los componentes leen de acá.
 */

export const site = {
  name: "Valdemar Ortiz",
  shortName: "Valdemar Ortiz",
  role: "Software Developer",
  location: "Asunción, Paraguay",
  /** Segunda línea del título del hero. */
  // welcome: "Bienvenido a mi portafolio",
  tagline: "De la idea a producción.",
  description:
    "Software developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://valdeortiz.com",
  locale: "es_PY",
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

export const nav = [
  { label: "Tecnologías", href: "#tech" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type Skill = {
  area: string;
  summary: string;
  items: readonly string[];
  icon: SkillIconName;
};

export const skills: readonly Skill[] = [
  {
    area: "Back-End",
    summary: "Mi terreno principal: APIs, modelos de datos y servicios en producción.",
    items: ["Python", "Django", "FastAPI", "REST", "Docker"],
    icon: "backend",
  },
  {
    area: "Mobile",
    summary: "Apps multiplataforma publicadas en tiendas, de la UI al release.",
    items: ["Flutter", "Dart", "Google Play"],
    icon: "mobile",
  },
  {
    area: "Front-End",
    summary: "Interfaces que consumen mis propias APIs, con foco en lo funcional.",
    items: ["React", "Next.js", "Angular", "TypeScript"],
    icon: "frontend",
  },
  {
    area: "Datos e Infra",
    summary: "Persistencia y despliegue: donde el proyecto deja de ser local.",
    items: ["PostgreSQL", "MongoDB", "Docker", "Linux"],
    icon: "data",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

/**
 * PLACEHOLDER: reemplazar por proyectos reales.
 * Pasame título, descripción, imagen (ruta en public/images) y link de cada
 * uno y los cambio acá. Mientras tanto uso el avatar como imagen temporal.
 */
export const projects: readonly Project[] = [
  {
    title: "Proyecto 1 (completar)",
    description: "Completar con una descripción breve de este proyecto: qué hace y con qué se construyó.",
    image: "/images/profile.jpeg",
    href: "#",
  },
  {
    title: "Proyecto 2 (completar)",
    description: "Completar con una descripción breve de este proyecto: qué hace y con qué se construyó.",
    image: "/images/profile.jpeg",
    href: "#",
  },
  {
    title: "Proyecto 3 (completar)",
    description: "Completar con una descripción breve de este proyecto: qué hace y con qué se construyó.",
    image: "/images/profile.jpeg",
    href: "#",
  },
];

export type Milestone = {
  year: string;
  title: string;
  detail: string;
};

export const timeline: readonly Milestone[] = [
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
];
