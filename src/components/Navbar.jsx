import React, { useState, useEffect } from 'react';
import { Cpu, Menu, ChevronRight } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import MobileMenu from './MobileMenu';
import EngineeringLogo from './EngineeringLogo';

const Navbar = ({ onOpenRegister, onOpenScanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EVENTS', href: '#events' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Threshold 50px for floating glass capsule state morph
      setIsScrolled(window.scrollY > 50);

      // Detect active section on scroll
      const sections = ['home', 'about', 'events', 'schedule', 'faq', 'contact'];
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
        Capsule Floating Glass Navbar
        - Morphs into a rounded-full pill capsule on scroll
        - Pop-in Dual Logos on Left & Right when capsule is active
        - Smooth cubic-bezier transition (duration-700)
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-3 sm:mt-4 w-[72%] max-w-[1360px] mx-auto rounded-full bg-navy-950/8 backdrop-blur-2xl shadow-2xl shadow-navy-950/8 py-2.5 px-4 sm:px-8'
            : 'w-full py-5 px-4 sm:px-8 max-w-[1480px] mx-auto bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* 1. LEFT LOGO & BRAND (Pops Swamiji / Founder Portrait when scrolled) */}
          <div className="flex items-center gap-3">
            
            {/* Pop-in Left Founder Logo (Visible in Scrolled Capsule State) */}
            <div
              className={`transition-all duration-500 ease-out transform ${
                isScrolled
                  ? 'opacity-100 scale-100 translate-x-0'
                  : 'opacity-0 scale-75 -translate-x-4 pointer-events-none hidden sm:block'
              }`}
            >
              <img
                src="/LogoLatest.webp"
                alt="Patron Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-500/60 shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform"
                title="Patron / Founder"
              />
            </div>

            {/* Main Brand Logo & Title */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <EngineeringLogo className="w-10 h-10" />
              <div>
                <div className="font-extrabold tracking-wider text-sm sm:text-base text-white font-mono flex items-center gap-1">
                  ENG<span className="text-electric-cyan">DAY</span>
                  <span className="text-[9px] bg-electric-500/20 text-electric-cyan border border-electric-500/40 px-1 py-0.2 rounded font-mono font-bold">
                    2026
                  </span>
                </div>
                <div className="text-[9px] text-slate-400 font-mono tracking-widest uppercase hidden md:block">
                  {EVENT_INFO.theme}
                </div>
              </div>
            </a>

          </div>

          {/* 2. CENTERED NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-6 font-mono text-xs font-bold uppercase tracking-wider">
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
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-electric-cyan transition-transform duration-300 ease-out origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* 3. RIGHT LOGO & CTA BUTTONS (Pops College Emblem on Right when scrolled) */}
          <div className="hidden sm:flex items-center gap-3">
            
           

            {/* Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="rounded-full px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white border border-electric-500/50 bg-navy-900/60 hover:bg-gradient-to-r hover:from-electric-500 hover:to-electric-cyan hover:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-electric-500/40 transition-all duration-300 flex items-center gap-1.5 group shrink-0"
            >
              <span>REGISTER</span>
              <ChevronRight className="w-3.5 h-3.5 text-electric-cyan group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Pop-in Right College Seal Emblem (Visible in Scrolled Capsule State) */}
            <div
              className={`transition-all duration-500 ease-out transform ${
                isScrolled
                  ? 'opacity-100 scale-100 translate-x-0'
                  : 'opacity-0 scale-75 translate-x-4 pointer-events-none hidden md:block'
              }`}
            >
              <img
                src="/logo-left.png"
                alt="College Seal Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain p-0.5 bg-navy-950 border-2 border-electric-cyan/60 shadow-lg shadow-electric-cyan/30 hover:scale-110 transition-transform"
                title="College Seal Emblem"
              />
            </div>

          </div>

          {/* 4. MOBILE HAMBURGER TOGGLE */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="btn-electric text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase"
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-xl bg-navy-900 border border-electric-500/30 text-slate-200 hover:text-white"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-electric-cyan" />
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
