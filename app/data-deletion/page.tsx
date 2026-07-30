import React from 'react';
import { ShieldCheck, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function DataDeletionPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Data Deletion Policy & Meta Callback Instructions</h1>
        <p className="text-xs font-mono text-cyan-400">
          Compliant with Meta Platform Terms, Facebook Login, and Instagram Graph API Requirements
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> Meta Data Deletion Instructions
          </h2>
          <p>
            Xonnix Inc. ("Xonnix", <strong>https://xonnix.org</strong>) provides integration services connecting Meta platforms (Facebook Login, Instagram Graph API, Messenger Webhooks) to automated n8n workflow engines at <strong>https://n8n.xonnix.org</strong>.
          </p>
          <p>
            According to Meta Platform Rules, users have the right to request the deletion of their personal data collected through Facebook Login or Instagram API permissions.
          </p>
        </section>

        <section className="space-y-3 p-6 rounded-2xl bg-slate-950/80 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-2">How to Request Immediate Data Deletion</h3>
          <p className="text-xs text-slate-300">
            If you have linked your Facebook or Instagram account to a Xonnix workflow engine and wish to remove your user data, follow these steps:
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-300 mt-2">
            <li>Log into your Facebook account and navigate to <strong>Settings & Privacy &gt; Settings</strong>.</li>
            <li>Go to <strong>Apps and Websites</strong> and find <strong>Xonnix Workflow Engine</strong>.</li>
            <li>Click <strong>Remove</strong> to revoke all active API access permissions.</li>
            <li>
              Send an email to <strong className="text-cyan-400">privacy@xonnix.org</strong> or <strong className="text-cyan-400">contact@xonnix.org</strong> with the subject line <code>"Meta User Data Deletion Request"</code> including your Facebook User ID or email address.
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Automated Meta Deletion Callback Endpoint</h2>
          <p>
            For Meta App Review compliance, our automated Data Deletion Callback URL endpoint is:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-cyan-400 border border-white/10">
            https://n8n.xonnix.org/webhook/meta-data-deletion-callback
          </div>
          <p className="text-xs text-slate-400">
            Upon receiving a signed request from Meta, our n8n webhook engine automatically purges user access tokens, cached page IDs, and associated workflow logs within 24 hours, returning a confirmation code and status URL.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Confirmation & Support</h2>
          <p>
            Once deletion is completed, our compliance team dispatches a confirmation email containing a unique deletion tracking ID.
          </p>
          <p>
            For urgent requests: <strong>privacy@xonnix.org</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
