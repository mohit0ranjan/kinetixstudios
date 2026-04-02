"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
      
      {/* Ambient glows - reduced intensity for performance */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-80 h-80 bg-orange-200 rounded-full blur-[80px] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100 rounded-full blur-[80px] opacity-15 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-180px)]"
        >
          
          {/* Left: Content */}
          <motion.div variants={item} className="flex flex-col justify-center space-y-6 lg:space-y-7">
            {/* Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 w-fit"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-orange-500"
                />
                Award-Winning Agency
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight">
                Grow your <span className="text-orange-600">local business</span> online
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed"
            >
              SEO, paid ads, and social media strategies that turn browsers into paying customers. Built specifically for local businesses in India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-200"
                >
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/work/templates"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-slate-50 transition-all duration-200"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-slate-200"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-slate-900">85%</span>
                  <span className="text-sm font-semibold text-green-600">↑ Avg</span>
                </div>
                <p className="text-sm text-slate-600 font-medium mt-1">Sales Growth</p>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl font-black text-slate-900">3k+</div>
                <p className="text-sm text-slate-600 font-medium mt-1">Clients Served</p>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl font-black text-slate-900">12+</div>
                <p className="text-sm text-slate-600 font-medium mt-1">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Illustration/Image - Desktop only */}
          <motion.div
            variants={item}
            className="hidden lg:flex items-center justify-center relative h-full min-h-[500px]"
          >
            <div className="relative w-full h-full max-w-lg">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-5 blur-3xl" />
              
              {/* Placeholder for actual image/illustration */}
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl w-full h-full flex items-center justify-center min-h-[500px] shadow-lg">
                <div className="text-center">
                  <TrendingUp className="w-20 h-20 text-orange-600 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-600 font-semibold">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
