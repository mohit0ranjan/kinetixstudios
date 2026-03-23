"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border border-black/5 min-w-[300px]"
        >
          {type === "success" ? (
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
              <CheckCircle2 size={18} />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <XCircle size={18} />
            </div>
          )}
          
          <p className="text-sm font-semibold text-[#0A0A0A] flex-grow">
            {message}
          </p>
          
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 p-1 transition-colors rounded-full hover:bg-gray-100 shrink-0"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
