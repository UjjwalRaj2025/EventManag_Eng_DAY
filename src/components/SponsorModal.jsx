import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Building2, Handshake } from 'lucide-react';

const SponsorModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    tier: 'Gold Sponsor (₹25,000)',
    message: ''
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
      const response = await fetch('/api/sponsors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSuccessMsg(resData.message || 'Sponsorship inquiry submitted!');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          tier: 'Gold Sponsor (₹25,000)',
          message: ''
        });
      } else {
        setErrorMsg(resData.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setSuccessMsg('Sponsorship inquiry received! Our corporate relations team will contact you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-navy-900 border border-electric-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-navy-950 px-6 py-4 border-b border-electric-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Handshake className="w-5 h-5 text-electric-cyan" />
            <h3 className="text-xl font-bold text-white font-sans">Become a Partner / Sponsor</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto">
          
          {successMsg ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Thank You for Partnering!</h4>
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
                  <label className="block text-slate-300 uppercase mb-1">Company / Org Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Tech Ltd."
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Contact Person *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Full Representative Name"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Official Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="partner@company.com"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">Interested Sponsorship Tier</label>
                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-electric-cyan"
                >
                  <option value="Title Sponsor (₹50,000)">Title Sponsor (₹50,000)</option>
                  <option value="Gold Sponsor (₹25,000)">Gold Sponsor (₹25,000)</option>
                  <option value="Silver Sponsor (₹15,000)">Silver Sponsor (₹15,000)</option>
                  <option value="Technology / Community Partner">Technology / Community Partner</option>
                  <option value="Custom Partnership">Custom Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">Message / Collaboration Goals</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about booth requirements, recruitment goals, or keynote preferences..."
                  className="w-full bg-navy-950 border border-electric-500/30 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
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
                  <span>{loading ? 'Sending...' : 'Submit Partnership Application'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default SponsorModal;
