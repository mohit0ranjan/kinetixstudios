"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    name: "GlowNest Studio",
    category: "Web Design",
    oneliner: "Luxury beauty brand reimagined for the digital age.",
    result: "3× Bookings",
    image: "/portoflio/GlowWeb.png",
    slug: "/work/glownest-studio",
    size: "large" as const,
  },
  {
    name: "GlobalWay Visa",
    category: "Lead Gen",
    oneliner: "Immigration consultancy turned into a lead machine.",
    result: "+200% Leads",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/globalway-visa",
    size: "normal" as const,
  },
  {
    name: "BrewBite Café",
    category: "Social Media",
    oneliner: "From zero to viral — local café's content transformation.",
    result: "450% ROI",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/brewbite-cafe",
    size: "normal" as const,
  },
  {
    name: "Apex Scholars",
    category: "SEO",
    oneliner: "Coaching institute dominating local search results.",
    result: "Max Enrollment",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/apex-scholars",
    size: "large" as const,
  },
  {
    name: "PureGlow Derma",
    category: "Web Design",
    oneliner: "Medical aesthetics clinic with a premium digital presence.",
    result: "5× Traffic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/pureglow-derma",
    size: "normal" as const,
  },
  {
    name: "FitZone Gym",
    category: "Social Media",
    oneliner: "Gym chain that went from empty to waitlisted memberships.",
    result: "2× Members",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/work/fitzone-gym",
    size: "normal" as const,
  },
];

const categories = ["All", "Web Design", "Lead Gen", "Social Media", "SEO"];
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-surface-dark text-text-inverse shadow-sm"
                : "bg-surface-0 text-text-secondary border border-black/6 hover:border-black/12 hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid — Asymmetric with mixed sizes */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
              className={project.size === "large" ? "lg:col-span-2" : ""}
            >
              <Link href={project.slug} className="group block">
                {/* Image Container */}
                <div className={`relative rounded-xl overflow-hidden bg-surface-1 border border-black/5 ${
                  project.size === "large" ? "aspect-[2/1] md:aspect-[5/2]" : "aspect-[4/3]"
                }`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes={project.size === "large" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Result pill — hover only */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-400">
                    <span className="px-2.5 py-1 rounded-full bg-brand text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="mt-3.5 md:mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-text-primary tracking-tight group-hover:text-brand transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-text-tertiary text-[13px] font-medium mt-1 line-clamp-1">
                      {project.oneliner}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-black/6 flex items-center justify-center text-text-tertiary group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
