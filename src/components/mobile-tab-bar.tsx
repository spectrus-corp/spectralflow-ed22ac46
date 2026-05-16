import { Link, useRouterState } from "@tanstack/react-router";
import { Home, MessageCircle, User, Settings } from "lucide-react";

const items = [
  { title: "Flux", url: "/feed", icon: Home },
  { title: "Chat", url: "/chat", icon: MessageCircle },
  { title: "Profil", url: "/profile", icon: User },
  { title: "Réglages", url: "/settings", icon: Settings },
] as const;

/** Bottom tab bar shown on mobile only. */
export function MobileTabBar() {
  const currentPath = useRouterState({ select: (r) => r.location.pathname });

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-center justify-around border-t border-border bg-background/85 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Navigation principale"
    >
      {items.map((item) => {
        const active = currentPath.startsWith(item.url);
        return (
          <Link
            key={item.url}
            to={item.url}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
              active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon className={`h-5 w-5 ${active ? "drop-shadow-[0_0_8px_var(--color-primary)]" : ""}`} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
