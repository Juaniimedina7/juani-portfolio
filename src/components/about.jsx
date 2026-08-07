"use client";

import { Reveal, TextReveal } from "@/components/motion-primitives";
import { focus } from "@/lib/data";

export function About() {
  return (
    <section id="perfil" className="relative mx-auto max-w-page scroll-mt-24 px-6 py-24 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-crimson/60" />
          <span className="font-mono text-xs text-garnet">~/perfil</span>
        </div>
      </Reveal>

      <h2 className="mt-6 max-w-4xl font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-tightest">
        <TextReveal
          text="Desarrollo en Satori CI y diseño productos propios."
          className="text-ink"
        />{" "}
        <span className="text-muted">
          <TextReveal
            text="Me obsesiona que una interfaz responda exactamente como esperabas."
            delay={0.25}
          />
        </span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal key={f.k} delay={i * 0.08}>
            <div className="card-sheen group relative h-full rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40">
              <span className="font-mono text-xs text-garnet">{f.k}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-snug text-muted">{f.line}</p>
              <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-crimson/50 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
