import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Instagram Marketing for Local Shops",
  description:
    "Use Instagram marketing to attract nearby customers, improve trust, and drive repeat purchases for local shops in India.",
  path: "/blog/instagram-marketing-for-local-shops",
  keywords: [
    "Instagram marketing for local shops",
    "social media marketing agency Chandigarh",
  ],
});

export default function InstagramLocalShopsPostPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <article className="container mx-auto px-4 sm:px-6 max-w-4xl pt-12 pb-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">Instagram Marketing for Local Shops</h1>
        <p className="text-slate-600 text-base md:text-lg mb-8">A strong Instagram strategy can convert passive followers into real footfall and repeat customers.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Publish Local-Proof Content</h2>
        <p className="text-slate-700 mb-5">Post before-after visuals, testimonials, and neighborhood-specific offers.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Combine Reels with Location-Based Ads</h2>
        <p className="text-slate-700 mb-5">Run ads in a tight radius and retarget video viewers with offer-based creatives.</p>
        <h2 className="text-2xl font-black text-[#0A0A0A] mb-3">Always Add a CTA</h2>
        <p className="text-slate-700 mb-8">Use “Call now”, “WhatsApp now”, and “Get free audit” to move users from discovery to action.</p>
        <Link href="/contact" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Get Free Audit</Link>
      </article>
    </main>
  );
}
