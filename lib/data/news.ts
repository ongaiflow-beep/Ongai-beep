import type { Localized } from "@/lib/types";

export type NewsCategoryKey = "company" | "industry";

export const newsCategories: { key: NewsCategoryKey; label: Localized }[] = [
  { key: "company", label: { id: "Berita Perusahaan", en: "Company News" } },
  { key: "industry", label: { id: "Berita Industri", en: "Industry News" } },
];

export function newsCategoryLabel(key: NewsCategoryKey): Localized {
  return (
    newsCategories.find((c) => c.key === key)?.label ?? { id: key, en: key }
  );
}

export interface Article {
  slug: string;
  category: NewsCategoryKey;
  date: string;
  author: string;
  title: Localized;
  excerpt: Localized;
  body: Localized<string[]>;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "vuk-selesaikan-menara-scbd",
    category: "company",
    date: "2024-12-02",
    author: "Tim Komunikasi VUK",
    title: {
      id: "Victory Utama Karya Selesaikan Menara Perkantoran 32 Lantai di SCBD",
      en: "Victory Utama Karya Completes 32-Storey Office Tower in SCBD",
    },
    excerpt: {
      id: "Proyek menara perkantoran kelas A diselesaikan tepat waktu dengan rekor keselamatan yang kuat.",
      en: "A Class-A office tower delivered on schedule with a strong safety record.",
    },
    body: {
      id: [
        "Victory Utama Karya secara resmi menyerahkan menara perkantoran 32 lantai di kawasan Sudirman Central Business District (SCBD), Jakarta Selatan, kepada klien pada awal Desember.",
        "Proyek ini mencakup struktur utama, basement empat lantai, dan fasad curtain wall berperforma tinggi yang dirancang untuk efisiensi energi.",
        "“Pencapaian ini adalah hasil koordinasi tim yang solid dan komitmen pada keselamatan,” ujar manajemen perusahaan. Proyek tercatat nihil kecelakaan kerja sepanjang masa pelaksanaan.",
      ],
      en: [
        "Victory Utama Karya has formally handed over a 32-storey office tower in the Sudirman Central Business District (SCBD), South Jakarta, to the client in early December.",
        "The project covered the main structure, a four-level basement, and a high-performance curtain-wall facade designed for energy efficiency.",
        "“This milestone is the result of solid team coordination and a commitment to safety,” company management said. The project recorded zero workplace accidents throughout construction.",
      ],
    },
    featured: true,
  },
  {
    slug: "tren-konstruksi-hijau-2025",
    category: "industry",
    date: "2024-11-18",
    author: "Redaksi",
    title: {
      id: "Tren Konstruksi Hijau yang Membentuk Indonesia di 2025",
      en: "Green Construction Trends Shaping Indonesia in 2025",
    },
    excerpt: {
      id: "Material rendah karbon dan metode modular semakin menjadi standar baru industri.",
      en: "Low-carbon materials and modular methods are fast becoming the new industry standard.",
    },
    body: {
      id: [
        "Industri konstruksi Indonesia bergerak cepat menuju praktik yang lebih berkelanjutan, didorong oleh regulasi bangunan hijau dan permintaan investor.",
        "Penggunaan beton rendah karbon, konstruksi modular, dan manajemen proyek berbasis digital diperkirakan akan menjadi pembeda utama pada 2025.",
        "Victory Utama Karya terus berinvestasi pada metode kerja efisien untuk menekan jejak karbon di setiap tahap proyek.",
      ],
      en: [
        "Indonesia's construction industry is moving quickly toward more sustainable practices, driven by green-building regulations and investor demand.",
        "The use of low-carbon concrete, modular construction, and digital project management is expected to be a key differentiator in 2025.",
        "Victory Utama Karya continues to invest in efficient methods to reduce the carbon footprint at every stage of a project.",
      ],
    },
  },
  {
    slug: "divisi-alat-berat-tambah-armada",
    category: "company",
    date: "2024-10-09",
    author: "Tim Komunikasi VUK",
    title: {
      id: "Divisi Alat Berat Tambah 20 Unit Armada Baru",
      en: "Heavy Equipment Division Adds 20 New Units",
    },
    excerpt: {
      id: "Investasi armada memperkuat kapasitas layanan penyewaan di seluruh Jawa.",
      en: "A fleet investment strengthens rental service capacity across Java.",
    },
    body: {
      id: [
        "Untuk memenuhi permintaan yang terus meningkat, divisi alat berat menambahkan 20 unit baru, termasuk excavator dan crane mobile.",
        "Seluruh unit dilengkapi sistem pelacakan dan jadwal perawatan preventif untuk menjamin ketersediaan dan keandalan di lapangan.",
      ],
      en: [
        "To meet growing demand, the heavy-equipment division has added 20 new units, including excavators and mobile cranes.",
        "All units are fitted with tracking systems and a preventive-maintenance schedule to guarantee availability and on-site reliability.",
      ],
    },
  },
  {
    slug: "keselamatan-kerja-penghargaan",
    category: "company",
    date: "2024-08-28",
    author: "Tim HSE",
    title: {
      id: "VUK Raih Penghargaan Keselamatan Kerja Nasional",
      en: "VUK Receives National Workplace Safety Award",
    },
    excerpt: {
      id: "Pengakuan atas pencapaian jutaan jam kerja tanpa kecelakaan tercatat.",
      en: "Recognition for achieving millions of work hours without a recordable incident.",
    },
    body: {
      id: [
        "Victory Utama Karya menerima penghargaan keselamatan kerja atas pencapaian jam kerja aman yang konsisten di seluruh lokasi proyek.",
        "Penghargaan ini menegaskan posisi keselamatan sebagai nilai inti perusahaan, bukan sekadar kepatuhan.",
      ],
      en: [
        "Victory Utama Karya has received a workplace-safety award for consistently achieving safe work hours across all project sites.",
        "The award reinforces safety as a core company value rather than mere compliance.",
      ],
    },
  },
  {
    slug: "digitalisasi-manajemen-proyek",
    category: "industry",
    date: "2024-07-15",
    author: "Redaksi",
    title: {
      id: "Bagaimana Digitalisasi Mengubah Manajemen Proyek Konstruksi",
      en: "How Digitalisation Is Transforming Construction Project Management",
    },
    excerpt: {
      id: "BIM dan data lapangan real-time mempercepat keputusan dan mengurangi pemborosan.",
      en: "BIM and real-time field data speed up decisions and cut waste.",
    },
    body: {
      id: [
        "Building Information Modelling (BIM) dan pelaporan lapangan digital kini menjadi tulang punggung manajemen proyek modern.",
        "Dengan data yang terhubung, tim dapat mendeteksi benturan desain lebih awal, memantau progres harian, dan menekan pemborosan material.",
      ],
      en: [
        "Building Information Modelling (BIM) and digital field reporting are now the backbone of modern project management.",
        "With connected data, teams can detect design clashes earlier, monitor daily progress, and reduce material waste.",
      ],
    },
  },
  {
    slug: "vuk-buka-lowongan-2025",
    category: "company",
    date: "2024-06-30",
    author: "Tim SDM",
    title: {
      id: "VUK Membuka Program Rekrutmen Insinyur Muda 2025",
      en: "VUK Opens 2025 Young Engineer Recruitment Program",
    },
    excerpt: {
      id: "Kesempatan bagi lulusan teknik untuk berkarier di proyek-proyek skala nasional.",
      en: "An opportunity for engineering graduates to build a career on national-scale projects.",
    },
    body: {
      id: [
        "Program rekrutmen insinyur muda kembali dibuka, menawarkan pelatihan terstruktur dan penempatan langsung pada proyek aktif.",
        "Pelamar dapat melihat posisi yang tersedia melalui halaman Karier perusahaan.",
      ],
      en: [
        "The young-engineer recruitment program is open again, offering structured training and direct placement on active projects.",
        "Applicants can view available positions through the company's Careers page.",
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
