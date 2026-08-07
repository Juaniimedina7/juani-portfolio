"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={
        mounted ? (isDark ? "Activar modo claro" : "Activar modo oscuro") : "Cambiar tema"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-surface/60 text-ink transition-colors hover:border-crimson/60"
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-crimson/10 transition-transform duration-300 group-hover:scale-100" />
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: 14, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {isDark ? (
              <Moon className="h-[18px] w-[18px] text-garnet" />
            ) : (
              <Sun className="h-[18px] w-[18px] text-garnet" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
