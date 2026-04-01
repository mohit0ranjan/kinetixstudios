"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 md:backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3 md:py-4"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-[88rem] flex items-center justify-between">
        <Link href="/" className="text-xl md:text-[1.45rem] font-black tracking-tight flex items-center gap-0.5 group">
          <span className="text-[#0A0A0A]">Kinetix Studios</span>
          <span className="text-[#FF6A00] text-3xl leading-none group-hover:scale-125 transition-transform duration-300">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm md:text-base font-semibold text-gray-500 hover:text-[#0A0A0A] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF6A00] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
          <motion.a
            href="/contact"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_15px_rgba(10,10,10,0.15),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:shadow-[0_2px_8px_rgba(10,10,10,0.2),inset_0_-1px_0_rgba(0,0,0,0.3)] transition-shadow duration-200"
          >
            Get a Demo
            <ArrowRight size={14} />
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0A0A0A] p-3 min-h-11 min-w-11 rounded-xl hover:bg-black/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/95 md:backdrop-blur-xl border-b border-black/5 md:hidden overflow-hidden"
          >
        <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-gray-800 hover:text-[#0A0A0A] transition-colors block rounded-lg px-3 py-3 hover:bg-black/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-lg w-full mt-2"
              >
                Get a Demo
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6A00] origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
