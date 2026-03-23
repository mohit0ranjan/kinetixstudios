"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-xl overflow-hidden transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-[#0A0A0A] text-white shadow-[0_8px_25px_rgba(10,10,10,0.2),inset_0_-3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(10,10,10,0.25),inset_0_-1px_0_rgba(0,0,0,0.3)]",
    outline: "border-2 border-[#0A0A0A]/20 text-[#0A0A0A] hover:border-[#FF6A00] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5",
    ghost: "text-[#0A0A0A] hover:bg-black/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 0.97, y: 1 }}
      whileTap={{ scale: 0.93, y: 3 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
