import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, Award, ArrowRight, Cpu, Layers, Sparkles, Plus } from 'lucide-react';
import { PROJECTS_SHOWCASE } from '../data/eventData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const processSteps = [
    { name: 'PROJECT SUBMISSION', desc: 'Submit project abstract & video link' },
    { name: 'SCREENING', desc: 'Faculty technical review' },
    { name: 'EXHIBITION', desc: 'Booth setup on event day' },
    { name: 'EXPERT EVALUATION', desc: 'Jury & sponsor evaluation' },
    { name: 'BEST PROJECT AWARD', desc: 'Trophy & ₹15,000 grant' }
  ];

  return (
    <section id="projects" className="py-20 bg-navy-950/70 relative border-t border-b border-electric-500/10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            INNOVATION EXHIBITION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Build Something <span className="text-electric-cyan">That Matters</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Have a capstone project, hardware prototype, or working software platform? Exhibit your innovation to student peers and industry mentors.
          </p>
        </div>

        {/* Visual Process Pipeline */}
        <div className="mb-16">
          <div className="text-xs font-mono text-electric-cyan uppercase tracking-widest text-center mb-6">
            PROJECT EXHIBITION WORKFLOW
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border-electric-500/20 text-center relative group blueprint-border"
              >
                <span className="w-7 h-7 rounded-full bg-electric-500/20 text-electric-cyan border border-electric-500/40 flex items-center justify-center font-bold mx-auto mb-2 text-xs">
                  {idx + 1}
                </span>
                <span className="font-bold text-white uppercase block mb-1">{step.name}</span>
                <span className="text-[11px] text-slate-400 leading-tight block">{step.desc}</span>
              </div>
            ))}
          </div>

          {/* Submit CTA Banner */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-electric text-white font-mono text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl shadow-electric-500/30 inline-flex items-center gap-2 group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span>SUBMIT YOUR PROJECT</span>
            </button>
          </div>
        </div>

        {/* Featured Projects Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_SHOWCASE.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-2xl border-electric-500/20 overflow-hidden glass-panel-hover flex flex-col justify-between group blueprint-border"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-navy-950">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-navy-950/90 text-electric-cyan border border-electric-500/40">
                    {proj.department}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="text-xs font-mono text-electric-cyan font-bold block mb-1">
                    {proj.team}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-electric-cyan transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="p-2.5 rounded-lg bg-navy-950 border border-electric-500/20 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
                  <span className="truncate">{proj.tech}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Submission Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default Projects;
