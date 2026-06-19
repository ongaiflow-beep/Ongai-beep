import type { Metadata } from "next";
import ProjectsView from "@/components/views/projects-view";

export const metadata: Metadata = {
  title: "Proyek Kami",
  description:
    "Portofolio proyek PT Victory Utama Karya di sektor industri, sipil, perbaikan tanah, dan ketenagalistrikan di seluruh Indonesia.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
