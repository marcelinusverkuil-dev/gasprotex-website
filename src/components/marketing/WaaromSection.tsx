const voordelen = [
  {
    icon: '📍',
    title: 'Exacte Lokalisatie',
    description: 'Akoestische heatmap toont in één oogopslag precies waar het lek zit — tot op de centimeter nauwkeurig.',
  },
  {
    icon: '⚡',
    title: '10× Sneller',
    description: '20 minuten met één operator vs. uren zoekwerk met snuffelaars. Productie blijft gewoon draaien.',
  },
  {
    icon: '🛡️',
    title: 'Veilig op Afstand',
    description: 'Detecteer tot 200 meter afstand. ATEX-gecertificeerd voor explosiegevaarlijke zones (petrochemie, chemie).',
  },
  {
    icon: '📊',
    title: 'Directe Kostenberekening',
    description: 'Elk lek wordt direct vertaald naar euro-verlies per jaar en CO₂-impact — kant-en-klaar voor uw ESG-rapportage.',
  },
]

const vergelijking = [
  { aspect: 'Inspectietijd per hal', traditioneel: '4–8 uur', akoestisch: '20–40 min' },
  { aspect: 'Personeel nodig', traditioneel: '2–3 technici', akoestisch: '1 specialist' },
  { aspect: 'Productiestilstand', traditioneel: 'Vaak nodig', akoestisch: 'Niet nodig' },
  { aspect: 'Exacte locatie', traditioneel: 'Niet altijd', akoestisch: 'Altijd' },
  { aspect: 'ATEX zone inzetbaar', traditioneel: 'Beperkt', akoestisch: 'Volledig' },
  { aspect: 'Kostenrapportage', traditioneel: 'Handmatig', akoestisch: 'Automatisch' },
]

export default function WaaromSection() {
  return (
    <section className="bg-[#F4F7FA] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
          >
            De Technologie
          </p>
          <h2
            className="font-display font-black uppercase text-[#0F2D4B] leading-none"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1,
            }}
          >
            Waarom Akoestisch?
          </h2>
          <p className="text-[#3D5A6E] mt-5 max-w-xl mx-auto leading-relaxed" style={{ fontSize: 17 }}>
            Traditionele methoden missen lekken die onhoorbaar zijn en moeilijk bereikbaar zijn.
            Onze akoestische camera ziet geluid — en maakt het zichtbaar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Voordelen lijst */}
          <div className="space-y-0">
            {voordelen.map((v, i) => (
              <div
                key={i}
                className="flex gap-5 py-6"
                style={{ borderBottom: i < voordelen.length - 1 ? '1px solid #E2EAF0' : 'none' }}
              >
                <div
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-lg"
                  style={{
                    background: 'rgba(217,119,55,0.12)',
                    border: '1px solid rgba(217,119,55,0.3)',
                    clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <h4
                    className="font-display font-bold uppercase text-[#0F2D4B] mb-1"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 17, letterSpacing: '1px' }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 14 }}>
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vergelijkingstabel */}
          <div>
            <h3
              className="font-display font-bold uppercase text-[#0F2D4B] mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 20, letterSpacing: '1px' }}
            >
              Traditioneel vs. Akoestisch
            </h3>
            <div className="overflow-hidden border border-[#E2EAF0] bg-white">
              <div className="grid grid-cols-3 bg-[#0F2D4B] px-5 py-3">
                {['', 'Traditioneel', 'GasProtex'].map((h, i) => (
                  <span
                    key={i}
                    className="font-display font-bold uppercase tracking-widest text-white"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 11, letterSpacing: '1.5px' }}
                  >
                    {h === 'GasProtex' ? <span className="text-[#D97737]">{h}</span> : h}
                  </span>
                ))}
              </div>
              {vergelijking.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-5 py-3.5"
                  style={{ borderBottom: i < vergelijking.length - 1 ? '1px solid #E2EAF0' : 'none' }}
                >
                  <span className="text-[#3D5A6E] font-medium" style={{ fontSize: 13 }}>{row.aspect}</span>
                  <span className="text-[#6B8FA6] flex items-center gap-1" style={{ fontSize: 13 }}>
                    <span className="text-red-400">✕</span> {row.traditioneel}
                  </span>
                  <span className="text-[#0F2D4B] font-semibold flex items-center gap-1" style={{ fontSize: 13 }}>
                    <span className="text-[#D97737]">✓</span> {row.akoestisch}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
