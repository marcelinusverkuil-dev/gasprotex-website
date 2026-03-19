import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten — GasProtex',
  description: 'Quickscan, Fabrieksaudit en Serviceabonnement. Akoestische gaslekdetectie op maat voor uw situatie.',
}

const diensten = [
  {
    id: 'quickscan',
    nr: '01',
    icon: '🔍',
    title: 'Quickscan',
    subtitle: 'Snelle screening',
    price: 'Vanaf €2.500',
    levertijd: 'Resultaat dezelfde dag',
    geschiktVoor: ['Eerste inventarisatie', 'Na groot onderhoud', 'Jaarlijkse controle', 'Voor ISO 50001 audit'],
    wat: 'In één dag brengen wij alle actieve gaslekken in uw installatie in kaart met onze akoestische camera. U ontvangt dezelfde dag een rapportage met exacte locaties, lekgrootte en geschatte kostenimpact per lek.',
    inbegrepen: [
      'Volledige scan van aangewezen installatiegebieden',
      'Akoestische heatmap per zone',
      'Rapportage met locatie, grootte en prioriteit per lek',
      'Kostenberekening (€/jaar) per lek',
      'CO₂-impact berekening',
      'Digitale levering dezelfde dag',
    ],
    resultaat: 'Gemiddeld identificeren wij 8–24 lekken per dagdeel inspectie. Bij een gemiddeld productieproces bespaart dit €12.000–€40.000 per jaar.',
  },
  {
    id: 'audit',
    nr: '02',
    icon: '🏭',
    title: 'Fabrieksaudit',
    subtitle: 'Volledige inspectie',
    price: 'Vanaf €5.000',
    levertijd: 'Rapportage binnen 3 werkdagen',
    geschiktVoor: ['Grote productielocaties', 'BRZO-bedrijven', 'Compliance-traject', 'Baseline meting'],
    wat: 'Een diepgaande meerdaagse audit van uw gehele productielocatie. Inclusief BRZO-proof rapportage, emissiereductieberekening en een prioriteitenmatrix waarmee uw onderhoudsdienst direct aan de slag kan.',
    inbegrepen: [
      'Meerdaagse on-site inspectie (afhankelijk van locatiegrootte)',
      'Scan van alle systemen: perslucht, procesgassen, stikstof, CO₂',
      'BRZO-proof rapportage geschikt voor toezichthouders',
      'Emissiereductieberekening voor ESG/CO₂-rapportage',
      'Prioriteitenmatrix: urgentie × kostenbesparing',
      'Managementsamenvatting (1 pagina)',
      'Presentatie van bevindingen aan uw team',
    ],
    resultaat: 'Gemiddeld ROI van 3–8 maanden. Geschikt als basis voor uw ISO 50001-implementatie of BRZO-rapportage.',
  },
  {
    id: 'abonnement',
    nr: '03',
    icon: '📋',
    title: 'Serviceabonnement',
    subtitle: 'Periodiek & proactief',
    price: 'Vanaf €18.000/jaar',
    levertijd: 'Kwartaal- of halfjaarsronde',
    geschiktVoor: ['Continue kostenbeheersing', 'KPI-rapportage richting directie', 'Klantportaal toegang', 'Proactief onderhoud'],
    wat: 'Kwartaal- of halfjaarscontroles met toegang tot uw persoonlijk klantportaal. Realtime inzicht in open lekken, gedichte lekken en gerealiseerde besparingen. Inclusief QR-tagging van installatieonderdelen.',
    inbegrepen: [
      '2× of 4× per jaar volledige locatie-inspectie',
      'Toegang tot klantportaal (realtime lekstatus)',
      'QR-tagging van leklocaties voor onderhoudsdienst',
      'Maandelijkse KPI-rapportage (PDF of portaal)',
      'Gerealiseerde besparingen dashboard',
      'Directe notificatie bij kritieke lekken',
      'Dedicated contactpersoon bij GasProtex',
    ],
    resultaat: 'Klanten met een abonnement realiseren gemiddeld 23% meer besparing dan eenmalige inspecties, door proactieve opvolging van gedichte lekken.',
  },
]

export default function DienstenPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0F2D4B] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
          >
            Onze Diensten
          </p>
          <h1
            className="font-display font-black uppercase text-white leading-none mb-6"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: 1,
            }}
          >
            Wat Wij Voor U Doen
          </h1>
          <p className="text-[#C2DCE8] max-w-xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            Drie diensten — van snelle screening tot proactief jaarabonnement.
            Kies wat past bij uw situatie.
          </p>
        </div>
      </section>

      {/* Diensten */}
      <div className="bg-white">
        {diensten.map((d, index) => (
          <section
            key={d.id}
            id={d.id}
            className={index % 2 === 1 ? 'bg-[#F4F7FA]' : 'bg-white'}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                {/* Left */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{d.icon}</span>
                    <div>
                      <p
                        className="font-display font-semibold uppercase tracking-widest text-[#D97737]"
                        style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12, letterSpacing: '2px' }}
                      >
                        {d.subtitle}
                      </p>
                      <h2
                        className="font-display font-black uppercase text-[#0F2D4B] leading-none"
                        style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1 }}
                      >
                        {d.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 16, lineHeight: 1.8 }}>
                    {d.wat}
                  </p>

                  {/* Geschikt voor */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {d.geschiktVoor.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#0F2D4B] font-medium uppercase tracking-wide"
                        style={{
                          fontSize: 11,
                          letterSpacing: '1.5px',
                          border: '1px solid #D1DDE6',
                          padding: '4px 12px',
                          background: '#EEF3F7',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Resultaat */}
                  <div
                    className="p-5"
                    style={{ background: 'rgba(217,119,55,0.07)', borderLeft: '3px solid #D97737' }}
                  >
                    <p
                      className="font-display font-bold uppercase text-[#D97737] mb-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12, letterSpacing: '2px' }}
                    >
                      Gemiddeld Resultaat
                    </p>
                    <p className="text-[#0F2D4B]" style={{ fontSize: 15 }}>{d.resultaat}</p>
                  </div>
                </div>

                {/* Right — wat is inbegrepen */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="p-8 lg:p-10"
                    style={{ background: index % 2 === 1 ? 'white' : '#F4F7FA', border: '1px solid #E2EAF0' }}
                  >
                    {/* Price + levertijd */}
                    <div className="flex items-start justify-between gap-4 mb-7 pb-7" style={{ borderBottom: '1px solid #E2EAF0' }}>
                      <div>
                        <p className="text-[#6B8FA6] uppercase tracking-widest mb-1" style={{ fontSize: 11, letterSpacing: '1.5px' }}>
                          Investering
                        </p>
                        <p
                          className="font-display font-black text-[#0F2D4B]"
                          style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 28 }}
                        >
                          {d.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#6B8FA6] uppercase tracking-widest mb-1" style={{ fontSize: 11, letterSpacing: '1.5px' }}>
                          Levertijd
                        </p>
                        <p className="font-semibold text-[#0F2D4B]" style={{ fontSize: 14 }}>{d.levertijd}</p>
                      </div>
                    </div>

                    {/* Inbegrepen */}
                    <p
                      className="font-display font-bold uppercase text-[#0F2D4B] mb-5"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}
                    >
                      Inbegrepen
                    </p>
                    <ul className="space-y-3 mb-8">
                      {d.inbegrepen.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-[#D97737] font-bold mt-0.5 flex-shrink-0" style={{ fontSize: 14 }}>✓</span>
                          <span className="text-[#3D5A6E]" style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="clip-btn w-full inline-flex items-center justify-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 transition-colors"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}
                    >
                      Offerte Aanvragen
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA banner */}
      <section style={{ background: '#0F2D4B' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2
              className="font-display font-black uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1 }}
            >
              Niet Zeker Welke Dienst Past?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 16 }}>
              Wij adviseren u gratis op basis van uw installatie en situatie.
            </p>
          </div>
          <Link
            href="/contact"
            className="clip-btn flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
          >
            Gratis Adviesgesprek
          </Link>
        </div>
      </section>
    </>
  )
}
