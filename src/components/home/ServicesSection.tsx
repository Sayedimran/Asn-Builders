"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/src/data/services";

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M5 12h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconService(kind: string) {
  // small inline icons (no library)
  if (kind === "Flat Sales")
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (kind === "Land Sales")
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );

  if (kind === "Construction")
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 21h18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 21V8l6-3 6 3v13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 21v-6h4v6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );

  // Interior
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 11h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 19v2M18 19v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function tagStyle(theme: string) {
  switch (theme) {
    case "gold":
      return "bg-[#C8A951]/18 text-[#7a5f15] border-[#C8A951]/25";
    case "green":
      return "bg-emerald-500/12 text-emerald-700 border-emerald-500/20";
    case "blue":
      return "bg-[#0A4767]/12 text-[#0A4767] border-[#0A4767]/20";
    case "amber":
    default:
      return "bg-amber-500/12 text-amber-800 border-amber-500/20";
  }
}

export default function ServicesSection() {
  return (
    <section className=" relative py-14 md:py-24 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full" />
        <div className="absolute -bottom-28 right-10 h-[320px] w-[520px] rounded-full " />
        <div className="absolute inset-0 " />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              What We Do
            </span>

            <h2 className="mt-4 font-heading font-extrabold tracking-tight text-[#0D1927] text-[clamp(2rem,3.2vw,3rem)] leading-[1.12]">
              Our <span className="text-[#0A4767]">Services</span>
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              Flat & land sales to complete construction and interiors — a full
              property solution with premium finishing and reliable delivery.
            </p>
          </div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:brightness-110 transition"
            >
              View All Services <IconArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/80 shadow-sm backdrop-blur"
            >
              {/* premium border glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-20 bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/18 blur-2xl" />
              </div>

              {/* image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] w-full">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>

                {/* top row: icon + tag */}
                <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0D1927] shadow-sm">
                    <span className="text-[#0A4767]">
                      {IconService(s.title)}
                    </span>
                    {s.title}
                  </div>

                  <span
                    className={[
                      "inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] font-extrabold",
                      tagStyle(s.theme),
                    ].join(" ")}
                  >
                    {s.tag}
                  </span>
                </div>

                {/* bottom fade for readability */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-extrabold text-[#0D1927]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {s.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A4767] hover:text-[#0D1927] transition"
                  >
                    Learn more <IconArrowRight />
                  </Link>

                  <span className="text-xs font-semibold text-slate-500">
                    ASN Builders
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
