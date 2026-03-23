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
    <main className="pt-24 min-h-screen bg-surface-1">
      <div className="section-container pt-16 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-brand rounded-full" />
          <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Our Services</span>
        </div>
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-text-primary tracking-tight mb-6 leading-[1.05]">
          Everything You Need <br className="hidden md:inline"/>to Dominate.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-medium mb-12">
          We don&apos;t sell disparate services. We build comprehensive growth engines customized for your exact market.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Link
            href="/services/seo-jalandhar"
            className="rounded-xl bg-surface-0 border border-black/5 px-5 py-2.5 text-sm font-bold text-text-secondary hover:text-brand transition-colors"
          >
            SEO Services in Jalandhar
          </Link>
          <Link
            href="/services/social-media-punjab"
            className="rounded-xl bg-surface-0 border border-black/5 px-5 py-2.5 text-sm font-bold text-text-secondary hover:text-brand transition-colors"
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
