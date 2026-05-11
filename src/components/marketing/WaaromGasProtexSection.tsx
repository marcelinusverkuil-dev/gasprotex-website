const cijfers = [
  {
    getal: '10+ jaar',
    label: 'Ervaring',
    uitleg: 'In industriële instrumentatie en lekdetectie.',
  },
  {
    getal: 'Vanaf €2.500',
    label: 'Voor een Quickscan',
    uitleg: 'Compleet, inclusief rapportage.',
  },
  {
    getal: 'Eén dagdeel',
    label: 'Inspectie ter plaatse',
    uitleg: 'Zonder productiestilstand.',
  },
  {
    getal: 'Heel Nederland',
    label: 'Werkgebied',
    uitleg: 'Geen reiskosten-toeslag.',
  },
]

export default function WaaromGasProtexSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '16px' }}>
      <div className="container-main">
        <div
          className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
          style={{ padding: '40px 32px' }}
        >
          <h2
            className="text-[#0A2238] font-bold text-3xl mb-10"
            style={{ lineHeight: 1.2 }}
          >
            Waarom GasProtex
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {cijfers.map((c) => (
              <div key={c.label}>
                <p
                  className="text-[#0A2238] font-bold text-4xl mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {c.getal}
                </p>
                <p className="text-[#0A2238] font-semibold text-base mb-1">{c.label}</p>
                <p className="text-[#3D5A6E] text-sm leading-relaxed">{c.uitleg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
