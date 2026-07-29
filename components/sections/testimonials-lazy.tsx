"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/sections/testimonials").then((mod) => mod.Testimonials), {
  ssr: false,
  loading: () => <div className="mx-auto h-64 max-w-6xl rounded-[2rem] glass" aria-hidden="true" />
});

export function TestimonialsLazy() {
  return <Testimonials />;
}
