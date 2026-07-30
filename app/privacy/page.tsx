import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs font-mono text-cyan-400">
          Last Updated: July 30, 2026 • Official Headquarters Policy (xonnix.org)
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Introduction</h2>
          <p>
            Xonnix Inc. ("Xonnix", "we", "us", or "our"), operating at <strong>https://xonnix.org</strong> and its subdomain <strong>https://n8n.xonnix.org</strong>, is committed to protecting your privacy. This Privacy Policy details how we collect, process, store, and safeguard personal information when you use our AI Workflow Engineering platform, contact forms, or integrated Meta (Facebook / Instagram Graph API) services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
          <p>We collect data to provide, optimize, and secure our AI workflow automation systems:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Direct Information:</strong> Name, work email, phone number, company name, country, and workflow challenges submitted via our contact forms.</li>
            <li><strong>Technical Payload Data:</strong> IP address, user-agent details, system telemetry, and webhook request payloads transmitted to `https://n8n.xonnix.org/webhook/...`.</li>
            <li><strong>API & Social Integration Data:</strong> When authenticating via Facebook Login or Instagram API, we only access scopes explicitly authorized (e.g., user ID, profile data, page access tokens) for workflow execution.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. How We Use Data</h2>
          <p>
            We process data strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Executing customer-requested n8n workflow pipelines and AI agent swarms.</li>
            <li>Responding to business inquiries and strategy session requests.</li>
            <li>Maintaining zero-retention data privacy standards for enterprise clients.</li>
            <li>Improving system latency, error fallback handling, and platform security.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Data Sharing & Third Parties</h2>
          <p>
            We do NOT sell, rent, or trade personal data to advertising brokers. Data is shared exclusively with necessary infrastructure providers (e.g. AWS, OpenAI, Anthropic) under strict confidentiality and zero-data-retention agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Your Privacy Rights (GDPR / CCPA)</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data at any time. For explicit Meta data deletion instructions, see our <a href="/data-deletion" className="text-cyan-400 hover:underline">Data Deletion Policy</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, contact our Data Protection Officer at:
            <br />
            <strong>Email:</strong> privacy@xonnix.org or contact@xonnix.org
          </p>
        </section>
      </div>
    </div>
  );
}
