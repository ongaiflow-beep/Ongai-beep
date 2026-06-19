import type { Localized } from "@/lib/types";

export interface Job {
  slug: string;
  title: Localized;
  department: Localized;
  type: Localized;
  location: string;
  level: Localized;
  posted: string;
  summary: Localized;
  responsibilities: Localized<string[]>;
  requirements: Localized<string[]>;
}

export const departments: Localized[] = [
  { id: "Rekayasa", en: "Engineering" },
  { id: "Manajemen Proyek", en: "Project Management" },
  { id: "K3 (HSE)", en: "HSE" },
  { id: "Operasional", en: "Operations" },
  { id: "Desain", en: "Design" },
];

export const jobs: Job[] = [
  {
    slug: "site-engineer",
    title: { id: "Site Engineer", en: "Site Engineer" },
    department: { id: "Rekayasa", en: "Engineering" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Jakarta / Site",
    level: { id: "Mid-level", en: "Mid-level" },
    posted: "2024-12-01",
    summary: {
      id: "Mengawasi pelaksanaan teknis di lapangan dan memastikan pekerjaan sesuai gambar, mutu, dan jadwal.",
      en: "Supervise technical execution on site and ensure works meet drawings, quality, and schedule.",
    },
    responsibilities: {
      id: ["Mengawasi pekerjaan harian di lapangan", "Mengontrol kualitas dan kuantitas pekerjaan", "Berkoordinasi dengan subkontraktor", "Menyusun laporan progres"],
      en: ["Supervise daily site works", "Control work quality and quantity", "Coordinate with subcontractors", "Prepare progress reports"],
    },
    requirements: {
      id: ["S1 Teknik Sipil", "Pengalaman 3+ tahun di proyek konstruksi", "Memahami AutoCAD & MS Project", "Bersedia ditempatkan di proyek"],
      en: ["Bachelor's in Civil Engineering", "3+ years on construction projects", "Proficient in AutoCAD & MS Project", "Willing to be placed on site"],
    },
  },
  {
    slug: "project-manager",
    title: { id: "Project Manager", en: "Project Manager" },
    department: { id: "Manajemen Proyek", en: "Project Management" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Jakarta",
    level: { id: "Senior", en: "Senior" },
    posted: "2024-11-20",
    summary: {
      id: "Memimpin perencanaan, pelaksanaan, dan penyerahan proyek dengan tanggung jawab penuh atas biaya, mutu, dan waktu.",
      en: "Lead planning, execution, and handover of projects with full accountability for cost, quality, and time.",
    },
    responsibilities: {
      id: ["Mengelola anggaran dan jadwal proyek", "Memimpin tim proyek lintas divisi", "Mengelola hubungan dengan klien", "Memastikan kepatuhan K3"],
      en: ["Manage project budget and schedule", "Lead cross-divisional project teams", "Manage client relationships", "Ensure HSE compliance"],
    },
    requirements: {
      id: ["S1 Teknik Sipil/Arsitektur", "Pengalaman 8+ tahun, 3+ tahun sebagai PM", "Sertifikasi manajemen proyek", "Kemampuan kepemimpinan kuat"],
      en: ["Bachelor's in Civil Eng./Architecture", "8+ years, 3+ as a PM", "Project management certification", "Strong leadership skills"],
    },
  },
  {
    slug: "quantity-surveyor",
    title: { id: "Quantity Surveyor", en: "Quantity Surveyor" },
    department: { id: "Rekayasa", en: "Engineering" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Jakarta",
    level: { id: "Mid-level", en: "Mid-level" },
    posted: "2024-11-05",
    summary: {
      id: "Menyusun estimasi biaya, volume pekerjaan, dan pengendalian biaya sepanjang siklus proyek.",
      en: "Prepare cost estimates, quantities, and cost control throughout the project lifecycle.",
    },
    responsibilities: {
      id: ["Menghitung volume dan biaya pekerjaan", "Menyusun BoQ dan penawaran", "Mengelola progress claim", "Evaluasi harga subkontraktor"],
      en: ["Calculate quantities and costs", "Prepare BoQ and tenders", "Manage progress claims", "Evaluate subcontractor pricing"],
    },
    requirements: {
      id: ["S1 Teknik Sipil", "Pengalaman 3+ tahun sebagai QS", "Teliti dan kuat dalam analisis biaya", "Menguasai spreadsheet"],
      en: ["Bachelor's in Civil Engineering", "3+ years as a QS", "Detail-oriented with strong cost analysis", "Proficient in spreadsheets"],
    },
  },
  {
    slug: "hse-officer",
    title: { id: "HSE Officer", en: "HSE Officer" },
    department: { id: "K3 (HSE)", en: "HSE" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Site",
    level: { id: "Mid-level", en: "Mid-level" },
    posted: "2024-10-22",
    summary: {
      id: "Menerapkan dan mengawasi standar keselamatan kerja di lokasi proyek untuk mencapai target nihil kecelakaan.",
      en: "Implement and monitor workplace-safety standards on site to achieve a zero-accident target.",
    },
    responsibilities: {
      id: ["Melakukan inspeksi K3 harian", "Menyelenggarakan safety induction", "Menyusun laporan insiden", "Mengelola APD dan rambu"],
      en: ["Conduct daily HSE inspections", "Run safety inductions", "Prepare incident reports", "Manage PPE and signage"],
    },
    requirements: {
      id: ["Sertifikat Ahli K3 Konstruksi", "Pengalaman 2+ tahun di lapangan", "Memahami regulasi K3", "Tegas dan komunikatif"],
      en: ["Construction HSE certification", "2+ years of field experience", "Strong grasp of HSE regulations", "Firm and communicative"],
    },
  },
  {
    slug: "heavy-equipment-operator",
    title: { id: "Operator Alat Berat", en: "Heavy Equipment Operator" },
    department: { id: "Operasional", en: "Operations" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Site",
    level: { id: "Entry–Mid", en: "Entry–Mid" },
    posted: "2024-10-10",
    summary: {
      id: "Mengoperasikan excavator, crane, atau alat berat lain secara aman dan efisien di lokasi proyek.",
      en: "Operate excavators, cranes, or other heavy equipment safely and efficiently on site.",
    },
    responsibilities: {
      id: ["Mengoperasikan alat berat sesuai SOP", "Melakukan pengecekan harian unit", "Mematuhi prosedur keselamatan", "Melaporkan kondisi alat"],
      en: ["Operate equipment per SOP", "Perform daily unit checks", "Follow safety procedures", "Report equipment condition"],
    },
    requirements: {
      id: ["SIO (Surat Izin Operator) aktif", "Pengalaman 2+ tahun", "Disiplin dan menjunjung keselamatan", "Bersedia kerja shift"],
      en: ["Valid operator licence (SIO)", "2+ years of experience", "Disciplined and safety-minded", "Willing to work shifts"],
    },
  },
  {
    slug: "architect",
    title: { id: "Arsitek", en: "Architect" },
    department: { id: "Desain", en: "Design" },
    type: { id: "Penuh Waktu", en: "Full-time" },
    location: "Jakarta",
    level: { id: "Mid-level", en: "Mid-level" },
    posted: "2024-09-28",
    summary: {
      id: "Mengembangkan desain arsitektur dan gambar kerja yang fungsional, estetis, dan dapat dibangun.",
      en: "Develop architectural designs and working drawings that are functional, aesthetic, and buildable.",
    },
    responsibilities: {
      id: ["Membuat konsep dan gambar kerja", "Berkoordinasi dengan tim struktur & MEP", "Menyiapkan dokumen tender", "Mengawasi kesesuaian desain"],
      en: ["Produce concepts and working drawings", "Coordinate with structural & MEP teams", "Prepare tender documents", "Oversee design conformance"],
    },
    requirements: {
      id: ["S1 Arsitektur", "Pengalaman 3+ tahun", "Menguasai Revit/AutoCAD & SketchUp", "Portofolio yang kuat"],
      en: ["Bachelor's in Architecture", "3+ years of experience", "Proficient in Revit/AutoCAD & SketchUp", "A strong portfolio"],
    },
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
