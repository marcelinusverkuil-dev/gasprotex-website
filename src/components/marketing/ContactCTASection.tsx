import Link from 'next/link'

export default function ContactCTASection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="mb-10">
          <h2 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Klaar voor een gratis quickscan?
          </h2>
        </div>

        <div
          className="rounded-2xl"
          style={{ background: 'linear-gradient(to right, #0A2238 0%, #1E5A8A 100%)', padding: '48px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Links — trust signals */}
            <div className="flex flex-col gap-4">
              <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Vertel ons kort over uw installatie. Wij nemen binnen één werkdag contact op.
              </p>
              {[
                'Reactie binnen 1 werkdag',
                'Geheel vrijblijvend',
                'ATEX-gecertificeerd team',
                'NDA beschikbaar op verzoek',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '1px' }} />
                  <span className="text-[#C2DCE8]" style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Rechts — CTA knop */}
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#F07830] hover:bg-[#FF8A40] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                style={{ fontSize: 15 }}
              >
                Quickscan aanvragen
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
