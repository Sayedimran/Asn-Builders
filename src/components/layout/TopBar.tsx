"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.88 11.88 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.9 11.9 0 0 0 5.8 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.47-8.4Zm-8.5 18.36h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.96.98-3.59-.23-.37a9.94 9.94 0 0 1-1.52-5.27C2.17 6.46 6.5 2.13 12.03 2.13c2.63 0 5.1 1.03 6.96 2.9a9.77 9.77 0 0 1 2.88 6.95c0 5.53-4.33 9.86-9.85 9.86Zm5.4-7.38c-.3-.15-1.78-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />;
}

export default function TopBar() {
  const [hidden, setHidden] = useState(false);

  // scroll down -> hide, scroll up -> show (desktop)
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY && y > 90) setHidden(true);
      else setHidden(false);

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Desktop only (mobile চাইলে mini version করে দেবো)
    <motion.div
      className="hidden sm:block"
      initial={{ y: -10, opacity: 0 }}
      animate={hidden ? { y: -22, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="bg-[#0D1927] text-white/90">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-10 items-center justify-between gap-4 text-xs">
            {/* LEFT (fade-in) */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08, duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <Dot />
                <span className="font-semibold text-white">Call:</span>
                <Link
                  href="tel:+8801708135425"
                  className="!text-white/80 !visited:text-white font-semibold underline-offset-4 hover:underline hover:!text-[#C8A951] transition"
                >
                  +880 1708-135425
                </Link>
              </div>

              <span className="h-4 w-px bg-white/15" />

              <div className="flex items-center gap-2">
                <Dot />
                <span className="font-semibold text-white">Email:</span>
                <Link
                  href="mailto:info@asnbuilders.com"
                  className="!text-white/80 !visited:text-white font-semibold underline-offset-4 hover:underline hover:!text-[#C8A951] transition"
                >
                  info@asnbuilders.com
                </Link>
              </div>

              <span className="h-4 w-px bg-white/15" />

              <div className="flex items-center gap-2">
                <Dot />
                <span className="font-semibold text-white">Office:</span>
                <span className="text-white/85">Dhaka, Bangladesh</span>
              </div>
            </motion.div>

            {/* RIGHT (fade-in + hover lift) */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`https://wa.me/8801708135425?text=${encodeURIComponent(
                    "Hello ASN Builders! I want to know about your projects and pricing."
                  )}`}
                  target="_blank"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1 text-white hover:bg-white/18 hover:border-white/25 transition"
                >
                  <span className="text-[#25D366]">
                    <IconWhatsApp />
                  </span>
                  <span className="font-semibold text-white">WhatsApp</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="https://www.facebook.com/ASNbuildersBD"
                  target="_blank"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1 text-white hover:bg-white/18 hover:border-white/25 transition"
                >
                  <span className="text-[#1877F2]">
                    <IconFacebook />
                  </span>
                  <span className="font-semibold text-white">Facebook</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium accent line (animate on load) */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-[#0A4767] via-[#C8A951] to-transparent origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
      />
    </motion.div>
  );
}
