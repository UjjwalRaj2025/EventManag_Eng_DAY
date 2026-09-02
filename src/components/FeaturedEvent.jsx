import React from 'react';
import { Lightbulb, Trophy, Users, Rocket, ArrowRight } from 'lucide-react';

const FeaturedEvent = ({ onRegister }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden border-t border-b border-electric-500/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spotlight Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-electric-500/40 shadow-2xl relative overflow-hidden blueprint-border">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/40 text-electric-cyan text-xs font-mono mb-6">
            <Trophy className="w-4 h-4 text-electric-cyan" />
            <span className="font-bold uppercase tracking-widest">FLAGSHIP NATIONAL INNOVATION ARENA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans mb-3">
                ENGINEERING INNOVATION CHALLENGE
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-electric-cyan font-mono uppercase mb-4">
                Solve a real-world problem. Build a working solution.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                The grandest stage of Engineering Day 2026. Pitch your original invention, IoT device, renewable energy solution, or software platform to faculty jury and industry mentors.
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-electric-500/30">
                  <span className="text-slate-400 uppercase block mb-1">Team Size</span>
                  <span className="font-bold text-white text-sm flex items-center gap-1">
                    <Users className="w-4 h-4 text-electric-cyan" />
                    2 – 5 Innovators
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-electric-500/30">
                  <span className="text-slate-400 uppercase block mb-1">Key Timeline</span>
                  <span className="font-medium text-slate-200 text-xs">Live Demo Sept 15</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onRegister('Engineering Innovation Challenge')}
                className="btn-electric text-white font-mono text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-electric-500/30 flex items-center gap-3 group"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>ENTER THE CHALLENGE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Right Pipeline Visual Column */}
            <div className="lg:col-span-5 bg-navy-950/80 p-6 rounded-2xl border border-electric-500/30">
              <div className="text-xs font-mono text-electric-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-electric-cyan" />
                <span>INNOVATION PIPELINE PROCESS</span>
              </div>

              {/* Visual Pipeline Flow */}
              <div className="space-y-3 font-mono text-xs">
                {[
                  { step: "01", name: "IDEATE", desc: "Identify a real problem" },
                  { step: "02", name: "DESIGN", desc: "Architect system schematic" },
                  { step: "03", name: "BUILD", desc: "Construct prototype" },
                  { step: "04", name: "TEST", desc: "Validate & benchmark" },
                  { step: "05", name: "DEMO", desc: "Exhibit to jury" },
                  { step: "06", name: "RECOGNITION", desc: "Trophy & Certificates" }
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/90 border border-electric-500/20 hover:border-electric-cyan/50 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-electric-500/20 border border-electric-500/40 text-electric-cyan flex items-center justify-center font-bold text-xs shrink-0">
                      {step.step}
                    </span>
                    <div className="grow">
                      <span className="font-bold text-white uppercase tracking-wider block">{step.name}</span>
                      <span className="text-[11px] text-slate-400">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedEvent;
