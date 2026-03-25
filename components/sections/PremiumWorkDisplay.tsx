"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const conceptStudies = [
  {
    title: "Gym Lead Generation System",
    business: "Target Fitness Gym",
    domain: "targetfitnessjalandhar.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png",
    bullets: [
      { label: "Problem", text: "No proper website or local lead funnel" },
      { label: "Solution", text: "High-converting landing page & Ads funnel" },
      { label: "Impact", text: "Predictable, high-quality local inquiries" }
    ]
  },
  {
    title: "School Admissions Engine",
    business: "Govt. Senior Secondary School",
    domain: "gsss-jalandhar.edu.in",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466801/ba8516e9-0c1f-433e-af8d-697a78f92abc.png",
    bullets: [
      { label: "Problem", text: "Invisible online presence to modern parents" },
      { label: "Solution", text: "Trust-focused website & intent-based SEO" },
      { label: "Impact", text: "Maximized enrollment capacity & local authority" }
    ]
  },
  {
    title: "Patient Acquisition Funnel",
    business: "OHCC Dugri Clinic",
    domain: "ohccdugriclinic.com",
    location: "Ludhiana, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466848/9a5de1ea-09b8-480e-ad14-d74e5e548fb4.png",
    bullets: [
      { label: "Problem", text: "Relying purely on offline word-of-mouth" },
      { label: "Solution", text: "Medical SEO & seamless WhatsApp booking" },
      { label: "Impact", text: "Consistent weekly flow of new patients" }
    ]
  },
  {
    title: "Restaurant Footfall Flywheel",
    business: "Chak Bro Pub & Lounge",
    domain: "chakbropub.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466944/35713b8b-f7f2-4d7b-8690-ba476040f643.png",
    bullets: [
      { label: "Problem", text: "High reliance on aggregator platforms (Zomato)" },
      { label: "Solution", text: "Direct online ordering & Instagram Ad funnel" },
      { label: "Impact", text: "3x direct weekend table reservations" }
    ]
  },
  {
    title: "Premium Salon Branding",
    business: "S7 Salon & Academy",
    domain: "s7salon.com",
    location: "Goraya, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png",
    bullets: [
      { label: "Problem", text: "Premium services but outdated digital footprint" },
      { label: "Solution", text: "Luxury web design & bridal local targeting" },
      { label: "Impact", text: "Dominated high-ticket local beauty searches" }
    ]
  }
];

export default function PremiumWorkDisplay() {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
        {conceptStudies.map((project, index) => (
          <motion.div
            key={project.business}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.1, ease: ease.out }}
            className={`group relative flex flex-col h-full bg-surface-0 rounded-[2rem] border border-black/5 shadow-xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ${
              index === 4 ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto lg:w-full" : ""
            }`}
          >
            {/* CSS Browser Frame Mockup */}
            <div className="w-full bg-[#E8E8E8] dark:bg-[#2D2D2D] px-4 py-2.5 flex items-center gap-2 border-b border-black/5 relative z-10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-white/60 dark:bg-black/20 rounded-md px-6 py-0.5 text-[10px] text-text-secondary/60 font-medium flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-black/10 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-brand/40" />
                </div>
                {project.domain}
              </div>
            </div>

            {/* Simulated Website Hero Section (Image) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-1">
              {/* Added a subtle top-gradient to mimic a navbar shadow on the website */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={index < 2 ? "eager" : "lazy"}
              />
              
              {/* Content Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Hero Label Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  Live Website Mockup
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 right-4 bg-brand/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg z-20 hidden md:block">
                {project.type}
              </div>
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-lg border border-black/5 z-20">
                <MapPin size={14} className="text-brand" />
                <span className="text-[12px] font-bold text-text-primary uppercase tracking-wider">{project.location}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between relative z-10 bg-surface-0">
              <div>
                <p className="text-sm font-bold text-brand uppercase tracking-widest mb-3">
                  {project.business}
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-6 leading-tight tracking-tight">
                  {project.title}
                </h3>
                
                {/* 3 Metric Bullets */}
                <div className="flex flex-col gap-4 mb-8">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={18} className="text-brand" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-text-tertiary uppercase tracking-wider mb-0.5">
                          {bullet.label}
                        </span>
                        <p className="text-text-secondary font-medium leading-snug">
                          {bullet.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Row */}
              <div className="mt-auto pt-6 border-t border-black/5 w-full flex justify-between items-center group-hover:border-brand/20 transition-colors duration-300">
                <span className="text-sm font-bold uppercase tracking-widest text-text-primary group-hover:text-brand transition-colors">
                  View Case Study
                </span>
                <div className="w-10 h-10 rounded-full bg-surface-1 border border-black/5 text-text-secondary flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
