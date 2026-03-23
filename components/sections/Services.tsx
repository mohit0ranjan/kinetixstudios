"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Search, Target, PenTool, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-[#F8F9FA] z-10 font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[88rem] relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-4 md:gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[10px] md:text-[11px] font-bold text-primary uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              Capabilities
            </h2>
            <h3 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
              What We Offer
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 w-full">
          
          {/* FEATURED SERVICE (Full Width Stack) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-[#0A0A0A] text-white rounded-[24px] md:rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row justify-between relative overflow-hidden group shadow-2xl"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF6A00]/10 blur-3xl md:blur-[64px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 transform-gpu" />
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 blur-3xl md:blur-[64px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4 transform-gpu" />

            <div className="relative z-10 flex flex-col md:w-1/2 h-full">
              <div className="mb-6 md:mb-12">
                 <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                   Core Offering
                 </span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                High-Converting <br/> <span className="text-[#FF6A00]">Websites.</span>
              </h3>
              <p className="text-white/60 text-sm md:text-xl leading-relaxed font-medium max-w-md mb-8 md:mb-0">
                Stop losing customers to terrible loading times and confusing navigation. We build wildly fast, premium digital storefronts engineered purely to generate revenue.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start md:items-end justify-between md:w-1/2 md:pl-10 mt-8 md:mt-0">
              <div className="w-16 h-16 md:w-28 md:h-28 rounded-[20px] md:rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <Monitor size={32} strokeWidth={1.5} className="md:w-[48px] md:h-[48px] opacity-80" />
              </div>
              
              <motion.a 
                href="/contact" 
                whileTap={{ scale: 0.95 }}
                className="mt-12 md:mt-auto flex items-center gap-3 bg-[#FF6A00] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold md:text-lg group-hover:shadow-[0_10px_30px_rgba(255,106,0,0.4)] transition-all"
              >
                View Packages <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* HORIZONTAL SCROLL SNAP CARDS (Remaining Services) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 no-scrollbar w-[100vw] md:w-full select-none cursor-grab active:cursor-grabbing scroll-smooth">
            
            {/* Social Media */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="snap-center shrink-0 w-[88%] sm:w-[320px] md:w-[400px] bg-blue-50 border border-blue-100/50 p-6 md:p-10 rounded-[28px] md:rounded-[36px] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white text-blue-600 flex items-center justify-center shadow-sm mb-16 md:mb-32">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-4">Social Growth</h4>
              <p className="text-slate-600 text-sm md:text-base font-medium">Build an aggressive omnipresence on Instagram and Facebook that locals simply cannot ignore.</p>
            </motion.div>

             {/* Meta Ads */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="snap-center shrink-0 w-[88%] sm:w-[320px] md:w-[400px] bg-purple-50 border border-purple-100/50 p-6 md:p-10 rounded-[28px] md:rounded-[36px] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white text-purple-600 flex items-center justify-center shadow-sm mb-16 md:mb-32">
                <Target size={24} />
              </div>
              <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-4">Paid Ads</h4>
              <p className="text-slate-600 text-sm md:text-base font-medium">Hyper-targeted Meta and Google campaigns that directly scale your lead volume predictably.</p>
            </motion.div>

            {/* SEO */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="snap-center shrink-0 w-[88%] sm:w-[320px] md:w-[400px] bg-green-50 border border-green-100/50 p-6 md:p-10 rounded-[28px] md:rounded-[36px] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white text-green-600 flex items-center justify-center shadow-sm mb-16 md:mb-32">
                <Search size={24} />
              </div>
              <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-4">Local SEO</h4>
              <p className="text-slate-600 text-sm md:text-base font-medium">Dominate the Google Map Pack so you are the undisputed #1 choice when they search.</p>
            </motion.div>

            {/* Branding */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="snap-center shrink-0 w-[88%] sm:w-[320px] md:w-[400px] bg-[#FF6A00]/5 border border-[#FF6A00]/10 p-6 md:p-10 rounded-[28px] md:rounded-[36px] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white text-[#FF6A00] flex items-center justify-center shadow-sm mb-16 md:mb-32">
                <PenTool size={24} />
              </div>
              <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-4">Branding</h4>
              <p className="text-slate-600 text-sm md:text-base font-medium">Premium logos, brand guidelines, and visual identities that scream undeniable trust.</p>
            </motion.div>

          </div>

          <div className="md:hidden flex items-center justify-center gap-2 -mt-2">
            <span className="h-1.5 w-8 rounded-full bg-[#FF6A00]/60" />
            <span className="h-1.5 w-2.5 rounded-full bg-slate-300" />
            <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">Swipe</span>
          </div>

        </div>
      </div>
    </section>
  );
}
