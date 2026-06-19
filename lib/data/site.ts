import type { Localized } from "@/lib/types";

export interface NavItem {
  href: string;
  label: Localized;
}

export const site = {
  name: "Victory Utama Karya",
  legalName: "PT Victory Utama Karya",
  shortName: "VUK",
  founded: 1999,
  tagline: {
    id: "Membangun Masa Depan Indonesia",
    en: "Building Indonesia's Future",
  } as Localized,
  description: {
    id: "PT Victory Utama Karya adalah perusahaan konstruksi dan kontraktor umum terkemuka di Jakarta — menghadirkan proyek industri, sipil, perbaikan tanah, dan ketenagalistrikan dengan standar mutu dan keselamatan kelas dunia.",
    en: "PT Victory Utama Karya is a leading Jakarta-based construction and general contractor — delivering industrial, civil, soil improvement, and electrical power projects to world-class quality and safety standards.",
  } as Localized,
  phone: "+62 21 5140 8800",
  whatsapp: "+62 811 1500 200",
  email: "info@victoryutamakarya.co.id",
  address: {
    id: "Menara VUK, Jl. Jenderal Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190, Indonesia",
    en: "Menara VUK, Jl. Jenderal Sudirman Kav. 52-53, SCBD, South Jakarta 12190, Indonesia",
  } as Localized,
  addressShort: "SCBD, Jakarta Selatan",
  hours: {
    id: "Senin–Jumat, 08.00–17.00 WIB",
    en: "Monday–Friday, 8am–5pm WIB",
  } as Localized,
  mapsEmbed:
    "https://maps.google.com/maps?q=SCBD%20Jakarta&t=&z=14&ie=UTF8&iwloc=&output=embed",
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
  },
};

/** Primary navigation (Contact is rendered separately as the nav CTA). */
export const mainNav: NavItem[] = [
  { href: "/", label: { id: "Beranda", en: "Home" } },
  { href: "/company", label: { id: "Perusahaan", en: "Our Company" } },
  { href: "/services", label: { id: "Layanan", en: "Our Services" } },
  { href: "/projects", label: { id: "Proyek", en: "Our Projects" } },
  { href: "/news", label: { id: "Berita", en: "News" } },
  { href: "/careers", label: { id: "Karier", en: "Careers" } },
];

export const footerExplore: NavItem[] = [
  { href: "/company", label: { id: "Perusahaan", en: "Our Company" } },
  { href: "/projects", label: { id: "Proyek", en: "Our Projects" } },
  { href: "/news", label: { id: "Berita", en: "News" } },
  { href: "/careers", label: { id: "Karier", en: "Careers" } },
  { href: "/contact", label: { id: "Kontak", en: "Contact" } },
];

/** Fictional client wordmarks (text only — no third-party logos). */
export const clients: string[] = [
  "Nusantara Energy",
  "Graha Property",
  "Sentosa Industri",
  "Bumi Logistics",
  "Mitra Manufaktur",
  "Cakra Infrastruktur",
  "Anugerah Group",
  "Samudra Port",
];
