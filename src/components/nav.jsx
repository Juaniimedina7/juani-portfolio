"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const links = [
  { label: "Perfil", href: "#perfil", tag: "01" },
  { label: "Proyectos", href: "#work", tag: "02" },
  { label: "Stack", href: "#stack", tag: "03" },
  { label: "Experiencia", href: "#experience", tag: "04" },
  { label: "Contacto", href: "#contact", tag: "05" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`flex w-full max-w-page items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass border-border shadow-[0_8px_40px_-12px_rgb(0_0_0/0.4)]"
              : "border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 pl-1">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-crimson font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="hidden font-mono text-xs tracking-tight text-muted sm:block">
              medina<span className="text-garnet">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Trabajemos
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                medina<span className="text-garnet">.dev</span>
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl font-semibold text-ink"
                >
                  <span className="font-mono text-sm text-garnet">{l.tag}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-crimson py-4 font-medium text-white"
            >
              Trabajemos juntos
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
