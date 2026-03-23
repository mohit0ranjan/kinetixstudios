import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = buildPageMetadata({
  title: "About Kinetix Studios | Our Team",
  description: "Meet the team of designers, developers, and marketers from NIT Jalandhar helping businesses grow online.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-24 bg-[#F4F5F7]">
      <About />
      <CTA />
    </main>
  );
}