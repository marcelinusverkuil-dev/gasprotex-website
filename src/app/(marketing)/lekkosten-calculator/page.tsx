'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const BEDRIJFSUREN_OPTIES = [
  { label: '8.760 uur — 24/7 continu', value: 8760 },
  { label: '2.000 uur — 250 werkdagen', value: 2000 },
]

export default function LekkostenCalculatorPage() {
  const [lekdebiet, setLekdebiet] = useState<string>('10')
  const [systeemdruk, setSysteemdruk] = useState<string>('6')
  const [bedrijfsuren, setBedrijfsuren] = useState<number>(8760)
  const [tarief, setTarief] = useState<string>('0.20')
  const [specificPower, setSpecificPower] = useState<string>('0.12')
  const [aantalLekken, setAantalLekken] = useState<string>('6')

  const resultaat = useMemo(() => {
    const debiet = parseFloat(lekdebiet) || 0
    const bar = parseFloat(systeemdruk) || 6
    const uren = bedrijfsuren
    const euro = parseFloat(tarief.replace(',', '.')) || 0.20
    const sp = parseFloat(specificPower.replace(',', '.')) || 0.12
    const aantal = parseFloat(aantalLekken) || 6

    const m3jaar = (debiet / 1000 * 60) * uren
    const drukFactor = 1 + (bar / 10)
    const kWhJaar = m3jaar * sp * drukFactor * aantal
    const euroJaar = kWhJaar * euro
    const co2kg = kWhJaar * 0.22
    const co2ton = co2kg / 1000
    const autoKm = co2kg / 0.12

    return { m3jaar, kWhJaar, euroJaar, co2ton, autoKm }
  }, [lekdebiet, systeemdruk, bedrijfsuren, tarief, specificPower, aantalLekken])

  const fmt = (n: number, decimals = 0) =>
    n.toLocaleString('nl-NL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  return (
    <>
      {/* Header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <p className="text-[#7AADCC] mb-3" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Gratis tool
          </p>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Lekkostencalculator
          </h1>
          <p className="text-[#4A6880] mt-4" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}>
            Bereken wat persluchtlekken u jaarlijks kosten — in euro&apos;s, energie en CO₂.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ background: '#ffffff', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Invoer */}
            <div
              className="rounded-2xl"
              style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '48px' }}
            >
              <p className="text-[#7AADCC] mb-8" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Invoer
              </p>

              <div className="flex flex-col gap-6">

                {/* Lekdebiet */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Lekdebiet (l/min)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={lekdebiet}
                    onChange={e => setLekdebiet(e.target.value)}
                    className="w-full rounded-lg text-white font-semibold outline-none focus:ring-2 focus:ring-[#D97737]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 16px', fontSize: 16 }}
                    placeholder="bijv. 10"
                  />
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 12 }}>
                    Afkomstig van detectietool of rapportage
                  </p>
                </div>

                {/* Systeemdruk */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Systeemdruk (bar)
                    <span className="text-[#7AADCC] ml-2" style={{ fontSize: 12 }}>standaard: 6</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={systeemdruk}
                    onChange={e => setSysteemdruk(e.target.value)}
                    className="w-full rounded-lg text-white font-semibold outline-none focus:ring-2 focus:ring-[#D97737]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 16px', fontSize: 16 }}
                  />
                </div>

                {/* Bedrijfsuren */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Bedrijfsuren per jaar
                  </label>
                  <div className="flex gap-3">
                    {BEDRIJFSUREN_OPTIES.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setBedrijfsuren(opt.value)}
                        className="flex-1 rounded-lg text-left transition-all"
                        style={{
                          background: bedrijfsuren === opt.value ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)',
                          border: bedrijfsuren === opt.value ? '1px solid #D97737' : '1px solid rgba(255,255,255,0.12)',
                          padding: '12px 14px',
                        }}
                      >
                        <span className="block font-semibold text-white" style={{ fontSize: 15 }}>
                          {opt.value.toLocaleString('nl-NL')}
                        </span>
                        <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>
                          {opt.value === 8760 ? '24/7 continu' : '250 werkdagen'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Elektriciteitstarief */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Elektriciteitstarief (€/kWh)
                    <span className="text-[#7AADCC] ml-2" style={{ fontSize: 12 }}>standaard: 0,20</span>
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={tarief}
                    onChange={e => setTarief(e.target.value)}
                    className="w-full rounded-lg text-white font-semibold outline-none focus:ring-2 focus:ring-[#D97737]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 16px', fontSize: 16 }}
                  />
                </div>

                {/* Specific Power */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Specific Power (kWh/m³)
                    <span className="text-[#7AADCC] ml-2" style={{ fontSize: 12 }}>standaard: 0,12</span>
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={specificPower}
                    onChange={e => setSpecificPower(e.target.value)}
                    className="w-full rounded-lg text-white font-semibold outline-none focus:ring-2 focus:ring-[#D97737]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 16px', fontSize: 16 }}
                  />
                </div>

                {/* Aantal lekken */}
                <div>
                  <label className="block text-[#C2DCE8] mb-2" style={{ fontSize: 14 }}>
                    Aantal persluchtlekkages
                    <span className="text-[#7AADCC] ml-2" style={{ fontSize: 12 }}>standaard: 6 (sectorgemiddelde)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={aantalLekken}
                    onChange={e => setAantalLekken(e.target.value)}
                    className="w-full rounded-lg text-white font-semibold outline-none focus:ring-2 focus:ring-[#D97737]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 16px', fontSize: 16 }}
                  />
                </div>

              </div>
            </div>

            {/* Uitvoer */}
            <div className="flex flex-col gap-6">

              {/* Hoofdkaart: kosten */}
              <div
                className="rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #D97737 0%, #C4631E 100%)', padding: '48px' }}
              >
                <p className="text-orange-100 mb-2" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Totale kosten van de lekkage(s) per jaar
                </p>
                <p className="font-bold text-white" style={{ fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  €{fmt(resultaat.euroJaar)}
                </p>
                <p className="text-orange-100 mt-3" style={{ fontSize: 14 }}>
                  Op basis van {aantalLekken || 6} lek{Number(aantalLekken) === 1 ? '' : 'ken'} van {lekdebiet || 0} l/min bij {systeemdruk || 6} bar
                </p>
              </div>

              {/* Drie kleinere kaarten */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div
                  className="rounded-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '28px 24px' }}
                >
                  <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                    Energieverbruik
                  </p>
                  <p className="font-bold text-white" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {fmt(resultaat.kWhJaar)}
                  </p>
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 13 }}>kWh/jaar</p>
                </div>

                <div
                  className="rounded-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '28px 24px' }}
                >
                  <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                    CO₂-uitstoot
                  </p>
                  <p className="font-bold text-white" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {fmt(resultaat.co2ton, 2)}
                  </p>
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 13 }}>ton CO₂/jaar</p>
                </div>

                <div
                  className="rounded-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #0F2D4B, #1E5A8A)', padding: '28px 24px' }}
                >
                  <p className="text-[#7AADCC] mb-1" style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                    Auto-equivalent
                  </p>
                  <p className="font-bold text-white" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {fmt(resultaat.autoKm)}
                  </p>
                  <p className="text-[#7AADCC] mt-1" style={{ fontSize: 13 }}>km/jaar</p>
                </div>

              </div>

              {/* CTA */}
              <div
                className="rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: '#F5F7FA', border: '1px solid #E2E8F0', padding: '28px 32px' }}
              >
                <div>
                  <p className="font-semibold text-[#0F2D4B]" style={{ fontSize: 16 }}>
                    Wilt u weten hoeveel ú lekt?
                  </p>
                  <p className="text-[#4A6880] mt-1" style={{ fontSize: 14 }}>
                    Plan een gratis quickscan in — resultaat dezelfde dag.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold flex-shrink-0 transition-colors hover:text-[#C4631E]"
                  style={{ color: '#D97737', fontSize: 14 }}
                >
                  Afspraak maken
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>

          {/* Rekenmethode */}
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
