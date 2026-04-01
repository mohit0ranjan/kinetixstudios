"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleCheck } from "lucide-react";
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
      className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_34px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.38)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-black/10 bg-white/92 px-3 py-2 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-500">
            {template.slug}.preview
          </span>
        </div>

        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <div className="absolute left-4 right-4 top-14 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {template.badge ? (
              <span className="rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-800 backdrop-blur">
                {template.badge}
              </span>
            ) : null}
          </div>
          {template.rating ? (
            <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold text-amber-200">
              {template.rating}★ rated
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {template.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
              {tag}
            </span>
          ))}
          <span className="ml-auto text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
            {template.category}
          </span>
        </div>

        <h3 className="text-[1.5rem] font-black leading-[1.1] tracking-tight text-slate-900">{template.name}</h3>

        {!compact ? (
          <p className="text-sm font-medium leading-relaxed text-slate-600 line-clamp-2">{template.summary}</p>
        ) : null}

        <ul className={`space-y-2 ${compact ? "text-xs" : "text-sm"}`}>
          {template.highlights.slice(0, 3).map((item) => (
            <li key={item.label} className="flex items-start gap-2.5 text-slate-600">
              <CircleCheck className={`mt-0.5 h-4 w-4 shrink-0 ${item.tone === "success" ? "text-emerald-600" : "text-slate-400"}`} />
              <span>
                <span className="font-bold text-slate-800">{item.label}:</span> {item.text}
              </span>
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
