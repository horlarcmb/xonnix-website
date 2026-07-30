'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Tomorrow at 10:00 AM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Submit to n8n webhook
    fetch('https://n8n.xonnix.org/webhook/discovery-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, selectedDate }),
    }).catch(() => {
      // Fallback silent handle
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 relative border border-white/15 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Discovery Call Scheduled!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
              We have dispatched a calendar invitation and introductory briefing to your inbox.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-400">
              Session Time: {selectedDate}
            </div>
            <Button variant="primary" onClick={onClose} className="mt-4">
              Done
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> 30-Minute AI Workflow Strategy Call
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Book a Discovery Call</h3>
            <p className="text-slate-400 text-sm mb-6">
              Let's analyze your current business processes and map out custom AI agent & n8n workflow solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Preferred Slot
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Tomorrow at 10:00 AM EST">Tomorrow at 10:00 AM EST</option>
                  <option value="Tomorrow at 2:00 PM EST">Tomorrow at 2:00 PM EST</option>
                  <option value="Thursday at 11:00 AM EST">Thursday at 11:00 AM EST</option>
                  <option value="Friday at 3:00 PM EST">Friday at 3:00 PM EST</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Brief Overview of Current Workflow Bottlenecks
                </label>
                <textarea
                  rows={2}
                  placeholder="We spend 15 hrs/week manually copying lead data..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <Button variant="primary" fullWidth size="lg" icon={<Send className="w-4 h-4" />}>
                Confirm Strategy Booking
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
