import { Shield, Users, Wrench } from 'lucide-react';

export function CommunityAdminPanel() {
  return (
    <main className="min-h-screen bg-[#020617] p-6 text-white">
      <section className="rounded-[32px] border border-white/10 bg-[#0f172a] p-8">
        <div className="flex items-center gap-3 text-cyan-200">
          <Shield className="h-6 w-6" />
          <span className="text-sm uppercase tracking-[0.3em]">
            Community Control
          </span>
        </div>

        <h1 className="mt-5 text-5xl font-black">
          Admin Community Panel
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <Users className="h-6 w-6 text-cyan-200" />
            <h2 className="mt-4 text-3xl font-black">2.4k</h2>
            <p className="mt-2 text-sm text-slate-400">Connected users</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <Wrench className="h-6 w-6 text-orange-200" />
            <h2 className="mt-4 text-3xl font-black">12</h2>
            <p className="mt-2 text-sm text-slate-400">Moderation actions</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <Shield className="h-6 w-6 text-emerald-200" />
            <h2 className="mt-4 text-3xl font-black">99%</h2>
            <p className="mt-2 text-sm text-slate-400">Security uptime</p>
          </article>
        </div>
      </section>
    </main>
  );
}
