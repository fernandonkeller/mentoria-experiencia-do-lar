import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function FormField({
  label,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-2.5", className)}>
      <span className="text-sm font-medium text-[var(--color-ink)]">{label}</span>
      {children}
      {error ? (
        <span className="text-sm text-rose-700">{error}</span>
      ) : hint ? (
        <span className="text-xs text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
