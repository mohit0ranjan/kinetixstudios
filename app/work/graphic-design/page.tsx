import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";

const designPosts = [
  {
    title: "Gym Membership Offer Carousel Pack",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400",
    performance: "28-35% CR",
  },
  {
    title: "Yoga Studio Class Schedule Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400",
    performance: "31% trial conversion",
  },
  {
    title: "Salon Seasonal Campaign Visuals",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1400",
    performance: "8.2:1 ROAS avg",
  },
  {
    title: "Medical Clinic Trust Page Graphics",
    category: "Website Assets",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400",
    performance: "24% form completion",
  },
  {
    title: "Restaurant Weekend Promo Campaign",
    category: "Multi-Channel",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400",
    performance: "42% CTR on ads",
  },
  {
    title: "Real Estate Property Lead Ads",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400",
    performance: "12-18% lead quality score",
  },
  {
    title: "E-commerce Product Showcase Bundle",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1516062423479-7f3aca5e719f?q=80&w=1400",
    performance: "3.2M+ impressions avg",
  },
  {
    title: "Educational Course Launch Campaign",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400",
    performance: "34% enrollment rate",
  },
  {
    title: "SaaS Product Feature Explainer Visuals",
    category: "Website Assets",
    image: "https://images.unsplash.com/photo-1552664730-d8042f50f395?q=80&w=1400",
    performance: "41% trial conversion",
  },
  {
    title: "Local Service Business Google Local Pack Optimization",
    category: "SEO + Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?q=80&w=1400",
    performance: "3.7x impressions boost",
  },
  {
    title: "Event Promotion Campaign Suite",
    category: "Multi-Channel",
    image: "https://images.unsplash.com/photo-1540575467063-178f50002511?q=80&w=1400",
    performance: "3,200+ registrations",
  },
  {
    title: "Brand Story & Values Infographics",
    category: "Website Assets",
    image: "https://images.unsplash.com/photo-1552664730-d8042f50f395?q=80&w=1400",
    performance: "2.3x engagement",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Graphic Design Work",
  description:
    "Performance-first creative design posts for social media, paid ads, and campaign launches.",
  path: "/work/graphic-design",
  keywords: ["graphic design posts", "social media creatives", "ad creative design"],
});

export default function GraphicDesignWorkPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-30 pb-16 md:pb-24">
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-100/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-fuchsia-700">
            ✨ Graphic Design Gallery
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tight text-slate-900 leading-[1.05]">
            Our Design Work
          </h1>
          <p className="mt-5 text-base md:text-lg font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Conversion-focused creative assets for social campaigns, paid ads, and brand storytelling.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 md:gap-6">
          {designPosts.map((post) => (
            <Link 
              key={post.title}
              href="/contact?service=graphic-design"
              className="group mb-5 md:mb-6 block break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4 md:p-5">
                  <div className="inline-flex rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-white w-fit">
                    {post.category}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight mb-2">{post.title}</h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white">
                      Open Design
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>

                {/* Performance Badge */}
                <div className="absolute top-3 right-3 inline-flex rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1.5 text-[10px] font-bold text-slate-900">
                  {post.performance}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-fuchsia-50 to-pink-50 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Ready to get designs like these?</h2>
          <p className="mt-3 text-base text-slate-600 font-medium max-w-2xl mx-auto">Browse our gallery above and tell us which design direction resonates with your brand. We&apos;ll create custom assets for your business.</p>
          <Link href="/contact?service=graphic-design" className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-fuchsia-600 px-5 py-3 font-bold text-white hover:bg-fuchsia-700 transition-colors">
            Start Your Design Project
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
