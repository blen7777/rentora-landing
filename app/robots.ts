import type { MetadataRoute } from 'next'
import { rentoraBrand } from '@/lib/rentora-seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/admin/', '/login/', '/platform/'],
      },
    ],
    sitemap: `${rentoraBrand.siteUrl}/sitemap.xml`,
    host: rentoraBrand.siteUrl,
  }
}
