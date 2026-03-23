"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MousePointer2, BarChart3, LayoutTemplate, CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] w-full bg-[#F4F5F7] text-[#0A0A0A] flex flex-col justify-center overflow-hidden pt-4 md:pt-6 pb-24 md:pb-32">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      {/* Soft Glow Elements with Continuous Animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-[88rem] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl 2xl:max-w-7xl mx-auto text-center relative"
        >
          
          {/* ----- HIGHLIGHT BUBBLE ----- */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Digital Marketing Agency</span>
          </motion.div>

          {/* ----- FLOATING ELEMENTS ----- */}
          
          {/* Top Left: Conversion Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, rotate: -20 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
            transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.5 }}
            className="absolute -left-4 md:-left-12 lg:-left-20 top-16 hidden md:flex items-center gap-3 bg-white p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 backdrop-blur-md z-30 transform-gpu hover:scale-110 hover:-rotate-3 transition-transform cursor-default"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner">
              <BarChart3 size={24} />
            </div>
            <div className="text-left hidden lg:block pr-4">
              <p className="text-sm md:text-base font-black text-gray-900 leading-none mb-1">+42% ROI</p>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Ad Spend</p>
            </div>
            {/* Continuous float animation */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 z-[-1]" />
          </motion.div>

          {/* Bottom Right: Web Design Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50, rotate: 20 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
            transition={{ duration: 1.2, delay: 1, type: "spring", bounce: 0.5 }}
            className="absolute -right-4 md:-right-8 lg:-right-16 bottom-24 hidden md:flex items-center gap-3 bg-white p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 backdrop-blur-md z-30 transform-gpu hover:scale-110 hover:rotate-3 transition-transform cursor-default"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white shadow-inner">
              <LayoutTemplate size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left hidden lg:block pr-4">
              <p className="text-sm md:text-base font-black text-gray-900 leading-none mb-1">Websites</p>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">That Convert</p>
            </div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute inset-0 z-[-1]" />
          </motion.div>

          {/* Top Right: Cursor Pointer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="absolute right-10 md:right-32 top-0 z-40 hidden md:flex flex-col items-center pointer-events-none"
          >
            <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <MousePointer2 size={40} className="text-[#FF6A00] fill-[#FF6A00] -rotate-12 drop-shadow-xl" />
              <div className="bg-[#FF6A00] text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg mt-1 transform -rotate-12 ml-4">
                Visitor
              </div>
            </motion.div>
          </motion.div>

          {/* ----- HEADLINE ----- */}
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(1.75rem,8vw,8rem)] sm:text-[clamp(2.5rem,8vw,8rem)] lg:text-[8.5vw] leading-[1] lg:leading-[0.9] tracking-[-0.03em] font-sans font-black text-[#0A0A0A] mb-8 relative z-20"
          >
            Growth that feels<br />
            <span className="text-[#FF6A00] text-[1.1em] inline-block relative mt-2 md:mt-4">
              effortless.
              {/* Highlight vector squiggle */}
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-3 md:-bottom-6 left-0 w-full h-auto text-[#FF6A00]/20 -z-10 drop-shadow-sm" 
                viewBox="0 0 300 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 25C85 5 215 -5 295 15" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
              </motion.svg>
            </span>
          </motion.h1>

          {/* ----- SUBTEXT ----- */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14 relative z-20 leading-relaxed"
          >
            We help local businesses in India grow faster with websites, ads, and branding that <span className="text-gray-900 font-bold decoration-[#FF6A00]/30 underline decoration-4 underline-offset-4 pointer-events-none">actually convert</span>.
          </motion.p>
          
          {/* ----- CTA ----- */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
          >
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 0.98, y: 1 }}
              whileTap={{ scale: 0.94, y: 3 }}
              className="group relative w-full sm:w-auto max-w-xs sm:max-w-none flex items-center justify-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 md:px-10 md:py-5 font-sans font-bold text-base md:text-lg rounded-2xl shadow-[0_8px_30px_rgba(10,10,10,0.3),inset_0_-4px_0_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(10,10,10,0.4),inset_0_-2px_0_rgba(0,0,0,0.4)] transition-all duration-200"
            >
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>

            {/* Secondary subtle CTA / Trust indicator */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              <CheckCircle2 size={18} className="text-green-500" />
              Free Strategy Session
            </div>
          </motion.div>

        </motion.div>
      </div>
      
    </section>
  );
}
