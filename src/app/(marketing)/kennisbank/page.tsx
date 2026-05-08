import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import KennisbankFilter from '@/components/marketing/KennisbankFilter'


export const metadata: Metadata = {
  title: 'Kennisbank lekdetectie, ATEX en perslucht | GasProtex',
  description:
    'Praktische artikelen over lekdetectie, ATEX-zones, ISO 11011 en energiebesparing. Voor HSE-managers, plant managers en onderhoudsteams.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/',
  },
  openGraph: {
    title: 'Kennisbank lekdetectie, ATEX en perslucht | GasProtex',
    description: 'Praktische artikelen over gas- en persluchtlekdetectie, ATEX-zones, ISO 11011 en energiebesparing. Voor HSE-managers, plant managers en onderhoudsteams.',
    url: 'https://gasprotex.nl/kennisbank/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Kennisbank lekdetectie, ATEX en perslucht | GasProtex',
    description: 'Praktische artikelen over gas- en persluchtlekdetectie, ATEX-zones, ISO 11011 en energiebesparing. Voor HSE-managers, plant managers en onderhoudsteams.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kennisbank GasProtex',
  url: 'https://gasprotex.nl/kennisbank/',
  description:
    'Praktische artikelen over gaslekdetectie, ATEX-zones, persluchtkosten en ISO 11011.',
  publisher: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
}

export default function KennisbankPage() {
  return (
    <>
      <Script
        id="kennisbank-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sectie 1 — Hero + filter */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="container-main">

          <h1
            className="font-bold text-[#0A2238] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Kennisbank
          </h1>
          <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ maxWidth: '600px', marginBottom: '32px' }}>
            Praktische artikelen over lekdetectie, ATEX, ISO 11011 en energiebesparing.
            Voor HSE-managers, plant managers en onderhoudsteams.
          </p>

          <KennisbankFilter />

        </div>
      </section>

      {/* Sectie 2 — CTA */}
      <section style={{ background: '#ffffff', paddingTop: '60px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '20px 24px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-1">
                  Vragen over jouw situatie?
                </h2>
              </div>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                style={{ padding: '14px 32px' }}
              >
                Plan kennismakingsgesprek →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
