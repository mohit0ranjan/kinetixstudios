"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  X,
  Check,
  Sparkles,
  Eye,
  Trash2,
  Layers,
  Palette,
  Target,
  Search,
  BarChart3,
  Share2,
  PenTool,
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  fadeUp,
  staggerContainer,
  scaleFade,
  viewportOnce,
  ease,
  buttonPress,
} from "@/lib/motion";
import CTA from "@/components/sections/CTA";

/* ================================================================
   REAL CLIENT IMAGES — Cloudinary
   ================================================================ */

/* Problem graphics (cluttered coaching posters) */
const problemGraphics = [
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463140/g5_whflrl.jpg", alt: "Cluttered coaching poster with too many colors, fonts and elements", name: "GlowNest Coaching" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463140/g4_vcklh3.jpg", alt: "Overcrowded institute flyer with no visual hierarchy", name: "UrbanEdge Academy" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463140/g3_gz8v8i.jpg", alt: "Generic coaching ad with random design elements", name: "BrightPath Institute" },
];

/* Problem websites (screenshots of bad coaching sites) */
const problemWebsites = [
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463142/pr1_cldxz0.png", alt: "Cluttered coaching website with information overload", name: "Apex Classes" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463142/pr2_vtwmym.png", alt: "Outdated coaching website with poor design", name: "Scholar Hub" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774463142/pr3_ok9hpi.png", alt: "Generic coaching website with no brand identity", name: "EduFirst Academy" },
];

/* Solution designs (Kinetix redesigns) */
const solutionDesigns = [
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png", alt: "Kinetix premium coaching website redesign", name: "Apex Scholars" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465925/Screenshot_2026-03-25_233741_rqtxac.png", alt: "Clean modern coaching website by Kinetix", name: "Scholar Hub" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465924/Screenshot_2026-03-25_233724_enp5xm.png", alt: "Premium education brand website by Kinetix", name: "EduFirst Academy" },
];

const approachSteps = [
  { icon: Eye, title: "Audit", desc: "Find conversion killers" },
  { icon: Trash2, title: "Declutter", desc: "Remove 70% noise" },
  { icon: Layers, title: "Hierarchy", desc: "Structure the message" },
  { icon: Palette, title: "Brand", desc: "Premium identity system" },
  { icon: Target, title: "Convert", desc: "Optimize for admissions" },
];

const seoServices = [
  { icon: Search, title: "Local SEO", stat: "#1 Ranking" },
  { icon: BarChart3, title: "Google & Meta Ads", stat: "4.5× ROAS" },
  { icon: Share2, title: "Social Media", stat: "+10k Reach" },
  { icon: PenTool, title: "Brand Identity", stat: "Full Rebrand" },
];

/* ================================================================
   BROWSER FRAME COMPONENT — wraps real screenshots
   ================================================================ */

function BrowserFrame({ children, url, variant }: { children: React.ReactNode; url: string; variant: "bad" | "good" }) {
  const isBad = variant === "bad";
  return (
    <div className={`w-full flex flex-col rounded-2xl overflow-hidden shadow-xl border-2 ${isBad ? "border-red-200/80" : "border-emerald-200/80"} bg-white`}>
      <div className="h-8 md:h-9 bg-gradient-to-b from-[#e8e8e8] to-[#d4d4d4] border-b border-black/12 flex items-center px-3 gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
        </div>
        <div className="flex-1 h-4 bg-white rounded-md ml-4 mr-10 flex items-center px-2 shadow-inner border border-black/8">
          <span className="text-[7px] text-gray-400 font-medium truncate">{url}</span>
        </div>
      </div>
      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ================================================================
   HERO SECTION
   ================================================================ */

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-surface-1 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 50% at 75% 20%, rgba(255,106,0,0.05), transparent), radial-gradient(ellipse 50% 40% at 15% 75%, rgba(99,102,241,0.03), transparent)`,
      }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[10%] w-[500px] h-[500px] bg-brand/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="visible" className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5">
                <Sparkles size={13} className="text-brand" />
                <span className="text-[11px] font-bold text-text-secondary tracking-widest uppercase">Education & Coaching</span>
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1] tracking-[-0.03em] font-black text-text-primary mb-6">
              Stop Looking Like a <span className="font-display italic text-brand">Local Coaching Ad</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg font-medium text-text-secondary max-w-md mb-8 leading-relaxed">
              Premium creatives that bring <span className="text-text-primary font-bold">admissions</span>, not just impressions.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a href="/contact" {...buttonPress}
                className="group relative flex items-center gap-3 bg-surface-dark text-text-inverse px-7 py-4 font-bold text-[15px] rounded-xl shadow-button hover:shadow-button-hover transition-shadow overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                Upgrade My Creatives <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a href="#showcase" {...buttonPress} className="flex items-center gap-2 text-text-secondary hover:text-brand px-5 py-4 font-bold text-[15px] transition-colors">See Examples</motion.a>
            </motion.div>
          </motion.div>

          {/* Hero — Real Website Mockups */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[440px] xl:h-[500px]">
            <motion.div initial={{ opacity: 0, y: 30, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 0.8, delay: 0.4, ease: ease.out }}>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-full">
                <div className="relative h-full">
                  <BrowserFrame url="🔒 coachingclasses-jee-neet.example.com" variant="bad">
                    <div className="relative w-full h-[340px] xl:h-[400px] overflow-hidden">
                      <Image src={problemWebsites[0].src} alt={problemWebsites[0].alt} fill className="object-cover object-top" sizes="400px"  />
                    </div>
                  </BrowserFrame>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white z-10">❌ {problemWebsites[0].name}</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 0.8, delay: 0.6, ease: ease.out }}>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="h-full">
                <div className="relative h-full">
                  <BrowserFrame url="🔒 apexscholars.edu.in" variant="good">
                    <div className="relative w-full h-[340px] xl:h-[400px] overflow-hidden">
                      <Image src={solutionDesigns[0].src} alt={solutionDesigns[0].alt} fill className="object-cover object-top" sizes="400px"  />
                    </div>
                  </BrowserFrame>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white z-10">✅ {solutionDesigns[0].name}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile hero mockups */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-4">
            <div className="relative">
              <BrowserFrame url="coaching.example.com" variant="bad">
                <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden">
                  <Image src={problemWebsites[0].src} alt={problemWebsites[0].alt} fill className="object-cover object-top" sizes="200px"  />
                </div>
              </BrowserFrame>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] font-black px-2.5 py-0.5 rounded-full border border-white shadow-md z-10">❌ {problemWebsites[0].name}</div>
            </div>
            <div className="relative">
              <BrowserFrame url="apexscholars.edu.in" variant="good">
                <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden">
                  <Image src={solutionDesigns[0].src} alt={solutionDesigns[0].alt} fill className="object-cover object-top" sizes="200px"  />
                </div>
              </BrowserFrame>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[8px] font-black px-2.5 py-0.5 rounded-full border border-white shadow-md z-10">✅ {solutionDesigns[0].name}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   POSTER GALLERY — Real problem posters
   ================================================================ */

function PosterShowcase() {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="THE PROBLEM" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            This is what most coaching ads <span className="font-display italic text-brand">actually</span> look like
          </h2>
          <p className="text-text-tertiary mt-4 max-w-lg mx-auto">Too many colors. Too much text. Zero brand. Sound familiar?</p>
        </motion.div>

        {/* Problem Graphics Grid */}
        <motion.div variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto mb-16 md:mb-20">
          {problemGraphics.map((img, i) => (
            <motion.div key={i} variants={scaleFade} className="group relative rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw"  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-red-500/30 border border-red-400/40 text-white shadow-sm">
                  ❌ Problem
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-[13px] font-bold tracking-tight drop-shadow-lg">{img.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow transition */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-card border border-black/5">
            <span className="text-red-400 text-sm font-bold">Cluttered & Generic</span>
            <span className="text-brand font-black text-xl">→</span>
            <span className="text-emerald-600 text-sm font-bold">Premium & Converting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   WEBSITE COMPARISON — Real Before/After screenshots
   ================================================================ */

function WebsiteComparison() {
  return (
    <section className="py-20 md:py-32 bg-surface-1 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="WEBSITE REDESIGN" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Real websites, <span className="font-display italic text-brand">real results</span>
          </h2>
        </motion.div>

        {/* Before/After Pairs */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          {problemWebsites.map((problem, i) => (
            <motion.div key={i} variants={staggerContainer(0.15, 0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
              {/* Before */}
              <motion.div variants={scaleFade} className="bg-white rounded-2xl border border-black/5 shadow-card p-3 md:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center"><X size={14} className="text-red-500" /></div>
                    <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.12em]">Before</span>
                  </div>
                  <span className="text-[11px] font-bold text-text-tertiary">{problem.name}</span>
                </div>
                <BrowserFrame url={`coaching-website-${i + 1}.example.com`} variant="bad">
                  <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
                    <Image src={problem.src} alt={problem.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw"  />
                  </div>
                </BrowserFrame>
              </motion.div>

              {/* After */}
              <motion.div variants={scaleFade} className="bg-white rounded-2xl border border-black/5 shadow-card p-3 md:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center"><Check size={14} className="text-emerald-500" /></div>
                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.12em]">After — Kinetix</span>
                  </div>
                  <span className="text-[11px] font-bold text-text-tertiary">{solutionDesigns[i].name}</span>
                </div>
                <BrowserFrame url="kinetix-redesign.com" variant="good">
                  <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
                    <Image src={solutionDesigns[i].src} alt={solutionDesigns[i].alt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw"  />
                  </div>
                </BrowserFrame>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   APPROACH / PROCESS
   ================================================================ */

function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="OUR PROCESS" center />
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Not design. <span className="font-display italic text-brand">Conversion design.</span>
          </h2>
        </motion.div>
        <motion.div variants={staggerContainer(0.08, 0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
          {approachSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} variants={fadeUp}
                className="group flex flex-col items-center gap-3 bg-white rounded-2xl border border-black/5 shadow-card p-5 md:p-6 w-[140px] md:w-[160px] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 rounded-2xl bg-surface-1 group-hover:bg-brand/10 flex items-center justify-center transition-colors duration-500">
                  <Icon size={20} className="text-text-secondary group-hover:text-brand transition-colors duration-500" />
                </div>
                <div className="text-center">
                  <p className="text-[14px] font-bold text-text-primary">{step.title}</p>
                  <p className="text-[11px] font-medium text-text-tertiary mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SEO SERVICES
   ================================================================ */

function SEOServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-surface-1 to-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10 md:mb-14">
          <SectionEyebrow label="WHAT WE DO" />
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Everything to <span className="font-display italic text-brand">dominate</span> online.
          </h2>
        </motion.div>
        <motion.div variants={staggerContainer(0.08, 0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {seoServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={fadeUp}
                className="group bg-white rounded-2xl border border-black/5 shadow-card p-5 md:p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 text-center">
                <div className="w-12 h-12 rounded-2xl bg-surface-1 group-hover:bg-brand/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-500">
                  <Icon size={22} className="text-text-secondary group-hover:text-brand transition-colors duration-500" />
                </div>
                <p className="text-[15px] font-bold text-text-primary mb-1">{s.title}</p>
                <span className="text-[11px] font-bold text-brand bg-brand/8 px-2.5 py-1 rounded-full">{s.stat}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   MINDSET
   ================================================================ */

function MindsetSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-0">
      <div className="section-container">
        <motion.div variants={scaleFade} initial="hidden" whileInView="visible" viewport={viewportOnce} className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-black/5 shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/5">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center"><X size={14} className="text-red-400" /></div>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.15em]">Old Mindset</span>
                </div>
                <p className="text-[17px] md:text-[19px] font-medium text-text-tertiary line-through decoration-red-300/30 decoration-2">
                  &ldquo;Show everything in one poster&rdquo;
                </p>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center"><Sparkles size={14} className="text-brand" /></div>
                  <span className="text-[10px] font-black text-brand uppercase tracking-[0.15em]">Kinetix</span>
                </div>
                <p className="text-[17px] md:text-[19px] font-bold text-text-primary">
                  &ldquo;Show only what <span className="text-brand">converts</span>&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   MAIN
   ================================================================ */

export default function EducationLanding() {
  return (
    <main className="font-sans bg-surface-1 pt-20 md:pt-24">
      <HeroSection />
      <PosterShowcase />
      <WebsiteComparison />
      <ApproachSection />
      <SEOServicesSection />
      <MindsetSection />
      <CTA />
    </main>
  );
}
