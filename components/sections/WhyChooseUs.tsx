"use client";

import { motion } from "framer-motion";
import { Target, BarChart, Shield, Users } from "lucide-react";

const pillars = [
  {
    icon: <BarChart size={32} />,
    title: "Data-Driven Decisions",
    tag: "Analytics Based",
    description: "Every single campaign is backed by precise local market analytics and rigorous A/B testing standards. We don't guess, we measure.",
  },
  {
    icon: <Target size={32} />,
    title: "Focus on Foot Traffic",
    tag: "Conversion First",
    description: "We optimize exclusively for highly-qualified leads, phone calls, and actual people walking straight through your physical doors.",
  },
  {
    icon: <Shield size={32} />,
    title: "Total Transparency",
    tag: "Live Reporting",
    description: "Gain access to crystal-clear reporting and transparent strategy communication. You will always know exactly where your ad budget goes.",
  },
  {
    icon: <Users size={32} />,
    title: "Local Market Expertise",
    tag: "Regional Insight",
    description: "Built in Punjab, for Punjab. We profoundly understand the specific cultural and purchasing nuances of your local consumer market.",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-20 font-sans mt-0 bg-white">
      
      {/* Intro Header */}
      <div className="pt-20 pb-10 px-6 text-center max-w-3xl mx-auto">
         <h2 className="text-[#FF6A00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF6A00] rounded-full" />
            Why Work With Us
            <span className="w-8 h-[2px] bg-[#FF6A00] rounded-full" />
         </h2>
         <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">
           A Partner You Can Actually Trust.
         </h3>
         <p className="text-slate-500 text-sm md:text-lg font-medium max-w-xl mx-auto">
           We act as your dedicated growth partner, focusing entirely on measurable revenue and bottom-line stability.
         </p>
      </div>

      {/* Alternating Split Stacks Structure (No Cards) */}
      <div className="flex flex-col">
        {pillars.map((pillar, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full py-16 md:py-24 px-6 md:px-12 ${isEven ? "bg-[#F8F9FA]" : "bg-white"}`}
            >
              <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-20 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Graphic Block */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }} 
                      transition={{ duration: 0.4, type: "spring" }}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-[24px] md:rounded-[40px] bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.08)] flex items-center justify-center text-slate-800 relative"
                    >
                      {/* Decorative backdrop blobs */}
                      <div className={`absolute inset-0 rounded-[40px] opacity-[0.03] -z-10 ${isEven ? 'bg-[#FF6A00]' : 'bg-blue-600'}`}/>
                      
                      <div className="scale-125 md:scale-[2] text-slate-700">{pillar.icon}</div>
                    </motion.div>
                  </div>
                  
                  {/* Text Block */}
                  <div className={`w-full md:w-1/2 text-center md:text-left ${!isEven && "md:text-right"}`}>
                    <span className="text-[#FF6A00] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-3 block">
                      {pillar.tag}
                    </span>
                    <h4 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight lg:leading-[1.1] mb-4 md:mb-6">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 text-[14px] md:text-[17px] leading-relaxed font-medium max-w-lg mx-auto md:mx-0 ${!isEven && 'md:ml-auto'}">
                      {pillar.description}
                    </p>
                  </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
