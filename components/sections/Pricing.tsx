"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, MessageCircle, Phone, Sparkles } from "lucide-react";
import { fadeUp, viewportOnce, buttonPress, ease } from "@/lib/motion";

const plans = [
  {
    name: "Growth Foundation",
    tagline: "For local businesses ready to establish dominance",
    outcome: "Predictable local lead flow",
    features: [
      "Custom high-converting website",
      "Local SEO & Google Maps ranking",
      "Lead tracking & optimization",
      "Monthly growth consulting",
    ],
    highlight: false,
  },
  {
    name: "Market Takeover",
    tagline: "Aggressive multi-channel acquisition",
    outcome: "Consistent traffic & booked appointments",
    features: [
      "Meta & Google Ads campaigns",
      "Advanced SEO & content pipelines",
      "A/B tested landing pages",
      "CRM automation & lead nurturing",
      "Bi-weekly performance sprints",
    ],
    highlight: true,
  },
  {
    name: "The Dominator",
    tagline: "Total industry monopoly",
    outcome: "Become the only choice in your city",
    features: [
      "Bespoke web app / client portal",
      "Omnipresence ad retargeting",
      "National & Content-Led SEO",
      "Full brand identity overhaul",
      "Dedicated full-time manager",
    ],
    highlight: false,
  },
];

export default function Pricing({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  const whatsappLink = "https://wa.me/919057680262";
  const phoneLink = "tel:+919057680262";

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 relative bg-surface-0 overflow-hidden font-sans border-t border-black/5"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[24rem] bg-gradient-to-r from-brand/15 via-brand-light/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-1/80 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {!hideHeader && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-14 md:mb-20"
          >
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] shadow-sm">
                <Sparkles size={14} className="text-brand" /> Pricing Blueprint
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-text-primary tracking-tight leading-[1.05] mb-6">
              Pick Your Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light font-display italic pr-2">
                Flight Path.
              </span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Three execution modes. One outcome: predictable revenue growth backed by weekly execution.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: ease.out,
              }}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? "bg-surface-dark border border-brand/40 shadow-[0_25px_70px_-20px_rgba(255,106,0,0.35)] md:-translate-y-3"
                  : "bg-white border border-black/8 shadow-[0_14px_40px_-22px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] hover:-translate-y-1"
              }`}
            >
              <div className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl pointer-events-none ${plan.highlight ? "bg-brand/30" : "bg-brand/12"}`} />

              {plan.highlight && (
                <div className="bg-gradient-to-r from-brand to-brand-light py-2 text-center text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  Primary Route
                </div>
              )}

              <div className={`p-7 lg:p-8 flex-1 flex flex-col ${plan.highlight ? "" : "pt-7 lg:pt-8"}`}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.18em] font-bold mb-2 ${plan.highlight ? "text-text-inverse/50" : "text-text-tertiary"}`}>
                      Plan {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className={`text-xl font-bold mb-1.5 ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-[13px] font-medium ${plan.highlight ? "text-text-inverse/55" : "text-text-secondary"}`}>
                      {plan.tagline}
                    </p>
                  </div>
                  <div className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] ${plan.highlight ? "bg-brand/20 text-brand border border-brand/25" : "bg-surface-1 text-brand border border-brand/15"}`}>
                    Custom
                  </div>
                </div>

                <div className={`border rounded-xl px-4 py-3.5 mb-6 ${plan.highlight ? "bg-brand/10 border-brand/20" : "bg-surface-1 border-black/5"}`}>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-brand block mb-0.5">Expected Outcome</span>
                  <p className={`text-sm font-bold leading-snug ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}>{plan.outcome}</p>
                </div>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-brand" : "text-text-tertiary"
                        }`}
                      />
                      <span className={`text-[13px] font-medium leading-snug ${plan.highlight ? "text-text-inverse/85" : "text-text-secondary"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2.5">
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    {...buttonPress}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-[14px] transition-all min-h-11 ${
                      plan.highlight
                        ? "bg-[#25D366] text-white shadow-[0_7px_24px_rgba(37,211,102,0.32)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.4)]"
                        : "bg-[#25D366]/90 text-white hover:bg-[#25D366] shadow-sm hover:shadow"
                    }`}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </motion.a>

                  <motion.a
                    href={phoneLink}
                    {...buttonPress}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-[14px] transition-all min-h-11 ${
                      plan.highlight
                        ? "bg-brand text-white shadow-[0_6px_20px_rgba(255,106,0,0.25)] hover:shadow-[0_10px_30px_rgba(255,106,0,0.38)]"
                        : "bg-surface-1 text-text-secondary border border-black/5 hover:bg-black/5 hover:text-text-primary"
                    }`}
                  >
                    <Phone size={16} />
                    Call Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="max-w-4xl mx-auto mt-14 md:mt-20"
        >
          <div className="rounded-2xl border border-black/8 bg-white px-5 py-5 md:px-8 md:py-6 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.18)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <p className="text-sm md:text-base font-bold text-text-primary">
                  Not sure which route fits your business stage?
                </p>
                <p className="text-text-secondary text-sm md:text-base mt-1">
                  We&apos;ll map your traffic gaps, conversion leaks, and growth target in one strategy call.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-text-secondary text-[12px] font-bold uppercase tracking-wider">
                  <ShieldCheck size={15} className="text-brand" />
                  No lock-in contracts
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-black/10" />
                <div className="flex items-center gap-2 text-text-secondary text-[12px] font-bold uppercase tracking-wider">
                  <Zap size={15} className="text-brand" />
                  Weekly optimization
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
