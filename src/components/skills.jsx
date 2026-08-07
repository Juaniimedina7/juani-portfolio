"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion-primitives";
import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="relative mx-auto max-w-page scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeader path="~/stack" title="Stack" />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="card-sheen group relative flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-garnet">0{gi + 1}</span>
                <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + i * 0.03, duration: 0.4 }}
                    className="rounded-lg border border-border bg-elevated/60 px-2.5 py-1 text-sm text-muted transition-colors group-hover:border-border hover:!border-crimson/50 hover:!text-ink"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
