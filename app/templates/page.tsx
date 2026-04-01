import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { allTemplates } from "@/lib/templateMarketplace";
import TemplateCard from "@/components/ui/TemplateCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Template Marketplace",
  description:
    "Browse conversion-focused local business templates for gyms, yoga studios, clinics, and beauty brands.",
  path: "/templates",
  keywords: [
    "template marketplace",
    "local business website templates",
    "high conversion templates",
  ],
});

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 md:pb-24">
      <section className="section-container">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight text-slate-900">
          All Templates
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base font-medium text-slate-600">
          Choose a proven template and launch your growth engine in minutes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {allTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
