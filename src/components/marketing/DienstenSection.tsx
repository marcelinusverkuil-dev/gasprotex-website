import Link from 'next/link'

const diensten = [
  {
    nr: '01',
    icon: '🔍',
    title: 'Quickscan',
    subtitle: 'Snelle screening',
    description:
      'In één dag brengen wij alle actieve gaslekken in uw installatie in kaart. U ontvangt dezelfde dag een rapportage met locaties, lekgrootte en geschatte kostenimpact.',
    price: 'Vanaf €2.500',
    href: '/diensten#quickscan',
  },
  {
    nr: '02',
    icon: '🏭',
    title: 'Fabrieksaudit',
    subtitle: 'Volledige inspectie',
    description:
      'Een diepgaande meerdaagse audit van uw gehele productielocatie. Inclusief BRZO-proof rapportage, emissiereductieberekening en prioriteitenmatrix voor onderhoud.',
    price: 'Vanaf €5.000',
    href: '/diensten#audit',
  },
  {
    nr: '03',
    icon: '📋',
    title: 'Serviceabonnement',
    subtitle: 'Periodiek & proactief',
    description:
      'Kwartaal- of halfjaarscontroles met toegang tot uw persoonlijk klantportaal. Realtime inzicht in open lekken, gedichte lekken en gerealiseerde besparingen.',
    price: 'Vanaf €18.000/jaar',
    href: '/diensten#abonnement',
  },
]

export default function DienstenSection() {
  return (
    <section className="bg-white py-24 lg:py-32 relative">
      {/* Oranje lijn bovenaan */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, #D97737, transparent)' }}
      />

      <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>

        {/* Header */}
        <div className="mb-14">
          <p
            className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
          >
            Onze Diensten
          </p>
          <h2
            className="font-display font-black uppercase text-[#0F2D4B] leading-none"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1,
            }}
          >
            Wat Wij Voor U Doen
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#E2EAF0]">
          {diensten.map((d) => (
            <div
              key={d.nr}
              className="group relative bg-white p-10 lg:p-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Achtergrond nummer */}
              <span
                className="absolute top-4 right-6 font-display font-black text-[#0F2D4B] select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  fontSize: 72,
                  opacity: 0.04,
                  lineHeight: 1,
                }}
              >
                {d.nr}
              </span>

              {/* Oranje bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D97737] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />

              <span className="text-4xl mb-5 block">{d.icon}</span>

              <p
                className="font-display font-semibold uppercase tracking-widest text-[#D97737] mb-1"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12, letterSpacing: '2px' }}
              >
                {d.subtitle}
              </p>

              <h3
                className="font-display font-bold uppercase text-[#0F2D4B] mb-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22, letterSpacing: '1px' }}
              >
                {d.title}
              </h3>

              <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15 }}>
                {d.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="font-display font-bold text-[#0F2D4B]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 16 }}
                >
                  {d.price}
                </span>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-[#D97737] hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}
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
