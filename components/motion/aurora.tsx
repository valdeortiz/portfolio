"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Fondo ambiental: tres manchas de color en movimiento lento + grilla sutil.
 * Es puramente decorativo y no captura eventos del puntero.
 */
export function Aurora() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={reduceMotion ? undefined : { y }} className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[130px] animate-drift" />
        <div className="absolute -right-32 top-1/4 h-[32rem] w-[32rem] rounded-full bg-cool/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-strong/10 blur-[120px] animate-drift" />
      </motion.div>

      {/* Grilla técnica, apenas visible, que da profundidad al fondo. */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #23304d 1px, transparent 1px), linear-gradient(to bottom, #23304d 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-canvas" />
    </div>
  );
}
