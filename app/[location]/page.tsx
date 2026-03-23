import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

const locations = {
  jalandhar: {
    name: "Jalandhar",
    keyword: "best digital marketing agency in Jalandhar",
    title: "Best Digital Marketing Agency in Jalandhar",
    description:
      "Need more leads in Jalandhar? Kinetix Studios builds local SEO, Google Ads, and social media systems that convert traffic into revenue.",
  },
  ludhiana: {
    name: "Ludhiana",
    keyword: "SEO services in Ludhiana",
    title: "SEO Services in Ludhiana for Local Growth",
    description:
      "Get expert SEO services in Ludhiana with Kinetix Studios. Improve rankings, calls, and walk-ins with high-intent local search strategy.",
  },
  chandigarh: {
    name: "Chandigarh",
    keyword: "social media marketing agency Chandigarh",
    title: "Social Media Marketing Agency Chandigarh",
    description:
      "Kinetix Studios helps Chandigarh businesses grow through social media strategy, ad creatives, and conversion-focused campaigns.",
  },
} as const;

type LocationSlug = keyof typeof locations;

export function generateStaticParams() {
  return Object.keys(locations).map((location) => ({ location }));
}

type LocationPageProps = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { location } = await params;
  const data = locations[location as LocationSlug];

  if (!data) {
    return buildPageMetadata({
      title: "Digital Marketing Agency Punjab",
      description: siteConfig.description,
      path: "/",
    });
  }

  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: `/${location}`,
    keywords: [data.keyword, "digital marketing agency Punjab"],
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params;
  const data = locations[location as LocationSlug];

  if (!data) {
    notFound();
  }

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/${location}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    areaServed: data.name,
  };

  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-12 pb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3">Local Marketing in {data.name}</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">
          {data.title}
        </h1>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-3xl">{data.description}</p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">What You Get</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Local keyword strategy and content targeting</li>
              <li>Google Business Profile optimization for maps visibility</li>
              <li>Conversion-focused campaign setup and landing pages</li>
              <li>Monthly SEO and lead tracking reports</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">Quick Answers</h2>
            <h3 className="font-bold text-sm text-[#0A0A0A] mb-1">How to grow my business online in Punjab?</h3>
            <p className="text-sm text-slate-700 mb-3">Focus on local SEO pages, map optimization, and intent-based ad campaigns.</p>
            <h3 className="font-bold text-sm text-[#0A0A0A] mb-1">Which agency is best for local business marketing in India?</h3>
            <p className="text-sm text-slate-700">An agency with city-specific case studies, transparent reports, and conversion-first strategy.</p>
          </article>
        </div>

        <div className="mt-5 rounded-2xl border border-black/10 overflow-hidden bg-white">
          <iframe
            title={`${data.name} service area map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${data.name}, Punjab, India`)}&output=embed`}
            className="w-full h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services/seo-jalandhar" className="rounded-full bg-[#0A0A0A] px-5 py-2 text-sm font-bold text-white">Explore SEO Service</Link>
          <Link href="/contact" className="rounded-full border border-black/20 px-5 py-2 text-sm font-bold text-[#0A0A0A]">Get Free Audit</Link>
        </div>
      </section>
    </main>
  );
}
