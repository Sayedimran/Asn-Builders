

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
   name: "Shamsunnahar",
    role: "Chairman",
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
    name: "Saiful Islam",
    role: "Managing Director",
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
    name: "Subrata Halder",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  
];
