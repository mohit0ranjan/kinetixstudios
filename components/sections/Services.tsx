"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Search, Target, PenTool, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { useState } from "react";
import { fadeUp, slideLeft, viewportOnce, ease, duration } from "@/lib/motion";

const services = [
  {
    number: "01",
    title: "High-Converting Websites",
    description: "Stop losing customers to terrible loading times and confusing navigation. We build wildly fast, premium digital storefronts engineered purely to generate revenue.",
    icon: <Monitor size={22} strokeWidth={1.5} />,
    tag: "Core Offering",
  },
  {
    number: "02",
    title: "Social Media Growth",
    description: "Build an aggressive omnipresence on Instagram and Facebook that locals simply cannot ignore. Content, strategy, and community — managed end-to-end.",
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    tag: "Awareness",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description: "Hyper-targeted Meta and Google campaigns that directly scale your lead volume predictably. Every rupee tracked, every conversion attributed.",
    icon: <Target size={22} strokeWidth={1.5} />,
    tag: "Acquisition",
  },
  {
    number: "04",
    title: "Local SEO Dominance",
    description: "Dominate the Google Map Pack so you are the undisputed #1 choice when they search. Technical SEO, content strategy, and citation building.",
    icon: <Search size={22} strokeWidth={1.5} />,
    tag: "Organic Growth",
  },
  {
    number: "05",
    title: "Brand Identity",
    description: "Premium logos, brand guidelines, and visual identities that scream undeniable trust. From business cards to billboards — one cohesive voice.",
    icon: <PenTool size={22} strokeWidth={1.5} />,
    tag: "Identity",
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="services" className="section-padding relative bg-surface-0 z-10 overflow-hidden">
      <div className="section-container">

        {/* Section header — single fadeUp on the container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-12 md:mb-20"
        >
          <SectionEyebrow label="Capabilities" />
          <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1]">
            Everything you need<br className="hidden md:inline" /> to dominate online.
          </h2>
        </motion.div>

        {/* Service list — each row slides in from left, staggered */}
        <div className="flex flex-col w-full">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.06}
                viewport={viewportOnce}
                className={`group border-t border-black/8 last:border-b cursor-pointer transition-colors duration-300 ${
                  isExpanded ? "bg-surface-1" : "hover:bg-surface-1/50"
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex items-center gap-4 md:gap-8 py-6 md:py-8 px-2 md:px-6">
                  <span className="text-text-tertiary font-black text-sm md:text-base tracking-wider w-8 shrink-0">
                    {service.number}
                  </span>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isExpanded ? "bg-brand text-text-inverse" : "bg-surface-1 text-text-secondary group-hover:bg-brand/10 group-hover:text-brand"
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight flex-grow text-text-primary">
                    {service.title}
                  </h3>
                  <span className="hidden lg:block text-[11px] font-bold text-text-tertiary uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isExpanded ? "rotate-90 bg-brand border-brand text-white" : "text-text-tertiary group-hover:border-brand group-hover:text-brand"
                  }`}>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Expandable — simple height + opacity */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 px-2 md:px-6 pl-[3.5rem] md:pl-[6.5rem]">
                    <p className="text-text-secondary text-[15px] md:text-lg leading-relaxed font-medium max-w-2xl">
                      {service.description}
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-brand font-bold text-[15px] hover:gap-3 transition-all duration-300"
                    >
                      Get Started <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
