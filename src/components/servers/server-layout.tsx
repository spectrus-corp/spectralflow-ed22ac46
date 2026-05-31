const channels = ['general', 'voice', 'stream-room'];

export function ServerLayout() {
  return (
    <main className="flex min-h-screen bg-[#020617] text-white">
      <aside className="w-20 border-r border-white/10 bg-black/20 p-4">
        <div className="flex flex-col gap-4">
          <div className="h-14 w-14 rounded-2xl bg-cyan-400" />
          <div className="h-14 w-14 rounded-2xl bg-fuchsia-500" />
        </div>
      </aside>

      <aside className="w-72 border-r border-white/10 bg-[#0f172a] p-5">
        <h1 className="text-3xl font-black">SpectralFlow</h1>

        <div className="mt-8 space-y-3">
          {channels.map((channel) => (
            <button
              key={channel}
              className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left hover:bg-white/10"
            >
              #{channel}
            </button>
          ))}
        </div>
      </aside>

      <section className="flex-1 p-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-4xl font-black">Realtime Community Hub</h2>
        </div>
      </section>
    </main>
  );
}
