import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/eventData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-navy-950/70 relative border-t border-b border-electric-500/10">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            NEED CLARIFICATION?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Frequently Asked <span className="text-electric-cyan">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy-900 border border-electric-500/30 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan transition-colors shadow-lg"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border-electric-500/20 overflow-hidden transition-all blueprint-border"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-sm sm:text-base font-sans flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-electric-cyan shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <div className={`p-1.5 rounded-lg bg-navy-950 text-electric-cyan border border-electric-500/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-electric-500/10 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
