'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Heart,
  Globe2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  DollarSign,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function CareersPage() {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  const jobs = [
    {
      id: 'senior-n8n-architect',
      title: 'Senior n8n Workflow Architect',
      type: 'Full-Time • Remote',
      location: 'Global (EST / WAT timezone)',
      desc: 'Lead the design of complex self-hosted n8n enterprise clusters, custom node extensions, and fail-safe automation pipelines for international clients.',
      reqs: [
        '3+ years building enterprise n8n workflow pipelines & custom Node.js nodes',
        'Deep understanding of REST, GraphQL, Webhooks, and PostgreSQL',
        'Experience with Docker, AWS/GCP, and microservices architecture',
      ],
    },
    {
      id: 'ai-agent-engineer',
      title: 'AI Agent Systems Engineer (LangChain / Python)',
      type: 'Full-Time • Remote',
      location: 'Global Remote',
      desc: 'Architect autonomous multi-agent reasoning swarms, vector retrieval (RAG) pipelines, and tool-calling integrations using Python, OpenAI, and Anthropic APIs.',
      reqs: [
        'Proficiency with Python, LangChain, AutoGen, and vector stores (Pinecone, Qdrant)',
        'Experience fine-tuning open-weights models (Llama 3, Mistral) on GPUs',
        'Strong focus on LLM safety, evaluation, and latency optimization',
      ],
    },
    {
      id: 'fullstack-ai-developer',
      title: 'Full-Stack Developer (Next.js & Integration Middleware)',
      type: 'Full-Time • Remote',
      location: 'Lagos, Nigeria / Remote',
      desc: 'Build high-performance web applications, executive automation dashboards, and custom middleware APIs connecting client software to Xonnix engines.',
      reqs: [
        'Mastery of Next.js (App Router), TypeScript, Tailwind CSS, and React',
        'Backend knowledge of Node.js/FastAPI and database design',
        'Obsession with UI/UX micro-interactions and dark-mode aesthetics',
      ],
    },
  ];

  const benefits = [
    { title: 'Global Remote First', desc: 'Work from anywhere in the world with flexible asynchronous hours.' },
    { title: 'Competitive Compensation', desc: 'Top-tier salary packages with equity options and performance bonuses.' },
    { title: 'Continuous AI Learning', desc: '$3,000 annual budget for conferences, courses, and GPU computing credits.' },
    { title: 'Premium Health & Wellness', desc: 'Comprehensive medical insurance and mental health support.' },
  ];

  const process = [
    { step: '01', title: 'Application Review', desc: 'We inspect your portfolio, GitHub, or n8n workflow blueprints.' },
    { step: '02', title: 'Technical Strategy Chat', desc: 'A 45-minute architectural discussion with a Principal Engineer.' },
    { step: '03', title: 'Paid Real-World Challenge', desc: 'Build a small sample n8n or AI agent pipeline (paid for your time).' },
    { step: '04', title: 'Official Offer', desc: 'Fast offer decision within 48 hours of challenge completion.' },
  ];

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Join Xonnix Engineering
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Help Us Build The Operating System For Autonomous Business
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          We are looking for world-class AI engineers, n8n specialists, and backend architects passionate about eliminating repetitive work globally.
        </p>
      </div>

      {/* Benefits */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="subtle">Culture & Perks</Badge>
          <h2 className="text-3xl font-bold text-gradient">Why Engineers Love Xonnix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/10">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 w-fit mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{b.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Openings */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="cyan">Open Positions</Badge>
          <h2 className="text-3xl font-bold text-gradient">Current Engineering Roles</h2>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <GlassCard key={job.id} className="p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
                      {job.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {job.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100">{job.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{job.desc}</p>

                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Key Requirements</h4>
                    {job.reqs.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-4">
                  {appliedRole === job.id ? (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center w-full">
                      Application Submitted! Check email inbox.
                    </div>
                  ) : (
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => setAppliedRole(job.id)}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Apply For Role
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Hiring Process */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="subtle">Transparent Timeline</Badge>
          <h2 className="text-3xl font-bold text-gradient">Our 4-Step Hiring Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
              <span className="text-2xl font-extrabold text-cyan-400 font-mono">{p.step}</span>
              <h3 className="text-base font-bold text-slate-100">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
