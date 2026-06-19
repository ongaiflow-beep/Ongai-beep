"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Target, Compass, Building2 } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { FilterChips } from "@/components/ui/filter-chips";
import { getIcon } from "@/components/ui/icon";
import { TeamCard, EventCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { scrollToId } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { about, values, milestones, events } from "@/lib/data/company";
import { team, teamCategories } from "@/lib/data/team";
import type { Localized } from "@/lib/types";

const navSections: { id: string; label: Localized }[] = [
  { id: "about", label: { id: "Tentang", en: "About" } },
  { id: "culture", label: { id: "Budaya", en: "Culture" } },
  { id: "milestone", label: { id: "Tonggak Sejarah", en: "Milestones" } },
  { id: "management", label: { id: "Manajemen", en: "Management" } },
  { id: "events", label: { id: "Kegiatan", en: "Events" } },
];

function SectionNav() {
  const { tl } = useLanguage();
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-30 border-b border-ink-100 bg-white/90 backdrop-blur-md lg:top-20">
      <Container>
        <div className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollToId(s.id)}
              className={cn(
                "cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === s.id ? "bg-ink-900 text-white" : "text-ink-600 hover:bg-ink-100",
              )}
            >
              {tl(s.label)}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default function CompanyView() {
  const { tl } = useLanguage();
  const [cat, setCat] = useState("all");

  const chips = [
    { key: "all", label: tl({ id: "Semua", en: "All" }) },
    ...teamCategories.map((c) => ({ key: c.key, label: tl(c.label) })),
  ];
  const filteredTeam = cat === "all" ? team : team.filter((m) => m.category === cat);

  return (
    <>
      <PageHero
        seed="company-hero"
        eyebrow={tl({ id: "Perusahaan Kami", en: "Our Company" })}
        title={tl({ id: "Dibangun di atas kepercayaan", en: "Built on trust" })}
        subtitle={tl({
          id: "Tim, nilai, dan perjalanan di balik Victory Utama Karya.",
          en: "The team, values, and journey behind Victory Utama Karya.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Perusahaan", en: "Our Company" }) },
        ]}
      />

      <SectionNav />

      {/* ABOUT */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{tl({ id: "Tentang Victory", en: "About Victory" })}</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {tl({
                id: "Dua dekade lebih membangun Indonesia",
                en: "More than two decades building Indonesia",
              })}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{tl(about.lead)}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">{tl(about.body)}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
                <Target className="h-6 w-6 text-accent-600" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-base font-semibold text-ink-900">
                  {tl({ id: "Visi", en: "Vision" })}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{tl(about.vision)}</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
                <Compass className="h-6 w-6 text-accent-600" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-base font-semibold text-ink-900">
                  {tl({ id: "Misi", en: "Mission" })}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{tl(about.mission)}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Media seed="company-about-building" ratio="4 / 3" icon={Building2} />
          </Reveal>
        </div>
      </Section>

      {/* CULTURE */}
      <Section id="culture" tone="muted">
        <SectionHeading
          align="center"
          eyebrow={tl({ id: "Budaya Kami", en: "Our Culture" })}
          title={tl({ id: "Nilai yang memandu setiap proyek", en: "Values that guide every project" })}
          description={tl({
            id: "Prinsip-prinsip ini bukan sekadar slogan — mereka menentukan cara kami bekerja setiap hari.",
            en: "These principles aren't slogans — they shape how we work every single day.",
          })}
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = getIcon(v.icon);
            return (
              <StaggerItem key={v.title.en}>
                <div className="h-full rounded-xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink-900">{tl(v.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{tl(v.body)}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* MILESTONE TIMELINE */}
      <Section id="milestone">
        <SectionHeading
          align="center"
          eyebrow={tl({ id: "Tonggak Sejarah", en: "Milestone Timeline" })}
          title={tl({ id: "Perjalanan kami", en: "Our journey" })}
        />
        <div className="mx-auto mt-12 max-w-2xl">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.04}>
              <div className="grid grid-cols-[auto_1fr] gap-5">
                <div className="flex flex-col items-center">
                  <span className="mt-1 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-white" />
                  {i < milestones.length - 1 && <span className="my-1 w-px flex-1 bg-ink-200" />}
                </div>
                <div className="pb-10">
                  <div className="font-heading text-sm font-bold tracking-wider text-accent-600">
                    {m.year}
                  </div>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-ink-900">{tl(m.title)}</h3>
                  <p className="mt-1.5 text-ink-600">{tl(m.body)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MANAGEMENT */}
      <Section id="management" tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Manajemen Kami", en: "Our Management" })}
          title={tl({ id: "Dipimpin oleh para ahli", en: "Led by experienced people" })}
        />
        <div className="mt-8">
          <FilterChips items={chips} value={cat} onChange={setCat} groupId="team" />
        </div>
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                key={member.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* EVENTS */}
      <Section id="events">
        <SectionHeading
          eyebrow={tl({ id: "Kegiatan Komunitas", en: "Community Events" })}
          title={tl({ id: "Berkontribusi bagi masyarakat", en: "Giving back to the community" })}
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <StaggerItem key={event.slug}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
