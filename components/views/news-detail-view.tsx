"use client";

import type { ComponentType } from "react";
import { Link2, User } from "lucide-react";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/social-icons";

const shareIcons: ComponentType<{ className?: string }>[] = [
  LinkedInIcon,
  FacebookIcon,
  Link2,
];
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { NewsCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import { articles, getArticle, newsCategoryLabel } from "@/lib/data/news";

export default function NewsDetailView({ slug }: { slug: string }) {
  const { tl, lang } = useLanguage();
  const article = getArticle(slug);
  if (!article) return null;

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const body = tl(article.body);

  return (
    <>
      <PageHero
        seed={article.slug}
        eyebrow={tl(newsCategoryLabel(article.category))}
        title={tl(article.title)}
        subtitle={`${formatDate(article.date, lang)} · ${article.author}`}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Berita", en: "News" }), href: "/news" },
          { label: tl(article.title) },
        ]}
      />

      <Section>
        <Container className="!max-w-3xl">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 text-sm text-ink-500">
              <User className="h-4 w-4 text-accent-600" aria-hidden="true" />
              {article.author}
            </div>
            <Media seed={`${article.slug}-lead`} ratio="16 / 9" />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-700">
              {body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 flex items-center gap-4 border-t border-ink-200 pt-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-ink-500">
              {tl({ id: "Bagikan", en: "Share" })}
            </span>
            <div className="flex gap-2">
              {shareIcons.map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label="Share"
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Berita Lainnya", en: "Other News" })}
          title={tl({ id: "Terus ikuti kabar kami", en: "Keep reading" })}
          action={
            <ButtonLink href="/news" variant="ghost">
              {tl({ id: "Kembali ke Berita", en: "Back to News" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <StaggerItem key={a.slug}>
              <NewsCard article={a} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
