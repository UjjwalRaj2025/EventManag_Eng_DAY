import React from 'react';
import { UserCheck, GraduationCap, Phone, Mail, MapPin, Building, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/eventData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-950 relative border-t border-electric-500/10">
      
      {/* Background radial ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            ORGANIZING TEAM & HELPLINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Event <span className="text-electric-cyan">Coordinators</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Have questions regarding competition rules, registration, or logistics? Reach out to our faculty conveners and student event leads.
          </p>
        </div>

        {/* 2. EVENT STUDENT LEADS */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-electric-500/20 pb-3">
            <UserCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wider">
              Student Event Leads
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_INFO.eventLeads.map((lead, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-electric-500/20 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white font-sans">{lead.name}</h4>
                      <p className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">{lead.role}</p>
                    </div>
                    <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <a
                    href={`tel:${lead.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-electric-cyan transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>{lead.phone}</span>
                  </a>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <br></br>
        
        {/* 1. FACULTY COORDINATORS */}
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
                    <span className="p-2 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-cyan shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span>{faculty.department}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <a
                    href={`tel:${faculty.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-electric-cyan transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>{faculty.phone}</span>
                  </a>

                  
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
