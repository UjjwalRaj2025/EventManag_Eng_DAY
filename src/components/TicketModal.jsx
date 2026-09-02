import React from 'react';
import { X, CheckCircle, Ticket, Calendar, MapPin, Printer } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { EVENT_INFO } from '../data/eventData';

const TicketModal = ({ registration, onClose }) => {
  if (!registration) return null;

  const handlePrint = () => {
    window.print();
  };

  // Compact payload containing ALL student details with simple scannable QR matrix
  const qrPayload = JSON.stringify({
    id: registration.regId,
    name: registration.fullName,
    event: registration.event,
    email: registration.email,
    phone: registration.phone || 'N/A',
    college: registration.college || 'Main Campus',
    status: 'VERIFIED_ATTENDEE'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-navy-900 border border-electric-500/50 rounded-3xl shadow-2xl overflow-hidden my-8 blueprint-border">
        
        {/* Top Celebration Bar */}
        <div className="bg-gradient-to-r from-electric-500 to-electric-cyan px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 animate-bounce" />
            <h3 className="text-lg font-black uppercase font-mono tracking-wider">Registration Confirmed</h3>
          </div>
          <button onClick={onClose} className="p-1 text-white/80 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Printable Ticket Pass Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-200 font-mono text-xs">
          
          <p className="text-slate-300 text-center text-sm font-sans">
            Your entry pass for <span className="font-bold text-white">Engineering Day 2026</span> is ready!
          </p>

          {/* Ticket Pass Card */}
          <div className="bg-navy-950 p-6 rounded-2xl border-2 border-dashed border-electric-500/40 relative overflow-hidden shadow-inner">
            
            {/* Watermark Tag */}
            <div className="absolute -right-10 -bottom-10 opacity-10 text-electric-cyan pointer-events-none">
              <Ticket className="w-48 h-48" />
            </div>

            <div className="flex justify-between items-start border-b border-electric-500/20 pb-4 mb-4">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Registration Pass ID</span>
                <span className="text-2xl font-black text-electric-cyan tracking-widest">{registration.regId}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">OFFICIAL PASS</span>
                <span className="text-xs font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 inline-block mt-0.5">
                  ✓ VERIFIED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Participant Name</span>
                <span className="text-sm font-bold text-white block truncate">{registration.fullName}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Event Registered</span>
                <span className="text-xs font-bold text-electric-cyan block truncate">{registration.event}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">College / University</span>
                <span className="text-xs font-semibold text-slate-300 block truncate">{registration.college || 'Engineering Campus'}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Team / Entry Type</span>
                <span className="text-xs font-semibold text-slate-300 block truncate">
                  {registration.teamName ? registration.teamName : 'Individual Entry'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-electric-500/20 pt-4 mt-2">
              <div className="space-y-1.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{EVENT_INFO.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{EVENT_INFO.venue}</span>
                </div>
              </div>

              {/* REAL SCANNABLE QR CODE CONTAINING ALL STUDENT DETAILS */}
              <div className="bg-white p-2 rounded-xl flex flex-col items-center justify-center border border-electric-500/40 shadow-lg">
                <QRCodeSVG
                  value={qrPayload}
                  size={110}
                  level="L"
                  includeMargin={false}
                  fgColor="#020611"
                />
                <span className="text-[8px] text-slate-700 font-mono font-bold mt-1 tracking-widest">SCAN AT GATE</span>
              </div>
            </div>

          </div>

          {/* Instructions */}
          <div className="p-3.5 rounded-xl bg-electric-500/10 border border-electric-500/30 text-[11px] text-slate-300">
            💡 <span className="font-bold text-white">Entry Gate Instructions:</span> Present this QR Code at the registration desk. Coordinators will scan it to verify details and mark your attendance instantly.
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-slate-700/60 text-slate-200 font-bold uppercase flex items-center gap-2 transition-all"
            >
              <Printer className="w-4 h-4 text-electric-cyan" />
              <span>Print Pass</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-gradient-to-r from-electric-500 to-electric-cyan text-white font-bold uppercase px-7 py-2.5 shadow-lg shadow-electric-500/25 border border-electric-cyan/40 hover:scale-105 transition-all"
            >
              Done
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TicketModal;
