import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Tips for Small Businesses in India",
  description:
    "Learn practical SEO tips for small businesses in India to improve rankings, increase local calls, and convert search traffic.",
  path: "/blog/seo-tips-for-small-businesses-in-india",
  keywords: [
    "SEO tips for small businesses in India",
    "best agency for local business marketing in India",
  ],
});

export default function SeoTipsIndiaPostPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <article className="container mx-auto px-4 sm:px-6 max-w-4xl pt-12 pb-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">SEO Tips for Small Businesses in India</h1>
        <p className="text-slate-600 text-base md:text-lg mb-8">These fundamentals help you rank faster without wasting budget on low-intent traffic.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Focus on High-Intent Pages</h2>
        <p className="text-slate-700 mb-5">Build separate pages for each service and city to match exact search intent.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Use FAQ Blocks for AI Search</h2>
        <p className="text-slate-700 mb-5">Answer common customer questions directly to improve featured snippet and AI answer visibility.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Track Conversions, Not Just Traffic</h2>
        <p className="text-slate-700 mb-8">Connect GA4 and Search Console to identify keywords that generate calls and leads.</p>
        <Link href="/contact" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Get Free Audit</Link>
      </article>
    </main>
  );
}
