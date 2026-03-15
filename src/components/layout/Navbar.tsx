"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const centerLinks: NavItem[] = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "About us", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  
];

const dropdownLinks: NavItem[] = [
  { label: "Construction", href: "/services#construction" },
  { label: "Interior Design", href: "/services#interior" },
  { label: "Consultancy", href: "/services#consultancy" },
];

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

function scrollToId(id: string) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  // sticky header offset (approx)
  const headerOffset = 92;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [openMobile, setOpenMobile] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // for reliable hash scroll after route change
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const dropRef = useRef<HTMLDivElement | null>(null);
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // outside click close
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

  // esc close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDrop(false);
        setOpenMobile(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // route change -> close menus
  useEffect(() => {
    setOpenMobile(false);
    setOpenDrop(false);
  }, [pathname]);

  // after navigation, perform pending hash scroll
  useEffect(() => {
    if (!pendingHash) return;
    if (pathname !== "/") return;

    const t = setTimeout(() => {
      scrollToId(pendingHash);
      setPendingHash(null);
    }, 120);

    return () => clearTimeout(t);
  }, [pendingHash, pathname]);

  // ✅ smooth navigation for hash links
  const goTo = (href: string) => {
    setOpenMobile(false);
    setOpenDrop(false);

    // normal page route
    if (!href.includes("#")) {
      router.push(href);
      return;
    }

    const [pathPart, hashPart] = href.split("#");
    const targetPath = pathPart?.length ? pathPart : "/";
    const targetHash = hashPart || "";

    // if already on home, just scroll
    if (targetPath === "/" && pathname === "/") {
      scrollToId(targetHash);
      return;
    }

    // go to page then scroll
    setPendingHash(targetHash);
    router.push(targetPath);
  };

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 pt-2">
        <motion.div
          className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur"
          animate={{
            boxShadow: scrolled
              ? "0 18px 45px rgba(2,6,23,0.12)"
              : "0 0px 0px rgba(2,6,23,0)",
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.72)",
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* ROW */}
          <div className="flex h-[74px] items-center justify-between gap-3 px-4">
            {/* LOGO (bigger + stable) */}
            <button
              type="button"
              onClick={() => goTo("/#hero")}
              className="flex items-center"
              aria-label="Go to Home"
            >
              <img
                src="/logo/logo.png"
                alt="A.S.N Builders & Consultant Ltd."
                className="  w-[370] object-contain"
               
              />
            </button>

            {/* CENTER DESKTOP */}
            <nav className="hidden lg:flex items-center gap-1">
              {centerLinks.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => goTo(l.href)}
                  className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0D1927] hover:bg-slate-50 transition"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* RIGHT DESKTOP */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Dropdown */}
              <div className="relative" ref={dropRef}>
                <button
                  type="button"
                  onClick={() => setOpenDrop((v) => !v)}
                  className="whitespace-nowrap inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:text-[#0D1927] hover:bg-slate-50 transition"
                  aria-expanded={openDrop}
                  aria-haspopup="menu"
                >
                  Other services
                  <ChevronDown
                    className={`h-4 w-4 transition ${openDrop ? "rotate-180" : ""}`}
                  />
                </button>

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
                        <button
                          key={d.href}
                          type="button"
                          onClick={() => goTo(d.href)}
                          className="block w-full text-left rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                          role="menuitem"
                        >
                          {d.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => goTo("/contact")}
                className="whitespace-nowrap rounded-2xl bg-[#0D1927] text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-black/10 transition hover:brightness-110"
              >
                Contact us
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/90"
              aria-label={openMobile ? "Close menu" : "Open menu"}
              aria-expanded={openMobile}
              onClick={() => setOpenMobile((v) => !v)}
            >
              {openMobile ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
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
                    {centerLinks.map((l) => (
                      <button
                        key={l.href}
                        type="button"
                        onClick={() => goTo(l.href)}
                        className="text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-500">
                      Other services
                    </div>
                    <div className="mt-2 grid gap-1">
                      {dropdownLinks.map((d) => (
                        <button
                          key={d.href}
                          type="button"
                          onClick={() => goTo(d.href)}
                          className="text-left rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white"
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => goTo("/projects")}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      View Projects
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo("/contact")}
                      className="w-full rounded-xl bg-[#0D1927] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-black/10"
                    >
                      Contact us
                    </button>
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
