"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { TemplateItem } from "@/lib/templateMarketplace";

type TemplateCardProps = {
  template: TemplateItem;
  compact?: boolean;
};

export default function TemplateCard({ template, compact = false }: TemplateCardProps) {
  const router = useRouter();

  return (
    <motion.article
      onClick={() => router.push(`/templates/${template.slug}`)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_30px_-24px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-1.5 border-b border-black/10 bg-white/95 px-3 py-2 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-500">
            {template.slug}.template
          </span>
        </div>
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        <div className="absolute left-4 right-4 top-14 z-20 flex items-center justify-between">
          {template.badge ? (
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-800 backdrop-blur">
              {template.badge}
            </span>
          ) : <span />}
          {template.rating ? (
            <span className="rounded-full bg-slate-900/75 px-2.5 py-1 text-[11px] font-bold text-amber-200 backdrop-blur">
              {template.rating}★
            </span>
          ) : null}
        </div>

        <div className="absolute inset-x-4 bottom-4 z-20 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm">
            Preview on hover
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {template.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-[11px] font-bold uppercase tracking-wider text-slate-400">{template.category}</span>
        </div>

        <h3 className="text-xl font-black leading-tight tracking-tight text-slate-900">{template.name}</h3>
        {!compact ? <p className="text-sm font-medium leading-relaxed text-slate-600 line-clamp-2">{template.summary}</p> : null}

        <ul className={`space-y-2.5 ${compact ? "text-xs" : "text-sm"}`}>
          {template.highlights.slice(0, 3).map((item) => (
            <li key={item.label} className="flex items-start gap-2.5 text-slate-600">
              <span className="mt-0.5 min-w-[58px] rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {item.label}
              </span>
              <span className={`${item.tone === "success" ? "text-emerald-700 font-semibold" : ""}`}>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <Link
            href={`/templates/${template.slug}`}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            View Template
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/templates/${template.slug}?intent=use`}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Use This Template
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
