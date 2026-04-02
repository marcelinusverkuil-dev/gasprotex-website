import Link from 'next/link'

const sectoren = [
  {
    icon: '⚗️',
    title: 'Petrochemie & Chemie',
    description: 'BRZO-bedrijven, ATEX-zones, procesgassen. HSE en compliance staan centraal.',
    urgentie: 'Bedrijfskritisch',
    href: '/sectoren/chemie',
  },
  {
    icon: '🍺',
    title: 'Food & Beverage',
    description: 'Perslucht voor verpakking en machines. Energieverlies en contaminatierisico.',
    urgentie: 'Kostenbesparing',
    href: '/sectoren/food',
  },
  {
    icon: '⚡',
    title: 'Energie & Utilities',
    description: 'Gasdistributienetwerken, nutsbedrijven. Continuïteit en veiligheid.',
    urgentie: 'Compliance',
    href: '/sectoren/energie',
  },
  {
    icon: '🏭',
    title: 'Algemene Industrie',
    description: 'Productiebedrijven met perslucht. Snelle ROI door energiebesparing.',
    urgentie: 'ROI',
    href: '/sectoren/industrie',
  },
]

const urgentieColors: Record<string, string> = {
  'Bedrijfskritisch': 'bg-red-50 text-red-600 border-red-200',
  'Kostenbesparing':  'bg-green-50 text-green-700 border-green-200',
  'Compliance':       'bg-blue-50 text-blue-700 border-blue-200',
  'ROI':              'bg-orange-50 text-[#D97737] border-orange-200',
}

export default function SectorenSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p
              className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
            >
              Doelgroepen
            </p>
            <h2
              className="font-display font-black uppercase text-[#0F2D4B] leading-none"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1,
              }}
            >
              Welke Sector Bent U?
            </h2>
          </div>
          <Link
            href="/sectoren"
            className="self-start lg:self-auto inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-[#D97737] hover:gap-4 transition-all"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}
          >
            Alle sectoren
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectoren.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col p-7 border border-[#E2EAF0] bg-white hover:border-[#D97737] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-sm"
            >
              <span className="text-3xl mb-4">{s.icon}</span>
              <span
                className={`self-start text-xs font-semibold uppercase tracking-widest px-2 py-1 border rounded-sm mb-3 ${urgentieColors[s.urgentie]}`}
                style={{ fontSize: 10, letterSpacing: '1.5px' }}
              >
                {s.urgentie}
              </span>
              <h3
                className="font-display font-bold uppercase text-[#0F2D4B] mb-3 group-hover:text-[#D97737] transition-colors"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 18, letterSpacing: '1px' }}
              >
                {s.title}
              </h3>
              <p className="text-[#6B8FA6] leading-relaxed flex-1" style={{ fontSize: 14 }}>
                {s.description}
              </p>
              <div
                className="mt-5 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-[#D97737] group-hover:gap-3 transition-all"
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

        {/* ROI banner */}
        <div
          className="mt-14 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ background: '#0F2D4B' }}
        >
          <div>
            <p
              className="font-display font-black uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22 }}
            >
              Gemiddeld <span className="text-[#D97737]">30%</span> van perslucht gaat verloren door lekken.
            </p>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Eén gemiddeld lek kost uw bedrijf €1.200–€1.650 per jaar. Wij vinden ze allemaal.
            </p>
          </div>
          <Link
            href="/contact"
            className="clip-btn flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
          >
            Bereken Mijn Besparing
          </Link>
        </div>
      </div>
    </section>
  )
}
