"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  Check,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  fadeUp,
  staggerContainer,
  scaleFade,
  viewportOnce,
  ease,
  duration,
} from "@/lib/motion";

// ── Industry Data ──────────────────────────────────────────

type Industry = {
  id: string;
  label: string;
  icon: LucideIcon;
  problems: string[];
  solutions: string[];
  cta: string;
};

const industries: Industry[] = [
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    problems: [
      "Too much information crammed in",
      "No student trust signals",
      "Looks like cheap local ads",
      "No clear call-to-action",
      "Zero brand identity",
    ],
    solutions: [
      "Clean admission-focused creatives",
      "Trust-building social proof visuals",
      "Premium institute branding",
      "Single powerful CTA",
      "Distinctive brand system",
    ],
    cta: "Upgrade Your Institute's Creatives",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    problems: [
      "No credibility or authority signals",
      "Poor visual quality & low resolution",
      "Overcrowded, cluttered posters",
      "No patient trust design",
      "Generic stock-photo feel",
    ],
    solutions: [
      "Authority-based medical design",
      "Crystal-clear HD visuals",
      "Clean, focused messaging",
      "Trust-first patient design",
      "Authentic brand photography",
    ],
    cta: "Make Your Practice Look Premium",
  },
  {
    id: "commerce",
    label: "Commerce",
    icon: Briefcase,
    problems: [
      "Generic, boring creatives",
      "No market differentiation",
      "Weak personal branding",
      "Outdated visual language",
      "Low-trust layout patterns",
    ],
    solutions: [
      "Strong personal brand visuals",
      "Modern premium layouts",
      "Clear brand positioning",
      "Contemporary design system",
      "High-conversion trust design",
    ],
    cta: "Elevate Your Brand Visuals",
  },
];

// ── Tab Switcher ───────────────────────────────────────────

function IndustryTabs({
  active,
  onChange,
}: {
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 p-1.5 bg-surface-1 rounded-2xl border border-black/5 w-fit mx-auto md:mx-0">
      {industries.map((ind, i) => {
        const Icon = ind.icon;
        const isActive = active === i;
        return (
          <button
            key={ind.id}
            onClick={() => onChange(i)}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors duration-300 cursor-pointer ${
              isActive
                ? "text-text-primary"
                : "text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
              />
            )}
            <Icon size={15} className="relative z-10" />
            <span className="relative z-10 hidden sm:inline">{ind.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Problem/Solution Column ────────────────────────────────

function ComparisonColumn({
  type,
  items,
  index,
}: {
  type: "problem" | "solution";
  items: string[];
  index: number;
}) {
  const isProblem = type === "problem";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: isProblem ? 0.05 : 0.15,
        ease: ease.out,
      }}
      className="flex-1"
    >
      {/* Column Header */}
      <div
        className={`flex items-center gap-2.5 mb-6 ${
          isProblem ? "text-red-500" : "text-emerald-500"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isProblem
              ? "bg-red-500/10"
              : "bg-emerald-500/10"
          }`}
        >
          {isProblem ? <X size={16} /> : <Check size={16} />}
        </div>
        <span className="text-[12px] font-black uppercase tracking-[0.15em]">
          {isProblem ? "What's Going Wrong" : "What We Fix"}
        </span>
      </div>

      {/* Bullet Items */}
      <ul className="space-y-3.5">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: isProblem ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.2 + i * 0.06,
              ease: ease.out,
            }}
            className="flex items-start gap-3 group"
          >
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                isProblem ? "bg-red-400/60" : "bg-emerald-400/60"
              }`}
            />
            <span
              className={`text-[14px] md:text-[15px] font-medium leading-relaxed ${
                isProblem
                  ? "text-text-secondary"
                  : "text-text-primary"
              }`}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────

export default function TransformationShowcase() {
  const [active, setActive] = useState(0);
  const currentIndustry = industries[active];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-surface-0 to-surface-1 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/[0.015] rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 md:mb-14"
        >
          <SectionEyebrow label="TRANSFORMATION" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4 mb-4">
            Why your ads{" "}
            <span className="font-display italic text-brand">don&apos;t</span>{" "}
            convert.
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl">
            Most businesses burn money on cluttered, low-trust creatives. We
            turn them into premium brand assets that actually drive results.
          </p>
        </motion.div>

        {/* ── Industry Tabs ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={0.1}
          className="mb-8 md:mb-10"
        >
          <IndustryTabs active={active} onChange={setActive} />
        </motion.div>

        {/* ── Comparison Card ── */}
        <motion.div
          variants={scaleFade}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={0.15}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndustry.id}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.4, ease: ease.out }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-black/5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 relative">
                {/* Problem Side */}
                <div className="p-6 md:p-10 bg-gradient-to-br from-red-50/40 to-transparent relative">
                  {/* Subtle red wash top-left */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/[0.03] rounded-full blur-[60px] pointer-events-none" />
                  <ComparisonColumn
                    type="problem"
                    items={currentIndustry.problems}
                    index={active}
                  />
                </div>

                {/* Divider */}
                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
                <div className="md:hidden mx-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

                {/* Solution Side */}
                <div className="p-6 md:p-10 bg-gradient-to-br from-transparent to-emerald-50/40 relative">
                  {/* Subtle green wash bottom-right */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/[0.03] rounded-full blur-[60px] pointer-events-none" />
                  <ComparisonColumn
                    type="solution"
                    items={currentIndustry.solutions}
                    index={active}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Transformation Tagline ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={0.25}
          className="mt-10 md:mt-14 flex flex-col items-center text-center gap-6"
        >
          <p className="text-[15px] md:text-[17px] font-semibold text-text-secondary">
            From cluttered ads{" "}
            <span className="inline-block mx-2 text-brand font-black">→</span>{" "}
            to{" "}
            <span className="text-text-primary font-bold">
              premium brand visuals that convert
            </span>
          </p>

          {/* CTA */}
          <AnimatePresence mode="wait">
            <motion.a
              key={currentIndustry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: ease.out }}
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-surface-dark text-white text-[14px] font-bold px-6 py-3.5 rounded-xl hover:bg-brand transition-colors duration-400 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(255,106,0,0.3)]"
            >
              {currentIndustry.cta}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.a>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
