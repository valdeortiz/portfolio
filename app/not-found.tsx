import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-8xl font-semibold text-accent">404</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Esta página no existe
        </h1>
        <p className="mt-3 text-muted">Puede que el enlace haya cambiado.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-7 py-3.5 font-medium text-canvas transition-transform hover:scale-105"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
