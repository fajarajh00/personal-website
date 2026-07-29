"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter."),
  email: z.string().email("Masukkan email yang valid."),
  subject: z.string().min(4, "Subject minimal 4 karakter."),
  message: z.string().min(12, "Message minimal 12 karakter.")
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting } } = useForm<ContactValues>({ mode: "onBlur" });

  const onSubmit = (values: ContactValues) => {
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string") setError(field as keyof ContactValues, { message: issue.message });
      });
      return;
    }
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-[2rem] p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nama" name="name" register={register} error={errors.name?.message} />
        <Field label="Email" name="email" type="email" register={register} error={errors.email?.message} />
      </div>
      <div className="mt-5"><Field label="Subject" name="subject" register={register} error={errors.subject?.message} /></div>
      <div className="mt-5"><label htmlFor="message" className="text-sm font-medium text-zinc-300 light:text-slate-700">Message</label><textarea id="message" rows={6} {...register("message")} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus-ring light:border-slate-200 light:bg-white light:text-slate-950" placeholder="Ceritakan kebutuhan project Anda" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message ? <p id="message-error" className="mt-2 text-sm text-red-400">{errors.message.message}</p> : null}</div>
      {submitted ? <p className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent">Pesan tervalidasi. Hubungkan form ini ke API route, Formspree, atau layanan email saat production.</p> : null}
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70 focus-ring"><Send className="h-4 w-4" /> Kirim Pesan</button>
    </form>
  );
}

function Field({ label, name, type = "text", register, error }: { label: string; name: keyof ContactValues; type?: string; register: ReturnType<typeof useForm<ContactValues>>["register"]; error?: string }) {
  const errorId = `${name}-error`;
  return <div><label htmlFor={name} className="text-sm font-medium text-zinc-300 light:text-slate-700">{label}</label><input id={name} type={type} {...register(name)} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus-ring light:border-slate-200 light:bg-white light:text-slate-950" placeholder={label} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />{error ? <p id={errorId} className="mt-2 text-sm text-red-400">{error}</p> : null}</div>;
}
