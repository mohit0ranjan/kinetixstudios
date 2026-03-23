"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business, local market, competitors, and growth bottlenecks.",
    icon: <Search size={24} />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Map out a custom blueprint: websites, ads, and SEO tactics designed exclusively for ROI.",
    icon: <Map size={24} />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    number: "03",
    title: "Execute",
    description: "We deploy the campaigns, launch the web assets, and set the systems live.",
    icon: <Zap size={24} />,
    color: "text-[#FF6A00]",
    bg: "bg-[#FF6A00]/10",
  },
  {
    number: "04",
    title: "Scale",
    description: "Continuous optimization, A/B testing, and scaling ad spend to dominate your city.",
    icon: <TrendingUp size={24} />,
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-32 relative bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-left mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#F4F5F7] px-3 py-1.5 rounded-full border border-black/5 mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
            <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-medium max-w-xl">
            A vertical framework designed to turn struggling local businesses into undeniable market leaders.
          </p>
        </div>

        {/* Modern Vertical Timeline Structure (No Cards) */}
        <div className="relative pl-8 md:pl-16">
          
          {/* The Vertical Track Line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-[23px] w-[2px] bg-slate-100 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-[15px] md:left-[23px] w-[2px] h-full bg-gradient-to-b from-[#FF6A00] to-orange-300 rounded-full origin-top transform-gpu" 
          />

          <div className="flex flex-col gap-12 md:gap-20 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-12 group"
              >
                {/* Timeline Intersection Dot */}
                <div className="absolute -left-[45px] md:-left-[60px] top-1.5 md:top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-[3px] md:border-[4px] border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.3)] flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-500">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF6A00] rounded-full" />
                </div>

                <div className="flex flex-col md:w-1/3">
                  <span className="text-[#FF6A00] font-black text-5xl md:text-7xl opacity-[0.15] mb-2 leading-none tracking-tighter">{step.number}</span>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${step.bg} ${step.color} flex items-center justify-center flex-shrink-0 group-hover:rotate-[10deg] transition-transform`}>
                      <div className="scale-75">{step.icon}</div>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pt-[76px]">
                  <p className="text-slate-500 text-[14px] md:text-[17px] leading-relaxed font-medium">
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
