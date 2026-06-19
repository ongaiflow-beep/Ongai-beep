import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs, getJob } from "@/lib/data/jobs";
import JobDetailView from "@/components/views/job-detail-view";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Karier" };
  return { title: job.title.id, description: job.summary.id };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getJob(slug)) notFound();
  return <JobDetailView slug={slug} />;
}
