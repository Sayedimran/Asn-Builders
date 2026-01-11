"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.88 11.88 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.9 11.9 0 0 0 5.8 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.47-8.4Zm-8.5 18.36h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.96.98-3.59-.23-.37a9.94 9.94 0 0 1-1.52-5.27C2.17 6.46 6.5 2.13 12.03 2.13c2.63 0 5.1 1.03 6.96 2.9a9.77 9.77 0 0 1 2.88 6.95c0 5.53-4.33 9.86-9.85 9.86Zm5.4-7.38c-.3-.15-1.78-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.2.7.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.4 1.8 2.7 2.3 2.2 3 2.2H6.8c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.9.7 4.2.1.4 0 .9-.2 1.2l-1.9 2Z"
      />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1927]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#C8A951_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0A4767]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C8A951]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-10">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand / About */}
          <motion.div
            className="md:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white font-extrabold">
                ASN
              </span>
              <div>
                <div className="font-heading text-lg font-semibold text-white">
                  ASN Builders
                </div>
                <div className="text-sm text-white/60">
                  Real Estate & Construction in Bangladesh
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              We build premium residential & commercial projects with quality
              materials, transparent communication, and on-time delivery.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Trusted Developer</Badge>
              <Badge>On-time Delivery</Badge>
              <Badge>Quality Materials</Badge>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/8801708135425?text=${encodeURIComponent(
                  "Hello ASN Builders! I want to know about your projects and pricing."
                )}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                <span className="text-[#25D366]">
                  <IconWhatsApp />
                </span>
                WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.facebook.com/ASNbuildersBD"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                <span className="text-[#1877F2]">
                  <IconFacebook />
                </span>
                Facebook
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-3 text-sm underline">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-white/70 hover:text-[#C8A951] transition"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
          >
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-4 space-y-3 text-sm underline">
              {[
                { label: "Construction", href: "/services#construction" },
                { label: "Interior Design", href: "/services#interior" },
                { label: "Consultancy", href: "/services#consultancy" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-white/70 hover:text-[#C8A951] transition"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={3}
          >
            <div className="text-sm font-semibold text-white">Contact</div>

            <div className="mt-4 space-y-3 text-sm text-white/75">
              <a
                href="tel:+8801708135425"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="text-white/90">
                  <IconPhone />
                </span>
                <span className="font-semibold group-hover:text-white transition">
                  +880 1708-135425
                </span>
              </a>

              <a
                href="mailto:info@asnbuilders.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="text-white/90">
                  <IconMail />
                </span>
                <span className="font-semibold group-hover:text-white transition">
                  info@asnbuilders.com
                </span>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-white/55 text-xs">Office</div>
                <div className="font-semibold text-white/85">
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-5"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#C8A951] px-4 py-3 text-sm font-extrabold text-[#0D1927] shadow-lg shadow-black/20 hover:brightness-105 transition"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} ASN Builders. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
