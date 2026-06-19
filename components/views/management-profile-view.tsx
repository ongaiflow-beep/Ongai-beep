"use client";

import { Check } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { TeamCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { getTeamMember, team } from "@/lib/data/team";

function getInitials(name: string): string {
  const parts = name
    .replace(/,/g, " ")
    .split(/\s+/)
    .filter((p) => p && !p.includes("."));
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ManagementProfileView({ slug }: { slug: string }) {
  const { tl } = useLanguage();
  const member = getTeamMember(slug);
  if (!member) return null;

  const others = team.filter((m) => m.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        seed={member.slug}
        eyebrow={tl({ id: "Profil Manajemen", en: "Management Profile" })}
        title={member.name}
        subtitle={tl(member.role)}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Perusahaan", en: "Our Company" }), href: "/company" },
          { label: member.name },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl">
              <Media seed={member.slug} ratio="3 / 4" rounded={false} />
              <span className="pointer-events-none absolute inset-0 grid place-items-center font-heading text-7xl font-bold text-white/15">
                {getInitials(member.name)}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>{tl(member.role)}</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900">
              {member.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{tl(member.bio)}</p>

            <h3 className="mt-8 font-heading text-sm font-semibold uppercase tracking-wider text-ink-500">
              {tl({ id: "Pengalaman & Kredensial", en: "Experience & Credentials" })}
            </h3>
            <ul className="mt-4 space-y-3">
              {tl(member.credentials).map((c) => (
                <li key={c} className="flex items-start gap-3 text-ink-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Tim Manajemen", en: "Management Team" })}
          title={tl({ id: "Anggota lainnya", en: "Other members" })}
          action={
            <ButtonLink href="/company#management" variant="ghost">
              {tl({ id: "Kembali ke Manajemen", en: "Back to Management" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((m) => (
            <StaggerItem key={m.slug}>
              <TeamCard member={m} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
