import type { Metadata } from "next";
import CareersView from "@/components/views/careers-view";

export const metadata: Metadata = {
  title: "Karier",
  description:
    "Bergabung dengan PT Victory Utama Karya. Temukan lowongan kerja di bidang rekayasa, manajemen proyek, K3, dan operasional konstruksi.",
};

export default function CareersPage() {
  return <CareersView />;
}
