import { Radio, Users, Video } from "lucide-react";

const streams = [
  {
    id: "stream-1",
    title: "Cyberpunk music session",
    viewers: "12.4k",
    category: "Music",
  },
  {
    id: "stream-2",
    title: "Competitive arena squad",
    viewers: "8.1k",
    category: "Gaming",
  },
];

export function LiveStreamCard() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {streams.map((stream) => (
        <article
          key={stream.id}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-[#081120] text-white"
        >
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/20">
            <Video className="h-16 w-16 text-cyan-100" />
          </div>

          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {stream.category}
                </p>
                <h2 className="mt-2 text-2xl font-black">{stream.title}</h2>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-200">
                <Radio className="h-4 w-4" />
                LIVE
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Users className="h-4 w-4" />
              {stream.viewers} viewers connectés
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
