"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Barra fina de progreso de lectura, fija arriba de todo. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-linear-to-r from-accent via-accent-strong to-cool"
    />
  );
}
