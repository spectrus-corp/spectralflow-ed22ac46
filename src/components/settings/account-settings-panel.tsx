import { Bell, Lock, Shield, Smartphone, User } from "lucide-react";

const settings = [
  {
    icon: User,
    title: "Profile & Identity",
    description: "Gestion du profil public, pseudo et visibilité.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "MFA, appareils connectés et sessions actives.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Push Firebase, alertes realtime et préférences live.",
  },
  {
    icon: Smartphone,
    title: "Mobile & PWA",
    description: "Synchronisation hors ligne et appareils autorisés.",
  },
];

export function AccountSettingsPanel() {
  return (
    <main className="min-h-screen bg-[#020617] p-6 text-white">
      <section className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8">
        <div className="flex items-center gap-3 text-cyan-200">
          <Shield className="h-6 w-6" />
          <span className="text-sm uppercase tracking-[0.3em]">
            Settings Center
          </span>
        </div>

        <h1 className="mt-5 text-5xl font-black">
          Account & Privacy Settings
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {settings.map((setting) => {
            const Icon = setting.icon;

            return (
              <article
                key={setting.title}
                className="rounded-[30px] border border-white/10 bg-[#0f172a] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-2xl font-black">{setting.title}</h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {setting.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
