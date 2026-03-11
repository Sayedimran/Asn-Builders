"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Phone,
  MessageCircleMore,
} from "lucide-react";

const points = [
  {
    title: "Premium Materials",
    desc: "Quality finishing & long-term durability",
  },
  { title: "Transparent Process", desc: "Clear budgeting & progress updates" },
  { title: "Expert Team", desc: "Skilled engineers & strong supervision" },
  { title: "Safe Handover", desc: "Compliance-focused, on-time delivery" },
];

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
        "Hello ASN Builders! I want to know about your projects and pricing.",
      )}`,
    [],
  );

  return (
    <section
      id="about"
      className="relative isolate overflow-x-hidden py-14 md:py-24"
    >
      {/* background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[260px] w-[560px] -translate-x-1/2 rounded-full" />
        <div className="absolute right-10 bottom-0 h-[220px] w-[420px] rounded-full" />
        <div className="absolute inset-0" />
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
                      <Check className="h-4 w-4" />
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
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={waLink}
                  target="_blank"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <span className="text-[#25D366]">
                    <MessageCircleMore className="h-4 w-4" />
                  </span>
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* glow */}
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
                        <ShieldCheck className="h-4 w-4" />
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
                          <Phone className="h-5 w-5" />
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
                      <ShieldCheck className="h-4 w-4" />
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
