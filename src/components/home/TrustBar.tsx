"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number; // for animation
  suffix?: string; // +, K+, %
};

const STATS: Stat[] = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Projects Delivered", value: 45, suffix: "+" },
  { label: "Happy Clients", value: 2000, suffix: "+" }, // 2K+
  { label: "On-time Delivery", value: 98, suffix: "%" },
];

function formatStat(value: number, suffix?: string) {
  // 2000 -> 2K+
  if (value >= 1000) {
    const k = Math.round(value / 100) / 10; // one decimal max
    return `${k % 1 === 0 ? k.toFixed(0) : k}K${suffix ?? ""}`;
  }
  return `${value}${suffix ?? ""}`;
}

function CountUp({
  to,
  suffix,
  start,
  duration = 900,
}: {
  to: number;
  suffix?: string;
  start: boolean;
  duration?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(eased * to);
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{formatStat(val, suffix)}</>;
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="-mt-10 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[28px]
            border border-black/5 bg-white/80
            shadow-[0_18px_70px_rgba(2,6,23,0.08)]
            backdrop-blur
          "
        >
          {/* subtle premium gradient border glow */}
          <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
            <div className="absolute -top-24 left-1/2 h-56 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0A4767]/20 via-[#C8A951]/20 to-[#0A4767]/20 blur-2xl" />
          </div>

          <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-4 md:p-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="
                  rounded-2xl border border-black/5 bg-white
                  px-4 py-4
                "
              >
                <div className="font-heading text-2xl font-extrabold tracking-tight text-[#0D1927]">
                  <CountUp to={s.value} suffix={s.suffix} start={inView} />
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
