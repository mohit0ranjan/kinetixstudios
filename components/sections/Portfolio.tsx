"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  fadeUp,
  scaleFade,
  staggerContainer,
  viewportOnce,
  viewportOnceLoose,
  ease,
} from "@/lib/motion";

const projects = [
  {
    name: "GlowNest Studio",
    category: "Web Design",
    oneliner: "Luxury beauty brand reimagined for the digital age.",
    result: "3× Bookings",
    image: "/portoflio/GlowWeb.png",
    slug: "/work/glownest",
    featured: true,
  },
  {
    name: "GlobalWay Visa",
    category: "Lead Gen",
    oneliner: "Immigration consultancy turned into a lead machine.",
    result: "+200% Leads",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/globalway",
    featured: false,
  },
  {
    name: "BrewBite Café",
    category: "Social Media",
    oneliner: "From zero to viral — a local café's content transformation.",
    result: "450% ROI",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/brewbite",
    featured: false,
  },
  {
    name: "Apex Scholars",
    category: "SEO",
    oneliner: "Coaching institute that now dominates local search.",
    result: "Max Enrollment",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/apex",
    featured: false,
  },
];

export default function Portfolio() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-16 md:py-36 relative bg-surface-0 overflow-hidden">
      <div className="section-container">

        {/* Header — single fadeUp */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16"
        >
          <div>
            <SectionEyebrow label="Selected Work" />
            <h2 className="font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-text-primary tracking-tight leading-[1.1]">
              Case Studies
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-text-secondary hover:text-brand font-bold text-[14px] transition-colors group md:mb-2"
          >
            View All Work
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid — stagger container */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
        >
          {/* Featured */}
          {featured && (
            <motion.div variants={scaleFade} className="md:col-span-7">
              <Link href={featured.slug} className="group block">
                <div className="relative aspect-[3/2] md:aspect-[16/10] rounded-xl overflow-hidden bg-surface-1 border border-black/5">
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 768px) 100vw, 58vw"
                    priority
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-400">
                    <span className="px-3 py-1.5 rounded-full bg-brand text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                      {featured.result}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-brand uppercase tracking-[0.15em] block mb-1.5">
                      {featured.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight group-hover:text-brand transition-colors duration-300">
                      {featured.name}
                    </h3>
                    <p className="text-text-secondary text-sm font-medium mt-1.5 max-w-md hidden md:block">
                      {featured.oneliner}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-black/8 flex items-center justify-center text-text-tertiary group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Compact rows */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
            {rest.map((project, index) => (
              <motion.div
                key={project.name}
                variants={scaleFade}
                custom={0.08 + index * 0.06}
              >
                <Link href={project.slug} className="group flex gap-4 items-start">
                  <div className="relative w-32 h-24 md:w-48 md:h-32 rounded-xl overflow-hidden bg-surface-1 border border-black/5 shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="144px"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-grow min-w-0 py-0.5">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-text-primary tracking-tight group-hover:text-brand transition-colors duration-300 truncate">
                      {project.name}
                    </h3>
                    <p className="text-text-tertiary text-xs font-medium mt-1 line-clamp-1">
                      {project.oneliner}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-black/6 flex items-center justify-center text-text-tertiary group-hover:text-brand group-hover:border-brand/30 transition-all duration-300 shrink-0 mt-1.5">
                    <ArrowUpRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <div className="md:hidden flex justify-center mt-10">
          <Link href="/work" className="flex items-center gap-2 text-text-secondary hover:text-brand font-bold text-sm transition-colors">
            View All Work <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
