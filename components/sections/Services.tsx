"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const services = [
  {
    title: "High-Converting Websites",
    description:
      "Wildly fast, premium storefronts engineered to turn visitors into paying customers without friction.",
    stat: "3× Bookings",
    visual: "web",
  },
  {
    title: "Paid Advertising",
    description:
      "Hyper-targeted Meta & Google campaigns that scale leads predictably and profitably.",
    stat: "4.5× ROAS",
    visual: "ads",
  },
  {
    title: "Local SEO Dominance",
    description:
      "Dominate the Google Maps pack so you're the undeniable #1 choice locals find first.",
    stat: "#1 Ranking",
    visual: "seo",
  },
  {
    title: "Social Media Growth",
    description:
      "Build omnipresence on Instagram & Facebook that captures attention and drives action.",
    stat: "+10k Followers",
    visual: "social",
  },
  {
    title: "Brand Identity",
    description:
      "Premium visual systems, logos, and aesthetics that scream undeniable trust and authority.",
    stat: "100% Rebrand",
    visual: "brand",
  },
];

// ── Compact Visual Previews ──
const WebVisual = () => (
  <div className="w-full h-full rounded-xl overflow-hidden relative bg-surface-1">
    <Image
      src="https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465924/Screenshot_2026-03-25_233724_enp5xm.png"
      alt="High-converting website by Kinetix"
      fill
      className="object-cover object-top"
      sizes="600px"
      unoptimized
    />
  </div>
);

const AdsVisual = () => (
  <div className="w-full h-full bg-surface-dark rounded-xl overflow-hidden p-4 flex items-end gap-1.5">
    {[35, 60, 40, 80, 55, 100, 75].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: "0%" }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.5, delay: i * 0.06 }}
        className="flex-1 bg-gradient-to-t from-brand to-brand-light rounded-t-sm relative"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      </motion.div>
    ))}
    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
      <span className="text-[11px] font-bold text-white">4.5× ROAS</span>
    </div>
  </div>
);

const SEOVisual = () => (
  <div className="w-full h-full bg-surface-0 rounded-xl border border-black/5 flex items-center justify-center relative overflow-hidden">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 z-10"
    >
      <span className="text-5xl font-black text-text-primary tracking-tighter drop-shadow-sm">
        1st
      </span>
      <div className="w-px h-10 bg-black/10" />
      <div>
        <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest block">
          Google Local
        </span>
        <div className="flex gap-0.5 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.08, type: "spring" }}
              className="text-amber-400 text-sm drop-shadow-sm"
            >
              ★
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.08, 0, 0.08],
      }}
      transition={{ repeat: Infinity, duration: 2.5 }}
      className="absolute w-40 h-40 border-2 border-brand/20 rounded-full"
    />
  </div>
);

const SocialVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80 rounded-xl border border-black/5 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#ffffff77_1px,transparent_1px)] [background-size:16px_16px]" />
    <div className="flex -space-x-3 z-10">
      {[
        "from-pink-400 to-rose-500",
        "from-purple-400 to-indigo-500",
        "from-blue-400 to-cyan-500",
        "from-brand to-brand-light",
      ].map((bg, i) => (
        <motion.div
          key={i}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
          className={`w-12 h-12 rounded-full border-[2px] border-white shadow-md bg-gradient-to-br ${bg}`}
        />
      ))}
    </div>
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50 z-10"
    >
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-[12px] font-bold text-text-primary">
        +10k Followers MTD
      </span>
    </motion.div>
  </div>
);

const BrandVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-xl overflow-hidden p-4 flex items-center justify-center relative">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:16px_16px]" />
    <div className="grid grid-cols-2 gap-2.5 w-full max-w-[200px] relative z-10">
      <motion.div
        initial={{ rotateY: 90 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-brand h-16 rounded-xl flex items-end p-2.5 shadow-lg border border-white/10"
      >
        <span className="text-white/80 text-[9px] font-bold tracking-widest drop-shadow-sm">
          PRIMARY
        </span>
      </motion.div>
      <motion.div
        initial={{ rotateY: -90 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.08 }}
        className="bg-[#2D2D2D] border border-white/10 h-16 rounded-xl flex items-end p-2.5 shadow-lg"
      >
        <span className="text-white/50 text-[9px] font-bold tracking-widest">
          DARK
        </span>
      </motion.div>
      <motion.div
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.15 }}
        className="bg-white h-14 rounded-xl flex items-end p-2.5 col-span-2 shadow-lg"
      >
        <span className="text-text-tertiary text-[9px] font-bold tracking-widest">
          LIGHT
        </span>
      </motion.div>
    </div>
  </div>
);

const visuals: Record<string, React.FC> = {
  web: WebVisual,
  ads: AdsVisual,
  seo: SEOVisual,
  social: SocialVisual,
  brand: BrandVisual,
};

// ── Service Row ──
function ServiceRow({
  service,
  index,
  isActive,
  onHover,
}: {
  service: (typeof services)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onClick={onHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: ease.out }}
      className={`group cursor-pointer border-b border-black/5 last:border-b-0 transition-all duration-500 ${
        isActive ? "py-7 md:py-8" : "py-5 md:py-6"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        {/* Number */}
        <span
          className={`text-lg md:text-xl font-black tracking-tight transition-colors duration-400 shrink-0 w-8 ${
            isActive ? "text-brand" : "text-text-tertiary/30"
          }`}
        >
          0{index + 1}
        </span>

        {/* Title + Description */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg md:text-2xl lg:text-[1.75rem] font-bold tracking-tight transition-colors duration-400 ${
              isActive ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            {service.title}
          </h3>

          {/* Description — expands when active */}
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-text-secondary text-[14px] md:text-[15px] font-medium leading-relaxed max-w-lg overflow-hidden"
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Stat badge */}
        <span
          className={`hidden sm:inline-flex items-center text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-400 shrink-0 ${
            isActive
              ? "bg-brand/10 text-brand"
              : "bg-surface-1 text-text-tertiary"
          }`}
        >
          {service.stat}
        </span>

        {/* Arrow */}
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-400 ${
            isActive
              ? "border-brand/20 text-brand bg-brand/5"
              : "border-black/5 text-text-tertiary"
          }`}
        >
          <ArrowUpRight
            size={14}
            className={`transition-transform duration-400 ${isActive ? "rotate-0" : "-rotate-45"}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const VisualComponent = visuals[services[active].visual];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-surface-1 to-[#F2F4F7] relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 md:mb-14"
        >
          <SectionEyebrow label="CAPABILITIES" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4 mb-4">
            Everything you need to{" "}
            <span className="text-brand font-display italic">dominate</span>{" "}
            online.
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl">
            We combine strategy, design, and performance marketing to drive real
            growth. No fluff, just results.
          </p>
        </motion.div>

        {/* ── Split Layout: List + Preview ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT: Interactive Service List */}
          <div className="flex flex-col">
            {services.map((service, i) => (
              <ServiceRow
                key={service.title}
                service={service}
                index={i}
                isActive={active === i}
                onHover={() => setActive(i)}
              />
            ))}

            {/* Explore CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand font-bold text-[14px] mt-6 group hover:gap-3 transition-all duration-300"
            >
              Explore All Services
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* RIGHT: Animated Visual Preview */}
          <div className="lg:sticky lg:top-28 order-first lg:order-last">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-surface-1 border border-black/5 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: ease.out }}
                  className="absolute inset-0 p-3 md:p-4"
                >
                  <VisualComponent />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile stat badge */}
            <div className="sm:hidden mt-4 flex justify-center">
              <span className="inline-flex items-center text-[12px] font-bold px-4 py-2 rounded-full bg-brand/10 text-brand">
                {services[active].stat}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
