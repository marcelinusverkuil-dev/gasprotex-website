import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Cases', url: 'https://gasprotex.nl/cases' },
])

export const metadata: Metadata = {
  title: 'Cases en praktijkvoorbeelden lekdetectie | GasProtex',
  description: 'Praktijkvoorbeelden uit zuivel, brouwerij, vleesverwerking en chemie. Gevonden lekken, behaalde besparingen en compliance-input.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://gasprotex.nl/cases',
  },
  openGraph: {
    title: 'Cases | GasProtex',
    description: 'Bekijk onze cases en ervaringen van klanten met akoestische gaslekdetectie.',
    url: 'https://gasprotex.nl/cases/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Cases | GasProtex',
    description: 'Bekijk onze cases en ervaringen van klanten met akoestische gaslekdetectie.',
  },
}

const cases = [
  {
    id: 'case-1',
    sector: 'Sector',
    title: 'Case Titel',
    subtitle: 'Ondertitel',
    omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    resultaten: [
      'Resultaat 1',
      'Resultaat 2',
      'Resultaat 3',
      'Resultaat 4',
    ],
    conclusie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'case-2',
    sector: 'Sector',
    title: 'Case Titel',
    subtitle: 'Ondertitel',
    omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    resultaten: [
      'Resultaat 1',
      'Resultaat 2',
      'Resultaat 3',
      'Resultaat 4',
    ],
    conclusie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'case-3',
    sector: 'Sector',
    title: 'Case Titel',
    subtitle: 'Ondertitel',
    omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    resultaten: [
      'Resultaat 1',
      'Resultaat 2',
      'Resultaat 3',
      'Resultaat 4',
    ],
    conclusie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export default function CasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Cases
          </h1>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="flex flex-col gap-6">

            {cases.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className="rounded-md overflow-hidden border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
                style={{ background: '#ffffff', padding: '24px' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                  {/* Links: sector + titel + omschrijving */}
                  <div className="lg:col-span-2">
                    <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>{c.sector}</p>
                    <h2 className="font-bold text-[#0A2238] mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {c.title}
                    </h2>
                    <p className="text-[#3D5A6E] mb-8" style={{ fontSize: 15, lineHeight: 1.8 }}>
                      {c.omschrijving}
                    </p>
                    <p className="text-[#F07830]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                      {c.conclusie}
                    </p>
                  </div>

                  {/* Rechts: resultaten */}
                  <div>
                    <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Resultaten</p>
                    <ul className="space-y-2">
                      {c.resultaten.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}

            {/* CTA */}
            <div
              className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              style={{ background: '#ffffff', padding: '20px 24px' }}
            >
              <h2 className="font-bold text-[#0A2238] text-2xl">
                Benieuwd wat wij voor jou kunnen betekenen?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap flex-shrink-0"
                style={{ padding: '14px 32px' }}
              >
                Maak een afspraak →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
