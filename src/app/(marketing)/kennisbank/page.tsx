import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import KennisbankFilter from '@/components/marketing/KennisbankFilter'

export const metadata: Metadata = {
  title: 'Kennisbank | Lekdetectie, ATEX, ISO | GasProtex',
  description:
    'Artikelen over gas- en persluchtlekdetectie, ATEX-zones, ISO 11011, persluchtkosten en meer. Praktische kennis voor industrie en voedingsmiddelensector.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/',
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

      {/* Sectie 1 — Hero + filter + CTA */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Home
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>Kennisbank</span>
          </div>

          <h1
            className="font-bold text-[#0A2238] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Kennisbank
          </h1>
          <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ maxWidth: '600px' }}>
            Praktische artikelen over lekdetectie, ATEX, ISO 11011 en energiebesparing.
            Voor HSE-managers, plant managers en onderhoudsteams.
          </p>

          <KennisbankFilter />

        </div>
      </section>
    </>
  )
}
