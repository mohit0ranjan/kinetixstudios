import type { Metadata } from "next";
import WorkGrid from "@/components/sections/WorkGrid";
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
    <main className="pt-24 min-h-screen bg-surface-1">
      <section className="section-container pt-12 md:pt-16 pb-16 md:pb-24">
        {/* Page Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-brand rounded-full" />
            <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Portfolio</span>
          </div>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black text-text-primary tracking-tight mb-4 leading-[1.05]">
            Our Best Work.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl font-medium">
            Real results from real businesses. Every project is backed by data, strategy, and obsessive execution.
          </p>
        </div>

        {/* Grid with Filters */}
        <WorkGrid />
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
