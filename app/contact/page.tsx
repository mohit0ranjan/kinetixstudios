import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import CalEmbed from "@/components/ui/CalEmbed";
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
      <section className="section-container pt-12 md:pt-16 pb-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-brand rounded-full" />
          <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Contact Us</span>
          <span className="w-8 h-[2px] bg-brand rounded-full" />
        </div>
        <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight text-text-primary mb-4 leading-[1.05] text-center">
          Let&apos;s Build Your<br />
          <span className="font-display italic text-brand">Growth Engine.</span>
        </h1>
        <p className="text-text-secondary text-base md:text-lg mb-12 max-w-2xl mx-auto text-center font-medium">
          Share your goals and we&apos;ll map a practical strategy for traffic, leads, and revenue.
        </p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Main Booking Embed */}
          <div className="lg:col-span-3 w-full">
            <h2 className="text-xl md:text-2xl font-black text-text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm shrink-0">1</span>
              Book a Strategy Call
            </h2>
            <CalEmbed calLink="kinetixstudios/30min" />
          </div>

          {/* Secondary Contact Options */}
          <div className="lg:col-span-2 w-full space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm shrink-0">2</span>
                Prefer Email?
              </h2>
              <ContactForm />
            </div>

            <div className="rounded-2xl border border-black/5 bg-surface-0 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full" />
              <h3 className="text-lg font-black text-text-primary mb-5 relative z-10">Direct Contact</h3>
              <div className="space-y-5 relative z-10">
                <div>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest font-bold mb-1.5">WhatsApp / Phone</p>
                  <a href="https://wa.me/9057680262" className="text-brand font-bold hover:underline transition-all text-lg">
                    +91 90576 80262
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest font-bold mb-1.5">Email directly</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-text-primary font-bold hover:text-brand transition-all text-lg">
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest font-bold mb-1.5">Headquarters</p>
                  <p className="text-text-secondary font-medium">
                    Punjab, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
