import { Check, Shield, Sparkles, UserCheck } from "lucide-react";

const onboardingSteps = [
  {
    title: "Secure profile",
    description: "Activation MFA et sécurité compte.",
  },
  {
    title: "Community setup",
    description: "Choix des serveurs et préférences sociales.",
  },
  {
    title: "Realtime sync",
    description: "Notifications push et synchronisation PWA.",
  },
  {
    title: "Parental controls",
    description: "Protection mineurs et validation légale.",
  },
];

export function AccountOnboarding() {
  return (
    <main className="min-h-screen bg-[#020617] p-6 text-white">
      <section className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-cyan-200">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.3em]">
                SpectralFlow Setup
              </span>
            </div>

            <h1 className="mt-5 text-5xl font-black">
              Onboarding sécurisé nouvelle génération
            </h1>

            <p className="mt-5 text-slate-300 leading-8">
              Configuration du compte, protection des données, synchronisation temps réel et
              personnalisation des espaces communautaires.
            </p>
          </div>

          <div className="rounded-[32px] border border-cyan-400/20 bg-black/20 p-6">
            <div className="flex items-center gap-3 text-emerald-200">
              <Shield className="h-5 w-5" />
              Security score
            </div>

            <h2 className="mt-4 text-5xl font-black">92%</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {onboardingSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[32px] border border-white/10 bg-[#0f172a] p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
              {index + 1}
            </div>

            <h2 className="mt-5 text-2xl font-black">{step.title}</h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {step.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-emerald-300">
              <Check className="h-4 w-4" />
              Ready
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
        <div className="flex items-center gap-3 text-cyan-200">
          <UserCheck className="h-5 w-5" />
          <span className="text-sm uppercase tracking-[0.3em]">
            Identity & Compliance
          </span>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-slate-300">
            Consentement parental vérifiable.
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-slate-300">
            Validation email et appareil sécurisé.
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-slate-300">
            Isolation des espaces adultes et mineurs.
          </div>
        </div>
      </section>
    </main>
  );
}
