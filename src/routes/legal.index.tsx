import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Shield, Cookie, Users, UserCheck } from "lucide-react";

export const Route = createFileRoute("/legal/")({
  component: LegalIndex,
  head: () => ({
    meta: [
      { title: "Informations legales — SpectralFlow" },
      {
        name: "description",
        content:
          "Consultez les informations legales de SpectralFlow : conditions d'utilisation, politique de confidentialite, cookies et protection des mineurs.",
      },
    ],
  }),
});

const legalPages = [
  {
    to: "/legal/terms",
    icon: FileText,
    title: "Conditions Generales d'Utilisation",
    description: "Regles d'utilisation du service SpectralFlow, droits et responsabilites.",
  },
  {
    to: "/legal/privacy",
    icon: Shield,
    title: "Politique de Confidentialite",
    description: "Comment nous collectons, utilisons et protegeons vos donnees personnelles.",
  },
  {
    to: "/legal/cookies",
    icon: Cookie,
    title: "Politique des Cookies",
    description: "Informations sur les cookies utilises et comment les gerer.",
  },
  {
    to: "/legal/minors",
    icon: Users,
    title: "Protection des Mineurs",
    description: "Mesures de protection pour les utilisateurs de moins de 18 ans.",
  },
  {
    to: "/legal/parental-consent",
    icon: UserCheck,
    title: "Consentement Parental (COPPA)",
    description: "Processus de consentement parental pour les moins de 13 ans.",
  },
] as const;

function LegalIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Informations Legales</h1>
      <p className="mt-2 text-muted-foreground">
        Consultez nos politiques et conditions d&apos;utilisation pour comprendre vos droits et nos
        engagements.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {legalPages.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            className="group rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <page.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-semibold group-hover:text-primary">{page.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
