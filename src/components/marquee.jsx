"use client";

import { marquee } from "@/lib/data";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-border py-6">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-display text-xl font-medium text-muted transition-colors hover:text-garnet">
                {item}
              </span>
              <span className="text-crimson/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
