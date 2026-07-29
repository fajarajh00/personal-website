import { Section } from "@/components/ui/section";
import { experiences, values } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Produk digital yang indah harus tetap jelas, cepat, dan berguna." description="Saya menggabungkan engineering discipline, sensitivitas visual, dan perhatian terhadap performa untuk membuat pengalaman web yang terasa premium.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="glass rounded-[2rem] p-8">
          <h3 className="text-2xl font-semibold text-white light:text-slate-950">Profil Lengkap</h3>
          <p className="mt-5 leading-8 text-zinc-400 light:text-slate-600">Saya adalah frontend engineer yang fokus pada React, Next.js, TypeScript, Tailwind CSS, dan UI engineering. Saya menyukai produk yang memiliki struktur kode bersih, visual konsisten, serta performa yang baik di kondisi jaringan dan perangkat yang beragam.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white/70"><p className="text-sm text-zinc-500">Pendidikan</p><p className="mt-2 font-semibold text-white light:text-slate-950">Computer Science & Self-directed Frontend Engineering</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white/70"><p className="text-sm text-zinc-500">Pengalaman</p><p className="mt-2 font-semibold text-white light:text-slate-950">3+ tahun membangun project web modern</p></div>
          </div>
        </article>
        <div className="grid gap-4">
          {values.map((value) => {
            const Icon = value.icon;
            return <div key={value.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-200 hover:-translate-y-1 light:border-slate-200 light:bg-white/60"><Icon className="h-6 w-6 text-accent" /><h3 className="mt-4 font-semibold text-white light:text-slate-950">{value.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-400 light:text-slate-600">{value.text}</p></div>;
          })}
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {experiences.map((item) => <div key={item.role} className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 light:border-slate-200 light:bg-white/60"><p className="text-sm text-accent">{item.period}</p><h3 className="mt-3 font-semibold text-white light:text-slate-950">{item.role}</h3><p className="mt-1 text-sm text-zinc-500">{item.company}</p></div>)}
      </div>
    </Section>
  );
}
