import React from 'react';
import { X, ChevronRight, Rocket } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import EngineeringLogo from './EngineeringLogo';

const MobileMenu = ({ isOpen, onClose, navLinks, activeSection, onOpenRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-2xl xl:hidden flex flex-col justify-between p-6 animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-electric-500/20 pb-4">
        <div className="flex items-center gap-2">
          <img
            src="/LogoLatest.webp"
            alt="Patron Logo"
            className="w-8 h-8 rounded-full object-cover border border-amber-500/60 shadow-md"
            title="Patron / Founder"
          />
          <EngineeringLogo className="w-8 h-8" />
          <img
            src="/logo-left.png"
            alt="College Seal Logo"
            className="w-8 h-8 rounded-full object-contain p-0.5 bg-navy-950 border border-electric-cyan/60 shadow-md"
            title="College Seal Emblem"
          />
          <span className="font-extrabold text-white font-mono text-sm ml-1">ENG<span className="text-electric-cyan">DAY 2026</span></span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-navy-900 border border-electric-500/30 text-slate-300 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Sequential Links */}
      <div className="flex flex-col space-y-3 my-auto py-6 font-mono text-sm uppercase tracking-wider">
        {navLinks.map((link, idx) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              style={{ animationDelay: `${idx * 60}ms` }}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all animate-in slide-in-from-left-4 duration-300 ${
                isActive
                  ? 'bg-electric-500/20 text-electric-cyan border-electric-cyan font-bold'
                  : 'bg-navy-900/60 text-slate-200 border-slate-800 hover:border-electric-500/30'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-electric-cyan" />
            </a>
          );
        })}
      </div>

      {/* CTA Bottom */}
      <div className="pt-4 border-t border-electric-500/20">
        <button
          onClick={() => {
            onClose();
            onOpenRegister();
          }}
          className="w-full btn-electric text-white font-mono text-sm font-bold uppercase py-4 rounded-xl shadow-xl flex items-center justify-center gap-2"
        >
          <Rocket className="w-5 h-5" />
          <span>REGISTER NOW</span>
        </button>
      </div>

    </div>
  );
};

export default MobileMenu;
