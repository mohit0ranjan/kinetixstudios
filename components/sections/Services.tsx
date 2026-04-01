"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Zap, Globe, MapPin, Users, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, ease } from "@/lib/motion";

const services = [
  {
    id: 1,
    title: "High-Converting Websites",
    description:
      "Wildly fast, premium storefronts engineered to turn visitors into paying customers without friction.",
    stat: "3× Bookings",
    icon: Globe,
    color: "from-orange-500 to-orange-600",
    accent: "#ff6a00",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774465924/Screenshot_2026-03-25_233724_enp5xm.png",
  },
  {
    id: 2,
    title: "Paid Advertising",
    description:
      "Hyper-targeted Meta & Google campaigns that scale leads predictably and profitably.",
    stat: "4.5× ROAS",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Local SEO Dominance",
    description:
      "Dominate the Google Maps pack so you're the undeniable #1 choice locals find first.",
    stat: "#1 Ranking",
    icon: MapPin,
    color: "from-emerald-500 to-emerald-600",
    accent: "#10b981",
  },
  {
    id: 4,
    title: "Social Media Growth",
    description:
      "Build omnipresence on Instagram & Facebook that captures attention and drives action.",
    stat: "+10k Followers",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    accent: "#a855f7",
  },
  {
    id: 5,
    title: "Brand Identity",
    description:
      "Premium visual systems, logos, and aesthetics that scream undeniable trust and authority.",
    stat: "100% Rebrand",
    icon: Palette,
    color: "from-pink-500 to-pink-600",
    accent: "#ec4899",
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 0.95, 1], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-block mb-6">
            <SectionEyebrow label="Capabilities" center />
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            Everything you need to{" "}
            <span className="italic text-orange-600">dominate</span> online
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            We combine strategy, design, and performance marketing to drive real growth. No fluff, just results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: ease.out,
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(service.id)}
                className="group cursor-pointer h-full"
              >
                <div className="relative h-full">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-br ${service.color}`} />

                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    
                    {/* Top accent bar */}
                    <motion.div
                      layoutId={`accent-${service.id}`}
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                    />

                    {/* Icon Container */}
                    <div className="mb-8">
                      <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-colors duration-300"
                      >
                        <Icon className="w-6 h-6 text-gray-800 group-hover:text-gray-900" strokeWidth={2} />
                      </motion.div>
                    </div>

                    {/* Number Badge */}
                    <div className="mb-4">
                      <span className="text-sm font-black text-gray-400 tracking-widest uppercase">
                        0{service.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>

                    {/* Stat Badge */}
                    <motion.div
                      animate={{ 
                        y: isHovered ? -2 : 0,
                        boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.08)" : "0 0px 0px rgba(0,0,0,0)"
                      }}
                      transition={{ duration: 0.2 }}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold w-fit bg-gradient-to-r ${service.color} text-white mb-4`}
                    >
                      {service.stat}
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100 group-hover:bg-gray-200 transition-colors mb-4" />

                    {/* CTA Arrow */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors uppercase tracking-wider">Learn More</span>
                      <motion.div
                        animate={{ 
                          x: isHovered ? 4 : 0,
                          y: isHovered ? -4 : 0,
                          rotate: isHovered ? 0 : -45
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full border border-gray-300 group-hover:border-gray-400 flex items-center justify-center text-gray-600 group-hover:text-gray-900 transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 text-lg mb-6 font-medium">
            Want to explore a specific service deeper?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors group shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
