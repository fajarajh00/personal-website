import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Mari bangun pengalaman web yang terasa premium." description="Kirim detail singkat tentang kebutuhan project, kolaborasi, atau peluang kerja.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="glass rounded-[2rem] p-8"><h3 className="text-2xl font-semibold text-white light:text-slate-950">Kontak langsung</h3><p className="mt-4 leading-8 text-zinc-400 light:text-slate-600">Saya terbuka untuk project frontend, landing page, dashboard, design system, dan optimasi performa.</p><div className="mt-8 space-y-4 text-sm text-zinc-300 light:text-slate-700"><p>Email: <a className="text-accent focus-ring rounded-sm" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><p>Lokasi: {siteConfig.location}</p><p>Response time: 1-2 hari kerja</p></div></aside>
        <ContactForm />
      </div>
    </Section>
  );
}
