import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen que se ve al compartir el sitio en redes y WhatsApp. */
export default function OpengraphImage() {
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
          backgroundColor: "#070b14",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(254,192,120,0.28), transparent 45%), radial-gradient(circle at 85% 75%, rgba(74,168,255,0.22), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#fec078", letterSpacing: 8 }}>
          {site.role.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 108,
            fontWeight: 700,
            color: "#f2f6fb",
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
            color: "#93a3bd",
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 26,
            color: "#93a3bd",
          }}
        >
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
