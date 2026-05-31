import { Mic, MicOff, Monitor, PhoneOff, Video, VideoOff } from "lucide-react";

const participants = [
  {
    id: "1",
    name: "Nova",
    speaking: true,
  },
  {
    id: "2",
    name: "Astra",
    speaking: false,
  },
  {
    id: "3",
    name: "Kai",
    speaking: true,
  },
];

export function CallInterface() {
  return (
    <main className="min-h-screen bg-[#020617] p-6 text-white">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            WebRTC Secure Room
          </p>
          <h1 className="mt-2 text-4xl font-black">Spectral Voice Hub</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <Mic className="h-5 w-5" />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <Video className="h-5 w-5" />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <Monitor className="h-5 w-5" />
          </button>

          <button className="rounded-2xl bg-red-500 p-4 text-white hover:scale-[1.02]">
            <PhoneOff className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {participants.map((participant) => (
          <article
            key={participant.id}
            className="rounded-[32px] border border-white/10 bg-[#0f172a] p-6"
          >
            <div className="flex aspect-video items-center justify-center rounded-[28px] bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-6xl font-black text-cyan-100">
              {participant.name.slice(0, 1)}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{participant.name}</h2>
                <p className="text-sm text-slate-400">
                  {participant.speaking ? "Speaking" : "Listening"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {participant.speaking ? (
                  <Mic className="h-5 w-5 text-emerald-300" />
                ) : (
                  <MicOff className="h-5 w-5 text-slate-500" />
                )}

                <VideoOff className="h-5 w-5 text-slate-500" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
