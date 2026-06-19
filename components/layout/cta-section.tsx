"use client";

import { Section } from "@/components/ui/section";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { useLanguage } from "@/lib/i18n";

export function CTASection() {
  const { tl } = useLanguage();
  return (
    <Section tone="blueprint">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow light className="justify-center">
          {tl({ id: "Mari berkolaborasi", en: "Let's build together" })}
        </Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {tl({
            id: "Punya proyek dalam pikiran? Mari wujudkan bersama.",
            en: "Have a project in mind? Let's make it real.",
          })}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-300">
          {tl({
            id: "Tim kami siap mendiskusikan kebutuhan konstruksi Anda — dari konsep hingga serah terima.",
            en: "Our team is ready to discuss your construction needs — from concept to handover.",
          })}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/contact" variant="solid">
            {tl({ id: "Hubungi Kami", en: "Contact Us" })}
          </ButtonLink>
          <ButtonLink href="/projects" variant="outlineLight">
            {tl({ id: "Lihat Proyek", en: "View Projects" })}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
