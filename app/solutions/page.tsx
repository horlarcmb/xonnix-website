'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Store,
  Megaphone,
  Video,
  Rocket,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingModal } from '@/components/BookingModal';

export default function SolutionsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const solutions = [
    {
      id: 'healthcare',
      title: 'Healthcare & MedTech',
      category: 'Health',
      icon: <Stethoscope className="w-7 h-7 text-emerald-400" />,
      tag: 'HIPAA Compliant',
      challenge: 'Manual patient intake processing, clinical notes transcription backlogs, and appointment follow-up delays.',
      solution: 'Automated document extraction pipelines using vision models, patient communication swarms, and EHR sync workflows.',
      results: '85% decrease in intake form processing time, zero HIPAA compliance violations.',
      features: ['OCR Medical Records Parser', 'AI Patient Triage Router', 'Automated Appointment Reminders', 'EHR API Middleware'],
    },
    {
      id: 'finance',
      title: 'Finance & Financial Services',
      category: 'Fintech',
      icon: <Landmark className="w-7 h-7 text-blue-400" />,
      tag: 'SOC2 Compliant',
      challenge: 'Slow KYC/AML document verification, manual bank reconciliation, and fraud pattern detection lag.',
      solution: 'Real-time n8n financial reconciliation pipelines, AI identity verification bots, and instant transaction alert swarms.',
      results: '99.4% accuracy in document validation, -70% operational verification overhead.',
      features: ['Automated KYC Verification', 'Multi-bank Transaction Reconciliation', 'Fraud Alert Swarms', 'Compliance Audit Trails'],
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce Brands',
      category: 'Retail',
      icon: <ShoppingBag className="w-7 h-7 text-purple-400" />,
      tag: 'Omnichannel Sync',
      challenge: 'Inventory misalignment across Shopify/Amazon, high support ticket volume, and manual return approvals.',
      solution: '24/7 AI support agent with order lookup tools, automatic inventory sync across channels, and automated returns triage.',
      results: '60% reduction in support ticket load, instant inventory updates across 5 channels.',
      features: ['AI Order Support Bot', 'Shopify / Amazon Stock Sync', 'Returns & Refund Automation', 'Review Sentiment Aggregator'],
    },
    {
      id: 'marketing-agencies',
      title: 'Marketing & Ad Agencies',
      category: 'Agency',
      icon: <Megaphone className="w-7 h-7 text-amber-400" />,
      tag: 'Client Scaling',
      challenge: 'Manual client reporting across Meta/Google Ads, slow lead routing to sales teams, and repetitive content generation.',
      solution: 'Automated multi-platform ad performance reports dispatched to Slack/Client email, AI lead scoring & enrichment.',
      results: 'Saved 20+ hours per week per account manager, 3x faster lead response times.',
      features: ['Multi-Channel Ad Report Generator', 'Instant Lead Enrichment Engine', 'Social Media Scheduling Swarm', 'Client Onboarding Pipeline'],
    },
    {
      id: 'content-creators',
      title: 'Content Creators & Media',
      category: 'Media',
      icon: <Video className="w-7 h-7 text-pink-400" />,
      tag: 'Media Pipeline',
      challenge: 'Time-consuming video repurposing, manual podcast transcription, and multi-platform distribution friction.',
      solution: 'Automated video transcript parsing, AI short-form clip highlights generator, and multi-channel posting workflows.',
      results: '10x content output without hiring additional video editors.',
      features: ['Whisper Audio Transcription', 'AI Blog & Newsletter Generator', 'YouTube / TikTok Auto Publisher', 'Sponsorship Pipeline Tracker'],
    },
    {
      id: 'education',
      title: 'Education & EdTech',
      category: 'Education',
      icon: <GraduationCap className="w-7 h-7 text-cyan-400" />,
      tag: 'Administrative AI',
      challenge: 'Heavy student onboarding paperwork, grading backlogs, and delayed student query responses.',
      solution: 'Automated student record creation, AI grading assistant workflows for standardized tests, and 24/7 campus Q&A bots.',
      results: '40% reduction in admin workload, instant response time for student inquiries.',
      features: ['Student Enrollment Pipeline', 'AI Grading Assistant', '24/7 Campus Helpdesk Agent', 'Certificate Auto-Issuance'],
    },
    {
      id: 'retail',
      title: 'Retail & Physical Stores',
      category: 'Retail',
      icon: <Store className="w-7 h-7 text-emerald-400" />,
      tag: 'POS & Inventory',
      challenge: 'Disconnected Point-of-Sale (POS) data, manual supplier reordering, and delayed inventory updates.',
      solution: 'Real-time n8n POS sync to central warehouse DB, automated low-stock reorder triggers to vendors.',
      results: 'Zero stockouts for top 50 SKU items, automated purchase order creation.',
      features: ['POS to ERP Middleware', 'Automated Purchase Orders', 'Vendor Communication Bot', 'Multi-Store Sales Analytics'],
    },
    {
      id: 'startups',
      title: 'Tech Startups & Scaleups',
      category: 'Tech',
      icon: <Rocket className="w-7 h-7 text-indigo-400" />,
      tag: 'Velocity & Ops',
      challenge: 'Need to scale operations fast with lean teams, avoiding expensive headcount additions early on.',
      solution: 'Self-hosted n8n infrastructure with custom AI agents handling customer success, lead qualification, and devops notifications.',
      results: 'Scaled revenue 4x while keeping operational head count constant.',
      features: ['Automated Customer Onboarding', 'DevOps Alert Triage', 'Intercom / Zendesk AI Sync', 'Self-Hosted n8n Stack'],
    },
    {
      id: 'enterprise',
      title: 'Enterprise Corporations',
      category: 'Enterprise',
      icon: <Building2 className="w-7 h-7 text-blue-400" />,
      tag: 'Custom Architecture',
      challenge: 'Siloed departmental software, strict legacy security requirements, and complex compliance frameworks.',
      solution: 'Private on-premise AI workflow clusters with custom role-based access control (RBAC), SSO, and dedicated SLA support.',
      results: '100% compliance with corporate security governance, $500k+ annual labor savings.',
      features: ['Private On-Premise AI Models', 'Custom SSO & RBAC Security', '24/7 Dedicated SLA Support', 'Enterprise SAP / Oracle Bridges'],
    },
  ];

  const categories = ['All', 'Health', 'Fintech', 'Retail', 'Agency', 'Media', 'Education', 'Tech', 'Enterprise'];

  const filteredSolutions = activeCategory === 'All'
    ? solutions
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Industry Solutions
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Tailored Automation Blueprints For Your Sector
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Every industry faces unique workflow friction. We engineer domain-specific AI agents and n8n pipelines designed for your exact regulatory and operational demands.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSolutions.map((sol) => (
          <GlassCard key={sol.id} className="flex flex-col justify-between p-8 border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {sol.icon}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {sol.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2">{sol.title}</h3>

              <div className="space-y-3 my-4 text-xs leading-relaxed">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-300">
                  <span className="font-bold text-rose-400 block mb-0.5">The Bottleneck:</span>
                  {sol.challenge}
                </div>
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-slate-300">
                  <span className="font-bold text-cyan-400 block mb-0.5">Xonnix Solution:</span>
                  {sol.solution}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Core Capabilities</h4>
                {sol.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">{sol.results}</span>
              <Button variant="ghost" size="sm" onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Book Call
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
