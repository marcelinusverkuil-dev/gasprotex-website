import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bereken uw besparing – GasProtex',
  description: 'Bereken wat gaslekken u kosten: perslucht, stikstof, waterstof of CO₂. GasProtex detecteert lekken in alle industriële gassystemen.',
}

const gassen = [
  {
    slug: 'perslucht',
    titel: 'Perslucht',
    subtitel: 'Meest voorkomend',
    omschrijving: 'Perslucht is verantwoordelijk voor 20–30% van het totale energieverbruik in productieomgevingen. Zelfs kleine lekken kosten duizenden euro\'s per jaar.',
    tag: 'kWh-gebaseerd',
  },
  {
    slug: 'stikstof',
    titel: 'Stikstof',
    subtitel: 'PSA on-site & bulk vloeibaar',
    omschrijving: 'Stikstof wordt breed ingezet voor inertering, verpakking en proceskoeling. Lekverliezen zijn direct zichtbaar in uw gasfactuur.',
    tag: '€/m³ gebaseerd',
  },
  {
    slug: 'waterstof',
    titel: 'Waterstof',
    subtitel: 'Grijs, blauw & groen',
    omschrijving: 'Waterstof is het duurste industriële gas. Zelfs een kleine lekkage van enkele liters per minuut leidt tot aanzienlijke verliezen.',
    tag: '€/m³ gebaseerd',
  },
  {
    slug: 'co2',
    titel: 'CO₂',
    subtitel: 'Bulk industrieel',
    omschrijving: 'Industrieel CO₂ wordt ingezet voor koeling, carbonisatie en procesapplicaties. Lekken betekenen directe materiaalkosten én nalevingsrisico\'s.',
    tag: '€/m³ gebaseerd',
  },
]

export default function BerekenUwBesparingPage() {
  return (
    <>
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Bereken uw besparing
          </h1>
          <p className="font-bold text-[#0F2D4B] mt-4" style={{ fontSize: 18 }}>
            Gratis calculator: bereken wat gaslekken uw bedrijf kosten
          </p>
          <p className="text-[#4A6880] mt-3" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 640 }}>
            GasProtex detecteert lekken in alle industriële gassystemen, van perslucht tot waterstof.
            Selecteer uw gassoort en bereken wat lekken u jaarlijks kosten.
          </p>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gassen.map((g) => (
              <Link
                key={g.slug}
                href={`/bereken-uw-besparing/${g.slug}`}
                className="group rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '40px 44px' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[#7AADCC] mb-1" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {g.subtitel}
                    </p>
                    <h2 className="font-bold text-white" style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {g.titel}
                    </h2>
                  </div>
                  <span className="flex-shrink-0 rounded-md text-[#7AADCC]" style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 10px', fontSize: 12 }}>
                    {g.tag}
                  </span>
                </div>
                <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 15, lineHeight: 1.8 }}>
                  {g.omschrijving}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold transition-colors group-hover:text-[#E8893A]" style={{ color: '#D97737', fontSize: 14 }}>
                  Bereken nu
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div
            className="rounded-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
          >
            <div>
              <p className="text-[#C2DCE8] mb-1" style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 560 }}>
                Deze berekening geeft een indicatie op basis van marktgemiddelden en de door u ingevulde gegevens.
                De werkelijke kosten kunnen afwijken door factoren zoals systeemdruk, leidinglengte en het aantal lekpunten.
                Wilt u weten wat uw installatie precies verliest? Vraag een quickscan aan.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors flex-shrink-0"
              style={{ fontSize: 14 }}
            >
              Afspraak maken
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
