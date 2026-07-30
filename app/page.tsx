'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Bot,
  Zap,
  Network,
  Cloud,
  BarChart3,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  CheckCircle2,
  Lock,
  Globe2,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Building2,
  Stethoscope,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Megaphone,
  Rocket,
  Sliders,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { Accordion } from '@/components/ui/Accordion';
import { BookingModal } from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const trustBadges = [
    { label: 'AI Powered', icon: <Bot className="w-4 h-4 text-blue-400" /> },
    { label: 'Secure by Design', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { label: 'Enterprise Ready', icon: <Building2 className="w-4 h-4 text-cyan-400" /> },
    { label: 'Cloud Native', icon: <Cloud className="w-4 h-4 text-purple-400" /> },
    { label: '24/7 Automation', icon: <Zap className="w-4 h-4 text-amber-400" /> },
  ];

  const features = [
    {
      title: 'AI Agents',
      desc: 'Autonomous multi-agent swarms engineered to make decisions, execute tasks, and process complex documents.',
      icon: <Bot className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'Workflow Automation',
      desc: 'Custom self-hosted & cloud n8n pipelines linking your databases, SaaS tools, and internal microservices.',
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'API Integrations',
      desc: 'Seamless unified REST, GraphQL & Webhook endpoints connecting legacy software with next-gen models.',
      icon: <Network className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'Cloud Infrastructure',
      desc: 'High-availability, containerized microservice deployments built on Docker, AWS, GCP, and Kubernetes.',
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'Business Intelligence',
      desc: 'Real-time telemetry, audit logs, and automated insights derived from operational workflow executions.',
      icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
    },
    {
      title: 'Secure Deployments',
      desc: 'Bank-grade encryption, zero data retention policies, and compliance with SOC2, GDPR, and HIPAA.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'Custom Dashboards',
      desc: 'Tailored executive portals displaying real-time automation speed, cost savings, and node health.',
      icon: <LayoutDashboard className="w-6 h-6 text-pink-400" />,
    },
    {
      title: 'Active Monitoring',
      desc: '24/7 proactive fallback handling, automatic retries, and instant alerting via Slack, Teams & PagerDuty.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
    },
  ];

  const metrics = [
    { value: '10x', label: 'Faster Processing Speed' },
    { value: '75%', label: 'Average Cost Reduction' },
    { value: '99.99%', label: 'Workflow Execution Uptime' },
    { value: '500k+', label: 'Automated Operations Run' },
  ];

  const industries = [
    { name: 'Healthcare', icon: <Stethoscope className="w-5 h-5 text-emerald-400" />, desc: 'HIPAA-compliant document parsing, patient intake automation, and clinical triage agents.' },
    { name: 'Finance & Fintech', icon: <Landmark className="w-5 h-5 text-blue-400" />, desc: 'Automated fraud triage, KYC verification pipelines, and financial reconciliation.' },
    { name: 'E-Commerce & Retail', icon: <ShoppingBag className="w-5 h-5 text-purple-400" />, desc: 'Inventory sync, multi-channel customer AI support, and automated returns processing.' },
    { name: 'Marketing Agencies', icon: <Megaphone className="w-5 h-5 text-amber-400" />, desc: 'AI content generation pipelines, lead routing, and dynamic campaign reporting.' },
    { name: 'Education & EdTech', icon: <GraduationCap className="w-5 h-5 text-cyan-400" />, desc: 'Student onboarding, automated grading workflows, and administrative task removal.' },
    { name: 'Startups & Enterprise', icon: <Rocket className="w-5 h-5 text-pink-400" />, desc: 'Scalable internal ops, automated customer onboarding, and custom n8n orchestration.' },
  ];

  const faqs = [
    {
      question: 'What is Xonnix and what makes your AI workflows different?',
      answer:
        'Xonnix is an AI Workflow Engineering firm. Unlike basic automation tools or low-code zap builders, we engineer production-ready, self-hosted or cloud-native n8n pipelines integrated with custom LLM agent swarms, vector databases, and private APIs. We build enterprise systems with fail-safes, audit logs, and zero vendor lock-in.',
    },
    {
      question: 'How do you integrate with our existing software and APIs?',
      answer:
        'We connect directly to your custom REST/GraphQL APIs, databases (PostgreSQL, MongoDB, Snowflake), CRMs (HubSpot, Salesforce), and communication channels (Slack, Teams, Email). If an API does not exist, we build custom n8n node extensions or web scraping workers.',
    },
    {
      question: 'Where are my workflows hosted and how is data kept secure?',
      answer:
        'We support both self-hosted on-premise deployments (your private AWS/GCP/Docker instance) or managed hosting on n8n.xonnix.org. Data is encrypted in transit and at rest with strict SOC2/GDPR compliance.',
    },
    {
      question: 'What is n8n and why does Xonnix specialize in n8n development?',
      answer:
        'n8n is the world’s leading fair-code workflow automation tool. It allows complete source-code access, self-hosting capability, unlimited execution scalability, and seamless Python/Node.js custom scripting without per-task pricing gouging.',
    },
    {
      question: 'How fast can Xonnix deploy our first workflow solution?',
      answer:
        'Starter workflow deployments typically launch within 5 to 7 business days. Complex multi-agent enterprise pipelines take 2 to 3 weeks including full testing, security audits, and staff training.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Official Digital Headquarters • xonnix.org
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gradient">
            Engineering Intelligent AI Workflows That <span className="text-gradient-glow">Scale Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We design, build and maintain AI-powered workflow systems that automate operations, eliminate repetitive work, and help businesses grow faster.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setBookingOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Discovery Call
            </Button>

            <Link href="/solutions">
              <Button variant="secondary" size="lg" icon={<Sliders className="w-4 h-4" />}>
                Explore Solutions
              </Button>
            </Link>
          </div>

          {/* Live Subdomain Note */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Engine Portal:</span>
            <a
              href="https://n8n.xonnix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-semibold"
            >
              https://n8n.xonnix.org
            </a>
          </div>
        </div>

        {/* Hero Interactive Workflow Visualizer */}
        <div className="mt-12 sm:mt-16">
          <WorkflowDiagram />
        </div>
      </section>

      {/* TRUST BADGES SECTION */}
      <section className="border-y border-white/10 py-10 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
            Enterprise Architecture • Built For Reliability & Speed
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-200 text-sm font-medium hover:border-blue-500/40 transition-colors"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <GlassCard key={idx} className="text-center py-8">
              <div className="text-3xl sm:text-5xl font-extrabold text-gradient-accent mb-2">
                {item.value}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">{item.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="blue">Core Architecture Features</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient">
            Intelligent Automation Systems Engineered For Growth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            From autonomous multi-agent reasoning to self-hosted n8n orchestrations, we build software that eliminates operational friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between group">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                Explore Technology <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE XONNIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="cyan">The Xonnix Advantage</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
                Why Industry Leaders Partner With Xonnix
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Generic Zapier tools quickly break under enterprise load. At Xonnix, we treat workflow engineering like mission-critical backend software—built with version control, automatic failovers, and custom LLM intelligence.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Zero Vendor Lock-In', desc: 'Deploy on self-hosted n8n or custom cloud containers. You own 100% of your workflow code.' },
                  { title: 'Multi-Model AI Flexibility', desc: 'Integrate OpenAI GPT-4o, Anthropic Claude 3.5, Llama 3, or private local models.' },
                  { title: 'Bank-Grade Data Privacy', desc: 'Strict SOC2 compliance, encrypted credentials, and custom zero-retention data pipelines.' },
                  { title: 'Dedicated n8n Specialists', desc: 'Expert engineering team focused exclusively on advanced workflow architecture.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-semibold text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button variant="primary" onClick={() => setBookingOpen(true)} icon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Engineering Review
                </Button>
              </div>
            </div>

            <div className="space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                <span>SYSTEM COMPARISON MATRIX</span>
                <span className="text-cyan-400">xonnix.org vs Generic Zapier</span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex justify-between items-center">
                  <span className="text-slate-200">Custom n8n & AI Swarms (Xonnix)</span>
                  <span className="text-emerald-400 font-bold">Unlimited Tasks / $0 Extra</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex justify-between items-center opacity-60">
                  <span className="text-slate-400">Generic Zapier / Make</span>
                  <span className="text-rose-400 font-bold">Per-task limits & high fees</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex justify-between items-center">
                  <span className="text-slate-200">Self-Hosted Security (Xonnix)</span>
                  <span className="text-emerald-400 font-bold">100% On-Premise Support</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex justify-between items-center opacity-60">
                  <span className="text-slate-400">SaaS Middleware</span>
                  <span className="text-rose-400 font-bold">Third-party cloud data exposure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="cyan">Target Industries</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient">
            Tailored AI Workflow Solutions By Sector
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            We adapt cutting-edge automation blueprints to meet specific regulatory, operational, and technical industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <GlassCard key={idx} className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100">{ind.name}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{ind.desc}</p>
              <Link
                href="/solutions"
                className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform"
              >
                View Industry Blueprint <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="subtle">Frequently Asked Questions</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient">
            Everything You Need To Know
          </h2>
        </div>
        <Accordion items={faqs} />
      </section>

      {/* GLOBAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-blue-500/30 text-center relative overflow-hidden bg-gradient-to-b from-blue-950/40 via-slate-950 to-cyan-950/30 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Ready To Eliminate Manual Operations?
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Transform Your Business Operations With Xonnix Today
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Book a 30-minute discovery call with our principal workflow engineers. We will analyze your bottlenecks and deliver an actionable AI automation roadmap.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setBookingOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Discovery Call
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Submit Direct Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
