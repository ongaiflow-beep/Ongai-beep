import type { Localized } from "@/lib/types";

export type ProjectCategoryKey =
  | "industrial"
  | "civil"
  | "soil-improvement"
  | "electrical-power";

export interface ProjectCategory {
  key: ProjectCategoryKey;
  label: Localized;
  icon: string;
}

export const projectCategories: ProjectCategory[] = [
  { key: "industrial", label: { id: "Industri", en: "Industrial" }, icon: "Factory" },
  { key: "civil", label: { id: "Sipil", en: "Civil" }, icon: "TrafficCone" },
  { key: "soil-improvement", label: { id: "Perbaikan Tanah", en: "Soil Improvement" }, icon: "Layers" },
  { key: "electrical-power", label: { id: "Ketenagalistrikan", en: "Electrical Power" }, icon: "Zap" },
];

export function projectCategoryLabel(key: ProjectCategoryKey): Localized {
  return (
    projectCategories.find((c) => c.key === key)?.label ?? { id: key, en: key }
  );
}

export interface Project {
  slug: string;
  title: Localized;
  category: ProjectCategoryKey;
  location: string;
  year: string;
  client: string;
  scope: Localized;
  overview: Localized;
  servicesUsed: Localized[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "cikarang-manufacturing-plant",
    title: { id: "Pabrik Manufaktur Cikarang", en: "Cikarang Manufacturing Plant" },
    category: "industrial",
    location: "Cikarang, Bekasi",
    year: "2023",
    client: "Sentosa Industri",
    scope: { id: "Struktur baja & sipil, 28.000 m²", en: "Steel & civil structure, 28,000 m²" },
    overview: {
      id: "Pembangunan fasilitas manufaktur seluas 28.000 m² mencakup struktur baja bentang lebar, lantai industri, dan infrastruktur pendukung. Proyek selesai dua minggu lebih awal dengan rekor nihil kecelakaan kerja.",
      en: "Construction of a 28,000 m² manufacturing facility comprising long-span steel structures, industrial flooring, and supporting infrastructure. The project finished two weeks early with a zero-accident record.",
    },
    servicesUsed: [
      { id: "Struktur Bangunan", en: "Building Structure" },
      { id: "Elektrikal", en: "Electrical" },
    ],
    featured: true,
  },
  {
    slug: "trans-jawa-flyover",
    title: { id: "Flyover Tol Trans-Jawa", en: "Trans-Java Toll Flyover" },
    category: "civil",
    location: "Jawa Tengah",
    year: "2022",
    client: "Cakra Infrastruktur",
    scope: { id: "Jembatan layang 1,2 km", en: "1.2 km elevated bridge" },
    overview: {
      id: "Pekerjaan struktur jembatan layang sepanjang 1,2 km menggunakan girder beton pratekan, termasuk pekerjaan pondasi bored pile dan pier head di lokasi dengan lalu lintas padat.",
      en: "Structural works for a 1.2 km elevated bridge using prestressed concrete girders, including bored-pile foundations and pier heads on a high-traffic corridor.",
    },
    servicesUsed: [{ id: "Struktur Bangunan", en: "Building Structure" }],
    featured: true,
  },
  {
    slug: "tanjung-priok-ground-improvement",
    title: { id: "Perbaikan Tanah Tanjung Priok", en: "Tanjung Priok Ground Improvement" },
    category: "soil-improvement",
    location: "Jakarta Utara",
    year: "2021",
    client: "Samudra Port",
    scope: { id: "Vacuum consolidation 14 ha", en: "Vacuum consolidation, 14 ha" },
    overview: {
      id: "Perbaikan tanah lunak pada area perluasan pelabuhan seluas 14 hektar menggunakan metode preloading dan vacuum consolidation untuk mempercepat penurunan dan meningkatkan daya dukung.",
      en: "Soft-soil improvement across a 14-hectare port expansion area using preloading and vacuum consolidation to accelerate settlement and increase bearing capacity.",
    },
    servicesUsed: [{ id: "Sewa Alat Berat", en: "Heavy Equipment Rental" }],
    featured: true,
  },
  {
    slug: "banten-gis-substation",
    title: { id: "Gardu Induk GIS Banten", en: "Banten GIS Substation" },
    category: "electrical-power",
    location: "Cilegon, Banten",
    year: "2023",
    client: "Nusantara Energy",
    scope: { id: "Gardu induk 150 kV", en: "150 kV substation" },
    overview: {
      id: "Pembangunan gardu induk Gas Insulated Switchgear (GIS) 150 kV mencakup pekerjaan sipil, instalasi elektrikal, serta testing dan commissioning sistem proteksi.",
      en: "Construction of a 150 kV Gas Insulated Switchgear (GIS) substation covering civil works, electrical installation, and protection-system testing and commissioning.",
    },
    servicesUsed: [{ id: "Elektrikal", en: "Electrical" }],
  },
  {
    slug: "karawang-logistics-warehouse",
    title: { id: "Gudang Logistik Karawang", en: "Karawang Logistics Warehouse" },
    category: "industrial",
    location: "Karawang, Jawa Barat",
    year: "2024",
    client: "Bumi Logistics",
    scope: { id: "Gudang 42.000 m²", en: "42,000 m² warehouse" },
    overview: {
      id: "Pembangunan pusat distribusi modern seluas 42.000 m² dengan struktur baja pre-engineered, dock leveler, dan sistem proteksi kebakaran terpadu.",
      en: "A modern 42,000 m² distribution centre with pre-engineered steel structure, dock levelers, and an integrated fire-protection system.",
    },
    servicesUsed: [
      { id: "Struktur Bangunan", en: "Building Structure" },
      { id: "Elektrikal", en: "Electrical" },
    ],
  },
  {
    slug: "scbd-office-tower",
    title: { id: "Menara Perkantoran SCBD", en: "SCBD Office Tower" },
    category: "civil",
    location: "Jakarta Selatan",
    year: "2024",
    client: "Graha Property",
    scope: { id: "Gedung 32 lantai", en: "32-storey building" },
    overview: {
      id: "Pekerjaan struktur dan arsitektur menara perkantoran 32 lantai di kawasan SCBD, termasuk basement 4 lantai dan fasad curtain wall berperforma tinggi.",
      en: "Structural and architectural works for a 32-storey office tower in the SCBD district, including a four-level basement and a high-performance curtain-wall facade.",
    },
    servicesUsed: [
      { id: "Struktur Bangunan", en: "Building Structure" },
      { id: "Arsitektur", en: "Architectural" },
      { id: "Interior", en: "Interior" },
    ],
    featured: true,
  },
  {
    slug: "surabaya-reclamation",
    title: { id: "Perbaikan Tanah Reklamasi Surabaya", en: "Surabaya Reclamation Improvement" },
    category: "soil-improvement",
    location: "Surabaya, Jawa Timur",
    year: "2020",
    client: "Samudra Port",
    scope: { id: "Stone column 9 ha", en: "Stone columns, 9 ha" },
    overview: {
      id: "Pekerjaan perbaikan tanah pada lahan reklamasi seluas 9 hektar menggunakan metode stone column untuk meningkatkan kepadatan dan mengurangi potensi likuifaksi.",
      en: "Ground improvement on a 9-hectare reclaimed site using the stone-column method to increase density and reduce liquefaction potential.",
    },
    servicesUsed: [{ id: "Sewa Alat Berat", en: "Heavy Equipment Rental" }],
  },
  {
    slug: "west-java-solar-farm",
    title: { id: "PLTS Jawa Barat", en: "West Java Solar Farm" },
    category: "electrical-power",
    location: "Sukabumi, Jawa Barat",
    year: "2022",
    client: "Nusantara Energy",
    scope: { id: "PLTS 25 MWp", en: "25 MWp solar plant" },
    overview: {
      id: "Pekerjaan balance of plant untuk Pembangkit Listrik Tenaga Surya 25 MWp, mencakup pondasi, struktur penyangga panel, dan jaringan pengumpul daya.",
      en: "Balance-of-plant works for a 25 MWp solar power plant, including foundations, panel mounting structures, and the power collection network.",
    },
    servicesUsed: [
      { id: "Struktur Bangunan", en: "Building Structure" },
      { id: "Elektrikal", en: "Electrical" },
    ],
  },
  {
    slug: "cilegon-petrochemical-facility",
    title: { id: "Fasilitas Petrokimia Cilegon", en: "Cilegon Petrochemical Facility" },
    category: "industrial",
    location: "Cilegon, Banten",
    year: "2023",
    client: "Anugerah Group",
    scope: { id: "Struktur & perpipaan", en: "Structure & piping" },
    overview: {
      id: "Pekerjaan struktur pendukung dan pipe rack untuk perluasan fasilitas petrokimia, dilaksanakan dengan standar keselamatan industri proses yang ketat.",
      en: "Support structures and pipe-rack works for a petrochemical facility expansion, executed to strict process-industry safety standards.",
    },
    servicesUsed: [
      { id: "Struktur Bangunan", en: "Building Structure" },
      { id: "Elektrikal", en: "Electrical" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
