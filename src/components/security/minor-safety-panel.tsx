import { ShieldCheck, UserCheck } from 'lucide-react';

export function MinorSafetyPanel() {
  return (
    <section className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6 text-white">
      <div className="flex items-center gap-3 text-emerald-200">
        <ShieldCheck className="h-5 w-5" />
        <span className="text-sm uppercase tracking-[0.3em]">
          Minor Safety
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-black">
        Protected Community Experience
      </h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-black/20 p-5">
          <UserCheck className="h-5 w-5 text-emerald-200" />
          <p className="mt-4 text-sm text-slate-200">
            Age restricted community filtering.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-black/20 p-5">
          <ShieldCheck className="h-5 w-5 text-emerald-200" />
          <p className="mt-4 text-sm text-slate-200">
            Secure moderation escalation.
          </p>
        </article>
      </div>
    </section>
  );
}
