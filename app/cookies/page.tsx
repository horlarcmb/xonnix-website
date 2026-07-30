import React from 'react';

export default function CookiePolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Cookie Policy</h1>
        <p className="text-xs font-mono text-cyan-400">
          Last Updated: July 30, 2026 • Xonnix Inc. (xonnix.org)
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your browser or device when visiting websites. Xonnix uses minimal cookies strictly for essential platform functionality and authentication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Essential Session Cookies:</strong> Required to maintain secure login sessions on `https://n8n.xonnix.org`.</li>
            <li><strong>Preference Cookies:</strong> Store dark-mode UI theme selections.</li>
            <li><strong>Security Cookies:</strong> Protect forms against Cross-Site Request Forgery (CSRF).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Third-Party Tracking</h2>
          <p>
            We do NOT use invasive advertising tracking cookies or sell your browsing history to third-party ad networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Managing Cookies</h2>
          <p>
            You can disable or delete cookies via your browser settings. However, disabling essential cookies may impact functional authentication on `n8n.xonnix.org`.
          </p>
        </section>
      </div>
    </div>
  );
}
