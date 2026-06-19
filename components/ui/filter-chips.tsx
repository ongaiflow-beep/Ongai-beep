"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ChipItem {
  key: string;
  label: string;
}

interface FilterChipsProps {
  items: ChipItem[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
  /** Unique id so multiple chip groups don't share the highlight layout. */
  groupId?: string;
}

export function FilterChips({
  items,
  value,
  onChange,
  className,
  groupId = "chips",
}: FilterChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)} role="tablist">
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            className={cn(
              "relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              active
                ? "border-ink-900 text-white"
                : "border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:bg-ink-50 hover:text-ink-900",
            )}
          >
            {active && (
              <motion.span
                layoutId={`${groupId}-highlight`}
                className="absolute inset-0 rounded-full bg-ink-900"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
