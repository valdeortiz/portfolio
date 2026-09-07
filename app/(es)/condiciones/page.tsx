import type { Metadata } from "next";

import { Terms } from "@/components/pages/terms";
import { termsMetadata } from "@/lib/metadata";

export const metadata: Metadata = termsMetadata("es");

export default function CondicionesPage() {
  return <Terms lang="es" />;
}
