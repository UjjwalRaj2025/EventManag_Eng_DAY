import React from 'react';
import { ArrowUp, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { EVENT_INFO, CONTACT_INFO } from '../data/eventData';
import EngineeringLogo from './EngineeringLogo';

const Footer = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 font-mono text-xs border-t border-electric-500/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <EngineeringLogo className="w-10 h-10" />
              <span className="text-xl font-extrabold text-white tracking-wider font-mono">
                ENGINEERING DAY <span className="text-electric-cyan">2026</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans text-xs max-w-sm">
              “{EVENT_INFO.theme}” — A college-wide celebration of engineering, technology, innovation, creativity, and real-world problem solving.
            </p>

          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-electric-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-electric-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-electric-cyan transition-colors">About Festival</a></li>
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">Competitions</a></li>
              <li><a href="#contact" className="hover:text-electric-cyan transition-colors">Coordinators</a></li>
              <li><a href="#faq" className="hover:text-electric-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-electric-500/20 pb-2">
              Competitions
            </h4>
            <ul className="space-y-2">
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">OpenAI Challenge</a></li>
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">Project Exhibition</a></li>
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">Poster Presentation</a></li>
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">Debugging</a></li>
              <li><a href="#events" className="hover:text-electric-cyan transition-colors">Computer Quiz</a></li>
            </ul>
          </div>

          {/* Registration CTA Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-electric-500/20 pb-2">
              Registration
            </h4>
            <p className="text-slate-400 mb-4 text-[11px]">
              Ready to showcase your engineering talent? Claim your pass today.
            </p>
            <button
              onClick={onOpenRegister}
              className="w-full btn-electric text-white font-bold uppercase py-2.5 rounded-lg text-center"
            >
              REGISTER NOW
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-electric-500/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 Engineering Day. All rights reserved. | <span className="text-electric-cyan">Innovate. Engineer. Transform.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
