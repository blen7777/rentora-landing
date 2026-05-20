import type { MetadataRoute } from 'next'
import { rentoraBrand } from '@/lib/rentora-seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: rentoraBrand.canonicalUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${rentoraBrand.siteUrl}/que-es-rentora`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
