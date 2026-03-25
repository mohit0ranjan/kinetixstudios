import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import EducationLanding from "./EducationLanding";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Creatives for Coaching Institutes | Kinetix Studios",
  description:
    "Stop looking like a local coaching ad. Kinetix transforms cluttered posters into premium, high-converting creatives that actually bring admissions.",
  path: "/education",
  keywords: [
    "coaching institute marketing",
    "JEE NEET coaching creatives",
    "education poster design",
    "premium coaching branding",
    "admission marketing agency",
  ],
});

export default function EducationPage() {
  return <EducationLanding />;
}
