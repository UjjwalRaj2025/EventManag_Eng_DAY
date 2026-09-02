import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { SCHEDULE } from '../data/eventData';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-navy-950/80 relative border-t border-b border-electric-500/10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            CHRONOLOGICAL TIMELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Event <span className="text-electric-cyan">Schedule</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Plan your day across inaugurations, live competition slots, technical sessions, and award galas.
          </p>
        </div>

        {/* Pixel-Perfect Timeline Wrapper */}
        <div className="relative ml-4 sm:ml-40 space-y-10">

          {SCHEDULE.map((item, idx) => (
            <div key={idx} className="relative pl-7 sm:pl-10 group">
              
              {/* Line Segment connecting THIS dot to the NEXT dot (Omitted on the last item so the line ends precisely at the last dot) */}
              {idx < SCHEDULE.length - 1 && (
                <div className="absolute left-0 top-3.5 bottom-[-2.5rem] w-[2px] bg-electric-500/40 -translate-x-1/2 pointer-events-none" />
              )}

              {/* Node Indicator Dot - Centered precisely over the line */}
              <div className="absolute left-0 top-3.5 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-navy-950 border-2 border-electric-cyan group-hover:bg-electric-cyan group-hover:scale-125 transition-all shadow-sm shadow-electric-cyan/50 flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan group-hover:bg-navy-950" />
              </div>

              {/* Time Label (Desktop: Left side offset; Mobile: Above card) */}
              <div className="sm:absolute sm:right-[calc(100%+1.5rem)] sm:top-1 text-xs font-mono font-bold text-electric-cyan bg-navy-900 px-3 py-1.5 rounded-lg border border-electric-500/30 inline-block mb-3 sm:mb-0 w-fit whitespace-nowrap shadow-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{item.time}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="glass-panel p-5 sm:p-6 rounded-2xl border-electric-500/20 glass-panel-hover">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-electric-cyan transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-electric-500/10 border border-electric-500/30 text-electric-cyan">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{item.location}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Schedule;
