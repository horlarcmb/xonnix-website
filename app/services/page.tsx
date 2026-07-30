'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Bot,
  Layers,
  Building2,
  Database,
  Network,
  Cpu,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Terminal,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingModal } from '@/components/BookingModal';

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const services = [
    {
      id: 'ai-workflow-engineering',
      title: 'AI Workflow Engineering',
      tagline: 'End-to-end architecture for multi-step automated operations',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      desc: 'We map out, architect, and construct full-lifecycle AI workflow engines. Combining deterministic rules with adaptive large language models, our workflows handle exception branching, retry mechanisms, and complex conditional routing effortlessly.',
      deliverables: [
        'Custom workflow topology design & visual mapping',
        'Fail-safe retry handlers and error notification swarms',
        'Stateful execution tracking with persistent storage',
        'Production monitoring & real-time latency analytics',
      ],
      stack: ['n8n', 'Python', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 'n8n-development',
      title: 'n8n Development & Self-Hosting',
      tagline: 'Custom n8n nodes, sub-workflows, and high-availability clusters',
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      desc: 'As specialized n8n engineers, we build bespoke community nodes, complex sub-workflow modular libraries, and high-concurrency self-hosted deployments (Docker, AWS ECS, GCP Cloud Run) that lower your SaaS middleware costs to zero.',
      deliverables: [
        'Custom n8n community node creation (TypeScript)',
        'Self-hosted multi-tenant n8n cluster setup',
        'Sub-workflow modularization & reusability libraries',
        'Security hardening & encrypted credentials management',
      ],
      stack: ['n8n Enterprise', 'Docker', 'Kubernetes', 'Redis', 'AWS'],
    },
    {
      id: 'ai-agent-development',
      title: 'Autonomous AI Agent Development',
      tagline: 'Reasoning agent swarms capable of complex decision making',
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      desc: 'We construct autonomous multi-agent systems using LangChain, AutoGen, and CrewAI frameworks. These agents evaluate unstructured documents, perform dynamic web searches, summarize data, and initiate API calls autonomously.',
      deliverables: [
        'RAG (Retrieval-Augmented Generation) vector memory pipelines',
        'Multi-agent role-playing swarms with supervisor hierarchy',
        'Tool-calling integration (browsing, SQL, API execution)',
        'Human-in-the-loop review interfaces and safety rails',
      ],
      stack: ['LangChain', 'OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Pinecone', 'Qdrant'],
    },
    {
      id: 'business-automation',
      title: 'Enterprise Business Automation',
      tagline: 'Streamline ERP, finance, HR, and cross-departmental tasks',
      icon: <Building2 className="w-8 h-8 text-emerald-400" />,
      desc: 'Reengineer legacy operational friction into automated background processes. We connect ERP systems, HR management platforms, and accounting suites to eliminate data duplication and manual spreadsheet updates.',
      deliverables: [
        'Invoice processing & OCR optical extraction',
        'Automated employee onboarding & credential provisioning',
        'Cross-system data synchronization (ERP <-> Accounting)',
        'Compliance logging & audit trail generation',
      ],
      stack: ['SAP', 'NetSuite', 'QuickBooks', 'Workday', 'n8n'],
    },
    {
      id: 'crm-automation',
      title: 'CRM & Sales Automation',
      tagline: 'Turn cold leads into closed revenue with intelligent pipelines',
      icon: <Layers className="w-8 h-8 text-amber-400" />,
      desc: 'Supercharge HubSpot, Salesforce, or Pipedrive with AI lead scoring, automated enrichment (Apollo, Clearbit), custom Slack alerts, and personalized outreach sequences generated in real-time by AI agents.',
      deliverables: [
        'Instant lead enrichment & firmographic scoring',
        'AI email summary & draft response generation',
        'Automated deal stage progression triggers',
        'Omnichannel customer sync (Email, WhatsApp, CRM)',
      ],
      stack: ['HubSpot API', 'Salesforce REST', 'Pipedrive', 'Apollo API', 'n8n'],
    },
    {
      id: 'api-integrations',
      title: 'API Integrations & Custom Webhooks',
      tagline: 'Unify disconnected software into a single cohesive ecosystem',
      icon: <Network className="w-8 h-8 text-pink-400" />,
      desc: 'Bridge legacy on-premise software with modern cloud APIs. We write custom middleware wrappers, GraphQL endpoints, and Webhook listeners to guarantee real-time payload transmission between all your applications.',
      deliverables: [
        'RESTful & GraphQL custom API wrapper development',
        'Webhook listener setup with rate-limiting & queuing',
        'Legacy database connectors (MSSQL, Oracle, MySQL)',
        'Swagger/OpenAPI documentation generation',
      ],
      stack: ['FastAPI', 'ExpressJS', 'GraphQL', 'Postman', 'Webhooks'],
    },
    {
      id: 'internal-ops-automation',
      title: 'Internal Operations Automation',
      tagline: 'Custom internal web apps, Slack bots, and approval flows',
      icon: <Terminal className="w-8 h-8 text-cyan-400" />,
      desc: 'Empower your team with bespoke internal tools. We build interactive Slack/Discord bots, custom approval dashboards, and automated ticketing queues that keep internal operations running with zero delay.',
      deliverables: [
        'Slack & Microsoft Teams interactive bot commands',
        'Approval workflow chains with multi-level signoffs',
        'Document generation (PDFs, Contracts, Reports)',
        'Custom admin dashboards using Retool or Next.js',
      ],
      stack: ['Slack Bolt SDK', 'Next.js', 'Tailwind', 'SendGrid', 'Twilio'],
    },
    {
      id: 'custom-ai-solutions',
      title: 'Custom AI Solutions & Private Inference',
      tagline: 'Self-hosted LLMs, fine-tuned models, and strict data privacy',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      desc: 'For companies with strict privacy requirements or non-disclosure mandates, we deploy self-hosted open-weights models (Llama 3, Mistral) on dedicated GPU cloud infrastructure with zero third-party data access.',
      deliverables: [
        'Private LLM deployment on vLLM / Ollama clusters',
        'Domain-specific model fine-tuning (LoRA / QLoRA)',
        'Proprietary RAG architecture over internal knowledge bases',
        'Zero-data-retention compliance verification',
      ],
      stack: ['vLLM', 'Ollama', 'Llama 3', 'HuggingFace', 'PyTorch'],
    },
  ];

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Engineering Capabilities
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          AI Workflow Engineering & Custom Automation Services
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          We combine advanced software engineering, n8n workflow development, and autonomous AI agents to turn manual business tasks into scalable digital assets.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-12">
        {services.map((srv, idx) => (
          <GlassCard key={srv.id} id={srv.id} className="p-8 sm:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Overview */}
              <div className="lg:col-span-1 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                  {srv.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-100">{srv.title}</h2>
                <p className="text-cyan-400 text-sm font-mono font-medium">{srv.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setBookingOpen(true)}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Discuss This Service
                  </Button>
                </div>
              </div>

              {/* Deliverables & Stack */}
              <div className="lg:col-span-2 space-y-6 bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-white/5">
                <div>
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    Key Deliverables & Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    Technology & Framework Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {srv.stack.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-blue-950/60 via-slate-950 to-cyan-950/60 p-12 rounded-3xl border border-blue-500/30 space-y-6">
        <h2 className="text-3xl font-bold text-white">Need a Custom Combination of Services?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
          We architect bespoke hybrid pipelines integrating n8n, custom AI agents, and private infrastructure.
        </p>
        <Button variant="primary" size="lg" onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-4 h-4" />}>
          Schedule Architectural Consult
        </Button>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
