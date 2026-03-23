"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

import { buttonPress } from "@/lib/motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "brand";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  asLink?: boolean;
}

export function Button({ variant = "primary", size = "md", className, children, href, asLink, ...props }: ButtonProps) {
  const base = "relative inline-flex items-center justify-center gap-2 font-bold rounded-xl overflow-hidden transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-surface-dark text-text-inverse shadow-[0_8px_25px_rgba(10,10,10,0.2),inset_0_-3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(10,10,10,0.25),inset_0_-1px_0_rgba(0,0,0,0.3)]",
    brand: "bg-brand text-text-inverse shadow-[0_8px_25px_rgba(255,106,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(255,106,0,0.4),inset_0_-1px_0_rgba(0,0,0,0.15)]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[14px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4.5 text-base",
  };

  const motionProps = {
    ...buttonPress,
  };

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
