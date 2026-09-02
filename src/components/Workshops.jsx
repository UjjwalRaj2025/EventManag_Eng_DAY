import React from 'react';
import { BrainCircuit, Cloud, Wifi, ShieldCheck, Zap, Atom, Clock, MapPin, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { WORKSHOPS } from '../data/eventData';

const iconMap = {
  BrainCircuit,
  Cloud,
  Wifi,
  ShieldCheck,
  Zap,
  Atom
};

const Workshops = ({ onRegister }) => {
  return (
    <section id="workshops" className="py-20 bg-navy-900 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            TECHNICAL MASTERCLASSES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Learn From <span className="text-electric-cyan">Technology</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Level up your technical stack with interactive hands-on sessions led by industry pioneers, AI researchers, and certified cloud architects.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOPS.map((ws) => {
            const IconComponent = iconMap[ws.icon] || Sparkles;

            return (
              <div
                key={ws.id}
                className="glass-panel p-6 rounded-2xl border-electric-500/20 glass-panel-hover flex flex-col justify-between group blueprint-border"
              >
                <div>
                  
                  {/* Icon & Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-950 border border-electric-500/30 text-electric-cyan">
                      {ws.level}
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors mb-3 font-sans">
                    {ws.topic}
                  </h3>

                  {/* Speaker Info */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-3 bg-navy-950/60 p-2.5 rounded-lg border border-slate-800">
                    <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{ws.speaker}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {ws.desc}
                  </p>

                </div>

                <div>
                  
                  {/* Venue & Duration Details */}
                  <div className="grid grid-cols-2 gap-2 py-2.5 px-3 rounded-lg bg-navy-950 border border-electric-500/20 mb-5 font-mono text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>{ws.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
                      <span className="truncate">{ws.venue}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    onClick={() => onRegister(ws.topic)}
                    className="w-full btn-electric text-white font-mono text-xs font-bold uppercase py-3 rounded-lg shadow-md flex items-center justify-center gap-2 group/btn"
                  >
                    <span>REGISTER FOR WORKSHOP</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Workshops;
