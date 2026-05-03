import Link from 'next/link'

const cards = [
  {
    label: 'Perslucht',
    title: '20-30% van je perslucht gaat verloren door lekken.',
    body: 'Bij een installatie van 200 kW is dat €15.000-€25.000 per jaar. Wij vinden elk lek in een dagdeel.',
    href: '/diensten/',
  },
  {
    label: 'Gaslekdetectie',
    title: 'Naast je vaste gasdetectie — wij vinden wat sensoren missen.',
    body: 'ATEX-gecertificeerd voor zone 1. CO₂, NH₃, N₂, H₂, methaan en meer.',
    href: '/diensten/',
  },
]

export default function DienstenSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="container-main">

        <h2
          className="font-bold text-[#0A2238] text-4xl mb-8"
          style={{ letterSpacing: '-0.02em' }}
        >
          Wat doen wij?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white border border-[#0A2238]/10 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-48 bg-[#F4F7FA]" />
              <div className="p-6">
                <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">
                  {card.label}
                </p>
                <h3 className="font-bold text-xl text-[#0A2238] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#3D5A6E] text-sm leading-relaxed mb-4">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="text-[#1E87B4] text-sm font-semibold hover:text-[#F07830] transition-colors"
                >
                  Bekijk de dienst →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
