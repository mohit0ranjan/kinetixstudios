"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Target,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const channelData = [
  { label: "Google Ads", value: "42%", width: "42%", color: "bg-orange-500" },
  { label: "Organic SEO", value: "31%", width: "31%", color: "bg-emerald-500" },
  { label: "Meta Ads", value: "18%", width: "18%", color: "bg-blue-500" },
  { label: "Referral", value: "9%", width: "9%", color: "bg-slate-500" },
];

const funnelData = [
  { stage: "Visits", value: "28,420" },
  { stage: "Qualified", value: "3,912" },
  { stage: "Booked", value: "1,146" },
  { stage: "Won", value: "382" },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-24 md:pt-28 pb-14 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black 50%, transparent 100%)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -right-20 w-72 h-72 md:w-96 md:h-96 bg-orange-200 rounded-full blur-[90px] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-[90px] opacity-15 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[calc(100vh-170px)]"
        >
          <motion.div variants={item} className="flex flex-col justify-center space-y-6 lg:space-y-7 text-center lg:text-left">
            <motion.div variants={item} className="inline-flex items-center gap-2 w-fit mx-auto lg:mx-0">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-orange-500"
                />
                Growth Operating System for Local Businesses
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h1 className="text-[clamp(2.4rem,5.4vw,4.9rem)] font-black tracking-[-0.03em] text-slate-900 leading-[1.03]">
                Build a predictable
                <br />
                <span className="text-orange-600 font-display italic">customer pipeline</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base md:text-xl text-slate-600 font-medium max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              We architect SEO, ads, and conversion pages as one integrated growth system so your business gets qualified leads every week, not random spikes.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3.5 pt-2 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-slate-900 text-white px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-[0_14px_34px_-18px_rgba(15,23,42,0.5)] hover:shadow-[0_20px_44px_-20px_rgba(15,23,42,0.55)] hover:bg-slate-800 transition-all duration-200"
                >
                  Book Strategy Call
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/work/templates"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-900 bg-white px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg hover:bg-slate-50 transition-all duration-200"
                >
                  See Case Studies
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="pt-6 md:pt-8 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-col">
                  <div className="flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-3xl md:text-4xl font-black text-slate-900">85%</span>
                    <span className="text-sm font-semibold text-green-600">↑ Avg</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium mt-1">Sales Growth</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl font-black text-slate-900">3k+</div>
                  <p className="text-sm text-slate-600 font-medium mt-1">Clients Served</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl font-black text-slate-900">12+</div>
                  <p className="text-sm text-slate-600 font-medium mt-1">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="hidden lg:flex items-center justify-center relative h-full min-h-[500px]">
            <div className="relative w-full max-w-[560px]">
              <div className="absolute -top-10 -right-8 w-56 h-56 rounded-full bg-orange-200/60 blur-[90px]" />
              <div className="absolute -bottom-8 -left-10 w-52 h-52 rounded-full bg-blue-200/50 blur-[90px]" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_90px_-45px_rgba(15,23,42,0.45)] overflow-hidden">
                <div className="h-13 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between px-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Live Reporting</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5">
                      <p className="text-[11px] font-semibold text-slate-500">Pipeline Value</p>
                      <p className="text-xl font-black text-slate-900 mt-1">$142K</p>
                    </div>
                    <div className="rounded-xl bg-orange-50 border border-orange-200 p-3.5">
                      <p className="text-[11px] font-semibold text-orange-600">ROAS</p>
                      <p className="text-xl font-black text-orange-700 mt-1">4.7x</p>
                    </div>
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5">
                      <p className="text-[11px] font-semibold text-emerald-600">Close Rate</p>
                      <p className="text-xl font-black text-emerald-700 mt-1">9.8%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-8 rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-bold text-slate-800">Revenue Growth Trend</p>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                          <TrendingUp className="w-3.5 h-3.5" />
                          +22.4%
                        </span>
                      </div>
                      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
                        <defs>
                          <linearGradient id="heroTrendFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.32" />
                            <stop offset="100%" stopColor="#FB923C" stopOpacity="0.02" />
                          </linearGradient>
                        </defs>
                        <path d="M0,108 L35,88 L70,84 L108,92 L142,70 L175,74 L214,54 L252,58 L286,45 L320,32 L320,120 L0,120 Z" fill="url(#heroTrendFill)" />
                        <polyline
                          points="0,108 35,88 70,84 108,92 142,70 175,74 214,54 252,58 286,45 320,32"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="4"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <circle cx="320" cy="32" r="5" fill="#F97316" />
                      </svg>
                    </div>

                    <div className="col-span-4 rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-2.5">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Source Mix</p>
                      {channelData.map((channel) => (
                        <div key={channel.label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-semibold text-slate-600">{channel.label}</span>
                            <span className="text-[11px] font-black text-slate-800">{channel.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                            <div className={`h-full rounded-full ${channel.color}`} style={{ width: channel.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-bold text-slate-800">Lead Funnel Snapshot</p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <BarChart3 className="w-3.5 h-3.5" />
                        Week 14
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2.5">
                      {funnelData.map((step, idx) => (
                        <div key={step.stage} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-center relative">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{step.stage}</p>
                          <p className="text-sm font-black text-slate-900 mt-1">{step.value}</p>
                          {idx < funnelData.length - 1 && (
                            <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-16 rounded-xl border border-slate-200 bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.4)] px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Appointments</p>
                    <p className="text-sm font-black text-slate-900">+63% MoM</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-14 rounded-xl border border-slate-200 bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.4)] px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Top Keyword</p>
                    <p className="text-sm font-black text-slate-900">seo jalandhar</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-16 -bottom-8 rounded-xl border border-slate-200 bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.4)] px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">CAC</p>
                    <p className="text-sm font-black text-slate-900">-28.3%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
