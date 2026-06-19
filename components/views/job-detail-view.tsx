"use client";

import { Check, Briefcase, MapPin, Clock, CalendarDays } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { JobCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import { jobs, getJob } from "@/lib/data/jobs";

export default function JobDetailView({ slug }: { slug: string }) {
  const { tl, lang } = useLanguage();
  const job = getJob(slug);
  if (!job) return null;

  const others = jobs.filter((j) => j.slug !== slug).slice(0, 3);

  const meta = [
    { Icon: Briefcase, label: { id: "Tipe", en: "Type" }, value: tl(job.type) },
    { Icon: MapPin, label: { id: "Lokasi", en: "Location" }, value: job.location },
    { Icon: Clock, label: { id: "Jenjang", en: "Level" }, value: tl(job.level) },
    { Icon: CalendarDays, label: { id: "Diposting", en: "Posted" }, value: formatDate(job.posted, lang) },
  ];

  return (
    <>
      <PageHero
        seed={job.slug}
        eyebrow={tl(job.department)}
        title={tl(job.title)}
        subtitle={`${tl(job.type)} · ${job.location} · ${tl(job.level)}`}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Karier", en: "Careers" }), href: "/careers" },
          { label: tl(job.title) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{tl({ id: "Tentang Peran", en: "About the Role" })}</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{tl(job.summary)}</p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-ink-900">
              {tl({ id: "Tanggung Jawab", en: "Responsibilities" })}
            </h3>
            <ul className="mt-4 space-y-3">
              {tl(job.responsibilities).map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-xl font-semibold text-ink-900">
              {tl({ id: "Persyaratan", en: "Requirements" })}
            </h3>
            <ul className="mt-4 space-y-3">
              {tl(job.requirements).map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-xl border border-ink-200 bg-ink-50 p-6 lg:sticky lg:top-28">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-500">
                {tl({ id: "Ringkasan Posisi", en: "Position Summary" })}
              </h3>
              <dl className="mt-4 space-y-4">
                {meta.map(({ Icon, label, value }) => (
                  <div key={label.en} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-ink-400">{tl(label)}</dt>
                      <dd className="mt-0.5 font-medium text-ink-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <ButtonLink href="/contact" variant="solid" className="mt-6 w-full">
                {tl({ id: "Lamar Sekarang", en: "Apply Now" })}
              </ButtonLink>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Posisi Lainnya", en: "Other Openings" })}
          title={tl({ id: "Peran terbuka lainnya", en: "More open roles" })}
          action={
            <ButtonLink href="/careers" variant="ghost">
              {tl({ id: "Semua Posisi", en: "All Positions" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-10 flex flex-col gap-4">
          {others.map((j) => (
            <StaggerItem key={j.slug}>
              <JobCard job={j} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
