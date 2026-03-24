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
    business: "Target Fitness Gym",
    domain: "targetfitnessjalandhar.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
    bullets: [
      { label: "Problem", text: "Low local search visibility & stiff competition" },
      { label: "Solution", text: "Local SEO & High-intent Google Ads" },
      { label: "Impact", text: "45+ new member inquiries monthly" },
    ],
  },
  {
    title: "Yoga Studio Bookings",
    business: "Zenith Yoga Center",
    domain: "zenithyoga.in",
    location: "Amritsar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
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
    business: "GSSS Jalandhar",
    domain: "gsss-jalandhar.edu.in",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    bullets: [
      { label: "Problem", text: "Invisible online presence to modern parents" },
      { label: "Solution", text: "Trust-focused website & intent-based SEO" },
      { label: "Impact", text: "Maximized enrollment capacity & local authority" }
    ],
  },
  {
    title: "Visa Consultancy System",
    business: "GlobalWay Visa",
    domain: "globalwayvisa.in",
    location: "Ludhiana, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=800",
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
    business: "OHCC Dugri Clinic",
    domain: "ohccdugriclinic.com",
    location: "Ludhiana, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    bullets: [
      { label: "Problem", text: "Relying purely on offline word-of-mouth" },
      { label: "Solution", text: "Medical SEO & seamless WhatsApp booking" },
      { label: "Impact", text: "Consistent weekly flow of new patients" }
    ],
  },
  {
    title: "Dental Practice Growth",
    business: "Smilecraft Dental",
    domain: "smilecraftdental.in",
    location: "Chandigarh, India",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800",
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
    business: "Chak Bro Pub",
    domain: "chakbropub.com",
    location: "Jalandhar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    bullets: [
      { label: "Problem", text: "High reliance on aggregator platforms (Zomato)" },
      { label: "Solution", text: "Direct online ordering & Instagram Ad funnel" },
      { label: "Impact", text: "3x direct weekend table reservations" }
    ],
  },
  {
    title: "Cafe Weekend Rush",
    business: "BrewBite Café",
    domain: "brewbite.in",
    location: "Amritsar, Punjab",
    type: "Concept Digital Growth System",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
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
    business: "S7 Salon & Academy",
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
    business: "Elite Plumbers",
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
