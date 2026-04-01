"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Zap, MapPin, Users, Palette, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Web Design & Development",
    description: "High-converting websites engineered to turn visitors into paying customers.",
    focus: "Best for local service businesses",
    stat: "3× Bookings",
    accent: "text-orange-600",
    surface: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    id: 2,
    icon: Zap,
    title: "Paid Advertising",
    description: "Hyper-targeted Meta & Google campaigns that scale profitably.",
    focus: "Best for predictable monthly leads",
    stat: "4.5× ROAS",
    accent: "text-blue-600",
    surface: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate Google Maps and local search to become the #1 choice.",
    focus: "Best for local map visibility",
    stat: "#1 Ranking",
    accent: "text-emerald-600",
    surface: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    id: 4,
    icon: Users,
    title: "Social Media Growth",
    description: "Build a powerful presence that captures attention and drives action.",
    focus: "Best for brand awareness and trust",
    stat: "+10k Followers",
    accent: "text-purple-600",
    surface: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    id: 5,
    icon: Palette,
    title: "Brand Identity",
    description: "Premium visual systems that build undeniable trust and authority.",
    focus: "Best for premium repositioning",
    stat: "100% Rebrand",
    accent: "text-pink-600",
    surface: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Comprehensive roadmap tailored to your business and market.",
    focus: "Best for long-term scaling",
    stat: "85% Growth",
    accent: "text-indigo-600",
    surface: "bg-indigo-50",
    border: "border-indigo-200",
  },
];

export default function ServicesTier() {
  return (
    <section id="services" className="py-16 md:py-40 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
        >
          <h2 className="text-[clamp(1.8rem,4.8vw,4rem)] font-black text-gray-900 tracking-tight leading-[1.08] mb-4 md:mb-6">
            Comprehensive Services for Complete Growth
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            Mix and match services or get our complete growth system. Each service is designed to work independently or as part of a unified strategy.
          </p>
        </motion.div>

        {/* Mobile: Clean compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="h-full"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_4px_14px_-10px_rgba(0,0,0,0.18)]">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <div className={`inline-flex p-2.5 rounded-lg ${service.surface} ${service.accent}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-black text-gray-400 tracking-wider">0{service.id}</span>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{service.description}</p>
                  <p className="text-[12px] font-semibold text-gray-500 mb-4">{service.focus}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full ${service.surface} ${service.accent} text-xs font-bold`}>
                      {service.stat}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm font-bold text-gray-700"
                    >
                      Learn
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop/Tablet: Simplified grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 lg:p-7 transition-all duration-200 group-hover:border-gray-300 group-hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`inline-flex rounded-lg p-2.5 ${service.surface} ${service.accent}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold ${service.surface} ${service.accent}`}>
                      {service.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{service.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 font-medium leading-relaxed mb-3 line-clamp-2">{service.description}</p>
                  <p className="text-xs font-semibold text-gray-500 mb-5">{service.focus}</p>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-gray-900"
                  >
                    Use This Service
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 md:p-16 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8">Our Proven Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                num: "01",
                title: "Discovery & Audit",
                desc: "We analyze your business, market, and competition to find opportunities.",
              },
              {
                num: "02",
                title: "Strategy & Planning",
                desc: "Build a custom roadmap with clear milestones and measurable goals.",
              },
              {
                num: "03",
                title: "Execution & Optimization",
                desc: "Implement, monitor, and continuously improve for maximum results.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl md:text-6xl font-black text-white/10 mb-3 md:mb-4">{step.num}</div>
                <h4 className="text-lg md:text-xl font-black mb-2">{step.title}</h4>
                <p className="text-sm md:text-base text-gray-300 font-medium">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowUpRight className="w-6 h-6 text-white/30 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
