import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Zap, Trophy, Rocket, Sparkles } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

const Hero = ({ onOpenRegister, onExploreEvents }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_INFO.targetDateIso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Background glow orb effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-electric-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-electric-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        

        {/* Main Title (3 Lines with Smooth Glowing Blue Word Highlights) */}
        <div className="mb-6 space-y-2 sm:space-y-3">
          {/* Line 1: Faculty of Engineering & Technology */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-sans transition-all duration-700 hover:scale-[1.01]">
            Faculty of <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 via-electric-300 to-electric-cyan text-glow">Engineering & Technology</span>
          </h1>

          {/* Line 2: Gurukul Kangri Deemed to be University */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight font-sans transition-all duration-700 hover:scale-[1.01]">
            Gurukul Kangri <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 via-electric-300 to-electric-cyan text-glow">(Deemed to be University)</span>
          </h2>

          {/* Line 3: Engineer's DAY 2026 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-none font-sans pt-1 transition-all duration-700 hover:scale-[1.01]">
            Engineer's <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 via-electric-300 to-electric-cyan text-glow">DAY 2026</span>
          </h1>
        </div>

        {/* Theme Tagline */}
        <h2 className="text-xl sm:text-3xl font-extrabold text-electric-cyan tracking-wide uppercase font-mono mb-3">
          “{EVENT_INFO.theme}”
        </h2>

        {/* Purpose Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          “{EVENT_INFO.tagline}”
        </p>

        {/* Quick Date, Location & Time Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-mono text-slate-200">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/60 border border-electric-500/20 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-electric-cyan" />
            <span>{EVENT_INFO.date}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/60 border border-electric-500/20 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-electric-cyan" />
            <span>{EVENT_INFO.venue}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/60 border border-electric-500/20 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-electric-cyan" />
            <span>{EVENT_INFO.time}</span>
          </div>
        </div>

        {/* LIVE COUNTDOWN TIMER */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EVENT LAUNCH COUNTDOWN</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
            
            <div className="glass-panel p-3 sm:p-4 rounded-xl text-center border-electric-500/30 blueprint-border">
              <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-wider">
                {timeLeft.days}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest">
                DAYS
              </span>
            </div>

            <div className="glass-panel p-3 sm:p-4 rounded-xl text-center border-electric-500/30 blueprint-border">
              <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-wider">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest">
                HOURS
              </span>
            </div>

            <div className="glass-panel p-3 sm:p-4 rounded-xl text-center border-electric-500/30 blueprint-border">
              <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-wider">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest">
                MINUTES
              </span>
            </div>

            <div className="glass-panel p-3 sm:p-4 rounded-xl text-center border-electric-500/30 blueprint-border">
              <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-wider text-electric-cyan">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest">
                SECONDS
              </span>
            </div>

          </div>
        </div>

        {/* Hero Glass Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-mono font-bold text-sm uppercase tracking-wider px-8 py-3.5 shadow-lg shadow-electric-500/25 border border-electric-cyan/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group backdrop-blur-md"
          >
            <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>REGISTER NOW</span>
          </button>

          <a
            href="#events"
            onClick={onExploreEvents}
            className="w-full sm:w-auto rounded-full bg-navy-950/70 hover:bg-navy-900/90 backdrop-blur-xl text-slate-200 hover:text-white border border-electric-500/30 hover:border-electric-cyan font-mono font-bold text-sm uppercase tracking-wider px-8 py-3.5 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Trophy className="w-4 h-4 text-electric-cyan group-hover:scale-110 transition-transform" />
            <span>EXPLORE EVENTS</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
