"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[60] md:hidden safe-bottom"
        >
          <a
            href="/contact"
            className="w-full h-12 rounded-xl bg-[#0A0A0A] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(10,10,10,0.28)]"
            aria-label="Book free strategy call"
          >
            Book Free Strategy Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
