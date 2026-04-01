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
    image: "/team/mohit-ranjan.png",
    quote: "Strategy without execution is just a dream.",
  },
  {
    name: "Aaryan",
    role: "System Architect & Developer",
    image: "/team/aryan.jpeg",
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
      {/* Portrait Card */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
          className="object-cover object-center transition-transform duration-500 ease-out lg:group-hover:scale-105"
          priority={index < 2}
          loading={index < 2 ? "eager" : "lazy"}
        />

        {/* Gradient overlay on hover — desktop only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Quote — appears on hover, desktop only */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="text-white/95 text-xs md:text-sm font-medium italic leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h3 className="text-sm md:text-base font-bold text-slate-900 tracking-tight mb-1 lg:group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
          {member.name}
        </h3>
        <p className="text-xs md:text-sm text-slate-600 font-medium leading-tight line-clamp-1">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 50%, rgba(255,106,0,0.04), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 mb-12 md:mb-16 lg:mb-20"
        >
          <div>
            <SectionEyebrow label="The Team" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-3 mb-3">
              Building the future of{" "}
              <span className="text-orange-600">local business growth.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
              A specialized crew of strategists, engineers, and creative minds from NIT Jalandhar working to solve real business problems.
            </p>
          </div>
        </motion.div>

        {/* ── Desktop: Offset Staggered Grid ── */}
        <div className="hidden md:grid grid-cols-5 gap-x-6 gap-y-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={index % 2 === 1 ? "pt-12" : ""}
            >
              <TeamMember member={member} index={index} />
            </div>
          ))}
        </div>

        {/* ── Mobile: 2-Column Grid ── */}
        <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={index % 2 === 1 ? "mt-8" : ""}
            >
              <TeamMember member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
