"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "GlowNest Studio",
    category: "Salon & Aesthetics",
    result: "3x Volume",
    color: "#E05A33",
    desktop: "/portoflio/GlowWeb.png",
    mobile: "/portoflio/GlowMob.png"
  },
  {
    name: "GlobalWay Visa",
    category: "Immigration",
    result: "+200% Leads",
    color: "#4A90E2",
    desktop: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobile: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "BrewBite Café",
    category: "F&B",
    result: "450% Content ROI",
    color: "#F5A623",
    desktop: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobile: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Apex Scholars",
    category: "Coaching",
    result: "Max Enrollment",
    color: "#50E3C2",
    desktop: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobile: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-32 relative bg-[#050505] font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[88rem]">
        
        <div className="flex justify-between items-end mb-12 md:mb-20">
          <div>
            <h2 className="text-[#FF6A00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#FF6A00] rounded-full"></span>
              Showcase
            </h2>
            <h3 className="font-sans text-3xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Real Results.
            </h3>
          </div>
          
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors rotate-180"><ArrowRight size={20}/></button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><ArrowRight size={20}/></button>
          </div>
        </div>

        {/* SHOWCASE SLIDER (Horizontal Snap Scroll) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 pb-12 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 no-scrollbar w-[100vw] md:w-full">
          {projects.map((project, index) => (
              <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="snap-center shrink-0 w-[92%] md:w-[75%] lg:w-[800px] h-[500px] md:h-[600px] rounded-[32px] md:rounded-[48px] relative overflow-hidden group cursor-pointer border border-white/10 transform-gpu"
            >
              {/* Full Width Image Base with Parallax effect feeling (via scale) */}
              <Image 
                src={project.desktop} 
                alt={project.name} 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] transform-gpu" 
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 800px"
              />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              {/* Floating Mobile Mockup (Parallaxing up on hover & scroll) */}
              <motion.div 
                initial={{ y: "10%", rotate: 0 }}
                whileInView={{ y: "-60%", rotate: -5 }}
                transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
                viewport={{ margin: "-100px", amount: 0.3 }}
                className="absolute right-6 md:right-16 bottom-[-20%] w-[120px] md:w-[200px] aspect-[9/19] bg-white rounded-[24px] md:rounded-[36px] shadow-2xl p-1.5 md:p-2.5 z-20 group-hover:translate-y-[-120px] group-hover:rotate-[-8deg] transition-all duration-700 ease-[0.16,1,0.3,1] transform-gpu"
              >
                 <div className="absolute top-2.5 md:top-4 left-1/2 -translate-x-1/2 w-1/4 h-1 md:h-1.5 bg-black rounded-full z-30" />
                 <div className="w-full h-full relative rounded-[16px] md:rounded-[28px] overflow-hidden bg-slate-100">
                    <Image src={project.mobile} alt={project.name + " mobile"} fill className="object-cover" />
                 </div>
              </motion.div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none transform-gpu">
                <div>
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">{project.name}</h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FF6A00] transition-colors duration-500 pointer-events-auto transform-gpu">
                    <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-500"/>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-center gap-2 -mt-3">
          <span className="h-1.5 w-8 rounded-full bg-[#FF6A00]/60" />
          <span className="h-1.5 w-2.5 rounded-full bg-slate-500/50" />
          <span className="text-[11px] font-semibold tracking-wide text-slate-300 uppercase">Swipe Gallery</span>
        </div>
      </div>
    </section>
  );
}
