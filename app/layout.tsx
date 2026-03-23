import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import { defaultKeywords, siteConfig } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Best Digital Marketing Agency in Jalandhar | Kinetix Studios",
    template: "%s | Kinetix Studios",
  },
  description:
    "Kinetix Studios helps local businesses in Punjab grow with SEO, Google Ads, social media marketing, and conversion-focused websites.",
  keywords: defaultKeywords,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Jalandhar | Kinetix Studios",
    description:
      "Rank higher, get more calls, and grow revenue with Kinetix Studios. SEO, paid ads, and social media for Punjab and Pan-India businesses.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kinetix Studios - Digital Agency",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Punjab | Kinetix Studios",
    description:
      "Get a free growth audit from Kinetix Studios. We help local businesses scale with SEO, ads, and social media campaigns.",
    images: ["/og-image.jpg"],
  },
  category: "Digital Marketing",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased bg-background text-foreground`}
    >
      <body className="min-h-full flex flex-col pt-16 md:pt-20">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col min-h-screen">
            {children}
          </main>
          <StickyCTA />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
