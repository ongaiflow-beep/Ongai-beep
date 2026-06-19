"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { setLenis } from "@/lib/lenis";

/**
 * Inertial smooth scrolling on pointer/wheel. Touch keeps native scrolling so
 * mobile stays responsive, and it is disabled entirely under reduced-motion.
 */
export default function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    setLenis(lenis);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return null;
}
