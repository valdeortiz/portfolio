"use client";

import { ErrorView } from "@/components/pages/error-view";

export default function EnError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorView lang="en" {...props} />;
}
