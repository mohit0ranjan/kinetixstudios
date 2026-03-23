import type { Metadata } from "next";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Blog for Punjab Businesses",
  description:
    "Read actionable SEO, ads, and social media guides built for startups, SMEs, and local businesses in Punjab and India.",
  path: "/blog",
  keywords: [
    "SEO tips for small businesses in India",
    "Instagram marketing for local shops",
    "how local businesses in Punjab can grow online",
  ],
});

export default function BlogPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8 text-center bg-white rounded-3xl p-16 shadow-sm border border-black/5 mt-8 mb-8">
        <span className="flex h-3 w-3 rounded-full bg-[#FF6A00] mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tight mb-6">
          The Kinetix Studios Journal.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Tactical advice, algorithm updates, and local marketing strategies you can actually implement today.
        </p>
      </div>
      <Blog />
      <CTA />
    </main>
  );
}
