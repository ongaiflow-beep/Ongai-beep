"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { Media } from "@/components/ui/media";
import { getIcon } from "@/components/ui/icon";
import { useLanguage } from "@/lib/i18n";
import { cn, formatDate } from "@/lib/utils";
import {
  projectCategoryLabel,
  type Project,
} from "@/lib/data/projects";
import { newsCategoryLabel, type Article } from "@/lib/data/news";
import type { Service } from "@/lib/data/services";
import type { TeamMember } from "@/lib/data/team";
import type { CommunityEvent } from "@/lib/data/company";
import type { Job } from "@/lib/data/jobs";

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-ink-300 hover:shadow-card-hover focus-within:ring-2 focus-within:ring-accent";

const mediaZoom =
  "transition-transform duration-[600ms] ease-out-expo group-hover:scale-[1.05]";

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

export function ProjectCard({ project }: { project: Project }) {
  const { tl } = useLanguage();
  const Icon = getIcon(
    project.category === "industrial"
      ? "Factory"
      : project.category === "civil"
        ? "TrafficCone"
        : project.category === "soil-improvement"
          ? "Layers"
          : "Zap",
  );
  return (
    <Link href={`/projects/${project.slug}`} className={cardBase}>
      <div className="overflow-hidden">
        <div className={mediaZoom}>
          <Media
            seed={project.slug}
            ratio="4 / 3"
            rounded={false}
            icon={Icon}
            label={tl(projectCategoryLabel(project.category))}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink-400">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {project.location}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-600">
          {tl(project.title)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{tl(project.scope)}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
          {project.year}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const { tl } = useLanguage();
  const Icon = getIcon(service.icon);
  return (
    <Link href={`/services/${service.slug}`} className={cardBase}>
      <div className="overflow-hidden">
        <div className={mediaZoom}>
          <Media seed={service.slug} ratio="16 / 10" rounded={false} icon={Icon} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-600">
          {tl(service.title)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {tl(service.summary)}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
          {tl({ id: "Lihat layanan", en: "View service" })}
          <ArrowRight className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function NewsCard({ article }: { article: Article }) {
  const { tl, lang } = useLanguage();
  return (
    <Link href={`/news/${article.slug}`} className={cardBase}>
      <div className="overflow-hidden">
        <div className={mediaZoom}>
          <Media
            seed={article.slug}
            ratio="16 / 9"
            rounded={false}
            label={tl(newsCategoryLabel(article.category))}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink-400">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(article.date, lang)}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-accent-600">
          {tl(article.title)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">
          {tl(article.excerpt)}
        </p>
      </div>
    </Link>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  const { tl } = useLanguage();
  return (
    <Link href={`/company/management/${member.slug}`} className={cardBase}>
      <div className="relative overflow-hidden">
        <div className={mediaZoom}>
          <Media seed={member.slug} ratio="3 / 4" rounded={false} />
        </div>
        <span className="pointer-events-none absolute inset-0 grid place-items-center font-heading text-6xl font-bold text-white/15">
          {getInitials(member.name)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-semibold text-ink-900 transition-colors group-hover:text-accent-600">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-ink-500">{tl(member.role)}</p>
      </div>
    </Link>
  );
}

export function EventCard({ event }: { event: CommunityEvent }) {
  const { tl, lang } = useLanguage();
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="overflow-hidden">
        <div className={mediaZoom}>
          <Media
            seed={event.slug}
            ratio="16 / 9"
            rounded={false}
            label={tl(event.category)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink-400">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(event.date, lang)}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-ink-900">
          {tl(event.title)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{tl(event.excerpt)}</p>
      </div>
    </article>
  );
}

export function JobCard({ job }: { job: Job }) {
  const { tl } = useLanguage();
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-ink-300 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-accent-600">
          {tl(job.department)}
        </div>
        <h3 className="mt-1.5 font-heading text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-600">
          {tl(job.title)}
        </h3>
        <p className="mt-1 text-sm text-ink-500">{tl(job.summary)}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            {tl(job.type)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {tl(job.level)}
          </span>
        </div>
      </div>
      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-accent sm:self-center",
        )}
      >
        {tl({ id: "Lamar", en: "Apply" })}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
