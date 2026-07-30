import React from 'react';

export default function TermsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs font-mono text-cyan-400">
          Last Updated: July 30, 2026 • Xonnix Inc. (xonnix.org)
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Xonnix Inc. ("Xonnix", "we", "us"), including the website <strong>https://xonnix.org</strong> and <strong>https://n8n.xonnix.org</strong>, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. AI Workflow Services & Ownership</h2>
          <p>
            Xonnix provides custom AI Workflow Engineering, n8n node development, autonomous agent swarms, and API integration services. Unless explicitly stated in a custom enterprise contract, clients retain full ownership of custom workflow blueprints and code developed specifically for their organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. System Uptime & Service Level Agreements</h2>
          <p>
            We target 99.9% uptime for our managed n8n clusters (`n8n.xonnix.org`). Service Level Agreements (SLAs) for enterprise response times are governed by specific service tier contracts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. User Responsibilities</h2>
          <p>
            Users agree not to use Xonnix automation engines for unlawful activities, unauthorized web scraping, spam dispatch, or violating 3rd party API terms of service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
          <p>
            In no event shall Xonnix Inc. be liable for indirect, incidental, or consequential damages resulting from third-party API rate-limits, external LLM provider outages, or network interruptions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of Nigeria and applicable international commercial standards.
          </p>
        </section>
      </div>
    </div>
  );
}
