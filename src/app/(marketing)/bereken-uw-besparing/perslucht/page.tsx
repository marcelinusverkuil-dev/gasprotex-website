'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const BEDRIJFSUREN_OPTIES = [
  { value: 8760, label: '24/7 continu' },
  { value: 2000, label: '250 werkdagen' },
]

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.25)',
  borderRadius: 0,
  padding: '8px 0',
  fontSize: 15,
  color: '#ffffff',
}

export default function PersluchtCalculatorPage() {
  const [lekdebiet, setLekdebiet] = useState('10')
  const [systeemdruk, setSysteemdruk] = useState('6')
  const [bedrijfsuren, setBedrijfsuren] = useState(8760)
  const [tarief, setTarief] = useState('0.20')
  const [specificPower, setSpecificPower] = useState('0.12')
  const [aantalLekken, setAantalLekken] = useState('6')

  const resultaat = useMemo(() => {
    const debiet = parseFloat(lekdebiet) || 0
    const bar = parseFloat(systeemdruk) || 6
    const euro = parseFloat(tarief.replace(',', '.')) || 0.20
    const sp = parseFloat(specificPower.replace(',', '.')) || 0.12
    const aantal = parseFloat(aantalLekken) || 6
    const m3jaar = (debiet / 1000 * 60) * bedrijfsuren
    const drukFactor = 1 + (bar / 10)
    const kWhJaar = m3jaar * sp * drukFactor * aantal
    const euroJaar = kWhJaar * euro
    const co2kg = kWhJaar * 0.22
    return { kWhJaar, euroJaar, co2ton: co2kg / 1000, autoKm: co2kg / 0.12 }
  }, [lekdebiet, systeemdruk, bedrijfsuren, tarief, specificPower, aantalLekken])

  const fmt = (n: number, d = 0) => n.toLocaleString('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d })

  return (
    <>
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <Link href="/bereken-uw-besparing" className="inline-flex items-center gap-2 text-[#7AADCC] hover:text-[#C2DCE8] mb-6 transition-colors" style={{ fontSize: 13 }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ transform: 'rotate(180deg)' }}>
              <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Alle gassoorten
          </Link>
          <p className="text-[#7AADCC] mb-3" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Perslucht</p>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Lekkostencalculator perslucht
          </h1>
          <p className="text-[#4A6880] mt-4" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}>
            Bereken wat persluchtlekken u jaarlijks kosten — in euro&apos;s, energie en CO₂.
          </p>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '48px' }}>
              <p className="text-[#7AADCC] mb-8" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Invoer</p>
              <div className="flex flex-col gap-6">

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>Lekdebiet (l/min)</label>
                  <input type="number" min="0" value={lekdebiet} onChange={e => setLekdebiet(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} placeholder="bijv. 10" />
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 12 }}>Afkomstig van detectietool of rapportage</p>
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Systeemdruk (bar) <span style={{ fontSize: 12 }}>standaard: 6</span>
                  </label>
                  <input type="number" min="1" max="50" value={systeemdruk} onChange={e => setSysteemdruk(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>Bedrijfsuren per jaar</label>
                  <div className="flex gap-3">
                    {BEDRIJFSUREN_OPTIES.map(opt => (
                      <button key={opt.value} onClick={() => setBedrijfsuren(opt.value)} className="flex-1 rounded-md text-left transition-all"
                        style={{ background: bedrijfsuren === opt.value ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)', border: bedrijfsuren === opt.value ? '1px solid #D97737' : '1px solid rgba(255,255,255,0.12)', padding: '12px 14px' }}>
                        <span className="block font-semibold text-white" style={{ fontSize: 15 }}>{opt.value.toLocaleString('nl-NL')}</span>
                        <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Elektriciteitstarief (€/kWh) <span style={{ fontSize: 12 }}>standaard: 0,20</span>
                  </label>
                  <input type="text" inputMode="decimal" value={tarief} onChange={e => setTarief(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Specific Power (kWh/m³) <span style={{ fontSize: 12 }}>standaard: 0,12</span>
                  </label>
                  <input type="text" inputMode="decimal" value={specificPower} onChange={e => setSpecificPower(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Aantal lekkages <span style={{ fontSize: 12 }}>standaard: 6 (sectorgemiddelde)</span>
                  </label>
                  <input type="number" min="1" value={aantalLekken} onChange={e => setAantalLekken(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-md" style={{ background: 'linear-gradient(135deg, #D97737 0%, #C4631E 100%)', padding: '48px' }}>
                <p className="text-orange-100 mb-2" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Totale kosten per jaar</p>
                <p className="font-bold text-white" style={{ fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  €{fmt(resultaat.euroJaar)}
                </p>
                <p className="text-orange-100 mt-3" style={{ fontSize: 14 }}>
                  {aantalLekken || 6} lek{Number(aantalLekken) === 1 ? '' : 'ken'} van {lekdebiet || 0} l/min bij {systeemdruk || 6} bar
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Energieverbruik', value: fmt(resultaat.kWhJaar), unit: 'kWh/jaar' },
                  { label: 'CO₂-uitstoot', value: fmt(resultaat.co2ton, 2), unit: 'ton CO₂/jaar' },
                  { label: 'Auto-equivalent', value: fmt(resultaat.autoKm), unit: 'km/jaar' },
                ].map(k => (
                  <div key={k.label} className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '28px 24px' }}>
                    <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{k.label}</p>
                    <p className="font-bold text-white" style={{ fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{k.value}</p>
                    <p className="text-[#7AADCC] mt-1" style={{ fontSize: 13 }}>{k.unit}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: '#F5F7FA', border: '1px solid #E2E8F0', padding: '28px 32px' }}>
                <div>
                  <p className="font-semibold text-[#0F2D4B]" style={{ fontSize: 16 }}>Wilt u weten hoeveel ú lekt?</p>
                  <p className="text-[#4A6880] mt-1" style={{ fontSize: 14 }}>Plan een gratis quickscan in — resultaat dezelfde dag.</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold flex-shrink-0 transition-colors hover:text-[#C4631E]" style={{ color: '#D97737', fontSize: 14 }}>
                  Afspraak maken
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '32px' }}>
            <p className="text-[#4A6880]" style={{ fontSize: 13, lineHeight: 1.8 }}>
              <span className="font-semibold text-[#0F2D4B]">Rekenmethode:</span>{' '}
              Kosten = (l/min ÷ 1.000 × 60) × bedrijfsuren × Specific Power × (1 + bar ÷ 10) × €/kWh × aantal lekken.
              CO₂-factor: 0,22 kg CO₂/kWh (Nederlandse stroommix). Auto-equivalent: 120 g CO₂/km.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
