import { createFileRoute, Outlet, Navigate } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const { user, loading } = useAuth();

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
      <div className="flex min-h-screen w-full">
        {/* Desktop / tablet sidebar */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>
        <div className="flex min-h-screen flex-1 flex-col">
          {/* Desktop / tablet top bar — hidden on mobile to give the feed full height */}
          <header className="sticky top-0 z-20 hidden h-12 items-center gap-2 border-b border-border bg-background/70 px-3 backdrop-blur-xl md:flex">
            <SidebarTrigger />
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        {/* Mobile bottom tab bar */}
        <MobileTabBar />
      </div>
    </SidebarProvider>
  );
}
