"use client";

import { useMemo, useState } from "react";
import TemplateCard from "@/components/ui/TemplateCard";
import type { TemplateItem } from "@/lib/templateMarketplace";

type BestTemplatesSectionProps = {
  templates: TemplateItem[];
};

const filters = ["All", "Fitness", "Yoga", "Beauty"];

export default function BestTemplatesSection({ templates }: BestTemplatesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTemplates = useMemo(() => {
    if (activeFilter === "All") return templates;
    return templates.filter(
      (template) =>
        template.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        template.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter, templates]);

  return (
    <section className="bg-white py-14 md:py-18">
      <div className="section-container">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 md:p-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(1.7rem,4.2vw,3rem)] font-black tracking-tight text-slate-900">
              Best Performing Templates
            </h2>
            <p className="mt-2 text-sm md:text-base font-medium text-slate-600">
              Proven systems you can reuse instantly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
