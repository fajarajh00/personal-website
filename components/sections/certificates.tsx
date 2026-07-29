import Image from "next/image";
import { Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Sertifikat dan pembelajaran yang mendukung kualitas eksekusi." description="Saya terus memperkuat fundamental engineering, performa, desain, dan aksesibilitas.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.title} delay={index * 0.05}>
            <article className="group glass overflow-hidden rounded-[2rem] transition hover:-translate-y-2 hover:border-accent/50">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={certificate.image} alt={`Preview sertifikat ${certificate.title}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
              <div className="p-5"><Award className="h-5 w-5 text-accent" /><h3 className="mt-3 font-semibold text-white light:text-slate-950">{certificate.title}</h3><p className="mt-2 text-sm text-zinc-400 light:text-slate-600">{certificate.issuer}</p><p className="mt-1 text-xs text-zinc-500">{certificate.date}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
