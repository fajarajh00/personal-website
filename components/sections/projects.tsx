import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCardMotion } from "@/components/ui/project-card-motion";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Project terpilih dengan fokus pada craft, sistem, dan performa." description="Enam project berikut menunjukkan variasi landing page, dashboard, SaaS, AI, dan aplikasi data-heavy.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCardMotion key={project.title}>
            <article className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] transition-colors duration-200 hover:border-accent/50 light:border-slate-200 light:bg-white/70">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src={project.image} alt={`Preview project ${project.title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.015]" /></div>
              <div className="p-6"><h3 className="text-2xl font-semibold text-white light:text-slate-950">{project.title}</h3><p className="mt-3 leading-7 text-zinc-400 light:text-slate-600">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 light:border-slate-200 light:text-slate-600">{tech}</span>)}</div><div className="mt-6 flex gap-3"><a href={project.github} className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-zinc-300 transition hover:text-accent light:text-slate-700"><Github className="h-4 w-4" /> GitHub</a><a href={project.live} className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-zinc-300 transition hover:text-accent light:text-slate-700"><ExternalLink className="h-4 w-4" /> Live Demo</a></div></div>
            </article>
          </ProjectCardMotion>
        ))}
      </div>
    </Section>
  );
}
