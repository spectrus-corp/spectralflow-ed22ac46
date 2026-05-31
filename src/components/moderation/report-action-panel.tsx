import { Ban, Flag, ShieldAlert } from 'lucide-react';

export function ReportActionPanel() {
  return (
    <section className="rounded-[32px] border border-red-500/10 bg-[#111827] p-6 text-white">
      <div className="flex items-center gap-3 text-red-200">
        <ShieldAlert className="h-5 w-5" />
        <span className="text-sm uppercase tracking-[0.3em]">
          Safety Actions
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-black">
        Report & Block System
      </h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10">
          <Flag className="h-5 w-5" />
          Report user
        </button>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-5 py-4 text-white hover:scale-[1.02]">
          <Ban className="h-5 w-5" />
          Block account
        </button>
      </div>
    </section>
  );
}
