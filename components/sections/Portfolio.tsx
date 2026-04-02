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
} from "@/lib/motion";

const projects = [
  {
    category: "Web Performance",
    oneliner: "High-converting platform optimized for lead generation.",
    result: "3× Bookings",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png",
    featured: true,
  },
  {
    category: "Ads & Funnels",
    oneliner: "Multi-channel recruitment system for regional dominance.",
    result: "+200% Leads",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png",
    featured: false,
  },
  {
    category: "Brand & Web",
    oneliner: "Modern digital identity with seamless booking experience.",
    result: "450% ROI",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466848/9a5de1ea-09b8-480e-ad14-d74e5e548fb4.png",
    featured: false,
  },
  {
    category: "SEO Framework",
    oneliner: "Dominating high-intent searches in competitive local areas.",
    result: "Top #1 Rank",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466801/ba8516e9-0c1f-433e-af8d-697a78f92abc.png",
    featured: false,
  },
];

export default function Portfolio() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-20 md:py-32 relative bg-surface-0 overflow-hidden">
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
            <p className="mt-2 text-text-secondary text-base md:text-lg font-medium max-w-xl">
              Why your ads don&apos;t convert.
            </p>
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
            <motion.div variants={scaleFade} custom={0.05} className="md:col-span-7">
              <Link href="/work" className="group block h-full">
                <div className="relative h-full min-h-[240px] md:min-h-[400px] rounded-xl overflow-hidden bg-surface-1 border border-black/5">
                  <Image
                    src={featured.image}
                    alt="Case study showing 3x bookings increase for a high-converting platform"
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
                  {/* Overlay gradient for text readability if we placed text inside, but here text is below. 
                      Let's keep the image clean. */}
                </div>
                <div className="mt-4 md:mt-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-brand uppercase tracking-[0.15em] block mb-1.5">
                      {featured.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight group-hover:text-brand transition-colors duration-300">
                      {featured.oneliner}
                    </h3>
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
                key={index}
                variants={scaleFade}
                custom={0.08 + index * 0.06}
              >
                <Link href="/work" className="group flex gap-4 items-start">
                  <div className="relative w-32 h-24 md:w-48 md:h-32 rounded-xl overflow-hidden bg-surface-1 border border-black/5 shrink-0">
                    <Image
                      src={project.image}
                      alt={`${project.category} case study showing Kinetix client work`}
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
                    <h3 className="text-base md:text-lg font-bold text-text-primary tracking-tight group-hover:text-brand transition-colors duration-300 line-clamp-2 leading-snug">
                      {project.oneliner}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-black/6 flex items-center justify-center text-text-tertiary group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shrink-0 mt-1.5">
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
