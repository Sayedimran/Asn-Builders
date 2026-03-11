"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  partners,
  type PartnerTeamMember,
  type SocialType,
} from "@/src/data/partners";
import {
  ArrowRight,
  BadgeCheck,
  Search,
  Filter,
  Plus,
  X,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react";

function SocialIcon({ type }: { type: SocialType }) {
  const cls = "h-4 w-4";
  switch (type) {
    case "facebook":
      return <Facebook className={cls} />;
    case "linkedin":
      return <Linkedin className={cls} />;
    case "twitter":
      return <Twitter className={cls} />;
    case "github":
      return <Github className={cls} />;
    case "website":
      return <Globe className={cls} />;
    default:
      return <Globe className={cls} />;
  }
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TeamPage() {
  const data = useMemo(() => partners as PartnerTeamMember[], []);
  const roles = useMemo(() => {
    const set = new Set<string>();
    data.forEach((m) => set.add(m.role));
    return ["All", ...Array.from(set)];
  }, [data]);

  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return data.filter((m) => {
      const matchesQ =
        !query ||
        m.name.toLowerCase().includes(query) ||
        m.role.toLowerCase().includes(query);
      const matchesRole = role === "All" ? true : m.role === role;
      return matchesQ && matchesRole;
    });
  }, [data, q, role]);

  // --------- Carousel (mobile swipe + autoplay) ----------
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [openId, setOpenId] = useState<string | number | null>(null);

  const AUTOPLAY_MS = 3200;

  useEffect(() => {
    if (isDesktop) return; // autoplay only on mobile/tablet carousel
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      const container = trackRef.current;
      if (!container) return;

      const card = container.querySelector<HTMLElement>("[data-card='team']");
      const step = card ? card.offsetWidth + 16 : 320;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const next = Math.min(container.scrollLeft + step, maxScroll);

      if (next >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: next, behavior: "smooth" });
      }
    };

    if (!isUserInteracting && openId === null && filtered.length > 1) {
      const id = window.setInterval(tick, AUTOPLAY_MS);
      return () => window.clearInterval(id);
    }
  }, [isDesktop, isUserInteracting, openId, filtered.length]);

  // outside tap -> close socials on mobile
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest?.("[data-team-card='true']")) return;
      setOpenId(null);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler as any);
    };
  }, []);

  return (
    <main className="relative isolate overflow-x-hidden">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-90px] h-[340px] w-[520px] rounded-full bg-gradient-to-br from-[#C8A951]/18 via-transparent to-[#0A4767]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.035] [background-size:22px_22px]" />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pt-14">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Our People
            </span>

            <h1 className="mt-4 font-heading text-[clamp(2rem,3.6vw,3rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.12]">
              Meet the <span className="text-[#0A4767]">Management Team</span>
            </h1>

            <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
              Experienced professionals focused on quality, safety, and on-time
              delivery — for residential & commercial projects.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Services <ArrowRight className="h-4 w-4 text-[#0A4767]" />
            </Link>
          </div>
        </div>

        {/* Filter bar (mobile friendly, no sticky -> no double scroll) */}
        <div className="mt-7 grid gap-3 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name or role..."
                className="w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 py-3 text-sm font-semibold text-[#0D1927] placeholder:text-slate-400 shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative">
              <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-black/10 bg-white pl-11 pr-4 py-3 text-sm font-semibold text-[#0D1927] shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    Role: {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setQ("");
              setRole("All");
            }}
            className="lg:col-span-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-extrabold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Reset
          </button>

          <div className="lg:col-span-12 mt-1 flex items-center justify-between gap-2">
            <div className="text-xs font-semibold text-slate-600">
              Showing{" "}
              <span className="font-extrabold text-[#0D1927]">
                {filtered.length}
              </span>{" "}
              members
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-emerald-600" />
              Verified team profiles
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className="mt-6"
          onTouchStart={() => setIsUserInteracting(true)}
          onTouchEnd={() => setIsUserInteracting(false)}
          onMouseEnter={() => setIsUserInteracting(true)}
          onMouseLeave={() => setIsUserInteracting(false)}
        >
          <div
            ref={trackRef}
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory scroll-smooth
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none
            "
          >
            {filtered.map((m) => (
              <div
                key={m.id}
                className="snap-start shrink-0 w-[86%] sm:w-[70%] lg:w-auto"
              >
                <TeamCard
                  member={m}
                  isDesktop={isDesktop}
                  open={openId === m.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === m.id ? null : m.id))
                  }
                  onClose={() => setOpenId(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* empty */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[28px] border border-black/5 bg-white/75 p-8 text-center shadow-sm backdrop-blur">
            <div className="mx-auto text-base font-extrabold text-[#0D1927]">
              No team members found
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-600">
              Try another keyword or reset filters.
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function TeamCard({
  member,
  isDesktop,
  open,
  onToggle,
  onClose,
}: {
  member: PartnerTeamMember;
  isDesktop: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const hasSocial = (member.socials?.length ?? 0) > 0;

  return (
    <motion.article
      data-team-card="true"
      data-card="team"
      layout
      transition={{ duration: 0.35, ease }}
      className="
        group relative overflow-hidden rounded-[28px]
        border border-black/5 bg-white/70 backdrop-blur
        shadow-[0_18px_60px_rgba(2,6,23,0.10)]
        hover:shadow-[0_26px_80px_rgba(2,6,23,0.14)]
      "
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      {/* IMAGE AREA (no ugly crop) */}
      <div className="relative overflow-hidden">
        {/* fixed premium ratio */}
        <div className="relative aspect-[16/11] bg-slate-100">
          {/* background blur fill */}
          <img
            src={member.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-50"
            aria-hidden="true"
            draggable={false}
          />
          {/* main image contain (full visible) */}
          <img
            src={member.image}
            alt={member.name}
            className="relative z-10 h-full w-full object-contain"
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          {/* overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

          {/* top pills */}
          <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/80 px-3 py-1 text-[11px] font-extrabold text-[#0D1927] shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
              Leadership
            </span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-extrabold text-slate-700 shadow-sm backdrop-blur">
              {member.role}
            </span>
          </div>

          {/* Desktop hover socials */}
          {hasSocial ? (
            <div
              className="
                hidden lg:flex
                absolute right-4 bottom-4 z-20
                flex-col gap-2
                rounded-full bg-white/90 backdrop-blur
                ring-1 ring-black/10
                px-2 py-2
                shadow-[0_20px_60px_rgba(2,6,23,0.18)]
                opacity-0 translate-y-2 scale-[0.98]
                transition duration-200
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
              "
            >
              {member.socials.slice(0, 5).map((s, idx) => (
                <a
                  key={`${s.type}-${idx}`}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-[#0D1927] text-white
                    hover:brightness-110 active:scale-[0.98]
                    transition
                    focus:outline-none focus:ring-2 focus:ring-[#0A4767]/40
                  "
                  aria-label={`${member.name} ${s.type}`}
                  title={s.type}
                >
                  <SocialIcon type={s.type} />
                </a>
              ))}
            </div>
          ) : null}

          {/* Mobile toggle socials (tap +) */}
          <AnimatePresence>
            {!isDesktop && hasSocial && open ? (
              <motion.div
                key="mobile-social"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="
                  absolute right-4 bottom-4 z-20
                  flex flex-col gap-2
                  rounded-full bg-white/90 backdrop-blur
                  ring-1 ring-black/10
                  px-2 py-2
                  shadow-[0_20px_60px_rgba(2,6,23,0.18)]
                "
              >
                {member.socials.slice(0, 5).map((s, idx) => (
                  <motion.a
                    key={`${s.type}-${idx}`}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.22, ease, delay: idx * 0.04 }}
                    className="
                      inline-flex h-10 w-10 items-center justify-center rounded-full
                      bg-[#0D1927] text-white
                      active:scale-[0.98]
                      transition
                      focus:outline-none focus:ring-2 focus:ring-[#0A4767]/40
                    "
                    aria-label={`${member.name} ${s.type}`}
                    title={s.type}
                  >
                    <SocialIcon type={s.type} />
                  </motion.a>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* (+)/(x) button — MUST show on mobile */}
          {hasSocial ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="
                absolute bottom-4 left-4 z-30
                grid h-12 w-12 place-items-center
                rounded-full bg-[#C8A951] text-[#0D1927]
                shadow-[0_14px_40px_rgba(200,169,81,0.40)]
                ring-1 ring-black/10
                transition active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-[#0A4767]/40
                lg:hidden
              "
              aria-label={open ? "Close social links" : "Open social links"}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, ease }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="plus"
                    initial={{ rotate: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, ease }}
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ) : null}
        </div>
      </div>

      {/* TEXT */}
      <div className="px-5 py-5">
        <div className="text-lg font-extrabold text-[#0D1927]">
          {member.name}
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-600">
          {member.role}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">ASN Builders</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0A4767] hover:underline"
          >
            Contact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
