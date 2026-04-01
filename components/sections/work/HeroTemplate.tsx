"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { TemplateItem } from "@/lib/templateMarketplace";

type HeroTemplateProps = {
  featured: TemplateItem;
};

export default function HeroTemplate({ featured }: HeroTemplateProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 md:pt-32 pb-14 md:pb-18">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-100/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-700">
            Featured Template
          </span>

          <h1 className="mt-4 text-[clamp(2.1rem,5.8vw,4.3rem)] font-black leading-[1.02] tracking-tight text-slate-900">
            Launch a
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"> template-driven growth system </span>
            for local businesses.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-600">
            Built from top-performing layouts. Reuse proven funnels, launch faster, and start getting leads today.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href={`/templates/${featured.slug}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm sm:text-base font-bold text-white transition-colors hover:bg-slate-800"
            >
              View Featured Template
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Use This Template
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative mx-auto mt-10 max-w-3xl"
        >
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_16px_36px_-24px_rgba(15,23,42,0.32)]">
            <div className="relative flex items-center gap-2 border-b border-black/10 bg-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-1 text-[10px] font-semibold text-slate-500">
                featured-template.preview
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full bg-slate-200">
              <Image
                src={featured.image}
                alt={`${featured.name} live preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-md">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Top Performing</p>
            <p className="text-base font-black text-slate-900">{featured.name}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
