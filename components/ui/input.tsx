import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-3xl border border-[var(--color-border)] bg-white/80 px-4 py-3.5 text-sm text-[var(--color-ink)] shadow-[0_8px_30px_rgba(67,41,43,0.05)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-rose)] focus:bg-white focus:ring-4 focus:ring-[rgba(173,104,132,0.12)]";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, props.className)} {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldBase, props.className)} {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldBase, "min-h-28 resize-y", props.className)}
      {...props}
    />
  );
}
