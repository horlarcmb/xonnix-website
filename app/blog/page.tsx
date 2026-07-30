'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  User,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts: BlogPost[] = [
    {
      slug: 'n8n-vs-zapier-enterprise-ai-workflows',
      title: 'n8n vs Zapier: Why Enterprise AI Workflows Require Self-Hosted Orchestration',
      excerpt: 'An architectural teardown comparing per-task pricing, custom LLM tool calling, Python code execution, and data security between n8n and proprietary zap tools.',
      category: 'n8n Engineering',
      date: 'July 24, 2026',
      readTime: '7 min read',
      author: 'Principal Architect @ Xonnix',
      featured: true,
    },
    {
      slug: 'multi-agent-swarms-langchain-n8n',
      title: 'Building Multi-Agent AI Swarms with LangChain & n8n Webhooks',
      excerpt: 'Step-by-step guide to constructing supervisor agents that break down complex enterprise requests and route sub-tasks to specialized domain worker agents.',
      category: 'AI Architecture',
      date: 'July 18, 2026',
      readTime: '10 min read',
      author: 'AI Engineering Team',
    },
    {
      slug: 'hipaa-soc2-compliant-llm-pipelines',
      title: 'Designing SOC2 & HIPAA Compliant AI Workflows in 2026',
      excerpt: 'How to implement zero-data-retention AI inference pipelines, encrypted credential stores, and strict audit trails for medical & fintech automation.',
      category: 'Security & Compliance',
      date: 'July 12, 2026',
      readTime: '6 min read',
      author: 'Security Lead @ Xonnix',
    },
    {
      slug: 'rag-vector-memory-n8n-nodes',
      title: 'Integrating Vector Search & RAG Memory into Custom n8n Nodes',
      excerpt: 'Learn how to give your workflow engines persistent domain context using Qdrant vector databases and custom TypeScript n8n community nodes.',
      category: 'n8n Engineering',
      date: 'July 05, 2026',
      readTime: '8 min read',
      author: 'n8n Specialist',
    },
    {
      slug: 'automated-crm-enrichment-ai-agents',
      title: 'Automating B2B Lead Enrichment & AI Outreach at Scale',
      excerpt: 'How we helped an enterprise scaleup eliminate 15 hours per week of manual CRM data entry with autonomous web-scraping agents.',
      category: 'Case Studies',
      date: 'June 28, 2026',
      readTime: '5 min read',
      author: 'Growth Architect',
    },
  ];

  const categories = ['All', 'n8n Engineering', 'AI Architecture', 'Security & Compliance', 'Case Studies'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Engineering Publications
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient">
          AI Workflow Engineering & Automation Blog
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Deep technical teardowns, n8n architecture tutorials, AI agent design patterns, and enterprise security guides written by Xonnix engineers.
        </p>
      </div>

      {/* Featured Article Banner */}
      {featuredPost && (
        <GlassCard className="p-8 sm:p-12 border border-blue-500/30 relative overflow-hidden bg-gradient-to-r from-blue-950/40 via-slate-950 to-slate-950">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                FEATURED ARTICLE
              </span>
              <span className="text-xs font-mono text-slate-400">{featuredPost.category}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">{featuredPost.excerpt}</p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> {featuredPost.readTime}
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <Button variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Read Full Article
                </Button>
              </Link>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <GlassCard key={post.slug} className="flex flex-col justify-between p-6 border border-white/10 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400">{post.category}</span>
                <span className="text-[11px] font-mono text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
