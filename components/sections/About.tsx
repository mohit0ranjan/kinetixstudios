"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import Team from "./Team";
import HowWeWork from "./HowWeWork";
import { ease } from "@/lib/motion";



export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section id="about" className="section-padding relative overflow-hidden bg-surface-1">
      {/* Subtle gradient mesh */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(255,106,0,0.06), transparent)"
        }}
      />
      
      <div className="section-container relative z-10">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: ease.out }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <SectionEyebrow label="Our Origin" />

            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
              Built by Young Talent from{" "}
              <span className="text-brand font-display italic">NIT Jalandhar.</span>
            </h3>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-medium max-w-lg mb-12">
              We are a team of designers, developers, and marketers from NIT Jalandhar helping local businesses grow online with modern digital strategies.
            </p>

            {/* Stat cards */}
            <div className="flex items-center gap-4 md:gap-5">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-surface-0 rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-text-primary">50+</div>
                  <div className="text-text-tertiary text-xs font-bold tracking-wider uppercase">Local Clients</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-surface-0 rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <Users size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-text-primary">High</div>
                  <div className="text-text-tertiary text-xs font-bold tracking-wider uppercase">ROI Growth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: ease.out }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square md:aspect-[4/3] w-full relative rounded-2xl overflow-hidden bg-surface-0 border border-black/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] p-2.5">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="NIT Jalandhar Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <HowWeWork />
    <Team />
    </>
  );
}
