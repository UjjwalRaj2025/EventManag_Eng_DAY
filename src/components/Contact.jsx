import React from 'react';
import { UserCheck, GraduationCap, Phone, Mail, Building, Sparkles, Trophy, Users } from 'lucide-react';
import { CONTACT_INFO, COMPETITIONS } from '../data/eventData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-950 relative border-t border-electric-500/10">
      
      {/* Background radial ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            ORGANIZING TEAM & HELPLINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Event <span className="text-electric-cyan">Coordinators</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Reach out to our faculty conveners and student event coordinators for any guidance regarding competition rules, registration, or logistics.
          </p>
        </div>

        {/* 1. FACULTY COORDINATORS (2 Details BEFORE FAQ) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 border-b border-electric-500/20 pb-3">
            <GraduationCap className="w-5 h-5 text-electric-cyan" />
            <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wider">
              Faculty Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_INFO.facultyCoordinators.map((faculty, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-electric-500/20 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white font-sans">{faculty.name}</h4>
                      <p className="text-xs font-mono text-electric-cyan font-semibold mt-0.5">{faculty.role}</p>
                    </div>
                    <span className="p-2.5 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-cyan shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span>{faculty.department}</span>
                  </p>
                </div>

                {faculty.email && (
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-start gap-3 text-xs font-mono">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="flex items-center gap-2 text-slate-300 hover:text-electric-cyan transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>{faculty.email}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. SECTION BOX FOR STUDENT COORDINATORS (AFTER FACULTY COORDINATORS) */}
        <div className="glass-panel border border-electric-500/30 p-6 sm:p-8 rounded-3xl bg-navy-900/60 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Box Header */}
          <div className="flex items-center justify-between gap-4 mb-8 border-b border-electric-500/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Users className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white font-mono uppercase tracking-wider">
                  Student Coordinators Section
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Individual event student coordinators
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
              Student Helpline
            </span>
          </div>

          {/* Subsection B: Individual Event Student Coordinators */}
          <div>
            <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Individual Event Coordinators
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMPETITIONS.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-navy-950/80 p-5 rounded-xl border border-slate-800 hover:border-electric-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-electric-500/15 text-electric-cyan text-[11px] font-mono font-bold uppercase tracking-wide border border-electric-500/30 inline-block mb-3">
                      {comp.name}
                    </span>
                    <h5 className="text-base font-bold text-white font-sans">{comp.coordinator.name}</h5>
                    <p className="text-xs font-mono text-slate-400 font-medium mt-1">
                      {comp.coordinator.department}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <a
                      href={`tel:${comp.coordinator.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 text-slate-200 hover:text-electric-cyan transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>{comp.coordinator.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
