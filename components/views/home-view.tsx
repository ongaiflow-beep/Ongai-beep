"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Building2, ShieldCheck, Clock4 } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Section } from "@/components/ui/section";
import { Container, Eyebrow, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/ui/motion";
import { Marquee } from "@/components/ui/marquee";
import { ProjectCard, ServiceCard, NewsCard } from "@/components/cards";
import { CTASection } from "@/components/layout/cta-section";
import { useLanguage } from "@/lib/i18n";
import { site, clients } from "@/lib/data/site";
import { about, stats } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { articles } from "@/lib/data/news";

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeView() {
  const { tl } = useLanguage();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latestNews = articles.slice(0, 3);

  const aboutHighlights = [
    { Icon: ShieldCheck, text: { id: "Tersertifikasi ISO 9001 & 45001", en: "ISO 9001 & 45001 certified" } },
    { Icon: Building2, text: { id: "Layanan konstruksi terintegrasi", en: "Integrated construction services" } },
    { Icon: Clock4, text: { id: "Rekam jejak penyelesaian tepat waktu", en: "A track record of on-time delivery" } },
  ];

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-950 pb-20 pt-32 sm:pt-40">
        <Media fill seed="home-hero-victory" overlay rounded={false} kenBurns />
        <Container className="relative z-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={heroItem}>
              <Eyebrow light>
                {tl({ id: "Sejak 1999 · Jakarta, Indonesia", en: "Since 1999 · Jakarta, Indonesia" })}
              </Eyebrow>
            </motion.div>
            <motion.h1
              variants={heroItem}
              className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {tl({
                id: "Membangun Masa Depan Indonesia.",
                en: "Building Indonesia's Future.",
              })}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200"
            >
              {tl({
                id: "Kontraktor konstruksi terintegrasi untuk proyek industri, sipil, perbaikan tanah, dan ketenagalistrikan — dikerjakan dengan mutu dan keselamatan kelas dunia.",
                en: "An integrated construction contractor for industrial, civil, soil-improvement, and electrical-power projects — delivered to world-class quality and safety standards.",
              })}
            </motion.p>
            <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/projects" variant="solid">
                {tl({ id: "Lihat Proyek Kami", en: "View Our Projects" })}
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineLight">
                {tl({ id: "Hubungi Kami", en: "Get in Touch" })}
              </ButtonLink>
            </motion.div>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
              {tl({ id: "Gulir", en: "Scroll" })}
            </span>
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- CLIENT MARQUEE ---------------- */}
      <div className="border-b border-ink-100 bg-white py-10">
        <Container>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            {tl({ id: "Dipercaya oleh perusahaan terkemuka", en: "Trusted by leading companies" })}
          </p>
          <Marquee items={clients} />
        </Container>
      </div>

      {/* ---------------- ABOUT TEASER ---------------- */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <Media seed="about-victory-team" ratio="4 / 3" icon={Building2} />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-ink-100 bg-white p-6 shadow-card sm:block">
                <div className="font-heading text-4xl font-bold text-ink-900">
                  <CountUp to={site.founded === 1999 ? 27 : 25} suffix="+" />
                </div>
                <div className="mt-1 text-sm text-ink-500">
                  {tl({ id: "Tahun membangun", en: "Years building" })}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>{tl({ id: "Tentang Victory", en: "About Victory" })}</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {tl({
                id: "Mitra konstruksi terpercaya, dari fondasi hingga serah terima.",
                en: "A trusted construction partner, from foundation to handover.",
              })}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{tl(about.lead)}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">{tl(about.body)}</p>
            <ul className="mt-7 space-y-3">
              {aboutHighlights.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-ink-700">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{tl(text)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/company" variant="outline">
                {tl({ id: "Tentang Perusahaan Kami", en: "Learn About Our Company" })}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- SERVICES PREVIEW ---------------- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Apa yang kami kerjakan", en: "What we do" })}
          title={tl({ id: "Layanan konstruksi menyeluruh", en: "End-to-end construction services" })}
          action={
            <ButtonLink href="/services" variant="ghost">
              {tl({ id: "Semua Layanan", en: "All Services" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={tl({ id: "Karya unggulan", en: "Featured work" })}
          title={tl({ id: "Proyek yang kami banggakan", en: "Projects we're proud of" })}
          action={
            <ButtonLink href="/projects" variant="ghost">
              {tl({ id: "Semua Proyek", en: "All Projects" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- STATS ---------------- */}
      <Section tone="blueprint">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label.en} className="text-center">
              <div className="font-heading text-4xl font-bold text-white sm:text-5xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-ink-400">{tl(stat.label)}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- NEWS PREVIEW ---------------- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={tl({ id: "Kabar terbaru", en: "Latest updates" })}
          title={tl({ id: "Berita & wawasan", en: "News & insights" })}
          action={
            <ButtonLink href="/news" variant="ghost">
              {tl({ id: "Semua Berita", en: "All News" })}
            </ButtonLink>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article) => (
            <StaggerItem key={article.slug}>
              <NewsCard article={article} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
