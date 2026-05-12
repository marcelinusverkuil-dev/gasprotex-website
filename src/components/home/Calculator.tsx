'use client'

import { useState } from 'react'
import Link from 'next/link'

const selectStyle: React.CSSProperties = {
  width: '100%',
  background: 'white',
  border: '1px solid rgba(10,34,56,0.15)',
  borderRadius: 5,
  padding: '9px 12px',
  color: '#0A2238',
  fontSize: 13,
  fontFamily: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
}

export default function Calculator() {
  const [kw, setKw] = useState(200)
  const [pct, setPct] = useState(25)
  const [eur, setEur] = useState(0.20)

  const verlies = Math.round(kw * 8760 * eur * (pct / 100))
  const co2 = Math.round(kw * 8760 * (pct / 100) * 0.22 / 1000)
  const verliesFormatted = new Intl.NumberFormat('nl-NL', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
  }).format(verlies)

  return (
    <div style={{ background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, padding: 24 }}>

      {/* Compressorvermogen */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <label htmlFor="calc-kw" style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)' }}>
            Compressorvermogen
          </label>
          <span style={{ fontSize: 13.5, color: '#0A2238', fontWeight: 500 }}>{kw} kW</span>
        </div>
        <input
          id="calc-kw"
          type="range" min={50} max={500} step={10} value={kw}
          onChange={(e) => setKw(Number(e.target.value))}
          className="gp-range"
          aria-label="Compressorvermogen in kW"
        />
      </div>

      {/* Lekpercentage */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <label htmlFor="calc-pct" style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)' }}>
            Lekpercentage
          </label>
          <span style={{ fontSize: 13.5, color: '#0A2238', fontWeight: 500 }}>{pct} %</span>
        </div>
        <select id="calc-pct" value={pct} onChange={(e) => setPct(Number(e.target.value))} style={selectStyle}>
          <option value={15}>15 % (goed onderhouden)</option>
          <option value={20}>20 % (gemiddeld)</option>
          <option value={25}>25 % (industriestandaard)</option>
          <option value={30}>30 % (verouderd systeem)</option>
        </select>
      </div>

      {/* Stroomprijs */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <label htmlFor="calc-eur" style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)' }}>
            Stroomprijs
          </label>
          <span style={{ fontSize: 13.5, color: '#0A2238', fontWeight: 500 }}>
            € {eur.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <select id="calc-eur" value={eur} onChange={(e) => setEur(Number(e.target.value))} style={selectStyle}>
          <option value={0.15}>€ 0,15 / kWh</option>
          <option value={0.20}>€ 0,20 / kWh</option>
          <option value={0.26}>€ 0,26 / kWh</option>
        </select>
      </div>

      {/* Resultaat */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20,
        borderTop: '1px solid rgba(10,34,56,0.1)', marginTop: 18, paddingTop: 18,
      }}>
        <div>
          <p style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
            Jouw verlies per jaar
          </p>
          <p style={{ fontSize: 28, fontWeight: 500, color: '#F07830', letterSpacing: '-0.5px', margin: 0, lineHeight: 1.1 }}>
            {verliesFormatted}
          </p>
        </div>
        <div>
          <p style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
            CO₂-uitstoot
          </p>
          <p style={{ fontSize: 22, fontWeight: 500, color: '#0A2238', letterSpacing: '-0.3px', margin: 0, lineHeight: 1.1 }}>
            {co2} ton
          </p>
        </div>
      </div>

      <Link
        href="/bereken-uw-besparing/perslucht"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#0A2238', textDecoration: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', paddingBottom: 1, marginTop: 16 }}
      >
        Naar de volledige calculator →
      </Link>
    </div>
  )
}
