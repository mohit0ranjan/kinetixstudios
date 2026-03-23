import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

const Services = dynamic(() => import("@/components/sections/Services"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

export const metadata: Metadata = buildPageMetadata({
  title: "Best Digital Marketing Agency in Jalandhar",
  description:
    "Grow your local business online with Kinetix Studios. We deliver SEO, paid ads, and social media marketing for Punjab and India-based businesses.",
  path: "/",
  keywords: [
    "best digital marketing agency in Jalandhar",
    "digital marketing agency Punjab",
    "grow local business online India",
  ],
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: ["Punjab", "India"],
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.siteUrl}#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      areaServed: [
        ...siteConfig.primaryLocations,
        ...siteConfig.secondaryLocations,
      ],
      priceRange: "$$",
    },
    {
      "@type": "Service",
      serviceType: "SEO Services",
      provider: {
        "@id": `${siteConfig.siteUrl}#organization`,
      },
      areaServed: ["Punjab", "India"],
    },
    {
      "@type": "Service",
      serviceType: "Social Media Marketing",
      provider: {
        "@id": `${siteConfig.siteUrl}#organization`,
      },
      areaServed: ["Punjab", "India"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How to grow my business online in Punjab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with local SEO, Google Business Profile optimization, and intent-driven ad campaigns focused on nearby customers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best agency for local business marketing in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose an agency with local market expertise, transparent reporting, and proven case studies in your city and industry.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
