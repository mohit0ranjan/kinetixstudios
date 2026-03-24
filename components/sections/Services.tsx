"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Upload } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => <div className="w-full h-full animate-pulse bg-brand/10 rounded-xl" />
  }
);
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const services = [
  {
    title: "High-Converting Websites",
    description:
      "Wildly fast, premium storefronts engineered to turn visitors into paying customers without friction.",
    stat: "3× Bookings",
    lottieUrl: "/lottie/Website.lottie",
  },
  {
    title: "Paid Advertising",
    description:
      "Hyper-targeted Meta & Google campaigns that scale leads predictably and profitably.",
    stat: "4.5× ROAS",
    lottieUrl: "/lottie/Marketing.lottie",
  },
  {
    title: "Local SEO Dominance",
    description:
      "Dominate the Google Maps pack so you're the undeniable #1 choice locals find first.",
    stat: "#1 Ranking",
    lottieUrl: "/lottie/SEO.lottie",
  },
  {
    title: "Social Media Growth",
    description:
      "Build omnipresence on Instagram & Facebook that captures attention and drives action.",
    stat: "+10k Followers",
    lottieUrl: "/lottie/Social_Bubble.lottie",
  },
  {
    title: "Brand Identity",
    description:
      "Premium visual systems, logos, and aesthetics that scream undeniable trust and authority.",
    stat: "100% Rebrand",
    lottieUrl: "/lottie/brand.lottie",
  },
];

// ── Shared Lottie Preview Component ──
function LottiePreview({ url, fallbackText }: { url: string; fallbackText: string }) {
  return (
    <div className="w-full h-full bg-surface-1 rounded-xl overflow-hidden flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />
      
      <div className="w-[85%] h-[85%] flex items-center justify-center relative z-10">
        <DotLottieReact
          src={url}
          loop
          autoplay
          worker={false}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

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

  const activeService = services[active];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-surface-1 to-[#F2F4F7] relative overflow-hidden"
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

          {/* RIGHT: Animated Visual Preview (Desktop: sticky, Mobile: static) */}
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
                  <LottiePreview url={activeService.lottieUrl} fallbackText={activeService.title} />
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
