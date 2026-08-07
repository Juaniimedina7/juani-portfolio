"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin, Sparkles } from "lucide-react";
import { Terminal } from "@/components/terminal";
import { Magnetic } from "@/components/motion-primitives";
import { LiveClock } from "@/components/live-clock";
import { Counter } from "@/components/counter";
import { profile, stats } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <motion.div
          style={{ y: yGlow }}
          className="absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.16),transparent_62%)] blur-3xl"
        />
        <motion.div
          style={{ y: yGlow }}
          className="animate-float-slow absolute -right-20 top-1/3 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgb(var(--glow)/0.18),transparent_65%)] blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="mx-auto grid w-full max-w-page grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10"
      >
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 py-1.5 pl-2.5 pr-4 font-mono text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
              <span className="text-faint">·</span>
              {profile.location}
              <span className="text-faint">·</span>
              <LiveClock />
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[clamp(2.8rem,7.5vw,5.6rem)] font-extrabold leading-[0.92] tracking-tightest"
          >
            <span className="block text-ink">{profile.name}</span>
            <span className="block text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-base text-garnet sm:text-lg"
          >
            {profile.role}
            <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-blink bg-crimson align-middle" />
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            <span className="font-semibold text-ink">{profile.lead}</span> {profile.rest}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.4}>
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-crimson px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_-10px_rgb(var(--glow)/0.8)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Sparkles className="h-4 w-4" />
                Ver proyectos
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 font-medium text-ink backdrop-blur transition-colors hover:border-crimson/60"
              >
                Contacto
                <ArrowUpRight className="h-4 w-4 text-garnet" />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-[52px] w-[52px] place-items-center rounded-full border border-border bg-surface/40 text-ink backdrop-blur transition-colors hover:border-crimson/60 hover:text-garnet"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Magnetic>
          </motion.div>

          {/* 3-up stats */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold tracking-tightest text-gradient sm:text-4xl">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — terminal signature */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="[perspective:1200px]"
        >
          <Terminal />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#perfil"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
