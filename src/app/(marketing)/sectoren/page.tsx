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
    image: '/images/sectoren/chemie.jpg',
  },
  {
    slug: 'food',
    title: 'Food & Beverage',
    intro: 'Perslucht is de duurste nutsvoorziening in de food-industrie. Lekken in compressorsystemen en verpakkingslijnen leiden direct tot hogere energiekosten en CO₂-uitstoot.',
    image: '/images/sectoren/food.jpg',
  },
  {
    slug: 'energie',
    title: 'Energie & Utilities',
    intro: 'Gasdistributienetwerken en nutsbedrijven staan onder toezicht van toezichthouders. Leklossing is niet alleen economisch — het is wettelijk verplicht.',
    image: '/images/sectoren/energie.avif',
  },
  {
    slug: 'industrie',
    title: 'Algemene Industrie',
    intro: 'Productiebedrijven met perslucht-gebaseerde machines en tools verliezen gemiddeld 20–30% van hun perslucht door lekken. Een quickscan heeft typisch een ROI van 3–6 maanden.',
    image: '/images/sectoren/industrie.jpg',
  },
]

export default function SectorenPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Sectoren
          </h1>
        </div>
      </section>

      {/* Kaarten */}
      <section className="pb-24 lg:pb-32" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectoren.map((s) => (
              <Link
                key={s.slug}
                href={`/sectoren/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Achtergrond — foto of placeholder */}
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full" style={{ background: '#1A3A5C' }} />
                )}

                {/* Standaard: titelbalk onderaan */}
                <div
                  className="absolute inset-x-0 bottom-0 px-6 py-5 text-center transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,28,48,0.92) 0%, transparent 100%)' }}
                >
                  <h2
                    className="font-display font-bold uppercase text-white"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 20, lineHeight: 1.2 }}
                  >
                    {s.title}
                  </h2>
                </div>

                {/* Hover: volledige overlay met beschrijving */}
                <div
                  className="absolute inset-0 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,28,48,0.88)' }}
                >
                  <div style={{ margin: '32px 24px' }}>
                    <h2
                      className="font-display font-bold uppercase text-white text-center mb-3"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 20, lineHeight: 1.2 }}
                    >
                      {s.title}
                    </h2>
                    <p className="text-[#C2DCE8] mb-5" style={{ fontSize: 13, lineHeight: 1.7 }}>
                      {s.intro}
                    </p>
                    <span className="inline-flex items-center justify-center w-full gap-2 font-semibold text-[#D97737] text-sm">
                      Meer lezen
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                        <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '80px', background: '#ffffff' }} />
    </>
  )
}
