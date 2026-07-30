'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Database, CheckCircle2, ArrowRight, Play, Server, RefreshCw } from 'lucide-react';

export const WorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const nodes = [
    {
      id: 1,
      title: 'n8n Webhook Trigger',
      desc: 'Incoming Event (https://n8n.xonnix.org)',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: 'Trigger Node',
      status: activeStep === 0 ? 'Executing...' : 'Completed',
    },
    {
      id: 2,
      title: 'AI Agent (LangChain / Claude)',
      desc: 'Extract, Summarize & Evaluate Intent',
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      tag: 'AI Reasoning',
      status: activeStep === 1 ? 'Reasoning...' : activeStep > 1 ? 'Completed' : 'Waiting',
    },
    {
      id: 3,
      title: 'Sub-Workflow & DB Sync',
      desc: 'PostgreSQL & Vector Store Retrieval',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      tag: 'Data Pipeline',
      status: activeStep === 2 ? 'Processing...' : activeStep > 2 ? 'Completed' : 'Waiting',
    },
    {
      id: 4,
      title: 'Enterprise API Dispatch',
      desc: 'HubSpot / Slack / Custom API',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      tag: 'Action Executed',
      status: activeStep === 3 ? 'Dispatched' : 'Waiting',
    },
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold">
            LIVE ENGINE: N8N.XONNIX.ORG
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition-colors"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" /> Auto-Running
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" /> Resume Flow
              </>
            )}
          </button>
        </div>
      </div>

      {/* Workflow Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 relative">
        {nodes.map((node, index) => {
          const isActive = activeStep === index;
          const isDone = activeStep > index;

          return (
            <div key={node.id} className="relative">
              <motion.div
                animate={{
                  scale: isActive ? 1.03 : 1,
                  borderColor: isActive
                    ? 'rgba(37, 99, 235, 0.8)'
                    : isDone
                    ? 'rgba(16, 185, 129, 0.4)'
                    : 'rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.3 }}
                className={`p-5 rounded-2xl bg-slate-950/80 border transition-all relative z-10 ${
                  isActive
                    ? 'shadow-[0_0_25px_rgba(37,99,235,0.3)] bg-gradient-to-b from-slate-900 to-blue-950/40'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {node.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 border-blue-400/40'
                        : isDone
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                        : 'bg-white/5 text-slate-500 border-white/5'
                    }`}
                  >
                    {node.tag}
                  </span>
                </div>

                <h4 className="text-slate-100 font-semibold text-sm mb-1">{node.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{node.desc}</p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Node #{node.id}</span>
                  <span
                    className={
                      isActive
                        ? 'text-cyan-400 font-bold flex items-center gap-1'
                        : isDone
                        ? 'text-emerald-400'
                        : 'text-slate-600'
                    }
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                    {node.status}
                  </span>
                </div>
              </motion.div>

              {/* Connecting Line for Desktop */}
              {index < nodes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeStep > index ? 'text-emerald-400' : 'text-slate-700'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Terminal Footer Display */}
      <div className="mt-6 p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-400">Payload Status:</span>
          <span className="text-emerald-400">200 OK</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Latency:</span>
          <span className="text-cyan-300">42ms</span>
        </div>
        <div className="text-slate-500 text-[11px]">
          Xonnix Autonomous Workflow Cluster • Version 3.4.1
        </div>
      </div>
    </div>
  );
};
