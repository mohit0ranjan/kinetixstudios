"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const team = [
  {
    name: "Mohit Ranjan",
    role: "Growth Strategist",
    image: "/team/Mohit Ranjan.png",
    quote: "Strategy without execution is just a dream.",
  },
  {
    name: "Aaryan",
    role: "System Architect & Developer",
    image: "/team/Aryan.jpeg",
    quote: "Clean systems scale infinitely.",
  },
  {
    name: "Nishant",
    role: "Developer",
    image: "/team/nishant.png",
    quote: "Ship fast, iterate faster.",
  },
  {
    name: "Nidhi Yadav",
    role: "Full Stack Developer",
    image: "/team/nidhi-yadav.png",
    quote: "Pixel-perfect is the minimum.",
  },
  {
    name: "Saumya",
    role: "UI/UX Designer",
    image: "/team/saumya.png",
    quote: "Design is how it works.",
  },
];

function TeamMember({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: ease.out }}
      className="group relative"
    >
      {/* Portrait */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-surface-1 mb-5">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
          className="object-cover object-center transition-transform duration-700 ease-out lg:group-hover:scale-105"
        />

        {/* Gradient overlay on hover — desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Quote — appears on hover, desktop only */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
          <p className="text-white/90 text-[13px] font-medium italic leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h3 className="text-[15px] md:text-base font-bold text-text-primary tracking-tight mb-0.5 lg:group-hover:text-brand transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[12px] md:text-[13px] text-text-tertiary font-medium">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-20 md:py-32 bg-surface-0 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(255,106,0,0.03), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16"
        >
          <div>
            <SectionEyebrow label="The Team" />
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight leading-[1.1] mt-4">
              NIT Jalandhar&apos;s{" "}
              <span className="text-brand font-display italic">Finest.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm md:text-base font-medium max-w-sm leading-relaxed md:text-right">
            A specialized crew of strategists, engineers &amp; creatives
            building the future of local business growth.
          </p>
        </motion.div>

        {/* ── Desktop: Offset Staggered Grid ── */}
        <div className="hidden md:grid grid-cols-5 gap-x-6 lg:gap-x-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={index % 2 === 1 ? "pt-12 lg:pt-16" : ""}
            >
              <TeamMember member={member} index={index} />
            </div>
          ))}
        </div>

        {/* ── Mobile: Horizontal Scroll Showcase ── */}
        <div className="md:hidden relative">
          <div className="flex gap-5 overflow-x-auto pb-6 -mx-5 px-5 snap-x snap-mandatory no-scrollbar">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="shrink-0 w-[65vw] max-w-[260px] snap-center"
              >
                <TeamMember member={member} index={index} />
              </div>
            ))}
            {/* End spacer */}
            <div className="w-5 shrink-0" />
          </div>

          {/* Fade edge */}
          <div className="absolute right-0 top-0 bottom-6 w-10 bg-gradient-to-l from-surface-0 to-transparent pointer-events-none" />
        </div>

        {/* NIT Jalandhar badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: ease.out }}
          className="mt-12 md:mt-16 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <span className="text-brand text-sm font-black">N</span>
            </div>
            <span className="text-text-primary text-sm font-bold tracking-tight">
              Built by NIT Jalandhar talent
            </span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-text-tertiary/30" />
          <span className="text-text-tertiary text-xs font-medium">
            Engineering × Creativity × Growth
          </span>
        </motion.div>
      </div>
    </section>
  );
}
