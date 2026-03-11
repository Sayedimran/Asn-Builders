// src/data/services.ts

export type ServiceTheme = "blue" | "green" | "amber" | "gold";

export type Service = {
  id: string;
  title: string;
  slug: string;
  desc: string;
  image: string;
  tag: string;
  theme: ServiceTheme;
};

export const services: Service[] = [
  {
    id: "svc-building-design",
    title: "Building Design",
    slug: "building-design",
    desc: "Modern building design with proper planning, ventilation, and safety.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Design",
    theme: "blue",
  },
  {
    id: "svc-soil-test",
    title: "Soil Test",
    slug: "soil-test",
    desc: "Soil investigation & report for strong foundation and safe structure.",
    image:
      "https://i.postimg.cc/SRnMm1pX/Chat-GPT-Image-Mar-11-2026-09-13-19-AM.png ",
    tag: "Safety",
    theme: "green",
  },
  {
    id: "svc-digital-survey",
    title: "Digital Survey",
    slug: "digital-survey",
    desc: "Accurate land measurement, boundary marking and digital mapping.",
    image:
      "https://i.postimg.cc/nzzkQktR/Chat-GPT-Image-Mar-11-2026-09-26-18-AM.png",
    tag: "Accuracy",
    theme: "amber",
  },
  {
    id: "svc-architectural-plan",
    title: "Architectural Plan",
    slug: "architectural-plan",
    desc: "Professional floor plan, elevation and modern layout planning.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Planning",
    theme: "blue",
  },
  {
    id: "svc-structural-design",
    title: "Structural Design",
    slug: "structural-design",
    desc: "RCC structural design ensuring strength, durability and compliance.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "RCC",
    theme: "gold",
  },
  {
    id: "svc-estimation",
    title: "Estimation",
    slug: "estimation",
    desc: "Detailed cost estimation & BOQ for budget planning and execution.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Budget",
    theme: "amber",
  },
  {
    id: "svc-3d-view",
    title: "3D View",
    slug: "3d-view",
    desc: "Realistic 3D exterior & interior visualization before construction.",
    image:
      "https://i.postimg.cc/c1jSCkNc/Chat-GPT-Image-Mar-11-2026-09-41-39-AM.png",
    tag: "Visual",
    theme: "blue",
  },
  {
    id: "svc-interior-design",
    title: "Interior Design",
    slug: "interior-design",
    desc: "Premium interior design & fit-out with modern finishing and style.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Premium",
    theme: "gold",
  },
  {
    id: "svc-master-plan",
    title: "Master Plan",
    slug: "master-plan",
    desc: "Master planning for site layout, zoning and full project overview.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Layout",
    theme: "green",
  },
  {
    id: "svc-site-supervision",
    title: "Site Supervision",
    slug: "site-supervision",
    desc: "On-site supervision for quality control, safety and timeline tracking.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "QC",
    theme: "blue",
  },
  {
    id: "svc-construction",
    title: "Construction",
    slug: "construction",
    desc: "Complete construction service with skilled team and project management.",
    image:
      "https://i.postimg.cc/HLxmjqjS/Chat-GPT-Image-Mar-11-2026-09-45-32-AM.png",
    tag: "Build",
    theme: "green",
  },
  {
    id: "svc-plan-pass",
    title: "Plan Pass",
    slug: "plan-pass",
    desc: "RAJUK / authority approval support for smooth plan passing process.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&h=800&q=70",
    tag: "Approval",
    theme: "amber",
  },
];