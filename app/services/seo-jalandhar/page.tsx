import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Services in Jalandhar for Local Businesses",
  description:
    "Rank on Google for high-intent local searches with Kinetix Studios. Our SEO services in Jalandhar are built for measurable lead growth.",
  path: "/services/seo-jalandhar",
  keywords: [
    "best digital marketing agency in Jalandhar",
    "SEO services in Ludhiana",
    "digital marketing agency Punjab",
  ],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Jalandhar",
  serviceType: "Local SEO",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  areaServed: ["Jalandhar", "Punjab", "India"],
};

export default function SeoJalandharPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-12 pb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3">Service Page</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">SEO Services in Jalandhar</h1>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-3xl">
          We help local businesses rank for high-intent keywords, improve Google Maps visibility, and convert organic traffic into qualified leads.
        </p>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl font-black mb-3 text-[#0A0A0A]">What Is Included</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Keyword clustering for city-level and service-intent queries</li>
            <li>Technical SEO audits and Core Web Vitals improvements</li>
            <li>On-page optimization with schema and FAQ enhancements</li>
            <li>Local citation strategy and Google Business Profile support</li>
          </ul>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Get Free Audit</Link>
          <Link href="/services/social-media-punjab" className="rounded-full border border-black/20 px-5 py-2 text-sm font-bold text-[#0A0A0A]">Social Media Service</Link>
        </div>
      </section>
    </main>
  );
}
