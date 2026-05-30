import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { Zap, Radio, MessageCircle, Youtube } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [],
  }),
});

function Landing() {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen" />;
  if (user) return <Navigate to="/feed" />;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="mt-24 grid gap-6 md:grid-cols-3"></div>
        <section className="mt-16 rounded-3xl border border-border bg-card/50 p-8 shadow-[0_0_40px_rgba(14,116,195,0.08)]">
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { title: "Publie ton contenu", description: "x" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-border bg-background/80 p-5">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-border bg-card/30 py-8"></footer>
    </div>
  );
}
