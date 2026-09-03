import React, { useState } from 'react';
import { 
  Bot, Code, Cpu, HelpCircle, Building2, Compass, Lightbulb, Gamepad2, 
  Search, Users, ArrowRight, Eye, Sparkles, Clock 
} from 'lucide-react';
import { COMPETITIONS } from '../data/eventData';
import EventModal from './EventModal';

const iconMap = {
  Bot,
  Code,
  Cpu,
  HelpCircle,
  Building2,
  Compass,
  Lightbulb,
  Gamepad2,
  Sparkles
};

const Events = ({ onRegister }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const categories = ['All', ...new Set(COMPETITIONS.map(e => e.category))];

  const filteredEvents = COMPETITIONS.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-20 bg-navy-900 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            COMPETITIONS & CHALLENGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Compete. Build. <span className="text-electric-cyan">Solve.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Put your technical domain expertise to the test across software, hardware, civil, mechanical, and gaming arenas.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pill Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-bold border border-electric-cyan/40 shadow-md shadow-electric-500/20'
                    : 'bg-navy-950/70 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700/60 hover:border-electric-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search competitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950 border border-electric-500/30 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan transition-colors"
            />
          </div>

        </div>

        {/* Competition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const IconComponent = iconMap[event.icon] || Sparkles;

            return (
              <div
                key={event.id}
                className="glass-panel p-6 rounded-2xl border-electric-500/20 glass-panel-hover flex flex-col justify-between group blueprint-border"
              >
                <div>
                  
                  {/* Category & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-electric-500/20 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-cyan">
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors mb-2 font-sans">
                    {event.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {event.shortDesc}
                  </p>

                </div>

                <div>
                  
                  {/* Meta Specs (Team Size & Duration) */}
                  <div className="grid grid-cols-2 gap-2 py-3 px-3 rounded-lg bg-navy-950/80 border border-electric-500/20 mb-5 font-mono text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Team Size</span>
                      <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                        <Users className="w-3.5 h-3.5 text-electric-cyan" />
                        {event.teamSize}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Duration</span>
                      <span className="font-semibold text-slate-200 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-electric-cyan" />
                        {event.duration}
                      </span>
                    </div>
                  </div>

                  {/* Glass Pill Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="w-full rounded-full bg-navy-950/80 hover:bg-navy-900 backdrop-blur-md text-slate-200 hover:text-white border border-electric-500/30 hover:border-electric-cyan font-mono text-xs font-bold uppercase py-2.5 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>DETAILS</span>
                    </button>
                    <button
                      onClick={() => onRegister(event.name)}
                      className="w-full rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-mono text-xs font-bold uppercase py-2.5 transition-all hover:scale-105 shadow-md shadow-electric-500/20 flex items-center justify-center gap-1 group/btn"
                    >
                      <span>REGISTER</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-navy-950/60 rounded-2xl border border-electric-500/20">
            <Sparkles className="w-10 h-10 text-electric-cyan mx-auto mb-3 opacity-50" />
            <h4 className="text-lg font-bold text-white mb-1">No competitions found</h4>
            <p className="text-xs text-slate-400">Try adjusting your search query or selected category filter.</p>
          </div>
        )}

      </div>

      {/* Event Details Modal Trigger */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
        onRegister={onRegister}
      />

    </section>
  );
};

export default Events;
