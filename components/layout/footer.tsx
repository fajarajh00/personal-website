import { navItems, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 light:border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#home" className="text-lg font-semibold text-white light:text-slate-950">Fajar.dev</a>
          <p className="mt-2 text-sm text-zinc-500 light:text-slate-500">Copyright 2026 Fajar Slamet Aghafianto. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-400 light:text-slate-600">
          {navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-accent">{item.label}</a>)}
        </div>
        <div className="flex gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return <a key={item.label} href={item.href} aria-label={item.label} className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:-translate-y-1 hover:text-accent light:border-slate-200 light:text-slate-600"><Icon className="h-4 w-4" /></a>;
          })}
        </div>
      </div>
    </footer>
  );
}
