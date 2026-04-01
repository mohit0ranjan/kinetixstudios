"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[100vh] bg-gradient-to-br from-white via-white to-orange-50 overflow-hidden pt-28 pb-20 md:pt-32 md:pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 0.95, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 w-fit"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-gray-700">Award-Winning Agency</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-black text-gray-900 mb-6 tracking-tight"
            >
              <span>Great offline,</span>
              <br />
              <span className="relative inline-block">
                <span className="text-orange-600">Unstoppable</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-orange-200/40 -skew-x-12 -z-10"
                />
              </span>
              <br />
              <span>Online</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 font-medium max-w-lg mb-10 leading-relaxed"
            >
              We engineer digital experiences that convert browsers into customers. Stop leaving money on the table.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">85%</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Avg. Sales Growth</p>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900 mb-1">3k+</div>
                <p className="text-sm text-gray-600 font-medium">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900 mb-1">10y+</div>
                <p className="text-sm text-gray-600 font-medium">Industry Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                    alt="Digital Agency"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <span className="text-xl font-black text-orange-600">#1</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Rated</p>
                    <p className="font-black text-gray-900">Top Agency</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
                className="absolute -bottom-4 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Results</p>
                    <p className="font-black text-gray-900">+450% ROI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
