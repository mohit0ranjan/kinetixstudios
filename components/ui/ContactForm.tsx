"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import Toast, { ToastType } from "@/components/ui/Toast";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type, isVisible: true });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      showToast("Please fill out all fields correctly.", "error");
      return;
    }

    setStatus("loading");
    try {
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:hello@kinetixstudios.in?subject=${subject}&body=${body}`;
      setStatus("success");
      showToast("Opening email app. We'll be in touch!", "success");
      form.reset();
    } catch {
      setStatus("error");
      showToast("Something went wrong. Please try again.", "error");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-black/5 rounded-2xl p-5 md:p-7 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Name
          <input
            name="name"
            type="text"
            required
            className="h-11 rounded-xl border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-[#FF6A00]/40"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-[#FF6A00]/40"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:ring-2 focus:ring-[#FF6A00]/40 resize-y"
          placeholder="Tell us what you want to scale"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 rounded-xl bg-[#0A0A0A] text-white font-bold disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Sending...</span>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
    <Toast 
      message={toast.message} 
      type={toast.type} 
      isVisible={toast.isVisible} 
      onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
    />
  </>
  );
}
