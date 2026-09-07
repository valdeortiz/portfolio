import { ogContentType, ogSize, renderOgImage } from "@/components/og-image";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function EnOpengraphImage() {
  return renderOgImage("en");
}
