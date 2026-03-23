"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ease, fadeUp, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business, local market, competitors, and growth bottlenecks.",
    icon: <Search size={22} />,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Map out a custom blueprint: websites, ads, and SEO tactics designed exclusively for ROI.",
    icon: <Map size={22} />,
  },
  {
    number: "03",
    title: "Execute",
    description: "We deploy the campaigns, launch the web assets, and set the systems live.",
    icon: <Zap size={22} />,
  },
  {
    number: "04",
    title: "Scale",
    description: "Continuous optimization, A/B testing, and scaling ad spend to dominate your city.",
    icon: <TrendingUp size={22} />,
  },
];



export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-padding relative bg-surface-0 overflow-hidden">
      <div className="section-container-narrow relative z-10">
        
        <div className="mb-16 md:mb-24">
          <SectionEyebrow label="Process" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight mb-4 leading-[1.1]">
            How We Work
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl">
            A framework designed to turn struggling local businesses into undeniable market leaders.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative pl-8 md:pl-16">
          
          {/* Track Line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-[23px] w-[2px] bg-black/5 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-[15px] md:left-[23px] w-[2px] h-full bg-gradient-to-b from-brand to-brand-light rounded-full origin-top" 
          />

          <div className="flex flex-col gap-12 md:gap-20 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: ease.out }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] md:-left-[60px] top-1.5 md:top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-0 border-[3px] md:border-[4px] border-brand shadow-[0_0_12px_rgba(255,106,0,0.2)] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-400">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand rounded-full" />
                </div>

                <div className="flex flex-col md:w-1/3">
                  <span className="text-brand font-black text-5xl md:text-7xl opacity-[0.12] mb-2 leading-none tracking-tighter">{step.number}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <div className="scale-75">{step.icon}</div>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-text-primary tracking-tight">{step.title}</h3>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pt-[76px]">
                  <p className="text-text-secondary text-[15px] md:text-[17px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
