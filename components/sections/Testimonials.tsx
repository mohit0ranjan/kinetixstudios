"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Basic auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 relative bg-white font-sans overflow-hidden">
      
      {/* Dynamic Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[800px] md:h-[800px] bg-[#F8F9FA] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-[10px] md:text-xs font-bold text-[#FF6A00] tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
             <span className="w-8 h-[2px] bg-[#FF6A00] rounded-full"></span>
             Client Success
             <span className="w-8 h-[2px] bg-[#FF6A00] rounded-full"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight">
            What Our Clients Say
          </h3>
        </div>

        {/* SINGLE CARD CAROUSEL STRUCTURE */}
        <div className="relative w-full min-h-[600px] sm:min-h-[550px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-6 md:gap-16 w-full h-full transform-gpu"
            >
              
              {/* Massive Portrait Half */}
              <div className="w-full md:w-5/12 h-[240px] sm:h-[300px] md:h-full relative rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl shrink-0">
                <Image 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 flex bg-white/95 px-3 py-1.5 rounded-full items-center gap-1.5 shadow-md">
                  <Star size={12} fill="currentColor" className="text-[#FF6A00]" strokeWidth={0} />
                  <span className="text-sm font-bold text-slate-900">5.0</span>
                </div>
              </div>

              {/* Massive Typography Half */}
              <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left h-full">
                
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-6 md:mb-10 mx-auto md:mx-0 shadow-inner">
                  <span className="font-serif text-[#9CA3AF] text-3xl md:text-4xl italic leading-[0] relative top-1.5 -left-1">&quot;</span>
                </div>
                
                <p className="text-[#111827] text-xl md:text-3xl lg:text-4xl leading-[1.4] md:leading-[1.4] font-bold tracking-tight mb-8 md:mb-12">
                  {testimonials[activeIndex].review}
                </p>

                <div className="mt-auto">
                  <h5 className="text-[#111827] text-lg md:text-xl font-black">{testimonials[activeIndex].name}</h5>
                  <p className="text-[#FF6A00] text-sm md:text-base font-bold uppercase tracking-widest mt-1">{testimonials[activeIndex].business}</p>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation Controls */}
        <div className="flex justify-center md:justify-end gap-3 md:gap-4 mt-8 md:mt-12 relative z-20">
          <button 
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#FF6A00] hover:border-[#FF6A00] hover:bg-[#FF6A00]/5 transition-all shadow-sm active:scale-90"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#FF6A00] hover:border-[#FF6A00] hover:bg-[#FF6A00]/5 transition-all shadow-sm active:scale-90"
          >
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
