import React from 'react';

export default function AcceptableUsePage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Acceptable Use Policy</h1>
        <p className="text-xs font-mono text-cyan-400">
          Last Updated: July 30, 2026 • Xonnix Inc. (xonnix.org)
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Purpose & Scope</h2>
          <p>
            This Acceptable Use Policy outlines permitted and prohibited uses of Xonnix infrastructure, including <strong>https://xonnix.org</strong> and self-hosted/managed n8n instances at <strong>https://n8n.xonnix.org</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Prohibited Activities</h2>
          <p>You may NOT use Xonnix AI workflows or infrastructure to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Dispatch unsolicited bulk commercial messages (SPAM) or unauthorized phishing campaigns.</li>
            <li>Execute Distributed Denial of Service (DDoS) attacks, brute-force requests, or vulnerability scans against third-party endpoints.</li>
            <li>Bypass paywalls, scrape personal private data without authorization, or violate third-party API terms.</li>
            <li>Process illegal content, malware payloads, or fraudulent transactions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. API Rate Limits & Resource Fair Use</h2>
          <p>
            To maintain engine stability, webhook triggers to `n8n.xonnix.org` are subject to concurrency rate-limiting. Workflows generating excessive unhandled exceptions or memory leaks may be temporarily throttled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Enforcement & Termination</h2>
          <p>
            Violation of this policy will result in immediate suspension of n8n workflow execution nodes and termination of service contracts.
          </p>
        </section>
      </div>
    </div>
  );
}
