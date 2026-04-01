import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kinetix Studios",
  description: "Terms and conditions for using Kinetix Studios services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-surface-0 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-lg text-text-secondary">
          <p className="mb-6 font-medium">Last Updated: March 2026</p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the Kinetix Studios website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">2. Use License</h2>
          <p className="mb-6">
            Permission is granted to temporarily download one copy of the materials (information or software) on Kinetix Studios&apos; website for personal, non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">3. Service Delivery</h2>
          <p className="mb-6">
            Timelines and deliverables for custom agency work (web design, ads, SEO) will be defined explicitly in individual client contracts. These general terms govern the use of our primary website.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">4. Limitations</h2>
          <p className="mb-6">
            In no event shall Kinetix Studios or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
