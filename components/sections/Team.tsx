"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const team = [
  { name: "Mohit Ranjan", role: "Growth Strategist", image: "/team/Mohit Ranjan.png" },
  { name: "Nishant", role: "Developer", image: "/team/nishant.png" },
  { name: "Nidhi Yadav", role: "Full Stack Developer", image: "/team/nidhi-yadav.png" },
  { name: "Saumya", role: "UI/UX Designer", image: "/team/saumya.png" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Team() {
  return (
    <section className="py-24 bg-white font-sans selection:bg-[#FF6A00]/20">
      <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
        
        {/* Editorial Header */}
        <div className="mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight">
              The Collective
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            A specialized team of strategists, engineers, and creatives working together to push the boundaries of digital growth.
          </p>
        </div>

        {/* 
          STRICT GRID:
          Mobile: 2 columns (grid-cols-2)
          Desktop: 4 columns (lg:grid-cols-4)
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 lg:gap-x-8 md:gap-y-16"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image focuses purely on the portrait */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[8px] md:rounded-[12px] bg-gray-100 mb-4 md:mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center lg:group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark overlay on hover (desktop only) */}
                <div className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Minimal Text Content */}
              <div className="flex flex-col transform lg:group-hover:-translate-y-1.5 transition-transform duration-500 ease-out">
                <h3 className="text-[13px] md:text-base font-semibold text-black mb-0.5 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] md:text-[13px] text-gray-500 leading-snug">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
