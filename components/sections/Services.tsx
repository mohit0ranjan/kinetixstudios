"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Search,
  Target,
  PenTool,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  fadeUp,
  scaleFade,
  staggerContainer,
  viewportOnce,
  ease,
} from "@/lib/motion";

const services = [
  {
    icon: <Monitor strokeWidth={1.5} />,
    title: "High-Converting Websites",
    description:
      "Wildly fast, premium storefronts engineered to turn visitors into paying customers.",
    tag: "Core",
    featured: true,
  },
  {
    icon: <Target strokeWidth={1.5} />,
    title: "Paid Advertising",
    description:
      "Hyper-targeted Meta & Google campaigns that scale leads predictably.",
    tag: "Acquisition",
    featured: false,
  },
  {
    icon: <Search strokeWidth={1.5} />,
    title: "Local SEO Dominance",
    description:
      "Dominate Google Maps so you're the #1 choice locals find first.",
    tag: "Organic",
    featured: false,
  },
  {
    icon: <Smartphone strokeWidth={1.5} />,
    title: "Social Media Growth",
    description:
      "Build omnipresence on Instagram & Facebook that locals can't ignore.",
    tag: "Awareness",
    featured: false,
  },
  {
    icon: <PenTool strokeWidth={1.5} />,
    title: "Brand Identity",
    description:
      "Premium logos and visual systems that scream undeniable trust.",
    tag: "Identity",
    featured: false,
  },
];

const featured = services[0];
const supporting = services.slice(1);

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative bg-surface-0 z-10 overflow-hidden"
    >
      <div className="section-container">
        {/* ── Header Row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-20"
        >
          <div className="max-w-xl">
            <SectionEyebrow label="Capabilities" />
            <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.08]">
              Everything you need
              <br className="hidden md:inline" /> to dominate online.
            </h2>
          </div>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-md lg:text-right leading-relaxed">
            We combine strategy, design, and performance into one growth engine — 
            so your channels compound, not compete.
          </p>
        </motion.div>

        {/* ── Main Grid: Featured Left + Cards Right ── */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {/* Featured Service — spans 5 cols */}
          <motion.div variants={scaleFade} className="lg:col-span-5">
            <Link href="/services" className="group block h-full">
              <div className="relative h-full rounded-2xl bg-surface-1 hover:bg-white border border-black/5 overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[420px] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
                {/* Minimal glow on hover instead of permanent bright glow */}
                <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-brand/5 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="inline-block text-[10px] font-black text-brand uppercase tracking-[0.2em] bg-brand/5 px-3 py-1.5 rounded-full mb-8">
                    {featured.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                    <span className="[&>svg]:w-7 [&>svg]:h-7">{featured.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight leading-[1.15] mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] md:text-base font-medium leading-relaxed max-w-sm">
                    {featured.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10 flex items-center gap-2 text-brand font-bold text-sm mt-8 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Supporting Services — 2×2 grid in 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {supporting.map((service, index) => (
              <motion.div
                key={service.title}
                variants={scaleFade}
                custom={0.05 + index * 0.08}
              >
                <Link href="/services" className="group block h-full">
                  <div className="relative h-full rounded-2xl bg-surface-1 border border-black/5 p-6 md:p-7 flex flex-col hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
                    {/* Top row: tag + icon */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[10px] font-black text-text-tertiary uppercase tracking-[0.18em]">
                        {service.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-surface-0 border border-black/5 flex items-center justify-center text-text-tertiary group-hover:bg-brand group-hover:text-white group-hover:border-brand/20 transition-all duration-500">
                        <span className="[&>svg]:w-5 [&>svg]:h-5">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-text-primary tracking-tight mb-2 group-hover:text-brand transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-5 w-8 h-8 rounded-full border border-black/8 flex items-center justify-center text-text-tertiary group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
