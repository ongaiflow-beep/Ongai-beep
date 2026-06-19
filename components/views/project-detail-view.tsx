"use client";

import Link from "next/link";
import { ArrowRight, Building, MapPin, CalendarDays, Layers3 } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { getIcon } from "@/components/ui/icon";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import {
  projects,
  getProject,
  projectCategoryLabel,
  projectCategories,
} from "@/lib/data/projects";

export default function ProjectDetailView({ slug }: { slug: string }) {
  const { tl } = useLanguage();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) return null;

  const next = projects[(index + 1) % projects.length];
  const categoryIcon = getIcon(
    projectCategories.find((c) => c.key === project.category)?.icon ?? "Factory",
  );

  const specs = [
    { Icon: Building, label: { id: "Klien", en: "Client" }, value: project.client },
    { Icon: MapPin, label: { id: "Lokasi", en: "Location" }, value: project.location },
    { Icon: CalendarDays, label: { id: "Tahun", en: "Year" }, value: project.year },
    { Icon: Layers3, label: { id: "Lingkup", en: "Scope" }, value: tl(project.scope) },
  ];

  return (
    <>
      <PageHero
        seed={project.slug}
        eyebrow={tl(projectCategoryLabel(project.category))}
        title={tl(project.title)}
        subtitle={project.location}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Proyek", en: "Our Projects" }), href: "/projects" },
          { label: tl(project.title) },
        ]}
      />

      {/* SPECS */}
      <div className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-5 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {specs.map(({ Icon, label, value }) => (
            <div key={label.en} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wide text-ink-400">{tl(label)}</div>
                <div className="mt-0.5 font-medium text-ink-900">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{tl({ id: "Tinjauan Proyek", en: "Project Overview" })}</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{tl(project.overview)}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-xl border border-ink-200 bg-white p-6 shadow-card">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-500">
                {tl({ id: "Layanan Digunakan", en: "Services Used" })}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.servicesUsed.map((s) => (
                  <span
                    key={s.en}
                    className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-700"
                  >
                    {tl(s)}
                  </span>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* GALLERY */}
      <Section tone="muted">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <StaggerItem key={i}>
              <Media seed={`${project.slug}-shot-${i}`} ratio="16 / 9" icon={categoryIcon} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* NEXT PROJECT */}
      <Section>
        <SectionHeading title={tl({ id: "Proyek Berikutnya", en: "Next Project" })} />
        <Reveal className="mt-8">
          <Link
            href={`/projects/${next.slug}`}
            className="group grid overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:grid-cols-[1.4fr_1fr]"
          >
            <div className="flex flex-col justify-center p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                {tl(projectCategoryLabel(next.category))}
              </div>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-ink-900 transition-colors group-hover:text-accent-600">
                {tl(next.title)}
              </h3>
              <p className="mt-2 text-ink-500">{next.location}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                {tl({ id: "Lihat proyek", en: "View project" })}
                <ArrowRight className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
            <div className="relative min-h-[14rem] overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-[600ms] ease-out-expo group-hover:scale-105">
                <Media
                  seed={next.slug}
                  fill
                  rounded={false}
                  icon={getIcon(
                    projectCategories.find((c) => c.key === next.category)?.icon ?? "Factory",
                  )}
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
