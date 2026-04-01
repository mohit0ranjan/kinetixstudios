"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type StatItem = {
  number: number;
  suffix: string;
  label: string;
  description: string;
};

const stats: StatItem[] = [
  {
    number: 50,
    suffix: "+",
    label: "Local Clients Served",
    description: "Built in Punjab, for Punjab. We understand the cultural and purchasing nuances of your local consumer market deeply.",
  },
  {
    number: 3,
    suffix: "x",
    label: "Average Revenue Growth",
    description: "We optimize exclusively for qualified leads, phone calls, and people walking through your doors — not vanity metrics.",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Crystal-clear dashboards, strategy calls, and relentless testing keep our clients scaling with us year after year.",
  },
];

function useCountUp(target: number, inView: boolean, durationMs = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || target === 0) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      // ease-out expo
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, durationMs]);
  return value;
}

function StatRow({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const count = useCountUp(stat.number, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className={`group flex flex-col md:flex-row md:items-center py-10 lg:py-14 border-b border-black/5 relative ${
        index === 0 ? "pt-0" : ""
      } ${index === stats.length - 1 ? "border-b-0 pb-0" : ""}`}
    >
      {/* Massive Number */}
      <div className="md:w-[45%] shrink-0">
        <div className="flex items-baseline overflow-hidden">
          <span className="text-[5.5rem] lg:text-[8rem] font-sans font-black tracking-tighter leading-none text-text-primary group-hover:text-brand transition-colors duration-500">
            {count}
          </span>
          <span className="text-[3rem] lg:text-[4.5rem] font-bold text-brand leading-none ml-1">
            {stat.suffix}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="md:w-[55%] flex flex-col mt-4 md:mt-0 lg:pl-8">
        <h4 className="text-[20px] lg:text-[24px] font-bold text-text-primary tracking-tight mb-2 md:mb-3">
          {stat.label}
        </h4>
        <p className="text-[15px] lg:text-[17px] text-text-secondary font-medium leading-relaxed max-w-md transition-colors duration-500 group-hover:text-text-primary">
          {stat.description}
        </p>
      </div>

      {/* Subtle Absolute Decorative Line appearing on hover */}
      <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand group-hover:w-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}

// Very Subtle Background Growth Graph
const BackgroundGraph = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
    <svg viewBox="0 0 1000 500" className="w-full h-full object-cover min-w-[1200px]" preserveAspectRatio="none">
      <path 
        d="M0,450 C200,420 300,350 500,280 C700,210 800,100 1000,50" 
        fill="none" 
        stroke="#1C1F2B" 
        strokeWidth="2" 
      />
      <path 
        d="M0,450 C200,420 300,350 500,280 C700,210 800,100 1000,50 L1000,500 L0,500 Z" 
        fill="url(#subtleGradient)" 
      />
      <defs>
        <linearGradient id="subtleGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1F2B" stopOpacity="1" />
          <stop offset="100%" stopColor="#1C1F2B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-40 relative bg-gradient-to-b from-surface-1 to-surface-0 overflow-hidden">
      <BackgroundGraph />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Narrative / Storytelling */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <SectionEyebrow label="Why Us" />
              
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary tracking-tight leading-[1.05] mb-6 mt-4">
                A Partner You Can<br />
                <span className="font-display italic font-medium text-brand">Actually</span> Trust.
              </h2>
              
              <p className="text-text-secondary text-[17px] md:text-[19px] font-medium leading-relaxed mb-8">
                We focus entirely on measurable growth, not vanity metrics, so every campaign has a clear business outcome.
              </p>

              <div className="bg-white/60 border border-gray-200/60 p-6 lg:p-8 rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
                <h4 className="text-xl font-bold text-text-primary mb-2">We don&apos;t guess.</h4>
                <p className="text-text-secondary font-medium leading-relaxed">
                  Every decision we make is backed by hard data. We measure, test, and aggressively scale what works to drive qualified leads straight to your business.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Feature + Proof Split (No Cards) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col"
            >
              {stats.map((stat, index) => (
                <StatRow key={index} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
