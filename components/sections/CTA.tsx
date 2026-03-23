"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { fadeUp, viewportOnce, buttonPress, ease } from "@/lib/motion";

const faqs = [
  {
    q: "How quickly can you launch my campaign?",
    a: "Most clients go live in 10 to 21 days depending on scope. We prioritize fast launch, then optimize weekly using real data.",
  },
  {
    q: "Do you work only with local businesses?",
    a: "Local service businesses are our primary focus. That lets us build sharper ad angles, local SEO systems, and faster ROI cycles.",
  },
  {
    q: "What results should I expect in 90 days?",
    a: "The first phase focuses on fixing conversion leaks, improving lead quality, and building predictable acquisition. Exact growth depends on market demand and offer strength.",
  },
  {
    q: "Do you provide website + ads + SEO together?",
    a: "Yes. We combine web performance, paid acquisition, and organic visibility into one growth system so your channels compound instead of competing.",
  },
  {
    q: "Can we start small and scale later?",
    a: "Absolutely. We can begin with a focused sprint and scale spend and scope once performance stabilizes.",
  },
];



export default function CTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="relative bg-surface-dark overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: FAQ */}
          <div>
            <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em] mb-5 block">
              FAQ
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-inverse tracking-tight mb-10">
              Answers Before You Ask
            </h3>

            <div className="space-y-2">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.q}
                    className="border border-white/8 rounded-xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                  >
                    <button
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] md:text-base font-bold text-text-inverse/90">{item.q}</span>
                      <ChevronDown
                        className={`shrink-0 text-text-inverse/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        size={18}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <p className="px-5 pb-5 text-sm text-text-inverse/50 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col justify-center lg:pl-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Sparkles size={14} className="text-brand" />
                <span className="text-[12px] font-bold text-text-inverse/80 uppercase tracking-wider">Let&apos;s Talk</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-black text-text-inverse mb-6 leading-[1.1] tracking-tight">
                Ready to Grow Your{" "}
                <span className="text-brand">Local Business?</span>
              </h2>

              <p className="text-lg md:text-xl text-text-inverse/50 mb-10 font-medium leading-relaxed max-w-md">
                Let&apos;s build a marketing engine that drives real foot traffic and predictable growth.
              </p>
              
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-brand rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <motion.a
                  href="/contact"
                  {...buttonPress}
                  className="relative inline-flex items-center gap-3 bg-brand text-text-inverse px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold shadow-[0_10px_35px_rgba(255,106,0,0.3)] transition-all overflow-hidden"
                >
                  Book Your Free Strategy Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
