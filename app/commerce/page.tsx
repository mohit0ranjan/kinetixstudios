import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import CommerceLanding from "./CommerceLanding";

export const metadata: Metadata = buildPageMetadata({
  title: "E-Commerce & Retail Marketing | Premium Creatives",
  description:
    "Transform cluttered sale banners into premium, high-converting designs. Websites, ads, and branding for shops, e-commerce, and D2C brands.",
  path: "/commerce",
  keywords: [
    "e-commerce marketing agency India",
    "retail digital marketing Punjab",
    "online store branding agency",
    "D2C brand design",
  ],
});

export default function CommercePage() {
  return <CommerceLanding />;
}
