"use client";

import { ErrorView } from "@/components/pages/error-view";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorView lang="es" {...props} />;
}
