"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { FilterChips } from "@/components/ui/filter-chips";
import { Reveal } from "@/components/ui/motion";
import { NewsCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import { articles, newsCategories, newsCategoryLabel } from "@/lib/data/news";

export default function NewsView() {
  const { tl, lang } = useLanguage();
  const [cat, setCat] = useState("all");

  const chips = [
    { key: "all", label: tl({ id: "Semua", en: "All" }) },
    ...newsCategories.map((c) => ({ key: c.key, label: tl(c.label) })),
  ];

  const featured = articles.find((a) => a.featured);
  const showFeatured = cat === "all" && featured;
  const rest = articles.filter((a) => {
    if (showFeatured && a.slug === featured?.slug) return false;
    return cat === "all" || a.category === cat;
  });

  return (
    <>
      <PageHero
        seed="news-hero"
        eyebrow={tl({ id: "Berita", en: "News" })}
        title={tl({ id: "Kabar & wawasan", en: "News & insights" })}
        subtitle={tl({
          id: "Perkembangan terbaru dari Victory Utama Karya dan industri konstruksi.",
          en: "The latest from Victory Utama Karya and the construction industry.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Berita", en: "News" }) },
        ]}
      />

      <Section>
        <FilterChips items={chips} value={cat} onChange={setCat} groupId="news" />

        {showFeatured && featured && (
          <Reveal className="mt-10">
            <Link
              href={`/news/${featured.slug}`}
              className="group grid overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative min-h-[16rem] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-[600ms] ease-out-expo group-hover:scale-105">
                  <Media
                    seed={featured.slug}
                    fill
                    rounded={false}
                    label={tl(newsCategoryLabel(featured.category))}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-accent-600">
                  {tl({ id: "Unggulan", en: "Featured" })}
                  <span className="text-ink-300">·</span>
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatDate(featured.date, lang)}
                </div>
                <h2 className="mt-3 font-heading text-2xl font-semibold leading-snug text-ink-900 transition-colors group-hover:text-accent-600 sm:text-3xl">
                  {tl(featured.title)}
                </h2>
                <p className="mt-3 text-ink-600">{tl(featured.excerpt)}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                  {tl({ id: "Baca artikel", en: "Read article" })}
                  <ArrowRight className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
}
