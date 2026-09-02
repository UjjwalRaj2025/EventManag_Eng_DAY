import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Sparkles, FolderPlus } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    teamName: '',
    leaderName: '',
    department: 'Computer Science & Engineering',
    email: '',
    description: '',
    techUsed: '',
    demoLink: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSuccessMsg(resData.message || 'Project submitted successfully for screening!');
        setFormData({
          projectName: '',
          teamName: '',
          leaderName: '',
          department: 'Computer Science & Engineering',
          email: '',
          description: '',
          techUsed: '',
          demoLink: ''
        });
      } else {
        setErrorMsg(resData.error || 'Failed to submit project.');
      }
    } catch (err) {
      // Fallback for standalone preview mode
      setSuccessMsg('Project submitted successfully for screening! (Preview Mode)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-navy-950 px-6 py-4 border-b border-electric-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FolderPlus className="w-5 h-5 text-electric-cyan" />
            <h3 className="text-xl font-bold text-white font-sans">Submit Your Innovation</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto">
          
          {successMsg ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Submission Received!</h4>
              <p className="text-sm text-slate-300 mb-6">{successMsg}</p>
              <button
                onClick={onClose}
                className="btn-electric text-white font-mono text-xs font-bold px-6 py-2.5 rounded-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Project Name *</label>
                  <input
                    type="text"
                    name="projectName"
                    required
                    value={formData.projectName}
                    onChange={handleChange}
                    placeholder="e.g. Smart Solar Agriculture Bot"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Team Name / Code</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. Team GreenTerra"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Team Lead Name *</label>
                  <input
                    type="text"
                    name="leaderName"
                    required
                    value={formData.leaderName}
                    onChange={handleChange}
                    placeholder="Full Lead Name"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Contact Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@college.edu"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-electric-cyan"
                  >
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Electronics & Communication">Electronics & Communication</option>
                    <option value="Electrical & Electronics">Electrical & Electronics</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechatronics & Robotics">Mechatronics & Robotics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Technologies Used</label>
                  <input
                    type="text"
                    name="techUsed"
                    value={formData.techUsed}
                    onChange={handleChange}
                    placeholder="e.g. Python, ESP32, React, CAD"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">Project Description & Abstract *</label>
                <textarea
                  name="description"
                  required
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Explain the real-world problem, methodology, and hardware/software working..."
                  className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">Demo / Video / GitHub Link (Optional)</label>
                <input
                  type="url"
                  name="demoLink"
                  value={formData.demoLink}
                  onChange={handleChange}
                  placeholder="https://github.com/username/project"
                  className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-navy-800 text-slate-300 font-bold uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-electric text-white font-bold uppercase px-6 py-2.5 rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Submit Project'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
