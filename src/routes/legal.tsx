import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

function LegalLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <header className="relative z-10 border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Spectral<span className="text-neon">Flow</span>
            </span>
          </Link>
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-12">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-border bg-card/30 py-8">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/legal/terms" className="hover:text-primary hover:underline">
              Conditions d&apos;utilisation
            </Link>
            <Link to="/legal/privacy" className="hover:text-primary hover:underline">
              Politique de confidentialite
            </Link>
            <Link to="/legal/cookies" className="hover:text-primary hover:underline">
              Politique des cookies
            </Link>
            <Link to="/legal/minors" className="hover:text-primary hover:underline">
              Protection des mineurs
            </Link>
            <Link to="/legal/parental-consent" className="hover:text-primary hover:underline">
              Consentement parental
            </Link>
          </nav>
          <p className="mt-4 text-xs text-muted-foreground">
            SpectralFlow - Tous droits reserves. Derniere mise a jour : Mai 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
