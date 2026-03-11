import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found - ASN Builders" };

  return {
    title: `${project.title} - ASN Builders`,
    description: `Project in ${project.location}`,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const overview =
    (project as any).overview ??
    "A premium construction project delivered with quality materials, transparent process, and strong supervision.";

  const highlights: string[] = (project as any).highlights?.length
    ? (project as any).highlights
    : [
        "Modern design & planning",
        "Quality finishing & materials",
        "Safety + timely delivery",
      ];

  return (
    <main className="relative isolate overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 md:pt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0D1927] shadow-sm backdrop-blur"
          >
            <ArrowLeft className="h-4 w-4 text-[#0A4767]" />
            Back to Projects
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#0D1927] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-110"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              {project.status}
              {project.tag ? (
                <span className="ml-2 rounded-full bg-[#C8A951]/20 px-2 py-0.5 text-[11px] font-extrabold text-[#7a5f15]">
                  {project.tag}
                </span>
              ) : null}
            </span>

            <h1 className="mt-4 font-heading text-[clamp(2rem,3.4vw,3rem)] font-extrabold tracking-tight text-[#0D1927] leading-[1.12]">
              {project.title}
            </h1>

            <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
              <MapPin className="h-4 w-4 text-[#0A4767]" />
              {project.location}
            </div>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 md:text-base">
              {overview}
            </p>

            <div className="mt-6 rounded-[28px] border border-black/5 bg-white/75 p-5 shadow-[0_22px_70px_rgba(2,6,23,0.08)] backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#0D1927]">
                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                Key Highlights
              </div>

              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-600">
                {highlights.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white/75 shadow-[0_30px_90px_rgba(2,6,23,0.10)] backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
