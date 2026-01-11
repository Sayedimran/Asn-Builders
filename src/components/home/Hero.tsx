"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroImageCarousel from "../ui/HeroImageCarousel";
import HeroStatsAnimated from "./HeroStatsAnimated";

export default function Hero() {
  return (
    <section className=" w-full mt-10">
      {/* full-width background */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* centered container */}
        <div className="relative grid items-center  gap-12 lg:grid-cols-2">
          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl md:mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-sm ">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Welcome to ASN Builders
            </span>

            <h1
              className="
                mt-6 font-heading font-bold text-[#0D1927]
                text-[clamp(2rem,4vw,3.2rem)]
                leading-tight
               
              "
            >
              Build Your <br />
              <span className="text-[#0A4767]">Dream Property</span>
            </h1>

            <p className="mt-4 max-w-md text-[clamp(0.95rem,1.2vw,1.05rem)] text-slate-600 ">
              Premium real estate & construction solutions in Bangladesh.
              Explore ongoing projects, modern designs, and reliable delivery.
            </p>

            {/* STATS */}
            
            <HeroStatsAnimated />

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#0D1927] px-7 py-3 text-sm font-semibold text-white shadow-lg">
                Get a Quote
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700">
                View Projects
              </button>
            </div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full  "
          >
            <HeroImageCarousel />

            {/* floating badge */}
            <div className="absolute -bottom-7 left-3 rounded-xl bg-white/70 px-2 py-2 text-xs shadow-md">
              <div className="font-semibold text-[#0D1927]">
                Project Delivery
              </div>
              <div className="text-slate-500">Fast • Safe • Reliable</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
