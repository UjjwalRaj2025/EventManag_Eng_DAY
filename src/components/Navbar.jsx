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
        Capsule Floating Glass Navbar
        - Always renders both Patron Portrait (left) and College Seal (right) on phone & desktop
        - Morphs smoothly into a floating pill on scroll
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-2 sm:mt-4 w-[96%] sm:w-[92%] lg:w-[85%] max-w-[1400px] mx-auto rounded-full bg-navy-950/90 backdrop-blur-2xl shadow-2xl shadow-navy-950/90 py-2 px-3 sm:px-6'
            : 'w-full py-4 sm:py-5 px-3 sm:px-8 max-w-[1480px] mx-auto bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          
          {/* 1. LEFT SIDE: PATRON LOGO + BRAND TITLE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Always-visible Left Patron Logo (Swamiji Portrait) */}
            <a href="#home" title="Patron / Founder" className="shrink-0">
              <img
                src="/LogoLatest.webp"
                alt="Patron Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-500/60 shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
              />
            </a>

            {/* Main Brand Logo & Title */}
            <a href="#home" className="flex items-center gap-1.5 sm:gap-2.5 group">
              <EngineeringLogo className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" />
              <div>
                <div className="font-extrabold tracking-wider text-xs sm:text-base text-white font-mono flex items-center gap-1">
                  ENG<span className="text-electric-cyan">DAY</span>
                  <span className="text-[8px] sm:text-[9px] bg-electric-500/20 text-electric-cyan border border-electric-500/40 px-1 py-0.2 rounded font-mono font-bold">
                    2026
                  </span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-slate-400 font-mono tracking-widest uppercase hidden md:block">
                  {EVENT_INFO.theme}
                </div>
              </div>
            </a>

          </div>

          {/* 2. CENTERED NAVIGATION LINKS (Desktop only) */}
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

          {/* 3. RIGHT SIDE: REGISTER CTA + ALWAYS-VISIBLE COLLEGE SEAL LOGO */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-electric-500/50 bg-navy-900/60 hover:bg-gradient-to-r hover:from-electric-500 hover:to-electric-cyan hover:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-electric-500/40 transition-all duration-300 flex items-center gap-1 group shrink-0"
            >
              <span>REGISTER</span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric-cyan group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Always-visible Right College Seal Emblem */}
            <div title="College Seal Emblem" className="shrink-0">
              <img
                src="/logo-left.png"
                alt="College Seal Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain p-0.5 bg-navy-950 border-2 border-electric-cyan/60 shadow-md shadow-electric-cyan/20 hover:scale-105 transition-transform"
              />
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-navy-900 border border-electric-500/30 text-slate-200 hover:text-white shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan" />
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
