import React from 'react';
import { X, Users, Clock, ShieldAlert, CheckCircle, Cpu, ArrowRight, Zap, FileText, Wrench } from 'lucide-react';

const EventModal = ({ event, onClose, onRegister }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl shadow-navy-950 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-navy-950/95 border-b border-electric-500/30 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-electric-500/20 text-electric-cyan border border-electric-500/30 text-xs font-mono font-bold uppercase">
              {event.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">{event.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {/* Quick Details Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-navy-950/80 border border-electric-500/20 font-mono text-xs">
            <div>
              <span className="text-slate-400 uppercase block mb-1">Team Size</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <Users className="w-4 h-4 text-electric-cyan" />
                {event.teamSize}
              </span>
            </div>
            <div>
              <span className="text-slate-400 uppercase block mb-1">Duration</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <Clock className="w-4 h-4 text-electric-cyan" />
                {event.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 uppercase block mb-1">Registration Fee</span>
              <span className="text-sm font-bold text-emerald-400">
                {event.registrationFee || 'Free'}
              </span>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Event Overview
            </h4>
            <p className="text-slate-200">{event.overview}</p>
          </div>

          {/* Problem Statement / Challenge */}
          <div className="p-4 rounded-xl bg-electric-500/10 border border-electric-500/30">
            <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Problem Statement / Challenge
            </h4>
            <p className="text-white font-medium">{event.problemStatement}</p>
          </div>

          {/* Eligibility & Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800">
              <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Eligibility Criteria
              </h5>
              <p className="text-xs text-slate-300">{event.eligibility}</p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800">
              <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                Required Materials / Tools
              </h5>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {event.requiredMaterials?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Rules & Guidelines */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Official Competition Rules
              </h4>
              <ul className="space-y-2">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-navy-950/40 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-electric-cyan font-mono font-bold">{idx + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}



          {/* Important Instructions */}
          {event.instructions && (
            <div className="p-4 rounded-xl bg-navy-950/90 border border-electric-500/30 text-slate-300 text-xs flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block uppercase mb-0.5 text-white">Important Note:</span>
                {event.instructions}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Action Bar */}
        <div className="sticky bottom-0 bg-navy-950 border-t border-electric-500/30 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block font-mono">Registration Status</span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Registrations Open
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-mono uppercase font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRegister(event.name);
              }}
              className="w-1/2 sm:w-auto btn-electric text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventModal;
