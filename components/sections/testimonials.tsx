"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 5500);
    return () => window.clearInterval(interval);
  }, []);

  const previous = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((current) => (current + 1) % testimonials.length);

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Apa kata orang yang pernah berkolaborasi." description="Feedback dari kolaborator produk, desain, dan engineering.">
      <div className="glass mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.article key={active.name} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }} className="text-center">
            <Quote className="mx-auto h-10 w-10 text-accent" />
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-zinc-200 light:text-slate-800">{active.quote}</p>
            <div className="mt-8 flex items-center justify-center gap-4"><Image src={active.avatar} alt={`Avatar ${active.name}`} width={56} height={56} className="rounded-full" /><div className="text-left"><h3 className="font-semibold text-white light:text-slate-950">{active.name}</h3><p className="text-sm text-zinc-500">{active.role}</p></div></div>
          </motion.article>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-center gap-3"><button onClick={previous} className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:text-accent light:border-slate-200 light:text-slate-700" aria-label="Testimonial sebelumnya"><ChevronLeft className="h-5 w-5" /></button><button onClick={next} className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:text-accent light:border-slate-200 light:text-slate-700" aria-label="Testimonial berikutnya"><ChevronRight className="h-5 w-5" /></button></div>
      </div>
    </Section>
  );
}
