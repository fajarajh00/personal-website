import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28", className)}>
      <div className="mx-auto mb-12 max-w-3xl text-center">
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p> : null}
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white light:text-slate-950 sm:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-base leading-8 text-zinc-400 light:text-slate-600 sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
