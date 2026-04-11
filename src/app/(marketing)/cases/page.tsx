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
      <section className="pb-0" style={{ paddingTop: '120px', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <p className="text-sm font-semibold mb-3" style={{ color: '#D97737', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Onze Cases
          </p>
          <h1 className="font-bold text-[#0F2D4B] leading-none mb-5" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Resultaten In De Praktijk
          </h1>
          <p className="text-[#3D5A6E] max-w-xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            Bekijk hoe wij bedrijven helpen gaslekken te detecteren en kosten te besparen.
          </p>
        </div>
      </section>

      {/* Cases */}
      {cases.map((c, index) => (
        <section key={c.id} id={c.id} style={{ background: '#ffffff' }}>
          <div className="max-w-7xl mx-auto py-20 lg:py-28" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

              {/* Links */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} p-8 lg:p-10 rounded-lg hover:-translate-y-1 transition-all duration-300`} style={{ background: '#ffffff', boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}>
                <p className="text-sm font-semibold uppercase text-[#D97737] mb-2" style={{ letterSpacing: '1.5px' }}>
                  {c.sector}
                </p>
                <h2 className="font-bold text-[#0F2D4B] mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                  {c.title}
                </h2>
                <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 16, lineHeight: 1.8 }}>
                  {c.omschrijving}
                </p>
                <div className="p-5 rounded-lg" style={{ background: 'rgba(217,119,55,0.06)', borderLeft: '3px solid #D97737' }}>
                  <p className="font-display font-bold uppercase text-[#D97737] mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12, letterSpacing: '2px' }}>
                    Conclusie
                  </p>
                  <p className="text-[#0F2D4B]" style={{ fontSize: 15 }}>{c.conclusie}</p>
                </div>
              </div>

              {/* Rechts */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="p-8 lg:p-10 rounded-lg hover:-translate-y-1 transition-all duration-300" style={{ background: '#ffffff', boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}>
                  <p className="font-bold text-[#0F2D4B] mb-5" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}>
                    Resultaten
                  </p>
                  <ul className="space-y-3 mb-8">
                    {c.resultaten.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#D97737] font-bold mt-0.5 flex-shrink-0" style={{ fontSize: 14 }}>✓</span>
                        <span className="text-[#3D5A6E]" style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 lg:py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="p-8 lg:p-10 rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8" style={{ background: '#ffffff', boxShadow: '0 2px 12px rgba(15,45,75,0.08)' }}>
            <div>
              <h2 className="font-bold text-[#0F2D4B] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Benieuwd Wat Wij Voor U Kunnen Betekenen?
              </h2>
              <p className="text-[#3D5A6E]" style={{ fontSize: 16 }}>
                Neem vrijblijvend contact met ons op voor een kennismakingsgesprek.
              </p>
            </div>
            <a href="/contact" className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}>
              Neem Contact Op
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
