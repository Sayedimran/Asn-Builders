"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/src/data/services";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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

function tagStyle(theme: string) {
  switch (theme) {
    case "gold":
      return "bg-[#C8A951]/18 text-[#7a5f15] border-[#C8A951]/25";
    case "green":
      return "bg-emerald-500/12 text-emerald-700 border-emerald-500/20";
    case "blue":
      return "bg-[#0A4767]/12 text-[#0A4767] border-[#0A4767]/20";
    default:
      return "bg-amber-500/12 text-amber-800 border-amber-500/20";
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-14 md:py-24 overflow-hidden">
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
              From planning & design to construction and approvals — complete
              end-to-end service.
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

        {/* ✅ ONE LINE AUTO SWIPE */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={900}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={18}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 4 }, // ✅ desktop এ এক লাইনে 4টা
            }}
          >
            {services.map((s) => (
              <SwiperSlide key={s.title}>
                <article className="group h-full overflow-hidden rounded-[28px] border border-black/5 bg-white/85 shadow-sm">
                  {/* image */}
                  <div className="relative h-[170px] w-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />

                    {/* top tag row */}
                    <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0D1927] shadow-sm">
                        {s.title}
                      </span>

                      <span
                        className={[
                          "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold",
                          tagStyle(s.theme),
                        ].join(" ")}
                      >
                        {s.tag}
                      </span>
                    </div>

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
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0A4767] hover:text-[#0D1927] transition"
                      >
                        Learn more <IconArrowRight />
                      </Link>

                      <span className="text-xs font-semibold text-slate-500">
                        ASN Builders
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
