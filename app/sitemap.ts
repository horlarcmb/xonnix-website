import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xonnix.org';
  const routes = [
    '',
    '/services',
    '/solutions',
    '/portfolio',
    '/about',
    '/pricing',
    '/blog',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/data-deletion',
    '/acceptable-use',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
