import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/src/data/services";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  PhoneCall,
} from "lucide-react";

type Params = { slug: string };

// ✅ Next.js 16 compatible: params Promise হতে পারে
type PageProps = {
  params: Promise<Params>;
};

// ✅ SEO (dynamic) — Next.js 16 compatible (async + await params)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found - ASN Builders" };

  return {
    title: `${service.title} - ASN Builders`,
    description: service.desc,
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="relative isolate overflow-x-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A4767]/18 via-transparent to-[#C8A951]/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-90px] h-[340px] w-[480px] rounded-full bg-gradient-to-br from-[#C8A951]/18 via-transparent to-[#0A4767]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0D1927_1px,transparent_1px)] opacity-[0.035] [background-size:22px_22px]" />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 md:pt-14">
        {/* breadcrumb row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0D1927] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 text-[#0A4767]" />
            Back to Services
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#0D1927] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* hero */}
        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* left content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              Service Details
            </div>

            <h1 className="mt-4 font-heading text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.12]">
              {service.title}
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600 md:text-base">
              {service.desc}
            </p>

            {/* highlight bullets */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Feature
                icon={<BadgeCheck className="h-4 w-4" />}
                title="Professional Team"
                desc="Experienced engineers & supervision"
              />
              <Feature
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="Quality Standard"
                desc="Materials & compliance-focused delivery"
              />
              <Feature
                icon={<MapPin className="h-4 w-4" />}
                title="Dhaka & Nearby"
                desc="Site visit & support (Savar, Dhaka)"
              />
              <Feature
                icon={<PhoneCall className="h-4 w-4" />}
                title="Fast Response"
                desc="Usually within 2–6 hours"
              />
            </div>

            {/* CTA card */}
            <div className="mt-7 rounded-[28px] border border-black/5 bg-white/75 p-5 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur">
              <div className="text-sm font-extrabold text-[#0D1927]">
                Want an estimate for this service?
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600 leading-6">
                Share land size, location and floors—our team will guide you
                with an initial plan and budget range.
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1927] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
                >
                  Contact Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  View Projects{" "}
                  <ArrowRight className="h-4 w-4 text-[#0A4767]" />
                </Link>
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white/75 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/75 px-3 py-1 text-[11px] font-extrabold text-[#0D1927] shadow-sm backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                    {service.tag}
                  </span>

                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/75 px-3 py-1 text-[11px] font-extrabold text-slate-700 shadow-sm backdrop-blur">
                    ASN Builders
                  </span>
                </div>
              </div>

              {/* details panel */}
              <div className="p-5 sm:p-6">
                <div className="text-sm font-extrabold text-[#0D1927]">
                  What you will get
                </div>
                <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    Consultation & requirement analysis
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    Proper planning + safety considerations
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    Documentation guidance (if needed)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    Quality-focused delivery support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* related services */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-lg font-extrabold text-[#0D1927]">
                Related Services
              </div>
              <div className="text-sm font-semibold text-slate-600">
                Explore more services that match your project needs.
              </div>
            </div>

            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#0D1927] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              View All <ArrowRight className="h-4 w-4 text-[#0A4767]" />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug} // ✅ id না থাকলেও safe
                  href={`/services/${s.slug}`}
                  className="group rounded-[24px] border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]"
                >
                  <div className="text-sm font-extrabold text-[#0D1927]">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
                    {s.desc}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0A4767]">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0A4767]/10 text-[#0A4767]">
          {icon}
        </span>
        <div>
          <div className="text-sm font-extrabold text-[#0D1927]">{title}</div>
          <div className="mt-1 text-xs font-semibold text-slate-600 leading-5">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
