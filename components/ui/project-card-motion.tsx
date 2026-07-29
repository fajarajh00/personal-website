"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ProjectCardMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18, ease: "easeOut" }} className="h-full">
      {children}
    </motion.div>
  );
}
