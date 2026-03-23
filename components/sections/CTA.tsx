"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative bg-[#FF6A00] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={14} className="text-white" />
          <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Let&apos;s Talk</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white mb-8 leading-tight tracking-tight"
        >
          Ready to Grow Your <br/> Local Business?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl leading-relaxed"
        >
          Let&apos;s build a marketing engine that drives real foot traffic and predictable growth.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-white rounded-[20px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_10px_35px_rgba(0,0,0,0.3)] border border-white/10 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Your Free Strategy Call
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
            {/* Shimmer effect */}
            <motion.div 
              className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
              initial={{ left: "-100%" }}
              whileHover={{ left: "200%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
