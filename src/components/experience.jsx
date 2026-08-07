"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, TextReveal } from "@/components/motion-primitives";
import { experience, education } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-page scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1.2fr_1fr]">
        {/* Experiencia */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson/60" />
              <span className="font-mono text-xs text-garnet">~/experiencia</span>
            </div>
          </Reveal>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
            <TextReveal text="Experiencia" />
          </h2>

          <div className="mt-8 divide-y divide-border">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="group flex flex-col gap-1 py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-faint">{job.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-garnet hover:underline"
                      >
                        {job.company}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="font-medium text-garnet">{job.company}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{job.line}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Formación */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson/60" />
              <span className="font-mono text-xs text-garnet">~/formación</span>
            </div>
          </Reveal>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
            <TextReveal text="Formación" />
          </h2>

          <div className="mt-8 space-y-2.5">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="card-sheen group relative flex items-baseline justify-between gap-4 rounded-xl border border-border bg-surface/40 px-4 py-3 transition-colors hover:border-crimson/40">
                  <div>
                    <div className="text-sm font-semibold text-ink">{e.title}</div>
                    <div className="text-xs text-muted">{e.place}</div>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-faint">{e.period}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
