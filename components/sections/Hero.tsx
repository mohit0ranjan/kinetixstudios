"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  heroContainer,
  heroItem,
  heroWordReveal,
  heroWord,
  ease,
  buttonPress,
} from "@/lib/motion";

const headlineWords = ["Great", "offline,", "but"];

const clientNames = [
  "GlowNest Studio",
  "UrbanEdge Salon",
  "BrewBite Café",
  "Apex Scholars",
  "GlobalWay Visa",
  "PureGlow Derma",
  "FitZone Gym",
  "Smilecraft Dental",
];

// Duplicate for seamless loop
const marqueeItems = [...clientNames, ...clientNames];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] w-full bg-surface-1 text-text-primary flex flex-col justify-center overflow-hidden pt-4 md:pt-6 pb-8 md:pb-16">

      {/* Layered gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 70% 15%, rgba(255,106,0,0.07), transparent),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(99,102,241,0.04), transparent),
            radial-gradient(ellipse 40% 30% at 50% 50%, rgba(255,106,0,0.03), transparent)
          `
        }}
      />

      {/* Animated glow orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[-8%] w-[450px] h-[450px] md:w-[600px] md:h-[600px] bg-brand/12 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-400/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="section-container relative z-10 flex-grow flex flex-col justify-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl 2xl:max-w-6xl mx-auto text-center"
        >

          {/* Eyebrow badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 mb-8 md:mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] md:text-[12px] font-bold text-text-secondary tracking-widest uppercase">Digital Marketing Agency</span>
          </motion.div>

          {/* Headline — word-by-word reveal with blur */}
          <motion.h1
            variants={heroWordReveal}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.25rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.03em] font-sans font-black text-text-primary mb-6 md:mb-8"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={heroWord} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            <motion.span
              variants={heroWord}
              className="inline-block font-display italic text-brand relative mr-[0.25em]"
            >
              invisible
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: ease.out }}
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-brand/30 rounded-full origin-left"
              />
            </motion.span>
            <motion.span variants={heroWord} className="inline-block">
              online?
            </motion.span>
          </motion.h1>

          {/* Subtext — delayed fade */}
          <motion.p
            variants={heroItem}
            className="text-base md:text-xl lg:text-[1.35rem] font-medium text-text-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            Your local business deserves more local customers. We build websites, run ads, and boost local SEO to turn online searches into{" "}
            <span className="text-text-primary font-bold">foot traffic</span>.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
          >
            <motion.a
              href="/contact"
              {...buttonPress}
              className="group relative w-full sm:w-auto max-w-xs sm:max-w-none flex items-center justify-center gap-3 bg-surface-dark text-text-inverse px-8 py-4 md:px-10 md:py-5 font-bold text-base md:text-lg rounded-xl shadow-[0_8px_30px_rgba(10,10,10,0.3),inset_0_-4px_0_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(10,10,10,0.4),inset_0_-2px_0_rgba(0,0,0,0.4)] transition-shadow duration-200 overflow-hidden"
            >
              {/* Subtle hover shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-2 text-sm font-semibold text-text-tertiary mt-2 sm:mt-0 sm:ml-4"
            >
              <CheckCircle2 size={18} className="text-green-500" />
              Free Strategy Session
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* ─── Client Logo Marquee ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: ease.out }}
        className="relative z-10 w-full"
      >
        {/* Label */}
        <p className="text-center text-[10px] md:text-[11px] font-bold text-text-tertiary/60 uppercase tracking-[0.2em] mb-4 md:mb-5">
          Trusted by local businesses
        </p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute top-0 left-0 w-16 md:w-28 h-full bg-gradient-to-r from-surface-1 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-28 h-full bg-gradient-to-l from-surface-1 to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-10 md:gap-14 px-5 md:px-7"
            >
              {marqueeItems.map((name, i) => (
                <span
                  key={i}
                  className="text-[13px] md:text-[15px] font-bold text-text-tertiary/50 uppercase tracking-[0.12em] hover:text-text-secondary transition-colors duration-300 cursor-default select-none"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
