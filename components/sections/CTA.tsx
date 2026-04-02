"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Target, Phone } from "lucide-react";
import { fadeUp, viewportOnce, buttonPress } from "@/lib/motion";

export default function CTA() {
  const whatsappLink = "https://wa.me/919057680262";

  return (
    <section id="contact" className="relative bg-surface-1 py-16 md:py-24 font-sans">
      <div className="section-container relative z-10 px-4 md:px-6">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOnce}
           className="relative max-w-5xl mx-auto bg-surface-dark rounded-[2rem] p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-white/10 text-center"
        >
          {/* Ambient glows inside the floating box */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/15 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10">
            {/* Trust Badges Top */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 md:mb-10">
              <div className="flex items-center gap-2 text-text-inverse/60 text-[12px] md:text-[13px] font-bold uppercase tracking-wider">
                <ShieldCheck size={16} className="text-brand" />
                Trusted by growing businesses
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="flex items-center gap-2 text-text-inverse/60 text-[12px] md:text-[13px] font-bold uppercase tracking-wider">
                <Target size={16} className="text-brand" />
                Results-focused approach
              </div>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-text-inverse mb-6 leading-[1.05] tracking-tight">
              Let&apos;s Build Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-amber-300 pr-2">
                Growth System.
              </span>
            </h2>

            <p className="text-base md:text-xl text-text-inverse/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed">
              Tell us your revenue goal — we&apos;ll show you the exact system to hit it. No fluff, just a roadmap built for your market.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-md mx-auto sm:max-w-none">
              {/* WhatsApp */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                {...buttonPress}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 md:px-10 py-4.5 rounded-xl text-[15px] md:text-base font-bold shadow-[0_6px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.4)] transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </motion.a>

              {/* Call */}
              <motion.a
                href="tel:+919057680262"
                {...buttonPress}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand text-white px-8 md:px-10 py-4.5 rounded-xl text-[15px] md:text-base font-bold shadow-[0_6px_24px_rgba(255,106,0,0.3)] hover:shadow-[0_10px_32px_rgba(255,106,0,0.4)] transition-all"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>

            {/* Urgency */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full border border-red-500/20">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider">
                  Only 5 new spots left this month
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
