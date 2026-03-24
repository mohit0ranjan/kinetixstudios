"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const whatsappLink = "https://wa.me/9057680262";

  useEffect(() => {
    const onScroll = () => setShowMobileCTA(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Global Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="hidden md:flex fixed z-[70] bottom-8 right-8 group"
      >
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-text-primary px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
          Chat with us instantly
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300 relative"
          aria-label="Chat on WhatsApp"
        >
          {/* Notification bubble pulse */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-surface-0 flex items-center justify-center animate-pulse" />
          <MessageCircle size={28} />
        </a>
      </motion.div>

      {/* Mobile Sticky Booking Bar */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 z-[60] md:hidden safe-bottom"
          >
            <div className="flex gap-2 w-full h-[3.5rem] bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-[3rem] shrink-0 rounded-xl bg-[#25D366] text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="/contact"
                className="flex-1 h-full rounded-xl bg-brand text-white font-bold text-[15px] tracking-tight flex items-center justify-center gap-2 transition-all shadow-[0_4px_15px_rgba(255,106,0,0.3)]"
              >
                Book Call
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
