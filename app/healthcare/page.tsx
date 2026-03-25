import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import HealthcareLanding from "./HealthcareLanding";

export const metadata: Metadata = buildPageMetadata({
  title: "Healthcare & Clinic Marketing | Premium Creatives",
  description:
    "Transform cluttered clinic ads into premium, trust-building creatives. SEO, Google Ads, and brand identity for doctors, dentists, and hospitals.",
  path: "/healthcare",
  keywords: [
    "healthcare marketing agency India",
    "clinic digital marketing",
    "doctor branding agency Punjab",
    "hospital website design",
  ],
});

export default function HealthcarePage() {
  return <HealthcareLanding />;
}
