"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { partners } from "@/src/data/partners";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Plus,
  X,
} from "lucide-react";

type SocialType = "facebook" | "linkedin" | "twitter" | "github" | "website";
type Social = { type: SocialType; url: string };

type TeamMember = {
  id: string | number;
  name: string;
  role: string;
  image: string;
  socials: Social[];
};

const asTeamMembers = (data: any[]): TeamMember[] =>
  (data || []).map((p, idx) => ({
    id: p.id ?? idx,
    name: p.name,
    role: p.role,
    image: p.image,
    socials: p.socials ?? [],
  }));

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
  }
}

/** ✅ simple media query hook (desktop hover only) */
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

export default function ManagementTeam({
  onViewAll,
  viewAllHref = "/team",
}: {
  onViewAll?: () => void;
  viewAllHref?: string;
}) {
  const members = useMemo(() => asTeamMembers(partners as any[]), []);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [openId, setOpenId] = useState<string | number | null>(null);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const AUTOPLAY_MS = 3000;

  // card step based on viewport (keeps swipe natural)
  const getStep = () => {
    if (typeof window === "undefined") return 320;
    const w = window.innerWidth;
    if (w < 480) return 260 + 14;
    if (w < 640) return 280 + 14;
    if (w < 1024) return 320 + 16;
    return 360 + 16;
  };

  // ✅ autoplay (pause if hovering carousel OR any card open)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let t: any;
    const tick = () => {
      const container = trackRef.current;
      if (!container) return;

      const step = getStep();
      const maxScroll = container.scrollWidth - container.clientWidth;
      const nextLeft = Math.min(container.scrollLeft + step, maxScroll);

      if (nextLeft >= maxScroll - 6)
        container.scrollTo({ left: 0, behavior: "smooth" });
      else container.scrollTo({ left: nextLeft, behavior: "smooth" });
    };

    if (!isHoveringCarousel && openId === null && members.length > 1) {
      t = setInterval(tick, AUTOPLAY_MS);
    }
    return () => t && clearInterval(t);
  }, [isHoveringCarousel, openId, members.length]);

  // ✅ outside click/tap close (works on mobile)
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.("[data-team-card='true']")) return;
      setOpenId(null);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler as any);
    };
  }, []);

  const handleViewAll = () => {
    if (onViewAll) return onViewAll();
    window.location.href = viewAllHref;
  };

  return (
    <section className="relative w-full py-5 md:py-16">
      {/* background */}
      

      <div className="mx-auto w-full max-w-7xl px-4">
        {/* heading */}
        <div className="flex flex-col  gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Our People
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Meet the <span className="text-blue-600">Management Team</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Leadership that prioritizes quality, safety, and timely delivery —
              with a client-first mindset.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-[1px] hover:bg-slate-800 md:mt-0"
            type="button"
          >
            View All Team <span className="text-white/80">→</span>
          </button>
        </div>

        {/* carousel */}
        <div
          className="mt-5"
          onMouseEnter={() => setIsHoveringCarousel(true)}
          onMouseLeave={() => setIsHoveringCarousel(false)}
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

            <div
              ref={trackRef}
              className="
                flex  snap-x snap-mandatory gap-3 sm:gap-4
                overflow-x-auto scroll-smooth pb-3
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              "
            >
              {members.map((m) => (
                <TeamCard
                  key={m.id}
                  member={m}
                  isDesktop={isDesktop}
                  open={openId === m.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === m.id ? null : m.id))
                  }
                  onClose={() => setOpenId(null)}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Desktop: hover (+) • Mobile: tap (+) open, tap (×) close
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  isDesktop,
  open,
  onToggle,
  onClose,
}: {
  member: TeamMember;
  isDesktop: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const hasSocial = member.socials?.length > 0;

  return (
    <motion.article
      data-team-card="true"
      layout
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="
        group relative snap-start
        rounded-[22px] border border-slate-200 bg-white
        shadow-[0_12px_40px_rgba(2,6,23,0.08)]
        hover:shadow-[0_18px_60px_rgba(2,6,23,0.12)]
        overflow-hidden
        min-w-[260px] max-w-[260px]
        sm:min-w-[280px] sm:max-w-[280px]
        md:min-w-[320px] md:max-w-[320px]
        lg:min-w-[300px] lg:max-w-[300px]
      "
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      {/* image wrapper */}
      <div className="relative">
        <div
          className="
            w-full bg-slate-100
            aspect-[4/5]
            sm:aspect-[4/4]
            lg:aspect-[4/3]
          "
        >
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* overlay (visual only) */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/35 via-black/10 to-transparent
            opacity-0 transition
            group-hover:opacity-100
          "
        />

        {/* ✅ Desktop: CSS hover show (NO state) */}
        {hasSocial ? (
          <div
            className="
              pointer-events-none absolute right-3 bottom-[66px] sm:right-4 sm:bottom-[72px]
              z-10
              flex flex-col items-center gap-2
              rounded-full bg-white/90 backdrop-blur
              ring-1 ring-black/10
              px-2 py-2
              shadow-[0_20px_50px_rgba(2,6,23,0.18)]
              opacity-0 translate-y-2 scale-[0.98]
              transition duration-200
              group-hover:pointer-events-auto
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
              lg:flex
              hidden
            "
          >
            {member.socials.slice(0, 5).map((s, idx) => (
              <a
                key={`${s.type}-${idx}`}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="
                  pointer-events-auto
                  inline-flex h-10 w-10 items-center justify-center rounded-full
                  bg-slate-900 text-white
                  hover:bg-slate-800 active:scale-[0.98]
                  transition
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                "
                aria-label={`${member.name} ${s.type}`}
                title={s.type}
              >
                <SocialIcon type={s.type} />
              </a>
            ))}
          </div>
        ) : null}

        {/* ✅ Mobile: Framer motion toggle show */}
        <AnimatePresence>
          {!isDesktop && hasSocial && open ? (
            <motion.div
              key="mobile-social"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              className="
                pointer-events-auto absolute right-3 bottom-[66px] sm:right-4 sm:bottom-[72px]
                z-10
                flex flex-col items-center gap-2
                rounded-full bg-white/90 backdrop-blur
                ring-1 ring-black/10
                px-2 py-2
                shadow-[0_20px_50px_rgba(2,6,23,0.18)]
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
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  className="
                    inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-slate-900 text-white
                    hover:bg-slate-800
                    active:scale-[0.98]
                    transition
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
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

        {/* toggle button (all screens) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="
            absolute bottom-3 right-3 sm:bottom-4 sm:right-4
            z-20
            grid h-12 w-12 place-items-center
            rounded-full bg-amber-400 text-slate-900
            shadow-[0_12px_30px_rgba(245,158,11,0.35)]
            ring-1 ring-black/5
            transition hover:scale-[1.03] active:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-blue-500/40
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
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <Plus className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* text */}
      <div className="px-5 py-4">
        <p className="text-[16px] font-semibold text-slate-900">
          {member.name}
        </p>
        <p className="mt-1 text-sm text-slate-600">{member.role}</p>
      </div>
    </motion.article>
  );
}

