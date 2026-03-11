"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ArrowUpDown,
  MapPin,
  Sparkles,
  Building2,
  CheckCircle2,
  Timer,
  CalendarClock,
  ChevronRight,
} from "lucide-react";

import { projects, type Project } from "@/src/data/projects";

type Status = Project["status"];
type SortKey = "newest" | "title" | "status";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.25 } },
};

function StatusPill({ status }: { status: Status }) {
  const cls =
    status === "Completed"
      ? "border-emerald-600/20 bg-emerald-500/12 text-emerald-700"
      : status === "Ongoing"
        ? "border-sky-600/20 bg-sky-500/12 text-sky-700"
        : "border-amber-700/20 bg-amber-500/14 text-amber-800";

  const Icon =
    status === "Completed"
      ? CheckCircle2
      : status === "Ongoing"
        ? Timer
        : CalendarClock;

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
        "text-[11px] font-extrabold shadow-sm bg-white/70 backdrop-blur",
        cls,
      ].join(" ")}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status | "All">("All");
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = projects.filter((p) => {
      const matchStatus = status === "All" ? true : p.status === status;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        (p.tag?.toLowerCase().includes(q) ?? false);
      return matchStatus && matchQuery;
    });

    // sorting
    list = [...list].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "status") return a.status.localeCompare(b.status);
      // newest: keep current order; if you add createdAt later, sort by createdAt desc here
      return 0;
    });

    return list;
  }, [query, status, sort]);

  return (
    <section className="relative isolate overflow-hidden py-12 md:py-20">
      {/* background (theme match) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-80px] h-[340px] w-[420px] rounded-full bg-gradient-to-br from-[#C8A951]/18 via-transparent to-[#0A4767]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.04] [background-size:22px_22px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={gridStagger}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Our Portfolio
            </span>

            <h1 className="mt-5 font-heading font-extrabold tracking-tight text-[#0D1927] text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.1]">
              Premium <span className="text-[#0A4767]">Projects</span> by ASN
              Builders
            </h1>

            <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
              Browse ongoing, completed, and upcoming developments — crafted
              with quality materials, transparent process, and on-time delivery.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* toolbar */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 rounded-[28px] border border-black/5 bg-white/75 p-4 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur"
        >
          <div className="grid gap-3 md:grid-cols-12 md:items-center">
            {/* search */}
            <div className="md:col-span-6">
              <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <Search className="h-4 w-4 text-[#0A4767]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by project name, location, tag..."
                  className="w-full bg-transparent text-sm font-semibold text-[#0D1927] outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* status filter */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <Filter className="h-4 w-4 text-[#0A4767]" />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0D1927] outline-none"
                >
                  <option value="All">All Status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Upcoming">Upcoming</option>
                </select>
              </div>
            </div>

            {/* sort */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <ArrowUpDown className="h-4 w-4 text-[#0A4767]" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0D1927] outline-none"
                >
                  <option value="newest">Default</option>
                  <option value="title">Title (A→Z)</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#0A4767]" />
              Showing <span className="text-[#0D1927]">
                {filtered.length}
              </span>{" "}
              project(s)
            </div>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setStatus("All");
                setSort("newest");
              }}
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-[#0D1927] shadow-sm transition hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </motion.div>

        {/* grid */}
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={gridStagger}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-[28px] border border-black/5 bg-white/70 p-10 text-center shadow-sm backdrop-blur"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
              <Search className="h-5 w-5" />
            </div>
            <div className="mt-4 text-lg font-extrabold text-[#0D1927]">
              No matching projects
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-600">
              Try a different keyword or reset filters.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      variants={cardAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease }}
      className={[
        "group relative overflow-hidden rounded-[28px]",
        "border border-black/5 bg-white/70 backdrop-blur",
        "shadow-sm hover:shadow-[0_26px_70px_rgba(2,6,23,0.12)]",
        "hover:ring-1 hover:ring-[#0A4767]/20",
      ].join(" ")}
    >
      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />

        {/* top row */}
        <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
          <StatusPill status={p.status} />

          {p.tag ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-[11px] font-extrabold text-[#0D1927] shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
              {p.tag}
            </span>
          ) : (
            <span />
          )}
        </div>

        {/* bottom bar */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="rounded-2xl border border-white/20 bg-white/85 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur">
            <div className="text-base font-extrabold text-[#0D1927] leading-snug">
              {p.title}
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <MapPin className="h-3.5 w-3.5 text-[#0A4767]" />
              {p.location}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="p-5">
        <Link
          href={p.slug}
          className={[
            "inline-flex w-full items-center justify-center gap-2 rounded-2xl",
            "bg-[#0D1927] px-4 py-2.5 text-sm font-semibold text-white",
            "shadow-lg shadow-black/10 transition hover:brightness-110",
          ].join(" ")}
        >
          View Details
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
