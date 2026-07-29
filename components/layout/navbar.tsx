"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <header className={cn("fixed left-0 right-0 top-0 z-40 transition-all duration-300", scrollY > 40 ? "border-b border-white/10 bg-background/70 shadow-soft backdrop-blur-xl light:bg-white/75" : "bg-transparent")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight text-white light:text-slate-950" aria-label="Fajar portfolio home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-sm shadow-glow">FS</span>
          <span className="hidden sm:inline">Fajar.dev</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl lg:flex light:border-slate-200 light:bg-white/70">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950", active === item.href.slice(1) && "bg-white/10 text-white light:bg-slate-950 light:text-white")}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent light:border-slate-200 light:bg-white light:text-slate-950" aria-label="Ganti tema">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden light:border-slate-200 light:bg-white light:text-slate-950" aria-label="Buka menu navigasi" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-background/95 p-3 shadow-soft backdrop-blur-xl lg:hidden light:bg-white/95">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
