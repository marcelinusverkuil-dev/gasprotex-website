'use client'

import { useState } from 'react'
import Link from 'next/link'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

const categorieen = ['Alles', 'Perslucht', 'Gaslekdetectie', 'ATEX & Compliance', 'Sector']

const artikelen = [
  {
    slug: 'atex-zones-uitgelegd',
    categorie: 'ATEX & Compliance',
    titel: 'ATEX-zones uitgelegd: wat betekent zone 1 voor lekdetectie?',
    preview:
      'Zone 0, 1 en 2 bepalen welke apparatuur je mag inzetten. Niet elke camera mag in elke zone. Wat ATEX-certificering voor lekdetectie betekent en waarom het ertoe doet.',
  },
  {
    slug: 'wat-kost-een-persluchtlek',
    categorie: 'Perslucht',
    titel: 'Wat kost een persluchtlek per jaar? Rekenmethode en voorbeelden.',
    preview:
      'Een lek van 1 mm kost al €500–€1.500 per jaar. Bij twintig lekken loopt dat snel op tot tienduizenden euro\'s. Hoe je de kosten zelf berekent en wat de meest voorkomende lekkage-oorzaken zijn.',
  },
  {
    slug: 'ultrasone-vs-traditionele-lekdetectie',
    categorie: 'Gaslekdetectie',
    titel: 'Ultrasone vs. traditionele lekdetectie: wat is het verschil?',
    preview:
      'Zeepsop, vaste detectoren, sniffer-buizen — allemaal worden ze nog gebruikt. Wat ultrasone detectie anders maakt en wanneer je welke methode inzet.',
  },
]

export default function KennisbankFilter() {
  const [actief, setActief] = useState('Alles')

  const gefilterd = actief === 'Alles'
    ? artikelen
    : artikelen.filter((a) => a.categorie === actief)

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mt-8">
        {categorieen.map((cat) => (
          <button
            key={cat}
            onClick={() => setActief(cat)}
            className="rounded-md text-sm transition-colors"
            style={{
              padding: '8px 16px',
              border: '1px solid rgba(10,34,56,0.15)',
              background: actief === cat ? '#0A2238' : 'transparent',
              color: actief === cat ? '#ffffff' : '#3D5A6E',
              cursor: 'pointer',
              fontWeight: actief === cat ? 600 : 400,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artikel-grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {gefilterd.map((artikel) => (
          <div
            key={artikel.slug}
            className="rounded-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '32px' }}
          >
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-3">
              {artikel.categorie}
            </p>
            <h3 className="font-bold text-lg text-white mb-3 leading-snug">
              {artikel.titel}
            </h3>
            <p className="text-[#C2DCE8] text-sm leading-relaxed mb-6 flex-1">
              {artikel.preview}
            </p>
            <Link
              href={`/kennisbank/${artikel.slug}/`}
              className="text-[#F07830] text-sm font-semibold hover:text-white transition-colors"
            >
              Lees meer →
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="rounded-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl mt-14"
        style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px 48px' }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-white font-bold text-2xl mb-1">
              Vragen over jouw situatie?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
              Plan een vrijblijvend kennismakingsgesprek. 30 minuten, zonder verplichtingen.
            </p>
          </div>
          <a
            href={BOOKINGS_URL}
            className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
            style={{ padding: '14px 32px' }}
          >
            Plan kennismakingsgesprek →
          </a>
        </div>
      </div>
    </>
  )
}
