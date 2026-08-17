import { siteConfig } from "@/data/site-config";

/**
 * Placeholder wordmark. When the real logo artwork is ready, replace the
 * contents of this component with a next/image render (e.g. an <Image
 * src="/images/logo.svg" .../>) — every place that renders <Logo /> will
 * pick it up automatically, no layout changes needed.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const tone = variant === "dark" ? "text-ink" : "text-paper";
  const accent = variant === "dark" ? "text-brick" : "text-mustard";

  return (
    <span
      className={`font-display inline-flex items-baseline gap-[0.1em] text-2xl font-semibold italic leading-none ${tone} ${className}`}
    >
      Pizza&apos;s
      <span className={`not-italic ${accent}`}>{siteConfig.shortName}</span>
    </span>
  );
}
