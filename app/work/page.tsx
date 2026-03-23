import type { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies for Local Business Marketing",
  description:
    "Explore real growth stories from businesses using Kinetix Studios for SEO, paid ads, and social media in Punjab and India.",
  path: "/work",
  keywords: ["best agency for local business marketing in India", "performance marketing agency Punjab"],
});

export default function WorkPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
        <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tight text-center mb-6">
          Our Best Work.
        </h1>
        <p className="text-xl text-gray-500 text-center max-w-2xl mx-auto font-medium mb-12">
          Case studies and verifiable results from businesses just like yours.
        </p>
      </div>
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
