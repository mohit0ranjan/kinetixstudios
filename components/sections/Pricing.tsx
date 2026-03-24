"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, MessageCircle, Phone } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
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
  const whatsappLink = "https://wa.me/9057680262";
  const phoneLink = "tel:+919057680262";

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 relative bg-surface-dark overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {!hideHeader && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16 md:mb-20"
          >
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold text-brand uppercase tracking-[0.2em]">
                <Zap size={14} /> SERVICE TIERS
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-text-inverse tracking-tight leading-[1.05] mb-6">
              Exclusive Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light font-display italic pr-2">
                Partnerships.
              </span>
            </h2>
            <p className="text-text-inverse/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just sell services. We build profitable acquisition systems engineered for your market.
            </p>
          </motion.div>
        )}

        {/* ── Clean Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: ease.out,
              }}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? "bg-white/[0.08] border-[1.5px] border-brand/40 shadow-[0_0_50px_-15px_rgba(255,106,0,0.25)] md:-translate-y-3"
                  : "bg-white/[0.03] border border-white/8 hover:bg-white/[0.05] hover:-translate-y-1"
              }`}
            >
              {plan.highlight && (
                <div className="bg-gradient-to-r from-brand to-brand-light py-2 text-center text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className={`p-7 lg:p-8 flex-1 flex flex-col ${plan.highlight ? "" : "pt-7 lg:pt-8"}`}>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-text-inverse mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-[13px] font-medium text-text-inverse/40">
                    {plan.tagline}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-brand/8 border border-brand/20 rounded-xl px-4 py-3.5 mb-6">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-brand block mb-0.5">Outcome</span>
                  <p className="text-sm font-bold text-text-inverse leading-snug">{plan.outcome}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-brand" : "text-text-inverse/30"
                        }`}
                      />
                      <span className="text-[13px] font-medium text-text-inverse/70 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* ── Dual CTA: WhatsApp + Call ── */}
                <div className="mt-auto flex flex-col gap-2.5">
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    {...buttonPress}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-[14px] transition-all ${
                      plan.highlight
                        ? "bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]"
                        : "bg-[#25D366]/90 text-white hover:bg-[#25D366]"
                    }`}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </motion.a>

                  <motion.a
                    href={phoneLink}
                    {...buttonPress}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-[14px] transition-all ${
                      plan.highlight
                        ? "bg-brand text-white shadow-[0_6px_20px_rgba(255,106,0,0.25)] hover:shadow-[0_8px_28px_rgba(255,106,0,0.35)]"
                        : "bg-white/5 text-text-inverse/80 border border-white/10 hover:bg-white/10"
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

        {/* ── Bottom Trust Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-3xl mx-auto mt-14 md:mt-20 text-center"
        >
          <p className="text-lg md:text-xl font-bold text-text-inverse/80 leading-relaxed mb-6">
            Every business is different — we create custom strategies based on your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full border border-red-500/20">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider">
                Limited onboarding slots
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-inverse/50 text-[13px] font-bold uppercase tracking-wider">
              <ShieldCheck size={16} className="text-brand/80" />
              Results-focused approach
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
