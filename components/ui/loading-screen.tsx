"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-background" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
          <motion.div className="h-16 w-16 rounded-full border border-white/10 border-t-accent" animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} aria-label="Memuat halaman" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
