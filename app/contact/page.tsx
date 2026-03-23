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
    <main className="pt-24 min-h-screen bg-surface-1">
      <section className="section-container-narrow pt-12 md:pt-16 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-brand rounded-full" />
          <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Contact Us</span>
        </div>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight text-text-primary mb-4 leading-[1.1]">
          Let&apos;s Build Your Growth Engine
        </h1>
        <p className="text-text-secondary text-base md:text-lg mb-10 max-w-2xl">
          Share your goals and we&apos;ll map a practical strategy for traffic, leads, and revenue.
        </p>

        <ContactForm />

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-0 p-6 md:p-8">
            <h2 className="text-xl font-black text-text-primary mb-4">Business Details</h2>
            <div className="space-y-2">
              <p className="text-sm text-text-secondary"><strong className="text-text-primary">Name:</strong> {siteConfig.name}</p>
              <p className="text-sm text-text-secondary"><strong className="text-text-primary">Phone:</strong> {siteConfig.phone}</p>
              <p className="text-sm text-text-secondary"><strong className="text-text-primary">Email:</strong> {siteConfig.email}</p>
              <p className="text-sm text-text-secondary"><strong className="text-text-primary">Location:</strong> Punjab, India</p>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 overflow-hidden bg-surface-0">
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
