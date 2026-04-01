"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    name: "Arshdeep S.",
    business: "Institute Director — Ludhiana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    review: "Our admissions doubled within three months of launching the new site and ad funnel. They truly understand the local Punjab market parents' mindset.",
  },
  {
    name: "Vikram S.",
    business: "Fitness Founder — Jalandhar",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800",
    review: "The automated lead system they built for my gym is like having a 24/7 sales team. We get high-quality inquiries even while we sleep.",
  },
  {
    name: "Dr. R. Arora",
    business: "Clinic Specialist — Chandigarh",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800",
    review: "Patient trust starts with a professional online presence. Kinetix delivered exactly that, along with a seamless booking flow that my patients love.",
  },
  {
    name: "Sandeep B.",
    business: "Restaurant Owner — Jalandhar",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800",
    review: "We moved away from zero-margin delivery apps to our own direct ordering system. It's been the best investment for our restaurant's bottom line.",
  },
  {
    name: "Priyanka K.",
    business: "Salon Studio — Goraya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    review: "The premium aesthetic they gave our website perfectly matches our luxury salon vibe. Our bridal bookings have seen a massive surge.",
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding relative bg-surface-0 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <SectionEyebrow label="Client Success Stories" center />
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] max-w-2xl mt-4">
            Trusted by Punjab's top local businesses.
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-yellow-400" strokeWidth={0} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-text-secondary text-lg leading-[1.6] mb-8 font-medium">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-black/[0.04]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h5 className="text-text-primary font-bold">{testimonial.name}</h5>
                    <p className="text-text-tertiary text-sm font-medium mt-0.5">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
