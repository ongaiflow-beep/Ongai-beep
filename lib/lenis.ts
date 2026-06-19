import type Lenis from "lenis";

/** Shared reference to the active Lenis instance for programmatic scrolling. */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null): void {
  instance = l;
}

const HEADER_OFFSET = -88;

export function scrollToId(id: string): void {
  if (typeof document === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: HEADER_OFFSET });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop(): void {
  if (instance) {
    instance.scrollTo(0);
  } else if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
