"use client";

import { motion, useInView } from "framer-motion";
import { Search, Map, Zap, TrendingUp, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, local market, competitors, and growth bottlenecks.",
    icon: Search,
    color: "from-orange-500/10 to-orange-500/5",
    iconBg: "bg-orange-500/10 text-brand",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Custom blueprint: websites, ads, and SEO tactics designed exclusively for ROI.",
    icon: Map,
    color: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-600",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Deploy campaigns, launch web assets, and set the growth systems live.",
    icon: Zap,
    color: "from-emerald-500/10 to-emerald-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-600",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Continuous optimization, A/B testing, and scaling to dominate your market.",
    icon: TrendingUp,
    color: "from-purple-500/10 to-purple-500/5",
    iconBg: "bg-purple-500/10 text-purple-600",
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const IconComponent = step.icon;

  return (
    <div ref={ref} className="relative flex flex-col items-center flex-1">
      {/* Step Node */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15, ease: ease.out }}
        className="group relative w-full"
      >
        {/* Card */}
        <div
          className={`relative bg-gradient-to-br ${step.color} border border-black/5 rounded-2xl p-6 lg:p-7 overflow-hidden transition-all duration-500 lg:hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] lg:hover:-translate-y-1`}
        >
          {/* Step number watermark */}
          <span className="absolute top-3 right-4 text-[4rem] font-black text-black/[0.03] leading-none tracking-tighter select-none pointer-events-none">
            {step.number}
          </span>

          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-xl ${step.iconBg} flex items-center justify-center mb-5 transition-transform duration-500 lg:group-hover:scale-110`}
          >
            <IconComponent size={20} strokeWidth={2.2} />
          </div>

          {/* Content */}
          <h3 className="text-lg lg:text-xl font-bold text-text-primary tracking-tight mb-2">
            {step.title}
          </h3>
          <p className="text-text-secondary text-[14px] lg:text-[15px] font-medium leading-relaxed">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* ── Arrow connector (desktop only, not on last) ── */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.15 + 0.3,
            ease: ease.out,
          }}
          className="hidden lg:flex absolute top-1/2 -right-[22px] xl:-right-[26px] -translate-y-1/2 z-20 origin-left"
        >
          <div className="flex items-center">
            <div className="w-6 xl:w-8 h-[2px] bg-gradient-to-r from-text-tertiary/30 to-text-tertiary/50" />
            <ChevronRight
              size={14}
              className="text-text-tertiary/50 -ml-1.5"
              strokeWidth={2.5}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-20 md:py-32 relative bg-surface-0 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          <SectionEyebrow label="Our Process" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4 mt-4">
            From Discovery to{" "}
            <span className="text-brand font-display italic">Dominance.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl mx-auto">
            A proven 4-step framework that turns struggling local businesses
            into undeniable market leaders.
          </p>
        </motion.div>

        {/* ── Desktop: Horizontal Arrow Flow ── */}
        <div className="hidden md:grid grid-cols-4 gap-6 lg:gap-10 relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* ── Mobile: Vertical Connected Steps ── */}
        <div className="md:hidden relative pl-10">
          {/* Vertical track line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-black/5 rounded-full" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand via-blue-500 to-purple-500 rounded-full origin-top"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: ease.out,
                  }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-2 w-6 h-6 rounded-full bg-surface-0 border-[3px] border-brand shadow-[0_0_10px_rgba(255,106,0,0.15)] flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                  </div>

                  {/* Mobile card */}
                  <div
                    className={`bg-gradient-to-br ${step.color} border border-black/5 rounded-xl p-5`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-lg ${step.iconBg} flex items-center justify-center`}
                      >
                        <IconComponent size={18} strokeWidth={2.2} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-[0.15em] block">
                          Step {step.number}
                        </span>
                        <h3 className="text-base font-bold text-text-primary tracking-tight leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-secondary text-[14px] font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
