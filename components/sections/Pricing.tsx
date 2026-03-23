"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, scaleFade, viewportOnce, buttonPress } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/mo",
    description: "For local businesses just getting started online and needing a proven foundation.",
    features: [
      "Custom 5-Page Website",
      "Basic Local SEO Setup",
      "Google Business Profile",
      "Monthly Reporting",
      "Email Support"
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/mo",
    description: "Our most popular package. Aggressive lead gen for established businesses ready to scale.",
    features: [
      "Optimized Website",
      "Ads Management",
      "Advanced Local SEO",
      "Content Strategy",
      "Bi-Weekly Calls",
      "24/7 Priority Support"
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$3,497",
    period: "/mo",
    description: "The ultimate dominance package. For businesses ready to take over their market.",
    features: [
      "Custom Web App/Portal",
      "Multi-Channel Ads",
      "National & Local SEO",
      "Full Brand Overhaul",
      "Dedicated Manager",
      "Custom CRM"
    ],
    highlight: false,
  }
];



export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="pricing" className="section-padding relative bg-surface-1 overflow-hidden">
      <div className="section-container relative z-10">
        
        {!hideHeader && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12 md:mb-20"
          >
            <SectionEyebrow label="Pricing" center />
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4 md:mb-6">
              Transparent Investments
            </h2>
            <p className="text-text-secondary text-base md:text-lg font-medium max-w-2xl mx-auto">
              No hidden fees. We build precise packages that guarantee a positive return on your investment.
            </p>
          </motion.div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={scaleFade}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.1}
              viewport={viewportOnce}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                plan.highlight 
                  ? "bg-surface-dark border-brand/20 shadow-[0_20px_60px_-15px_rgba(255,106,0,0.2)] md:scale-105 z-10" 
                  : "bg-surface-0 border-black/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              }`}
            >
              {/* Subtle glow for highlight */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand/10 blur-[60px] pointer-events-none rounded-full" />
              )}
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                
                {plan.highlight && (
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand mb-4 block">
                    Most Popular
                  </span>
                )}
                
                <h3 className={`text-2xl font-black mb-1 ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-text-inverse" : "text-text-primary"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm font-semibold ${plan.highlight ? "text-text-inverse/40" : "text-text-tertiary"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm font-medium mb-6 pb-6 border-b ${
                  plan.highlight ? "text-text-inverse/50 border-white/10" : "text-text-secondary border-black/5"
                }`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`rounded-full p-0.5 shrink-0 ${
                        plan.highlight ? "bg-brand text-white" : "bg-surface-1 text-text-primary"
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-semibold ${plan.highlight ? "text-text-inverse/80" : "text-text-secondary"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="/contact"
                  {...buttonPress}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 mt-auto ${
                    plan.highlight 
                      ? "bg-brand text-text-inverse shadow-[0_8px_25px_-5px_rgba(255,106,0,0.4)]" 
                      : "bg-surface-dark text-text-inverse shadow-[0_8px_25px_-5px_rgba(0,0,0,0.2)]"
                  }`}
                >
                  Book a Call
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
