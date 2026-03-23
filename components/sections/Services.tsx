"use client";

import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce } from "@/lib/motion";

const services = [
  {
    title: "High-Converting Websites",
    description: "Wildly fast, premium storefronts engineered to turn visitors into paying customers without friction.",
  },
  {
    title: "Paid Advertising",
    description: "Hyper-targeted Meta & Google campaigns that scale leads predictably and profitably.",
  },
  {
    title: "Local SEO Dominance",
    description: "Dominate the Google Maps pack so you're the undeniable #1 choice locals find first.",
  },
  {
    title: "Social Media Growth",
    description: "Build omnipresence on Instagram & Facebook that captures attention and drives action.",
  },
  {
    title: "Brand Identity",
    description: "Premium visual systems, logos, and aesthetics that scream undeniable trust and authority.",
  },
];

// ────────────────────────────────────────────────────────
// Immersive Interactive Previews
// ────────────────────────────────────────────────────────

const WebPreview = ({ active }: { active: boolean }) => (
  <div className="w-full h-full flex flex-col bg-[#F8F9FA] rounded-2xl border border-gray-200 overflow-hidden shadow-inner">
    <div className="h-8 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
       <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
       <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
       <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    </div>
    <div className="flex-1 p-4 flex gap-4">
       <motion.div 
         initial={{ x: -20, opacity: 0 }} 
         animate={active ? { x: 0, opacity: 1 } : {}} 
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="w-1/4 h-full bg-white rounded-lg border border-gray-100 shadow-sm" 
       />
       <div className="flex-1 flex flex-col gap-4 relative">
         <motion.div 
           initial={{ scaleX: 0 }} 
           animate={active ? { scaleX: 1 } : {}} 
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="w-full h-12 bg-gradient-to-r from-[#FF6A00]/10 to-transparent rounded-lg origin-left" 
         />
         <motion.div 
           initial={{ y: 20, opacity: 0 }} 
           animate={active ? { y: 0, opacity: 1 } : {}} 
           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
           className="w-full flex-1 bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden relative" 
         >
           <motion.svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="absolute w-6 h-6 text-gray-900 z-10 drop-shadow-md"
             animate={active ? { x: [200, 50, 150], y: [150, 30, 80] } : {}}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           >
             <polygon points="3 3 10 21 14 14 21 10 3 3" fill="white" />
           </motion.svg>
         </motion.div>
       </div>
    </div>
  </div>
);

const AdsPreview = ({ active }: { active: boolean }) => (
  <div className="w-full h-full bg-[#111111] rounded-2xl overflow-hidden relative p-6 flex flex-col justify-end shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]">
     <div className="absolute top-6 left-6 flex items-center gap-3">
        <Target className="text-[#FF6A00]" size={24} />
        <span className="text-white font-bold text-sm tracking-widest uppercase">Live Matrix</span>
     </div>
     <div className="flex justify-between items-end gap-2 h-1/2">
       {[40, 70, 45, 90, 60, 100, 85].map((height, i) => (
         <motion.div 
           key={i}
           initial={{ height: "0%" }}
           animate={active ? { height: `${height}%` } : {}}
           transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
           className="flex-1 bg-gradient-to-t from-[#FF6A00] to-orange-400 rounded-t-sm"
         />
       ))}
     </div>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center shadow-2xl">
       <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em] mb-1">Avg ROAS</span>
       <motion.span 
         initial={{ scale: 0.5, opacity: 0 }}
         animate={active ? { scale: 1, opacity: 1 } : {}}
         transition={{ delay: 0.7, type: "spring" }}
         className="text-3xl font-black text-white leading-none"
       >
         4.5x
       </motion.span>
     </div>
  </div>
);

const SEOPreview = ({ active }: { active: boolean }) => (
  <div className="w-full h-full bg-white rounded-2xl border border-gray-200/60 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] relative overflow-hidden flex items-center justify-center">
     <motion.div 
       initial={{ y: 50, opacity: 0 }}
       animate={active ? { y: 0, opacity: 1 } : {}}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className="w-[85%] bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100/80 p-6 flex flex-col sm:flex-row items-center gap-6 relative z-10"
     >
        <span className="text-6xl font-black text-[#1C1F2B] tracking-tighter">1st</span>
        <div className="w-full sm:w-px h-px sm:h-12 bg-gray-200" />
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Google Local Rank</span>
          <div className="flex gap-1 text-[#FFB800]">
            {[1,2,3,4,5].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={active ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
              >
                <Star fill="currentColor" size={18} strokeWidth={0} />
              </motion.div>
            ))}
          </div>
        </div>
     </motion.div>
     {/* Radar rings */}
     <motion.div 
        animate={active ? { scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] } : {}}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-64 h-64 border border-[#FF6A00]/30 rounded-full pointer-events-none" 
     />
     <motion.div 
        animate={active ? { scale: [1, 2, 1], opacity: [0.05, 0, 0.05] } : {}}
        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        className="absolute w-96 h-96 border border-[#FF6A00]/20 rounded-full pointer-events-none" 
     />
  </div>
);

const SocialPreview = ({ active }: { active: boolean }) => (
  <div className="w-full h-full bg-gradient-to-tr from-indigo-50/50 via-purple-50/50 to-pink-50/50 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center border border-gray-100">
     <div className="flex -space-x-4 mb-6">
       {[
         "bg-gradient-to-br from-pink-400 to-rose-500",
         "bg-gradient-to-br from-purple-400 to-indigo-500",
         "bg-gradient-to-br from-blue-400 to-cyan-500",
         "bg-gradient-to-br from-orange-400 to-amber-500"
       ].map((bg, i) => (
         <motion.div 
           key={i}
           initial={{ x: 40, opacity: 0 }}
           animate={active ? { x: 0, opacity: 1 } : {}}
           transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
           className={`w-16 h-16 rounded-full border-[3px] border-white shadow-lg relative z-${40 - i * 10} ${bg}`}
         />
       ))}
     </div>
     <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={active ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50 flex gap-3 items-center"
     >
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[13px] font-bold text-gray-900 tracking-wide">+10k Followers MTD</span>
     </motion.div>
  </div>
);

const BrandPreview = ({ active }: { active: boolean }) => (
  <div className="w-full h-full bg-[#0a0a0a] rounded-2xl overflow-hidden relative p-6 sm:p-8 flex items-center justify-center">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm relative z-10">
      <motion.div 
        initial={{ rotateY: 90, opacity: 0 }}
        animate={active ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-[#FF6A00] h-24 rounded-2xl flex items-end p-4 shadow-xl"
      >
        <span className="text-white/90 text-[10px] font-bold tracking-widest">PRIMARY</span>
      </motion.div>
      <motion.div 
        initial={{ rotateY: -90, opacity: 0 }}
        animate={active ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
        className="bg-[#1C1F2B] border border-white/10 h-24 rounded-2xl flex items-end p-4 shadow-xl"
      >
        <span className="text-white/60 text-[10px] font-bold tracking-widest">DARK</span>
      </motion.div>
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        animate={active ? { rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
        className="bg-white h-20 sm:h-24 rounded-2xl flex items-end p-4 shadow-xl col-span-2"
      >
        <span className="text-gray-400 text-[10px] font-bold tracking-widest">LIGHT</span>
      </motion.div>
    </div>
  </div>
);


// ────────────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────────────

const ServiceBlock = ({ service, index }: { service: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <div 
      ref={ref} 
      className={`relative py-16 lg:py-24 pl-6 md:pl-12 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 scale-100" : "opacity-30 scale-95"
      }`}
    >
      {/* Scroll indicator blip (Desktop) */}
      <div className={`absolute -left-[4px] top-24 w-2.5 h-2.5 rounded-full border-[2px] hidden lg:block transition-colors duration-500 z-20 ${
        isInView ? "bg-[#FF6A00] border-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.5)]" : "bg-transparent border-gray-300"
      }`} />

      {/* Header Area */}
      <div className="flex items-center gap-4 sm:gap-6 mb-6">
        <span className={`text-xl lg:text-2xl font-black transition-colors duration-500 ${isInView ? "text-[#FF6A00]" : "text-gray-300"}`}>
          0{index + 1}
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1C1F2B] tracking-tight leading-tight">
          {service.title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-[16px] lg:text-[18px] text-gray-500 font-medium leading-relaxed max-w-lg mb-10">
        {service.description}
      </p>

      {/* Immersive UI Preview Container */}
      <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] rounded-[24px] lg:rounded-[32px] bg-white/40 border border-gray-200/60 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)] overflow-hidden backdrop-blur-md relative p-3 sm:p-5 lg:p-6 group">
        
        {/* Renders the specific interactive mockup */}
        {index === 0 && <WebPreview active={isInView} />}
        {index === 1 && <AdsPreview active={isInView} />}
        {index === 2 && <SEOPreview active={isInView} />}
        {index === 3 && <SocialPreview active={isInView} />}
        {index === 4 && <BrandPreview active={isInView} />}
        
        {/* Subtle explore CTA that floats in smoothly */}
        <Link href="/services" className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 text-sm font-bold text-gray-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:text-[#FF6A00]">
          Explore <ArrowUpRight size={16} />
        </Link>
      </div>

    </div>
  );
};


export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      className="py-12 lg:py-24 bg-gradient-to-b from-[#FAFAFA] to-[#F2F4F7] relative overflow-hidden"
    >
      <div className="container mx-auto px-5 lg:px-8 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Side: Sticky Narrative */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 mb-12 lg:mb-0">
               <motion.div
                 variants={fadeUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportOnce}
               >
                 <SectionEyebrow label="CAPABILITIES" />
                 <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#1C1F2B] tracking-tight leading-[1.05] mt-6 mb-6">
                   Everything you need to dominate online.
                 </h2>
                 <p className="text-gray-500 text-lg lg:text-[19px] font-medium leading-relaxed max-w-sm">
                   We combine strategy, design, and performance marketing to drive real growth. No fluff, just results.
                 </p>
               </motion.div>
            </div>
          </div>

          {/* Right Side: Immersive Scroll Showcase */}
          <div className="lg:col-span-7 relative">
            {/* The Animated Vertical Progress Line */}
            <div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-gray-200/60 hidden lg:block rounded-full" />
            <motion.div 
               style={{ scaleY: scrollYProgress }} 
               className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FF6A00] to-orange-400 origin-top hidden lg:block rounded-full z-10" 
            />

            {/* Scrolling Blocks */}
            <div className="flex flex-col">
              {services.map((service, i) => (
                 <ServiceBlock key={i} service={service} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
