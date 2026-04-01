"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "Lumina Dental",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Working with Kinetix transformed our clinic's online presence. We saw a 3x increase in new patient bookings within the first 60 days.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Urban Edge Retail",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "The web design is striking, but the local SEO is what paid for itself ten times over. They truly understand modern digital commerce.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    company: "Estrella Consulting",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "Our brand identity went from generic to premium overnight. Highly recommend their design and paid ads team!",
    rating: 5
  },
  {
    name: "James Arthur",
    company: "Arthur & Son Plumbing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "Finally a marketing agency that actually delivers leads. The ROI on our Google Ads campaign has been ridiculously good.",
    rating: 5
  },
];

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-1 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-surface-dark leading-tight">
              Clients Feedback
            </h2>
            <p className="mt-4 text-gray-500 font-medium text-lg">
              Don&apos;t just take our word for it. Hear from the businesses we&apos;ve scaled.
            </p>
          </motion.div>

          <div className="hidden md:flex gap-4 items-center">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-surface-dark hover:bg-brand hover:text-white hover:border-brand transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-surface-dark text-white flex items-center justify-center hover:bg-brand transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>

      {/* Slider: bleeds off the right side */}
      <div className="pl-6 lg:pl-12 ml-auto max-w-[1400px] lg:mr-[calc((100vw-1400px)/2)] relative">
        <div 
          ref={containerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[86vw] sm:min-w-[320px] md:min-w-[420px] w-[86vw] sm:w-[85vw] md:w-[420px] shrink-0 snap-start"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6 px-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden relative border-2 border-surface-dark shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-surface-dark">{t.name}</h4>
                  <p className="text-xs md:text-sm font-bold text-brand">{t.company}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
                {/* Huge stylized background quote */}
                <Quote className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 text-gray-50 opacity-50 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 md:mb-6 text-brand">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer to allow full scroll bleed */}
          <div className="min-w-[40px] md:min-w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
