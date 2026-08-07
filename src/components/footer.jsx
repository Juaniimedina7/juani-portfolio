"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-crimson font-display text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="font-mono text-xs text-muted">
            © {year} {profile.shortName} · construido con Next.js
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-garnet"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-garnet"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-garnet"
          >
            Arriba
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
