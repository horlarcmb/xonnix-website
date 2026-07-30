'use client';

import React from 'react';
import {
  Mail,
  Clock,
  MapPin,
  Globe,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/ContactForm';
import { GlassCard } from '@/components/ui/GlassCard';

export default function ContactPage() {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Official Contact HQ
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Let’s Build Your AI Automation System
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Submit your automation requirements directly to our n8n triage workflow engine. Our solution architects will review your payload and respond within 2 hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          <GlassCard className="p-8 border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" /> Directly Reach Us
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-semibold uppercase">Official Email</h4>
                  <a href="mailto:contact@xonnix.org" className="text-slate-200 hover:text-cyan-400 font-medium">
                    contact@xonnix.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-emerald-400 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-semibold uppercase">Engineering Hours</h4>
                  <p className="text-slate-200 font-medium">Monday - Friday: 08:00 - 20:00 WAT / EST</p>
                  <p className="text-xs text-slate-400">24/7 Automated System Telemetry</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-purple-400 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-semibold uppercase">Headquarters</h4>
                  <p className="text-slate-200 font-medium">Lagos, Nigeria & Distributed Global Engineering</p>
                  <p className="text-xs text-slate-400">Primary Domain: xonnix.org</p>
                </div>
              </div>
            </div>

            {/* n8n Live Subdomain status */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Webhook Engine:</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Endpoint: https://n8n.xonnix.org/webhook/contact-form
              </p>
            </div>
          </GlassCard>

          {/* Interactive Map Placeholder Graphic */}
          <GlassCard className="p-6 border border-white/10 text-center space-y-4">
            <h3 className="text-sm font-bold text-slate-200">Global Engineering Operations Map</h3>
            <div className="h-44 rounded-xl bg-slate-950/90 border border-white/10 relative overflow-hidden flex items-center justify-center bg-grid-pattern">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              <div className="relative z-10 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center mx-auto animate-bounce">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-cyan-300 block">HQ: West Africa & Global Remote</span>
                <span className="text-[10px] text-slate-500 block">Serving US, UK, EU & Africa Enterprises</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
