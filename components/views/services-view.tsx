"use client";

import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/primitives";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/motion";
import { ServiceCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { services } from "@/lib/data/services";
import type { Localized } from "@/lib/types";

const process: { step: string; title: Localized; body: Localized }[] = [
  {
    step: "01",
    title: { id: "Konsultasi", en: "Consultation" },
    body: {
      id: "Memahami kebutuhan, lingkup, dan tujuan proyek Anda.",
      en: "Understanding your needs, scope, and project goals.",
    },
  },
  {
    step: "02",
    title: { id: "Perencanaan", en: "Planning" },
    body: {
      id: "Rekayasa, estimasi biaya, dan penjadwalan yang matang.",
      en: "Engineering, cost estimation, and careful scheduling.",
    },
  },
  {
    step: "03",
    title: { id: "Pelaksanaan", en: "Execution" },
    body: {
      id: "Pembangunan dengan kontrol mutu dan keselamatan ketat.",
      en: "Construction with strict quality and safety control.",
    },
  },
  {
    step: "04",
    title: { id: "Serah Terima", en: "Handover" },
    body: {
      id: "Penyelesaian tepat waktu beserta dukungan purna proyek.",
      en: "On-time completion with post-project support.",
    },
  },
];

export default function ServicesView() {
  const { tl } = useLanguage();
  return (
    <>
      <PageHero
        seed="services-hero"
        eyebrow={tl({ id: "Layanan Kami", en: "Our Services" })}
        title={tl({ id: "Satu mitra, solusi menyeluruh", en: "One partner, complete solutions" })}
        subtitle={tl({
          id: "Lima layanan inti yang mencakup seluruh siklus pembangunan Anda.",
          en: "Five core services covering your entire build lifecycle.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Layanan", en: "Our Services" }) },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow={tl({ id: "Kategori Layanan", en: "Service Categories" })}
          title={tl({ id: "Apa yang dapat kami kerjakan", en: "What we can build for you" })}
          description={tl({
            id: "Dari struktur utama hingga sistem elektrikal dan penyewaan alat berat — semuanya dalam satu rantai layanan terpadu.",
            en: "From primary structure to electrical systems and equipment rental — all within one integrated service chain.",
          })}
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PROCESS */}
      <Section tone="blueprint">
        <SectionHeading
          light
          align="center"
          eyebrow={tl({ id: "Cara kami bekerja", en: "How we work" })}
          title={tl({ id: "Proses yang transparan & terukur", en: "A transparent, measured process" })}
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <StaggerItem key={p.step}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="font-heading text-3xl font-bold text-accent">{p.step}</div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-white">{tl(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{tl(p.body)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center text-sm text-ink-400">
          {tl({
            id: "Setiap tahap didokumentasikan dan dilaporkan secara berkala kepada klien.",
            en: "Every stage is documented and reported to the client at regular intervals.",
          })}
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
