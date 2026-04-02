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
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-3" style={{ color: '#D97737', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Onze Diensten
          </p>
          <h2 className="font-display font-black uppercase text-[#0F2D4B] mb-5" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1 }}>
            Wat Wij Voor U Doen
          </h2>
          <p className="text-[#3D5A6E] max-w-xl mx-auto leading-relaxed" style={{ fontSize: 17 }}>
            Drie diensten — van snelle screening tot proactief jaarabonnement. Kies wat past bij uw situatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diensten.map((d) => (
            <div
              key={d.nr}
              className="bg-white flex flex-col p-8 rounded-lg hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(15,45,75,0.08)' }}
            >
              <p className="text-xs font-semibold uppercase text-[#D97737] mb-2" style={{ letterSpacing: '1.5px' }}>
                {d.subtitle}
              </p>
              <h3 className="font-display font-bold uppercase text-[#0F2D4B] mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22 }}>
                {d.title}
              </h3>
              <p className="text-[#3D5A6E] leading-relaxed flex-1 mb-6" style={{ fontSize: 15 }}>
                {d.description}
              </p>
              <div className="flex items-center justify-between pt-4" >
                <span className="font-bold text-[#0F2D4B]" style={{ fontSize: 15 }}>{d.price}</span>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#D97737] hover:gap-3 transition-all text-sm"
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

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-10 py-4 rounded-lg transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
          >
            Vraag een Gratis Quickscan Aan
          </Link>
        </div>
      </div>
    </section>
  )
}
