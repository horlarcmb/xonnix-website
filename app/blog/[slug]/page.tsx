import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function generateStaticParams() {
  return [
    { slug: 'n8n-vs-zapier-enterprise-ai-workflows' },
    { slug: 'multi-agent-swarms-langchain-n8n' },
    { slug: 'hipaa-soc2-compliant-llm-pipelines' },
    { slug: 'rag-vector-memory-n8n-nodes' },
    { slug: 'automated-crm-enrichment-ai-agents' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <Link href="/blog">
        <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to All Publications
        </Button>
      </Link>

      <div className="space-y-6">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          n8n Engineering Series
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          n8n vs Zapier: Why Enterprise AI Workflows Require Self-Hosted Orchestration
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 py-4 border-y border-white/10">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <User className="w-4 h-4" /> Principal Architect @ Xonnix
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" /> July 24, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" /> 7 min read
          </span>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 leading-relaxed text-base">
        <p className="text-lg text-slate-200 font-medium leading-relaxed">
          As business operations scale, proprietary workflow middleware like Zapier and Make quickly become economic and technical bottlenecks. In this technical deep dive, we explore why Xonnix builds enterprise AI workflows on self-hosted n8n clusters.
        </p>

        <h2 className="text-2xl font-bold text-white pt-4">1. The Per-Task Pricing Trap</h2>
        <p>
          Proprietary SaaS automation tools charge on a per-task or per-operation basis. When running high-frequency loops or multi-agent LLM reasoning chains where a single user inquiry might generate 50 sub-step API calls, SaaS middleware costs escalate exponentially into thousands of dollars per month.
        </p>

        <div className="p-4 rounded-2xl bg-slate-950 font-mono text-xs text-cyan-400 border border-white/10">
          // n8n Self-Hosted Model: Unlimited Executions per Month<br />
          // Cost: $0 per task. Limited only by server GPU/CPU capacity.
        </div>

        <h2 className="text-2xl font-bold text-white pt-4">2. Custom Python & TypeScript Execution</h2>
        <p>
          Standard Zapier steps restrict custom code execution. With n8n, engineers can execute arbitrary Python or JavaScript code within secure sandbox containers, allowing complex data transformation, array manipulation, and vector embeddings generation natively inside the workflow node.
        </p>

        <h2 className="text-2xl font-bold text-white pt-4">3. Data Privacy & Zero-Retention Compliance</h2>
        <p>
          For healthcare (HIPAA) and financial (SOC2) clients, sending sensitive customer payloads through 3rd party SaaS middleware violates compliance mandates. Self-hosting n8n inside private AWS or GCP Virtual Private Clouds (VPC) guarantees that payload data never leaves your secure perimeter.
        </p>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Article Slug: {slug}</span>
          <a
            href="https://n8n.xonnix.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline text-xs font-mono font-semibold"
          >
            Test Engine: https://n8n.xonnix.org
          </a>
        </div>
      </div>
    </div>
  );
}
