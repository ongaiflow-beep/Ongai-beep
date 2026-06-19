import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import { site } from "@/lib/data/site";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://victoryutamakarya.co.id"),
  title: {
    default: "PT Victory Utama Karya — Kontraktor & Konstruksi Jakarta",
    template: "%s | Victory Utama Karya",
  },
  description: site.description.id,
  keywords: [
    "kontraktor Jakarta",
    "perusahaan konstruksi",
    "konstruksi industri",
    "pekerjaan sipil",
    "perbaikan tanah",
    "sewa alat berat",
    "general contractor Indonesia",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: site.name,
    title: "PT Victory Utama Karya — Kontraktor & Konstruksi Jakarta",
    description: site.description.id,
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Victory Utama Karya",
    description: site.description.en,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only z-[60] rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
