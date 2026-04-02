import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sectoren — GasProtex',
  description: 'Akoestische gaslekdetectie voor petrochemie, food & beverage, energie en algemene industrie.',
}

const sectoren = [
  {
    slug: 'chemie',
    icon: '⚗️',
    title: 'Petrochemie & Chemie',
    urgentie: 'Bedrijfskritisch',
    urgentieColor: 'bg-red-50 text-red-600 border-red-200',
    intro: 'BRZO-bedrijven en ATEX-zones vereisen de hoogste standaard van veiligheid. Gaslekken in procesgassen betekenen direct compliance-risico en potentieel gevaar voor mens en omgeving.',
    drivers: ['BRZO-compliance', 'ATEX-certificering vereist', 'Procesgassen (H₂, NH₃, CL₂)', 'HSE-rapportage'],
  },
  {
    slug: 'food',
    icon: '🍺',
    title: 'Food & Beverage',
    urgentie: 'Kostenbesparing',
    urgentieColor: 'bg-green-50 text-green-700 border-green-200',
    intro: 'Perslucht is de duurste nutsvoorziening in de food-industrie. Lekken in compressorsystemen en verpakkingslijnen leiden direct tot hogere energiekosten en CO₂-uitstoot.',
    drivers: ['Energiekosten perslucht', 'CO₂-reductie targets', 'Contaminatierisico food-grade', 'ISO 50001'],
  },
  {
    slug: 'energie',
    icon: '⚡',
    title: 'Energie & Utilities',
    urgentie: 'Compliance',
    urgentieColor: 'bg-blue-50 text-blue-700 border-blue-200',
    intro: 'Gasdistributienetwerken en nutsbedrijven staan onder toezicht van toezichthouders. Leklossing is niet alleen economisch — het is wettelijk verplicht.',
    drivers: ['Toezichthouder-rapportage', 'Gasdistributie-netwerken', 'Continuïteit kritische infrastructuur', 'Emissie-registratie'],
  },
  {
    slug: 'industrie',
    icon: '🏭',
    title: 'Algemene Industrie',
    urgentie: 'ROI',
    urgentieColor: 'bg-orange-50 text-[#D97737] border-orange-200',
    intro: 'Productiebedrijven met perslucht-gebaseerde machines en tools verliezen gemiddeld 20–30% van hun perslucht door lekken. Een quickscan heeft typisch een ROI van 3–6 maanden.',
    drivers: ['Energiebesparing', 'Snelle ROI', 'ISO 50001 voorbereiding', 'Onderhoudsprogramma'],
  },
]

export default function SectorenPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0F2D4B] pb-20" style={{ paddingTop: "100px" }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <p
            className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
          >
            Doelgroepen
          </p>
          <h1
            className="font-display font-black uppercase text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}
          >
            Welke Sector Bent U?
          </h1>
          <p className="text-[#C2DCE8] max-w-xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            Elke industrie heeft zijn eigen uitdagingen. Wij kennen ze — en hebben de certificeringen om ze aan te pakken.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectoren.map((s) => (
              <Link
                key={s.slug}
                href={`/sectoren/${s.slug}`}
                className="group flex flex-col p-8 border border-[#E2EAF0] hover:border-[#D97737] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{s.icon}</span>
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-2 py-1 border rounded-sm ${s.urgentieColor}`}
                    style={{ fontSize: 10, letterSpacing: '1.5px' }}
                  >
                    {s.urgentie}
                  </span>
                </div>
                <h2
                  className="font-display font-bold uppercase text-[#0F2D4B] mb-3 group-hover:text-[#D97737] transition-colors"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 24, letterSpacing: '1px' }}
                >
                  {s.title}
                </h2>
                <p className="text-[#3D5A6E] leading-relaxed flex-1 mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {s.intro}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.drivers.map((d) => (
                    <span
                      key={d}
                      className="text-[#6B8FA6] uppercase tracking-wide"
                      style={{ fontSize: 11, letterSpacing: '1px', border: '1px solid #E2EAF0', padding: '3px 10px' }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-[#D97737] group-hover:gap-3 transition-all"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12, letterSpacing: '2px' }}
                >
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
        <div className="max-w-7xl mx-auto section-container py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2
              className="font-display font-black uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1 }}
            >
              Uw Sector Staat Hier Niet Bij?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Akoestische gaslekdetectie werkt in elke omgeving met gas of perslucht.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </>
  )
}
