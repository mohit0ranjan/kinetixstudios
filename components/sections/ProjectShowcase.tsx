"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const projects = [
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png",
    alt: "GlowNest Studio website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465926/Screenshot_2026-03-25_233702_w5a4eg.png",
    alt: "Apex Scholars website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465926/Screenshot_2026-03-25_233625_qxpqni.png",
    alt: "BrewBite Café website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465925/Screenshot_2026-03-25_233741_rqtxac.png",
    alt: "PureGlow Derma website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465924/Screenshot_2026-03-25_233724_enp5xm.png",
    alt: "FitZone Pro website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png",
    alt: "Target Fitness Gym website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466403/d959544c-1775-4862-82ca-d89c5c957c0d.png",
    alt: "Zenith Yoga Center website",
  },
  {
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466944/35713b8b-f7f2-4d7b-8690-ba476040f643.png",
    alt: "Chak Bro Pub website",
  },
];

/* Double the list for infinite scroll effect */
const scrollItems = [...projects, ...projects];

export default function ProjectShowcase() {
  return (
    <section className="py-20 md:py-32 bg-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10 mb-10 md:mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <SectionEyebrow label="OUR WORK" />
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
              Projects that{" "}
              <span className="text-brand font-display italic">perform</span>.
            </h2>
            <p className="text-text-secondary text-base md:text-lg font-medium max-w-lg mt-3">
              Real websites we built. Real businesses growing.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 group text-sm font-bold text-text-primary hover:text-brand transition-colors border-b-2 border-text-primary hover:border-brand pb-1 shrink-0"
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>

      {/* ── Horizontal Scroll Marquee ── */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-surface-0 to-transparent z-20 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-surface-0 to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-5 md:gap-6 w-max px-4"
        >
          {scrollItems.map((project, i) => (
            <Link
              key={i}
              href="/work"
              className="group relative shrink-0 w-[320px] md:w-[420px] lg:w-[480px] rounded-2xl overflow-hidden border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-500 bg-white"
            >
              {/* Browser chrome bar */}
              <div className="h-7 md:h-8 bg-gradient-to-b from-[#f0f0f0] to-[#e4e4e4] border-b border-black/8 flex items-center px-3 gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 h-3.5 bg-white/80 rounded ml-3 mr-8 shadow-inner border border-black/5" />
              </div>

              {/* Screenshot */}
              <div className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="480px"
                  unoptimized
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-500 z-10 pointer-events-none" />

                {/* Hover CTA */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
