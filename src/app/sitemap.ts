import type { MetadataRoute } from 'next'

const baseUrl = 'https://gasprotex.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/diensten/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/lekdetectie-abonnement/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sectoren/voedingsmiddelensector/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectoren/petrochemie-chemie/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bereken-uw-besparing/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bereken-uw-besparing/perslucht/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kennisbank/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/over-ons/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  const kennisbankSlugs = [
    'atex-zones-uitgelegd',
    'wat-kost-een-persluchtlek',
    'waar-zitten-persluchtlekken',
    'lekdetectie-methoden-vergeleken',
    'akoestische-lekdetectie-naast-vaste-gasdetectie',
    'welke-gassen-akoestische-lekdetectie',
  ]

  const kennisbankRoutes: MetadataRoute.Sitemap = kennisbankSlugs.map((slug) => ({
    url: `${baseUrl}/kennisbank/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...kennisbankRoutes]
}
