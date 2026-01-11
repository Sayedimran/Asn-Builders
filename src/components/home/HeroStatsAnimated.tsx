"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  label: string;
  to: number;
  suffix?: string;
  format?: "normal" | "k";
};

const stats: Stat[] = [
  { label: "Years", to: 12, suffix: "+" },
  { label: "Projects", to: 45, suffix: "+" },
  { label: "Clients", to: 2000, suffix: "+", format: "k" },
];

function formatValue(value: number, format?: "normal" | "k") {
  if (format === "k" && value >= 1000) {
    const k = Math.round(value / 100) / 10; // 2000 => 2.0
    return `${k % 1 === 0 ? k.toFixed(0) : k}k`;
  }
  return `${value}`;
}

function CountUp({
  to,
  start,
  duration = 3000,
  suffix = "",
  format = "normal",
}: {
  to: number;
  start: boolean;
  duration?: number;
  suffix?: string;
  format?: "normal" | "k";
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return (
    <>
      {formatValue(val, format)}
      {suffix}
    </>
  );
}

export default function HeroStatsAnimated() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="mt-6 grid grid-cols-3 gap-6 text-sm ">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
        >
          <div className="font-heading text-xl font-semibold text-[#0D1927]">
            <CountUp
              to={s.to}
              suffix={s.suffix}
              format={s.format}
              start={inView}
              duration={1500}
            />
          </div>
          <div className="text-slate-500">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
