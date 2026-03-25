"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { viewportOnce, ease } from "@/lib/motion";

export interface CaseStudyData {
  title: string;
  domain: string;
  location: string;
  type: string;
  image: string;
  bullets: { label: string; text: string }[];
}

interface CaseStudyCardProps {
  data: CaseStudyData;
  index: number;
}

export default function CaseStudyCard({ data, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.1, ease: ease.out }}
      className={`group relative flex flex-col bg-surface-0 rounded-[2rem] border border-black/5 shadow-xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500`}
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
          {data.domain}
        </div>
      </div>

      {/* Simulated Website Hero Section (Image) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-1">
        {/* Subtle top-gradient to mimic a navbar shadow on the website */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
        
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index < 2 ? "eager" : "lazy"}
          unoptimized
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
          {data.type}
        </div>
        <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-lg border border-black/5 z-20">
          <MapPin size={14} className="text-brand" />
          <span className="text-[12px] font-bold text-text-primary uppercase tracking-wider">{data.location}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-10 flex-1 flex flex-col justify-between relative z-10 bg-surface-0">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-6 leading-tight tracking-tight">
            {data.title}
          </h3>
          
          {/* 3 Metric Bullets */}
          <div className="flex flex-col gap-3 md:gap-4 mb-8">
            {data.bullets.map((bullet, idx) => {
              // Same colors as WorkHeroCaseStudy for consistency
              const iconColors = ["text-red-500", "text-amber-500", "text-green-500"];
              return (
                <div key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className={`md:w-[18px] md:h-[18px] ${iconColors[idx % 3] || "text-brand"}`} />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-[11px] font-bold text-text-tertiary uppercase tracking-wider mb-0.5">
                      {bullet.label}
                    </span>
                    <p className="text-sm md:text-base text-text-secondary font-medium leading-snug">
                      {bullet.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA Row */}
        <a 
          href="https://cal.com/kinetix-studios/strategy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto pt-5 md:pt-6 border-t border-black/5 w-full flex justify-between items-center group-hover:border-brand/20 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-[12px] md:text-sm font-bold uppercase tracking-widest text-text-primary group-hover:text-brand transition-colors">
            Book a Strategy Call
          </span>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-surface-1 border border-black/5 text-text-secondary flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm shrink-0 ml-2">
            <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
