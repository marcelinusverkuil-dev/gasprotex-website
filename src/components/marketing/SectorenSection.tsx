import Link from 'next/link'

const sectoren = [
  {
    title: 'Petrochemie & Chemie',
    description: 'BRZO-bedrijven, ATEX-zones, procesgassen. HSE en compliance staan centraal.',
    href: '/sectoren/chemie',
  },
  {
    title: 'Food & Beverage',
    description: 'Perslucht voor verpakking en machines. Energieverlies en contaminatierisico.',
    href: '/sectoren/food',
  },
  {
    title: 'Energie & Utilities',
    description: 'Gasdistributienetwerken, nutsbedrijven. Continuïteit en veiligheid.',
    href: '/sectoren/energie',
  },
  {
    title: 'Algemene Industrie',
    description: 'Productiebedrijven met perslucht. Snelle ROI door energiebesparing.',
    href: '/sectoren/industrie',
  },
]

export default function SectorenSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: '#D97737', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Doelgroepen
            </p>
            <h2 className="font-display font-black uppercase text-[#0F2D4B]" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1 }}>
              Welke Sector Bent U?
            </h2>
          </div>
          <Link
            href="/sectoren"
            className="self-start lg:self-auto inline-flex items-center gap-2 font-semibold text-[#D97737] hover:gap-4 transition-all text-sm"
          >
            Alle sectoren
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Kaarten — clean zonder iconen en badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectoren.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-white flex flex-col p-7 rounded-lg hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}
            >
              <h3
                className="font-display font-bold uppercase text-[#0F2D4B] mb-3 group-hover:text-[#D97737] transition-colors"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 18 }}
              >
                {s.title}
              </h3>
              <p className="text-[#6B8FA6] leading-relaxed flex-1 mb-5" style={{ fontSize: 14 }}>
                {s.description}
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

        {/* ROI banner */}
        <div
          className="mt-14 p-8 lg:p-10 rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ background: '#0F2D4B' }}
        >
          <div>
            <p
              className="font-display font-black uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22 }}
            >
              Gemiddeld <span style={{ color: '#D97737' }}>30%</span> van perslucht gaat verloren door lekken.
            </p>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Één gemiddeld lek kost uw bedrijf €1.200–€1.650 per jaar. Wij vinden ze allemaal.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
          >
            Bereken Mijn Besparing
          </Link>
        </div>
      </div>
    </section>
  )
}
