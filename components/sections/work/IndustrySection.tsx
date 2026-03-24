"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import CaseStudyCard, { CaseStudyData } from "@/components/ui/CaseStudyCard";

interface IndustrySectionProps {
  industry: string;
  title: string;
  description: string;
  caseStudies: CaseStudyData[];
  alternatingBackground?: boolean;
}

export default function IndustrySection({
  industry,
  title,
  description,
  caseStudies,
  alternatingBackground = false,
}: IndustrySectionProps) {
  return (
    <section 
      className={`py-20 md:py-32 relative overflow-hidden ${
        alternatingBackground 
          ? "bg-gradient-to-b from-surface-1 to-[#F2F4F7]" 
          : "bg-surface-0"
      }`}
    >
      <div className="section-container relative z-10">
        {/* Header (Same style as Services.tsx) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 md:mb-16"
        >
          <SectionEyebrow label={industry.toUpperCase()} />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4 mb-4">
            {title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-2xl">
            {description}
          </p>
        </motion.div>

        {/* Grid System (Same matching grid layout as PremiumWorkDisplay) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
          {caseStudies.map((project, index) => (
            <CaseStudyCard key={project.business} data={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
