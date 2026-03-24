import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Growth Solutions & Service Tiers",
  description:
    "Explore tailored growth solutions for SEO, social media, and performance marketing. Book a strategy call with Kinetix Studios.",
  path: "/pricing",
  keywords: ["digital marketing solutions India", "digital marketing agency Punjab"],
});

export default function PricingPage() {
  return (
    <main className="pt-24 min-h-screen bg-surface-1">
      <div className="section-container pt-8 md:pt-16 pb-0">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="w-8 h-[2px] bg-brand rounded-full" />
          <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Solutions</span>
        </div>
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-text-primary tracking-tight text-center mb-6 leading-[1.05]">
          Tailored Growth<br className="md:hidden"/> Solutions.
        </h1>
        <p className="text-base md:text-xl text-text-secondary text-center max-w-2xl mx-auto font-medium mb-4">
          Every business is different. We build custom growth systems engineered for your specific market and goals.
        </p>
      </div>
      <Pricing hideHeader />
      <CTA />
    </main>
  );
}
