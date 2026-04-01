import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { allTemplates, getTemplateBySlug } from "@/lib/templateMarketplace";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allTemplates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return buildPageMetadata({
      title: "Template Not Found",
      description: "The requested template page could not be found.",
      path: "/templates",
    });
  }

  return buildPageMetadata({
    title: `${template.name} | Template`,
    description: template.summary,
    path: `/templates/${template.slug}`,
    keywords: [
      `${template.category.toLowerCase()} marketing template`,
      `${template.tags.join(" ").toLowerCase()} template`,
      "lead generation template",
    ],
  });
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 md:pt-28 md:pb-24">
      <section className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        <article className="lg:col-span-7 rounded-3xl border border-black/10 bg-white p-5 md:p-7 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.45)]">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-slate-100">
            <div className="relative flex items-center gap-2 border-b border-black/10 bg-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-1 text-[10px] font-semibold text-slate-500">
                live-template-preview
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={template.image}
                alt={`${template.name} preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>
        </article>

        <aside className="lg:col-span-5 rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.5)]">
          <div className="flex flex-wrap items-center gap-2">
            {template.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-slate-900">{template.name}</h1>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-slate-600">{template.summary}</p>

          <ul className="mt-6 space-y-3">
            {template.highlights.map((item) => (
              <li key={item.label} className="text-sm md:text-base text-slate-600">
                <span className="font-bold text-slate-900">{item.label}:</span> {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?template=${template.slug}`}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm md:text-base font-bold text-white hover:bg-slate-800"
            >
              Use This Template
            </Link>
            <Link
              href="/templates"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm md:text-base font-bold text-slate-700 hover:bg-slate-50"
            >
              Back to Templates
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
