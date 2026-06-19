import type { ReactNode } from "react";
import { Container } from "./primitives";
import { cn } from "@/lib/utils";

type Tone = "default" | "muted" | "dark" | "blueprint";

const toneClasses: Record<Tone, string> = {
  default: "bg-white text-ink-900",
  muted: "bg-ink-50 text-ink-900",
  dark: "bg-ink-950 text-white",
  blueprint: "bg-ink-950 text-white bg-blueprint [background-size:34px_34px]",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-24", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
