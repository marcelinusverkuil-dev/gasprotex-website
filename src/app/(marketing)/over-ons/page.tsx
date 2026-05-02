import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons – GasProtex',
  description: 'GasProtex brengt akoestische gaslekdetectie naar de Nederlandse industrie. Sneller, veiliger, zonder productiestilstand.',
}

const waarden = [
  { titel: 'Precisie', tekst: 'Exacte locaties tot op de centimeter. Uw onderhoudsdienst kan direct aan de slag.' },
  { titel: 'Veiligheid', tekst: 'ATEX-gecertificeerd. Detectie op afstand, zonder uw team te riskeren.' },
  { titel: 'Transparantie', tekst: 'Elk lek krijgt een euro-waarde. Directie ziet direct de kosten én besparing.' },
  { titel: 'Snelheid', tekst: 'Één specialist, één dag, complete rapportage. Productie blijft draaien.' },
]

const tijdlijn = [
  { jaar: '2022', tekst: 'Oprichting GasProtex na ervaring met perslucht-energieverlies in de procesindustrie.' },
  { jaar: '2023', tekst: 'Eerste akoestische camera-inspecties bij chemische producenten in Rotterdam en Zeeland.' },
  { jaar: '2024', tekst: 'ATEX-certificering behaald. Uitbreiding naar food & beverage en energiesector.' },
  { jaar: '2025', tekst: 'Lancering klantportaal met realtime lekstatus en kostenrapportage voor abonnementsklanten.' },
]

const stats = [
  { value: '30%', label: 'Gem. perslucht verlies', sub: 'Gemiddeld in de industrie' },
  { value: '10×', label: 'Sneller', sub: 'Vs. traditionele methoden' },
  { value: '200m', label: 'Detectiebereik', sub: 'Veilige afstandsdetectie' },
  { value: 'ATEX', label: 'Gecertificeerd', sub: 'Zone 1 & Zone 2' },
]

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Over Ons
          </h1>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="flex flex-col gap-6">

            {/* Missie */}
            <div
              className="rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>Onze missie</p>
                  <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    Geen enkel lek onopgemerkt
                  </h2>
                  <p className="text-[#C2DCE8] mb-4" style={{ fontSize: 16, lineHeight: 1.8 }}>
                    De industrie verliest jaarlijks miljoenen aan gaslekken — niet door gebrek aan aandacht, maar door gebrek aan detectiemiddelen.
                  </p>
                  <p className="text-[#C2DCE8]" style={{ fontSize: 16, lineHeight: 1.8 }}>
                    Met akoestische camera-technologie brengen wij elk lek snel en veilig in kaart, met directe kostenberekening.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="font-bold text-[#F07830] leading-none mb-1" style={{ fontSize: 36 }}>
                        {stat.value}
                      </div>
                      <div className="font-semibold text-white mb-0.5" style={{ fontSize: 14 }}>{stat.label}</div>
                      <div className="text-[#7AADCC]" style={{ fontSize: 12 }}>{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kernwaarden */}
            <div
              className="rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
            >
              <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>Kernwaarden</p>
              <h2 className="font-bold text-white mb-10" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Waarop u ons kunt aanspreken
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {waarden.map((w) => (
                  <div key={w.titel} className="pt-2">
                    <h3 className="font-bold text-white mb-3" style={{ fontSize: 18, letterSpacing: '-0.02em' }}>
                      {w.titel}
                    </h3>
                    <p className="text-[#C2DCE8]" style={{ fontSize: 14, lineHeight: 1.7 }}>
                      {w.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tijdlijn */}
            <div
              className="rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
            >
              <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>Geschiedenis</p>
              <h2 className="font-bold text-white mb-10" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Hoe GasProtex ontstond
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                {tijdlijn.map((item) => (
                  <div key={item.jaar} className="flex gap-8 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-bold text-[#F07830] flex-shrink-0 w-12" style={{ fontSize: 20 }}>
                      {item.jaar}
                    </span>
                    <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                      {item.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px 48px' }}
            >
              <div>
                <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Laat ons uw installatie scannen
                </h2>
                <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                  Gratis quickscan-advies. Reactie binnen één werkdag.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors flex-shrink-0"
                style={{ fontSize: 14 }}
              >
                Contact opnemen
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
