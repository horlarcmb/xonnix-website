'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  HelpCircle,
  Calculator,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingModal } from '@/components/BookingModal';

export default function PricingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  // ROI Calculator states
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(45);

  const monthlyHoursSaved = teamSize * hoursPerWeek * 4;
  const monthlyCostSavings = monthlyHoursSaved * hourlyRate;

  const tiers = [
    {
      name: 'Starter',
      tagline: 'Ideal for small teams automating core workflows',
      price: billingCycle === 'annual' ? '$1,490' : '$1,890',
      period: '/month',
      popular: false,
      features: [
        'Up to 3 Production n8n Workflows',
        'Single AI Agent Integration (GPT-4o)',
        'Self-Hosted or Managed n8n.xonnix.org',
        'Standard Email Support (24h SLA)',
        'Basic Telemetry & Audit Logs',
      ],
    },
    {
      name: 'Growth',
      tagline: 'For fast-growing companies with complex ops',
      price: billingCycle === 'annual' ? '$3,990' : '$4,790',
      period: '/month',
      popular: true,
      features: [
        'Up to 10 Advanced Workflows & Sub-flows',
        'Multi-Agent Swarm Integration (LangChain)',
        'Vector Memory (Pinecone / Qdrant RAG)',
        'Custom n8n Community Node Development',
        'Priority Slack & Email Support (4h SLA)',
        'Custom Admin Next.js Dashboard',
      ],
    },
    {
      name: 'Enterprise',
      tagline: 'Dedicated infrastructure & custom SLA governance',
      price: billingCycle === 'annual' ? '$8,990' : '$10,490',
      period: '/month',
      popular: false,
      features: [
        'Unlimited Workflows & Sub-workflow Libraries',
        'Private LLM Inference (Llama 3 / Ollama Cloud)',
        'On-Premise Private VPC Deployment',
        'Dedicated Solutions Architect & 1h SLA',
        'SOC2 & HIPAA Compliance Certification',
        '24/7 Proactive Monitoring & Failover',
      ],
    },
  ];

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Transparent Pricing Tiers
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          Predictable Investments In High-ROI Automation
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Zero surprise per-task fees. We engineer, deploy, and maintain your AI workflow infrastructure under simple transparent plans.
        </p>

        {/* Toggle */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <span className={`text-xs font-mono ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
            className="w-14 h-7 rounded-full bg-slate-900 border border-white/20 p-1 transition-colors relative"
          >
            <div
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-mono ${billingCycle === 'annual' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
            Annual Billing (Save 20%)
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <GlassCard
            key={tier.name}
            className={`flex flex-col justify-between p-8 border ${
              tier.popular
                ? 'border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.25)] bg-gradient-to-b from-blue-950/30 to-slate-950'
                : 'border-white/10'
            }`}
          >
            <div>
              {tier.popular && (
                <span className="w-fit mb-4 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 text-[10px] font-mono font-bold tracking-wider uppercase block">
                  MOST POPULAR FOR SCALE
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-slate-400 text-xs mb-6">{tier.tagline}</p>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="text-xs font-mono text-slate-400">{tier.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Includes:</h4>
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant={tier.popular ? 'primary' : 'outline'}
              fullWidth
              onClick={() => setBookingOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started with {tier.name}
            </Button>
          </GlassCard>
        ))}
      </div>

      {/* Custom Quote Box */}
      <GlassCard className="p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Need a Custom Enterprise Quote?</h3>
          <p className="text-slate-400 text-xs">
            We offer custom SLA agreements, dedicated DevOps infrastructure, and custom node development contracts.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-4 h-4" />}>
          Request Custom Proposal
        </Button>
      </GlassCard>

      {/* INTERACTIVE ROI CALCULATOR WIDGET */}
      <GlassCard className="p-8 sm:p-12 border border-cyan-500/30 space-y-8 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950">
        <div className="text-center space-y-3">
          <Badge variant="cyan" icon={<Calculator className="w-3.5 h-3.5" />}>
            Interactive Automation ROI Calculator
          </Badge>
          <h2 className="text-3xl font-bold text-gradient">Calculate Your Team’s Monthly Cost Savings</h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Adjust the sliders below to estimate financial savings achieved by replacing repetitive manual tasks with Xonnix workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sliders */}
          <div className="space-y-6 bg-slate-950/80 p-6 rounded-2xl border border-white/10">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Team Members Performing Manual Tasks:</span>
                <span className="text-cyan-400 font-bold">{teamSize} People</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Manual Hours Spent Per Person / Week:</span>
                <span className="text-cyan-400 font-bold">{hoursPerWeek} Hours</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Average Hourly Labor Rate ($):</span>
                <span className="text-cyan-400 font-bold">${hourlyRate} / hour</span>
              </div>
              <input
                type="range"
                min={15}
                max={200}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Card */}
          <div className="text-center space-y-6 bg-slate-900/90 p-8 rounded-2xl border border-white/10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Estimated Monthly Operational Savings
            </div>

            <div className="text-5xl font-extrabold text-gradient-accent">
              ${monthlyCostSavings.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ mo</span>
            </div>

            <div className="text-xs font-mono text-emerald-400">
              ⚡ Recovers ~{monthlyHoursSaved.toLocaleString()} hours of productive staff time every month
            </div>

            <Button variant="primary" fullWidth onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-4 h-4" />}>
              Claim These ROI Savings
            </Button>
          </div>
        </div>
      </GlassCard>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
