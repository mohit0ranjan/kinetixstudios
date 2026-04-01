import type { Metadata } from "next";
import Link from "next/link";
import HeroTemplate from "@/components/sections/work/HeroTemplate";
import CTASection from "@/components/sections/work/CTASection";
import BestTemplatesSection from "@/components/sections/work/BestTemplatesSection";
import TemplateSection from "@/components/sections/work/TemplateSection";
import { buildPageMetadata } from "@/lib/seo";
import { bestTemplates, templateCategories } from "@/lib/templateMarketplace";

export const metadata: Metadata = buildPageMetadata({
  title: "Template Marketplace for Local Business Marketing",
  description:
    "Explore high-converting marketing templates for gyms, clinics, beauty salons, and local businesses. Launch faster with reusable growth systems.",
  path: "/work",
  keywords: [
    "marketing templates for gyms",
    "yoga booking website templates",
    "beauty salon lead generation templates",
  ],
});

export default function WorkPage() {
  const featuredTemplate = bestTemplates[0] ?? templateCategories[0].templates[0];

  return (
    <main className="font-sans min-h-screen bg-white">
      <HeroTemplate featured={featuredTemplate} />

      <CTASection
        title="Launch this template in minutes"
        subtitle="Start getting leads today with pre-built, conversion-optimized template systems."
        primaryLabel="Browse All Templates"
        primaryHref="/templates"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />

      <BestTemplatesSection templates={bestTemplates} />

      {templateCategories.map((category, index) => (
        <TemplateSection
          key={category.key}
          title={category.title}
          subtitle={category.subtitle}
          templates={category.templates}
          categoryKey={category.key}
          alternatingBackground={index % 2 === 1}
        />
      ))}

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="section-container max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.38)]">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            SEO-optimized template library for local business growth
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-slate-600">
            Discover high-performing <strong>marketing templates for gyms</strong>, reusable <strong>yoga booking website templates</strong>, and proven <strong>beauty salon lead generation templates</strong>. Every template is built for fast launch, clean conversion paths, and measurable lead outcomes.
          </p>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-slate-600">
            Start with the <Link href="/templates/gym-lead-gen" className="font-bold text-slate-900 underline underline-offset-4">Gym Lead Generation Template</Link>, deploy the <Link href="/templates/yoga-booking" className="font-bold text-slate-900 underline underline-offset-4">Yoga Studio Booking Template</Link>, or scale appointments with the <Link href="/templates/beauty-salon-booking" className="font-bold text-slate-900 underline underline-offset-4">Beauty Salon Booking Template</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
