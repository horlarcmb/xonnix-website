'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2, Globe, Heart } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      fetch('https://n8n.xonnix.org/webhook/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      }).catch(() => {});
    }
  };

  return (
    <footer className="bg-[#02050e] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400 text-sm">
      {/* Background Subtle Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">XONNIX</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering intelligent AI workflows, autonomous agent swarms, and custom n8n pipelines for enterprise operations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://n8n.xonnix.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>n8n Engine: Operational</span>
              </a>
              <span className="text-xs font-mono text-slate-500">xonnix.org</span>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Company & Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing Tiers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Xonnix
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-400 transition-colors">
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Trust & Legal Compliance
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="hover:text-cyan-400 transition-colors">
                  Data Deletion Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="hover:text-cyan-400 transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Workflow Intelligence Insights
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Subscribe for weekly n8n workflow templates, AI agent blueprints, and automation architecture teardowns.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="enter@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <Button type="submit" variant="secondary" size="sm" fullWidth icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Xonnix Inc. (xonnix.org). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Vision: Become Africa's leading AI Workflow Engineering company</span>
            <span className="text-slate-700">|</span>
            <a
              href="https://n8n.xonnix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              n8n.xonnix.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
