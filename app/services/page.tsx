import type { Metadata } from "next";
import ServicesView from "@/components/views/services-view";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description:
    "Layanan konstruksi terintegrasi PT Victory Utama Karya: struktur bangunan, arsitektur, interior, elektrikal, dan penyewaan alat berat.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
