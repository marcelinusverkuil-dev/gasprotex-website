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
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="mb-10">
          <h2 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Waarom akoestisch?
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Voordelen grid */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voordelen.map((v, i) => (
                <div key={i}>
                  <h4 className="font-bold text-white mb-2" style={{ fontSize: 18, letterSpacing: '-0.02em' }}>
                    {v.title}
                  </h4>
                  <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vergelijkingstabel */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
          >
            <h3 className="font-bold text-white mb-8" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
              Traditioneel vs. akoestisch
            </h3>
            <div>
              <div className="grid grid-cols-3 pb-3 mb-2" style={{  }}>
                <span className="text-[#7AADCC]" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}></span>
                <span className="text-[#7AADCC]" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Traditioneel</span>
                <span className="text-[#D97737]" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>GasProtex</span>
              </div>
              {vergelijking.map((row, i) => (
                <div key={i} className="grid grid-cols-3 py-3" style={{  }}>
                  <span className="text-[#C2DCE8] font-medium" style={{ fontSize: 15 }}>{row.aspect}</span>
                  <span className="text-[#7AADCC] flex items-center gap-1" style={{ fontSize: 15 }}>
                    <span className="text-red-400">✕</span> {row.traditioneel}
                  </span>
                  <span className="text-white font-semibold flex items-center gap-1" style={{ fontSize: 15 }}>
                    <span style={{ color: '#D97737' }}>✓</span> {row.akoestisch}
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
