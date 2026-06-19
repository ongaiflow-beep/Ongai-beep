"use client";

import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { tl } = useLanguage();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 bg-blueprint px-5 text-center [background-size:34px_34px]">
      <div className="relative z-10">
        <Eyebrow light className="justify-center">
          {tl({ id: "Kesalahan 404", en: "Error 404" })}
        </Eyebrow>
        <div className="mt-4 font-heading text-8xl font-bold text-white sm:text-9xl">404</div>
        <h1 className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
          {tl({ id: "Halaman tidak ditemukan", en: "Page not found" })}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-300">
          {tl({
            id: "Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.",
            en: "Sorry, the page you're looking for doesn't exist or has been moved.",
          })}
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="solid">
            {tl({ id: "Kembali ke Beranda", en: "Back to Home" })}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
