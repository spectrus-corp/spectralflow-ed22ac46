import { AlertTriangle, Ban, Flag, Shield, UserX } from "lucide-react";

const reports = [
  {
    id: "report-1",
    reason: "Spam detected",
    severity: "High",
  },
  {
    id: "report-2",
    reason: "Harassment report",
    severity: "Critical",
  },
  {
    id: "report-3",
    reason: "Sensitive media",
    severity: "Medium",
  },
];

export function ModerationDashboard() {
  return (
    <main className="min-h-screen bg-[#030712] p-6 text-white">
      <header className="rounded-[32px] border border-red-500/10 bg-red-500/5 p-8">
        <div className="flex items-center gap-3 text-red-200">
          <Shield className="h-6 w-6" />
          <span className="text-sm uppercase tracking-[0.3em]">
            Trust & Safety
          </span>
        </div>

        <h1 className="mt-4 text-5xl font-black">
          Moderation Control Center
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300 leading-8">
          Surveillance des signalements, protection anti-raid et gestion des sanctions en temps réel.
        </p>
      </header>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center gap-3 text-cyan-200">
            <Flag className="h-5 w-5" />
            <span>Reports</span>
          </div>

          <h2 className="mt-4 text-4xl font-black">128</h2>
        </article>

        <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center gap-3 text-orange-200">
            <AlertTriangle className="h-5 w-5" />
            <span>Threat Alerts</span>
          </div>

          <h2 className="mt-4 text-4xl font-black">16</h2>
        </article>

        <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center gap-3 text-red-200">
            <Ban className="h-5 w-5" />
            <span>Banned Accounts</span>
          </div>

          <h2 className="mt-4 text-4xl font-black">34</h2>
        </article>
      </section>

      <section className="mt-8 rounded-[32px] border border-white/10 bg-[#0f172a] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black">Active Reports</h2>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10">
            Export Logs
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {reports.map((report) => (
            <article
              key={report.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/20 p-5"
            >
              <div>
                <h3 className="text-lg font-bold">{report.reason}</h3>
                <p className="text-sm text-slate-400">
                  Severity: {report.severity}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
                  Review
                </button>

                <button className="rounded-2xl bg-red-500 px-4 py-3 text-sm text-white hover:scale-[1.02]">
                  <span className="flex items-center gap-2">
                    <UserX className="h-4 w-4" />
                    Suspend
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
