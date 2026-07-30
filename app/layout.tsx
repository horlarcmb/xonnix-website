import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundGradients } from '@/components/ui/BackgroundGradients';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://xonnix.org'),
  title: {
    default: 'Xonnix | AI Workflow Engineering & Intelligent Automation',
    template: '%s | Xonnix AI Workflow Engineering',
  },
  description:
    'Engineering Intelligent AI Workflows That Scale Businesses. Custom AI agents, n8n workflow development, business process automation, API integrations, and enterprise software.',
  keywords: [
    'AI Workflow Engineering',
    'n8n Automation',
    'AI Agents',
    'Business Process Automation',
    'API Integrations',
    'Enterprise AI',
    'Xonnix',
    'Autonomous Workflows',
  ],
  authors: [{ name: 'Xonnix Engineering Team', url: 'https://xonnix.org' }],
  creator: 'Xonnix',
  publisher: 'Xonnix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xonnix.org',
    title: 'Xonnix | Engineering Intelligent AI Workflows That Scale Businesses',
    description:
      'We design, build, and maintain AI-powered workflow systems that automate operations, eliminate repetitive work, and help businesses grow faster.',
    siteName: 'Xonnix',
    images: [
      {
        url: 'https://xonnix.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xonnix AI Workflow Engineering Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xonnix | Engineering Intelligent AI Workflows That Scale Businesses',
    description:
      'AI Workflow Engineering company specializing in intelligent automation, AI agents, n8n workflows, API integrations, and custom software.',
    creator: '@xonnix_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-blue-600 selection:text-white">
        <JsonLd />
        <BackgroundGradients />
        <Navbar />
        <main className="flex-grow relative z-10 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
