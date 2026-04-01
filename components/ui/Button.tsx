"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { buttonPress } from "@/lib/motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  asLink?: boolean;
  isLoading?: boolean;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  href, 
  asLink,
  isLoading = false,
  disabled,
  ...props 
}: ButtonProps) {
  const base = `
    relative inline-flex items-center justify-center gap-2 
    font-bold rounded-lg overflow-hidden transition-all 
    duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variants = {
    primary: `
      bg-slate-900 text-white 
      shadow-md hover:shadow-lg 
      hover:bg-slate-800
      active:scale-95
    `,
    secondary: `
      bg-slate-100 text-slate-900 
      shadow-sm hover:shadow-md 
      hover:bg-slate-200
      active:scale-95
    `,
    outline: `
      bg-transparent border-2 border-slate-900 text-slate-900
      hover:bg-slate-50
      active:scale-95
    `,
    ghost: `
      bg-transparent text-slate-900
      hover:bg-slate-100
      active:scale-95
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const motionProps = {
    ...buttonPress,
    whileTap: { scale: 0.95 },
  };

  const buttonClass = cn(base, variants[variant], sizes[size], className);

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
        className={buttonClass}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      disabled={disabled || isLoading}
      className={buttonClass}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
