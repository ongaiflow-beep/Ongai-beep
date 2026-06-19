import { cn } from "@/lib/utils";

/** Seamless, pausable logo/wordmark marquee. Pauses for reduced-motion. */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-14 pr-14 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-ink-400 transition-colors hover:text-ink-700"
          >
            {name}
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
