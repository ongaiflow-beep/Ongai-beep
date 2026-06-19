import { cn } from "@/lib/utils";

/** The Victory "V" mark on a safety-orange tile. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-md bg-accent text-white shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none">
        <path
          d="M4 5L12 19L20 5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
