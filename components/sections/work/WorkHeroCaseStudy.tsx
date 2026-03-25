"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { fadeUp, viewportOnce, ease, buttonPress } from "@/lib/motion";

export default function WorkHeroCaseStudy() {
  return (
    <section className="relative w-full bg-surface-1 pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background gradients similar to Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 75% 20%, rgba(255,106,0,0.06), transparent),
            radial-gradient(ellipse 50% 40% at 15% 75%, rgba(99,102,241,0.04), transparent)
          `,
        }}
      />
      
      <div className="section-container relative z-10">
        {/* Premium Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-bold text-text-secondary tracking-widest uppercase">
              Featured Case Study
            </span>
          </div>
        </motion.div>

        {/* Two-column layout for the Featured Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-bold text-brand uppercase tracking-widest">
                Fitness Industry
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
              <div className="flex items-center gap-1.5 text-text-tertiary">
                <MapPin size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Jalandhar, Punjab
                </span>
              </div>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-text-primary tracking-tight leading-[1.05] mb-8">
              Growth system designed for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                4.5★ rated gym
              </span>{" "}
              in Jalandhar.
            </h1>

            {/* Bullets using CheckCircle2 like PremiumWorkDisplay */}
            <div className="flex flex-col gap-4 md:gap-5 mb-8 md:mb-10 bg-surface-0 p-5 sm:p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} className="text-red-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">
                    The Problem
                  </span>
                  <p className="text-text-secondary font-medium leading-snug">
                    Relying purely on offline word-of-mouth with no predictable online lead generation engine.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-px bg-black/5" />

              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} className="text-amber-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">
                    The Solution
                  </span>
                  <p className="text-text-secondary font-medium leading-snug">
                    High-converting landing page optimized for local intent paired with a hyper-targeted Meta Ads funnel.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-black/5" />

              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">
                    The Impact
                  </span>
                  <p className="text-text-secondary font-medium leading-snug">
                    Predictable, high-quality local inquiries translating to a 300% increase in monthly memberships.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button matching Hero */}
            <motion.a
              href="https://cal.com/kinetix-studios/strategy"
              target="_blank"
              rel="noopener noreferrer"
              {...buttonPress}
              className="group relative inline-flex items-center justify-center gap-3 bg-surface-dark text-text-inverse px-8 py-4 font-bold text-[15px] sm:text-base rounded-xl shadow-[0_8px_30px_rgba(10,10,10,0.25),inset_0_-3px_0_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(10,10,10,0.35),inset_0_-2px_0_rgba(0,0,0,0.4)] transition-shadow duration-200 overflow-hidden w-full sm:w-auto self-start"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              Book Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right: Mockup Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: ease.out }}
            className="relative w-full aspect-[4/3] lg:aspect-[4/4] xl:aspect-[4/3] rounded-3xl md:rounded-[2rem] border border-black/5 shadow-2xl overflow-hidden group bg-surface-0 flex items-center justify-center p-4 md:p-8 mt-4 md:mt-0"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />

            {/* Mac Mockup wrapper */}
            <div className="relative w-full h-full max-h-[85%] bg-surface-1 rounded-t-xl rounded-b-md border-x-4 border-t-4 border-b-[16px] border-[#2D2D2D] shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden group-hover:-translate-y-2 transition-transform duration-700 ease-out">
              {/* CSS Browser Frame Mockup inside */}
              <div className="w-full bg-[#E8E8E8] dark:bg-[#2D2D2D] px-3 py-2 flex items-center gap-1.5 border-b border-black/10 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded text-[8px] text-text-secondary/80 font-medium px-4 py-0.5 shadow-sm">
                  fitness-performance.in
                </div>
              </div>

              {/* Mockup Image */}
              <div className="relative w-full h-[calc(100%-28px)] bg-surface-0">
                <Image
                  src="https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png"
                  alt="Fitness Performance Case Study"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  
                />
              </div>
            </div>

            {/* Floating metric badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 right-4 md:bottom-10 md:-right-6 bg-white rounded-xl shadow-2xl border border-black/5 p-3 md:p-4 flex flex-col gap-1 z-20"
            >
              <span className="text-[9px] md:text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full self-start mb-1">
                Verified Outcome
              </span>
              <span className="text-xl md:text-2xl font-black text-text-primary tracking-tight">
                300%
              </span>
              <span className="text-[10px] md:text-xs font-bold text-text-tertiary uppercase tracking-wider">
                Lead Increase
              </span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
