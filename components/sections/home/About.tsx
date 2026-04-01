"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Data-driven strategic planning",
  "High-converting modern designs",
  "Omnipresent social media reach",
  "Advanced technical SEO"
];

export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand" />
              <span className="text-sm font-bold tracking-widest text-brand uppercase">About Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-surface-dark leading-[1.1] tracking-tight mb-6">
              Engineered for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-surface-dark to-brand">Record Growth</span>
            </h2>

            <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
              We don&apos;t just build websites; we build digital ecosystems. Our approach blends stunning aesthetics with robust technical foundations to ensure your local business stands out and scales up.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 text-surface-dark font-bold"
                >
                  <CheckCircle2 className="text-brand w-6 h-6 shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-surface-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand transition-colors flex items-center gap-2 group min-h-11">
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                <div className="flex text-yellow-400 text-lg">
                  {'★★★★★'}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Trustpilot</p>
                  <p className="text-sm font-black text-surface-dark">450+ Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Images) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[600px] w-full order-1 lg:order-2"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Offset Image */}
            <div className="absolute bottom-0 md:bottom-4 left-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stat Box */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[35%] md:top-[40%] text-center -left-2 md:-left-8 bg-surface-dark p-4 md:p-6 rounded-2xl shadow-xl text-white w-40 md:w-48 z-20 border border-white/10"
            >
              <h3 className="text-3xl md:text-4xl font-black mb-1 text-brand">5K+</h3>
              <p className="text-xs md:text-sm font-bold opacity-90 uppercase tracking-wider">Projects Completed</p>
              <div className="absolute -bottom-2 -right-2 w-16 md:w-20 h-16 md:h-20 bg-brand/20 rounded-full blur-[10px] pointer-events-none" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
