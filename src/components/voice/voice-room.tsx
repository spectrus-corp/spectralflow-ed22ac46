import { Mic, PhoneOff, Users, Volume2 } from 'lucide-react';

export function VoiceRoom() {
  return (
    <main className="min-h-screen bg-[#020617] p-6 text-white">
      <section className="rounded-[32px] border border-white/10 bg-[#0f172a] p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Voice Channel
            </p>
            <h1 className="mt-4 text-5xl font-black">Realtime Voice Room</h1>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-emerald-400/10 px-4 py-2 text-emerald-200">
            <Users className="h-4 w-4" />
            18 connected
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-cyan-400 px-6 py-4 text-slate-950">
            <Mic className="h-5 w-5" />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <Volume2 className="h-5 w-5" />
          </button>

          <button className="rounded-2xl bg-red-500 px-6 py-4 text-white">
            <PhoneOff className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
