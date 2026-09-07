import type { Metadata } from "next";

import { Home } from "@/components/pages/home";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata("en");

export default function EnHomePage() {
  return <Home lang="en" />;
}
