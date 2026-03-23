import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Kinetix Studios for Free Growth Audit",
  description:
    "Talk to Kinetix Studios for SEO, paid ads, and social media growth in Punjab. Book your free audit and strategy call today.",
  path: "/contact",
  keywords: ["digital marketing agency Punjab", "best digital marketing agency in Jalandhar"],
});

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-12 md:pt-16 pb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3">Contact Kinetix Studios</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">Let&apos;s Build Your Growth Engine</h1>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl">
          Share your goals and we&apos;ll map a practical strategy for traffic, leads, and revenue.
        </p>

        <ContactForm />

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">Business Details (NAP)</h2>
            <p className="text-sm text-slate-700"><strong>Name:</strong> {siteConfig.name}</p>
            <p className="text-sm text-slate-700"><strong>Phone:</strong> {siteConfig.phone}</p>
            <p className="text-sm text-slate-700"><strong>Email:</strong> {siteConfig.email}</p>
            <p className="text-sm text-slate-700"><strong>Address:</strong> Punjab, India</p>
          </div>
          <div className="rounded-2xl border border-black/10 overflow-hidden bg-white">
            <iframe
              title="Kinetix Studios Service Area Map - Punjab"
              src="https://www.google.com/maps?q=Punjab,India&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
