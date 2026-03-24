"use client";

import { motion } from "framer-motion";
import { MoreVertical, Download, BarChart3, ShoppingBag, LayoutTemplate, Palette } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const tools = [
  {
    name: "Meta Ads Manager",
    tag: "Performance Marketing",
    description: "Meta's powerful advertising suite allows you to create highly targeted campaigns and scale your revenue predictably.",
    installs: "145M+ active businesses",
    buttonText: "Learn more",
    color: "bg-[#E7F3FF]",
    iconColor: "text-[#1877F2]",
    iconBg: "bg-white",
    headerVisual: "Advanced audience targeting.",
    highlightColor: "bg-[#1877F2]/20",
    icon: <BarChart3 size={24} strokeWidth={2} />
  },
  {
    name: "Shopify Plus",
    tag: "E-Commerce platform",
    description: "Shopify provides a reliable, high-converting foundation for modern retail brands looking to scale online sales.",
    installs: "4.5M+ active stores",
    buttonText: "Learn more",
    color: "bg-[#E6F5E9]",
    iconColor: "text-[#008060]",
    iconBg: "bg-white",
    headerVisual: "Seamless online storefronts.",
    highlightColor: "bg-[#008060]/20",
    icon: <ShoppingBag size={24} strokeWidth={2} />
  },
  {
    name: "WordPress",
    tag: "Custom CMS",
    description: "The world's most popular content management system gives you ultimate ownership and flexibility over your organic SEO.",
    installs: "810M+ active websites",
    buttonText: "Learn more",
    color: "bg-[#F0F6FC]",
    iconColor: "text-[#21759B]",
    iconBg: "bg-white",
    headerVisual: "Ultimate content control.",
    highlightColor: "bg-[#21759B]/20",
    icon: <LayoutTemplate size={24} strokeWidth={2} />
  },
  {
    name: "Figma",
    tag: "UI/UX Design",
    description: "Figma enables our design team to collaborate in real-time, delivering stunning, user-centric website prototypes rapidly.",
    installs: "4M+ active designers",
    buttonText: "Learn more",
    color: "bg-[#FCE8E8]",
    iconColor: "text-[#F24E1E]",
    iconBg: "bg-white",
    headerVisual: "Pixel-perfect prototypes.",
    highlightColor: "bg-[#F24E1E]/20",
    icon: <Palette size={24} strokeWidth={2} />
  }
];

export default function Tools() {
  return (
    <section className="py-20 md:py-24 relative bg-surface-0 font-sans border-t border-black/5">
      <div className="section-container">
        
        <div className="mb-12 md:mb-16">
          <SectionEyebrow label="Platforms & Integrations" />
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-text-primary tracking-tight mt-4">
            Tools We Specialize In
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="bg-surface-0 border border-black/5 shadow-sm md:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] rounded-[20px] overflow-hidden flex flex-col active:scale-[0.98] md:active:scale-100 md:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              {/* Header Visual mimicking the Wordsometric header */}
              <div className="relative h-[160px] md:h-[200px] w-full bg-surface-1 border-b border-black/5 overflow-hidden flex items-center justify-center px-6 md:px-8 text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
                
                {/* Visual Graphic representation inside the header */}
                <h4 className="text-[17px] md:text-xl font-medium text-text-primary leading-snug">
                  {tool.headerVisual.split(' ').map((word, idx) => (
                    idx === 1 ? <span key={idx} className={`px-2 py-0.5 rounded-md ${tool.highlightColor} font-bold mr-1`}>{word}</span> : <span key={idx} className="mr-1">{word}</span>
                  ))}
                </h4>

                {/* Option dots */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-surface-0 border border-black/5 flex items-center justify-center text-text-tertiary cursor-pointer hover:bg-surface-1 shadow-sm">
                  <MoreVertical size={14} className="md:w-[16px] md:h-[16px]" />
                </div>

                {/* Overlapping Icon Block */}
                <div className={`absolute -bottom-5 left-5 md:-bottom-6 md:left-6 w-[40px] h-[40px] md:w-[52px] md:h-[52px] rounded-[14px] md:rounded-2xl ${tool.iconBg} border border-black/5 shadow-sm flex items-center justify-center ${tool.iconColor} z-10`}>
                  <div className="scale-[0.75] md:scale-100">{tool.icon}</div>
                </div>
              </div>

              {/* Main Body */}
              <div className="pt-8 md:pt-10 px-5 md:px-6 pb-5 md:pb-6 flex-1 bg-surface-0">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <h4 className="font-bold text-text-primary text-[15px] md:text-[17px] tracking-tight line-clamp-1">{tool.name}</h4>
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-1 text-text-tertiary text-[9px] md:text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-text-secondary text-[13px] md:text-[14px] font-medium leading-[1.6]">
                  {tool.description}
                </p>
              </div>

              {/* Footer Panel */}
              <div className="border-t border-black/5 px-5 md:px-6 py-3 md:py-4 flex items-center justify-between bg-surface-0 mt-auto">
                <button className="px-3 md:px-4 py-1.5 md:py-2 border border-black/5 rounded-lg text-[12px] md:text-sm font-semibold text-text-primary hover:bg-surface-1 transition-colors bg-surface-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  {tool.buttonText}
                </button>
                <div className="flex items-center gap-1 md:gap-1.5 text-text-tertiary">
                  <Download size={12} className="md:w-[14px] md:h-[14px]" />
                  <span className="text-[10px] md:text-[12px] font-medium">{tool.installs}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
