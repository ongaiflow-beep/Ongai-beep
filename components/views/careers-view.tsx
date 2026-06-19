"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp, GraduationCap, HardHat, Wallet } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { FilterChips } from "@/components/ui/filter-chips";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { JobCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { jobs, departments } from "@/lib/data/jobs";
import type { Localized } from "@/lib/types";

const benefits: { Icon: typeof TrendingUp; title: Localized; body: Localized }[] = [
  {
    Icon: TrendingUp,
    title: { id: "Pertumbuhan Karier", en: "Career Growth" },
    body: {
      id: "Jalur karier yang jelas dan kesempatan memimpin proyek besar.",
      en: "Clear career paths and the chance to lead major projects.",
    },
  },
  {
    Icon: GraduationCap,
    title: { id: "Pelatihan & Sertifikasi", en: "Training & Certification" },
    body: {
      id: "Program pengembangan dan sertifikasi profesional yang didukung penuh.",
      en: "Fully supported development and professional certification programs.",
    },
  },
  {
    Icon: HardHat,
    title: { id: "Budaya Keselamatan", en: "Safety Culture" },
    body: {
      id: "Lingkungan kerja yang mengutamakan keselamatan setiap individu.",
      en: "A work environment that puts every individual's safety first.",
    },
  },
  {
    Icon: Wallet,
    title: { id: "Paket Kompetitif", en: "Competitive Package" },
    body: {
      id: "Remunerasi yang adil beserta tunjangan kesehatan dan kesejahteraan.",
      en: "Fair remuneration with health and welfare benefits.",
    },
  },
];

export default function CareersView() {
  const { tl } = useLanguage();
  const [dept, setDept] = useState("all");

  const chips = [
    { key: "all", label: tl({ id: "Semua Departemen", en: "All Departments" }) },
    ...departments.map((d) => ({ key: d.en, label: tl(d) })),
  ];
  const filtered = dept === "all" ? jobs : jobs.filter((j) => j.department.en === dept);

  return (
    <>
      <PageHero
        seed="careers-hero"
        eyebrow={tl({ id: "Karier", en: "Careers" })}
        title={tl({ id: "Bangun karier, bangun negeri", en: "Build a career, build a nation" })}
        subtitle={tl({
          id: "Bergabunglah dengan tim yang membangun infrastruktur masa depan Indonesia.",
          en: "Join a team building the infrastructure of Indonesia's future.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Karier", en: "Careers" }) },
        ]}
      />

      {/* WHY JOIN */}
      <Section>
        <SectionHeading
          eyebrow={tl({ id: "Mengapa Victory", en: "Why Victory" })}
          title={tl({ id: "Tempat tumbuh bersama", en: "A place to grow together" })}
          description={tl({
            id: "Kami percaya orang hebat membangun karya hebat — maka kami berinvestasi pada tim kami.",
            en: "We believe great people build great work — so we invest in our team.",
          })}
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, body }) => (
            <StaggerItem key={title.en}>
              <div className="h-full rounded-xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink-900">{tl(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{tl(body)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* OPEN POSITIONS */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Posisi Terbuka", en: "Open Positions" })}
          title={tl({ id: "Temukan peran Anda", en: "Find your role" })}
        />
        <div className="mt-8">
          <FilterChips items={chips} value={dept} onChange={setDept} groupId="careers" />
        </div>
        <motion.div layout className="mt-10 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <motion.div
                key={job.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <Reveal className="py-12 text-center text-ink-500">
            {tl({ id: "Tidak ada posisi pada departemen ini.", en: "No positions in this department." })}
          </Reveal>
        )}
      </Section>

      <CTASection />
    </>
  );
}
