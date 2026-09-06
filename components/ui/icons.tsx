type IconProps = {
  className?: string;
};

/**
 * Set de íconos en SVG inline. El diseño original usaba `react-icons`
 * (DiCssdeck, AiFillGithub, DiReact…); acá van dibujados a mano para no
 * arrastrar una dependencia de ~1000 íconos por los nueve que se usan.
 *
 * Todos heredan el color con `currentColor` y se dimensionan por className.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Marca del sitio: tres capas apiladas, en el lugar del DiCssdeck original. */
export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <g {...stroke}>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </g>
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z" />
    </svg>
  );
}

/** Tanuki de GitLab: dos picos que caen a un mismo vértice, más los abanicos. */
export function GitlabIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="currentColor">
      <path d="M12 21.9 8.1 9.9h7.8L12 21.9Z" />
      <path d="M12 21.9 2.6 9.9h5.5L12 21.9Z" />
      <path d="M2.6 9.9.9 15.2a1 1 0 0 0 .37 1.12L12 21.9 2.6 9.9Z" />
      <path d="M2.6 9.9h5.5L5.73 2.4a.44.44 0 0 0-.84 0L2.6 9.9Z" />
      <path d="M12 21.9 15.9 9.9h5.5L12 21.9Z" />
      <path d="m21.4 9.9 1.7 5.3a1 1 0 0 1-.37 1.12L12 21.9l9.4-12Z" />
      <path d="M21.4 9.9h-5.5l2.37-7.5a.44.44 0 0 1 .84 0l2.29 7.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <g {...stroke}>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3 7 8.13 5.42a1.6 1.6 0 0 0 1.74 0L21 7" />
      </g>
    </svg>
  );
}

/* --- Íconos de las áreas técnicas (DiReact, DiPython, DiAndroid, DiDatabase) --- */

export function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g {...stroke} strokeWidth={1.2}>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function ServerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <g {...stroke}>
        <rect x="2.5" y="3.5" width="19" height="7" rx="2" />
        <rect x="2.5" y="13.5" width="19" height="7" rx="2" />
      </g>
      <circle cx="6.5" cy="7" r="1.1" fill="currentColor" />
      <circle cx="6.5" cy="17" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function MobileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <g {...stroke}>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </g>
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <g {...stroke}>
        <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
        <path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13" />
        <path d="M19.5 12c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3" />
      </g>
    </svg>
  );
}

/** Nombres de ícono que se pueden pedir desde `lib/site.ts`. */
export const socialIcons = {
  github: GithubIcon,
  gitlab: GitlabIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
} as const;

export const skillIcons = {
  frontend: ReactIcon,
  backend: ServerIcon,
  mobile: MobileIcon,
  data: DatabaseIcon,
} as const;

export type SocialIconName = keyof typeof socialIcons;
export type SkillIconName = keyof typeof skillIcons;

/**
 * Banderas del conmutador de idioma. Van en el mismo estilo que el resto:
 * SVG inline, sin dependencias. Están simplificadas a propósito — se dibujan a
 * ~20px de ancho, donde el detalle real (50 estrellas, el escudo del emblema)
 * no se distingue y sólo agrega peso. A diferencia de los demás íconos, éstos
 * no heredan `currentColor`: una bandera sin sus colores no se reconoce.
 */

const FLAG_VIEWBOX = "0 0 24 16";

/** Marco de 1px para que la bandera se despegue del fondo oscuro. */
function FlagBorder() {
  return (
    <rect
      x="0.25"
      y="0.25"
      width="23.5"
      height="15.5"
      rx="1.75"
      fill="none"
      stroke="rgba(0,0,0,0.35)"
      strokeWidth="0.5"
    />
  );
}

/** Estados Unidos: 13 franjas, cantón azul y estrellas sugeridas. */
export function UsFlagIcon({ className }: IconProps) {
  // 13 franjas iguales; las impares (índice 1, 3, 5…) son las blancas.
  const stripe = 16 / 13;

  return (
    <svg
      viewBox={FLAG_VIEWBOX}
      className={className}
      aria-hidden
      focusable="false"
    >
      <rect width="24" height="16" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11].map((row) => (
        <rect
          key={row}
          y={row * stripe}
          width="24"
          height={stripe}
          fill="#ffffff"
        />
      ))}
      {/* El cantón cubre las primeras siete franjas, como en el original. */}
      <rect width="9.6" height={7 * stripe} fill="#3c3b6e" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.5 + col * 2.2}
            cy={1.8 + row * 2.5}
            r="0.55"
            fill="#ffffff"
          />
        )),
      )}
      <FlagBorder />
    </svg>
  );
}

/** Paraguay: tres franjas y el emblema central sugerido con un círculo. */
export function PyFlagIcon({ className }: IconProps) {
  return (
    <svg
      viewBox={FLAG_VIEWBOX}
      className={className}
      aria-hidden
      focusable="false"
    >
      <rect width="24" height="16" fill="#ffffff" />
      <rect width="24" height="5.333" fill="#d52b1e" />
      <rect y="10.667" width="24" height="5.333" fill="#0038a8" />
      <circle
        cx="12"
        cy="8"
        r="2.1"
        fill="#ffffff"
        stroke="#009b3a"
        strokeWidth="0.7"
      />
      <circle cx="12" cy="8" r="0.85" fill="#fedf00" />
      <FlagBorder />
    </svg>
  );
}

/** Bandera por idioma, con la misma clave que `Lang` de `lib/site`. */
export const flagIcons = {
  es: PyFlagIcon,
  en: UsFlagIcon,
} as const;
