import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose)] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants = {
  primary:
    "premium-gradient text-white shadow-[0_20px_40px_rgba(127,74,97,0.26)] hover:-translate-y-0.5 hover:shadow-[0_26px_52px_rgba(127,74,97,0.3)]",
  secondary:
    "border border-[var(--color-border)] bg-white/80 text-[var(--color-ink)] hover:bg-white",
  ghost:
    "bg-transparent text-[var(--color-rose-deep)] hover:bg-[rgba(173,104,132,0.08)]",
};

interface SharedProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        className={cn(baseStyles, variants[variant], className)}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={cn(baseStyles, variants[variant], className)} href={href}>
      {children}
    </Link>
  );
}
