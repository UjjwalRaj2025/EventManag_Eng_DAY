import React, { useState, useEffect } from 'react';
import { X, Send, AlertCircle, ExternalLink, FileText, Ticket } from 'lucide-react';
import { COMPETITIONS, EVENT_INFO } from '../data/eventData';
import TicketModal from './TicketModal';

const RegistrationModal = ({ isOpen, onClose, defaultEvent = '' }) => {
  const [activeTab, setActiveTab] = useState('google-form'); // 'google-form' | 'native-api'
  
  const [formData, setFormData] = useState({
    fullName: '',
    college: '',
    department: 'Computer Science & Engineering',
    year: 'Final Year (2026)',
    email: '',
    phone: '',
    event: defaultEvent || 'Engineering Hackathon',
    teamName: '',
    teamMembers: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [generatedTicket, setGeneratedTicket] = useState(null);

  useEffect(() => {
    if (defaultEvent) {
      setFormData(prev => ({ ...prev, event: defaultEvent }));
    }
  }, [defaultEvent]);

  if (!isOpen) return null;

  const allEventOptions = [
    ...COMPETITIONS.map(c => c.name),
    "Engineering Innovation Challenge",
    "General Event Pass"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitNative = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setGeneratedTicket(resData.registration);
      } else {
        setErrorMsg(resData.error || 'Registration failed.');
      }
    } catch (err) {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const fallbackTicket = {
        regId: `ENG26-${randomCode}`,
        fullName: formData.fullName,
        college: formData.college,
        department: formData.department,
        year: formData.year,
        email: formData.email,
        phone: formData.phone,
        event: formData.event,
        teamName: formData.teamName
      };
      setGeneratedTicket(fallbackTicket);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
        
        <div className="relative w-full max-w-3xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
          
          {/* Modal Header */}
          <div className="bg-navy-950 px-6 py-4 border-b border-electric-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-electric-cyan uppercase tracking-widest block font-bold">
                OFFICIAL REGISTRATION PORTAL
              </span>
              <h3 className="text-xl font-bold text-white font-sans">Register for Engineering Day 2026</h3>
            </div>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mode Switcher Tabs (Google Forms vs Native API) */}
          <div className="flex border-b border-electric-500/20 bg-navy-950/50 font-mono text-xs">
            <button
              onClick={() => setActiveTab('google-form')}
              className={`flex-1 py-3 px-4 text-center font-bold uppercase transition-all flex items-center justify-center gap-2 ${
                activeTab === 'google-form'
                  ? 'bg-electric-500/20 text-electric-cyan border-b-2 border-electric-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Google Forms Registration</span>
            </button>

            <button
              onClick={() => setActiveTab('native-api')}
              className={`flex-1 py-3 px-4 text-center font-bold uppercase transition-all flex items-center justify-center gap-2 ${
                activeTab === 'native-api'
                  ? 'bg-electric-500/20 text-electric-cyan border-b-2 border-electric-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>Instant Pass Generator</span>
            </button>
          </div>

          {/* Tab Content 1: Google Form Integration */}
          {activeTab === 'google-form' && (
            <div className="p-6 overflow-y-auto space-y-4">
              
              <div className="p-4 rounded-xl bg-electric-500/10 border border-electric-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">Official Google Form Registration</h4>
                  <p className="text-slate-300">Submit your details directly into our Google Sheets database.</p>
                </div>
                <a
                  href={EVENT_INFO.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-bold px-5 py-2.5 flex items-center gap-2 whitespace-nowrap shadow-md hover:scale-105 transition-transform"
                >
                  <span>Open Full Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Embedded Google Form Iframe Container */}
              <div className="w-full h-[450px] bg-white rounded-xl overflow-hidden border border-electric-500/30 relative">
                <iframe
                  src={EVENT_INFO.googleFormUrl}
                  title="Engineering Day 2026 Google Registration Form"
                  className="w-full h-full border-none"
                >
                  Loading Google Form...
                </iframe>
              </div>

            </div>
          )}

          {/* Tab Content 2: Built-in Native API Registration */}
          {activeTab === 'native-api' && (
            <div className="p-6 overflow-y-auto">
              
              <form onSubmit={handleSubmitNative} className="space-y-4 font-mono text-xs">
                
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">College / University *</label>
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. Institute of Technology"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Department / Branch</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-electric-cyan"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Electrical & Electronics">Electrical & Electronics</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Robotics & Automation">Robotics & Automation</option>
                      <option value="Other Branch">Other Branch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Academic Year</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-electric-cyan"
                    >
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Final Year (2026)">Final Year (2026)</option>
                      <option value="Postgraduate / PhD">Postgraduate / PhD</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@domain.edu"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1">Select Event / Competition *</label>
                  <select
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-electric-cyan"
                  >
                    {allEventOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Team Name (If Applicable)</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      placeholder="e.g. CyberKnights"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase mb-1">Other Team Members</label>
                    <input
                      type="text"
                      name="teamMembers"
                      value={formData.teamMembers}
                      onChange={handleChange}
                      placeholder="e.g. Anish, Priya, Sameer"
                      className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-slate-700/60 text-slate-300 font-bold uppercase transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-bold uppercase px-7 py-2.5 shadow-lg shadow-electric-500/25 border border-electric-cyan/40 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Generating Pass...' : 'Generate Pass ID'}</span>
                  </button>
                </div>

              </form>

            </div>
          )}

        </div>
      </div>

      {/* Generated Ticket Preview Popup */}
      {generatedTicket && (
        <TicketModal
          registration={generatedTicket}
          onClose={() => {
            setGeneratedTicket(null);
            onClose();
          }}
        />
      )}

    </>
  );
};

export default RegistrationModal;
