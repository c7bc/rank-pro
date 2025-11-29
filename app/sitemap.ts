import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rankpro.dhyz.company'

  const routes = [
    '',
    '/reviews',
    '/initialize-project',
    '/architecture',
    '/platform',
    '/methodology',
    '/enterprise',
    '/success-stories',
    '/infrastructure',
    '/integration',
    '/contact',
    '/legal',
    '/legal/terms',
    '/legal/privacy',
    '/client-access',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/reviews' ? 0.9 : 0.8,
  }))
}
