"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  heroContainer,
  heroItem,
  heroWordReveal,
  heroWord,
  ease,
  buttonPress,
  viewportOnce,
} from "@/lib/motion";

const headlineWords = ["Great", "offline,", "but"];

const clientNames = [
  "GlowNest Studio",
  "UrbanEdge Salon",
  "BrewBite Café",
  "Apex Scholars",
  "GlobalWay Visa",
  "PureGlow Derma",
  "FitZone Gym",
  "Smilecraft Dental",
];
const marqueeItems = [...clientNames, ...clientNames];

// Floating card data
const floatingCards = [
  {
    title: "GlowNest Studio",
    tag: "Web Design",
    metric: "+180% Traffic",
    image: "/portoflio/GlowWeb.png",
    type: "image",
    rotation: -6,
    position: { top: "4%", right: "8%" },
    size: "large" as const,
    delay: 0.4,
  },
  {
    title: "Apex Scholars",
    tag: "Local SEO",
    metric: "#1 Ranking",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    type: "image",
    rotation: 4,
    position: { top: "38%", right: "-2%" },
    size: "small" as const,
    delay: 0.6,
  },
  {
    title: "BrewBite Café",
    tag: "Social Media",
    metric: "450% ROI",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    type: "image",
    rotation: -3,
    position: { top: "62%", right: "16%" },
    size: "small" as const,
    delay: 0.8,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth spring for parallax
  const springConfig = { stiffness: 50, damping: 30, mass: 1 };
  const px = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const py = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100svh-4rem)] w-full bg-surface-1 text-text-primary flex flex-col overflow-hidden"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 75% 20%, rgba(255,106,0,0.06), transparent),
            radial-gradient(ellipse 50% 40% at 15% 75%, rgba(99,102,241,0.04), transparent),
            radial-gradient(ellipse 30% 25% at 50% 50%, rgba(255,106,0,0.025), transparent)
          `,
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[10%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[5%] left-[-5%] w-[250px] h-[250px] bg-indigo-400/8 rounded-full blur-[100px] pointer-events-none"
      />

      {/* ─── Main content ─── */}
      <div className="section-container relative z-10 flex-grow flex items-center pt-20 md:pt-24 pb-8 md:pb-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 mb-7 md:mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-bold text-text-secondary tracking-widest uppercase">
                Digital Marketing Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroWordReveal}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1] tracking-[-0.03em] font-sans font-black text-text-primary mb-6"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={heroWord} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                variants={heroWord}
                className="inline-block font-display italic text-brand relative mr-[0.25em]"
              >
                invisible
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: ease.out }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-brand/30 rounded-full origin-left"
                />
              </motion.span>
              <motion.span variants={heroWord} className="inline-block">
                online?
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={heroItem}
              className="text-base md:text-lg font-medium text-text-secondary max-w-md mb-8 md:mb-10 leading-relaxed"
            >
              We help local businesses grow with high-converting websites, ads, and SEO systems that bring{" "}
              <span className="text-text-primary font-bold">real customers</span>.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4"
            >
              <motion.a
                href="/contact"
                {...buttonPress}
                className="group relative flex items-center justify-center gap-3 bg-surface-dark text-text-inverse px-7 py-4 md:px-8 md:py-4 font-bold text-[15px] md:text-base rounded-xl shadow-[0_8px_30px_rgba(10,10,10,0.25),inset_0_-3px_0_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(10,10,10,0.35),inset_0_-2px_0_rgba(0,0,0,0.4)] transition-shadow duration-200 overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="/work"
                {...buttonPress}
                className="flex items-center justify-center gap-2 text-text-secondary hover:text-brand px-5 py-4 font-bold text-[15px] transition-colors w-full sm:w-auto"
              >
                View Our Work
                <ExternalLink size={15} />
              </motion.a>
            </motion.div>

            {/* Trust badge - Removed the generic 'Free Strategy Session' for a more premium look. */}
          </motion.div>

          {/* ── Right: Floating Cards (desktop only) ── */}
          <div className="hidden lg:block relative h-[500px] xl:h-[560px]">
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotation }}
                transition={{
                  duration: 0.7,
                  delay: card.delay,
                  ease: ease.out,
                }}
                style={{
                  position: "absolute",
                  ...card.position,
                  x: px,
                  y: py,
                }}
                className="cursor-default"
              >
                {/* Continuous float */}
                <motion.div
                  animate={{ y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5,
                  }}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden ${
                      card.size === "large" ? "w-[300px] xl:w-[340px]" : "w-[240px] xl:w-[270px]"
                    }`}
                  >
                    {/* Media */}
                    <div
                      className={`relative w-full overflow-hidden flex items-center justify-center bg-surface-1 ${
                        card.size === "large" ? "h-[180px] xl:h-[200px]" : "h-[130px] xl:h-[150px]"
                      }`}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="340px"
                      />
                    </div>

                    {/* Card info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em]">
                          {card.tag}
                        </span>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          {card.metric}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-text-primary tracking-tight">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ── Mobile: Vertical Stack Preview ── */}
          <div className="lg:hidden w-full relative mt-12 pb-8 flex flex-col items-center">
            {floatingCards.map((card, idx) => {
              const isFirst = idx === 0;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.6, ease: ease.out }}
                  className={`bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden w-[280px] max-w-full flex flex-col items-start ${
                    !isFirst ? "-mt-[8rem]" : ""
                  }`}
                  style={{
                    scale: 1 - idx * 0.04,
                    zIndex: floatingCards.length - idx,
                  }}
                >
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-surface-1 overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover" sizes="280px" />
                  </div>
                  <div className="p-5 w-full text-left bg-white relative z-10 border-t border-black/5 flex flex-col gap-1.5 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em]">
                        {card.tag}
                      </span>
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                        {card.metric}
                      </span>
                    </div>
                    <h4 className="text-[15px] font-bold text-text-primary tracking-tight">{card.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ─── Logo Marquee ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: ease.out }}
        className="relative z-10 w-full pb-6 md:pb-8"
      >
        <p className="text-center text-[10px] md:text-[11px] font-bold text-text-tertiary/50 uppercase tracking-[0.2em] mb-4">
          Trusted by local businesses
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-surface-1 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-surface-1 to-transparent z-10 pointer-events-none" />
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-10 md:gap-14 px-5"
            >
              {marqueeItems.map((name, i) => (
                <span
                  key={i}
                  className="text-[12px] md:text-[14px] font-bold text-text-tertiary/40 uppercase tracking-[0.12em] select-none"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
