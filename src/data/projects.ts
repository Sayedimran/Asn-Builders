// src/data/projects.ts

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type Project = {
  id: string;
  title: string;
  location: string;
  status: ProjectStatus;
  image: string;
  slug: string; // ✅ only the slug part, not "/projects/..."
  tag?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "ASN Heights — Modern Apartments",
    location: "Mirpur, Dhaka",
    status: "Ongoing",
    image: "https://i.postimg.cc/G2y234d7/view-modern-construction-site.jpg",
    slug: "asn-heights",
    tag: "Hot",
  },
  {
    id: "p2",
    title: "Green Park Residency",
    location: "Uttara, Dhaka",
    status: "Completed",
    image: "https://i.postimg.cc/Jh9rFRZJ/large-office-buildings.jpg",
    slug: "green-park",
    tag: "Top Rated",
  },
  {
    id: "p3",
    title: "ASN Commercial Hub",
    location: "Mohakhali, Dhaka",
    status: "Upcoming",
    image: "https://i.postimg.cc/7LLJ4P5m/modern-country-houses-construction.jpg",
    slug: "asn-commercial",
  },
];