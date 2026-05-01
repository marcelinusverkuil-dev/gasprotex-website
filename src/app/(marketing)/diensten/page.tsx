import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten – GasProtex',
  description: 'Quickscan, Fabrieksaudit en Serviceabonnement. Akoestische gaslekdetectie op maat voor uw situatie.',
}

const diensten = [
  {
    id: 'quickscan',
    title: 'Quickscan',
    subtitle: 'Snelle screening',
    price: 'Vanaf €2.500',
    levertijd: 'Resultaat dezelfde dag',
    wat: 'In één dag alle actieve gaslekken in kaart. Dezelfde dag ontvangt u een rapportage met locaties, lekgrootte en kostenimpact.',
    inbegrepen: [
      'Volledige scan van aangewezen installatiegebieden',
      'Akoestische heatmap per zone',
      'Rapportage met locatie, grootte en prioriteit per lek',
      'Kostenberekening (€/jaar) per lek',
      'CO₂-impact berekening',
      'Digitale levering dezelfde dag',
    ],
    resultaat: 'Gemiddeld 8–24 lekken per dagdeel. Besparing: €12.000–€40.000/jaar.',
  },
  {
    id: 'audit',
    title: 'Fabrieksaudit',
    subtitle: 'Volledige inspectie',
    price: 'Vanaf €5.000',
    levertijd: 'Rapportage binnen 3 werkdagen',
    wat: 'Meerdaagse audit van uw gehele locatie. BRZO-proof rapportage en prioriteitenmatrix voor onderhoud.',
    inbegrepen: [
      'Meerdaagse on-site inspectie (afhankelijk van locatiegrootte)',
      'Scan van alle systemen: perslucht, procesgassen, stikstof, CO₂',
      'BRZO-proof rapportage geschikt voor toezichthouders',
      'Emissiereductieberekening voor ESG/CO₂-rapportage',
      'Prioriteitenmatrix: urgentie × kostenbesparing',
      'Managementsamenvatting (1 pagina)',
      'Presentatie van bevindingen aan uw team',
    ],
    resultaat: 'ROI gemiddeld 3–8 maanden. Basis voor ISO 50001 of BRZO-rapportage.',
  },
  {
    id: 'abonnement',
    title: 'Serviceabonnement',
    subtitle: 'Periodiek & proactief',
    price: 'Vanaf €18.000/jaar',
    levertijd: 'Kwartaal- of halfjaarsronde',
    wat: 'Kwartaal- of halfjaarscontroles met klantportaal. Realtime inzicht in lekken en gerealiseerde besparingen.',
    inbegrepen: [
      '2× of 4× per jaar volledige locatie-inspectie',
      'Toegang tot klantportaal (realtime lekstatus)',
      'QR-tagging van leklocaties voor onderhoudsdienst',
      'Maandelijkse KPI-rapportage (PDF of portaal)',
      'Gerealiseerde besparingen dashboard',
      'Directe notificatie bij kritieke lekken',
      'Dedicated contactpersoon bij GasProtex',
    ],
    resultaat: 'Abonnementsklanten besparen gemiddeld 23% meer door proactieve opvolging.',
  },
]

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Diensten
          </h1>
        </div>
      </section>

      {/* Diensten */}
      <section style={{ background: '#ffffff', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="flex flex-col gap-6">
            {diensten.map((d) => (
              <div
                key={d.id}
                id={d.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(to right, #0A2238 0%, #1E5A8A 100%)',
                  padding: '48px',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                  {/* Links: titel + meta */}
                  <div>
                    <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>{d.subtitle}</p>
                    <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {d.title}
                    </h2>
                    <p className="text-[#F07830] font-bold mb-1" style={{ fontSize: 18 }}>{d.price}</p>
                    <p className="text-[#7AADCC]" style={{ fontSize: 13 }}>{d.levertijd}</p>
                  </div>

                  {/* Midden: omschrijving + resultaat */}
                  <div>
                    <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 16, lineHeight: 1.8 }}>
                      {d.wat}
                    </p>
                    <p className="text-[#F07830]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                      {d.resultaat}
                    </p>
                  </div>

                  {/* Rechts: inbegrepen + link */}
                  <div>
                    <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Inbegrepen</p>
                    <ul className="space-y-2 mb-8">
                      {d.inbegrepen.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                      style={{ fontSize: 14 }}
                    >
                      Offerte aanvragen
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ffffff', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div
            className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{ background: 'linear-gradient(to right, #0A2238 0%, #1E5A8A 100%)', padding: '40px 48px' }}
          >
            <div>
              <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                Niet zeker welke dienst past?
              </h2>
              <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                Wij adviseren u gratis op basis van uw installatie en situatie.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors flex-shrink-0"
              style={{ fontSize: 14 }}
            >
              Gratis adviesgesprek
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
