"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function BackToTop() {
  const scrollY = useScrollPosition();
  return (
    <AnimatePresence>
      {scrollY > 700 ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/15 bg-white/10 p-3 text-white shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary light:border-slate-200 light:bg-white light:text-slate-950"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
