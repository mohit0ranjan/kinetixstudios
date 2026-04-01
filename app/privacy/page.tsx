import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kinetix Studios",
  description: "Learn how we handle and protect your data at Kinetix Studios.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-surface-0 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-lg text-text-secondary">
          <p className="mb-6 font-medium">Last Updated: March 2026</p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">1. Information We Collect</h2>
          <p className="mb-6">
            We collect information you provide directly to us when you fill out a contact form, request an audit, or communicate with us. This may include your name, email address, phone number, and business details.
          </p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve our services, communicate with you about your projects, and send you technical notices and support messages.
          </p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">3. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">4. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@kinetixstudios.in" className="text-brand hover:underline font-semibold">hello@kinetixstudios.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
