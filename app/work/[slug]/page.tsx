import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { caseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return buildPageMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: "/work"
    });
  }

  return buildPageMetadata({
    title: `${study.name} Case Study | ${study.result}`,
    description: `${study.summary} Explore challenge, strategy, and measurable outcomes for ${study.industry.toLowerCase()} businesses in ${study.city}.`,
    path: `/work/${study.slug}`,
    keywords: [
      `${study.industry.toLowerCase()} marketing case study India`,
      `${study.city.toLowerCase()} digital marketing case study`,
      "local business growth case study"
    ]
  });
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="pt-24 min-h-screen bg-[#F4F5F7]">
      <section className="section-shell-light py-14 md:py-20">
        <div className="absolute inset-0 subtle-grid-bg opacity-[0.16] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <p className="label-kicker mb-6">
            <span className="h-[2px] w-10 bg-[#FF6A00]" />
            Case Study / {study.city}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tight leading-[0.95]">
            {study.name}
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl font-medium">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="glass-line rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-neutral-700">
              {study.industry}
            </span>
            <span className="glass-line rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-neutral-700">
              {study.result}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-8 card-premium p-4 md:p-5 overflow-hidden">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/10">
              <Image src={study.desktopImage} alt={`${study.name} desktop design`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
            </div>
          </div>
          <div className="lg:col-span-4 card-premium p-4 md:p-5 overflow-hidden">
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-black/10">
              <Image src={study.mobileImage} alt={`${study.name} mobile design`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <article className="lg:col-span-7 card-premium p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A0A0A] tracking-tight mb-4">Challenge</h2>
            <p className="text-neutral-600 text-[15px] md:text-base leading-relaxed">{study.challenge}</p>

            <h3 className="text-xl md:text-2xl font-black text-[#0A0A0A] tracking-tight mt-8 mb-4">What We Implemented</h3>
            <ul className="space-y-3">
              {study.approach.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-600 text-[15px] md:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card-premium p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#0A0A0A] tracking-tight mb-5">Before and After</h2>
              <div className="space-y-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">{metric.label}</p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-neutral-500">{metric.before}</span>
                      <ArrowRight className="w-4 h-4 text-[#FF6A00]" />
                      <span className="text-sm font-black text-[#0A0A0A]">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium p-7 md:p-8">
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">"{study.testimonial.quote}"</p>
              <p className="text-[#0A0A0A] font-black mt-4">{study.testimonial.author}</p>
              <p className="text-neutral-500 text-sm">{study.testimonial.role}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl card-premium p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0A0A0A] tracking-tight">Want results like this for your business?</h2>
            <p className="text-neutral-600 mt-2">Book a free strategy call and get a practical growth roadmap for your market.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A0A0A] text-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-[#FF6A00] transition-colors"
          >
            Get Free Growth Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
