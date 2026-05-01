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

export default function CalculatorSection() {
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
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>

        <div className="mb-10">
          <p className="text-[#7AADCC] mb-3" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Gratis tool
          </p>
          <h2 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Wat kosten uw persluchtlekken?
          </h2>
          <p className="text-[#4A6880] mt-3" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
            Vul uw lekdebiet in en bereken direct de jaarlijkse kosten in euro&apos;s, energie en CO₂.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px' }}>
            <p className="text-[#7AADCC] mb-6" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Invoer</p>
            <div className="flex flex-col gap-6">

              <div>
                <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>Lekdebiet (l/min)</label>
                <input type="number" min="0" value={lekdebiet} onChange={e => setLekdebiet(e.target.value)}
                  className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} placeholder="bijv. 10" />
                <p className="text-[#7AADCC] mt-1" style={{ fontSize: 12 }}>Afkomstig van detectietool of rapportage</p>
              </div>

              <div>
                <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                  Systeemdruk (bar) <span className="ml-1" style={{ fontSize: 12 }}>standaard: 6</span>
                </label>
                <input type="number" min="1" max="50" value={systeemdruk} onChange={e => setSysteemdruk(e.target.value)}
                  className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
              </div>

              <div>
                <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>Bedrijfsuren per jaar</label>
                <div className="flex gap-3">
                  {BEDRIJFSUREN_OPTIES.map(opt => (
                    <button key={opt.value} onClick={() => setBedrijfsuren(opt.value)} className="flex-1 rounded-md text-left transition-all"
                      style={{ background: bedrijfsuren === opt.value ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)', border: bedrijfsuren === opt.value ? '1px solid #F07830' : '1px solid rgba(255,255,255,0.12)', padding: '10px 12px' }}>
                      <span className="block font-semibold text-white" style={{ fontSize: 14 }}>{opt.value.toLocaleString('nl-NL')}</span>
                      <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Tarief (€/kWh) <span style={{ fontSize: 12 }}>std. 0,20</span>
                  </label>
                  <input type="text" inputMode="decimal" value={tarief} onChange={e => setTarief(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Spec. Power (kWh/m³) <span style={{ fontSize: 12 }}>std. 0,12</span>
                  </label>
                  <input type="text" inputMode="decimal" value={specificPower} onChange={e => setSpecificPower(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
                </div>
              </div>

              <div>
                <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                  Aantal lekkages <span style={{ fontSize: 12 }}>standaard: 6</span>
                </label>
                <input type="number" min="1" value={aantalLekken} onChange={e => setAantalLekken(e.target.value)}
                  className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} />
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-5">

            <div className="rounded-md" style={{ background: 'linear-gradient(135deg, #F07830 0%, #C4631E 100%)', padding: '40px' }}>
              <p className="text-orange-100 mb-2" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Totale kosten per jaar</p>
              <p className="font-bold text-white" style={{ fontSize: 'clamp(40px, 6vw, 68px)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                €{fmt(resultaat.euroJaar)}
              </p>
              <p className="text-orange-100 mt-3" style={{ fontSize: 14 }}>
                {aantalLekken || 6} lek{Number(aantalLekken) === 1 ? '' : 'ken'} van {lekdebiet || 0} l/min bij {systeemdruk || 6} bar
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Energieverbruik', value: fmt(resultaat.kWhJaar), unit: 'kWh/jaar' },
                { label: 'CO₂-uitstoot', value: fmt(resultaat.co2ton, 2), unit: 'ton/jaar' },
                { label: 'Auto-equivalent', value: fmt(resultaat.autoKm), unit: 'km/jaar' },
              ].map(k => (
                <div key={k.label} className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '24px 20px' }}>
                  <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{k.label}</p>
                  <p className="font-bold text-white" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{k.value}</p>
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 12 }}>{k.unit}</p>
                </div>
              ))}
            </div>

            <div className="rounded-md" style={{ background: '#ffffff', border: '1px solid #E2E8F0', padding: '24px 28px' }}>
              <p className="text-[#4A6880]" style={{ fontSize: 14, lineHeight: 1.7 }}>
                Werkt u met stikstof, waterstof of CO₂?{' '}
                <Link href="/bereken-uw-besparing" className="font-semibold transition-colors hover:text-[#C4631E]" style={{ color: '#F07830' }}>
                  Bereken ook de kosten voor andere gassoorten →
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
