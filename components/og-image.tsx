import { ImageResponse } from "next/og";

import { getContent, site, type Lang } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Imagen que se ve al compartir el sitio en redes y WhatsApp. */
export function renderOgImage(lang: Lang) {
  const t = getContent(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0f1624",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(148,93,214,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(19,173,199,0.28), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#fec576", letterSpacing: 8 }}>
          {site.role.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 108,
            fontWeight: 700,
            color: "#f2f5f7",
            letterSpacing: -3,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "#878b92",
            maxWidth: 900,
          }}
        >
          {t.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 26,
            color: "#878b92",
          }}
        >
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    ogSize,
  );
}
