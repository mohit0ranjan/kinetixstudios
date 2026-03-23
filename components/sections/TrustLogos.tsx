"use client";

import { motion } from "framer-motion";

const businesses = [
  "GlowNest Beauty Studio",
  "UrbanEdge Salon",
  "BrewBite Café",
  "Apex Scholars",
  "GlobalWay Visa",
];

// Duplicate for seamless infinite loop
const marqueeItems = [...businesses, ...businesses, ...businesses, ...businesses];

export default function TrustLogos() {
  return (
    <section className="py-10 bg-white border-t border-b border-slate-100 overflow-hidden flex items-center relative z-20">
      
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center px-8"
        >
          {marqueeItems.map((business, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-[0.2em]">
                {business}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
