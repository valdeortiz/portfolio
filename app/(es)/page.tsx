import type { Metadata } from "next";

import { Home } from "@/components/pages/home";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata("es");

export default function HomePage() {
  return <Home lang="es" />;
}
