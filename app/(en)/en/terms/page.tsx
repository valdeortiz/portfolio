import type { Metadata } from "next";

import { Terms } from "@/components/pages/terms";
import { termsMetadata } from "@/lib/metadata";

export const metadata: Metadata = termsMetadata("en");

export default function TermsPage() {
  return <Terms lang="en" />;
}
