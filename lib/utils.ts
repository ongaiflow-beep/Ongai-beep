import type { Lang } from "@/lib/types";

/** Tiny classNames joiner (no external dependency). */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** Locale-aware long date, e.g. "12 Maret 2024" / "12 March 2024". */
export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(iso);
  return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
