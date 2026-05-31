import { Home, Radio, Users, Video } from 'lucide-react';

export function MobileNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#020617] p-4 text-white lg:hidden">
      <div className="flex items-center justify-around">
        <button className="flex flex-col items-center gap-2 text-cyan-300">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center gap-2 text-white/70">
          <Users className="h-5 w-5" />
          <span className="text-xs">Servers</span>
        </button>

        <button className="flex flex-col items-center gap-2 text-white/70">
          <Radio className="h-5 w-5" />
          <span className="text-xs">Live</span>
        </button>

        <button className="flex flex-col items-center gap-2 text-white/70">
          <Video className="h-5 w-5" />
          <span className="text-xs">Calls</span>
        </button>
      </div>
    </nav>
  );
}
