import { Radio, Users, Video } from 'lucide-react';

export function LiveStreamPanel() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#111827] p-6 text-white">
      <div className="flex items-center gap-3 text-red-300">
        <Radio className="h-5 w-5" />
        <span className="text-sm uppercase tracking-[0.3em]">Live</span>
      </div>

      <div className="mt-6 rounded-3xl bg-black/30 p-10">
        <div className="flex items-center justify-center">
          <Video className="h-20 w-20 text-white/70" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Spectral Live Room</h2>
          <p className="mt-2 text-sm text-slate-400">
            Realtime creator streaming room
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-200">
          <Users className="h-4 w-4" />
          128 viewers
        </div>
      </div>
    </section>
  );
}
