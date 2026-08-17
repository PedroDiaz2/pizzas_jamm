import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brick text-paper hover:bg-brick-dark active:bg-brick-dark shadow-[0_4px_0_0_var(--color-brick-dark)] hover:shadow-[0_2px_0_0_var(--color-brick-dark)] hover:translate-y-[2px]",
  secondary:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-pine/10 text-pine hover:bg-pine hover:text-paper",
};

export function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-[15px] font-semibold tracking-wide transition-all duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-base ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
