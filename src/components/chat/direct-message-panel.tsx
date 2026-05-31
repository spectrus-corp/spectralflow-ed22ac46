import { Send, ShieldCheck, Phone, Video } from "lucide-react";

const messages = [
  {
    id: 1,
    author: "Astra",
    content: "Le live SpectralFlow démarre dans 5 minutes.",
  },
  {
    id: 2,
    author: "Nova",
    content: "Le salon vocal privé est prêt avec partage écran.",
  },
  {
    id: 3,
    author: "Kai",
    content: "Les notifications push Firebase sont synchronisées.",
  },
];

export function DirectMessagePanel() {
  return (
    <section className="flex h-screen flex-col bg-[#020817] text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Secure conversation
          </p>
          <h1 className="mt-2 text-2xl font-black">Nova</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
            <Phone className="h-5 w-5" />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
            <Video className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
        {messages.map((message) => (
          <article
            key={message.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                {message.author.slice(0, 1)}
              </div>

              <div>
                <h2 className="font-semibold">{message.author}</h2>
                <div className="flex items-center gap-1 text-xs text-emerald-300">
                  <ShieldCheck className="h-3 w-3" />
                  Chiffrement actif
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {message.content}
            </p>
          </article>
        ))}
      </div>

      <footer className="border-t border-white/10 p-5">
        <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <input
            placeholder="Envoyer un message sécurisé"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500"
          />

          <button className="rounded-2xl bg-cyan-400 p-3 text-slate-950 transition hover:scale-[1.02]">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </section>
  );
}
