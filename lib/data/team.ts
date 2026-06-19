import type { Localized } from "@/lib/types";

export type TeamCategoryKey = "board" | "commissioners" | "divisions";

export const teamCategories: { key: TeamCategoryKey; label: Localized }[] = [
  { key: "board", label: { id: "Dewan Direksi", en: "Board of Directors" } },
  { key: "commissioners", label: { id: "Dewan Komisaris", en: "Commissioners" } },
  { key: "divisions", label: { id: "Kepala Divisi", en: "Division Heads" } },
];

export function teamCategoryLabel(key: TeamCategoryKey): Localized {
  return (
    teamCategories.find((c) => c.key === key)?.label ?? { id: key, en: key }
  );
}

export interface TeamMember {
  slug: string;
  name: string;
  role: Localized;
  category: TeamCategoryKey;
  bio: Localized;
  credentials: Localized<string[]>;
}

export const team: TeamMember[] = [
  {
    slug: "bambang-suryanto",
    name: "Ir. Bambang Suryanto, M.T.",
    role: { id: "Direktur Utama", en: "President Director" },
    category: "board",
    bio: {
      id: "Memimpin Victory Utama Karya sejak 2008 dengan lebih dari 30 tahun pengalaman di konstruksi industri dan infrastruktur.",
      en: "Has led Victory Utama Karya since 2008 with over 30 years of experience in industrial and infrastructure construction.",
    },
    credentials: {
      id: ["Magister Teknik Sipil, ITB", "Insinyur Profesional Utama (IPU)", "30+ tahun pengalaman"],
      en: ["Master of Civil Engineering, ITB", "Chartered Professional Engineer", "30+ years of experience"],
    },
  },
  {
    slug: "hendra-wijaya",
    name: "Ir. Hendra Wijaya",
    role: { id: "Direktur Operasional", en: "Director of Operations" },
    category: "board",
    bio: {
      id: "Bertanggung jawab atas pelaksanaan proyek di seluruh wilayah, dengan fokus pada mutu dan ketepatan waktu.",
      en: "Responsible for project delivery across all regions, with a focus on quality and on-time completion.",
    },
    credentials: {
      id: ["Sarjana Teknik Sipil, UI", "Ahli Manajemen Proyek", "25+ tahun pengalaman"],
      en: ["Bachelor of Civil Engineering, UI", "Project Management Expert", "25+ years of experience"],
    },
  },
  {
    slug: "dewi-anggraini",
    name: "Dewi Anggraini, M.M.",
    role: { id: "Direktur Keuangan", en: "Finance Director" },
    category: "board",
    bio: {
      id: "Mengelola strategi keuangan dan tata kelola perusahaan untuk mendukung pertumbuhan yang berkelanjutan.",
      en: "Oversees financial strategy and corporate governance to support sustainable growth.",
    },
    credentials: {
      id: ["Magister Manajemen, UGM", "Akuntan bersertifikat", "20+ tahun pengalaman"],
      en: ["Master of Management, UGM", "Certified Accountant", "20+ years of experience"],
    },
  },
  {
    slug: "soeharto-tanuwijaya",
    name: "Drs. Soeharto Tanuwijaya",
    role: { id: "Komisaris Utama", en: "President Commissioner" },
    category: "commissioners",
    bio: {
      id: "Memberikan arahan strategis dan pengawasan tata kelola sebagai komisaris utama perusahaan.",
      en: "Provides strategic direction and governance oversight as the company's president commissioner.",
    },
    credentials: {
      id: ["Pendiri perusahaan", "35+ tahun di industri konstruksi"],
      en: ["Company founder", "35+ years in the construction industry"],
    },
  },
  {
    slug: "retno-kusumawati",
    name: "Prof. Dr. Ir. Retno Kusumawati",
    role: { id: "Komisaris", en: "Commissioner" },
    category: "commissioners",
    bio: {
      id: "Akademisi dan praktisi rekayasa geoteknik yang memperkuat pengawasan teknis perusahaan.",
      en: "An academic and geotechnical engineering practitioner who strengthens the company's technical oversight.",
    },
    credentials: {
      id: ["Guru Besar Teknik Sipil", "Pakar geoteknik", "Konsultan infrastruktur"],
      en: ["Professor of Civil Engineering", "Geotechnical expert", "Infrastructure consultant"],
    },
  },
  {
    slug: "agus-salim",
    name: "Agus Salim, S.T.",
    role: { id: "Kepala Divisi Rekayasa", en: "Head of Engineering" },
    category: "divisions",
    bio: {
      id: "Memimpin tim rekayasa dalam perencanaan struktur dan optimasi desain untuk proyek-proyek kompleks.",
      en: "Leads the engineering team in structural planning and design optimisation for complex projects.",
    },
    credentials: {
      id: ["Sarjana Teknik Sipil", "Ahli struktur", "BIM specialist"],
      en: ["Bachelor of Civil Engineering", "Structural specialist", "BIM specialist"],
    },
  },
  {
    slug: "rina-marlina",
    name: "Rina Marlina, S.T., M.T.",
    role: { id: "Kepala Divisi K3 (HSE)", en: "Head of HSE" },
    category: "divisions",
    bio: {
      id: "Membangun dan menjaga budaya keselamatan kerja yang menjadi standar di setiap lokasi proyek.",
      en: "Builds and sustains the workplace-safety culture that sets the standard on every site.",
    },
    credentials: {
      id: ["Ahli K3 Konstruksi", "Auditor ISO 45001", "15+ tahun pengalaman"],
      en: ["Construction HSE Expert", "ISO 45001 Auditor", "15+ years of experience"],
    },
  },
  {
    slug: "budi-hartono",
    name: "Budi Hartono",
    role: { id: "Kepala Divisi Alat Berat", en: "Head of Heavy Equipment" },
    category: "divisions",
    bio: {
      id: "Mengelola armada dan operasi penyewaan alat berat untuk mendukung proyek internal dan klien eksternal.",
      en: "Manages the fleet and heavy-equipment rental operations supporting internal projects and external clients.",
    },
    credentials: {
      id: ["Manajemen alat berat", "Sertifikasi operator", "18+ tahun pengalaman"],
      en: ["Heavy-equipment management", "Operator certification", "18+ years of experience"],
    },
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
