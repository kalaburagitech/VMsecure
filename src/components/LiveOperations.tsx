import { GlassPanel } from './GlassPanel';
import { Users, Clock, Route, UserCheck, AlertTriangle } from 'lucide-react';

export function LiveOperations() {
  return (
    <div className="relative w-full z-20 pb-32 flex justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 px-4 md:px-8">
        
        {/* Main Status Panel */}
        <GlassPanel delay={0.1} className="p-4 md:p-6 col-span-2 lg:col-span-1 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white/90 tracking-wide">Site Overview</h2>
            <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] md:text-xs font-medium uppercase tracking-wider mb-1 md:mb-2 flex items-center gap-1">
                <Users className="w-3 h-3 md:w-3.5 md:h-3.5" /> Guards
              </span>
              <span className="text-2xl md:text-4xl font-light text-white tabular-nums">24</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] md:text-xs font-medium uppercase tracking-wider mb-1 md:mb-2 flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" /> Present
              </span>
              <span className="text-2xl md:text-4xl font-light text-white tabular-nums">96%</span>
            </div>
          </div>
        </GlassPanel>

        {/* Active Patrols */}
        <GlassPanel delay={0.2} className="p-4 md:p-6 flex flex-col justify-center h-full group hover:bg-white/10 transition-colors cursor-pointer">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
              <Route className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <span className="text-2xl md:text-3xl font-light text-white tabular-nums">3</span>
          </div>
          <div>
            <h3 className="text-white/90 font-medium text-sm md:text-lg">Active Patrols</h3>
            <p className="text-white/50 text-xs md:text-sm">Teams on route</p>
          </div>
        </GlassPanel>

        {/* Visitors */}
        <GlassPanel delay={0.3} className="p-4 md:p-6 flex flex-col justify-center h-full group hover:bg-white/10 transition-colors cursor-pointer">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
              <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            </div>
            <span className="text-2xl md:text-3xl font-light text-white tabular-nums">12</span>
          </div>
          <div>
            <h3 className="text-white/90 font-medium text-sm md:text-lg">Visitors Inside</h3>
            <p className="text-white/50 text-xs md:text-sm">Approved guests</p>
          </div>
        </GlassPanel>

        {/* Alerts */}
        <GlassPanel delay={0.4} className="p-4 md:p-6 col-span-2 lg:col-span-1 flex flex-col justify-center h-full border-red-500/30 bg-red-500/5 group hover:bg-red-500/10 transition-colors cursor-pointer">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
            </div>
            <span className="text-2xl md:text-3xl font-light text-red-400 tabular-nums">1</span>
          </div>
          <div>
            <h3 className="text-white/90 font-medium text-sm md:text-lg">Open Alerts</h3>
            <p className="text-red-400/80 text-xs md:text-sm line-clamp-1">Zone C perimeter</p>
          </div>
        </GlassPanel>

      </div>
    </div>
  );
}
