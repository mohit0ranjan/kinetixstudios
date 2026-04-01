"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Gauge, LineChart } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#f7f6f3] pt-24 pb-14 sm:pt-28 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600"
        >
          <Link href="/" className="transition-colors hover:text-gray-900">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Services</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-700"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Built As A Revenue System
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6, ease: "easeOut" }}
              className="max-w-[15ch] text-[clamp(2rem,6vw,4.5rem)] font-black leading-[1.03] tracking-tight text-[#101828]"
            >
              Digital Services That Turn Attention Into Revenue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="mt-5 max-w-[56ch] text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#475467]"
            >
              You do not need random marketing tasks. You need one cohesive system across website, ads, SEO, and content, designed to convert every click into qualified leads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#101828] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(16,24,40,0.55)] transition-transform hover:scale-[1.01] sm:px-7 sm:text-base"
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#101828] px-6 py-3.5 text-sm font-bold text-[#101828] transition-colors hover:bg-white sm:px-7 sm:text-base"
              >
                Explore Packages
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.55 }}
              className="mt-8 grid grid-cols-3 gap-2 border-t border-black/10 pt-6 sm:mt-10 sm:gap-5"
            >
              {[
                { label: "Avg Growth", value: "85%+" },
                { label: "Retention", value: "92%" },
                { label: "Response", value: "24h" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="mb-1 text-xl font-black text-[#101828] sm:text-3xl">{stat.value}</div>
                  <div className="text-[11px] font-semibold leading-snug text-[#667085] sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[26px] border border-[#101828]/10 bg-[#101828] text-white shadow-[0_24px_60px_-30px_rgba(16,24,40,0.75)]">
              <div className="border-b border-white/10 p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Service Stack</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-black leading-tight">Custom Growth Engine</h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-white/75">
                  Pick one service or combine all four channels under one team.
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
              {[
                {
                  icon: Gauge,
                  label: "Web + CRO",
                  desc: "Fast pages and strong conversion flow",
                },
                {
                  icon: LineChart,
                  label: "Paid Ads",
                  desc: "Predictable pipeline from Meta and Google",
                },
                {
                  icon: ShieldCheck,
                  label: "Local SEO",
                  desc: "Compete for map pack and local intent",
                },
                {
                  icon: Sparkles,
                  label: "Content",
                  desc: "Brand narrative that compounds trust",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24 + i * 0.07, duration: 0.4 }}
                  className="border-r border-t border-white/10 p-4 sm:p-5 odd:border-r-white/10 even:border-r-0 [&:nth-child(-n+2)]:border-t-0"
                >
                  <item.icon className="mb-2 h-5 w-5 text-orange-300" />
                  <h4 className="text-sm sm:text-base font-black text-white">{item.label}</h4>
                  <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-white/70">{item.desc}</p>
                </motion.div>
              ))}
              </div>

              <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300">Contract Terms</p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-white">Month-to-month. No lock-in.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#101828]"
                >
                  Start
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
