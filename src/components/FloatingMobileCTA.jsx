import React from 'react';
import { Rocket, ChevronRight } from 'lucide-react';

const FloatingMobileCTA = ({ onOpenRegister }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-navy-950/90 backdrop-blur-lg border-t border-electric-500/30 shadow-2xl animate-in slide-in-from-bottom-5">
      <button
        onClick={onOpenRegister}
        className="w-full btn-electric text-white font-mono text-xs font-bold uppercase tracking-wider py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
      >
        <Rocket className="w-4 h-4 animate-bounce" />
        <span>REGISTER NOW FOR ENGINEERING DAY 2026</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingMobileCTA;
