import { Section } from "@/components/ui/section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Timeline pengalaman yang terus berkembang." description="Setiap tahap memperkuat kemampuan saya dalam membangun produk dari ide, desain, implementasi, sampai deployment.">
      <div className="relative mx-auto max-w-4xl before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent sm:before:left-1/2">
        {experiences.map((item, index) => (
          <article key={item.period} className={`relative mb-8 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}>
            <span className="absolute -left-[1.12rem] top-7 h-3 w-3 rounded-full bg-accent shadow-glow sm:left-auto sm:right-[-2.45rem]" />
            <div className="glass rounded-[2rem] p-6"><p className="text-sm font-semibold text-accent">{item.period}</p><h3 className="mt-3 text-xl font-semibold text-white light:text-slate-950">{item.role}</h3><p className="text-sm text-zinc-500">{item.company}</p><ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-400 light:text-slate-600">{item.description.map((text) => <li key={text}>{text}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </Section>
  );
}
