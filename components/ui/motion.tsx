"use client";

import {
  motion,
  useInView,
  animate,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tagMap = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

type Tag = keyof typeof tagMap;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
}

/** Fade + rise into view once. Movement is dropped under reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const M = tagMap[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </M>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
}

export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const M = tagMap[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </M>
  );
}

export function StaggerItem({ children, className, as = "div" }: StaggerProps) {
  const M = tagMap[as] as typeof motion.div;
  return (
    <M className={className} variants={itemVariants}>
      {children}
    </M>
  );
}

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Counts from 0 to `to` when scrolled into view; instant under reduced-motion. */
export function CountUp({ to, suffix = "", duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
