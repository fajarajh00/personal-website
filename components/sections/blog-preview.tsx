import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/data/portfolio";

export function BlogPreview() {
  return (
    <Section id="blog" eyebrow="Blog" title="Catatan terbaru tentang frontend, desain, dan performa." description="Tiga artikel terbaru yang merangkum proses berpikir dan pembelajaran saya.">
      <div className="grid gap-5 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.06}>
            <a href={post.href} className="group glass block h-full rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-accent/50">
              <div className="flex items-center gap-2 text-sm text-zinc-500"><CalendarDays className="h-4 w-4" /> {post.date} · {post.readTime}</div>
              <h3 className="mt-5 text-xl font-semibold text-white transition group-hover:text-accent light:text-slate-950">{post.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400 light:text-slate-600">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Baca artikel <ArrowUpRight className="h-4 w-4" /></span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
