import React from 'react';
import { Bot, Code, Cpu, Compass, Lightbulb, Gamepad2, ChevronRight, Trophy } from 'lucide-react';
import { COMPETITIONS } from '../data/eventData';

const iconMap = {
  Bot,
  Code,
  Cpu,
  Compass,
  Lightbulb,
  Gamepad2
};

const DropdownMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-navy-950/90 backdrop-blur-2xl border border-electric-500/40 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 blueprint-border"
    >
      <div className="text-[10px] font-mono text-electric-cyan uppercase tracking-widest px-3 py-1.5 font-bold border-b border-electric-500/20 mb-1 flex items-center justify-between">
        <span>Competitions & Tracks</span>
        <Trophy className="w-3 h-3 text-amber-400" />
      </div>

      <div className="space-y-1">
        {COMPETITIONS.map((item) => {
          const IconComponent = iconMap[item.icon] || Trophy;

          return (
            <a
              key={item.id}
              href="#events"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-electric-500/15 hover:border hover:border-electric-500/30 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-110 transition-transform">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">{item.name}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-electric-cyan group-hover:translate-x-0.5 transition-transform" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
