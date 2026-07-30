'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Bot,
  Database,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingModal } from '@/components/BookingModal';

export default function PortfolioPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const caseStudies = [
    {
      title: 'Autonomous Healthcare Patient Triage & Record Extraction',
      client: 'Global Health Network',
      metric: '-82% Processing Overhead',
      desc: 'Engineered an end-to-end n8n workflow pipeline integrated with Claude 3.5 Sonnet to parse incoming faxed/PDF medical forms, extract clinical entities, and update electronic health records in real-time.',
      diagram: [
        'Fax / PDF Document Upload',
        'n8n Webhook Listener',
        'Claude 3.5 Vision OCR',
        'EHR API Sync (PostgreSQL)',
      ],
      results: [
        'Processing time dropped from 45 minutes to 12 seconds per patient',
        'Zero manual data transcription errors across 10,000+ monthly forms',
        'Full HIPAA compliance audit logging via encrypted n8n nodes',
      ],
      tags: ['n8n', 'Claude 3.5', 'PostgreSQL', 'Healthcare'],
    },
    {
      title: 'Enterprise Fintech Lead Qualification & Automated RAG Agent',
      client: 'Apex Financial Technologies',
      metric: '4x Revenue Lead Velocity',
      desc: 'Constructed an autonomous multi-agent sales swarm that enriches incoming inbound leads via Apollo API, queries custom financial Vector DB for product eligibility, and schedules calendar discovery calls automatically.',
      diagram: [
        'Inbound Web Form Trigger',
        'Apollo Lead Enrichment',
        'Pinecone Vector Match',
        'Cal.com Calendar Dispatch',
      ],
      results: [
        'Lead response latency reduced from 4 hours to under 30 seconds',
        '+310% increase in qualified meeting bookings month-over-month',
        'Integrated with HubSpot CRM for zero-touch sales rep handoff',
      ],
      tags: ['LangChain', 'Pinecone', 'HubSpot API', 'Fintech'],
    },
    {
      title: 'E-Commerce Omnichannel Inventory & Support Automation',
      client: 'Veloce Retail Brands',
      metric: '65% Ticket Deflection',
      desc: 'Deployed a self-hosted n8n cluster connecting Shopify, Amazon Seller Central, and a custom GPT-4o customer support agent capable of checking shipping status, triggering refunds, and syncing stock levels.',
      diagram: [
        'Shopify / Amazon Webhook',
        'n8n Event Bus Router',
        'GPT-4o Function Calling',
        'Zendesk Ticket Resolve',
      ],
      results: [
        'Automated 65% of repetitive customer order inquiries without human agent',
        'Prevented stockout overselling across 4 worldwide fulfillment centers',
        'Saved over $120,000 in customer support labor costs annually',
      ],
      tags: ['Shopify API', 'n8n Cluster', 'GPT-4o', 'E-Commerce'],
    },
    {
      title: 'Automated Financial Invoice Extraction & ERP Reconciliation',
      client: 'OmniCorp Logistics',
      metric: '$350k Saved Annually',
      desc: 'Built a custom optical character recognition (OCR) and LLM extraction node in n8n to ingest multi-currency vendor invoices, cross-reference purchase orders in NetSuite ERP, and flag anomalies for approval.',
      diagram: [
        'Email Attachment Ingest',
        'Custom OCR LLM Parser',
        'NetSuite ERP Verification',
        'Slack Approval Bot',
      ],
      results: [
        'Processed 25,000+ invoices annually with zero accounting backlog',
        'Eliminated duplicate vendor payment errors completely',
        'Provides real-time CFO financial dashboard updates in Next.js',
      ],
      tags: ['NetSuite API', 'Python LLM', 'Slack API', 'Enterprise'],
    },
  ];

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Engineering Portfolio
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Case Studies & Verified Automation Metrics
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Explore real-world case studies demonstrating how Xonnix designs, builds, and deploys high-impact AI workflow systems for enterprise clients.
        </p>
      </div>

      {/* Case Studies */}
      <div className="space-y-12">
        {caseStudies.map((study, idx) => (
          <GlassCard key={idx} className="p-8 sm:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Client: {study.client}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    {study.metric}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{study.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{study.desc}</p>

                {/* Workflow Execution Pipeline Representation */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">
                    Workflow Architecture Pipeline
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    {study.diagram.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 flex flex-col justify-center items-center"
                      >
                        <span className="text-[10px] text-cyan-400 mb-1">Step 0{nIdx + 1}</span>
                        <span>{node}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">
                    Verified Outcomes
                  </h4>
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Stack & Action */}
              <div className="flex flex-col justify-between bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold mb-3">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-white/5 text-xs font-mono text-slate-400">
                    Engineered by Xonnix Core AI Team
                  </div>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => setBookingOpen(true)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Build Similar Solution
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
