"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, buttonPress, ease } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/mo",
    tagline: "Launch your digital presence",
    description:
      "For local businesses just getting started online and needing a proven foundation.",
    features: [
      "Custom 5-Page Website",
      "Basic Local SEO Setup",
      "Google Business Profile",
      "Monthly Reporting",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/mo",
    tagline: "Aggressive lead generation",
    description:
      "Our most popular package. Aggressive lead gen for established businesses ready to scale.",
    features: [
      "Optimized Website",
      "Ads Management",
      "Advanced Local SEO",
      "Content Strategy",
      "Bi-Weekly Calls",
      "24/7 Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$3,497",
    period: "/mo",
    tagline: "Total market domination",
    description:
      "The ultimate dominance package. For businesses ready to take over their market.",
    features: [
      "Custom Web App/Portal",
      "Multi-Channel Ads",
      "National & Local SEO",
      "Full Brand Overhaul",
      "Dedicated Manager",
      "Custom CRM",
    ],
    highlight: false,
  },
];

export default function Pricing({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 relative bg-surface-1 overflow-hidden"
    >
      <div className="section-container relative z-10">
        {!hideHeader && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12 md:mb-16"
          >
            <SectionEyebrow label="Pricing" center />
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4 mt-4">
              Transparent{" "}
              <span className="text-brand font-display italic">
                Investments.
              </span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl mx-auto">
              No hidden fees. Precise packages that guarantee a positive return
              on your investment.
            </p>
          </motion.div>
        )}

        {/* ── Pricing rows (compact, not bento) ── */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: ease.out,
              }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                plan.highlight
                  ? "bg-surface-dark border-brand/20 shadow-[0_8px_30px_-10px_rgba(255,106,0,0.15)]"
                  : "bg-surface-0 border-black/5 hover:shadow-[0_8px_25px_-10px_rgba(0,0,0,0.06)] hover:border-black/8"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand text-white text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-bl-xl">
                    <Sparkles size={10} className="inline -mt-0.5 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-5 md:p-6 lg:p-7">
                {/* Top row: Plan info + Price + CTA — all inline on desktop */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                  {/* Plan name & tagline */}
                  <div className="lg:w-[200px] shrink-0">
                    <h3
                      className={`text-xl font-bold tracking-tight mb-1 ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-[13px] font-medium ${plan.highlight ? "text-text-inverse/50" : "text-text-tertiary"}`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 lg:w-[160px] shrink-0">
                    <span
                      className={`text-3xl font-black tracking-tight ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-semibold ${plan.highlight ? "text-text-inverse/40" : "text-text-tertiary"}`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features — compact inline badges */}
                  <div className="flex-1 flex flex-wrap gap-2">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg ${
                          plan.highlight
                            ? "bg-white/8 text-text-inverse/70"
                            : "bg-surface-1 text-text-secondary"
                        }`}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          className={
                            plan.highlight ? "text-brand" : "text-text-primary"
                          }
                        />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="/contact"
                    {...buttonPress}
                    className={`shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px] transition-all duration-300 whitespace-nowrap ${
                      plan.highlight
                        ? "bg-brand text-text-inverse shadow-[0_6px_20px_-4px_rgba(255,106,0,0.35)]"
                        : "bg-surface-dark text-text-inverse shadow-[0_6px_20px_-4px_rgba(0,0,0,0.15)]"
                    }`}
                  >
                    Book a Call
                    <ArrowRight size={14} />
                  </motion.a>
                </div>

                {/* Description — subtle bottom text */}
                <p
                  className={`mt-4 pt-4 border-t text-[13px] font-medium leading-relaxed ${
                    plan.highlight
                      ? "border-white/8 text-text-inverse/35"
                      : "border-black/5 text-text-tertiary"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
