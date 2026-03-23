import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Affordable Digital Marketing India Pricing",
  description:
    "Choose transparent digital marketing plans for SEO, social media, and performance campaigns. Book a free audit with Kinetix Studios.",
  path: "/pricing",
  keywords: ["affordable digital marketing India", "digital marketing agency Punjab"],
});

export default function PricingPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <div className="container mx-auto px-6 max-w-7xl pt-8 md:pt-16 pb-0">
        <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tight text-center mb-6">
          Simple Pricing.<br className="md:hidden"/> Massive ROI.
        </h1>
        <p className="text-base md:text-xl text-gray-500 text-center max-w-2xl mx-auto font-medium mb-4">
          Our packages are built to scale. You only pay for what you absolutely need to reach your next growth milestone.
        </p>
      </div>
      <Pricing hideHeader />
      <CTA />
    </main>
  );
}
