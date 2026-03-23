export type CaseStudyMetric = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  city: string;
  result: string;
  summary: string;
  challenge: string;
  approach: string[];
  metrics: CaseStudyMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  desktopImage: string;
  mobileImage: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "glownest-studio",
    name: "GlowNest Studio",
    industry: "Salon & Aesthetics",
    city: "Jalandhar",
    result: "3x Booking Volume",
    summary:
      "A premium salon that was strong offline but invisible online. We built a conversion-focused website, local SEO, and ad funnel that tripled monthly bookings.",
    challenge:
      "The business depended on referrals and walk-ins, had no lead tracking, and was missing from high-intent Google searches.",
    approach: [
      "Built a mobile-first website with service pages and one-click call/WhatsApp actions",
      "Optimized Google Business Profile and local landing pages for high-intent keywords",
      "Launched geo-targeted ads for bridal and premium treatment segments",
      "Set up lead tracking dashboard for calls, forms, and repeat appointments"
    ],
    metrics: [
      { label: "Monthly Bookings", before: "42", after: "126" },
      { label: "Qualified Leads", before: "58", after: "210" },
      { label: "Google Map Visibility", before: "Low", after: "Top 3" }
    ],
    testimonial: {
      quote:
        "We were always busy offline, but now our online leads are steady every week and easier to convert.",
      author: "Neha Arora",
      role: "Founder, GlowNest Studio"
    },
    desktopImage: "/portoflio/GlowWeb.png",
    mobileImage: "/portoflio/GlowMob.png"
  },
  {
    slug: "globalway-visa",
    name: "GlobalWay Visa",
    industry: "Immigration Services",
    city: "Ludhiana",
    result: "+200% Qualified Leads",
    summary:
      "A consultancy competing in a crowded market. We repositioned the brand with authority-led pages and intent-led lead generation.",
    challenge:
      "Lead quality was inconsistent and most inquiries came from low-intent traffic.",
    approach: [
      "Created service landing pages aligned to visa categories",
      "Built trust stack with counselor credentials, testimonials, and FAQ",
      "Ran ad campaigns with tighter city and intent filters",
      "Introduced lead scoring workflow for counseling team"
    ],
    metrics: [
      { label: "Qualified Leads", before: "70", after: "212" },
      { label: "Consultation Bookings", before: "24", after: "83" },
      { label: "Lead Quality Score", before: "5/10", after: "8/10" }
    ],
    testimonial: {
      quote:
        "Our team now receives better inquiries and converts faster because the website pre-qualifies people.",
      author: "Amanpreet Singh",
      role: "Director, GlobalWay Visa"
    },
    desktopImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "brewbite-cafe",
    name: "BrewBite Cafe",
    industry: "Cafe & Dining",
    city: "Chandigarh",
    result: "4.5x Content ROI",
    summary:
      "A local cafe needed stronger weekend footfall. We built a social-content plus local-search engine for recurring demand.",
    challenge:
      "Great ambience but weak discoverability and inconsistent campaign execution.",
    approach: [
      "Designed visual content system tailored for Instagram and local audiences",
      "Built offer-led landing pages for events and group reservations",
      "Connected paid ads with WhatsApp-first booking flow",
      "Implemented monthly creative and performance optimization cycle"
    ],
    metrics: [
      { label: "Weekend Footfall", before: "120", after: "310" },
      { label: "Campaign ROI", before: "1.4x", after: "4.5x" },
      { label: "Repeat Customers", before: "18%", after: "34%" }
    ],
    testimonial: {
      quote:
        "We finally have a system that turns content into actual table bookings, not just likes.",
      author: "Rohit Batra",
      role: "Owner, BrewBite Cafe"
    },
    desktopImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "apex-scholars",
    name: "Apex Scholars",
    industry: "Coaching Institute",
    city: "Delhi",
    result: "Peak Enrollment Season",
    summary:
      "A coaching center that needed predictable admissions. We rebuilt their funnel for parent trust and inquiry conversion.",
    challenge:
      "High inquiry drop-off between website visits and counseling calls.",
    approach: [
      "Created program-led pages with clear outcomes and parent proof",
      "Improved local SEO for class and exam-intent keywords",
      "Launched admission-cycle campaigns with retargeting",
      "Set up inquiry response playbook for counseling team"
    ],
    metrics: [
      { label: "Admission Inquiries", before: "90", after: "265" },
      { label: "Counseling Calls", before: "38", after: "121" },
      { label: "Enrollment Rate", before: "14%", after: "31%" }
    ],
    testimonial: {
      quote:
        "Our admissions are now organized and predictable, especially during peak season.",
      author: "Simran Kaur",
      role: "Academic Director, Apex Scholars"
    },
    desktopImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
