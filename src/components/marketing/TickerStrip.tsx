const items = [
  'Akoestische Gaslekdetectie',
  'ATEX Gecertificeerd',
  '10× Sneller dan Traditioneel',
  'Zonder Productiestilstand',
  'HSE Compliant',
  'ISO 50001 Rapportage',
  'Petrochemie · Food · Energie',
  'Perslucht · Procesgassen · Stikstof',
]

export default function TickerStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#D97737] py-4 overflow-hidden" aria-hidden="true">
      <div className="ticker-animate inline-block whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block font-display font-bold text-white uppercase tracking-[3px] px-12"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13 }}
          >
            <span className="mr-3 opacity-60">▸</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
