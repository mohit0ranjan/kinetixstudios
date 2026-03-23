import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Social Media Marketing Agency Chandigarh & Punjab",
  description:
    "Grow your brand with strategic social media marketing in Chandigarh and Punjab. Kinetix Studios builds creative campaigns that convert.",
  path: "/services/social-media-punjab",
  keywords: [
    "social media marketing agency Chandigarh",
    "performance marketing agency Punjab",
    "grow local business online India",
  ],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Punjab",
  serviceType: "Social Media Marketing",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  areaServed: ["Chandigarh", "Punjab", "India"],
};

export default function SocialMediaPunjabPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-12 pb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3">Service Page</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">
          Social Media Marketing Agency Chandigarh & Punjab
        </h1>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-3xl">
          From Instagram growth to performance creatives, we build social media systems that increase attention, leads, and repeat customers.
        </p>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl font-black mb-3 text-[#0A0A0A]">Campaign Blueprint</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Audience research for local business segments and buyers</li>
            <li>Content production aligned with conversational search intent</li>
            <li>Ad account setup, funnel tracking, and lead qualification</li>
            <li>Weekly optimization using revenue-focused KPIs</li>
          </ul>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Get Free Audit</Link>
          <Link href="/services/seo-jalandhar" className="rounded-full border border-black/20 px-5 py-2 text-sm font-bold text-[#0A0A0A]">SEO Service</Link>
        </div>
      </section>
    </main>
  );
}
