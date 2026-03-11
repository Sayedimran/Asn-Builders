"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Clock,
  ChevronRight,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "Construction",
    budget: "৳10L - ৳30L",
    message: "",
    consent: true,
  });

  const waLink = useMemo(() => {
    const text = `Hello ASN Builders! I want to discuss a project.\n\nName: ${
      form.name || "-"
    }\nPhone: ${form.phone || "-"}\nService: ${form.service}\nBudget: ${
      form.budget
    }\nMessage: ${form.message || "-"}`;
    return `https://wa.me/8801708135425?text=${encodeURIComponent(text)}`;
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.consent) return;

    try {
      setStatus("sending");

      // ✅ এখানে তোমার API route / server action connect করবে
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      await new Promise((r) => setTimeout(r, 700)); // demo
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2200);
      setForm((p) => ({ ...p, message: "" }));
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2200);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-14 md:py-24"
    >
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/20 via-transparent to-[#C8A951]/18 blur-3xl" />
        <div className="absolute -bottom-28 right-[-80px] h-[340px] w-[420px] rounded-full bg-gradient-to-br from-[#C8A951]/20 via-transparent to-[#0A4767]/16 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.04] [background-size:22px_22px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
            Contact ASN Builders
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 font-heading text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.12]"
          >
            Let’s build something{" "}
            <span className="text-[#0A4767]">remarkable</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base"
          >
            Share your project details and get a fast response. We handle
            residential & commercial construction, interior, and consultancy
            with quality-first delivery.
          </motion.p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="rounded-[28px] border border-black/5 bg-white/75 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur">
              {/* top strip */}
              <div className="flex flex-col gap-3 border-b border-black/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-extrabold text-[#0D1927]">
                      Request a consultation
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      We reply within business hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Your information stays private
                </div>
              </div>

              <form onSubmit={onSubmit} className="p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      value={form.name}
                      onChange={(e) => onChange("name", e.target.value)}
                      placeholder="Your name"
                      className={inputBase}
                      required
                    />
                  </Field>

                  <Field label="Email" required>
                    <input
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      placeholder="you@email.com"
                      type="email"
                      className={inputBase}
                      required
                    />
                  </Field>

                  <Field label="Phone" required>
                    <input
                      value={form.phone}
                      onChange={(e) => onChange("phone", e.target.value)}
                      placeholder="01XXXXXXXXX"
                      type="tel"
                      className={inputBase}
                      required
                    />
                  </Field>

                  <Field label="Subject">
                    <input
                      value={form.subject}
                      onChange={(e) => onChange("subject", e.target.value)}
                      placeholder="e.g. 5-storied building estimate"
                      className={inputBase}
                    />
                  </Field>

                  <Field label="Service" required>
                    <select
                      value={form.service}
                      onChange={(e) => onChange("service", e.target.value)}
                      className={selectBase}
                      required
                    >
                      <option>Construction</option>
                      <option>Interior Design</option>
                      <option>Consultancy</option>
                      <option>Renovation</option>
                      <option>Real Estate Support</option>
                    </select>
                  </Field>

                  <Field label="Budget Range">
                    <select
                      value={form.budget}
                      onChange={(e) => onChange("budget", e.target.value)}
                      className={selectBase}
                    >
                      <option>৳5L - ৳10L</option>
                      <option>৳10L - ৳30L</option>
                      <option>৳30L - ৳80L</option>
                      <option>৳80L - ৳2Cr</option>
                      <option>৳2Cr+</option>
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Message" required>
                      <textarea
                        value={form.message}
                        onChange={(e) => onChange("message", e.target.value)}
                        placeholder="Tell us about land size, location, floors, timeline, finishing preference..."
                        rows={5}
                        className={textareaBase}
                        required
                      />
                    </Field>
                  </div>
                </div>

                {/* consent */}
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => onChange("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#0A4767]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs font-semibold text-slate-600 leading-5"
                  >
                    I agree to be contacted by ASN Builders regarding my
                    inquiry. No spam—only project updates & response.
                  </label>
                </div>

                {/* actions */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {/* status */}
                  <div className="text-xs font-semibold">
                    {status === "sent" && (
                      <span className="text-emerald-600">
                        ✅ Message sent successfully!
                      </span>
                    )}
                    {status === "error" && (
                      <span className="text-rose-600">
                        ❌ Something went wrong. Try again.
                      </span>
                    )}
                    {status === "sending" && (
                      <span className="text-slate-600">Sending...</span>
                    )}
                    {status === "idle" && (
                      <span className="text-slate-500">
                        We usually reply within 2–6 hours.
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={waLink}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      WhatsApp
                      <ChevronRight className="h-4 w-4 text-[#0A4767]" />
                    </a>

                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ y: -2 }}
                      disabled={status === "sending" || !form.consent}
                      className={[
                        "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition",
                        status === "sending" || !form.consent
                          ? "bg-[#0D1927]/60 cursor-not-allowed"
                          : "bg-[#0D1927] hover:brightness-110",
                      ].join(" ")}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Info card */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-4">
              <div className="rounded-[28px] border border-black/5 bg-white/75 p-5 shadow-[0_22px_70px_rgba(2,6,23,0.10)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#C8A951]/20 text-[#7a5f15]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-extrabold text-[#0D1927]">
                      Office Location
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      Savar, Dhaka — Bangladesh
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <InfoRow
                    icon={<Phone className="h-4 w-4" />}
                    title="Phone"
                    value="+880 1708-135425"
                  />
                  <InfoRow
                    icon={<Mail className="h-4 w-4" />}
                    title="Email"
                    value="info@asnbuilders.com"
                  />
                  <InfoRow
                    icon={<Clock className="h-4 w-4" />}
                    title="Hours"
                    value="Sat–Thu: 10am – 8pm"
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-black/5 bg-white p-4">
                  <div className="text-xs font-extrabold text-[#0D1927]">
                    What to include for fastest estimate
                  </div>
                  <ul className="mt-2 space-y-2 text-xs font-semibold text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Land size + location (area)
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Floors (koto talay) + approx sqft
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                      Timeline + finishing preference
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small UI helpers ---------- */

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-extrabold text-[#0D1927]">
          {label} {required ? <span className="text-[#C8A951]">*</span> : null}
        </span>
      </div>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3">
      <span className="mt-0.5 text-[#0A4767]">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs font-extrabold text-[#0D1927]">{title}</div>
        <div className="mt-0.5 truncate text-xs font-semibold text-slate-600">
          {value}
        </div>
      </div>
    </div>
  );
}

const inputBase =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0D1927] placeholder:text-slate-400 shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10";

const selectBase =
  "w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0D1927] shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10";

const textareaBase =
  "w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0D1927] placeholder:text-slate-400 shadow-sm outline-none transition focus:border-[#0A4767]/40 focus:ring-4 focus:ring-[#0A4767]/10";
