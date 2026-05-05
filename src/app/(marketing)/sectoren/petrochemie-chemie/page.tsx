import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Script from 'next/script'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Lekdetectie voor petrochemie en chemie | ATEX | GasProtex',
  description:
    'ATEX-gecertificeerde lekdetectie voor chemie, petrochemie en tankterminals. Zone 1 inspectie. Levert input voor BRZO-rapportage en F-gassenverordening.',
  alternates: {
    canonical: 'https://gasprotex.nl/sectoren/petrochemie-chemie/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lekdetectie voor petrochemie en chemie',
  provider: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  areaServed: 'NL',
  description:
    'ATEX-gecertificeerde akoestische lekdetectie voor petrochemie, chemieclusters en tankterminals. Zone 1. Input voor BRZO en F-gassenverordening.',
  url: 'https://gasprotex.nl/sectoren/petrochemie-chemie/',
}

const gassen = [
  { tekst: 'Procesgassen — methaan, ethyleen, waterstof, H₂S' },
  { tekst: 'F-gassen — koelinstallaties, F-gassenverordening' },
  { tekst: 'Perslucht — instrumentatie, pneumatische aandrijving' },
  { tekst: 'Stikstof, CO₂, ammoniak — procesgebonden' },
]

const compliance = [
  {
    titel: 'BRZO-rapportage',
    tekst:
      'Wij leveren input voor jouw BRZO-rapport. Geen audit — wel de feitelijke lekdata die je nodig hebt voor je emissie-inventarisatie.',
  },
  {
    titel: 'F-gassenverordening',
    tekst:
      'Verplichte lekcontrole voor koelinstallaties met F-gassen. Onze scan levert de documentatie die je nodig hebt.',
  },
  {
    titel: 'ISO 11011',
    tekst: 'Perslucht-audit conform ISO 11011. Onze rapportage voldoet aan de norm-vereisten.',
  },
  {
    titel: 'ESG-rapportage',
    tekst:
      'Perslucht- en gasverlies draagt bij aan Scope 1 en 2 emissies. Onze data levert concrete input voor je duurzaamheidsverslag.',
  },
]

export default function PetrochemieChemiePage() {
  return (
    <>
      <Script
        id="petrochemie-chemie-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sectie 1 — Hero */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main">

          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Home
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <Link href="/sectoren/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Sectoren
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>Petrochemie & Chemie</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1
                className="font-bold text-[#0A2238] mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Lekdetectie voor petrochemie en chemie.
              </h1>
              <p className="text-[#3D5A6E] text-lg leading-relaxed">
                ATEX-gecertificeerd voor zone 1. Voor BRZO-bedrijven,
                chemieclusters en tankterminals in heel Nederland.
              </p>
            </div>

            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3', background: '#F4F7FA' }}
            >
              <Image
                src="/images/sectoren/petrochemie-chemie.jpg"
                alt="Lekdetectie voor petrochemie en chemie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* Sectie 2 — ATEX + gassen */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '48px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <div>
                <p className="text-[#7AADCC] text-xs tracking-widest uppercase font-medium mb-4">
                  ATEX zone 1 gecertificeerd
                </p>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-4" style={{ lineHeight: 1.2 }}>
                  Meten waar het ertoe doet.
                </h2>
                <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Onze Crysound 8125 is ATEX-gecertificeerd voor zone 1. We meten in
                  explosiegevaarlijke omgevingen waar de meeste inspectie-apparatuur
                  niet mag komen.
                </p>
                <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  VCA-vol gecertificeerd als operator. Bekend met de VNCI-handreiking
                  voor tijdelijke mobiele apparatuur in ATEX-gezoneerde gebieden.
                </p>
                <Link
                  href="/kennisbank/atex-zones-uitgelegd/"
                  className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                  style={{ fontSize: 14 }}
                >
                  Meer over ATEX-zones →
                </Link>
              </div>

              <div>
                <p className="text-[#7AADCC] text-xs tracking-widest uppercase font-medium mb-4">
                  Welke gassen
                </p>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-4" style={{ lineHeight: 1.2 }}>
                  Elk gas onder druk is meetbaar.
                </h2>
                <div className="space-y-3">
                  {gassen.map((gas) => (
                    <div key={gas.tekst} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#F07830] mt-2" />
                      <p className="text-[#3D5A6E]" style={{ fontSize: 15 }}>
                        {gas.tekst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3 — Compliance ondersteuning */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '48px' }}
          >
            <h2 className="text-[#0A2238] font-bold text-2xl mb-8" style={{ lineHeight: 1.2 }}>
              Hoe onze scan jouw compliance ondersteunt
            </h2>

            <div className="space-y-6">
              {compliance.map((item) => (
                <div key={item.titel} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#F07830] mt-2" />
                  <div>
                    <p className="text-[#0A2238] font-semibold mb-1">{item.titel}</p>
                    <p className="text-[#3D5A6E] text-sm leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#3D5A6E] mt-8" style={{ fontSize: 15 }}>
              Wij zijn geen auditor en geen certificeerder. Wij leveren de feitelijke lekdata — jij gebruikt
              die in je eigen compliance-traject.
            </p>

            <Link
              href="/diensten/"
              className="inline-block text-[#F07830] hover:text-[#C4631E] font-semibold transition-colors mt-4"
              style={{ fontSize: 14 }}
            >
              Bekijk onze diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Sectie 4 — CTA */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '40px 48px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-1">
                  ATEX-gecertificeerde inspectie nodig?
                </h2>
                <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                  Plan een vrijblijvend gesprek. We bespreken wat past bij jouw situatie.
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
        </div>
      </section>
    </>
  )
}
