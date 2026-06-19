import type { Localized } from "@/lib/types";

export const about = {
  lead: {
    id: "Sejak 1999, Victory Utama Karya tumbuh dari kontraktor spesialis menjadi mitra konstruksi terpercaya bagi industri, pemerintah, dan pengembang di seluruh Indonesia.",
    en: "Since 1999, Victory Utama Karya has grown from a specialist contractor into a trusted construction partner for industry, government, and developers across Indonesia.",
  } as Localized,
  body: {
    id: "Berkantor pusat di Jakarta, kami mengintegrasikan rekayasa struktur, arsitektur, interior, sistem elektrikal, dan penyewaan alat berat dalam satu rantai layanan yang utuh. Lebih dari 340 proyek telah kami selesaikan dengan komitmen pada mutu, ketepatan waktu, dan keselamatan kerja (K3) tanpa kompromi.",
    en: "Headquartered in Jakarta, we integrate structural engineering, architecture, interiors, electrical systems, and heavy-equipment rental into a single seamless service chain. We have delivered more than 340 projects with an uncompromising commitment to quality, on-time delivery, and occupational health & safety.",
  } as Localized,
  vision: {
    id: "Menjadi perusahaan konstruksi nasional yang paling dipercaya dan berkelanjutan.",
    en: "To be the most trusted and sustainable national construction company.",
  } as Localized,
  mission: {
    id: "Menghadirkan solusi konstruksi terintegrasi yang aman, bermutu, dan tepat waktu bagi setiap klien.",
    en: "To deliver integrated construction solutions that are safe, high-quality, and on time for every client.",
  } as Localized,
};

export interface Value {
  icon: string;
  title: Localized;
  body: Localized;
}

export const values: Value[] = [
  {
    icon: "ShieldCheck",
    title: { id: "Integritas", en: "Integrity" },
    body: {
      id: "Transparan dan akuntabel dalam setiap keputusan, dari penawaran hingga serah terima.",
      en: "Transparent and accountable in every decision, from tender to handover.",
    },
  },
  {
    icon: "HardHat",
    title: { id: "Keselamatan", en: "Safety First" },
    body: {
      id: "Budaya K3 yang melekat — target nihil kecelakaan di setiap lokasi proyek.",
      en: "An embedded HSE culture — a zero-accident target on every site.",
    },
  },
  {
    icon: "Award",
    title: { id: "Mutu", en: "Quality" },
    body: {
      id: "Standar mutu bersertifikasi ISO di seluruh tahapan pekerjaan konstruksi.",
      en: "ISO-certified quality standards across every stage of construction.",
    },
  },
  {
    icon: "Leaf",
    title: { id: "Keberlanjutan", en: "Sustainability" },
    body: {
      id: "Metode kerja efisien dan ramah lingkungan untuk dampak jangka panjang.",
      en: "Efficient, environmentally responsible methods for long-term impact.",
    },
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: Localized;
}

export const stats: Stat[] = [
  { value: 27, suffix: "+", label: { id: "Tahun Pengalaman", en: "Years of Experience" } },
  { value: 340, suffix: "+", label: { id: "Proyek Selesai", en: "Projects Completed" } },
  { value: 1200, suffix: "+", label: { id: "Tenaga Ahli & Pekerja", en: "Skilled Workforce" } },
  { value: 17, suffix: "", label: { id: "Provinsi Jangkauan", en: "Provinces Reached" } },
];

export interface Milestone {
  year: string;
  title: Localized;
  body: Localized;
}

export const milestones: Milestone[] = [
  {
    year: "1999",
    title: { id: "Awal Mula di Jakarta", en: "Founded in Jakarta" },
    body: {
      id: "Didirikan sebagai kontraktor spesialis struktur dengan tim inti 12 orang.",
      en: "Established as a specialist structural contractor with a core team of 12.",
    },
  },
  {
    year: "2005",
    title: { id: "Sertifikasi ISO 9001", en: "ISO 9001 Certified" },
    body: {
      id: "Menyelesaikan proyek industri besar pertama dan meraih sertifikasi mutu.",
      en: "Completed our first major industrial project and earned quality certification.",
    },
  },
  {
    year: "2011",
    title: { id: "Ekspansi Sipil & Infrastruktur", en: "Civil & Infrastructure Expansion" },
    body: {
      id: "Memperluas layanan ke pekerjaan sipil, jalan, dan jembatan.",
      en: "Expanded into civil works, roads, and bridges.",
    },
  },
  {
    year: "2016",
    title: { id: "Sertifikasi K3 (ISO 45001)", en: "Safety Certified (ISO 45001)" },
    body: {
      id: "Menembus 100 proyek selesai dengan rekor keselamatan yang kuat.",
      en: "Passed 100 completed projects with a strong safety record.",
    },
  },
  {
    year: "2020",
    title: { id: "Divisi Alat Berat & Digital", en: "Heavy Equipment & Digital" },
    body: {
      id: "Meluncurkan divisi penyewaan alat berat dan manajemen proyek berbasis digital.",
      en: "Launched the heavy-equipment rental division and digital project management.",
    },
  },
  {
    year: "2024",
    title: { id: "340+ Proyek Nasional", en: "340+ National Projects" },
    body: {
      id: "Memperluas jangkauan ke 17 provinsi dengan portofolio lintas sektor.",
      en: "Extended our reach to 17 provinces with a cross-sector portfolio.",
    },
  },
];

export interface CommunityEvent {
  slug: string;
  category: Localized;
  date: string;
  title: Localized;
  excerpt: Localized;
}

export const events: CommunityEvent[] = [
  {
    slug: "beasiswa-vokasi-2024",
    category: { id: "Pendidikan", en: "Education" },
    date: "2024-11-12",
    title: {
      id: "Beasiswa Vokasi untuk Calon Tenaga Konstruksi",
      en: "Vocational Scholarships for Future Builders",
    },
    excerpt: {
      id: "Program beasiswa bagi 50 siswa SMK jurusan teknik bangunan di Jabodetabek.",
      en: "A scholarship program for 50 vocational students in building engineering across Greater Jakarta.",
    },
  },
  {
    slug: "donor-darah-k3",
    category: { id: "Sosial", en: "Community" },
    date: "2024-08-20",
    title: {
      id: "Bulan K3: Donor Darah & Pemeriksaan Kesehatan",
      en: "Safety Month: Blood Drive & Health Checks",
    },
    excerpt: {
      id: "Kegiatan tahunan memperingati Bulan Keselamatan dan Kesehatan Kerja Nasional.",
      en: "An annual activity marking National Occupational Health & Safety Month.",
    },
  },
  {
    slug: "penghijauan-pesisir",
    category: { id: "Lingkungan", en: "Environment" },
    date: "2024-04-22",
    title: {
      id: "Penghijauan Pesisir Bersama Warga",
      en: "Coastal Reforestation with Local Communities",
    },
    excerpt: {
      id: "Penanaman 5.000 mangrove di pesisir utara Jakarta pada Hari Bumi.",
      en: "Planting 5,000 mangroves along North Jakarta's coast on Earth Day.",
    },
  },
];
