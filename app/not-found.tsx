import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F4F5F7] flex items-center justify-center px-4 pt-24">
      <div className="max-w-xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3">404</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-4">This page took a wrong turn</h1>
        <p className="text-slate-600 mb-8">
          The page you requested does not exist or has been moved. Use the links below to keep exploring Kinetix Studios.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="h-11 px-6 rounded-xl bg-[#0A0A0A] text-white font-bold inline-flex items-center justify-center">
            Back to Home
          </Link>
          <Link href="/services" className="h-11 px-6 rounded-xl border border-slate-300 text-slate-700 font-bold inline-flex items-center justify-center bg-white">
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
