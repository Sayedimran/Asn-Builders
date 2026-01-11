"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";

const points = [
  {
    title: "Premium Materials",
    desc: "Quality finishing & long-term durability",
  },
  { title: "Transparent Process", desc: "Clear budgeting & progress updates" },
  { title: "Expert Team", desc: "Skilled engineers & strong supervision" },
  { title: "Safe Handover", desc: "Compliance-focused, on-time delivery" },
];

/** Small icons (no library needed) */
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
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.88 11.88 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.9 11.9 0 0 0 5.8 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.47-8.4Zm-8.5 18.36h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.96.98-3.59-.23-.37a9.94 9.94 0 0 1-1.52-5.27C2.17 6.46 6.5 2.13 12.03 2.13c2.63 0 5.1 1.03 6.96 2.9a9.77 9.77 0 0 1 2.88 6.95c0 5.53-4.33 9.86-9.85 9.86Zm5.4-7.38c-.3-.15-1.78-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}
function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.2 10.7 14.4 15.6 9.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutSnapshot() {
  const waLink = useMemo(
    () =>
      `https://wa.me/8801708135425?text=${encodeURIComponent(
        "Hello ASN Builders! I want to know about your projects and pricing."
      )}`,
    []
  );

  return (
    // ✅ overflow-x-hidden fixes the mobile bottom scroll bar
    <section className="relative isolate overflow-x-hidden py-14 md:py-24">
      {/* background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[260px] w-[560px] -translate-x-1/2 rounded-full" />
        <div className="absolute right-10 bottom-0 h-[220px] w-[420px] rounded-full" />
        <div className="absolute inset-0 " />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
                About ASN Builders
              </span>

              <h2 className="mt-5 font-heading font-extrabold tracking-tight text-[#0D1927] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]">
                Built on <span className="text-[#0A4767]">Trust</span>.
                <br />
                Delivered with <span className="text-[#0A4767]">Quality</span>.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
                We develop modern residential & commercial projects across
                Bangladesh with strong safety standards, premium materials and
                dependable delivery — so your investment stays secure and
                valuable.
              </p>
            </motion.div>

            {/* feature grid */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-4 sm:grid-cols-2"
            >
              {points.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-3xl border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
                      <IconCheck />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#0D1927]">
                        {p.title}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:brightness-110 transition"
                >
                  Learn More <IconArrowRight />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={waLink}
                  target="_blank"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <span className="text-[#25D366]">
                    <IconWhatsApp />
                  </span>
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE CARD — FIXED (no overflow-x) */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* ✅ glow (NO negative inset) */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[44px]">
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/18 blur-3xl scale-[1.25]" />
            </div>

            {/* shell */}
            <div className="relative rounded-[36px] bg-white/70 p-3 shadow-[0_30px_90px_rgba(2,6,23,0.12)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white">
                {/* image */}
                <div className="relative aspect-16/11 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0D1927_1px,transparent_1px)] bg-size-[22px_22px]" />

                  <motion.img
                    src="https://i.postimg.cc/NFhnyn9t/ASN-Building.png"
                    alt="ASN Builders construction"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    initial={{ scale: 1.03 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* badges */}
                  <div className="absolute left-3 right-3 top-3 flex justify-between flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1 text-xs font-bold text-[#0D1927] shadow-sm backdrop-blur">
                      <span className="text-emerald-600">
                        <IconShieldCheck />
                      </span>
                      Verified Developer
                    </span>

                    <span className="inline-flex items-center rounded-full bg-[#C8A951]/22 px-3 py-1 text-xs font-extrabold text-[#7a5f15]">
                      Premium Build
                    </span>
                  </div>

                  {/* bottom caption */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur">
                    Quality • Safety • Timely Delivery
                  </div>
                </div>

                {/* info panels */}
                <div className="px-4 py-4 sm:px-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                      <div className="text-sm font-extrabold text-[#0D1927]">
                        Trusted Construction Partner
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-600">
                        Dhaka • Bangladesh
                      </div>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      className="group rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-extrabold text-[#0D1927]">
                            Site Visit
                          </div>
                          <div className="mt-1 text-xs font-semibold text-slate-600">
                            Schedule via WhatsApp
                          </div>
                        </div>

                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-600 transition group-hover:bg-emerald-500/18">
                          <IconWhatsApp />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* footer strip */}
                <div className="flex flex-col gap-3 border-t border-black/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <div className="text-sm font-semibold text-slate-700">
                    Built for modern living
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-bold text-slate-800">
                    <span className="text-emerald-600">
                      <IconShieldCheck />
                    </span>
                    Quality Checked
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
