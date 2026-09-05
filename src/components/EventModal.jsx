import React, { useState } from 'react';
import { X, Users, Clock, ShieldAlert, CheckCircle, Cpu, ArrowRight, Zap, FileText, Wrench, UserCheck, Phone, BookOpen, ChevronDown } from 'lucide-react';

const DepartmentTopicsViewer = ({ departmentTopics }) => {
  const [selectedDept, setSelectedDept] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const filteredDepts = departmentTopics.filter(dept => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesDept = dept.department.toLowerCase().includes(query);
    const matchesTopic = dept.topics.some(t => t.toLowerCase().includes(query));
    return matchesDept || matchesTopic;
  });

  return (
    <div className="mt-4 pt-4 border-t border-electric-500/20">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          Proposed Topics by Department ({departmentTopics.length} Disciplines)
        </span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1"
        >
          {isExpanded ? 'Hide Proposed Topics' : 'Show Proposed Topics'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <p className="text-xs text-slate-300 mb-3 bg-navy-950/60 p-2.5 rounded-lg border border-slate-800">
        💡 <strong className="text-white">Flexibility Note:</strong> Students can select from these proposed topics or propose their own innovative topic relevant to their discipline / interdisciplinary interests!
      </p>

      {isExpanded && (
        <div className="space-y-3 mt-3 animate-in fade-in duration-200">
          
          {/* Search Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Search topics or departments (e.g. Mechanical, Chatbot, Solar...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-electric-cyan font-mono"
            />
          </div>

          {/* Department Cards Accordion / List */}
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {filteredDepts.map((item, idx) => {
              const isOpen = selectedDept === item.department || searchQuery.length > 0 || selectedDept === '';
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-navy-950/80 border border-slate-800/90 overflow-hidden"
                >
                  <button
                    onClick={() => setSelectedDept(selectedDept === item.department ? 'none' : item.department)}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-navy-800/50 transition-colors"
                  >
                    <span className="text-xs font-bold font-mono text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-electric-cyan" />
                      {item.department}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.topics.length} Topics
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-3 pt-2 border-t border-slate-800/50 bg-navy-900/40">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        {item.topics.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 bg-navy-950/60 p-2 rounded-lg border border-slate-800/60">
                            <span className="text-electric-cyan font-bold">•</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
};

const EventModal = ({ event, onClose, onRegister }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-28 pb-6 px-3 sm:px-6 overflow-y-auto bg-navy-950/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Container - Shifted down below navbar */}
      <div className="relative w-full max-w-4xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl shadow-navy-950 overflow-hidden max-h-[78vh] sm:max-h-[82vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-navy-950/95 border-b border-electric-500/30 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-electric-500/20 text-electric-cyan border border-electric-500/30 text-xs font-mono font-bold uppercase">
              {event.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">{event.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {/* Quick Details Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-navy-950/80 border border-electric-500/20 font-mono text-xs">
            <div>
              <span className="text-slate-400 uppercase block mb-1">Team Size</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <Users className="w-4 h-4 text-electric-cyan" />
                {event.teamSize}
              </span>
            </div>
            <div>
              <span className="text-slate-400 uppercase block mb-1">Duration</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <Clock className="w-4 h-4 text-electric-cyan" />
                {event.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 uppercase block mb-1">Registration Fee</span>
              <span className="text-sm font-bold text-emerald-400">
                {event.registrationFee || 'Free'}
              </span>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Event Overview
            </h4>
            <p className="text-slate-200">{event.overview}</p>
          </div>

          {/* Problem Statement / Challenge */}
          <div className="p-4 sm:p-5 rounded-xl bg-electric-500/10 border border-electric-500/30">
            <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Problem Statement / Challenge
            </h4>
            <p className="text-white font-medium mb-2">{event.problemStatement}</p>

            {event.departmentTopics && event.departmentTopics.length > 0 && (
              <DepartmentTopicsViewer departmentTopics={event.departmentTopics} />
            )}
          </div>

          {/* Eligibility & Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800">
              <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Eligibility Criteria
              </h5>
              <p className="text-xs text-slate-300">{event.eligibility}</p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800">
              <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                Required Materials / Tools
              </h5>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {event.requiredMaterials?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Rules & Guidelines */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Official Competition Rules
              </h4>
              <ul className="space-y-2">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-navy-950/40 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-electric-cyan font-mono font-bold">{idx + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Student Coordinator Section */}
          {event.coordinator && (
            <div className="p-4 rounded-xl bg-navy-950/80 border border-emerald-500/30">
              <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                Event Student Coordinator
              </h5>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-white">{event.coordinator.name}</p>
                  <p className="text-xs text-slate-400 font-mono">{event.coordinator.department}</p>
                </div>
                <a
                  href={`tel:${event.coordinator.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 transition-colors w-fit"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{event.coordinator.phone}</span>
                </a>
              </div>
            </div>
          )}

          {/* Important Instructions */}
          {event.instructions && (
            <div className="p-4 rounded-xl bg-navy-950/90 border border-electric-500/30 text-slate-300 text-xs flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block uppercase mb-0.5 text-white">Important Note:</span>
                {event.instructions}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Action Bar */}
        <div className="sticky bottom-0 bg-navy-950 border-t border-electric-500/30 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block font-mono">Registration Status</span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Registrations Open
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-mono uppercase font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRegister(event.name);
              }}
              className="w-1/2 sm:w-auto btn-electric text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventModal;
