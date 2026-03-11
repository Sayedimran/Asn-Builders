"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Sparkles,
  BadgeCheck,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { services } from "@/src/data/services";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    services.forEach((s) => set.add(s.tag));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return services.filter((s) => {
      const matchesQuery =
        !q ||
        normalize(s.title).includes(q) ||
        normalize(s.desc).includes(q) ||
        normalize(s.tag).includes(q);

      const matchesTag = activeTag === "All" ? true : s.tag === activeTag;
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <main className="relative isolate overflow-x-hidden">
      {/* ✅ Premium background (safe, no x-overflow) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-90px] h-[340px] w-[480px] rounded-full bg-gradient-to-br from-[#C8A951]/18 via-transparent to-[#0A4767]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.035] [background-size:22px_22px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Our Services
            </div>

            <h1 className="mt-5 font-heading text-[clamp(2rem,3.7vw,3.2rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.12]">
              Premium solutions for{" "}
              <span className="text-[#0A4767]">design</span>,{" "}
              <span className="text-[#0A4767]">planning</span> &{" "}
              <span className="text-[#0A4767]">construction</span>.
            </h1>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base">
              From architectural planning to approvals and full execution—ASN
              Builders delivers quality-first service for residential &
              commercial projects.
            </p>

            {/* trust bullets */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <TrustItem
                icon={<BadgeCheck className="h-4 w-4" />}
                title="Trusted team"
                desc="Engineers + supervision support"
              />
              <TrustItem
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Quality control"
                desc="Safety & finishing standards"
              />
              <TrustItem
                icon={<Layers className="h-4 w-4" />}
                title="One-stop solution"
                desc="Design → Approval → Build"
              />
              <TrustItem
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="Fast response"
                desc="Estimate discussion quickly"
              />
            </div>
          </div>

          {/* RIGHT premium card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/75 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur">
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0D1927_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                    <Sparkles className="h-4 w-4 text-[#0A4767]" />
                    Quick filters + search
                  </span>
                  <span className="inline-flex items-center rounded-2xl bg-[#C8A951]/18 px-3 py-2 text-xs font-extrabold text-[#7a5f15]">
                    {services.length}+ Services
                  </span>
                </div>

                <div className="mt-4 text-sm font-extrabold text-[#0D1927]">
                  Pro tip:
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-600 leading-6">
                  Search “RCC”, “Plan”, “Interior”, “Approval” — then filter by
                  tag to find the exact service fast.
                </p>

                <div className="mt-5 rounded-2xl border border-black/5 bg-white p-4">
                  <div className="text-xs font-extrabold text-[#0D1927]">
                    For fastest estimate include:
                  </div>
                  <ul className="mt-2 space-y-2 text-xs font-semibold text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Land size + location
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Floors + approx sqft
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Timeline + finishing preference
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
                  >
                    Get Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#service-grid"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Browse Services{" "}
                    <ArrowRight className="h-4 w-4 text-[#0A4767]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="mx-auto max-w-7xl px-4 pb-14" id="service-grid">
        <div className="rounded-[28px] border border-black/5 bg-white/80 p-4 shadow-lg shadow-black/5 backdrop-blur">
          <div className="grid gap-3 md:grid-cols-12 md:items-center">
            {/* Search */}
            <div className="md:col-span-7">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services (e.g. RCC, plan, interior...)"
                  className="w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 py-3 text-sm font-semibold text-[#0D1927] placeholder:text-slate-400 shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10"
                />
              </div>
            </div>

            {/* Tag */}
            <div className="md:col-span-3">
              <select
                value={activeTag}
                onChange={(e) => setActiveTag(e.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0D1927] shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    Tag: {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveTag("All");
              }}
              className="md:col-span-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-extrabold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Reset
            </button>
          </div>

          {/* Result count + quick chips */}
          <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-semibold text-slate-600">
              Showing{" "}
              <span className="font-extrabold text-[#0D1927]">
                {filtered.length}
              </span>{" "}
              services
              {query ? (
                <>
                  {" "}
                  for{" "}
                  <span className="font-extrabold text-[#0A4767]">
                    “{query}”
                  </span>
                </>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", ...tags.slice(1, 6)].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTag(t)}
                  className={[
                    "rounded-full px-3 py-1 text-[11px] font-extrabold transition",
                    activeTag === t
                      ? "bg-[#0D1927] text-white"
                      : "border border-black/10 bg-white text-[#0D1927] hover:bg-slate-50",
                  ].join(" ")}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.article
                key={s.slug ?? s.title}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, ease }}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(2,6,23,0.12)]"
              >
                {/* image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

                  {/* top chips */}
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/80 px-3 py-1 text-[11px] font-extrabold text-[#0D1927] shadow-sm backdrop-blur">
                      {s.tag}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#C8A951]/22 px-3 py-1 text-[11px] font-extrabold text-[#7a5f15]">
                      Premium
                    </span>
                  </div>

                  {/* bottom title bar */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="rounded-2xl border border-white/20 bg-white/85 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur">
                      <div className="text-base font-extrabold text-[#0D1927] leading-snug">
                        {s.title}
                      </div>
                      <div className="mt-1 line-clamp-2 text-xs font-semibold text-slate-700">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="p-5">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[28px] border border-black/5 bg-white/75 p-8 text-center shadow-sm backdrop-blur">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
              <Search className="h-5 w-5" />
            </div>
            <div className="mt-3 text-base font-extrabold text-[#0D1927]">
              No services found
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-600">
              Try different keywords or reset filters.
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
          {icon}
        </span>
        <div>
          <div className="text-sm font-extrabold text-[#0D1927]">{title}</div>
          <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
