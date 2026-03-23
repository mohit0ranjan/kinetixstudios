"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const testimonials = [
  {
    name: "Dr. Aman Gupta",
    business: "Smilecraft Dental",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    review: "Our new patient bookings doubled in 30 days. The Google Ads strategy they implemented was extremely effective from the very first week.",
  },
  {
    name: "Neha Verma",
    business: "Urbanglow Salon",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    review: "They completely redefined our branding presence. We're now perceived universally as the top premium salon in our entire city.",
  },
  {
    name: "Rohan Singh",
    business: "Apex Academy",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    review: "Built us a gorgeously fast website. Our student enrollments jumped 150% this season entirely due to their local SEO dominance.",
  },
  {
    name: "Simran Kaur",
    business: "Brewbite Cafe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    review: "Their approach to Instagram marketing is unmatched. We have a queue outside every weekend resulting from the viral reels they produced.",
  }
];

/** Cross-fade slide variants */
const slideVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.out } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: ease.inOut } },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative bg-surface-0 overflow-hidden">

      {/* Decorative quote */}
      <div className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0 text-[20rem] md:text-[30rem] font-display italic text-black/[0.02] leading-none pointer-events-none select-none z-0">
        &ldquo;
      </div>

      <div className="section-container relative z-10">

        {/* Header — single fadeUp */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12 md:mb-20"
        >
          <SectionEyebrow label="Client Success" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Carousel — AnimatePresence cross-fade */}
        <div className="relative w-full min-h-[550px] sm:min-h-[500px] md:min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
            >
              {/* Portrait */}
              <div className="w-full md:w-5/12 h-[260px] sm:h-[300px] md:h-full relative rounded-2xl overflow-hidden shadow-2xl shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 md:top-5 md:right-5 flex bg-white/95 px-3 py-1.5 rounded-full items-center gap-1.5 shadow-md">
                  <Star size={12} fill="currentColor" className="text-brand" strokeWidth={0} />
                  <span className="text-sm font-bold text-text-primary">5.0</span>
                </div>
              </div>

              {/* Quote */}
              <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left">
                <p className="text-text-primary text-xl md:text-3xl lg:text-[2.25rem] leading-[1.35] font-bold tracking-tight mb-10 md:mb-14">
                  &ldquo;{testimonials[activeIndex].review}&rdquo;
                </p>
                <div>
                  <h5 className="text-text-primary text-lg md:text-xl font-black">{testimonials[activeIndex].name}</h5>
                  <p className="text-brand text-sm font-bold uppercase tracking-widest mt-1">{testimonials[activeIndex].business}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 relative z-20">
          <div className="flex gap-2 mb-6 md:mb-0">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-brand" : "w-2 bg-black/10 hover:bg-black/20"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center text-text-tertiary hover:text-brand hover:border-brand transition-all active:scale-90"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center text-text-tertiary hover:text-brand hover:border-brand transition-all active:scale-90"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
