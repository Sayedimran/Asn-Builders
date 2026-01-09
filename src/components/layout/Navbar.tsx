"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { label: string; href: string };

const centerLinks: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const dropdownLinks: NavItem[] = [
  { label: "Construction", href: "/services#construction" },
  { label: "Interior Design", href: "/services#interior" },
  { label: "Consultancy", href: "/services#consultancy" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

const dropVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.98 },
};

const mobileVariants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export default function Navbar() {
  const pathname = usePathname();

  const [openMobile, setOpenMobile] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropRef = useRef<HTMLDivElement | null>(null);
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);

  // Scroll effect (more visible)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Outside click close
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (dropRef.current && !dropRef.current.contains(target))
        setOpenDrop(false);
      if (mobileWrapRef.current && !mobileWrapRef.current.contains(target))
        setOpenMobile(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Route change -> close
  useEffect(() => {
    setOpenMobile(false);
    setOpenDrop(false);
  }, [pathname]);

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-3">
        <motion.div
          className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur"
          animate={{
            boxShadow: scrolled
              ? "0 18px 45px rgba(2,6,23,0.12)"
              : "0 0px 0px rgba(2,6,23,0)",
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.72)",
            y: scrolled ? 0 : 0,
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* ROW */}
          <div className="flex h-16 items-center justify-between gap-3 px-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0D1927] text-white text-xs font-extrabold">
                ASN
              </span>
              <span className="font-heading text-sm font-semibold text-[#0D1927]">
                ASN Builders
              </span>
            </Link>

            {/* CENTER DESKTOP */}
            <nav className="hidden lg:flex items-center gap-1">
              {centerLinks.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-slate-100 text-[#0D1927]"
                        : "text-black hover:text-[#5514a4] hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT DESKTOP */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Search */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -1 }}
                aria-label="Search"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
                onClick={() => console.log("Search clicked")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="#0D1927"
                    strokeWidth="2"
                  />
                  <path
                    d="M16.5 16.5 21 21"
                    stroke="#0D1927"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>

              {/* Dropdown */}
              <div className="relative" ref={dropRef}>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpenDrop((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#0D1927] hover:bg-slate-50 transition"
                  aria-expanded={openDrop}
                  aria-haspopup="menu"
                >
                  Other services
                  <motion.span
                    animate={{ rotate: openDrop ? 180 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-slate-500"
                  >
                    ▾
                  </motion.span>
                </motion.button>

                <AnimatePresence mode="wait">
                  {openDrop && (
                    <motion.div
                      key="dropdown"
                      variants={dropVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl"
                      role="menu"
                    >
                      {dropdownLinks.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          onClick={() => setOpenDrop(false)}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          role="menuitem"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="rounded-2xl bg-[#0D1927] text-white px-4 py-2 text-sm font-semibold   shadow-lg shadow-black/10 transition"
                >
                  Contact us
                </Link>
              </motion.div>
            </div>

            {/* MOBILE TOGGLE */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/90"
              aria-label="Open menu"
              aria-expanded={openMobile}
              onClick={() => setOpenMobile((v) => !v)}
            >
              <span className="text-lg">{openMobile ? "✕" : "☰"}</span>
            </motion.button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {openMobile && (
              <motion.div
                key="mobile"
                ref={mobileWrapRef}
                variants={mobileVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="lg:hidden overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur rounded-b-3xl"
              >
                <div className="px-4 pb-4 pt-3">
                  <div className="grid gap-2">
                    {centerLinks.map((l) => {
                      const active = isActive(pathname, l.href);
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpenMobile(false)}
                          className={[
                            "rounded-xl px-4 py-3 text-sm font-semibold transition",
                            active
                              ? "bg-slate-100 text-[#0D1927]"
                              : "text-slate-700 hover:bg-slate-50",
                          ].join(" ")}
                        >
                          {l.label}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-500">
                      Other services
                    </div>
                    <div className="mt-2 grid gap-1">
                      {dropdownLinks.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          onClick={() => setOpenMobile(false)}
                          className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <Link
                      href="/projects"
                      onClick={() => setOpenMobile(false)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      View Projects
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpenMobile(false)}
                      className="w-full rounded-xl bg-[#0D1927] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-black/10"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}
