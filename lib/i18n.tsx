"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Lang, Localized } from "@/lib/types";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Localize a bilingual field into the active language. */
  tl: <T>(field: Localized<T>) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "vuk-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Indonesian (primary Jakarta market). Server + first client
  // render both use "id", so there is no hydration mismatch; a saved
  // preference is applied after mount.
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage may be unavailable; preference simply won't persist */
    }
    document.documentElement.lang = l;
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "id" ? "en" : "id"),
      tl: <T,>(field: Localized<T>) => field[lang],
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
