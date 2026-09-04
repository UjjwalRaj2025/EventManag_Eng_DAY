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
        +10% Scaled Up Floating Glass Pill Navbar
        - Optimized top margin offset (mt-3.5 sm:mt-5)
        - Clean reduced glow vector emblem & perfectly aligned dual side logos
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-3.5 sm:mt-5 w-[98%] sm:w-[94%] lg:w-[88%] max-w-[1500px] mx-auto rounded-full bg-navy-950/1 backdrop-blur-2xl shadow-2xl shadow-navy-950/1 py-3.5 sm:py-4 px-4 sm:px-9'
            : 'w-full py-5 sm:py-8 px-4 sm:px-10 max-w-[1560px] mx-auto bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-2.5 sm:gap-4 overflow-hidden">
          
          {/* 1. LEFT SIDE: PATRON LOGO + VERTICAL BOX BRAND TITLE */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            
            {/* Left Patron Logo (Swamiji Portrait) - Scaled +10% */}
            <a href="#home" title="Patron / Founder" className="shrink-0">
              <img
                src="/LogoLatest.webp"
                alt="Patron Logo"
                className="w-11 h-11 sm:w-13 md:w-15 sm:h-13 md:h-15 rounded-full object-cover border-2 border-amber-500/60 shadow-md shadow-amber-500/30 hover:scale-105 transition-transform"
              />
            </a>

            {/* Main Brand Vector Logo & Vertical Box Title */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <EngineeringLogo className="w-10 h-10 sm:w-11 md:w-13 sm:h-11 md:h-13 shrink-0" />
              <div className="flex flex-col justify-center leading-none font-mono select-none">
                <div className="font-extrabold tracking-wider text-xs sm:text-base md:text-lg text-white flex items-center gap-0.5">
                  ENG<span className="text-electric-cyan">DAY</span>
                </div>
                <div className="mt-0.5 inline-block text-[9px] sm:text-[10.5px] font-bold text-electric-cyan/90 bg-electric-500/20 border border-electric-500/40 px-1 py-0.2 rounded tracking-widest text-center">
                  2026
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
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">

            {/* Register CTA Button - Scaled +10% */}
            <button
              onClick={onOpenRegister}
              className="rounded-full px-4 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white border border-electric-500/50 bg-navy-900/60 hover:bg-gradient-to-r hover:from-electric-500 hover:to-electric-cyan hover:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-electric-500/40 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 group shrink-0"
            >
              <span>REGISTER</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-electric-cyan group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Right College Seal Emblem - Hidden on mobile phone, visible on tablet & desktop */}
            <div title="College Seal Emblem" className="shrink-0 hidden sm:block">
              <img
                src="/logo-left.png"
                alt="College Seal Logo"
                className="w-11 h-11 sm:w-13 md:w-15 sm:h-13 md:h-15 rounded-full object-contain p-0.5 bg-navy-950 border-2 border-electric-cyan/60 shadow-md shadow-electric-cyan/30 hover:scale-105 transition-transform"
              />
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 sm:p-3.5 rounded-xl bg-navy-900 border border-electric-500/30 text-slate-200 hover:text-white shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-electric-cyan" />
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
