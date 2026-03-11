// src/data/partners.ts

export type SocialType = "facebook" | "linkedin" | "twitter" | "github" | "website";

export type PartnerSocial = {
  type: SocialType;
  url: string;
};

export type PartnerTeamMember = {
  id: string | number;
  name: string;
  role: string;
  image: string;
  socials: PartnerSocial[];
};

export const partners: PartnerTeamMember[] = [
  {
    id: 1,
    name: "Adrian Wells",
    role: "Project Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "facebook", url: "https://facebook.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  {
    id: 2,
    name: "Sophia Grant",
    role: "Senior Architect",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "twitter", url: "https://x.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  {
    id: 3,
    name: "Ethan Clarke",
    role: "Structural Engineer",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  // {
  //   id: 4,
  //   name: "Oliver Hayes",
  //   role: "Design Lead",
  //   image:
  //     "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&w=1200&q=80",
  //   socials: [
  //     { type: "linkedin", url: "https://linkedin.com" },
  //     { type: "facebook", url: "https://facebook.com" },
  //     { type: "twitter", url: "https://x.com" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Nusrat Jahan",
  //   role: "Head of Operations",
  //   image:
  //     "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=1200&q=80",
  //   socials: [
  //     { type: "linkedin", url: "https://linkedin.com" },
  //     { type: "website", url: "https://example.com" },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Tahmina Akter",
  //   role: "Senior Architect",
  //   image:
  //     "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  //   socials: [
  //     { type: "linkedin", url: "https://linkedin.com" },
  //     { type: "facebook", url: "https://facebook.com" },
  //     { type: "website", url: "https://example.com" },
  //   ],
  // },
];
