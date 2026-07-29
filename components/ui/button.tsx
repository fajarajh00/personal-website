import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ children, className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variant === "primary" && "bg-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-400",
        variant === "secondary" && "glass text-white hover:-translate-y-0.5 hover:border-accent/50 light:text-slate-950",
        variant === "ghost" && "text-zinc-300 hover:text-white light:text-slate-700 light:hover:text-slate-950",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
