"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { FilterChips } from "@/components/ui/filter-chips";
import { Reveal } from "@/components/ui/motion";
import { ProjectCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { projects, projectCategories } from "@/lib/data/projects";

export default function ProjectsView() {
  const { tl } = useLanguage();
  const [cat, setCat] = useState("all");

  const chips = [
    { key: "all", label: tl({ id: "Semua Proyek", en: "All Projects" }) },
    ...projectCategories.map((c) => ({ key: c.key, label: tl(c.label) })),
  ];
  const filtered =
    cat === "all" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        seed="projects-hero"
        eyebrow={tl({ id: "Proyek Kami", en: "Our Projects" })}
        title={tl({ id: "Karya yang berbicara", en: "Work that speaks for itself" })}
        subtitle={tl({
          id: "Portofolio lintas sektor — industri, sipil, perbaikan tanah, dan ketenagalistrikan.",
          en: "A cross-sector portfolio — industrial, civil, soil improvement, and electrical power.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Proyek", en: "Our Projects" }) },
        ]}
      />

      <Section>
        <FilterChips items={chips} value={cat} onChange={setCat} groupId="projects" />

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <Reveal className="py-16 text-center text-ink-500">
            {tl({ id: "Belum ada proyek pada kategori ini.", en: "No projects in this category yet." })}
          </Reveal>
        )}
      </Section>

      <CTASection />
    </>
  );
}
