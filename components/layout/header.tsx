"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { BrandMark } from "@/components/ui/logo";
import { mainNav, site } from "@/lib/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const { lang, toggle, tl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const solid = scrolled || open;

  const contactLabel = tl({ id: "Hubungi Kami", en: "Contact Us" });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-ink-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.legalName}>
          <BrandMark className="h-9 w-9" />
          <span
            className={cn(
              "font-heading text-sm font-bold leading-none tracking-wide transition-colors sm:text-base",
              solid ? "text-ink-900" : "text-white",
            )}
          >
            <span className="text-accent">VICTORY</span> UTAMA KARYA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors",
                  solid
                    ? active
                      ? "text-accent-600"
                      : "text-ink-600 hover:text-ink-900"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                )}
              >
                {tl(item.label)}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out-expo group-hover:scale-x-100",
                    active && "scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            className={cn(
              "hidden cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors sm:inline-flex",
              solid ? "text-ink-700 hover:bg-ink-100" : "text-white/90 hover:bg-white/10",
            )}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">{lang.toUpperCase()}</span>
          </button>

          <Link
            href="/contact"
            className="hidden cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:inline-flex"
          >
            {contactLabel}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors lg:hidden",
              solid ? "text-ink-900 hover:bg-ink-100" : "text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <motion.nav
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-ink-200 bg-white px-5 pb-6 pt-2 shadow-lg"
            >
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-ink-100 py-3.5 font-heading text-lg font-medium transition-colors",
                        isActive(item.href) ? "text-accent-600" : "text-ink-800 hover:text-accent-600",
                      )}
                    >
                      {tl(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggle}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-700"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  {lang === "id" ? "ID" : "EN"}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {contactLabel}
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
