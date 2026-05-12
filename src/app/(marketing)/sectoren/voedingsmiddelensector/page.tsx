import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Gaslekdetectie in de voedingsmiddelensector | GasProtex',
  description:
    'Akoestische lekdetectie in food-productie zonder productiestop. Conform HACCP. Bespaar op perslucht en garandeer voedselveiligheid. Vraag een quickscan aan.',
  alternates: {
    canonical: 'https://gasprotex.nl/sectoren/voedingsmiddelensector',
  },
  openGraph: {
    title: 'Gaslekdetectie in de voedingsmiddelensector | GasProtex',
    description: 'Akoestische lekdetectie in food-productie zonder productiestop. Conform HACCP. Bespaar op perslucht en garandeer voedselveiligheid.',
    url: 'https://gasprotex.nl/sectoren/voedingsmiddelensector',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Gaslekdetectie in de voedingsmiddelensector | GasProtex',
    description: 'Akoestische lekdetectie in food-productie zonder productiestop. Conform HACCP. Vraag een quickscan aan.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gaslekdetectie in de voedingsmiddelensector',
  url: 'https://gasprotex.nl/sectoren/voedingsmiddelensector',
  description: 'Akoestische lekdetectie in food-productie zonder productiestop. Conform HACCP. Bespaar op perslucht en garandeer voedselveiligheid.',
  provider: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  serviceType: 'Lekdetectie voor voedingsmiddelenindustrie',
  areaServed: { '@type': 'Country', name: 'Nederland' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Voedingsmiddelensector, zuivel, vleesverwerking, brouwerijen, frisdrank',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl' },
    { '@type': 'ListItem', position: 2, name: 'Sectoren', item: 'https://gasprotex.nl/sectoren' },
    { '@type': 'ListItem', position: 3, name: 'Voedingsmiddelensector', item: 'https://gasprotex.nl/sectoren/voedingsmiddelensector' },
  ],
}

const gassen = [
  {
    label: 'Perslucht',
    tekst:
      'Verpakkingslijnen, transportbanden, instrumentatie, pneumatische aandrijving. Bij de meeste voedingsbedrijven is perslucht de grootste verborgen energiekostenpost: 20-30% gaat verloren door lekken.',
  },
  {
    label: 'CO₂',
    tekst:
      'Koolzuurdistributie in brouwerijen en frisdrankenproductie. CO₂-lekken zijn niet alleen kostbaar maar ook een veiligheidsrisico in afgesloten ruimtes.',
  },
  {
    label: 'Ammoniak (NH₃)',
    tekst:
      'Koelinstallaties en vriestunnels in zuivel, vleeswaren en diepvriesproductie. Ammoniak is giftig: vroegtijdige detectie voorkomt productiestilstand en incidenten.',
  },
  {
    label: 'Stikstof (N₂)',
    tekst:
      'MAP-verpakking (Modified Atmosphere Packaging) en conserveringssystemen. Stikstof-lekken kosten geld en verminderen verpakkingskwaliteit.',
  },
]

const voorbeelden = [
  {
    titel: 'Zuivelbedrijf, Friesland',
    tekst:
      'Bij een zuivelbedrijf met meerdere productielocaties vonden we in één ochtend ruim 30 persluchtlekken. Samen goed voor meer dan €35.000 verloren energie per jaar. De meeste lekken zaten op koppelingen die bij regulier onderhoud niet worden gecontroleerd.',
  },
  {
    titel: 'Brouwerij, Noord-Brabant',
    tekst:
      'CO₂-distributielijn lekte op meerdere plekken tussen kelder en taplijn. Niet hoorbaar, niet zichtbaar. Wel meetbaar met ultrasoon. Na herstel: merkbaar lagere CO₂-inkoopkosten.',
  },
  {
    titel: 'Vleesverwerker, Gelderland',
    tekst:
      'NH₃-koelinstallatie met een intermitterend lek dat door vaste detectoren niet werd opgepikt. Ultrasone scan lokaliseerde het lek in 20 minuten.',
  },
]

export default function VoedingsmiddelensectorPage() {
  return (
    <>
      <Script
        id="voedingsmiddelensector-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Sectie 1 — Hero */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="relative">
              <h1
                className="font-bold text-[#0A2238]"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 15 }}
              >
                Gaslekdetectie in de voedingsmiddelensector
              </h1>
              <p className="text-[#3D5A6E] text-lg leading-relaxed">
                Perslucht, CO₂, ammoniak en stikstof: wij vinden de lekken
                die je productie geld kosten of je installatie in gevaar brengen.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-8 lg:absolute lg:bottom-0 lg:left-0">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                  style={{ padding: '14px 32px' }}
                >
                  Vraag een Quickscan aan →
                </a>
                <a
                  href="/bereken-uw-besparing/perslucht"
                  className="inline-flex items-center justify-center border border-[#0A2238]/25 text-[#0A2238] hover:border-[#0A2238]/50 text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                  style={{ padding: '14px 32px' }}
                >
                  Of bereken eerst je besparing →
                </a>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '1264 / 758', background: '#F4F7FA' }}>
              <Image
                src="/images/sectoren/voedingsmiddelensector.png"
                alt="Gaslekdetectie in de voedingsmiddelensector"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* Sectie 2 — Uitdaging */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >
            <h2 className="text-[#0A2238] font-bold text-2xl mb-8" style={{ lineHeight: 1.2 }}>
              Persluchtkosten en hygiëne-eisen in de food-industrie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gassen.map((gas) => (
                <div key={gas.label}>
                  <p className="text-[#F07830] text-sm font-semibold mb-2">{gas.label}</p>
                  <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                    {gas.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3 — Hoe het werkt */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >
            <h2 className="text-[#0A2238] font-bold text-2xl mb-8" style={{ lineHeight: 1.2 }}>
              Lekdetectie tijdens productie, conform HACCP
            </h2>

            <div>
              {voorbeelden.map((v, i) => (
                <div key={v.titel} className="pl-6" style={{ marginTop: i === 0 ? 0 : '32px' }}>
                  <p className="text-[#0A2238] font-semibold mb-2">{v.titel}</p>
                  <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15 }}>
                    {v.tekst}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#3D5A6E] mt-8" style={{ fontSize: 15 }}>
              Herkenbaar? De meeste voedingsbedrijven hebben lekken die bij regulier onderhoud niet worden
              gevonden. Een ultrasone scan brengt ze in een dagdeel in kaart.
            </p>

            <Link
              href="/diensten"
              className="inline-block text-[#F07830] hover:text-[#C4631E] font-semibold transition-colors mt-4"
              style={{ fontSize: 14 }}
            >
              Bekijk onze diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Sectie 4 — Volgende stappen */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >
            <h2 className="text-[#0A2238] font-bold text-2xl mb-6" style={{ lineHeight: 1.2 }}>
              Voor zuivel, brouwerij, vlees en aardappelverwerking
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
                <Link
                  href="/bereken-uw-besparing/perslucht"
                  className="text-[#1E87B4] hover:text-[#0A2238] transition-colors font-medium underline-offset-2"
                  style={{ fontSize: 15 }}
                >
                  Bereken uw persluchtverlies →
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
                <Link
                  href="/contact"
                  className="text-[#1E87B4] hover:text-[#0A2238] transition-colors font-medium underline-offset-2"
                  style={{ fontSize: 15 }}
                >
                  Vraag een quickscan voor uw productielocatie →
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
                <Link
                  href="/kennisbank/wat-kost-een-persluchtlek"
                  className="text-[#1E87B4] hover:text-[#0A2238] transition-colors font-medium underline-offset-2"
                  style={{ fontSize: 15 }}
                >
                  Lees: wat kost een persluchtlek per jaar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 5 — CTA */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '20px 24px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-[#0A2238] font-bold text-2xl">
                  Akoestische lekdetectie zonder productiestop of besmetting
                </h2>
              </div>
              <Link
                href="/bereken-uw-besparing/perslucht"
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap flex-shrink-0"
                style={{ padding: '14px 32px' }}
              >
                Bereken jouw besparing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
