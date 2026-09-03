import React, { useState, useEffect } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import MobileMenu from './MobileMenu';
import EngineeringLogo from './EngineeringLogo';

const Navbar = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EVENTS', href: '#events' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Threshold 50px for floating glass capsule state morph
      setIsScrolled(window.scrollY > 50);

      // Detect active section on scroll
      const sections = ['home', 'about', 'events', 'faq', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 
        Responsive Pill Capsule Floating Navbar
        - Compact responsive sizing on phone screens to prevent horizontal overflow
        - 30% larger sizing on tablet and desktop screens
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-2 sm:mt-4 w-[98%] sm:w-[92%] lg:w-[86%] max-w-[1480px] mx-auto rounded-full bg-navy-950/90 backdrop-blur-2xl shadow-2xl shadow-navy-950/90 py-2 sm:py-3 px-2.5 sm:px-8'
            : 'w-full py-3 sm:py-7 px-3 sm:px-10 max-w-[1540px] mx-auto bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 overflow-hidden">
          
          {/* 1. LEFT SIDE: PATRON LOGO + BRAND TITLE */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Left Patron Logo (Swamiji Portrait) - Fits mobile cleanly */}
            <a href="#home" title="Patron / Founder" className="shrink-0">
              <img
                src="/LogoLatest.webp"
                alt="Patron Logo"
                className="w-8 h-8 sm:w-11 md:w-14 sm:h-11 md:h-14 rounded-full object-cover border-2 border-amber-500/60 shadow-md shadow-amber-500/30 hover:scale-105 transition-transform"
              />
            </a>

            {/* Main Brand Logo & Title */}
            <a href="#home" className="flex items-center gap-1 sm:gap-2.5 group shrink-0">
              <EngineeringLogo className="w-7 h-7 sm:w-9 md:w-12 sm:h-9 md:h-12 shrink-0" />
              <div>
                <div className="font-extrabold tracking-wider text-xs sm:text-base md:text-lg lg:text-xl text-white font-mono flex items-center gap-1">
                  ENG<span className="text-electric-cyan">DAY</span>
                  <span className="text-[8px] sm:text-xs bg-electric-500/20 text-electric-cyan border border-electric-500/40 px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded font-mono font-bold">
                    2026
                  </span>
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-400 font-mono tracking-widest uppercase hidden md:block mt-0.5">
                  {EVENT_INFO.theme}
                </div>
              </div>
            </a>

          </div>

          {/* 2. CENTERED NAVIGATION LINKS (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 group ${
                    isActive ? 'text-electric-cyan' : 'text-slate-200 hover:text-electric-cyan'
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Animated Center-Expanding Underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-electric-cyan transition-transform duration-300 ease-out origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* 3. RIGHT SIDE: REGISTER CTA + COLLEGE SEAL LOGO */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">

            {/* Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="rounded-full px-2.5 py-1.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-white border border-electric-500/50 bg-navy-900/60 hover:bg-gradient-to-r hover:from-electric-500 hover:to-electric-cyan hover:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-electric-500/40 transition-all duration-300 flex items-center gap-1 sm:gap-1.5 group shrink-0"
            >
              <span>REGISTER</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-electric-cyan group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Right College Seal Emblem - Fits mobile cleanly */}
            <div title="College Seal Emblem" className="shrink-0">
              <img
                src="/logo-left.png"
                alt="College Seal Logo"
                className="w-8 h-8 sm:w-11 md:w-14 sm:h-11 md:h-14 rounded-full object-contain p-0.5 bg-navy-950 border-2 border-electric-cyan/60 shadow-md shadow-electric-cyan/30 hover:scale-105 transition-transform"
              />
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-3 rounded-xl bg-navy-900 border border-electric-500/30 text-slate-200 hover:text-white shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-6 sm:h-6 text-electric-cyan" />
            </button>

          </div>

        </div>
      </header>

      {/* Full-Screen Glass Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onOpenRegister={onOpenRegister}
      />
    </>
  );
};

export default Navbar;
