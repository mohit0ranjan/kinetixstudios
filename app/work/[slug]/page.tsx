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
    <main className="pt-24 min-h-screen bg-surface-1">
      {/* ── Hero ── */}
      <section className="py-14 md:py-20 bg-surface-1 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-brand rounded-full" />
            <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">
              Case Study / {study.city}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tight leading-[0.95]">
            {study.name}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl font-medium">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-text-secondary bg-surface-0 border border-black/5">
              {study.industry}
            </span>
            <span className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand bg-brand/10 border border-brand/20">
              {study.result}
            </span>
          </div>
        </div>
      </section>

      {/* ── Mockup Showcase ── */}
      <section className="py-12 md:py-16">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-8 bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-4 md:p-5 overflow-hidden">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/10">
              <Image src={study.desktopImage} alt={`${study.name} desktop design`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-4 md:p-5 overflow-hidden">
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-black/10">
              <Image src={study.mobileImage} alt={`${study.name} mobile design`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Content: Challenge + Approach + Metrics ── */}
      <section className="py-4 md:py-6">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <article className="lg:col-span-7 bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight mb-4">Challenge</h2>
            <p className="text-text-secondary text-[15px] md:text-base leading-relaxed">{study.challenge}</p>

            <h3 className="text-xl md:text-2xl font-black text-text-primary tracking-tight mt-8 mb-4">What We Implemented</h3>
            <ul className="space-y-3">
              {study.approach.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-[15px] md:text-base">
                  <span className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight mb-5">Before and After</h2>
              <div className="space-y-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-black/5 bg-surface-1 p-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-3">{metric.label}</p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-text-tertiary">{metric.before}</span>
                      <ArrowRight className="w-4 h-4 text-brand" />
                      <span className="text-sm font-black text-text-primary">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-7 md:p-8">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">&ldquo;{study.testimonial.quote}&rdquo;</p>
              <p className="text-text-primary font-black mt-4">{study.testimonial.author}</p>
              <p className="text-text-tertiary text-sm">{study.testimonial.role}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="bg-surface-0 rounded-2xl border border-black/5 shadow-[var(--shadow-card)] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">Want results like this for your business?</h2>
              <p className="text-text-secondary mt-2">Book a strategy call and get a practical growth roadmap for your market.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-surface-dark text-text-inverse px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-brand transition-colors shrink-0"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
