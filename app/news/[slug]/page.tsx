import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/data/news";
import NewsDetailView from "@/components/views/news-detail-view";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Berita" };
  return { title: article.title.id, description: article.excerpt.id };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getArticle(slug)) notFound();
  return <NewsDetailView slug={slug} />;
}
