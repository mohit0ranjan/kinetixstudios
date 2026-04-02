"use client";

import { motion } from "framer-motion";
import { Search, LayoutGrid, Zap, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "Deep dive into your business, local market, competitors, and growth bottlenecks.",
    icon: Search,
    gradient: "from-orange-500 to-orange-600",
    accent: "#ff6a00",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Custom blueprint: websites, ads, and SEO tactics designed exclusively for ROI.",
    icon: LayoutGrid,
    gradient: "from-blue-500 to-blue-600",
    accent: "#3b82f6",
  },
  {
    number: "03",
    title: "Design & Execution",
    description:
      "Deploy campaigns, launch web assets, and set the growth systems live.",
    icon: Zap,
    gradient: "from-emerald-500 to-emerald-600",
    accent: "#10b981",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Continuous optimization, A/B testing, and scaling to dominate your market.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-purple-600",
    accent: "#a855f7",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-20 md:py-32 relative bg-white overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-[80px] md:blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] md:blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto relative z-20"
        >
          <div className="inline-block mb-6">
            <SectionEyebrow label="Work Process" center />
          </div>
          
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black text-gray-900 tracking-tight leading-[1.08] mb-5 md:mb-6">
            Our Solution Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mx-auto mb-6 md:mb-8 rounded-full" />
          
          <p className="text-base md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From Discovery to Dominance. A proven 4-step framework that transforms struggling local businesses into undeniable market leaders.
          </p>
        </motion.div>

        {/* Main Process Display */}
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-12 md:mb-16 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: ease.out }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main Button */}
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl px-8 md:px-12 py-5 md:py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                  <span className="font-black text-white text-lg md:text-xl tracking-wider uppercase drop-shadow-lg">
                    Kinetix Approach
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Lines SVG (Desktop) */}
          <div className="hidden lg:flex justify-center mb-12 relative z-10">
            <svg className="w-full h-24 max-w-5xl" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,106,0,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,106,0,0.2)" />
                </linearGradient>
              </defs>
              
              {/* Center vertical line */}
              <path d="M 500 0 L 500 30" stroke="url(#flowGrad)" strokeWidth="2" />
              
              {/* Horizontal connector */}
              <path d="M 125 30 L 875 30" stroke="url(#flowGrad)" strokeWidth="2" />
              
              {/* Down connections to cards */}
              <path d="M 125 30 L 125 100" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.6" />
              <path d="M 375 30 L 375 100" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.6" />
              <path d="M 625 30 L 625 100" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.6" />
              <path d="M 875 30 L 875 100" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.6" />
              
              {/* Intersection dots */}
              <circle cx="500" cy="30" r="4" fill="#ff6a00" />
              <circle cx="125" cy="30" r="3" fill="#ff6a00" opacity="0.5" />
              <circle cx="375" cy="30" r="3" fill="#ff6a00" opacity="0.5" />
              <circle cx="625" cy="30" r="3" fill="#ff6a00" opacity="0.5" />
              <circle cx="875" cy="30" r="3" fill="#ff6a00" opacity="0.5" />
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-5 relative z-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.12,
                    ease: ease.out,
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                  
                  <div className="relative flex flex-col h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    
                    {/* Gradient accent bar on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />
                    
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center mb-5 md:mb-6">
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} text-white font-black text-base md:text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <span>{step.number}</span>
                        <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Icon Container */}
                    <div className="mb-5 md:mb-6 inline-flex">
                      <div className="p-3 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight leading-tight group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium flex-grow group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300" />
                    <div className={`h-0.5 bg-gradient-to-r ${step.gradient} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />
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
