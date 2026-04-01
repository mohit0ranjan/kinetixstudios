"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TemplateCard from "@/components/ui/TemplateCard";
import type { TemplateItem } from "@/lib/templateMarketplace";

type TemplateSectionProps = {
  title: string;
  subtitle: string;
  templates: TemplateItem[];
  categoryKey: string;
  alternatingBackground?: boolean;
};

export default function TemplateSection({
  title,
  subtitle,
  templates,
  categoryKey,
  alternatingBackground = false,
}: TemplateSectionProps) {
  return (
    <section
      className={`py-14 md:py-20 ${alternatingBackground ? "bg-slate-50" : "bg-white"}`}
      id={`category-${categoryKey}`}
    >
      <div className="section-container">
        <div className="mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {categoryKey.replace("-", " ")}
            </span>
            <h2 className="text-[clamp(1.7rem,4.2vw,3rem)] font-black tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 font-medium">{subtitle}</p>
          </motion.div>

          <Link
            href={`/templates?category=${categoryKey}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            View All Templates
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
