import Link from "next/link";

import { getContent, routes, type Lang } from "@/lib/site";

/**
 * Texto legal de las apps publicadas en Google Play.
 * En español vive en `/condiciones`; en inglés, en `/en/terms`.
 */
export function Terms({ lang }: { lang: Lang }) {
  const t = getContent(lang).terms;

  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 pb-20 sm:px-12">
      <Link
        href={routes[lang].home}
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        {t.back}
      </Link>

      <h1 className="text-gradient mt-8 text-4xl font-extrabold sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-4 text-muted">{t.intro}</p>

      <ol className="mt-12 space-y-10">
        {t.sections.map((section, index) => (
          <li key={section.title}>
            <h2 className="text-xl font-medium">
              <span className="mr-2 text-accent">{index + 1}.</span>
              {section.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
