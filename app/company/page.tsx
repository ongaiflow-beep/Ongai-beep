import type { Metadata } from "next";
import CompanyView from "@/components/views/company-view";

export const metadata: Metadata = {
  title: "Perusahaan Kami",
  description:
    "Profil PT Victory Utama Karya — sejarah, budaya, tonggak pencapaian, dan jajaran manajemen perusahaan konstruksi terpercaya di Jakarta.",
};

export default function CompanyPage() {
  return <CompanyView />;
}
