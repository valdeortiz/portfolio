import type { Metadata, Viewport } from "next";

import { SiteDocument } from "@/components/layout/document";
import { rootMetadata } from "@/lib/metadata";

import "../globals.css";

/** Root layout del inglés. Su gemelo en español está en `app/(es)`. */
export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = {
  themeColor: "#0f1624",
  colorScheme: "dark",
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
