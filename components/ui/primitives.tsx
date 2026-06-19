import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-accent-400" : "text-accent-600",
        className,
      )}
    >
      <span className="h-px w-7 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        action ? "md:flex-row md:items-end md:justify-between" : undefined,
        className,
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
        {eyebrow && (
          <Eyebrow light={light} className={cn(align === "center" && "justify-center")}>
            {eyebrow}
          </Eyebrow>
        )}
        <h2
          className={cn(
            "mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl",
            light ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed",
              align === "center" && "mx-auto",
              light ? "text-ink-300" : "text-ink-600",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

type ButtonVariant = "solid" | "outline" | "outlineLight" | "ghost" | "ghostLight";

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "bg-accent px-6 py-3 text-white shadow-sm hover:bg-accent-600 hover:shadow-md focus-visible:ring-offset-white",
  outline:
    "border border-ink-300 px-6 py-3 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white focus-visible:ring-offset-white",
  outlineLight:
    "border border-white/40 px-6 py-3 text-white hover:bg-white hover:text-ink-900 focus-visible:ring-offset-transparent",
  ghost: "text-ink-900 hover:text-accent-600 focus-visible:ring-offset-white",
  ghostLight: "text-white hover:text-accent-400 focus-visible:ring-offset-transparent",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  hideIcon?: boolean;
  external?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  icon: Icon = ArrowRight,
  hideIcon = false,
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {!hideIcon && (
        <Icon
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
