import React from 'react';

export const JsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Xonnix',
    url: 'https://xonnix.org',
    logo: 'https://xonnix.org/logo.png',
    sameAs: ['https://n8n.xonnix.org'],
    description:
      'Xonnix is an AI Workflow Engineering company specializing in intelligent automation, AI agents, n8n workflows, API integrations, and custom software solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@xonnix.org',
      contactType: 'customer support',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
