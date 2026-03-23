export default function Loading() {
  return (
    <main className="min-h-[60vh] bg-[#F4F5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
        <div className="h-2 w-24 bg-slate-200 rounded-full animate-pulse mb-4" />
        <div className="h-6 w-2/3 bg-slate-200 rounded-lg animate-pulse mb-3" />
        <div className="h-4 w-full bg-slate-100 rounded animate-pulse mb-2" />
        <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse mb-2" />
        <div className="h-4 w-4/6 bg-slate-100 rounded animate-pulse" />
      </div>
    </main>
  );
}
