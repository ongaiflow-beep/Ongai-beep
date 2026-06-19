import type { Metadata } from "next";
import NewsView from "@/components/views/news-view";

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Berita perusahaan dan wawasan industri dari PT Victory Utama Karya — proyek terbaru, pencapaian, dan tren konstruksi.",
};

export default function NewsPage() {
  return <NewsView />;
}
