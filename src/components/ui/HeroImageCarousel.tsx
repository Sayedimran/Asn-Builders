"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
];

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative mx-auto w-full max-w-[520px]  bg-amber-50/50 shadow-[0_30px_90px_rgba(2,6,23,0.15)] px-2 py-3 rounded-3xl">
      {/* IMAGE */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl  ">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="ASN Builders project"
            className="absolute inset-0 h-full w-full    object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* DOTS – right side */}
      <div className="absolute  top-1/2 -right-3.5 -translate-y-1/2 flex flex-col gap-3 md:-right-7 lg:-right-7 ">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 rounded-full transition-all duration-300  ${
              index === i
                ? "h-8 bg-[#0A4767]"
                : "h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
