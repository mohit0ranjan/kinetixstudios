import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Agency Punjab Services",
  description:
    "Explore SEO, social media marketing, and performance campaigns designed for local businesses in Punjab and across India.",
  path: "/services",
  keywords: [
    "performance marketing agency Punjab",
    "social media marketing agency Chandigarh",
    "SEO services in Ludhiana",
  ],
});

export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
        <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tight text-center mb-6">
          Everything You Need <br/> to Dominate.
        </h1>
        <p className="text-xl text-gray-500 text-center max-w-2xl mx-auto font-medium mb-12">
          We don&apos;t sell disparate services. We build comprehensive growth engines customized for your exact market and audience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <Link
            href="/services/seo-jalandhar"
            className="rounded-full bg-white border border-black/10 px-5 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6A00]"
          >
            SEO Services in Jalandhar
          </Link>
          <Link
            href="/services/social-media-punjab"
            className="rounded-full bg-white border border-black/10 px-5 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6A00]"
          >
            Social Media Marketing Punjab
          </Link>
        </div>
      </div>
      <Services />
      <CTA />
    </main>
  );
}
