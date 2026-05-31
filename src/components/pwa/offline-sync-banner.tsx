import { CloudOff, RefreshCcw, Wifi } from "lucide-react";

export function OfflineSyncBanner() {
  return (
    <section className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-black/20 p-4 text-cyan-100">
            <CloudOff className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
              PWA Offline Mode
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Synchronisation intelligente hors ligne
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
              SpectralFlow conserve les messages, notifications et états critiques même lorsque
              l'application est fermée ou hors connexion.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10">
            <RefreshCcw className="h-4 w-4" />
            Sync queue
          </button>

          <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
            <Wifi className="h-4 w-4" />
            Connection restored
          </div>
        </div>
      </div>
    </section>
  );
}
