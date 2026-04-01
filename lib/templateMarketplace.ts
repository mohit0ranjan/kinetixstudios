export type TemplateHighlight = {
  label: "Use-case" | "Solution" | "Result";
  text: string;
  tone?: "neutral" | "success";
};

export type TemplateItem = {
  name: string;
  slug: string;
  image: string;
  category: string;
  tags: string[];
  badge?: "Popular" | "High Conversion" | "New";
  rating?: string;
  liveUrl?: string;
  summary: string;
  highlights: TemplateHighlight[];
};

export type TemplateCategory = {
  key: string;
  title: string;
  subtitle: string;
  templates: TemplateItem[];
};

export const templateCategories: TemplateCategory[] = [
  {
    key: "fitness",
    title: "Fitness Templates",
    subtitle: "Gym and yoga systems built for lead generation and recurring memberships.",
    templates: [
      {
        name: "Gym Lead Generation Template",
        slug: "gym-lead-gen",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png",
        category: "Fitness",
        tags: ["Gym", "Lead Gen"],
        badge: "High Conversion",
        rating: "4.5",
        summary: "A conversion-focused website funnel for gyms targeting local memberships.",
        highlights: [
          { label: "Use-case", text: "Independent and multi-branch gyms", tone: "neutral" },
          { label: "Solution", text: "Landing page + ad-ready lead capture", tone: "neutral" },
          { label: "Result", text: "Up to 300% increase in qualified inquiries", tone: "success" }
        ]
      },
      {
        name: "Yoga Studio Booking Template",
        slug: "yoga-booking",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466403/d959544c-1775-4862-82ca-d89c5c957c0d.png",
        category: "Fitness",
        tags: ["Yoga", "Bookings"],
        badge: "Popular",
        summary: "A clean booking-first template for yoga instructors and studios.",
        highlights: [
          { label: "Use-case", text: "Group class and private session bookings", tone: "neutral" },
          { label: "Solution", text: "Class schedule + instant WhatsApp booking", tone: "neutral" },
          { label: "Result", text: "Fills low-occupancy slots faster", tone: "success" }
        ]
      }
    ]
  },
  {
    key: "education",
    title: "Education Templates",
    subtitle: "Admission-focused templates for institutes, schools, and consultancies.",
    templates: [
      {
        name: "School Admissions Template",
        slug: "school-admissions-engine",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466801/ba8516e9-0c1f-433e-af8d-697a78f92abc.png",
        category: "Education",
        tags: ["School", "Admissions"],
        badge: "Popular",
        summary: "Built to increase parent trust and maximize admission inquiries.",
        highlights: [
          { label: "Use-case", text: "K12 schools and coaching institutes", tone: "neutral" },
          { label: "Solution", text: "Curriculum pages + inquiry flow", tone: "neutral" },
          { label: "Result", text: "Higher inquiry-to-counseling conversion", tone: "success" }
        ]
      },
      {
        name: "Visa Consultancy Lead Template",
        slug: "visa-consultancy-leads",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466790/76ebaadd-f5a4-4952-9971-186d5c9055c6.png",
        category: "Education",
        tags: ["Visa", "Consultancy"],
        badge: "New",
        summary: "Lead quality focused template for study-abroad consultants.",
        highlights: [
          { label: "Use-case", text: "Immigration and visa consultancies", tone: "neutral" },
          { label: "Solution", text: "Intent pages + pre-qualification forms", tone: "neutral" },
          { label: "Result", text: "Lower cost per qualified lead", tone: "success" }
        ]
      }
    ]
  },
  {
    key: "healthcare",
    title: "Healthcare Templates",
    subtitle: "Patient acquisition templates for clinics and specialty practices.",
    templates: [
      {
        name: "Clinic Appointment Template",
        slug: "clinic-appointment-funnel",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466848/9a5de1ea-09b8-480e-ad14-d74e5e548fb4.png",
        category: "Healthcare",
        tags: ["Clinic", "Appointments"],
        badge: "High Conversion",
        summary: "Designed to generate consistent patient bookings with trust-first UI.",
        highlights: [
          { label: "Use-case", text: "General clinics and specialist centers", tone: "neutral" },
          { label: "Solution", text: "Doctor profile + booking CTA system", tone: "neutral" },
          { label: "Result", text: "Increase in weekly appointment volume", tone: "success" }
        ]
      },
      {
        name: "Dental Consultation Template",
        slug: "dental-practice-growth",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466867/ff089954-6c93-49d4-b2e9-69de8701b61c.png",
        category: "Healthcare",
        tags: ["Dental", "Consultations"],
        summary: "A premium conversion flow for high-ticket dental services.",
        highlights: [
          { label: "Use-case", text: "Implants, orthodontics, smile design", tone: "neutral" },
          { label: "Solution", text: "Service education + trust stack", tone: "neutral" },
          { label: "Result", text: "More high-intent consultation requests", tone: "success" }
        ]
      }
    ]
  },
  {
    key: "restaurant",
    title: "Food & Beverage Templates",
    subtitle: "Reservation and ordering templates for restaurants, cafes, and bars.",
    templates: [
      {
        name: "Restaurant Reservation Template",
        slug: "restaurant-footfall-flywheel",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466944/35713b8b-f7f2-4d7b-8690-ba476040f643.png",
        category: "Food & Beverage",
        tags: ["Restaurant", "Reservations"],
        badge: "Popular",
        summary: "Grow direct reservations without over-dependence on aggregators.",
        highlights: [
          { label: "Use-case", text: "Fine dining and family restaurants", tone: "neutral" },
          { label: "Solution", text: "Direct booking + offer landing pages", tone: "neutral" },
          { label: "Result", text: "More direct weekend reservations", tone: "success" }
        ]
      },
      {
        name: "Cafe Weekend Rush Template",
        slug: "cafe-weekend-rush",
        image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466950/80f17170-55b3-4005-8106-0071df6cb487.png",
        category: "Food & Beverage",
        tags: ["Cafe", "Footfall"],
        summary: "Designed for cafe campaigns that increase both visits and repeat customers.",
        highlights: [
          { label: "Use-case", text: "Boutique cafes and coffee chains", tone: "neutral" },
          { label: "Solution", text: "Offer campaign pages + social hooks", tone: "neutral" },
          { label: "Result", text: "Stronger weekday-to-weekend occupancy", tone: "success" }
        ]
      }
    ]
  },
  {
    key: "local-services",
    title: "Local Business Templates",
    subtitle: "High-trust lead generation templates for local service providers.",
    templates: [
      {
        name: "Beauty Salon Booking Template",
        slug: "beauty-salon-booking",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200",
        category: "Local Services",
        tags: ["Beauty", "Salon"],
        badge: "High Conversion",
        summary: "A premium booking template for salons and beauty studios.",
        highlights: [
          { label: "Use-case", text: "Beauty, skincare, and bridal studios", tone: "neutral" },
          { label: "Solution", text: "Service-led landing pages + booking flow", tone: "neutral" },
          { label: "Result", text: "Increased high-ticket appointment requests", tone: "success" }
        ]
      },
      {
        name: "Home Services Lead Template",
        slug: "home-services-leads",
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200",
        category: "Local Services",
        tags: ["Home Services", "Emergency Leads"],
        summary: "Built for plumbers, electricians, and rapid-response local businesses.",
        highlights: [
          { label: "Use-case", text: "On-demand local service providers", tone: "neutral" },
          { label: "Solution", text: "Trust badges + urgency lead forms", tone: "neutral" },
          { label: "Result", text: "Higher emergency call booking rates", tone: "success" }
        ]
      }
    ]
  }
];

export const allTemplates: TemplateItem[] = templateCategories.flatMap((category) =>
  category.templates
);

export const bestTemplates: TemplateItem[] = allTemplates
  .filter((template) => template.badge === "Popular" || template.badge === "High Conversion")
  .slice(0, 6);

export function getTemplateBySlug(slug: string) {
  return allTemplates.find((template) => template.slug === slug);
}
