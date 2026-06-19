"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/components/ui/social-icons";
import { BrandMark } from "@/components/ui/logo";
import { useLanguage } from "@/lib/i18n";
import { site, footerExplore } from "@/lib/data/site";
import { services } from "@/lib/data/services";

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

const columnHeading =
  "text-xs font-semibold uppercase tracking-[0.16em] text-ink-500";
const footerLink = "text-ink-400 transition-colors hover:text-white";

export default function Footer() {
  const { tl } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <span className="font-heading text-base font-bold tracking-wide text-white">
              <span className="text-accent">VICTORY</span> UTAMA KARYA
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
            {tl(site.description)}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-ink-300 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className={columnHeading}>{tl({ id: "Jelajahi", en: "Explore" })}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLink}>
                  {tl(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className={columnHeading}>{tl({ id: "Layanan", en: "Services" })}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={footerLink}>
                  {tl(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className={columnHeading}>{tl({ id: "Kontak", en: "Contact" })}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-400">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{tl(site.address)}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{tl(site.hours)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>
            © {year} {site.legalName}.{" "}
            {tl({ id: "Hak cipta dilindungi.", en: "All rights reserved." })}
          </span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              {tl({ id: "Kebijakan Privasi", en: "Privacy Policy" })}
            </Link>
            <Link href="#" className="hover:text-white">
              {tl({ id: "Syarat & Ketentuan", en: "Terms" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
