"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease, duration } from "@/lib/motion";

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Local Clients Served",
    description: "Every single campaign is backed by precise local market analytics. We don't guess — we measure, test, and optimize relentlessly.",
  },
  {
    number: 3,
    suffix: "×",
    label: "Average Revenue Growth",
    description: "We optimize exclusively for qualified leads, phone calls, and people walking through your doors — not vanity metrics.",
  },
  {
    number: 100,
    suffix: "%",
    label: "Transparent Reporting",
    description: "Crystal-clear dashboards and strategy calls. You will always know exactly where your money goes and what it produces.",
  },
  {
    number: 0,
    suffix: "",
    displayText: "Local",
    label: "Market Expertise",
    description: "Built in Punjab, for Punjab. We understand the cultural and purchasing nuances of your local consumer market deeply.",
  },
];

/** Animate a number from 0 to target */
function useCountUp(target: number, inView: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(eased * target);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, durationMs]);
  return value;
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-surface-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Header — single fadeUp */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-24"
        >
          <SectionEyebrow label="Why Us" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-inverse tracking-tight leading-[1.1] mb-6">
            A Partner You Can<br className="hidden md:inline" /> Actually Trust.
          </h2>
          <p className="text-text-inverse/50 text-base md:text-lg font-medium max-w-xl mx-auto">
            We act as your dedicated growth partner, focusing entirely on measurable revenue.
          </p>
        </motion.div>

        {/* Stats Grid — each block has its own viewport trigger for counter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <StatBlock key={index} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatBlock({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.number, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.08}
      viewport={viewportOnce}
      className="bg-surface-dark p-8 md:p-12 lg:p-16 group hover:bg-surface-dark-alt transition-colors duration-500"
    >
      <div className="mb-6 md:mb-8">
        <span className="text-[clamp(3rem,6vw,5rem)] font-black text-brand leading-none tracking-tight block">
          {stat.displayText ?? `${count}${stat.suffix}`}
        </span>
        <span className="text-[11px] font-bold text-text-inverse/40 uppercase tracking-widest mt-2 block">
          {stat.label}
        </span>
      </div>
      <p className="text-text-inverse/50 text-[15px] md:text-base leading-relaxed font-medium max-w-sm group-hover:text-text-inverse/70 transition-colors duration-500">
        {stat.description}
      </p>
    </motion.div>
  );
}
