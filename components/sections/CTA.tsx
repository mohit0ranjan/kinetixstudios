"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, ShieldCheck, Zap, Target, X, CheckCircle2, Phone } from "lucide-react";
import { fadeUp, viewportOnce, buttonPress, ease } from "@/lib/motion";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    revenue: "",
    goal: "",
    website: ""
  });

  const whatsappLink = "https://wa.me/9057680262";

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simulate cal.com redirect delay
    setTimeout(() => setStep(3), 1500);
  };

  return (
    <section id="contact" className="relative bg-surface-dark overflow-hidden py-20 md:py-32">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Trust Badges Top */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="flex items-center gap-2 text-text-inverse/60 text-[13px] font-bold uppercase tracking-wider">
                <ShieldCheck size={16} className="text-brand" />
                Trusted by growing businesses
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="flex items-center gap-2 text-text-inverse/60 text-[13px] font-bold uppercase tracking-wider">
                <Target size={16} className="text-brand" />
                Results-focused approach
              </div>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-text-inverse mb-6 leading-[1.05] tracking-tight">
              Let&apos;s Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-amber-300">
                Growth System.
              </span>
            </h2>

            <p className="text-lg md:text-2xl text-text-inverse/60 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
              Book a free 30-minute strategy call and get a customized plan for your business.
            </p>
            <p className="text-sm md:text-base text-text-inverse/40 mb-12">
              We analyze your business, competitors, and market before the call.
            </p>
            
            {/* CTAs — matching Pricing card dual-CTA pattern */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full px-4 sm:px-0">
              {/* WhatsApp */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                {...buttonPress}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 md:px-10 py-4.5 rounded-xl text-base font-bold shadow-[0_6px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.4)] transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </motion.a>

              {/* Call */}
              <motion.a
                href="tel:+919057680262"
                {...buttonPress}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand text-white px-8 md:px-10 py-4.5 rounded-xl text-base font-bold shadow-[0_6px_24px_rgba(255,106,0,0.3)] hover:shadow-[0_10px_32px_rgba(255,106,0,0.4)] transition-all"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>

            {/* Urgency & Reassurance */}
            <div className="flex flex-col items-center gap-3 w-full px-4 sm:px-0 mt-8">
              <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full border border-red-500/20">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-wider">
                  Only 5 new client spots left this month
                </span>
              </div>
              <p className="text-[13px] font-semibold text-text-inverse/40 mt-2">
                No spam. No commitments. Just actionable insights.
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ── Booking Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: ease.out }}
              className="relative w-full max-w-xl bg-surface-0 rounded-3xl overflow-hidden shadow-2xl border border-black/5 z-10 flex flex-col max-h-full"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-1 rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-10 flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: Qualification Form */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col h-full"
                    >
                      <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-2">
                        Get Your Custom Strategy
                      </h3>
                      <p className="text-text-secondary mb-8 font-medium">
                        Tell us a bit about your business so we can prepare valuable insights for our call.
                      </p>

                      <form onSubmit={handleNextStep} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-text-primary px-1">Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full bg-surface-1 border border-black/5 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all font-medium text-text-primary" />
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-text-primary px-1">Website or Instagram Link</label>
                          <input required type="url" placeholder="https://yourbusiness.com" className="w-full bg-surface-1 border border-black/5 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all font-medium text-text-primary" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-text-primary px-1">Business Type</label>
                            <select required className="w-full bg-surface-1 border border-black/5 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all font-medium text-text-primary appearance-none cursor-pointer">
                              <option value="">Select option...</option>
                              <option>Local Service</option>
                              <option>Clinic / Healthcare</option>
                              <option>Retail / E-Commerce</option>
                              <option>B2B Agency</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-text-primary px-1">Monthly Revenue</label>
                            <select required className="w-full bg-surface-1 border border-black/5 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all font-medium text-text-primary appearance-none cursor-pointer">
                              <option value="">Select range...</option>
                              <option>Under ₹1L / mo</option>
                              <option>₹1L - ₹5L / mo</option>
                              <option>₹5L - ₹15L / mo</option>
                              <option>₹15L+ / mo</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-2">
                          <label className="text-[13px] font-bold text-text-primary px-1">Main Goal</label>
                          <div className="grid grid-cols-3 gap-2">
                            {["More Leads", "More Sales", "Brand Authority"].map((g) => (
                              <label key={g} className={`cursor-pointer border rounded-xl py-3 text-center text-[13px] font-bold transition-all ${formData.goal === g ? "bg-brand/10 border-brand text-brand" : "bg-surface-1 border-black/5 text-text-secondary hover:border-black/10 hover:bg-surface-1/80"}`} onClick={() => setFormData({...formData, goal: g})}>
                                {g}
                              </label>
                            ))}
                          </div>
                        </div>

                        <button type="submit" className="w-full mt-6 flex items-center justify-center gap-2 bg-text-primary text-white py-4 rounded-xl font-bold text-[15px] hover:bg-black transition-colors shadow-md">
                          Continue to Calendar
                          <ArrowRight size={16} />
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* STEP 2: Loading / Cal.com redirect */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-20 min-h-[400px]"
                    >
                      <Zap size={40} className="text-brand animate-pulse mb-6" />
                      <h3 className="text-2xl font-extrabold text-text-primary mb-2 text-center">
                        Analyzing your profile...
                      </h3>
                      <p className="text-text-secondary font-medium text-center">
                        Connecting to scheduling calendar.
                      </p>
                    </motion.div>
                  )}

                  {/* STEP 3: Booking Confirmation / WhatsApp bridge */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 min-h-[400px] text-center"
                    >
                      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-extrabold text-text-primary mb-4">
                        You&apos;re booked!
                      </h3>
                      <p className="text-text-secondary font-medium max-w-sm mb-8">
                        We have securely received your details and are preparing for our strategy session. Please check your email for the calendar invite.
                      </p>

                      <div className="w-full h-px bg-black/5 mb-8" />

                      <h4 className="font-bold text-text-primary mb-4">Need to share details instantly?</h4>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-[15px] hover:bg-[#20bd5a] transition-colors shadow-md"
                      >
                        <MessageCircle size={18} />
                        Message us directly on WhatsApp
                      </a>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
