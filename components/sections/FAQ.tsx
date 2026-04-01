"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can Kinetix Studios launch my campaign?",
    a: "Most clients go live in 10 to 21 days depending on scope. We prioritize fast launch, then optimize weekly using real data.",
  },
  {
    q: "Do you work only with local businesses?",
    a: "Local service businesses are our primary focus. That lets us build sharper ad angles, local SEO systems, and faster ROI cycles.",
  },
  {
    q: "What results should I expect in the first 90 days?",
    a: "The first phase focuses on fixing conversion leaks, improving lead quality, and building predictable acquisition. Exact growth depends on market demand and offer strength.",
  },
  {
    q: "Do you provide website + ads + SEO together?",
    a: "Yes. We combine web performance, paid acquisition, and organic visibility into one growth system so your channels compound instead of competing.",
  },
  {
    q: "How do we communicate and track progress?",
    a: "You get transparent reporting, regular strategy calls, and clear KPI tracking. No vague updates, just measurable movement tied to revenue goals.",
  },
  {
    q: "Can we start small and scale later?",
    a: "Absolutely. We can begin with a focused sprint and scale spend and scope once performance stabilizes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-surface-1" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-3">Frequently Asked Questions</p>
          <h2 id="faq-title" className="text-3xl md:text-5xl font-black tracking-tight text-text-primary">
            Answers Before You Ask
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="bg-white border border-black/5 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-5 md:px-7 py-5 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-base md:text-xl font-bold text-text-primary">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p className="px-5 md:px-7 pb-6 text-sm md:text-base text-text-secondary leading-relaxed">
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
    </section>
  );
}
