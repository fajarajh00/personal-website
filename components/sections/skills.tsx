import { Section } from "@/components/ui/section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Stack yang saya gunakan untuk membangun produk end-to-end." description="Skill disusun berdasarkan kategori agar mudah melihat kekuatan teknis dan area eksplorasi saya.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <article key={category.title} className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-transform duration-200 hover:-translate-y-1 light:border-slate-200 light:bg-white/70">
              <div className="flex items-start gap-4"><div className="rounded-2xl bg-primary/15 p-3 text-accent"><Icon className="h-6 w-6" /></div><div><h3 className="text-lg font-semibold text-white light:text-slate-950">{category.title}</h3><p className="mt-1 text-sm text-zinc-400 light:text-slate-600">{category.description}</p></div></div>
              <div className="mt-6 space-y-4">
                {category.skills.map((skill) => <div key={skill.name}><div className="mb-2 flex justify-between text-sm"><span className="text-zinc-300 light:text-slate-700">{skill.name}</span><span className="text-accent">{skill.level}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent" style={{ width: `${skill.level}%` }} /></div></div>)}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
