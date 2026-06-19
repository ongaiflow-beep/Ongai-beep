import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Branded, dependency-free figure. Renders a duotone gradient + technical
 * pattern (blueprint grid / dots / diagonal / contour rings) with an optional
 * centred icon and label. Deterministic per `seed`, so it stays stable and
 * varied across the site — and never produces a broken image. Real photography
 * can be layered in later via next/image without touching call sites.
 */

interface Tone {
  from: string;
  to: string;
  pattern: string;
  icon: string;
  chipBg: string;
  chipText: string;
  light?: boolean;
}

const tones: Tone[] = [
  { from: "#1E293B", to: "#0F172A", pattern: "#F97316", icon: "#F97316", chipBg: "rgba(255,255,255,0.10)", chipText: "#E2E8F0" },
  { from: "#334155", to: "#1E293B", pattern: "#94A3B8", icon: "#FB923C", chipBg: "rgba(255,255,255,0.10)", chipText: "#E2E8F0" },
  { from: "#0F172A", to: "#020617", pattern: "#64748B", icon: "#F97316", chipBg: "rgba(255,255,255,0.08)", chipText: "#CBD5E1" },
  { from: "#E2E8F0", to: "#CBD5E1", pattern: "#94A3B8", icon: "#EA580C", chipBg: "rgba(15,23,42,0.06)", chipText: "#334155", light: true },
];

const patterns = ["grid", "dots", "diagonal", "rings"] as const;
type Pattern = (typeof patterns)[number];

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

interface MediaProps {
  seed: string;
  label?: string;
  icon?: LucideIcon;
  /** Absolutely fill the parent (for hero backgrounds). */
  fill?: boolean;
  /** CSS aspect-ratio when not filling, e.g. "16 / 9". */
  ratio?: string;
  className?: string;
  /** Extra dark gradient for text legibility over the figure. */
  overlay?: boolean;
  kenBurns?: boolean;
  rounded?: boolean;
}

export function Media({
  seed,
  label,
  icon: Icon,
  fill = false,
  ratio = "16 / 9",
  className,
  overlay = false,
  kenBurns = false,
  rounded = true,
}: MediaProps) {
  const uid = React.useId().replace(/:/g, "");
  const h = hashString(seed);
  const tone = tones[h % tones.length];
  const pattern: Pattern = patterns[(h >> 4) % patterns.length];
  const gid = `grad-${uid}`;
  const pid = `pat-${uid}`;

  return (
    <div
      role="img"
      aria-label={label ?? "Victory Utama Karya"}
      className={cn(
        "overflow-hidden bg-ink-900",
        rounded && "rounded-xl",
        fill ? "absolute inset-0 h-full w-full" : "relative w-full",
        className,
      )}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <div className={cn("absolute inset-0", kenBurns && "ken-burns")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={tone.from} />
              <stop offset="100%" stopColor={tone.to} />
            </linearGradient>
            {pattern === "grid" && (
              <pattern id={pid} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0 H0 V40" fill="none" stroke={tone.pattern} strokeWidth="1" strokeOpacity="0.18" />
              </pattern>
            )}
            {pattern === "dots" && (
              <pattern id={pid} width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.6" fill={tone.pattern} fillOpacity="0.22" />
              </pattern>
            )}
            {pattern === "diagonal" && (
              <pattern id={pid} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="24" stroke={tone.pattern} strokeWidth="7" strokeOpacity="0.10" />
              </pattern>
            )}
            {pattern === "rings" && (
              <pattern id={pid} width="130" height="130" patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="46" fill="none" stroke={tone.pattern} strokeWidth="1.2" strokeOpacity="0.16" />
                <circle cx="0" cy="0" r="84" fill="none" stroke={tone.pattern} strokeWidth="1.2" strokeOpacity="0.12" />
              </pattern>
            )}
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gid})`} />
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/45 to-ink-950/25" />
      )}

      {Icon && (
        <div className="absolute inset-0 grid place-items-center">
          <div
            className="grid h-20 w-20 place-items-center rounded-2xl border backdrop-blur-sm transition-transform duration-500"
            style={{
              borderColor: tone.light ? "rgba(15,23,42,0.12)" : "rgba(255,255,255,0.16)",
              background: tone.light ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.06)",
            }}
          >
            <Icon style={{ color: tone.icon }} className="h-9 w-9" strokeWidth={1.5} />
          </div>
        </div>
      )}

      {label && (
        <span
          className="absolute bottom-3 left-3 z-10 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
          style={{ background: tone.chipBg, color: tone.chipText }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
