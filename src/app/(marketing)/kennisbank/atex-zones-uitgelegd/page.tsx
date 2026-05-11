import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'ATEX-zones uitgelegd: zone 0, 1 en 2 | GasProtex',
  description:
    'Zone 0, 1 en 2 bepalen welke apparatuur je mag inzetten. Wat ATEX-certificering voor lekdetectie betekent en waarom het ertoe doet.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd',
  },
  openGraph: {
    title: 'ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie? | GasProtex',
    description: 'Wat zijn ATEX-zones en wat betekent zone 2-certificering voor lekdetectie? Uitleg zone 0, 1, 2 en stofzones 20, 21, 22.',
    url: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie? | GasProtex',
    description: 'Wat zijn ATEX-zones en wat betekent zone 2-certificering voor lekdetectie? Uitleg zone 0, 1, 2 en stofzones 20, 21, 22.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?',
  description:
    'Wat zijn ATEX-zones en wat betekent zone 2-certificering voor lekdetectie? Uitleg zone 0, 1, 2 en stofzones 20, 21, 22.',
  image: 'https://gasprotex.nl/images/gasprotex-logo.png',
  author: { '@type': 'Organization', name: 'GasProtex', url: 'https://gasprotex.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'GasProtex',
    logo: { '@type': 'ImageObject', url: 'https://gasprotex.nl/images/gasprotex-logo.png' },
  },
  datePublished: '2026-05-07T09:00:00+02:00',
  dateModified: '2026-05-07T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://gasprotex.nl/kennisbank' },
    { '@type': 'ListItem', position: 3, name: 'ATEX-zones uitgelegd', item: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd' },
  ],
}

const gasZones = [
  { zone: 'Zone 0', beschrijving: 'Continu of langdurig aanwezig', voorbeelden: 'Binnenkant van tanks, leidingen, reactorvaten, tankventilatie-uitlaten', highlight: false },
  { zone: 'Zone 1', beschrijving: 'Af en toe aanwezig bij normaal bedrijf', voorbeelden: 'Directe omgeving van pompen, kleppen, flenzen, aftappunten', highlight: false },
  { zone: 'Zone 2', beschrijving: 'Zelden en kortstondig aanwezig', voorbeelden: 'Ruimere omgeving van procesinstallaties, productievloeren', highlight: true },
]

const stofZones = [
  { zone: 'Zone 20', beschrijving: 'Continu aanwezig als wolk', voorbeelden: 'Binnenkant silo\'s, maalinstallaties', highlight: false },
  { zone: 'Zone 21', beschrijving: 'Af en toe aanwezig bij normaal bedrijf', voorbeelden: 'Directe omgeving van vulpunten, transportbanden', highlight: false },
  { zone: 'Zone 22', beschrijving: 'Zelden en kortstondig aanwezig', voorbeelden: 'Ruimere omgeving van stofverwerkende installaties', highlight: true },
]

export default function AtexZonesPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Breadcrumb */}

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              ATEX &amp; Compliance
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 7 mei 2026 · 5 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              In de petrochemie, chemie en voedingsmiddelenindustrie kom je ze overal tegen: ATEX-zones.
              Ze bepalen welke apparatuur je mag inzetten, en dus ook welke camera&apos;s voor lekdetectie
              geschikt zijn. Niet elke akoestische camera is ATEX-gecertificeerd. Dit artikel legt uit wat
              ATEX-zones zijn, hoe ze zijn ingedeeld en wat zone 2-certificering voor lekdetectie betekent.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat is ATEX?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ATEX staat voor <em>ATmosphère EXplosible</em>, explosieve atmosfeer. Er zijn twee Europese
              ATEX-richtlijnen: ATEX 114 (2014/34/EU) bepaalt welke apparatuur in omgevingen met
              explosiegevaar gebruikt mag worden. ATEX 153 (1999/92/EG) richt zich op de werkgever en
              verplicht tot zonering, risicobeoordeling en het gebruik van gecertificeerde apparatuur.
              Het gaat om locaties waar ontvlambare gassen, dampen of stof aanwezig kunnen zijn.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Fabrikanten moeten hun apparatuur laten certificeren voor de specifieke zone waar het
              ingezet wordt. Gebruikers zijn verplicht te werken met gecertificeerde apparatuur. Dat
              geldt ook voor meetapparatuur die tijdelijk wordt meegebracht, zoals een akoestische
              camera voor lekdetectie.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Zone 0, 1 en 2: de indeling voor gas en damp
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '480px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Zone', 'Explosieve atmosfeer', 'Voorbeelden'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {gasZones.map((rij) => (
                      <tr key={rij.zone} style={{ borderTop: '1px solid rgba(10,34,56,0.08)', background: rij.highlight ? '#E8F1FB' : 'transparent' }}>
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.zone}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.beschrijving}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.voorbeelden}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Zone 2 is de meest voorkomende zone op industriële productievloeren: de ruimere omgeving
              rond procesinstallaties waar een explosieve atmosfeer zelden optreedt. Zone 1 betreft de
              directe nabijheid van pompen, kleppen en flenzen en vereist strengere certificering.
              Zone 0 is het binnenwerk van tanks en leidingen; daar komt in de praktijk geen
              inspectie-apparatuur.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Zone 20, 21 en 22: de indeling voor stof
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Naast gas en damp kent ATEX een aparte zonering voor brandbaar stof:
            </p>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '480px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Zone', 'Explosieve atmosfeer (stof)', 'Voorbeelden'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stofZones.map((rij) => (
                      <tr key={rij.zone} style={{ borderTop: '1px solid rgba(10,34,56,0.08)', background: rij.highlight ? '#E8F1FB' : 'transparent' }}>
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.zone}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.beschrijving}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.voorbeelden}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Stofzones zijn relevant in de voedingsmiddelenindustrie (meel, suiker, melkpoeder),
              houtverwerking en farmaceutische productie. De Crysound 8125 is gecertificeerd voor
              zowel zone 2 (gas/damp) als zone 22 (stof).
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waarom ATEX-certificering belangrijk is voor lekdetectie
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Apparatuur die niet ATEX-gecertificeerd is, mag een gezoneerd gebied niet in. Dat geldt
              voor laptops, telefoons en meetinstrumenten. Een niet-gecertificeerde akoestische camera
              meenemen in een ATEX-zone is een overtreding en een veiligheidsrisico.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Veel lekdetectie-dienstverleners hebben geen ATEX-gecertificeerde apparatuur en werken
              uitsluitend buiten gezoneerde gebieden. Daardoor missen ze een aanzienlijk deel van de
              installatie. Juist in de zones waar lekken het grootste veiligheidsrisico vormen, wordt
              dan niet gemeten.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/lekdetectie-methoden-vergeleken" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie methoden vergeleken
              </Link>
              {'. '}ATEX-geschiktheid is een van de acht criteria waarop methoden worden vergeleken.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De Crysound 8125: gecertificeerd voor zone 2 en zone 22
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De Crysound 8125 die GasProtex inzet is ATEX-gecertificeerd voor zone 2 (gas en damp) en
              zone 22 (stof). Het is de eerste TÜV-gecertificeerde intrinsiek veilige akoestische camera,
              conform ATEX en IECEx. Dat betekent dat we mogen meten in de meeste industriële
              productieomgevingen, ook waar andere aanbieders niet mogen komen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor zone 1-gebieden (direct rond reactoren, kleppen en leidingdoorvoeren) is strengere
              apparatuur vereist. We zijn hierover direct: zone 2 dekt de meeste productievloeren, maar
              niet de zwaarste risicozones. In de praktijk is circa 80% van alle ATEX-zones
              geclassificeerd als zone 2 of zone 22. Bij twijfel over de zonering van jouw installatie
              denken we graag mee.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De VNCI-handreiking: kader voor mobiele apparatuur
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De VNCI heeft samen met Vemobin, VOTOB, NOVE en Deltalinqs de ATEX-handreiking Industrie
              opgesteld (gepubliceerd via Veiligheid Voorop). Deze handreiking geeft bedrijven handvatten
              bij het selecteren van tijdelijke mobiele apparatuur voor gebruik in ATEX-gezoneerde gebieden.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Onder voorwaarden biedt de handreiking ruimte voor maatwerk in zone 2 en zone 22, onder
              begeleiding van een ATEX-deskundige. De inzet van de Crysound 8125 past binnen dit kader.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Akoestische lekdetectie naast je vaste gasdetectie
              </Link>
              {'. Voor meer achtergrond over hoe akoestische detectie werkt in ATEX-omgevingen.'}
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt ATEX-zones en wilt weten of lekdetectie daar mogelijk is.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Met zone 2/22-certificering dekken we de meeste productieomgevingen. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">aanpak</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten wat je lekken kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-uw-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">persluchtcalculator</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt eerst sparren over de zonering van jouw installatie.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Plan een{' '}
                  <Link href="/contact" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">kennismakingsgesprek</Link>.
                </p>
              </div>
            </div>

            {/* Footer-tekst */}
            <p className="mt-12" style={{ fontSize: 15, color: '#6B8FA6', fontStyle: 'italic', lineHeight: 1.7 }}>
              GasProtex is specialist in gas- en persluchtlekdetectie voor de Nederlandse industrie.
              ATEX-gecertificeerd (zone 2/22). VCA-vol.
            </p>

            {/* CTA-blok */}
            <div className="rounded-md mt-12" style={{ background: '#0A2238', padding: '48px' }}>
              <h2 className="font-bold text-white mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                Wil je weten waar jouw lekken zitten?
              </h2>
              <p className="text-[#7AADCC] mb-8" style={{ fontSize: 15 }}>
                Een Quickscan geeft je in een dagdeel een compleet beeld van je perslucht- of gassysteem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
                  style={{ padding: '14px 32px' }}
                >
                  Vraag een Quickscan aan →
                </a>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#C2DCE8] transition-colors font-medium underline underline-offset-4"
                  style={{ fontSize: 15, paddingTop: '14px' }}
                >
                  Of plan een gratis kennismakingsgesprek
                </Link>
              </div>
            </div>

            {/* Gerelateerde artikelen */}
            <div style={{ marginTop: '64px' }}>
              <h2 className="text-[#0A2238] font-bold text-xl mb-6">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/kennisbank/lekdetectie-methoden-vergeleken" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Lekdetectie methoden vergeleken: welke past bij jouw situatie?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/welke-gassen-akoestische-lekdetectie" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Welke gassen kun je met akoestische lekdetectie opsporen?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
