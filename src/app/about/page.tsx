"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Sparkles,
  Hammer,
  Users,
  ChevronRight,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const values = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Safety First",
    desc: "Compliance-focused execution with on-site supervision and standards.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Quality Materials",
    desc: "Premium-grade materials with long-term durability and finishing.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Timely Delivery",
    desc: "Clear planning, progress updates, and on-time handover.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Expert Team",
    desc: "Skilled engineers & experienced management for strong supervision.",
  },
];

const steps = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Consultation & Planning",
    desc: "We understand your needs, site details, and timeline, then plan properly.",
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    title: "Execution & Supervision",
    desc: "Structured execution with quality checks and transparent progress reports.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Handover & Support",
    desc: "Compliance-ready handover with finishing review and after-support.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-80px] h-[340px] w-[420px] rounded-full bg-gradient-to-br from-[#C8A951]/18 via-transparent to-[#0A4767]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.04] [background-size:22px_22px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              About ASN Builders
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-heading text-[clamp(2.1rem,4vw,3.4rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.1]"
            >
              Built on <span className="text-[#0A4767]">Trust</span>.
              <br />
              Delivered with <span className="text-[#0A4767]">Quality</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base"
            >
              ASN Builders develops modern residential & commercial projects
              across Bangladesh. We focus on safety, premium materials, and
              dependable delivery—so your investment stays secure and valuable.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:grid-cols-3"
            >
              <StatCard title="10+ Years" subtitle="Industry Experience" />
              <StatCard title="Quality-First" subtitle="Premium Finishing" />
              <StatCard title="On-Time" subtitle="Transparent Process" />
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
              >
                Explore Projects <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Get a Quote <ChevronRight className="h-4 w-4 text-[#0A4767]" />
              </Link>
            </motion.div>
          </div>

          {/* Right visual card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-[32px] border border-black/5 bg-white/75 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur">
              <div className="p-3">
                <div className="overflow-hidden rounded-[26px] border border-black/5 bg-white">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src="https://i.postimg.cc/NFhnyn9t/ASN-Building.png"
                      alt="ASN Builders"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1 text-xs font-bold text-[#0D1927] shadow-sm backdrop-blur">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        Verified Developer
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#C8A951]/22 px-3 py-1 text-xs font-extrabold text-[#7a5f15]">
                        Premium Build
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur">
                      Quality • Safety • Timely Delivery
                    </div>
                  </div>

                  <div className="grid gap-3 p-4 sm:grid-cols-2">
                    <MiniInfo
                      title="Trusted Partner"
                      sub="Dhaka • Bangladesh"
                    />
                    <MiniInfo title="Site Visit" sub="Schedule via WhatsApp" />
                  </div>

                  <div className="flex items-center justify-between border-t border-black/5 px-4 py-4">
                    <div className="text-sm font-semibold text-slate-700">
                      Built for modern living
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-bold text-slate-800">
                      <BadgeCheck className="h-4 w-4 text-emerald-600" />
                      Quality Checked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:pb-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-black/5 bg-white/70 p-6 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur md:p-10"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="text-xs font-extrabold tracking-wider text-[#0A4767]">
              WHY ASN BUILDERS
            </div>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0D1927] md:text-3xl">
              Quality you can see. Process you can trust.
            </h2>
            <p className="mt-3 text-sm font-semibold text-slate-600 leading-6">
              We combine modern design with strict supervision—so every project
              stays durable, safe, and premium.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
                    {v.icon}
                  </span>
                  <div>
                    <div className="text-sm font-extrabold text-[#0D1927]">
                      {v.title}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
                      {v.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-[32px] border border-black/5 bg-white/70 p-6 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C8A951]/18 px-3 py-1 text-xs font-extrabold text-[#7a5f15]">
                <Sparkles className="h-4 w-4" />
                Our Process
              </div>

              <h3 className="mt-4 text-xl font-extrabold text-[#0D1927] md:text-2xl">
                Transparent steps, premium results.
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-600 leading-6">
                From planning to handover—every stage is tracked with quality
                checks and clear updates.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
                >
                  Start Your Project <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  View Projects{" "}
                  <ChevronRight className="h-4 w-4 text-[#0A4767]" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right steps */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[32px] border border-black/5 bg-white/70 p-6 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur md:p-8">
              <div className="grid gap-4">
                {steps.map((s, idx) => (
                  <div
                    key={s.title}
                    className="rounded-[26px] border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
                        {s.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-[#C8A951]">
                            STEP {idx + 1}
                          </span>
                          <div className="h-[1px] flex-1 bg-black/5" />
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-[#0D1927]">
                          {s.title}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-[34px] border border-black/5 bg-gradient-to-br from-white/80 via-white/60 to-white/80 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0A4767]/10 px-3 py-1 text-xs font-extrabold text-[#0A4767]">
                <Building2 className="h-4 w-4" />
                ASN Builders
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-[#0D1927] md:text-2xl">
                Ready to build your next project?
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Get a quick estimate and professional guidance today.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
              >
                Contact Us <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact#map"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Office Location{" "}
                <ChevronRight className="h-4 w-4 text-[#0A4767]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur">
      <div className="text-lg font-extrabold text-[#0D1927]">{title}</div>
      <div className="mt-1 text-xs font-semibold text-slate-600">
        {subtitle}
      </div>
    </div>
  );
}

function MiniInfo({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="text-sm font-extrabold text-[#0D1927]">{title}</div>
      <div className="mt-1 text-xs font-semibold text-slate-600">{sub}</div>
    </div>
  );
}
