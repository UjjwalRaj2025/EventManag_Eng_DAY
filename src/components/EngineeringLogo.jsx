import React from 'react';

const EngineeringLogo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      
      {/* Soft Subtle Ambient Glow Aura (Reduced glow effect) */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-electric-500 to-electric-cyan opacity-15 group-hover:opacity-30 blur-sm transition-opacity duration-300 pointer-events-none" />

      {/* Main High-Tech Emblem Container */}
      <div className="relative w-full h-full rounded-xl bg-navy-950 border border-electric-cyan/35 p-1.5 flex items-center justify-center overflow-hidden shadow-md shadow-navy-950/60">
        
        {/* Subtle Cybernetic Grid Pattern in background */}
        <div className="absolute inset-0 bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:8px_8px] opacity-15 pointer-events-none" />

        {/* Custom High-Tech Engineering SVG Emblem */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-electric-cyan group-hover:rotate-180 transition-transform duration-700 ease-out"
        >
          {/* Outer Technical Gear Ring */}
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5" />
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />

          {/* Circuit Nodes & Intersecting Lines */}
          <path d="M 50 14 L 50 26 M 50 74 L 50 86 M 14 50 L 26 50 M 74 50 L 86 50" stroke="#1677FF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="14" r="3" fill="#00D2FF" />
          <circle cx="50" cy="86" r="3" fill="#00D2FF" />
          <circle cx="14" cy="50" r="3" fill="#00D2FF" />
          <circle cx="86" cy="50" r="3" fill="#00D2FF" />

          {/* Diagonal Corner Circuit Traces */}
          <path d="M 24 24 L 33 33 M 76 76 L 67 67 M 76 24 L 67 33 M 24 76 L 33 67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

          {/* Center Microchip Core */}
          <rect x="36" y="36" width="28" height="28" rx="6" fill="url(#coreGradient)" stroke="#00D2FF" strokeWidth="1.8" />
          <rect x="44" y="44" width="12" height="12" rx="2.5" fill="#E2F5FF" opacity="0.8" />

          {/* SVG Gradient definitions */}
          <defs>
            <linearGradient id="coreGradient" x1="36" y1="36" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1677FF" />
              <stop offset="1" stopColor="#00D2FF" />
            </linearGradient>
          </defs>
        </svg>

      </div>

    </div>
  );
};

export default EngineeringLogo;
