"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const x = useTransform(smoothX, (value) => value / 24);
  const y = useTransform(smoothY, (value) => value / 24);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed822,transparent_35%),linear-gradient(135deg,#09090B,#111827_45%,#09090B)] light:bg-[radial-gradient(circle_at_top,#60a5fa33,transparent_35%),linear-gradient(135deg,#f8fafc,#eef2ff_45%,#f8fafc)]" />
      <motion.div style={{ x, y }} className="absolute left-1/2 top-16 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
      <motion.div style={{ x: y, y: x }} className="absolute right-12 top-1/3 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 animate-float rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 light:opacity-60" />
    </div>
  );
}
