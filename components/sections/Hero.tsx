"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
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

// Fan-spread card positions: percentage-based to stay within container
const floatingCards = [
  {
    title: "GlobalWay Visa",
    tag: "Brand Identity",
    metric: "Full Rebrand",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465924/Screenshot_2026-03-25_233724_enp5xm.png",
    rotation: -12,
    top: "2%",
    left: "-4%",
    zIndex: 2,
    delay: 0.7,
  },
  {
    title: "PureGlow Derma",
    tag: "Web Design",
    metric: "+210% Traffic",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465925/Screenshot_2026-03-25_233741_rqtxac.png",
    rotation: -6,
    top: "52%",
    left: "-2%",
    zIndex: 3,
    delay: 0.6,
  },
  {
    title: "Apex Scholars",
    tag: "Local SEO",
    metric: "#1 Ranking",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465926/Screenshot_2026-03-25_233702_w5a4eg.png",
    rotation: 8,
    top: "0%",
    left: "54%",
    zIndex: 3,
    delay: 0.65,
  },
  {
    title: "BrewBite Café",
    tag: "Social Media",
    metric: "450% ROI",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465926/Screenshot_2026-03-25_233625_qxpqni.png",
    rotation: 10,
    top: "55%",
    left: "52%",
    zIndex: 4,
    delay: 0.55,
  },
  {
    title: "GlowNest Studio",
    tag: "Web Design",
    metric: "+180% Traffic",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png",
    rotation: 0,
    top: "14%",
    left: "16%",
    zIndex: 5,
    delay: 0.4,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
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
              className="text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] font-sans font-black text-text-primary mb-6"
            >
              <motion.span variants={heroWord} className="inline-block mr-[0.25em]">Great</motion.span>
              <motion.span variants={heroWord} className="inline-block mr-[0.25em]">offline.</motion.span>
              <br />
              <motion.span variants={heroWord} className="inline-block mr-[0.25em]">Let&apos;s</motion.span>
              <motion.span variants={heroWord} className="inline-block mr-[0.25em]">make</motion.span>
              <motion.span variants={heroWord} className="inline-block mr-[0.25em]">you</motion.span>
              <motion.span
                variants={heroWord}
                className="inline-block font-display italic text-brand relative mr-[0.25em]"
              >
                unstoppable
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: ease.out }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-brand/30 rounded-full origin-left"
                />
              </motion.span>
              <motion.span variants={heroWord} className="inline-block">
                online.
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

            {/* Trust badge */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex items-center justify-center sm:justify-start gap-5"
            >
              <div className="flex -space-x-3">
                {['A', 'S', 'P', 'G'].map((initial, i) => (
                  <div key={i} style={{ zIndex: 10 - i }} className={`relative w-9 h-9 rounded-full border-[3px] border-surface-1 bg-gradient-to-br flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden`} >
                    <span className="absolute inset-0 bg-brand/90 pointer-events-none" />
                    <span className="relative z-10">{initial}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-0.5 text-[#FFB800]">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-[14px] h-[14px] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-[12px] font-bold text-text-secondary/80">Trusted by <span className="text-text-primary">50+</span> businesses</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating Cards Fan (desktop only) ── */}
          <div className="hidden lg:block relative h-[500px] xl:h-[560px]">
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotation, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{
                  position: "absolute",
                  top: card.top,
                  left: card.left,
                  zIndex: card.zIndex,
                }}
                className="cursor-pointer group"
              >
                {/* Continuous float */}
                <motion.div
                  animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }}
                  transition={{
                    duration: 5 + idx * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.4,
                  }}
                  style={{ x: px, y: py }}
                >
                  <div
                    className="bg-white rounded-[18px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-black/[0.06] overflow-hidden transition-all duration-500 group-hover:shadow-[0_25px_65px_-10px_rgba(0,0,0,0.22)] group-hover:scale-[1.03] w-[220px] xl:w-[250px]"
                  >
                    {/* Screenshot */}
                    <div className="relative w-full h-[140px] xl:h-[155px] overflow-hidden bg-surface-1">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Card info */}
                    <div className="px-3 py-2.5 bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] xl:text-[10px] font-bold text-brand uppercase tracking-[0.15em]">
                          {card.tag}
                        </span>
                        <span className="text-[9px] xl:text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                          {card.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ── Mobile: Horizontal Scroll Preview ── */}
          <div className="lg:hidden w-full relative mt-12 pb-8 flex flex-col items-center overflow-hidden">
            <div className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-6 pt-2 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: ease.out }}
                  className="snap-center shrink-0 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden w-[280px] max-w-[85vw] flex flex-col items-start"
                >
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-surface-1 overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover" sizes="280px" />
                  </div>
                  <div className="p-4 w-full text-left bg-white relative z-10 border-t border-black/5 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em]">
                        {card.tag}
                      </span>
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                        {card.metric}
                      </span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Gradient indicator for scroll */}
            <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-surface-1 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-surface-1 to-transparent pointer-events-none" />
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
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-10 md:gap-14 px-5"
            >
              {marqueeItems.map((name, i) => (
                <div key={i} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap group">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-surface-2 border border-black/5 flex items-center justify-center text-[12px] md:text-[14px] font-black text-brand tracking-tighter group-hover:bg-brand/10 transition-colors">
                    {name.charAt(0)}
                  </div>
                  <span className="text-[12px] md:text-[14px] font-bold text-text-tertiary capitalize tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
