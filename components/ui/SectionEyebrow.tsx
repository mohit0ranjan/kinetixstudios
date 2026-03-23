"use client";

interface SectionEyebrowProps {
  label: string;
  className?: string;
  center?: boolean;
}

export function SectionEyebrow({ label, className = "", center = false }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""} ${className}`}>
      <span className="w-8 h-[2px] bg-brand rounded-full" />
      <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}
