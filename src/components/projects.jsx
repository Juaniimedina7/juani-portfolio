"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, TextReveal } from "@/components/motion-primitives";
import { projects } from "@/lib/data";
import satoriLogo from "@/lib/images/satori.svg";
import sampreLogo from "@/lib/images/sampre.png";
import rampLogo from "@/lib/images/ramp.png";
import abueloLogo from "@/lib/images/abuelo.png";

const LOGOS = { satori: satoriLogo, sampre: sampreLogo, ramp: rampLogo, abuelo: abueloLogo };

function domain(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const wide = project.span === "lg:col-span-7";
  const logo = LOGOS[project.logo];
  const src = logo?.src || logo;

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    setTilt({ ry: (px - 0.5) * 4.5, rx: (0.5 - py) * 4.5 });
  }

  return (
    <Reveal delay={index * 0.07} className={project.span}>
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{
          transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="card-sheen group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface/50 p-5 transition-colors duration-300 hover:border-crimson/40 sm:p-6"
      >
        {/* stretched link — whole card is clickable */}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visitar ${project.name}`}
          className="absolute inset-0 z-20 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson"
        />

        {/* accent glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, ${project.accent}55, transparent 70%)` }}
        />

        <div
          className={`relative z-10 grid h-full gap-5 ${
            wide ? "sm:grid-cols-[1.05fr_1fr] sm:items-center" : "grid-rows-[auto_1fr]"
          }`}
        >
          {/* logo plaque with browser chrome */}
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate font-mono text-[10px] text-neutral-400">
                {domain(project.href)}
              </span>
            </div>
            <div className="relative h-40 overflow-hidden bg-gradient-to-b from-white to-neutral-100 sm:h-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Logo ${project.name}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.05] ${project.logoPad}`}
              />
            </div>
          </div>

          {/* info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]"
                style={{ background: `${project.accent}1f`, color: project.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} />
                {project.kind}
              </span>
              <span className="font-mono text-[11px] text-faint">{project.year}</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tightest text-ink sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-elevated/50 px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              Visitar
              <ArrowUpRight className="h-4 w-4 text-garnet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-page scroll-mt-24 px-6 py-24 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-crimson/60" />
          <span className="font-mono text-xs text-garnet">~/work</span>
        </div>
      </Reveal>
      <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold tracking-tightest text-ink">
        <TextReveal text="Proyectos" />
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
