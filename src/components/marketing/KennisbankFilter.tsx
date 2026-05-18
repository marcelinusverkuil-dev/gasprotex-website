'use client'

import { useState } from 'react'
import Link from 'next/link'

const categorieen = ['Alles', 'Perslucht', 'Gaslekdetectie', 'ATEX & Compliance', 'Afwegingen']

const artikelen = [
  {
    slug: 'iso-11011-persluchtaudit',
    categorie: 'ATEX & Compliance',
    titel: 'ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op?',
    preview:
      'ISO 11011 is de norm voor persluchtaudits. Hoe past lekdetectie daarin? Uitleg over de drie subsystemen, wat de norm verwacht en wat een audit je concreet oplevert.',
  },
  {
    slug: 'atex-zones-uitgelegd',
    categorie: 'ATEX & Compliance',
    titel: 'ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?',
    preview:
      'Zone 0, 1 en 2 bepalen welke apparatuur je mag inzetten. Niet elke camera mag in elke zone. Wat ATEX-certificering voor lekdetectie betekent en waarom het ertoe doet.',
  },
  {
    slug: 'lekdetectie-in-atex-zones',
    categorie: 'ATEX & Compliance',
    titel: 'Lekdetectie in ATEX-zones: methodes en compliance',
    preview:
      'Vier methodes naast elkaar, wat de zone-classificatie betekent voor je keuze, en hoe akoestische camera-inspectie past in ATEX 153 en BRZO-compliance. De pillar van ons ATEX-cluster.',
  },
  {
    slug: 'wat-kost-een-persluchtlek',
    categorie: 'Perslucht',
    titel: 'Wat kost een persluchtlek per jaar? Rekenmethode en voorbeelden.',
    preview:
      'Een lek van 1 mm kost al €500–€1.500 per jaar. Bij twintig lekken loopt dat snel op tot tienduizenden euro\'s. Hoe je de kosten zelf berekent en wat de meest voorkomende lekkage-oorzaken zijn.',
  },
  {
    slug: 'akoestische-camera-kopen-of-dienst-inkopen',
    categorie: 'Afwegingen',
    titel: 'Akoestische camera kopen of dienst inkopen?',
    preview:
      'Eigen camera vanaf €40.000 plus operator en kalibratie, of dienst-inkoop vanaf €2.500 per Quickscan? Cijfers, scenario\'s en een beslismatrix voor de afweging.',
  },
  {
    slug: 'waar-zitten-persluchtlekken',
    categorie: 'Perslucht',
    titel: 'Persluchtsysteem in kaart: waar lekken meestal zitten',
    preview:
      'Van compressorkamer tot pneumatische cilinder: dit zijn de tien meest voorkomende leklocaties in een persluchtsysteem. Met praktische tips om lekken te voorkomen.',
  },
  {
    slug: 'lekdetectie-normen-industriele-gassen',
    categorie: 'Gaslekdetectie',
    titel: 'Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399',
    preview:
      'Overzicht van LDAR, EPA Method 21, NTA 8399, PGS-13 en de EU Methaanverordening. Hoe akoestische lekdetectie past in het normenlandschap voor de Nederlandse industrie.',
  },
  {
    slug: 'lekdetectie-methoden-vergeleken',
    categorie: 'Gaslekdetectie',
    titel: 'Lekdetectie methoden vergeleken: welke past bij jouw situatie?',
    preview:
      'Er zijn meerdere manieren om gas- en persluchtlekken op te sporen. Elk met eigen sterke en zwakke kanten. In dit artikel vergelijken we de vijf meest gebruikte methoden.',
  },
  {
    slug: 'akoestische-lekdetectie-naast-vaste-gasdetectie',
    categorie: 'Gaslekdetectie',
    titel: 'Akoestische lekdetectie naast je vaste gasdetectie: waar zit de aanvulling?',
    preview:
      'Vaste gasdetectie heeft blinde vlekken. Lees waar ze zitten en hoe akoestische lekdetectie (ultrasoon) ze aanvult. Niet als vervanging, maar als aanvulling.',
  },
  {
    slug: 'welke-gassen-akoestische-lekdetectie',
    categorie: 'Gaslekdetectie',
    titel: 'Welke gassen kun je met akoestische lekdetectie opsporen?',
    preview:
      'Akoestische lekdetectie werkt op elk gas onder druk: van perslucht tot waterstof, ammoniak en methaan. Per gastype: toepassing, risico en sector.',
  },
  {
    slug: 'waterstoflekdetectie',
    categorie: 'Gaslekdetectie',
    titel: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten',
    preview:
      'IR-sensoren zijn blind voor H₂. Katalytische sensoren hebben beperkingen. OGI werkt niet. Overzicht van detectiemethoden voor waterstof en de rol van akoestische lekdetectie.',
  },
  {
    slug: 'kruisgevoeligheid-vaste-gasdetectie',
    categorie: 'Gaslekdetectie',
    titel: 'Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet',
    preview:
      'Kruisgevoeligheid veroorzaakt valse alarmen en gemiste lekken bij vaste gasdetectoren. Hoe het werkt, welke combinaties voorkomen en waarom akoestische detectie dit omzeilt.',
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
              border: actief === cat ? '1px solid #0A2238' : '1px solid #E8EDF2',
              background: '#ffffff',
              color: '#0A2238',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artikel-grid */}
      <div className="mt-16" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gefilterd.map((artikel) => (
          <div key={artikel.slug} style={{ padding: '12px' }}>
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 flex flex-col"
            style={{ background: '#ffffff', padding: '32px', height: '100%' }}
          >
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-3">
              {artikel.categorie}
            </p>
            <h3 className="font-bold text-lg text-[#0A2238] mb-3 leading-snug">
              {artikel.titel}
            </h3>
            <p className="text-[#3D5A6E] text-sm leading-relaxed mb-6 flex-1">
              {artikel.preview}
            </p>
            <Link
              href={`/kennisbank/${artikel.slug}/`}
              className="text-[#F07830] text-sm font-semibold hover:text-[#C4631E] transition-colors"
            >
              Lees meer →
            </Link>
          </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
