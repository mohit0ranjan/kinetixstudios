"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent flex" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column (Illustration / Graphic) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="w-[80%] aspect-square relative z-10 rounded-full bg-gradient-to-tr from-brand to-brand-light p-1 shadow-2xl animate-[spin_20s_linear_infinite]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-12">
                <div className="w-full h-full rounded-full border-4 border-dashed border-gray-200 animate-[spin_30s_linear_infinite_reverse] flex items-center justify-center">
                  <div className="bg-surface-dark text-white font-black text-4xl w-48 h-48 rounded-full flex items-center justify-center transform text-center shadow-2xl shadow-black/20">
                    LET&apos;S<br/>GROW
                  </div>
                </div>
              </div>
            </div>

            {/* Floating blobs near illustration */}
            <motion.div 
              animate={{ y: [-20, 20, -20], rotate: [0, 45, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -top-10 right-20 w-24 h-24 bg-brand rounded-3xl opacity-60 backdrop-blur-3xl mix-blend-multiply"
            />
            <motion.div 
              animate={{ y: [20, -20, 20], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 7 }}
              className="absolute bottom-10 -left-10 w-32 h-32 bg-brand-light rounded-full opacity-65 backdrop-blur-3xl mix-blend-multiply"
            />
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-1 p-6 sm:p-8 lg:p-14 rounded-[2.5rem] shadow-xl border border-white/50 relative overflow-hidden"
          >
            {/* Top right corner accent */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand rounded-full blur-[40px] opacity-35" />

            <div className="mb-10 relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark leading-tight mb-4">
                Ready to Grow Your <br/> Local Business?
              </h2>
              <p className="text-gray-500 font-medium text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-surface-dark">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white px-5 py-3.5 sm:py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand transition-shadow text-surface-dark font-medium placeholder:text-gray-400 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-surface-dark">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white px-5 py-3.5 sm:py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand transition-shadow text-surface-dark font-medium placeholder:text-gray-400 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-surface-dark">What service are you interested in?</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-white px-5 py-3.5 sm:py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand transition-shadow text-surface-dark font-medium appearance-none shadow-sm cursor-pointer min-h-11">
                    <option value="" disabled>Select a Service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-dev">Web Development</option>
                    <option value="seo">SEO</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-surface-dark">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white px-5 py-3.5 sm:py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand transition-shadow text-surface-dark font-medium placeholder:text-gray-400 shadow-sm resize-none"
                  placeholder="Tell us a little bit about your goals..."
                ></textarea>
              </div>

              <button className="w-full bg-surface-dark hover:bg-brand text-white font-black text-lg py-4 sm:py-5 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 group mt-4 shadow-lg shadow-black/10 min-h-12">
                Send Request
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
