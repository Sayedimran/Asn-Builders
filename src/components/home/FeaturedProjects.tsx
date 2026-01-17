"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

type Project = {
  id: string;
  title: string;
  location: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string; // from /public
  slug: string;
  tag?: string; // e.g. "Hot"
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

function StatusPill({ status }: { status: Project["status"] }) {
  const cls =
    status === "Completed"
      ? "border-emerald-600/20 bg-emerald-500/12 text-emerald-700"
      : status === "Ongoing"
        ? "border-sky-600/20 bg-sky-500/12 text-sky-700"
        : "border-amber-700/20 bg-amber-500/14 text-amber-800";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1",
        "text-[11px] font-extrabold shadow-sm",
        "bg-white/70 backdrop-blur", // ✅ glass
        cls,
      ].join(" ")}
    >
      {status}
    </span>
  );
}

export default function FeaturedProjects() {
  const projects: Project[] = useMemo(
    () => [
      {
        id: "p1",
        title: "ASN Heights — Modern Apartments",
        location: "Mirpur, Dhaka",
        status: "Ongoing",
        image:
          "https://i.postimg.cc/G2y234d7/view-modern-construction-site.jpg",

        slug: "/projects/asn-heights",
        tag: "Hot",
      },
      {
        id: "p2",
        title: "Green Park Residency",
        location: "Uttara, Dhaka",
        status: "Completed",
        image: "https://i.postimg.cc/Jh9rFRZJ/large-office-buildings.jpg",
        slug: "/projects/green-park",
        tag: "Top Rated",
      },
      {
        id: "p3",
        title: "ASN Commercial Hub",
        location: "Mohakhali, Dhaka",
        status: "Upcoming",
        image:
          "https://i.postimg.cc/7LLJ4P5m/modern-country-houses-construction.jpg",
        slug: "/projects/asn-commercial",
      },
    ],
    [],
  );

  return (
    <section className="relative isolate overflow-x-hidden py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Featured Projects
            </span>

            <h2 className="mt-5 font-heading font-extrabold tracking-tight text-[#0D1927] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]">
              Explore Our <span className="text-[#0A4767]">Latest</span>{" "}
              Projects
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
              Handpicked projects with premium finishing, trusted workmanship,
              and modern design.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-2xl bg-[#0D1927] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeUp}
              transition={{ delay: idx * 0.06 }}
              className={[
                "group relative overflow-hidden rounded-[28px]",
                "border border-black/5 bg-white/70 backdrop-blur",
                "shadow-sm transition",
                "hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(2,6,23,0.12)]",
                // ✅ subtle outline glow
                "hover:ring-1 hover:ring-[#0A4767]/20",
              ].join(" ")}
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                  decoding="async"
                />

                {/* ✅ overlay কমানো হলো (image clear) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />

                {/* TOP BADGES (glass) */}
                <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                  <StatusPill status={p.status} />

                  {p.tag ? (
                    <span
                      className={[
                        "inline-flex items-center rounded-full",
                        "border border-white/30 bg-white/70 backdrop-blur",
                        "px-3 py-1 text-[11px] font-extrabold",
                        "text-[#0D1927] shadow-sm",
                      ].join(" ")}
                    >
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      {p.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                </div>

                {/* ✅ BOTTOM TITLE BAR (separate, premium) */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="rounded-2xl border border-white/20 bg-white/85 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur">
                    <div className="text-base font-extrabold text-[#0D1927] leading-snug">
                      {p.title}
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A4767]" />
                      {p.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="p-5">
                <Link
                  href={p.slug}
                  className={[
                    "inline-flex w-full items-center justify-center rounded-2xl",
                    "bg-[#0D1927] px-4 py-2.5 text-sm font-semibold text-white",
                    "shadow-lg shadow-black/10 transition",
                    "hover:brightness-110",
                  ].join(" ")}
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
