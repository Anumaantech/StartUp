import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anumaantech.com';
  const now = new Date();

  const routes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/services/web-design', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/services/web-app', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/services/mobile-app', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/services/government', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/services/erp-crm', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/services/ai-automation', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/portfolio', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/industries', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/testimonials', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: '/pricing', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/careers', changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/faq', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
