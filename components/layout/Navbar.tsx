"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, GraduationCap, BarChart3, Briefcase, Stethoscope, ShoppingBag } from "lucide-react";
import { ease, buttonPress } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string; icon: React.ElementType; description: string }[];
};

const navLinks: NavLink[] = [
  { name: "Services", href: "/services" },
  {
    name: "Work",
    href: "/work",
    dropdown: [
      {
        name: "Our Work",
        href: "/work",
        icon: Briefcase,
        description: "Case studies & results",
      },
      {
        name: "Education",
        href: "/education",
        icon: GraduationCap,
        description: "Coaching & institute creatives",
      },
      {
        name: "Healthcare",
        href: "/healthcare",
        icon: Stethoscope,
        description: "Clinic & hospital branding",
      },
      {
        name: "Commerce",
        href: "/commerce",
        icon: ShoppingBag,
        description: "E-commerce & retail design",
      },
      {
        name: "Website Audit",
        href: "/work#audit",
        icon: BarChart3,
        description: "Free performance audit",
      },
    ],
  },
  { name: "Solutions", href: "/pricing" },
  { name: "About", href: "/about" },
];

// ── Desktop Dropdown ──────────────────────────────────────

function DesktopDropdown({
  items,
  isOpen,
}: {
  items: NonNullable<NavLink["dropdown"]>;
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.2, ease: ease.out }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
        >
          <div className="bg-white rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] border border-black/5 p-2 min-w-[240px]">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-surface-1 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-1 group-hover:bg-brand/10 flex items-center justify-center shrink-0 transition-colors">
                    <Icon
                      size={17}
                      className="text-text-secondary group-hover:text-brand transition-colors"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-text-primary block leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[12px] font-medium text-text-tertiary leading-tight">
                      {item.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

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

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: ease.out }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3 md:py-4"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="text-xl md:text-[1.45rem] font-black tracking-tight flex items-center gap-0.5 group">
          <span className="text-text-primary">Kinetix Studios</span>
          <span className="text-brand text-3xl leading-none group-hover:scale-125 transition-transform duration-300">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors relative group cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
                <DesktopDropdown items={link.dropdown} isOpen={dropdownOpen} />
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            )
          )}
          <Button asLink href="/contact" variant="primary" size="sm">
            Book a Call
            <ArrowRight size={14} />
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-3 min-h-11 min-w-11 rounded-xl hover:bg-black/5 transition-colors"
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
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex items-center justify-between text-base font-semibold text-text-primary hover:text-brand transition-colors rounded-xl px-3 py-3 hover:bg-black/5 cursor-pointer"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col gap-1">
                              {link.dropdown.map((sub) => {
                                const Icon = sub.icon;
                                return (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 transition-colors"
                                  >
                                    <Icon size={16} className="text-text-tertiary" />
                                    <div>
                                      <span className="text-[14px] font-semibold text-text-primary block">
                                        {sub.name}
                                      </span>
                                      <span className="text-[11px] text-text-tertiary">
                                        {sub.description}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-semibold text-text-primary hover:text-brand transition-colors block rounded-xl px-3 py-3 hover:bg-black/5"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-2 w-full"
              >
                <Button asLink href="/contact" variant="primary" size="md" className="w-full">
                  Book a Call
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
