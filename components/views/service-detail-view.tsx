"use client";

import { Check } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { getIcon } from "@/components/ui/icon";
import { ProjectCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { getService } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";

export default function ServiceDetailView({ slug }: { slug: string }) {
  const { tl } = useLanguage();
  const service = getService(slug);
  if (!service) return null;

  const Icon = getIcon(service.icon);
  const related = projects.filter((p) =>
    p.servicesUsed.some((s) => s.en === service.title.en),
  );
  const relatedFinal = (related.length ? related : projects).slice(0, 3);

  return (
    <>
      <PageHero
        seed={service.slug}
        eyebrow={tl({ id: "Layanan", en: "Service" })}
        title={tl(service.title)}
        subtitle={tl(service.tagline)}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Layanan", en: "Our Services" }), href: "/services" },
          { label: tl(service.title) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{tl({ id: "Ringkasan", en: "Overview" })}</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{tl(service.description)}</p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-ink-900">
              {tl({ id: "Kemampuan kami", en: "Our capabilities" })}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tl(service.capabilities).map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-ink-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-xl border border-ink-200 bg-ink-50 p-6 lg:sticky lg:top-28">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-sm font-semibold uppercase tracking-wider text-ink-500">
                {tl({ id: "Fakta Utama", en: "Key Facts" })}
              </h3>
              <dl className="mt-4 space-y-4">
                {service.keyFacts.map((f) => (
                  <div key={f.label.en} className="border-b border-ink-200 pb-3 last:border-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-ink-400">{tl(f.label)}</dt>
                    <dd className="mt-1 font-medium text-ink-900">{tl(f.value)}</dd>
                  </div>
                ))}
              </dl>
              <ButtonLink href="/contact" variant="solid" className="mt-6 w-full">
                {tl({ id: "Minta Penawaran", en: "Request a Quote" })}
              </ButtonLink>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <StaggerItem key={i}>
              <Media seed={`${service.slug}-gallery-${i}`} ratio="4 / 3" icon={Icon} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={tl({ id: "Proyek Terkait", en: "Related Projects" })}
          title={tl({ id: "Karya menggunakan layanan ini", en: "Work using this service" })}
          action={
            <ButtonLink href="/projects" variant="ghost">
              {tl({ id: "Semua Proyek", en: "All Projects" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedFinal.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
