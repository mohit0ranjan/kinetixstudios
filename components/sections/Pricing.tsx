"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for local businesses just starting out and needing a proven foundation.",
    features: [
      "Custom 5-Page Website",
      "Basic Local SEO Setup",
      "Google Business Profile",
      "Monthly Reporting",
      "Email Support"
    ],
    buttonText: "Book a Call",
    highlight: false,
    textAccent: "text-gray-900",
    bgAccent: "bg-gray-100"
  },
  {
    name: "Growth",
    price: "Custom",
    description: "Our most popular package. Aggressive lead gen for established businesses.",
    features: [
      "Optimized Website",
      "Ads Management",
      "Advanced Local SEO",
      "Content Strategy",
      "Bi-Weekly Calls",
      "24/7 Priority Support"
    ],
    buttonText: "Book a Call",
    highlight: true,
    textAccent: "text-[#FF6A00]",
    bgAccent: "bg-[#FF6A00]/20"
  },
  {
    name: "Scale",
    price: "Custom",
    description: "The ultimate dominance package. For businesses ready to take over the city.",
    features: [
      "Custom Web App/Portal",
      "Multi-Channel Ads",
      "National & Local SEO",
      "Full Brand Overhaul",
      "Dedicated Manager",
      "Custom CRM"
    ],
    buttonText: "Book a Call",
    highlight: false,
    textAccent: "text-gray-900",
    bgAccent: "bg-gray-100"
  }
];

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="pricing" className="py-20 md:py-32 relative bg-[#F4F5F7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[88rem] relative z-10">
        
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-black/5 shadow-sm mb-4 md:mb-6">
              <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#FF6A00]" />
              <span className="text-[10px] md:text-sm font-bold text-gray-600 uppercase tracking-wider">Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#0A0A0A] tracking-tight mb-4 md:mb-6">
              Transparent <br className="md:hidden"/> Investments
            </h2>
            <p className="text-gray-500 text-sm md:text-xl font-medium max-w-2xl mx-auto">
              No hidden fees. We build precise packages that guarantee a positive return on your investment.
            </p>
          </motion.div>
        )}

        {/* MOBILE REDESIGN - HIGH-END EDITORIAL LIST */}
        <div className="md:hidden flex flex-col gap-4 w-full mt-6 pb-12">
          {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.4, delay: index * 0.1 }}
               className={`relative overflow-hidden p-6 rounded-[28px] border-2 transition-all ${
                 plan.highlight 
                  ? "bg-[#0A0A0A] border-transparent text-white shadow-[0_20px_40px_-15px_rgba(255,106,0,0.3)]" 
                  : "bg-white border-slate-200 text-slate-900 shadow-sm"
               }`}
             >
               {plan.highlight && (
                 <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#FF6A00]/20 blur-[50px] pointer-events-none rounded-full" />
               )}
               
               <div className="flex justify-between items-start mb-6 border-b pb-6 relative z-10">
                 <div>
                   {plan.highlight && (
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6A00] mb-2">
                       Most Popular
                     </div>
                   )}
                   <h3 className="text-2xl font-black">{plan.name}</h3>
                   <span className="text-sm opacity-70 font-medium block mt-1 leading-snug max-w-[200px]">
                     {plan.description}
                   </span>
                 </div>
                 <div className="text-right">
                   <span className="block text-[10px] uppercase tracking-wider opacity-60 font-bold mb-1">Investment</span>
                   <span className="text-2xl font-black">{plan.price}</span>
                 </div>
               </div>

               <div className="space-y-4 relative z-10">
                 {plan.features.map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className={`shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${plan.highlight ? "bg-[#FF6A00]" : "bg-slate-900"}`}>
                       <Check size={10} className="text-white" strokeWidth={4} />
                     </div>
                     <span className={`text-sm font-bold ${plan.highlight ? "text-white/90" : "text-slate-800"}`}>
                       {feature}
                     </span>
                   </div>
                 ))}
               </div>

               <motion.a
                 href="/contact"
                 whileTap={{ scale: 0.98 }}
                 className={`w-full mt-8 flex items-center justify-between px-6 py-4 rounded-full font-bold text-sm transition-all relative z-10 ${
                   plan.highlight 
                     ? "bg-[#FF6A00] text-white shadow-[0_5px_15px_rgba(255,106,0,0.4)]" 
                     : "bg-slate-100 text-slate-900"
                 }`}
               >
                 {plan.buttonText}
                 <ArrowRight size={16} />
               </motion.a>
             </motion.div>
          ))}
        </div>

        {/* DESKTOP CARDS */}
        <div className="hidden md:flex gap-8 pb-16 pt-8 w-full items-center justify-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`w-[380px] transition-all duration-500 relative ${
                plan.highlight ? "scale-110 z-20" : "scale-100 opacity-90 hover:opacity-100 hover:scale-100 z-10"
              }`}
            >
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col h-[520px] md:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden border transition-all transform-gpu ${
                    plan.highlight 
                      ? "bg-[#0A0A0A] border-white/10 shadow-2xl md:shadow-[0_40px_80px_-15px_rgba(255,106,0,0.25)]" 
                      : "bg-white border-slate-100 shadow-md md:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  {/* Internal Glow for Highlighted Card */}
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF6A00]/20 blur-[60px] pointer-events-none rounded-full" />
                  )}
                  
                  <div className="p-6 md:p-10 flex flex-col flex-grow relative z-10 w-full h-full">
                    {plan.highlight ? (
                      <div className="bg-[#FF6A00] text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] py-1.5 px-4 rounded-full self-start mb-6 inline-block shadow-[0_5px_15px_rgba(255,106,0,0.3)]">
                        Most Popular
                      </div>
                    ) : (
                      <div className="h-[28px] mb-6" /> // Spacer
                    )}
                    
                    <h3 className={`text-2xl md:text-3xl font-black mb-1 ${plan.highlight ? "text-white" : "text-[#0A0A0A]"}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-4xl md:text-5xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-[#0A0A0A]"}`}>{plan.price}</span>
                    </div>
                    <p className={`text-xs md:text-sm font-medium mb-6 pb-6 border-b ${plan.highlight ? "text-white/60 border-white/10" : "text-gray-500 border-slate-100"}`}>
                      {plan.description}
                    </p>
                    
                    <ul className="space-y-3 md:space-y-4 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`rounded-full p-1 shrink-0 ${plan.highlight ? plan.bgAccent : "bg-slate-100"} ${plan.highlight ? plan.textAccent : "text-slate-900"}`}>
                            <Check size={12} strokeWidth={4} />
                          </div>
                          <span className={`text-xs md:text-sm font-bold leading-tight ${plan.highlight ? "text-white/90" : "text-slate-700"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 0.98, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center justify-center gap-2 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 mt-auto ${
                        plan.highlight 
                          ? "bg-[#FF6A00] text-white shadow-[0_10px_25px_-5px_rgba(255,106,0,0.5),inset_0_-3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(255,106,0,0.6),inset_0_-3px_0_rgba(0,0,0,0.2)]" 
                          : "bg-[#0A0A0A] text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.4),inset_0_-3px_0_rgba(0,0,0,0.4)]"
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-center gap-2 mt-4 hidden">
          <span className="h-1.5 w-8 rounded-full bg-[#FF6A00]/60" />
          <span className="h-1.5 w-2.5 rounded-full bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">Swipe Plans</span>
        </div>

      </div>
    </section>
  );
}
