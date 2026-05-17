// JSON-LD schema-bouwer — centrale plek voor structured data
// Gedocumenteerd in docs/briefs/2026-05-17-jsonld-organization-breadcrumb.md

export const ORG_ID = 'https://gasprotex.nl/#organization'
export const SITE_URL = 'https://gasprotex.nl'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    '@id': ORG_ID,
    name: 'GasProtex',
    legalName: 'GasProtex',
    slogan: "Gaslekken gevonden. Risico's gereduceerd. 10x sneller dan traditioneel.",
    foundingDate: '2026',
    url: SITE_URL,
    logo: `${SITE_URL}/images/gasprotex-logo.png`,
    image: `${SITE_URL}/images/gasprotex-logo.png`,
    description: 'Specialist in akoestische gas- en persluchtlekdetectie voor de Nederlandse industrie en voedingsmiddelensector.',
    telephone: '+31613055282',
    email: 'info@gasprotex.nl',
    priceRange: '€€',
    address: { '@type': 'PostalAddress', addressCountry: 'NL' },
    areaServed: [{ '@type': 'Country', name: 'Nederland' }],
    founder: { '@type': 'Person', name: 'Marcelinus Verkuil' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31613055282',
      email: 'info@gasprotex.nl',
      contactType: 'customer service',
      availableLanguage: ['nl', 'en'],
    },
    keywords: 'akoestische gaslekdetectie, persluchtlekdetectie, ultrasoon gasdetectie, gaslekinspectie, ATEX, LDAR, methaandetectie, waterstoflekdetectie, Nederland',
    knowsAbout: ['Gaslekdetectie', 'Persluchtlekdetectie', 'Akoestische lekdetectie', 'ATEX', 'ISO 11011', 'BRZO'],
    serviceType: ['Gaslekdetectie', 'Persluchtlekdetectie', 'Akoestische lekdetectie'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ATEX-certificering',
        name: 'ATEX-gecertificeerd voor zone 2 (gas) en zone 22 (stof)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'VCA-certificering',
        name: 'VCA-vol',
      },
    ],
    sameAs: [],
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
