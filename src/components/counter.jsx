"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates the numeric portion of a value like "4+", "6", "AWS".
export function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(target === null ? value : 0);

  useEffect(() => {
    if (!inView || target === null) return;
    let raf;
    const duration = 1100;
    let start;
    const step = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target === null ? value : `${n}${suffix}`}
    </span>
  );
}
