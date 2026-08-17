import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "pine",
}: {
  children: ReactNode;
  tone?: "pine" | "mustard" | "brick";
}) {
  const toneStyles = {
    pine: "bg-pine/10 text-pine-dark",
    mustard: "bg-mustard/20 text-mustard-dark",
    brick: "bg-brick/10 text-brick-dark",
  } as const;

  return (
    <span
      className={`font-detail inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
