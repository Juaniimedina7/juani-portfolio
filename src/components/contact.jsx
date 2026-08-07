"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Reveal, TextReveal, Magnetic } from "@/components/motion-primitives";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.whatsapp}`,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "in/juan-ignacio-medina",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Juaniimedina7",
    href: profile.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-page scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/40 p-8 sm:p-14">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--glow)/0.18),transparent_65%)] blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-garnet">~/contact · disponible</span>
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest text-ink">
            <TextReveal text="¿Tenés una idea?" />
            <br />
            <span className="text-gradient">
              <TextReveal text="Hagámosla real." delay={0.2} />
            </span>
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Proyectos, colaboraciones o buenas ideas. Respondo en 24 hs.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Magnetic strength={0.3} className="mt-8 inline-block">
              <a
                href={`mailto:${profile.email}`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-crimson px-7 py-4 text-lg font-medium text-white shadow-[0_14px_50px_-12px_rgb(var(--glow)/0.9)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Mail className="h-5 w-5" />
                Escribirme
              </a>
            </Magnetic>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.35 + i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-bg/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-elevated/60 text-garnet transition-colors group-hover:border-crimson/50">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-faint">
                        {c.label}
                      </div>
                      <div className="text-sm text-ink">{c.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-garnet" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
