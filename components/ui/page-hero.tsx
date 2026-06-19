import Link from "next/link";
import { Media } from "./media";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./motion";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  seed: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export function PageHero({
  seed,
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-ink-950 pb-14 pt-32 sm:min-h-[60vh] sm:pt-40">
      <Media fill seed={seed} overlay rounded={false} kenBurns />
      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-300">
              {breadcrumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-ink-500" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
