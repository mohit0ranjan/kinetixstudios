"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  {
    name: "Work",
    href: "/work/templates",
    children: [
      { name: "Templates", href: "/work/templates" },
      { name: "Graphic Design", href: "/work/graphic-design" },
      { name: "SEO", href: "/work/seo" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-3"
          : "bg-transparent py-4 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-black tracking-tight flex items-center gap-1 group flex-shrink-0">
          <span className="text-slate-900">Kinetix</span>
          <span className="text-orange-600 group-hover:scale-110 transition-transform duration-300">Studios</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <button
                  className="text-sm font-medium text-slate-600 px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 flex items-center gap-1 group"
                >
                  {link.name}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="rounded-xl border border-slate-200 bg-white shadow-lg p-1 min-w-max">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.a
            href="/contact"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-200"
          >
            Get Started
            <ArrowRight size={14} />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Navigation" : "Open Navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-slate-900 rounded-lg px-3 py-2.5 hover:bg-slate-100 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.children ? (
                    <div className="mt-2 space-y-1 ml-3 pl-3 border-l border-slate-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-medium text-slate-600 rounded-lg px-2 py-1.5 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
              
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-bold w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-orange-600 origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
