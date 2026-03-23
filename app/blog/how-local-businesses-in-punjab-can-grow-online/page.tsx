import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How Local Businesses in Punjab Can Grow Online",
  description:
    "A practical guide to grow your business online in Punjab using local SEO, social media, and conversion-focused campaigns.",
  path: "/blog/how-local-businesses-in-punjab-can-grow-online",
  keywords: [
    "how to grow my business online in Punjab",
    "grow local business online India",
  ],
});

export default function PunjabGrowthPostPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <article className="container mx-auto px-4 sm:px-6 max-w-4xl pt-12 pb-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">How Local Businesses in Punjab Can Grow Online</h1>
        <p className="text-slate-600 text-base md:text-lg mb-8">
          The fastest path to growth is combining local SEO, trust-building content, and lead-focused landing pages.
        </p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">1. Start with Local Search Intent</h2>
        <p className="text-slate-700 mb-5">Target keyword clusters by city and service, then map each cluster to one dedicated page.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">2. Make Google Business Profile a Lead Channel</h2>
        <p className="text-slate-700 mb-5">Optimize your profile, reviews, and photos to improve map rankings and call volume.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">3. Build Conversion-Ready Landing Pages</h2>
        <p className="text-slate-700 mb-8">Use one clear offer, proof, and CTA such as “Get Free Audit” on every service page.</p>
        <Link href="/contact" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Get Free Audit</Link>
      </article>
    </main>
  );
}
