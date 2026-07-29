"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const email = String(form.get("email") ?? "");
    ["name", "subject", "message"].forEach((field) => {
      if (!String(form.get(field) ?? "").trim()) nextErrors[field as keyof Errors] = "Field ini wajib diisi.";
    });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Masukkan email yang valid.";
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) event.currentTarget.reset();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Mari bangun pengalaman web yang terasa premium." description="Kirim detail singkat tentang kebutuhan project, kolaborasi, atau peluang kerja.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <aside className="glass rounded-[2rem] p-8"><h3 className="text-2xl font-semibold text-white light:text-slate-950">Kontak langsung</h3><p className="mt-4 leading-8 text-zinc-400 light:text-slate-600">Saya terbuka untuk project frontend, landing page, dashboard, design system, dan optimasi performa.</p><div className="mt-8 space-y-4 text-sm text-zinc-300 light:text-slate-700"><p>Email: <a className="text-accent" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><p>Lokasi: {siteConfig.location}</p><p>Response time: 1-2 hari kerja</p></div></aside>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-6 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nama" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <div className="mt-5"><Field label="Subject" name="subject" error={errors.subject} /></div>
            <div className="mt-5"><label htmlFor="message" className="text-sm font-medium text-zinc-300 light:text-slate-700">Message</label><textarea id="message" name="message" rows={6} className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent light:border-slate-200 light:bg-white light:text-slate-950" placeholder="Ceritakan kebutuhan project Anda" aria-invalid={Boolean(errors.message)} />{errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message}</p> : null}</div>
            {submitted ? <p className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent">Pesan tervalidasi. Hubungkan form ini ke API route, Formspree, atau layanan email saat production.</p> : null}
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-accent"><Send className="h-4 w-4" /> Kirim Pesan</button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return <div><label htmlFor={name} className="text-sm font-medium text-zinc-300 light:text-slate-700">{label}</label><input id={name} name={name} type={type} className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent light:border-slate-200 light:bg-white light:text-slate-950" placeholder={label} aria-invalid={Boolean(error)} />{error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}</div>;
}
