import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases – GasProtex',
  description: 'Bekijk onze cases en ervaringen van klanten met akoestische gaslekdetectie.',
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
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Cases
          </h1>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="flex flex-col gap-6">

            {cases.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                  {/* Links: sector + titel + omschrijving */}
                  <div className="lg:col-span-2">
                    <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>{c.sector}</p>
                    <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {c.title}
                    </h2>
                    <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 16, lineHeight: 1.8 }}>
                      {c.omschrijving}
                    </p>
                    <p className="text-[#D97737]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                      {c.conclusie}
                    </p>
                  </div>

                  {/* Rechts: resultaten */}
                  <div>
                    <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Resultaten</p>
                    <ul className="space-y-2">
                      {c.resultaten.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D97737]" style={{ marginTop: '9px' }} />
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
              className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
            >
              <div>
                <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Benieuwd wat wij voor u kunnen betekenen?
                </h2>
                <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                  Neem vrijblijvend contact met ons op voor een kennismakingsgesprek.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors flex-shrink-0"
                style={{ fontSize: 14 }}
              >
                Neem contact op
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
