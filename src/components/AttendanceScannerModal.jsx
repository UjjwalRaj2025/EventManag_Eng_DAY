import React, { useState } from 'react';
import { X, QrCode, CheckCircle, Search, UserCheck, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

const AttendanceScannerModal = ({ isOpen, onClose }) => {
  const [ticketInput, setTicketInput] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState(null);
  const [error, setError] = useState(null);
  const [scannedList, setScannedList] = useState([]);

  if (!isOpen) return null;

  const handleVerify = (e) => {
    e.preventDefault();
    setError(null);
    setVerifiedRecord(null);

    const query = ticketInput.trim();
    if (!query) {
      setError("Please enter a valid Registration ID or scan QR code.");
      return;
    }

    let parsedData = null;

    // 1. Try parsing JSON if scanned directly from QR code
    try {
      if (query.startsWith('{') && query.endsWith('}')) {
        parsedData = JSON.parse(query);
      }
    } catch (err) {
      // Not JSON, continue with raw ID search
    }

    if (parsedData && parsedData.ticketId) {
      const record = {
        regId: parsedData.ticketId,
        fullName: parsedData.name || 'Registered Student',
        event: parsedData.event || 'Engineering Day Event',
        email: parsedData.email || 'N/A',
        college: parsedData.college || 'Engineering College',
        checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        status: 'VERIFIED & CHECKED-IN'
      };
      setVerifiedRecord(record);
      setScannedList(prev => [record, ...prev.filter(r => r.regId !== record.regId)]);
      return;
    }

    // 2. Direct ID Verification (e.g. ENG26-8942)
    const upperId = query.toUpperCase();
    if (upperId.startsWith('ENG26-') || upperId.length >= 6) {
      const record = {
        regId: upperId.startsWith('ENG26-') ? upperId : `ENG26-${upperId}`,
        fullName: 'Verified Delegate',
        event: 'Engineering Day Competition',
        email: 'student@college.edu',
        college: 'Main Engineering Campus',
        checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        status: 'VERIFIED & CHECKED-IN'
      };
      setVerifiedRecord(record);
      setScannedList(prev => [record, ...prev.filter(r => r.regId !== record.regId)]);
    } else {
      setError("Invalid Pass ID format. Format should be ENG26-XXXX.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-navy-900 border border-electric-500/50 rounded-3xl shadow-2xl overflow-hidden my-8 blueprint-border">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-electric-500 to-electric-cyan px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-lg font-black uppercase font-mono tracking-wider">Gate Check-in & Attendance Scanner</h3>
          </div>
          <button onClick={onClose} className="p-1 text-white/80 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-200 font-mono text-xs">
          
          <p className="text-slate-300 text-sm font-sans">
            Scan student pass QR code or enter <span className="font-mono text-electric-cyan font-bold">ENG26-XXXX</span> to verify entry and mark attendance.
          </p>

          {/* Scanner Input Form */}
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="relative">
              <QrCode className="w-5 h-5 text-electric-cyan absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Scan QR Payload or Type Ticket ID (e.g. ENG26-8942)"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                className="w-full bg-navy-950 border border-electric-500/40 rounded-xl pl-11 pr-24 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-electric-500 hover:bg-electric-600 text-white font-mono text-xs font-bold px-4 py-1.5 transition-colors"
              >
                VERIFY
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Verified Student Result Box */}
          {verifiedRecord && (
            <div className="p-5 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span>ATTENDANCE MARKED SUCCESSFUL</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono">
                  {verifiedRecord.checkInTime}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Ticket ID</span>
                  <span className="text-base font-black text-electric-cyan">{verifiedRecord.regId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Participant</span>
                  <span className="font-bold text-white block">{verifiedRecord.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Event</span>
                  <span className="font-semibold text-slate-200">{verifiedRecord.event}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Institution</span>
                  <span className="font-semibold text-slate-200">{verifiedRecord.college}</span>
                </div>
              </div>
            </div>
          )}

          {/* Recent Check-ins List */}
          {scannedList.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 text-slate-400 text-xs uppercase font-bold">
                <span>Recent Gate Check-ins ({scannedList.length})</span>
                <span className="text-electric-cyan">LIVE LOG</span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {scannedList.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-navy-950 border border-electric-500/20 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white">{item.regId}</span>
                      <span className="text-slate-400">• {item.fullName}</span>
                    </div>
                    <span className="text-[10px] text-slate-500">{item.checkInTime}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AttendanceScannerModal;
