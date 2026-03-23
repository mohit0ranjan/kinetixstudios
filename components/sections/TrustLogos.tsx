"use client";

import { motion } from "framer-motion";

const businesses = [
  "GlowNest Beauty Studio",
  "UrbanEdge Salon",
  "BrewBite Café",
  "Apex Scholars",
  "GlobalWay Visa",
];

const marqueeItems = [...businesses, ...businesses, ...businesses, ...businesses];

export default function TrustLogos() {
  return (
    <section className="py-8 md:py-10 bg-surface-0 border-t border-b border-black/5 overflow-hidden flex items-center relative z-20">
      
      {/* Edge fade gradients */}
      <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-surface-0 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-surface-0 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          className="flex gap-12 md:gap-16 items-center px-8"
        >
          {marqueeItems.map((business, i) => (
            <span key={i} className="text-sm md:text-[15px] font-bold text-text-tertiary uppercase tracking-[0.15em]">
              {business}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
