"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/lib/i18n";
import SmoothScroll from "./smooth-scroll";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {/* reducedMotion="user" makes every transform animation respect the OS setting */}
      <MotionConfig reducedMotion="user">
        <SmoothScroll />
        {children}
      </MotionConfig>
    </LanguageProvider>
  );
}
