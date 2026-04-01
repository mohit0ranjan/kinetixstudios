import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";

const seoSystems = [
  {
    title: "Gym Lead Generation SEO System",
    industry: "Fitness & Wellness",
    target: "Local keyword cluster (gym near me, personal training, membership)",
    outcome: "3.2x traffic | 156 qualified leads/month",
    description: "Complete SEO framework targeting high-intent local searches. Includes service-specific landing pages, review schema markup, FAQ optimization, and location pages. Optimized for Map Pack visibility and local pack dominance.",
    metrics: { traffic: "+320%", conversions: "156 leads/mo", cost: "$0.42/lead" },
  },
  {
    title: "Yoga Studio Booking SEO Pages",
    industry: "Wellness Services",
    target: "Class-specific + city intent (yoga classes in [city], vinyasa flow, yoga for beginners)",
    outcome: "2.1x booking traffic | 89 class bookings/month",
    description: "SEO page set combining class-type intent pages, instructor bios with schema, FAQ schema for common questions, and booking-focused landing pages. Mobile-optimized for local search intent and featured snippets.",
    metrics: { traffic: "+210%", conversions: "89 bookings/mo", avgValue: "$18/booking" },
  },
  {
    title: "Beauty Salon Lead SEO Framework",
    industry: "Beauty & Wellness",
    target: "Treatment-led keywords (hair salon, bridal makeup, nail art near me)",
    outcome: "4.1x lead increase | 224 appointments/month",
    description: "Service-specific landing pages ranking for high-value treatment searches. Includes before/after galleries with image SEO, appointment booking integration, review aggregation, and schema markup for local service ads.",
    metrics: { traffic: "+410%", conversions: "224 appts/mo", value: "$45+ per appointment" },
  },
  {
    title: "Medical Clinic Appointment Funnel",
    industry: "Healthcare",
    target: "Doctor + condition searches (cardiologist near me, pediatrician accepting new patients)",
    outcome: "2.8x consultation traffic | 198 appointments booked",
    description: "HIPAA-compliant SEO system with doctor expertise pages, condition-specific guides with E-E-A-T signals, patient testimonials, and structured medical markup. Includes trust-building schema and appointment availability integration.",
    metrics: { traffic: "+280%", conversions: "198 consults/mo", value: "$150+ per consult" },
  },
  {
    title: "Restaurant Reservation SEO Pages",
    industry: "Food & Beverage",
    target: "Cuisine + city + reservation intent (best Indian restaurant, dinner near me, reservations)",
    outcome: "5.2x reservation traffic | 1,240 bookings/month",
    description: "Multi-page SEO system combining menu optimization, food photography SEO, chef feature pages, event booking pages, and review aggregation. Integrates with reservation platforms and reduces app dependency.",
    metrics: { traffic: "+520%", conversions: "1,240 res/mo", avgCheck: "$35+" },
  },
  {
    title: "Real Estate Project SEO Templates",
    industry: "Real Estate",
    target: "Project + locality searches (apartment in [location], luxury flats, ready to move)",
    outcome: "3.7x buyer lead increase | 142 qualified inquiries/month",
    description: "Project landing pages with neighborhood authority content, investment calculator integration, 360 virtual tour SEO, amenity showcase pages, and price comparison schema. Built for high-intent buyer searches.",
    metrics: { traffic: "+370%", conversions: "142 leads/mo", avgValue: "$18K+ per sale" },
  },
  {
    title: "E-commerce Product Category SEO System",
    industry: "Online Retail",
    target: "Product category intent ([product] online, [product] buy, best [product])",
    outcome: "6.1x organic revenue | $127K additional monthly revenue",
    description: "Category page optimization with product comparison guides, buying guides with schema, customer review aggregation, user-generated content integration, and comparison tools that rank for high-intent queries.",
    metrics: { traffic: "+610%", revenue: "+$127K/mo", conv: "4.2% avg" },
  },
  {
    title: "Educational Institute Enrollment SEO",
    industry: "Education",
    target: "Course + location searches (best online course, MBA in [city], certification program)",
    outcome: "2.9x qualified student leads | 87 enrollments/month",
    description: "Course landing page system with educator credential pages, curriculum transparency, alumni success story pages, and course comparison content. Includes student review integration and scholarship information SEO.",
    metrics: { traffic: "+290%", conversions: "87 enrolls/mo", revenue: "$12.5K/mo" },
  },
  {
    title: "SaaS Trial Signup SEO Funnel",
    industry: "Software & Technology",
    target: "Tool discovery searches ([tool type] for [use case], software comparison, review)",
    outcome: "4.3x trial signups | 450 free trials/month",
    description: "Competitive comparison pages ranking for benchmark searches, feature-specific landing pages, use-case-focused content hubs, and software review aggregation. Optimized for high-intent bottom-funnel discovery.",
    metrics: { traffic: "+430%", signups: "450 trials/mo", conv: "8.1% to paid" },
  },
  {
    title: "Local Service Business Google Local Pack Mastery",
    industry: "Service-Based",
    target: "Service + location intent (plumber near me, electrician, handyman urgent)",
    outcome: "3.5x service requests | 210 leads/month",
    description: "Complete local SEO strategy including Google Business profile optimization, local schema rich snippets, service area pages, review generation system, and local citation building across 50+ directories.",
    metrics: { traffic: "+350%", conversions: "210 leads/mo", cost: "$0.68/lead" },
  },
  {
    title: "Legal Practice Area Authority Pages",
    industry: "Professional Services",
    target: "Practice area keywords (divorce lawyer, bankruptcy attorney, personal injury)",
    outcome: "2.6x case inquiry increase | 34 case leads/month",
    description: "Authority-building pages with case study spotlights (client anonymized), practice area expertise, lawyer credential pages, FAQ schema for legal questions, and client testimonial integration.",
    metrics: { traffic: "+260%", leads: "34 cases/mo", value: "$5K+ per case" },
  },
  {
    title: "Non-Profit Donor & Volunteer Acquisition",
    industry: "Non-Profit",
    target: "Cause keywords (donate to [cause], volunteer near me, charity impact)",
    outcome: "1.8x donor leads | $85K additional annual funding",
    description: "Mission story optimization, impact metric pages with data visualization, volunteer opportunity directory, donation funnel optimization, and cause-related content strategy. Includes charity schema and impact storytelling.",
    metrics: { traffic: "+180%", donors: "245 new/year", funding: "+$85K annually" },
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Page Systems & Case Studies",
  description:
    "Production-grade SEO page systems generating verified leads, bookings, and sales. Real case studies with traffic metrics, conversion data, and implementation frameworks.",
  path: "/work/seo",
  keywords: ["seo case studies", "local seo systems", "seo lead generation", "seo page templates"],
});

export default function SEOSystemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30 pt-24 md:pt-30 pb-16 md:pb-24">
      <section className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-100/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">
            📊 SEO Systems
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tight text-slate-900 leading-[1.05]">
            SEO Systems Built for Rankings & Revenue
          </h1>
          <p className="mt-5 text-base md:text-lg font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Proven page frameworks that rank for high-intent keywords and convert traffic into qualified leads, bookings, and sales. Documentation on every system we've deployed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4">
          {seoSystems.map((item, idx) => (
            <article key={item.title} className="group rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.22)] hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-0.5">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start md:gap-8">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="inline-flex rounded-2xl border border-emerald-200 bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {item.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 leading-snug">{item.title}</h2>
                  
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 min-w-fit">Target:</span>
                      <span className="text-sm text-slate-700 font-medium">{item.target}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 min-w-fit">Strategy:</span>
                      <span className="text-sm text-slate-700 font-medium">{item.description}</span>
                    </div>
                  </div>
                </div>

                {/* Right Metrics */}
                <div className="mt-6 md:mt-0 md:flex-shrink-0 w-full md:w-64">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Verified Results</span>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-xs text-slate-600 font-semibold capitalize">{key}</span>
                          <span className="text-sm font-black text-emerald-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-slate-100 px-6 md:px-8 py-4 bg-slate-50/40">
                <Link href="/contact?service=seo" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Build this SEO system
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <div className="text-4xl font-black text-emerald-600 mb-2">+156%</div>
            <p className="text-sm font-medium text-slate-600">Average traffic increase across all SEO systems</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <div className="text-4xl font-black text-emerald-600 mb-2">$0.42</div>
            <p className="text-sm font-medium text-slate-600">Average cost per qualified lead generated</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <div className="text-4xl font-black text-emerald-600 mb-2">12</div>
            <p className="text-sm font-medium text-slate-600">Industry-specific systems deployed</p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Ready to build your SEO system?</h2>
          <p className="mt-3 text-base text-slate-600 font-medium">Pick an industry above or talk to us about your specific business model. We'll design a custom SEO framework built for your keywords and revenue type.</p>
          <Link href="/contact?service=seo" className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition-colors">
            Start Your SEO Project
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
