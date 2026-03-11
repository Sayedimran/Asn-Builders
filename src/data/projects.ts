export type Project = {
  id: string;
  title: string;
  location: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string;
  slug: string;
  tag?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "ASN Heights — Modern Apartments",
    location: "Mirpur, Dhaka",
    status: "Ongoing",
    image: "https://i.postimg.cc/G2y234d7/view-modern-construction-site.jpg",
    slug: "/projects/asn-heights",
    tag: "Hot",
  },
  {
    id: "p2",
    title: "Green Park Residency",
    location: "Uttara, Dhaka",
    status: "Completed",
    image: "https://i.postimg.cc/Jh9rFRZJ/large-office-buildings.jpg",
    slug: "/projects/green-park",
    tag: "Top Rated",
  },
  {
    id: "p3",
    title: "ASN Commercial Hub",
    location: "Mohakhali, Dhaka",
    status: "Upcoming",
    image: "https://i.postimg.cc/7LLJ4P5m/modern-country-houses-construction.jpg",
    slug: "/projects/asn-commercial",
  },
];