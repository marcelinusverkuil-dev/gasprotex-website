const voordelen = [
  { title: 'Exacte Lokalisatie', description: 'Akoestische heatmap toont in één oogopslag precies waar het lek zit — tot op de centimeter nauwkeurig.' },
  { title: '10× Sneller', description: '20 minuten met één operator vs. uren zoekwerk met snuffelaars. Productie blijft gewoon draaien.' },
  { title: 'Veilig op Afstand', description: 'Detecteer tot 200 meter afstand. ATEX-gecertificeerd voor explosiegevaarlijke zones (petrochemie, chemie).' },
  { title: 'Directe Kostenberekening', description: 'Elk lek wordt direct vertaald naar euro-verlies per jaar en CO₂-impact — kant-en-klaar voor uw ESG-rapportage.' },
  { title: 'Zonder Productiestilstand', description: 'Onze technologie werkt non-invasief. Geen stilstand, geen productieverlies tijdens de inspectie.' },
  { title: 'ISO 50001 Rapportage', description: 'Rapportages voldoen aan ISO 50001 en BRZO-eisen. Kant-en-klaar voor auditors en toezichthouders.' },
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
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="mb-12">
          <h2 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Waarom akoestisch?
          </h2>
          <p className="text-[#3D5A6E] max-w-xl mx-auto leading-relaxed" style={{ fontSize: 17 }}>
            Traditionele methoden missen lekken die onhoorbaar zijn en moeilijk bereikbaar zijn.
            Onze akoestische camera ziet geluid — en maakt het zichtbaar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {voordelen.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-7 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}
            >
              <h4 className="font-bold text-[#0F2D4B] mb-3" style={{ fontSize: 18, letterSpacing: '-0.02em' }}>
                {v.title}
              </h4>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 14 }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-[#0F2D4B] mb-6 text-center" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
            Traditioneel vs. Akoestisch
          </h3>
          <div className="overflow-hidden rounded-lg" style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}>
            <div className="grid grid-cols-3 px-6 py-3" style={{ background: '#0F2D4B' }}>
              <span className="font-display font-bold uppercase text-xs text-white" style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '1.5px' }}></span>
              <span className="font-display font-bold uppercase text-xs text-white" style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '1.5px' }}>Traditioneel</span>
              <span className="font-display font-bold uppercase text-xs" style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '1.5px', color: '#D97737' }}>GasProtex</span>
            </div>
            {vergelijking.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-6 py-3.5 bg-white">
                <span className="text-[#3D5A6E] font-medium" style={{ fontSize: 13 }}>{row.aspect}</span>
                <span className="text-[#6B8FA6] flex items-center gap-1" style={{ fontSize: 13 }}>
                  <span className="text-red-400">✕</span> {row.traditioneel}
                </span>
                <span className="text-[#0F2D4B] font-semibold flex items-center gap-1" style={{ fontSize: 13 }}>
                  <span style={{ color: '#D97737' }}>✓</span> {row.akoestisch}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
