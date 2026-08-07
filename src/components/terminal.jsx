"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { terminalLines } from "@/lib/data";

const CMD = terminalLines[0].cmd;
const LOGS = terminalLines.slice(1);

const toneClass = {
  dim: "text-faint",
  ok: "text-ink",
  pass: "text-garnet font-medium",
};

export function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [typed, setTyped] = useState("");
  const [visibleLogs, setVisibleLogs] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let logTimer;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(CMD.slice(0, i));
      if (i >= CMD.length) {
        clearInterval(typeTimer);
        // reveal logs one by one
        let l = 0;
        logTimer = setInterval(() => {
          l += 1;
          setVisibleLogs(l);
          if (l >= LOGS.length) {
            clearInterval(logTimer);
            setDone(true);
          }
        }, 260);
      }
    }, 42);
    return () => {
      clearInterval(typeTimer);
      clearInterval(logTimer);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="card-sheen relative w-full overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] backdrop-blur-md"
    >
      {/* top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/70 to-transparent" />

      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-faint">medina@dev — satori</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-faint">
          zsh
        </span>
      </div>

      {/* body */}
      <div className="min-h-[248px] px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        <div className="flex flex-wrap items-center">
          <span className="text-garnet">➜</span>
          <span className="ml-2 text-faint">~/portfolio</span>
          <span className="ml-2 text-ink">{typed}</span>
          {typed.length < CMD.length && (
            <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-crimson align-middle" />
          )}
        </div>

        <div className="mt-2 space-y-1">
          {LOGS.slice(0, visibleLogs).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className={toneClass[line.tone] || "text-ink"}
            >
              {line.log}
            </motion.div>
          ))}
        </div>

        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 flex items-center gap-2"
          >
            <span className="rounded bg-garnet-600/15 px-1.5 py-0.5 text-[11px] font-medium text-garnet">
              PASS
            </span>
            <span className="text-faint">›</span>
            <span className="text-ink">deploy ready</span>
            <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-crimson align-middle" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
