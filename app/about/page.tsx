'use client';

import React, { useState } from 'react';
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Award,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Sparkles,
  Code2,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingModal } from '@/components/BookingModal';

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const coreValues = [
    { title: 'Engineering Excellence', desc: 'We build enterprise software with strict testing, security, and version control—never flimsy hacks.' },
    { title: 'Security & Trust First', desc: 'Zero data retention, bank-grade encryption, and full compliance with international privacy laws.' },
    { title: 'Uncompromising Velocity', desc: 'We ship production-ready n8n workflows and AI agent swarms in days, not quarters.' },
    { title: 'Pragmatic Innovation', desc: 'We leverage AI where it delivers real financial ROI, ignoring ephemeral hype.' },
  ];

  const techStack = [
    { category: 'Workflow Engine', items: ['n8n Self-Hosted', 'n8n Cloud', 'Temporal.io', 'Apache Airflow'] },
    { category: 'AI & LLM Providers', items: ['OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Llama 3 (Meta)', 'Mistral AI'] },
    { category: 'Agent Frameworks', items: ['LangChain', 'AutoGen', 'CrewAI', 'LlamaIndex'] },
    { category: 'Databases & Vector', items: ['PostgreSQL', 'Pinecone', 'Qdrant', 'Redis', 'Supabase'] },
    { category: 'Cloud Infrastructure', items: ['Docker', 'AWS', 'Google Cloud', 'Vercel', 'Kubernetes'] },
    { category: 'Languages & APIs', items: ['Python', 'TypeScript', 'Node.js', 'FastAPI', 'GraphQL'] },
  ];

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          About Xonnix
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Pioneering The Future Of AI Workflow Engineering
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Xonnix was founded with a singular purpose: to transform how businesses operate by replacing manual toil with autonomous, self-healing AI workflow systems.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8 sm:p-10 border border-blue-500/30 relative overflow-hidden bg-gradient-to-br from-blue-950/30 via-slate-950 to-slate-950">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 w-fit mb-4">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            "To help businesses eliminate repetitive work through intelligent AI-powered workflow systems."
          </p>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
            Target: 100% Operational Efficiency Gain
          </div>
        </GlassCard>

        <GlassCard className="p-8 sm:p-10 border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-cyan-950/30 via-slate-950 to-slate-950">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 w-fit mb-4">
            <Eye className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Our Vision</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            "Become Africa's leading AI Workflow Engineering company."
          </p>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-emerald-400">
            Empowering Global & African Enterprises
          </div>
        </GlassCard>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="subtle">Core Principles</Badge>
          <h2 className="text-3xl font-bold text-gradient">The Values That Guide Our Code</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/10">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 font-mono font-bold flex items-center justify-center mb-4 border border-blue-500/30">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{val.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="cyan">Technology Stack</Badge>
          <h2 className="text-3xl font-bold text-gradient">Our Technical Infrastructure Matrix</h2>
          <p className="text-slate-400 text-sm">
            We build exclusively on battle-tested open standards and top-tier AI inference engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stk, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
              <h3 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {stk.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stk.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Ready to Experience Xonnix Engineering?</h2>
        <Button variant="primary" size="lg" onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-4 h-4" />}>
          Schedule Strategy Session
        </Button>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
