import Image from "next/image";
import { Download, Send } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { HeroMotion } from "@/components/ui/hero-motion";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <HeroMotion>
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md light:border-slate-200 light:bg-white/70 light:text-slate-700">Available for modern frontend projects</div>
            <h1 className="text-balance bg-gradient-to-r from-white via-blue-100 to-accent bg-clip-text text-5xl font-semibold tracking-tight text-transparent light:from-slate-950 light:via-blue-700 light:to-cyan-600 sm:text-7xl lg:text-8xl">{siteConfig.name}</h1>
            <p className="mt-5 text-xl font-medium text-blue-200 light:text-blue-700">{siteConfig.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 light:text-slate-600">{siteConfig.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.cvUrl} download><Download className="h-4 w-4" /> Download CV</ButtonLink>
              <ButtonLink href="#contact" variant="secondary"><Send className="h-4 w-4" /> Contact</ButtonLink>
            </div>
            <div className="mt-8 flex gap-3" aria-label="Social media">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return <a key={item.label} href={item.href} aria-label={item.label} className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:-translate-y-1 hover:border-accent hover:text-accent light:border-slate-200 light:bg-white light:text-slate-600"><Icon className="h-5 w-5" /></a>;
              })}
            </div>
          </div>
        </HeroMotion>
        <HeroMotion delay={0.08}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-45 blur-[20px]" />
            <div className="glass relative h-full overflow-hidden rounded-[3rem] p-4">
              <Image src="/profile.svg" alt="Foto profil Fajar Slamet Aghafianto" width={640} height={640} priority className="h-full w-full rounded-[2.4rem] object-cover" />
            </div>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
