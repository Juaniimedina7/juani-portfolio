"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 90, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 90, damping: 20, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    function move(e) {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    }
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgb(var(--glow)/0.10),transparent_60%)] blur-2xl" />
    </motion.div>
  );
}
