const voiceChannels = [
  'General Voice',
  'Gaming Squad',
  'Live Stage',
  'Music Lounge'
];

export function VoiceChannelGrid() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      {voiceChannels.map((channel) => (
        <article
          key={channel}
          className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 text-white"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Voice Channel
          </p>

          <h2 className="mt-4 text-2xl font-black">{channel}</h2>

          <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Persistent realtime room
          </div>
        </article>
      ))}
    </section>
  );
}
