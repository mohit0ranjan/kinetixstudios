"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-dark pt-24 pb-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-white/8 pb-20">
          
          {/* Brand Col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Link href="/" className="text-4xl font-black tracking-tight flex items-center gap-0.5 mb-8">
              <span className="text-text-inverse">Kinetix Studios</span>
              <span className="text-brand text-5xl leading-none">.</span>
            </Link>
            <p className="text-text-inverse/40 max-w-sm text-lg leading-relaxed font-light mb-8">
              The premier digital agency helping local businesses in India scale through modern marketing.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/8 px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-text-inverse/70">Available for new projects</span>
            </div>
          </motion.div>
          
          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-text-inverse font-bold mb-6 text-lg">Sitemap</h4>
            <ul className="space-y-4">
              {[
                { label: "Services", href: "/services" },
                { label: "Our Work", href: "/work" },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-text-inverse/40 hover:text-brand transition-colors flex items-center gap-1 group w-max">
                    {item.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="text-text-inverse font-bold mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <p className="text-text-inverse/30 uppercase tracking-widest text-xs font-semibold mb-2 flex items-center gap-2">
                  <Mail size={12} /> New Business
                </p>
                <div className="flex items-center gap-3 text-lg text-text-inverse hover:text-brand transition-colors cursor-pointer group w-max">
                  hello@kinetixstudios.in
                  <Copy size={16} className="text-text-inverse/20 group-hover:text-brand transition-colors" />
                </div>
              </div>
              <div>
                <p className="text-text-inverse/30 uppercase tracking-widest text-xs font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={12} /> Location
                </p>
                <p className="text-text-inverse/50 text-sm">Punjab, India</p>
              </div>
              <div>
                <p className="text-text-inverse/30 uppercase tracking-widest text-xs font-semibold mb-2">Socials</p>
                <div className="flex gap-4 text-text-inverse/40">
                  <a href="https://wa.me/917009073498" className="hover:text-brand transition-colors">WhatsApp</a>
                  <a href="https://instagram.com/kinetixstudios" className="hover:text-brand transition-colors">Instagram</a>
                  <a href="https://linkedin.com/company/kinetixstudios" className="hover:text-brand transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-inverse/25 text-sm">
            © {new Date().getFullYear()} Kinetix Studios. Building legacies since 2024.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="text-text-inverse/25 hover:text-text-inverse/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-text-inverse/25 hover:text-text-inverse/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
