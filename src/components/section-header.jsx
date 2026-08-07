"use client";

import { Reveal, TextReveal } from "@/components/motion-primitives";

export function SectionHeader({ path, title, blurb, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-crimson/60" />
          <span className="font-mono text-xs tracking-tight text-garnet">{path}</span>
        </div>
      </Reveal>
      <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.02] tracking-tightest text-ink">
        <TextReveal text={title} />
      </h2>
      {blurb && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}
