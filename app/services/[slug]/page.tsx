import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/data/services";
import ServiceDetailView from "@/components/views/service-detail-view";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Layanan" };
  return { title: service.title.id, description: service.summary.id };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getService(slug)) notFound();
  return <ServiceDetailView slug={slug} />;
}
