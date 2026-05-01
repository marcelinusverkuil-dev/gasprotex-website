'use client'

import Link from 'next/link'
import { useRef } from 'react'

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
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 600 : -600, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Sectoren
          </h1>
        </div>
      </section>

      {/* Kaarten */}
      <section style={{ background: '#ffffff', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

          {/* Scrollbare rij */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {sectoren.map((s) => (
              <Link
                key={s.slug}
                href={`/sectoren/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl flex-shrink-0"
                style={{ aspectRatio: '3/4', width: '280px', scrollSnapAlign: 'start' }}
              >
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: '#193353' }} />
                )}

                {/* Standaard: titelbalk onderaan */}
                <div
                  className="absolute inset-x-0 bottom-0 px-6 py-5 text-center transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,28,48,0.92) 0%, transparent 100%)' }}
                >
                  <h2 className="font-bold text-white" style={{ fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    {s.title}
                  </h2>
                </div>

                {/* Hover: volledige overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,28,48,0.88)' }}
                >
                  <div style={{ margin: '32px 24px' }}>
                    <h2 className="font-bold text-white mb-3" style={{ fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {s.title}
                    </h2>
                    <p className="text-[#C2DCE8] mb-5" style={{ fontSize: 15, lineHeight: 1.8 }}>
                      {s.intro}
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold text-[#F07830]" style={{ fontSize: 14 }}>
                      Meer lezen
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                        <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Extra container rechts — foto volgt */}
            <div
              className="rounded-2xl flex-shrink-0 flex items-center justify-center"
              style={{ aspectRatio: '3/4', width: '280px', scrollSnapAlign: 'start', background: '#F4F7FA', border: '1px solid #E2EAF0' }}
            >
              <p className="text-[#6B8FA6]" style={{ fontSize: 13 }}>Foto volgt</p>
            </div>
          </div>

          {/* Pijltjes onderaan */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ background: '#F4F7FA', border: '1px solid #E2EAF0', color: '#0A2238' }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M5.5 1L1 5L5.5 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ background: '#F4F7FA', border: '1px solid #E2EAF0', color: '#0A2238' }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
