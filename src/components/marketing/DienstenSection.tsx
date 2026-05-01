import Link from 'next/link'

const diensten = [
  {
    nr: '01',
    title: 'Quickscan',
    subtitle: 'Snelle screening',
    description: 'In één dag brengen wij alle actieve gaslekken in uw installatie in kaart. U ontvangt dezelfde dag een rapportage met locaties, lekgrootte en geschatte kostenimpact.',
    price: 'Vanaf €2.500',
    href: '/diensten#quickscan',
  },
  {
    nr: '02',
    title: 'Fabrieksaudit',
    subtitle: 'Volledige inspectie',
    description: 'Een diepgaande meerdaagse audit van uw gehele productielocatie. Inclusief BRZO-proof rapportage, emissiereductieberekening en prioriteitenmatrix voor onderhoud.',
    price: 'Vanaf €5.000',
    href: '/diensten#audit',
  },
  {
    nr: '03',
    title: 'Serviceabonnement',
    subtitle: 'Periodiek & proactief',
    description: 'Kwartaal- of halfjaarscontroles met toegang tot uw persoonlijk klantportaal. Realtime inzicht in open lekken, gedichte lekken en gerealiseerde besparingen.',
    price: 'Vanaf €18.000/jaar',
    href: '/diensten#abonnement',
  },
]

export default function DienstenSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>

        <div className="mb-10">
          <h2 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Wat wij voor u doen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diensten.map((d) => (
            <div
              key={d.nr}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              style={{ background: 'linear-gradient(to right, #0A2238 0%, #1E5A8A 100%)', padding: '36px' }}
            >
              <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13 }}>{d.subtitle}</p>
              <h3 className="font-bold text-white mb-4" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
                {d.title}
              </h3>
              <p className="text-[#C2DCE8] flex-1 mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
                {d.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#F07830]" style={{ fontSize: 15 }}>{d.price}</span>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#F07830] hover:text-[#FF8A40] transition-colors text-sm"
                >
                  Meer info
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
