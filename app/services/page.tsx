import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesTier from "@/components/sections/services/ServicesTier";
import ServicesShowcase from "@/components/sections/services/ServicesShowcase";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Services | Kinetix Studios",
  description:
    "High-converting websites, SEO, paid ads, and social media marketing designed to transform local businesses into market leaders.",
  path: "/services",
  keywords: [
    "digital marketing agency",
    "web design services",
    "SEO services",
    "social media marketing",
    "paid advertising",
  ],
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesTier />
      <ServicesShowcase />
      <CTA />
    </main>
  );
}
