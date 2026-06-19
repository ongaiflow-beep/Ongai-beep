import type { Localized } from "@/lib/types";

export interface KeyFact {
  label: Localized;
  value: Localized;
}

export interface Service {
  slug: string;
  /** lucide-react icon name */
  icon: string;
  title: Localized;
  tagline: Localized;
  summary: Localized;
  description: Localized;
  capabilities: Localized<string[]>;
  keyFacts: KeyFact[];
}

export const services: Service[] = [
  {
    slug: "building-structure",
    icon: "Building2",
    title: { id: "Struktur Bangunan", en: "Building Structure" },
    tagline: {
      id: "Fondasi hingga atap, dirancang untuk bertahan.",
      en: "From foundation to roof, engineered to last.",
    },
    summary: {
      id: "Pekerjaan struktur beton dan baja untuk gedung tinggi, pabrik, dan infrastruktur.",
      en: "Concrete and steel structural works for high-rises, plants, and infrastructure.",
    },
    description: {
      id: "Kami menangani seluruh siklus pekerjaan struktur — mulai dari pondasi dalam, struktur beton bertulang, hingga konstruksi baja bentang lebar. Setiap pekerjaan didukung perhitungan rekayasa, kontrol mutu material, dan pengawasan lapangan yang ketat untuk memastikan keandalan jangka panjang.",
      en: "We handle the full structural lifecycle — from deep foundations and reinforced-concrete frames to long-span steel construction. Every package is backed by engineering analysis, material quality control, and rigorous site supervision to ensure long-term reliability.",
    },
    capabilities: {
      id: ["Pondasi dalam & dangkal", "Struktur beton bertulang", "Konstruksi baja", "Precast & post-tension", "Retrofit & perkuatan struktur"],
      en: ["Deep & shallow foundations", "Reinforced concrete frames", "Steel construction", "Precast & post-tension", "Structural retrofit & strengthening"],
    },
    keyFacts: [
      { label: { id: "Kapasitas", en: "Capacity" }, value: { id: "Gedung 1–40 lantai", en: "1–40 storey buildings" } },
      { label: { id: "Standar", en: "Standards" }, value: { id: "SNI 2847 & ISO 9001", en: "SNI 2847 & ISO 9001" } },
      { label: { id: "Garansi Mutu", en: "Quality Warranty" }, value: { id: "Hingga 10 tahun", en: "Up to 10 years" } },
    ],
  },
  {
    slug: "architectural",
    icon: "DraftingCompass",
    title: { id: "Arsitektur", en: "Architectural" },
    tagline: {
      id: "Bentuk yang fungsional, detail yang presisi.",
      en: "Functional form, precise detailing.",
    },
    summary: {
      id: "Pekerjaan arsitektur fasad, finishing, dan selubung bangunan berkualitas tinggi.",
      en: "High-quality facade, finishing, and building-envelope architectural works.",
    },
    description: {
      id: "Tim arsitektur kami menerjemahkan desain menjadi hasil bangun yang akurat — fasad, curtain wall, pekerjaan basah dan kering, hingga finishing presisi. Kami menyeimbangkan estetika, kemudahan perawatan, dan efisiensi biaya tanpa mengorbankan kualitas.",
      en: "Our architectural team turns design into accurate built results — facades, curtain walls, wet and dry works, and precision finishing. We balance aesthetics, maintainability, and cost efficiency without compromising quality.",
    },
    capabilities: {
      id: ["Fasad & curtain wall", "Pekerjaan finishing", "Waterproofing", "Pasangan & plesteran", "Pekerjaan atap"],
      en: ["Facades & curtain walls", "Finishing works", "Waterproofing", "Masonry & plastering", "Roofing works"],
    },
    keyFacts: [
      { label: { id: "Spesialisasi", en: "Specialty" }, value: { id: "Fasad komersial", en: "Commercial facades" } },
      { label: { id: "Material", en: "Materials" }, value: { id: "ACP, kaca, GRC, batu alam", en: "ACP, glass, GRC, stone" } },
      { label: { id: "Toleransi", en: "Tolerance" }, value: { id: "± 2 mm", en: "± 2 mm" } },
    ],
  },
  {
    slug: "interior",
    icon: "Sofa",
    title: { id: "Interior", en: "Interior" },
    tagline: {
      id: "Ruang kerja dan komersial yang bekerja keras.",
      en: "Workspaces and commercial interiors that perform.",
    },
    summary: {
      id: "Desain dan pembangunan interior kantor, ritel, dan fasilitas industri.",
      en: "Design-and-build interiors for offices, retail, and industrial facilities.",
    },
    description: {
      id: "Dari fit-out kantor korporat hingga ruang ritel dan fasilitas pendukung industri, kami menghadirkan interior yang rapi, tahan lama, dan sesuai jadwal. Pendekatan design-and-build kami menyederhanakan koordinasi dan mempercepat penyelesaian.",
      en: "From corporate office fit-outs to retail spaces and industrial support facilities, we deliver interiors that are clean, durable, and on schedule. Our design-and-build approach simplifies coordination and speeds completion.",
    },
    capabilities: {
      id: ["Fit-out kantor", "Interior ritel", "Partisi & plafon", "Furniture custom", "Pencahayaan & akustik"],
      en: ["Office fit-out", "Retail interiors", "Partitions & ceilings", "Custom joinery", "Lighting & acoustics"],
    },
    keyFacts: [
      { label: { id: "Model", en: "Model" }, value: { id: "Design & Build", en: "Design & Build" } },
      { label: { id: "Durasi Rata-rata", en: "Avg. Duration" }, value: { id: "8–16 minggu", en: "8–16 weeks" } },
      { label: { id: "Cakupan", en: "Scope" }, value: { id: "Turnkey", en: "Turnkey" } },
    ],
  },
  {
    slug: "electrical",
    icon: "Zap",
    title: { id: "Elektrikal", en: "Electrical" },
    tagline: {
      id: "Daya yang andal, sistem yang aman.",
      en: "Reliable power, safe systems.",
    },
    summary: {
      id: "Sistem kelistrikan, MEP, dan instrumentasi untuk gedung dan industri.",
      en: "Electrical, MEP, and instrumentation systems for buildings and industry.",
    },
    description: {
      id: "Kami merancang dan memasang sistem distribusi daya, panel, penerangan, proteksi petir, serta instrumentasi industri. Setiap instalasi diuji dan ditera untuk memenuhi standar keandalan dan keselamatan kelistrikan.",
      en: "We design and install power distribution, switchgear, lighting, lightning protection, and industrial instrumentation. Every installation is tested and commissioned to meet electrical reliability and safety standards.",
    },
    capabilities: {
      id: ["Distribusi daya & panel", "Penerangan & stop kontak", "Proteksi petir & grounding", "Genset & UPS", "Instrumentasi & kontrol"],
      en: ["Power distribution & switchgear", "Lighting & power outlets", "Lightning protection & grounding", "Gensets & UPS", "Instrumentation & control"],
    },
    keyFacts: [
      { label: { id: "Tegangan", en: "Voltage" }, value: { id: "LV & MV hingga 20 kV", en: "LV & MV up to 20 kV" } },
      { label: { id: "Sertifikasi", en: "Certification" }, value: { id: "SLO & K3 Listrik", en: "Operation-worthiness & electrical safety" } },
      { label: { id: "Layanan", en: "Service" }, value: { id: "Testing & commissioning", en: "Testing & commissioning" } },
    ],
  },
  {
    slug: "heavy-equipment-rental",
    icon: "Truck",
    title: { id: "Sewa Alat Berat", en: "Heavy Equipment Rental" },
    tagline: {
      id: "Armada siap kerja, dengan atau tanpa operator.",
      en: "A work-ready fleet, with or without operators.",
    },
    summary: {
      id: "Penyewaan crane, excavator, dan alat berat lengkap dengan operator bersertifikat.",
      en: "Rental of cranes, excavators, and heavy equipment with certified operators.",
    },
    description: {
      id: "Divisi alat berat kami menyediakan armada terawat — excavator, crane, bulldozer, hingga pile driver — untuk disewa harian, bulanan, atau per proyek. Tersedia opsi dengan operator bersertifikat dan dukungan perawatan di lapangan.",
      en: "Our heavy-equipment division provides a well-maintained fleet — excavators, cranes, bulldozers, and pile drivers — available daily, monthly, or per project. Options include certified operators and on-site maintenance support.",
    },
    capabilities: {
      id: ["Excavator & bulldozer", "Mobile & tower crane", "Pile driver & bored pile rig", "Dump truck & loader", "Operator bersertifikat"],
      en: ["Excavators & bulldozers", "Mobile & tower cranes", "Pile drivers & bored-pile rigs", "Dump trucks & loaders", "Certified operators"],
    },
    keyFacts: [
      { label: { id: "Armada", en: "Fleet" }, value: { id: "120+ unit", en: "120+ units" } },
      { label: { id: "Skema", en: "Terms" }, value: { id: "Harian / bulanan / proyek", en: "Daily / monthly / per project" } },
      { label: { id: "Dukungan", en: "Support" }, value: { id: "Perawatan 24/7", en: "24/7 maintenance" } },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
