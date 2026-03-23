"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
};

export const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Luma Dental Flow",
    description: "End-to-end patient acquisition funnel and brand identity for a multi-million dollar clinic.",
    category: "Web + Ads",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1600&auto=format&fit=crop",
    href: "/projects/luma",
  },
  {
    id: "2",
    title: "Apex Logistics",
    description: "Regional search dominance and conversion optimization for a B2B firm.",
    category: "Local SEO",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    href: "/projects/apex",
  },
  {
    id: "3",
    title: "Aura Skincare",
    description: "High-converting Shopify storefront with localized social scaling.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1600&auto=format&fit=crop",
    href: "/projects/aura",
  },
];

interface ProjectCardProps {
  project: Project;
  layout: "featured" | "wide" | "tall";
  index: number;
}

const ProjectCard = ({ project, layout, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const aspectClass = 
    layout === "featured" ? "aspect-[16/9] md:aspect-[21/9]" : 
    layout === "wide" ? "aspect-[4/3] md:aspect-[16/10]" : 
    "aspect-[4/5] sm:aspect-square"; // tall

  const containerClass = 
    layout === "featured" ? "col-span-1 md:col-span-12" :
    layout === "wide" ? "col-span-1 md:col-span-7" :
    "col-span-1 md:col-span-5";

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${containerClass}`}
    >
      <Link href={project.href} className={`relative w-full overflow-hidden block bg-gray-100 ${aspectClass}`}>
        <motion.div style={{ y }} className="absolute inset-[-15%] w-[130%] h-[130%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        </motion.div>
        
        {/* Minimal Dark Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
        
        {/* Floating Reveal Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
             <ArrowUpRight size={24} />
           </div>
        </div>
      </Link>
      
      {/* Editorial Metdata */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-6 gap-2">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-[#5E29FF] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-sm font-medium">
            {project.description}
          </p>
        </div>
        <div className="hidden md:block text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {project.category}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectShowcase() {
  return (
    <section className="py-24 md:py-40 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <h2 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gray-400"></span>
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Proof of <br className="hidden md:block"/> Performance.
            </h3>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 group text-sm font-bold text-slate-900 pb-2 border-b-2 border-slate-900 hover:text-[#5E29FF] hover:border-[#5E29FF] transition-colors"
          >
            View all case studies 
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-32 md:gap-x-10">
          
          {/* Main Featured Project (Full Width) */}
          <ProjectCard project={DUMMY_PROJECTS[0]} layout="featured" index={0} />

          {/* Offset Projects Row */}
          <ProjectCard project={DUMMY_PROJECTS[1]} layout="tall" index={1} />
          <ProjectCard project={DUMMY_PROJECTS[2]} layout="wide" index={2} />

        </div>

      </div>
    </section>
  );
}
