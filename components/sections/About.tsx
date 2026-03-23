"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import Team from "./Team";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section id="about" className="py-32 relative overflow-hidden bg-[#F4F5F7]">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-8 w-max">
              <Sparkles size={14} className="text-[#FF6A00]" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Our Origin</span>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] mb-8 leading-[1.1] tracking-tight">
              Built by Young Talent from{" "}
              <span className="text-[#FF6A00] block mt-1 text-[1.1em] drop-shadow-sm">NIT Jalandhar.</span>
            </h3>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg mb-12">
              We are a team of designers, developers, and marketers from NIT Jalandhar helping local businesses grow online with modern digital strategies.
            </p>

            {/* Floating stat cards */}
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00]">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0A0A0A]">50+</div>
                  <div className="text-gray-400 text-xs font-bold tracking-wider uppercase">Local Clients</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Users size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0A0A0A]">High</div>
                  <div className="text-gray-400 text-xs font-bold tracking-wider uppercase">ROI Growth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square md:aspect-[4/3] w-full relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="NIT Jalandhar Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="hidden md:flex absolute -bottom-5 -left-5 bg-white border border-black/5 rounded-2xl px-5 py-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] z-20 items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-pulse" />
                <p className="text-[#0A0A0A] font-bold text-sm tracking-wide">Driven by Innovation</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <Team />
    </>
  );
}
