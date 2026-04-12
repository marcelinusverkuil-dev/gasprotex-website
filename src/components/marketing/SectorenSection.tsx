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
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="mb-10">
          <h2 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Sectoren
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Sector kaarten */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectoren.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col transition-all duration-300"
                  style={{ paddingTop: '8px', paddingBottom: '8px' }}
                >
                  <h3 className="font-bold text-white mb-3 group-hover:text-[#D97737] transition-colors" style={{ fontSize: 17, letterSpacing: '-0.02em' }}>
                    {s.title}
                  </h3>
                  <p className="text-[#C2DCE8] flex-1 mb-4" style={{ fontSize: 14, lineHeight: 1.7 }}>
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
          </div>

          {/* ROI banner */}
          <div
            className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
          >
            <div>
              <p className="font-bold text-white mb-1" style={{ fontSize: 20, letterSpacing: '-0.02em' }}>
                Gemiddeld <span style={{ color: '#D97737' }}>30%</span> van perslucht gaat verloren door lekken.
              </p>
              <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                Één gemiddeld lek kost uw bedrijf €1.200–€1.650 per jaar. Wij vinden ze allemaal.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors"
              style={{ fontSize: 14 }}
            >
              Bereken mijn besparing
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
