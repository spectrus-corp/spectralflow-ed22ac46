import { createFileRoute, Outlet, Navigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PanelLeft, PanelLeftClose, Plus } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { PluginHost } from "@/components/plugin-host";
import { CreateVideoComposer } from "@/components/create-post";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { installSoundGesture } from "@/lib/sound";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const { user, loading } = useAuth();
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);

  // Install one-shot global sound-unmute gesture for the whole session.
  useEffect(() => {
    installSoundGesture();
  }, []);

  // Global listener — any page (or the mobile tab bar) can open the composer.
  useEffect(() => {
    const open = () => setComposerOpen(true);
    window.addEventListener("spectral:create", open);
    return () => window.removeEventListener("spectral:create", open);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  return (
    <SidebarProvider>
      <PluginHost />
      <div className="flex min-h-screen w-full">
        {/* Desktop / tablet sidebar (can be hidden via toggle) */}
        {!sidebarHidden && (
          <div className="hidden md:block">
            <AppSidebar />
          </div>
        )}
        <div className="flex min-h-screen flex-1 flex-col">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        {/* Floating sidebar toggle — desktop / tablet only */}
        <button
          onClick={() => setSidebarHidden((v) => !v)}
          aria-label={sidebarHidden ? "Afficher la barre latérale" : "Cacher la barre latérale"}
          className="hidden md:flex fixed left-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-xl transition-transform hover:scale-105 active:scale-95"
        >
          {sidebarHidden ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </button>
        {/* Global "Publier" floating button — desktop only (mobile uses tab bar FAB) */}
        <button
          onClick={() => setComposerOpen(true)}
          aria-label="Créer un post"
          className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:scale-110 active:scale-95"
        >
          <Plus className="h-7 w-7" />
        </button>
        {/* Mobile bottom tab bar */}
        <MobileTabBar />
        {/* Global composer */}
        <CreateVideoComposer
          open={composerOpen}
          onClose={() => setComposerOpen(false)}
          onPosted={() => window.dispatchEvent(new CustomEvent("spectral:posted"))}
        />
      </div>
    </SidebarProvider>
  );
}
