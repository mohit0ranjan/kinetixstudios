import type { Metadata } from "next";

export const siteConfig = {
  name: "Kinetix Studios",
  siteUrl: "https://kinetixstudios.in",
  description:
    "Kinetix Studios is a performance-focused digital marketing agency helping local businesses, startups, and SMEs in Punjab and across India grow online.",
  locale: "en_IN",
  primaryLocations: ["Jalandhar", "Ludhiana", "Chandigarh"],
  secondaryLocations: ["Delhi", "Bihar", "Pan-India"],
  phone: "+91-98765-43210",
  email: "hello@kinetixstudios.in",
  addressRegion: "Punjab",
  addressCountry: "IN",
} as const;

export const defaultKeywords = [
  "best digital marketing agency in Jalandhar",
  "digital marketing agency Punjab",
  "SEO services in Ludhiana",
  "social media marketing agency Chandigarh",
  "grow local business online India",
  "affordable digital marketing India",
  "performance marketing agency Punjab",
  "digital marketing for small businesses in Ludhiana",
];

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoInput): Metadata {
  const canonical = `${siteConfig.siteUrl}${path}`;
  const mergedKeywords = [...defaultKeywords, ...keywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Digital Marketing Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
