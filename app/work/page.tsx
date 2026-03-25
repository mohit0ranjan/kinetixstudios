import type { Metadata } from "next";
import dynamic from "next/dynamic";
import WorkHeroCaseStudy from "@/components/sections/work/WorkHeroCaseStudy";
import IndustrySection from "@/components/sections/work/IndustrySection";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata } from "@/lib/seo";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies for Local Business Marketing",
  description:
    "Explore real growth stories from businesses using Kinetix Studios for SEO, paid ads, and social media in Punjab and India.",
  path: "/work",
  keywords: ["best agency for local business marketing in India", "performance marketing agency Punjab"],
});

// -- Case Study Data --

const fitnessStudies = [
  {
    title: "Gym Lead Generation System",
    domain: "targetfitnessjalandhar.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466352/a2882e3c-499b-401b-8785-3ed83116bd52.png",
    bullets: [
      { label: "Problem", text: "Low local search visibility & stiff competition" },
      { label: "Solution", text: "Local SEO & High-intent Google Ads" },
      { label: "Impact", text: "45+ new member inquiries monthly" },
    ],
  },
  {
    title: "Yoga Studio Bookings",
    domain: "zenithyoga.in",
    location: "Amritsar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466403/d959544c-1775-4862-82ca-d89c5c957c0d.png",
    bullets: [
      { label: "Problem", text: "Empty daytime classes despite great instructors" },
      { label: "Solution", text: "Hyper-local Meta Ads with free trial offers" },
      { label: "Impact", text: "Filled daytime slots to 90% capacity" },
    ],
  }
];

const educationStudies = [
  {
    title: "School Admissions Engine",
    domain: "gsss-jalandhar.edu.in",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466801/ba8516e9-0c1f-433e-af8d-697a78f92abc.png",
    bullets: [
      { label: "Problem", text: "Invisible online presence to modern parents" },
      { label: "Solution", text: "Trust-focused website & intent-based SEO" },
      { label: "Impact", text: "Maximized enrollment capacity & local authority" }
    ],
  },
  {
    title: "Visa Consultancy System",
    domain: "globalwayvisa.in",
    location: "Ludhiana, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466790/76ebaadd-f5a4-4952-9971-186d5c9055c6.png",
    bullets: [
      { label: "Problem", text: "Paying high costs for low-quality shared leads" },
      { label: "Solution", text: "Exclusive lead funnel via Google Search Ads" },
      { label: "Impact", text: "3.5x reduction in Cost Per Acquisition (CPA)" }
    ],
  }
];

const healthcareStudies = [
  {
    title: "Patient Acquisition Funnel",
    domain: "ohccdugriclinic.com",
    location: "Ludhiana, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466848/9a5de1ea-09b8-480e-ad14-d74e5e548fb4.png",
    bullets: [
      { label: "Problem", text: "Relying purely on offline word-of-mouth" },
      { label: "Solution", text: "Medical SEO & seamless WhatsApp booking" },
      { label: "Impact", text: "Consistent weekly flow of new patients" }
    ],
  },
  {
    title: "Dental Practice Growth",
    domain: "smilecraftdental.in",
    location: "Chandigarh, India",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466867/ff089954-6c93-49d4-b2e9-69de8701b61c.png",
    bullets: [
      { label: "Problem", text: "Zero visibility for high-ticket implants" },
      { label: "Solution", text: "Educational video ads & premium web design" },
      { label: "Impact", text: "12+ high-ticket consultations per month" }
    ],
  }
];

const restaurantStudies = [
  {
    title: "Restaurant Footfall Flywheel",
    domain: "chakbropub.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466944/35713b8b-f7f2-4d7b-8690-ba476040f643.png",
    bullets: [
      { label: "Problem", text: "High reliance on aggregator platforms (Zomato)" },
      { label: "Solution", text: "Direct online ordering & Instagram Ad funnel" },
      { label: "Impact", text: "3x direct weekend table reservations" }
    ],
  },
  {
    title: "Cafe Weekend Rush",
    domain: "brewbite.in",
    location: "Amritsar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://res.cloudinary.com/dnv3wq7ga/image/upload/v1774466950/80f17170-55b3-4005-8106-0071df6cb487.png",
    bullets: [
      { label: "Problem", text: "Slow weekday afternoons, stagnant weekend growth" },
      { label: "Solution", text: "Viral influencer collabs & targeted offers" },
      { label: "Impact", text: "Doubled average daily footfall in 60 days" }
    ],
  }
];

const localServiceStudies = [
  {
    title: "Premium Salon Branding",
    domain: "s7salon.com",
    location: "Goraya, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800",
    bullets: [
      { label: "Problem", text: "Premium services but outdated digital footprint" },
      { label: "Solution", text: "Luxury web design & bridal local targeting" },
      { label: "Impact", text: "Dominated high-ticket local beauty searches" }
    ],
  },
  {
    title: "Home Service Leads",
    domain: "eliteplumber.in",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800",
    bullets: [
      { label: "Problem", text: "Competing on price against local directories" },
      { label: "Solution", text: "Google Local Services Ads & trust-based website" },
      { label: "Impact", text: "40% increase in emergency call bookings" }
    ],
  }
];


export default function WorkPage() {
  return (
    <main className="font-sans min-h-screen bg-surface-1">
      {/* Featured Hero Case Study */}
      <WorkHeroCaseStudy />

      {/* Industry Sections */}
      <IndustrySection 
        industry="Fitness"
        title="Fitness & Wellness"
        description="We help gyms, yoga studios, and fitness centers predictably sign up new members every single month."
        caseStudies={fitnessStudies}
        alternatingBackground={false}
      />

      <IndustrySection 
        industry="Education"
        title="Schools & Institutes"
        description="Position your institution as the top choice for parents and students in your city."
        caseStudies={educationStudies}
        alternatingBackground={true}
      />

      <IndustrySection 
        industry="Healthcare"
        title="Clinics & Hospitals"
        description="Drive consistent patient appointments and build trust before they even step into your clinic."
        caseStudies={healthcareStudies}
        alternatingBackground={false}
      />

      <IndustrySection 
        industry="Restaurants"
        title="Food & Beverage"
        description="Cut dependency on aggregators and drive direct footfall through mouth-watering content and targeted ads."
        caseStudies={restaurantStudies}
        alternatingBackground={true}
      />

      <IndustrySection 
        industry="Local Services"
        title="Local Businesses"
        description="From premium salons to home services, we make you the undeniable #1 choice in your local area."
        caseStudies={localServiceStudies}
        alternatingBackground={false}
      />

      {/* Testimonials */}
      <Testimonials />
      
      {/* Universal CTA */}
      <CTA />
    </main>
  );
}
