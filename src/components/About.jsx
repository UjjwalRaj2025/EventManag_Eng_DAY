import React from 'react';
import { Cpu, Layers, Compass, Flame } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: "Hands-on Problem Solving",
      desc: "Bridge the gap between theoretical classroom concepts and real-world engineering prototypes.",
      icon: Cpu
    },
    {
      title: "Interdisciplinary Collaboration",
      desc: "Team up across software, electronics, mechanical, and civil branches to build holistic solutions.",
      icon: Layers
    },
    {
      title: "Technical Excellence",
      desc: "Demonstrate your domain mastery in front of expert faculty and industry mentors.",
      icon: Compass
    },
    {
      title: "High-Octane Arena",
      desc: "Experience action-packed hours of bot racing, hackathons, CAD modeling, and live exhibitions.",
      icon: Flame
    }
  ];

  return (
    <section id="about" className="py-20 bg-navy-950/60 relative border-t border-b border-electric-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 inline-block mb-3">
            ABOUT THE FESTIVAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Engineering <span className="text-electric-cyan">Beyond Classrooms</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-electric-cyan mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            “Engineering Day 2026 brings together students, innovators, developers, designers, and problem-solvers to transform ideas into practical solutions through technology, creativity, and teamwork.”
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-navy-900/80 p-6 rounded-xl border border-electric-500/20 hover:border-electric-cyan/50 transition-colors">
                <Icon className="w-8 h-8 text-electric-cyan mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
