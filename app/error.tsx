"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Runtime error caught by error boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[80svh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-md w-full bg-white p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5"
      >
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#0A0A0A] mb-3">Something went wrong</h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
          We encountered an unexpected error. Don't worry, our team has been notified. 
          Please try refreshing the page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0A0A0A]/90 transition-colors"
          >
            <RotateCcw size={18} />
            Try again
          </button>
          <a
            href="/"
            className="flex items-center justify-center gap-2 bg-gray-100 text-[#0A0A0A] px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
          >
            Return Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
