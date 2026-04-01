import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { allTemplates, templateCategories } from "@/lib/templateMarketplace";
import TemplateCard from "@/components/ui/TemplateCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Work Templates",
  description:
    "Reusable website templates designed for fast deployment and high conversion.",
  path: "/work/templates",
  keywords: ["website templates", "high conversion templates", "local business templates"],
});

export default function WorkTemplatesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-30 pb-16 md:pb-24">
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-100/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-700">
            Templates
          </span>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.8rem)] font-black tracking-tight text-slate-900 leading-[1.05]">
            Website Template Marketplace
          </h1>
          <p className="mt-4 text-sm md:text-lg font-medium text-slate-600 leading-relaxed">
            Launch professional websites faster with conversion-ready templates built for local business growth.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
          <div className="flex flex-wrap gap-2">
            {templateCategories.map((cat) => (
              <span key={cat.key} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                {cat.title}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {allTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} compact />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm md:text-base font-bold text-white hover:bg-slate-800">
            Use a Custom Template
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
