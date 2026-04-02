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
  Stethoscope,
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
   DATA — Verified-working URLs only
   ================================================================ */

const badExamples = [
  { src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80", alt: "Generic hospital corridor — typical clinic advertising imagery" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", alt: "Outdated medical facility hallway — common clinic website look" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80", alt: "Clinical lab stock photo — generic healthcare imagery" },
  { src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80", alt: "Sterile clinic waiting room — uninspiring medical design" },
];

const goodExamples = [
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465925/Screenshot_2026-03-25_233741_rqtxac.png", alt: "PureGlow Derma - Premium Clinic Website" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466848/9a5de1ea-09b8-480e-ad14-d74e5e548fb4.png", alt: "OHCC Clinic - High-conversion digital presence" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466867/ff089954-6c93-49d4-b2e9-69de8701b61c.png", alt: "Smilecraft Dental - Trust-building aesthetic" },
  { src: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465928/Screenshot_2026-03-25_233644_jyxhtc.png", alt: "Aesthetic Studio - Luxury patient acquisition" },
];

const approachSteps = [
  { icon: Eye, title: "Audit", desc: "Find trust killers" },
  { icon: Trash2, title: "Simplify", desc: "Remove 80% clutter" },
  { icon: Layers, title: "Trust", desc: "Credibility-first design" },
  { icon: Palette, title: "Brand", desc: "Medical-grade identity" },
  { icon: Target, title: "Convert", desc: "Drive appointments" },
];

const seoServices = [
  { icon: Search, title: "Medical SEO", stat: "#1 Local" },
  { icon: BarChart3, title: "Patient Ads", stat: "3× Bookings" },
  { icon: Share2, title: "Social Trust", stat: "+15k Reach" },
  { icon: PenTool, title: "Clinic Branding", stat: "Full Identity" },
];

/* ================================================================
   ENHANCED CSS WEBSITE MOCKUPS
   ================================================================ */

const BadClinicWebsite = () => (
  <div className="w-full h-full flex flex-col bg-white rounded-2xl border-2 border-red-200/80 overflow-hidden shadow-xl">
    <div className="h-8 md:h-9 bg-gradient-to-b from-[#e8e8e8] to-[#d4d4d4] border-b border-black/15 flex items-center px-3 gap-2 shrink-0">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
      </div>
      <div className="flex-1 h-4 bg-white rounded-md ml-4 mr-10 flex items-center px-2 shadow-inner border border-black/8">
        <span className="text-[7px] text-gray-400 font-medium truncate">🔒 bestclinic-multispecialty.example.com</span>
      </div>
    </div>
    <div className="h-7 bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#0d47a1] flex items-center px-2 gap-[3px] shrink-0 overflow-hidden border-b border-[#0a3d8f]">
      {["HOME", "ABOUT US", "DOCTORS", "SERVICES", "SPECIALTIES", "GALLERY", "TESTIMONIALS", "INSURANCE", "CAREERS", "CONTACT"].map((t, i) => (
        <span key={i} className="text-[5px] md:text-[5.5px] text-white/75 font-bold whitespace-nowrap px-[2px]">{t}</span>
      ))}
    </div>
    <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden bg-[#fefefe]">
      <div className="h-4 bg-gradient-to-r from-green-600 to-green-700 flex items-center px-2 rounded-sm shadow-sm">
        <span className="text-[5px] md:text-[6px] text-white font-bold animate-pulse tracking-wide">🏥 24/7 EMERGENCY!! CALL NOW!! FREE CONSULTATION!! 🏥</span>
      </div>
      <div className="h-16 md:h-20 bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 rounded-sm flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="text-center relative z-10">
          <p className="text-[7px] md:text-[8px] text-yellow-300 font-black drop-shadow-lg">🏆 BEST HOSPITAL IN CITY 🏆</p>
          <p className="text-[5.5px] md:text-[6px] text-white font-bold mt-0.5">CARDIOLOGY | ORTHO | DENTAL | ENT | DERMA</p>
          <p className="text-[4px] md:text-[5px] text-green-300 mt-0.5">HELPLINE: 1800-XXX-XXX | 98765-43210</p>
        </div>
        <div className="absolute top-1 right-1 bg-gradient-to-br from-red-500 to-red-700 rounded-full w-8 h-8 md:w-9 md:h-9 flex items-center justify-center animate-bounce shadow-lg border-2 border-white/30">
          <div className="text-center">
            <span className="text-[4.5px] text-white font-black block leading-tight">FREE</span>
            <span className="text-[3.5px] text-yellow-200 font-black block">CHECKUP</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 flex-1 min-h-0">
        <div className="w-[30%] flex flex-col gap-1 shrink-0">
          <div className="bg-blue-50 rounded-sm p-1 border border-blue-200/50">
            <p className="text-[4px] font-black text-blue-800">📞 EMERGENCY</p>
            <p className="text-[3.5px] text-blue-700 mt-0.5">Ph: 1800-XXX-XXX</p>
            <p className="text-[3.5px] text-blue-700">Ph: 98765-43210</p>
          </div>
          <div className="bg-green-50 rounded-sm p-1 border border-green-200/50">
            <p className="text-[4px] font-black text-green-800">🩺 DEPARTMENTS</p>
            <p className="text-[3px] text-green-700 mt-0.5">• Cardiology</p>
            <p className="text-[3px] text-green-700">• Orthopedics</p>
            <p className="text-[3px] text-green-700">• Pediatrics</p>
            <p className="text-[3px] text-green-700">• ENT</p>
          </div>
          <div className="bg-red-600 rounded-sm p-1.5 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[4.5px] font-black text-white">BOOK</p>
              <p className="text-[4px] font-black text-yellow-300">NOW!!</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <div className="bg-blue-50/60 border border-blue-200/50 rounded-sm p-1.5">
            <p className="text-[5px] font-black text-blue-900">Welcome to Best Hospital!</p>
            <p className="text-[3.5px] text-gray-500 leading-relaxed mt-0.5">We provide world-class healthcare with state-of-the-art facilities and experienced doctors...</p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              { bg: "bg-blue-500", n: "50+", l: "Doctors" },
              { bg: "bg-green-500", n: "10k+", l: "Patients" },
              { bg: "bg-teal-500", n: "24/7", l: "Open" },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} rounded-sm h-7 md:h-8 flex flex-col items-center justify-center shadow-sm`}>
                <span className="text-[5px] md:text-[6px] text-white font-black">{s.n}</span>
                <span className="text-[3.5px] text-white/80 font-semibold">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GoodClinicWebsite = () => (
  <div className="w-full h-full flex flex-col bg-[#fafafa] rounded-2xl border-2 border-emerald-200/80 overflow-hidden shadow-xl">
    <div className="h-8 md:h-9 bg-gradient-to-b from-[#f5f5f5] to-[#ebebeb] border-b border-black/8 flex items-center px-3 gap-2 shrink-0">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
      </div>
      <div className="flex-1 h-4 bg-white rounded-md ml-4 mr-10 flex items-center px-2 shadow-inner border border-black/5">
        <span className="text-[7px] text-gray-400 font-medium truncate">🔒 ohccclinic.com</span>
      </div>
    </div>
    <div className="h-7 bg-white border-b border-black/[0.06] flex items-center justify-between px-4 shrink-0">
      <span className="text-[7px] font-black text-gray-900 tracking-tight">OHCC Clinic<span className="text-[#FF6A00]">.</span></span>
      <div className="flex items-center gap-3">
        {["Services", "Doctors", "About"].map((t, i) => (
          <span key={i} className="text-[5px] text-gray-500 font-semibold">{t}</span>
        ))}
        <div className="bg-[#0a0a0a] rounded-md px-2 py-[3px] shadow-sm">
          <span className="text-[5px] text-white font-bold">Book Visit</span>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center gap-2 px-5 py-4 bg-gradient-to-b from-[#f8f9fc] to-[#f2f3f8]">
      <div className="flex items-center gap-1.5 bg-white border border-black/5 rounded-full px-2.5 py-[3px] shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
        <span className="text-[4.5px] text-gray-500 font-semibold tracking-wide">Trusted by 10,000+ patients</span>
      </div>
      <p className="text-[11px] md:text-[13px] font-black text-[#0a0a0a] text-center leading-[1.1] tracking-tight">
        Healthcare that<br /><span className="text-[#FF6A00] italic font-display">cares.</span>
      </p>
      <p className="text-[5px] text-gray-400 text-center font-medium max-w-[80%]">Expert doctors. Modern facilities. Seamless booking.</p>
      <div className="flex gap-1.5 mt-1">
        <div className="bg-[#0a0a0a] rounded-lg px-3 py-1.5 shadow-md">
          <span className="text-[5px] text-white font-bold">Book Appointment →</span>
        </div>
        <div className="border border-black/10 rounded-lg px-3 py-1.5 bg-white">
          <span className="text-[5px] text-gray-500 font-semibold">WhatsApp Us</span>
        </div>
      </div>
      <div className="flex gap-2.5 mt-3 w-full max-w-[85%]">
        {[
          { n: "50+", l: "Doctors" },
          { n: "10k+", l: "Patients" },
          { n: "4.9★", l: "Rating" },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-black/[0.05] p-2 text-center shadow-sm">
            <p className="text-[8px] md:text-[9px] font-black text-[#0a0a0a]">{s.n}</p>
            <p className="text-[4px] text-gray-400 font-semibold">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ================================================================
   SECTIONS
   ================================================================ */

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-surface-1 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 50% at 75% 20%, rgba(255,106,0,0.05), transparent), radial-gradient(ellipse 50% 40% at 15% 75%, rgba(59,130,246,0.04), transparent)`,
      }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[10%] w-[360px] h-[360px] md:w-[500px] md:h-[500px] bg-brand/8 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="visible" className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5">
                <Stethoscope size={13} className="text-brand" />
                <span className="text-[11px] font-bold text-text-secondary tracking-widest uppercase">Healthcare & Clinics</span>
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1] tracking-[-0.03em] font-black text-text-primary mb-6">
              Your clinic deserves a <span className="font-display italic text-brand">premium</span> presence
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg font-medium text-text-secondary max-w-md mb-8 leading-relaxed">
              Trust-building creatives that bring <span className="text-text-primary font-bold">patients</span>, not just clicks.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a href="/contact" {...buttonPress}
                className="group relative flex items-center gap-3 bg-surface-dark text-text-inverse px-7 py-4 font-bold text-[15px] rounded-xl shadow-button hover:shadow-button-hover transition-shadow overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                Upgrade My Clinic <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a href="#showcase" {...buttonPress} className="flex items-center gap-2 text-text-secondary hover:text-brand px-5 py-4 font-bold text-[15px] transition-colors">See Examples</motion.a>
            </motion.div>
          </motion.div>
          <div className="hidden lg:grid grid-cols-2 gap-5 h-[440px] xl:h-[500px]">
            <motion.div initial={{ opacity: 0, y: 30, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 0.8, delay: 0.4, ease: ease.out }}>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-full">
                <div className="relative h-full"><BadClinicWebsite /><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white">❌ Before</div></div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 0.8, delay: 0.6, ease: ease.out }}>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="h-full">
                <div className="relative h-full"><GoodClinicWebsite /><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white">✅ Kinetix</div></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:hidden grid grid-cols-2 gap-3 h-[260px] mt-4">
            <div className="relative"><BadClinicWebsite /><div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] font-black px-2.5 py-0.5 rounded-full border border-white shadow-md">❌ Before</div></div>
            <div className="relative"><GoodClinicWebsite /><div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[8px] font-black px-2.5 py-0.5 rounded-full border border-white shadow-md">✅ After</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, alt, type }: { src: string; alt: string; type: "bad" | "good" }) {
  const isBad = type === "bad";
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
      <div className="aspect-[3/4] relative">
        <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 45vw, 22vw"  />
        <div className={`absolute inset-0 ${isBad ? "bg-gradient-to-t from-red-950/60 via-red-950/10 to-transparent" : "bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"}`} />
        <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider backdrop-blur-md border shadow-sm ${isBad ? "bg-red-500/30 border-red-400/40 text-white" : "bg-emerald-500/30 border-emerald-400/40 text-white"}`}>
          {isBad ? "❌ Problem" : "✅ Kinetix"}
        </div>
      </div>
    </div>
  );
}

function PosterShowcase() {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="CLINIC CREATIVES" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            See the <span className="font-display italic text-brand">Difference</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div variants={staggerContainer(0.08, 0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center"><X size={16} className="text-red-500" /></div>
              <h3 className="text-[13px] font-black text-red-500 uppercase tracking-[0.12em]">Generic Clinic Ads</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {badExamples.map((img, i) => (<motion.div key={i} variants={scaleFade} custom={i * 0.05}><ImageCard src={img.src} alt={img.alt} type="bad" /></motion.div>))}
            </div>
          </motion.div>
          <motion.div variants={staggerContainer(0.08, 0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center"><Check size={16} className="text-emerald-500" /></div>
              <h3 className="text-[13px] font-black text-emerald-600 uppercase tracking-[0.12em]">Kinetix Standard</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {goodExamples.map((img, i) => (<motion.div key={i} variants={scaleFade} custom={i * 0.05}><ImageCard src={img.src} alt={img.alt} type="good" /></motion.div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WebsiteComparison() {
  return (
    <section className="py-20 md:py-32 bg-surface-1 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="WEBSITE DESIGN" center />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Websites patients <span className="font-display italic text-brand">trust</span>
          </h2>
        </motion.div>
        <motion.div variants={scaleFade} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl border border-black/5 shadow-card p-4 md:p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center"><X size={15} className="text-red-500" /></div>
              <span className="text-[12px] font-black text-red-500 uppercase tracking-[0.12em]">Before</span>
            </div>
            <div className="aspect-[4/3]"><BadClinicWebsite /></div>
          </div>
          <div className="bg-white rounded-2xl border border-black/5 shadow-card p-4 md:p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center"><Check size={15} className="text-emerald-500" /></div>
              <span className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.12em]">After — Kinetix</span>
            </div>
            <div className="aspect-[4/3]"><GoodClinicWebsite /></div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0.2}
          className="flex items-center justify-center gap-4 mt-10">
          <span className="text-text-tertiary text-sm font-medium">Cluttered</span>
          <span className="text-brand font-black text-xl">→</span>
          <span className="text-text-primary text-sm font-bold">Trust-Building & Clean</span>
        </motion.div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12 md:mb-16">
          <SectionEyebrow label="OUR PROCESS" center />
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Not design. <span className="font-display italic text-brand">Trust design.</span>
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

function SEOServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-surface-1 to-surface-0 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10 md:mb-14">
          <SectionEyebrow label="WHAT WE DO" />
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
            Everything to <span className="font-display italic text-brand">grow</span> your practice.
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
                  &ldquo;List every service and department&rdquo;
                </p>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center"><Sparkles size={14} className="text-brand" /></div>
                  <span className="text-[10px] font-black text-brand uppercase tracking-[0.15em]">Kinetix</span>
                </div>
                <p className="text-[17px] md:text-[19px] font-bold text-text-primary">
                  &ldquo;Build <span className="text-brand">trust</span> before the first visit&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HealthcareLanding() {
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
