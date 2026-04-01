import Link from "next/link";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="section-container">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 md:px-10 md:py-10 text-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.7)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">{title}</h2>
              <p className="mt-2 text-sm md:text-base font-medium text-slate-200">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href={primaryHref}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm md:text-base font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm md:text-base font-bold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
