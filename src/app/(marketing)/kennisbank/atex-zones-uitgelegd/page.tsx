import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'ATEX-zones uitgelegd: zone 1 en lekdetectie | GasProtex',
  description:
    'Zone 0, 1 en 2 bepalen welke apparatuur je in explosiegevaarlijke omgevingen mag inzetten. Wat ATEX-certificering voor lekdetectie betekent en hoe GasProtex hiermee werkt.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ATEX-zones uitgelegd: wat betekent zone 1 voor lekdetectie?',
  author: {
    '@type': 'Person',
    name: 'Marcelinus Verkuil',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  url: 'https://gasprotex.nl/kennisbank/atex-zones-uitgelegd/',
}

export default function AtexZonesPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container-main">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Home
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <Link href="/kennisbank/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Kennisbank
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>ATEX-zones uitgelegd</span>
          </div>

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              ATEX & Compliance
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              ATEX-zones uitgelegd: wat betekent zone 1 voor lekdetectie?
            </h1>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              In de petrochemie, chemie en voedingsmiddelenindustrie kom je ze overal tegen: ATEX-zones.
              Ze bepalen welke apparatuur je mag inzetten — en dus ook welke camera's voor lekdetectie
              geschikt zijn. Niet elke ultrasone camera mag in elke zone. Dit artikel legt uit wat
              ATEX-zones zijn en waarom certificering voor zone 1 ertoe doet.
            </p>
          </div>

          {/* Body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] text-2xl font-bold mt-8 mb-4">
              Wat is ATEX?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16 }}>
              ATEX staat voor <em>ATmosphère EXplosible</em> — explosieve atmosfeer. De Europese ATEX-richtlijn
              (2014/34/EU) bepaalt welke apparatuur in omgevingen met explosiegevaar gebruikt mag worden.
              Het gaat om locaties waar ontvlambare gassen, dampen of stof aanwezig kunnen zijn.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 16 }}>
              Fabrikanten moeten hun apparatuur laten certificeren voor de specifieke zone waar het ingezet
              wordt. Gebruikers zijn verplicht te werken met gecertificeerde apparatuur — en dat geldt ook
              voor meetapparatuur die tijdelijk wordt meegebracht, zoals een ultrasone camera voor lekdetectie.
            </p>

            <h2 className="text-[#0A2238] text-2xl font-bold mt-8 mb-4">
              Zone 0, 1 en 2: wat is het verschil?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16 }}>
              Voor gas en damp worden drie zones onderscheiden:
            </p>

            <div
              className="rounded-md overflow-hidden mt-4"
              style={{ border: '1px solid rgba(10,34,56,0.1)' }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F4F7FA' }}>
                    <th className="text-left text-[#0A2238] font-semibold" style={{ padding: '12px 16px', fontSize: 14 }}>Zone</th>
                    <th className="text-left text-[#0A2238] font-semibold" style={{ padding: '12px 16px', fontSize: 14 }}>Frequentie</th>
                    <th className="text-left text-[#0A2238] font-semibold" style={{ padding: '12px 16px', fontSize: 14 }}>Voorbeelden</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                    <td className="text-[#0A2238] font-medium" style={{ padding: '12px 16px', fontSize: 14 }}>Zone 0</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Continu aanwezig</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Binnenkant tanks, leidingen</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                    <td className="text-[#0A2238] font-medium" style={{ padding: '12px 16px', fontSize: 14 }}>Zone 1</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Af en toe aanwezig</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Directe omgeving van pompen, kleppen, flenzen</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                    <td className="text-[#0A2238] font-medium" style={{ padding: '12px 16px', fontSize: 14 }}>Zone 2</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Zelden aanwezig</td>
                    <td className="text-[#3D5A6E]" style={{ padding: '12px 16px', fontSize: 14 }}>Ruimere omgeving van procesinstallaties</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 16 }}>
              Zone 1 is de meest voorkomende zone bij lekdetectie-inspecties. De lekken zitten juist
              bij flenzen, kleppen en koppelingen — en dat zijn precies de plekken die in zone 1 vallen.
            </p>

            <h2 className="text-[#0A2238] text-2xl font-bold mt-8 mb-4">
              Waarom zone 1-certificering belangrijk is
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16 }}>
              Apparatuur die niet ATEX-gecertificeerd is, mag een zone 1-gebied niet in. Dat geldt ook
              voor laptops, telefoons en meetinstrumenten. Een niet-gecertificeerde ultrasone camera
              meenemen in een zone 1-omgeving is een overtreding — en een veiligheidsrisico.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 16 }}>
              Veel lekdetectie-dienstverleners werken alleen in zone 2 of buiten gezoneerde gebieden.
              Daardoor missen ze juist de plekken waar de meeste lekken zitten.
            </p>

            <h2 className="text-[#0A2238] text-2xl font-bold mt-8 mb-4">
              De Crysound 8125: gecertificeerd voor zone 1
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16 }}>
              De Crysound 8125 die GasProtex inzet is ATEX-gecertificeerd voor zone 1 (gas en damp,
              groep IIB, temperatuurklasse T4). Dat betekent dat we mogen meten op de plekken die
              er het meest toe doen — direct bij pompen, kleppen en leidingverbindingen in
              explosiegevaarlijke omgevingen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 16 }}>
              Daarnaast is GasProtex VCA-vol gecertificeerd en bekend met de VNCI-handreiking voor
              tijdelijke mobiele apparatuur in ATEX-gezoneerde gebieden. Alle benodigde documenten
              (certificaten, veiligheidsinstructies) worden standaard meegeleverd bij een offerteaanvraag.
            </p>

            <h2 className="text-[#0A2238] text-2xl font-bold mt-8 mb-4">
              Conclusie
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16 }}>
              ATEX-zones bepalen wat er in een industriële omgeving mag worden ingezet. Voor lekdetectie
              betekent zone 1-certificering dat je kunt meten waar de lekken daadwerkelijk zitten — niet
              alleen in de veilige periferie. Als je werkt met een dienstverlener die alleen in zone 2
              kan meten, mis je een groot deel van je installatie.
            </p>

            {/* CTA */}
            <div style={{ borderTop: '1px solid rgba(10,34,56,0.1)', marginTop: '48px', paddingTop: '32px' }}>
              <p className="text-[#3D5A6E]" style={{ fontSize: 15 }}>
                Vragen over je eigen installatie?{' '}
                <a
                  href={BOOKINGS_URL}
                  className="text-[#1E87B4] font-semibold hover:text-[#F07830] transition-colors"
                >
                  Plan een gratis kennismakingsgesprek →
                </a>
              </p>
            </div>

            {/* Gerelateerde artikelen */}
            <div style={{ marginTop: '64px' }}>
              <h2 className="text-[#0A2238] font-bold text-xl mb-6">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/kennisbank/wat-kost-een-persluchtlek/" className="block">
                  <div className="bg-white border border-[#0A2238]/10 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200 p-6">
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-2 leading-snug">
                      Wat kost een persluchtlek per jaar?
                    </h3>
                    <span className="text-[#1E87B4] text-sm font-semibold hover:text-[#F07830] transition-colors">
                      Lees meer →
                    </span>
                  </div>
                </Link>
                <Link href="/sectoren/petrochemie-chemie/" className="block">
                  <div className="bg-white border border-[#0A2238]/10 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200 p-6">
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Sector</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-2 leading-snug">
                      Lekdetectie voor petrochemie en chemie
                    </h3>
                    <span className="text-[#1E87B4] text-sm font-semibold hover:text-[#F07830] transition-colors">
                      Bekijk sectorpagina →
                    </span>
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
