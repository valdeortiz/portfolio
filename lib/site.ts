/**
 * Fuente única de verdad del contenido del sitio.
 * Editá este archivo para actualizar el portafolio: los componentes leen de acá.
 */

export const site = {
  name: "Valdemar Ortiz",
  shortName: "Valdemar Ortiz",
  role: "Software Developer",
  location: "Paraguay",
  tagline: "Backend y mobile, de la idea a producción.",
  description:
    "Software developer de Paraguay. Construyo backends con Python y aplicaciones móviles con Flutter, desde el diseño de la API hasta el deploy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://valdeortiz.com",
  locale: "es_PY",
  email: "contact@valdeortiz.com",
  phone: "+595 971 921 474",
  whatsapp: "https://wa.me/595971921474",
  avatar: "/images/profile.jpeg",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/valdeortiz", handle: "@valdeortiz" },
  { label: "GitLab", href: "https://gitlab.com/valdeortiz", handle: "@valdeortiz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/valdeortiz/", handle: "in/valdeortiz" },
  { label: "WhatsApp", href: site.whatsapp, handle: site.phone },
] as const;

export const nav = [
  { label: "Stack", href: "#stack" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type Skill = {
  area: string;
  summary: string;
  items: readonly string[];
};

export const skills: readonly Skill[] = [
  {
    area: "Back-End",
    summary: "Mi terreno principal: APIs, modelos de datos y servicios en producción.",
    items: ["Python", "Django", "FastAPI", "REST", "Docker"],
  },
  {
    area: "Mobile",
    summary: "Apps multiplataforma publicadas en tiendas, de la UI al release.",
    items: ["Flutter", "Dart", "Google Play"],
  },
  {
    area: "Front-End",
    summary: "Interfaces que consumen mis propias APIs, con foco en lo funcional.",
    items: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    area: "Datos e Infra",
    summary: "Persistencia y despliegue: donde el proyecto deja de ser local.",
    items: ["PostgreSQL", "MongoDB", "Docker", "Linux"],
  },
];

/** Cinta animada del hero. */
export const marquee = [
  "Python",
  "Django",
  "FastAPI",
  "Flutter",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "React",
  "Next.js",
  "TypeScript",
] as const;

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
