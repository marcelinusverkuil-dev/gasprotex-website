'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const BEDRIJFSUREN_OPTIES = [
  { value: 8760, label: '24/7 continu' },
  { value: 2000, label: '250 werkdagen' },
]

const STIKSTOF_TYPES = [
  { id: 'psa', label: 'PSA on-site', prijs: 0.06, omschrijving: 'Stikstof gegenereerd op locatie via drukwisseladsorptie' },
  { id: 'bulk', label: 'Bulk vloeibaar', prijs: 0.28, omschrijving: 'Vloeibare stikstof geleverd per tankwagen' },
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

export default function StikstofCalculatorPage() {
  const [type, setType] = useState('psa')
  const [lekdebiet, setLekdebiet] = useState('10')
  const [systeemdruk, setSysteemdruk] = useState('6')
  const [bedrijfsuren, setBedrijfsuren] = useState(8760)
  const [gasprijs, setGasprijs] = useState('0.06')
  const [aantalLekken, setAantalLekken] = useState('6')

  const huidigType = STIKSTOF_TYPES.find(t => t.id === type)!

  const resultaat = useMemo(() => {
    const debiet = parseFloat(lekdebiet) || 0
    const bar = parseFloat(systeemdruk) || 6
    const prijs = parseFloat(gasprijs.replace(',', '.')) || huidigType.prijs
    const aantal = parseFloat(aantalLekken) || 6
    const m3jaar = (debiet / 1000 * 60) * bedrijfsuren
    const drukFactor = 1 + (bar / 10)
    const euroJaar = m3jaar * drukFactor * prijs * aantal
    return { m3jaar, euroJaar }
  }, [lekdebiet, systeemdruk, bedrijfsuren, gasprijs, aantalLekken, huidigType.prijs])

  const fmt = (n: number, d = 0) => n.toLocaleString('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d })

  const handleTypeChange = (id: string) => {
    setType(id)
    const t = STIKSTOF_TYPES.find(t => t.id === id)!
    setGasprijs(t.prijs.toString())
  }

  return (
    <>
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <Link href="/bereken-uw-besparing" className="inline-flex items-center gap-2 text-[#7AADCC] hover:text-[#C2DCE8] mb-6 transition-colors" style={{ fontSize: 13 }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ transform: 'rotate(180deg)' }}>
              <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Alle gassoorten
          </Link>
          <p className="text-[#7AADCC] mb-3" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Stikstof</p>
          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Lekkostencalculator stikstof
          </h1>
          <p className="text-[#4A6880] mt-4" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}>
            Bereken wat stikstoflekkages u jaarlijks kosten — op basis van uw leveringsvorm en gasprijs.
          </p>
        </div>
      </section>

      <section style={{ background: '#ffffff', paddingBottom: '60px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}>
              <p className="text-[#7AADCC] mb-8" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Invoer</p>
              <div className="flex flex-col gap-6">

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>Leveringsvorm</label>
                  <div className="flex gap-3">
                    {STIKSTOF_TYPES.map(t => (
                      <button key={t.id} onClick={() => handleTypeChange(t.id)} className="flex-1 rounded-md text-left transition-all"
                        style={{ background: type === t.id ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)', border: type === t.id ? '1px solid #F07830' : '1px solid rgba(255,255,255,0.12)', padding: '12px 14px' }}>
                        <span className="block font-semibold text-white" style={{ fontSize: 15 }}>{t.label}</span>
                        <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>gem. €{t.prijs.toFixed(2)}/m³</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[#7AADCC] mt-2" style={{ fontSize: 12 }}>{huidigType.omschrijving}</p>
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>Lekdebiet (l/min)</label>
                  <input type="number" min="0" value={lekdebiet} onChange={e => setLekdebiet(e.target.value)}
                    className="w-full placeholder-[#7AADCC] outline-none transition-colors" style={inputStyle} placeholder="bijv. 10" />
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
                        style={{ background: bedrijfsuren === opt.value ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)', border: bedrijfsuren === opt.value ? '1px solid #F07830' : '1px solid rgba(255,255,255,0.12)', padding: '12px 14px' }}>
                        <span className="block font-semibold text-white" style={{ fontSize: 15 }}>{opt.value.toLocaleString('nl-NL')}</span>
                        <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#7AADCC] font-medium mb-1" style={{ fontSize: 13 }}>
                    Gasprijs (€/m³) <span style={{ fontSize: 12 }}>aanpasbaar</span>
                  </label>
                  <input type="text" inputMode="decimal" value={gasprijs} onChange={e => setGasprijs(e.target.value)}
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
              <div className="rounded-md" style={{ background: 'linear-gradient(135deg, #F07830 0%, #C4631E 100%)', padding: '48px' }}>
                <p className="text-orange-100 mb-2" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Totale kosten per jaar</p>
                <p className="font-bold text-white" style={{ fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  €{fmt(resultaat.euroJaar)}
                </p>
                <p className="text-orange-100 mt-3" style={{ fontSize: 14 }}>
                  {aantalLekken || 6} lek{Number(aantalLekken) === 1 ? '' : 'ken'} van {lekdebiet || 0} l/min bij {systeemdruk || 6} bar
                </p>
              </div>

              <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '28px 32px' }}>
                <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>Gasverlies</p>
                <p className="font-bold text-white" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{fmt(resultaat.m3jaar)}</p>
                <p className="text-[#7AADCC] mt-1" style={{ fontSize: 13 }}>m³ stikstof per jaar</p>
              </div>

              <div className="rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: '#F5F7FA', border: '1px solid #E2E8F0', padding: '28px 32px' }}>
                <div>
                  <p className="font-semibold text-[#0A2238]" style={{ fontSize: 16 }}>Wilt u weten hoeveel ú lekt?</p>
                  <p className="text-[#4A6880] mt-1" style={{ fontSize: 14 }}>Plan een gratis inspectie in — resultaat dezelfde dag.</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold flex-shrink-0 transition-colors hover:text-[#C4631E]" style={{ color: '#F07830', fontSize: 14 }}>
                  Afspraak maken
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '32px' }}>
            <p className="text-[#4A6880]" style={{ fontSize: 13, lineHeight: 1.8 }}>
              <span className="font-semibold text-[#0A2238]">Rekenmethode:</span>{' '}
              Kosten = (l/min ÷ 1.000 × 60) × bedrijfsuren × (1 + bar ÷ 10) × gasprijs × aantal lekken.{' '}
              <span className="italic">Indicatieve m³-kostprijs op basis van gangbare industriële leveringsvormen. Werkelijke prijs hangt af van druk, temperatuur, zuiverheid, contractvorm en logistiek.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
