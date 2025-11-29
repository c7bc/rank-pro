import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/client-access/dashboard'],
      },
    ],
    sitemap: 'https://rankpro.dhyz.company/sitemap.xml',
  }
}
