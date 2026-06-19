"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/components/ui/social-icons";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";

const inputBase =
  "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export default function ContactView() {
  const { tl } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const nextErrors: Record<string, boolean> = {
      name: !name,
      email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email) return;

    setStatus("submitting");
    // Simulated submission — wire to an email service / API route in production.
    window.setTimeout(() => setStatus("success"), 1200);
  }

  const info = [
    {
      Icon: MapPin,
      label: { id: "Alamat Kantor", en: "Office Address" },
      value: tl(site.address),
    },
    {
      Icon: Phone,
      label: { id: "Telepon", en: "Phone" },
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      Icon: Mail,
      label: { id: "Email", en: "Email" },
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: Clock,
      label: { id: "Jam Operasional", en: "Hours" },
      value: tl(site.hours),
    },
  ];

  return (
    <>
      <PageHero
        seed="contact-hero"
        eyebrow={tl({ id: "Kontak", en: "Contact Us" })}
        title={tl({ id: "Mari mulai percakapan", en: "Let's start a conversation" })}
        subtitle={tl({
          id: "Ceritakan kebutuhan proyek Anda — tim kami akan merespons dalam 1×24 jam kerja.",
          en: "Tell us about your project — our team will respond within one business day.",
        })}
        breadcrumbs={[
          { label: tl({ id: "Beranda", en: "Home" }), href: "/" },
          { label: tl({ id: "Kontak", en: "Contact" }) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* FORM */}
          <Reveal>
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden="true" />
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-ink-900">
                    {tl({ id: "Terima kasih!", en: "Thank you!" })}
                  </h2>
                  <p className="mt-2 max-w-sm text-ink-600">
                    {tl({
                      id: "Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.",
                      en: "Your message has been received. Our team will be in touch shortly.",
                    })}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setErrors({});
                    }}
                    className="mt-6 cursor-pointer rounded-lg border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
                  >
                    {tl({ id: "Kirim pesan lain", en: "Send another message" })}
                  </button>
                </div>
              ) : (
                <>
                  <Eyebrow>{tl({ id: "Kirim Pesan", en: "Send a Message" })}</Eyebrow>
                  <h2 className="mt-3 font-heading text-2xl font-semibold text-ink-900">
                    {tl({ id: "Hubungi tim kami", en: "Get in touch with our team" })}
                  </h2>
                  <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
                          {tl({ id: "Nama Lengkap", en: "Full Name" })} *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          aria-invalid={errors.name || undefined}
                          className={inputBase}
                          placeholder={tl({ id: "Nama Anda", en: "Your name" })}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-sm text-red-600">
                            {tl({ id: "Nama wajib diisi.", en: "Name is required." })}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-700">
                          {tl({ id: "Perusahaan", en: "Company" })}
                        </label>
                        <input id="company" name="company" type="text" className={inputBase} placeholder="PT ..." />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
                          {tl({ id: "Email", en: "Email" })} *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          aria-invalid={errors.email || undefined}
                          className={inputBase}
                          placeholder="nama@perusahaan.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-sm text-red-600">
                            {tl({ id: "Masukkan email yang valid.", en: "Enter a valid email." })}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
                          {tl({ id: "Telepon", en: "Phone" })}
                        </label>
                        <input id="phone" name="phone" type="tel" className={inputBase} placeholder="+62 ..." />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700">
                        {tl({ id: "Layanan yang Diminati", en: "Service of Interest" })}
                      </label>
                      <select id="subject" name="subject" className={inputBase} defaultValue="">
                        <option value="" disabled>
                          {tl({ id: "Pilih layanan", en: "Select a service" })}
                        </option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {tl(s.title)}
                          </option>
                        ))}
                        <option value="other">{tl({ id: "Lainnya", en: "Other" })}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
                        {tl({ id: "Pesan", en: "Message" })}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`${inputBase} resize-y`}
                        placeholder={tl({ id: "Ceritakan tentang proyek Anda...", en: "Tell us about your project..." })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          {tl({ id: "Mengirim...", en: "Sending..." })}
                        </>
                      ) : (
                        <>
                          {tl({ id: "Kirim Pesan", en: "Send Message" })}
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <ul className="space-y-6">
                {info.map(({ Icon, label, value, href }) => (
                  <li key={label.en} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {tl(label)}
                      </div>
                      {href ? (
                        <a href={href} className="mt-1 block font-medium text-ink-900 hover:text-accent-600">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-ink-900">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  {tl({ id: "Ikuti Kami", en: "Follow Us" })}
                </div>
                <div className="mt-3 flex gap-3">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* MAP */}
      <div className="h-[420px] w-full border-t border-ink-100 bg-ink-100">
        <iframe
          src={site.mapsEmbed}
          title={tl({ id: "Peta lokasi kantor", en: "Office location map" })}
          className="h-full w-full grayscale-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
