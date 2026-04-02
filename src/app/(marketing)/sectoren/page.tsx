import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sectoren – GasProtex',
  description: 'Akoestische gaslekdetectie voor petrochemie, food & beverage, energie en algemene industrie.',
}

const sectoren = [
  {
    slug: 'chemie',
    title: 'Petrochemie & Chemie',
    intro: 'BRZO-bedrijven en ATEX-zones vereisen de hoogste standaard van veiligheid. Gaslekken in procesgassen betekenen direct compliance-risico en potentieel gevaar voor mens en omgeving.',
  },
  {
    slug: 'food',
    title: 'Food & Beverage',
    intro: 'Perslucht is de duurste nutsvoorziening in de food-industrie. Lekken in compressorsystemen en verpakkingslijnen leiden direct tot hogere energiekosten en CO₂-uitstoot.',
  },
  {
    slug: 'energie',
    title: 'Energie & Utilities',
    intro: 'Gasdistributienetwerken en nutsbedrijven staan onder toezicht van toezichthouders. Leklossing is niet alleen economisch — het is wettelijk verplicht.',
  },
  {
    slug: 'industrie',
    title: 'Algemene Industrie',
    intro: 'Productiebedrijven met perslucht-gebaseerde machines en tools verliezen gemiddeld 20–30% van hun perslucht door lekken. Een quickscan heeft typisch een ROI van 3–6 maanden.',
  },
]

export default function SectorenPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0F2D4B] pb-20" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <p className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}>
            Doelgroepen
          </p>
          <h1 className="font-display font-black uppercase text-white leading-none mb-6" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Welke Sector Bent U?
          </h1>
          <p className="text-[#C2DCE8] max-w-xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            Elke industrie heeft zijn eigen uitdagingen. Wij kennen ze — en hebben de certificeringen om ze aan te pakken.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectoren.map((s) => (
              <Link
                key={s.slug}
                href={`/sectoren/${s.slug}`}
                className="group bg-white flex flex-col p-8 rounded-lg hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}
              >
                <h2 className="font-display font-bold uppercase text-[#0F2D4B] mb-4 group-hover:text-[#D97737] transition-colors" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 24 }}>
                  {s.title}
                </h2>
                <p className="text-[#3D5A6E] leading-relaxed flex-1 mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {s.intro}
                </p>
                <div className="inline-flex items-center gap-2 font-semibold text-[#D97737] group-hover:gap-3 transition-all text-sm">
                  Meer lezen
                  <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                    <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F2D4B' }}>
        <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div>
            <h2 className="font-display font-black uppercase text-white mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1 }}>
              Uw Sector Staat Hier Niet Bij?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Akoestische gaslekdetectie werkt in elke omgeving met gas of perslucht.
            </p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}>
            Neem Contact Op
          </Link>
        </div>
      </section>
    </>
  )
}
