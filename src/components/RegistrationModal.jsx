import React from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-navy-950 px-5 py-4 border-b border-electric-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-electric-500/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-electric-cyan uppercase tracking-widest block font-bold">
                OFFICIAL REGISTRATION PORTAL
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">Register for Engineering Day 2026</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={EVENT_INFO.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white text-xs font-mono font-bold px-4 py-2 items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
              title="Open Google Form in New Window"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-navy-900/80 border border-slate-700/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Dedicated Google Form */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          <div className="p-3.5 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-between gap-3 font-mono text-xs">
            <p className="text-slate-300">
              💡 Complete the official registration form below. All responses are saved directly into our registration database.
            </p>
            <a
              href={EVENT_INFO.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden shrink-0 rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white text-[11px] font-bold px-3 py-1.5 flex items-center gap-1"
            >
              <span>Open Form</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded Google Form Iframe Container */}
          <div className="w-full h-[540px] sm:h-[600px] bg-white rounded-xl overflow-hidden border border-electric-500/30 shadow-inner">
            <iframe
              src={EVENT_INFO.googleFormUrl}
              title="Engineering Day 2026 Google Registration Form"
              className="w-full h-full border-none"
            >
              Loading Google Form...
            </iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RegistrationModal;
