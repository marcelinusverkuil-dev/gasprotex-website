import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399 | GasProtex',
  description:
    'Overzicht van normen en programma\'s voor gaslekdetectie in de Nederlandse industrie. LDAR, EPA Method 21, NTA 8399, PGS-13 en hoe akoestische detectie erin past.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/lekdetectie-normen-industriele-gassen',
  },
  openGraph: {
    title: 'Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399',
    description: 'Overzicht van normen en programma\'s voor gaslekdetectie in de Nederlandse industrie. LDAR, EPA Method 21, NTA 8399, PGS-13 en hoe akoestische detectie erin past.',
    url: 'https://gasprotex.nl/kennisbank/lekdetectie-normen-industriele-gassen/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399',
    description: 'Overzicht van normen en programma\'s voor gaslekdetectie in de Nederlandse industrie. LDAR, EPA Method 21, NTA 8399, PGS-13 en hoe akoestische detectie erin past.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399',
  description:
    'Overzicht van normen en programma\'s voor gaslekdetectie in de Nederlandse industrie. LDAR, EPA Method 21, NTA 8399, PGS-13 en hoe akoestische detectie erin past.',
  author: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GasProtex',
    logo: { '@type': 'ImageObject', url: 'https://gasprotex.nl/images/gasprotex-logo.png' },
  },
  image: 'https://gasprotex.nl/images/gasprotex-logo.png',
  datePublished: '2026-05-08T09:00:00+02:00',
  dateModified: '2026-05-08T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/lekdetectie-normen-industriele-gassen/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Kennisbank', url: 'https://gasprotex.nl/kennisbank' },
  { name: 'Lekdetectie-normen industriële gassen', url: 'https://gasprotex.nl/kennisbank/lekdetectie-normen-industriele-gassen' },
])

const normenTabel = [
  { norm: 'EPA Method 21 / EN 15446', doel: 'VOS-lekdetectie via FID/PID (puntmeting per component)', toepassing: 'BRZO-bedrijven, raffinaderijen, chemieclusters' },
  { norm: 'NTA 8399:2015', doel: 'OGI-richtlijn voor detectie diffuse VOS-emissies', toepassing: 'Op- en overslagbedrijven, petrochemie, tankopslag' },
  { norm: 'ISO 15848', doel: 'Fugitive emissions van industriële kleppen (typetest)', toepassing: 'Klepfabrikanten en -specificeerders' },
  { norm: 'IED (2010/75/EU)', doel: 'Industriële emissies beperken (brede richtlijn)', toepassing: 'Alle vergunningplichtige industriële installaties' },
  { norm: 'EU Methaanverordening (2024/1787)', doel: 'Verplicht LDAR en methaanmonitoring olie/gas', toepassing: 'Olie- en gaswinning, transport, opslag' },
  { norm: 'PGS-13', doel: 'Ammoniak-koelinstallaties (veiligheid + monitoring)', toepassing: 'F&B, logistiek, koude-opslag' },
  { norm: 'PGS-29', doel: 'Opslag gevaarlijke stoffen (lekdetectie als onderdeel)', toepassing: 'Chemie, tankopslag, distributie' },
]

export default function LekdetectieNormenIndustrieleGassenPage() {
  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              Gaslekdetectie
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 8 mei 2026 · 6 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ fontStyle: 'italic' }}>
              Voor perslucht bestaat ISO 11011. Maar voor industriële gassen is het normenlandschap anders:
              gefragmenteerd over meerdere normen, richtlijnen en programma&apos;s, elk met een eigen doel.
              In dit artikel geven we een overzicht van de belangrijkste normen en programma&apos;s voor
              gaslekdetectie in de Nederlandse industrie, en hoe akoestische lekdetectie (ultrasoon) daarin past.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              LDAR: Leak Detection and Repair
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              LDAR is geen norm maar een programma: een gestructureerde aanpak voor het opsporen en repareren
              van fugitieve emissies (onbedoelde lekken) van vluchtige organische stoffen (VOS) en methaan.
              Het concept komt uit de Verenigde Staten, waar de EPA het in de jaren &apos;80 introduceerde voor
              raffinaderijen en chemische fabrieken.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een LDAR-programma omvat vier stappen: het inventariseren van alle componenten die kunnen lekken
              (kleppen, pompen, flenzen, connectoren), het periodiek inspecteren van die componenten, het repareren
              van gevonden lekken en het documenteren van alles.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In Nederland voeren BRZO-bedrijven en chemieclusters LDAR-programma&apos;s uit, vaak in het kader
              van de Europese Industrial Emissions Directive (IED, 2010/75/EU). Diverse gespecialiseerde
              dienstverleners voeren deze programma&apos;s uit voor de petrochemie en chemie.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De meetmethoden binnen LDAR
            </h2>

            <h3 className="text-[#0A2238] font-bold mt-6 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              EPA Method 21 / EN 15446:2008
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De klassieke meetmethode: een technicus loopt met een handheld FID (Flame Ionization Detector)
              of PID (Photo Ionization Detector) langs elke getagde component en meet de VOS-concentratie in
              ppm. De Europese variant is vastgelegd in EN 15446:2008.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het is een bewezen methode, maar arbeidsintensief. Bij een grote installatie met duizenden
              componenten kan een volledige inspectieronde weken duren. Elke component moet individueel
              benaderd worden.
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              OGI: Optical Gas Imaging (NTA 8399:2015)
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              OGI is een snellere screeningsmethode. Een infraroodcamera maakt gaswolken zichtbaar in
              real-time. In Nederland is de werkwijze vastgelegd in NTA 8399:2015 (&apos;Luchtkwaliteit –
              Richtlijnen voor de detectie van diffuus vrijkomende vluchtige organische stoffen met optical
              gas imaging&apos;), een technische afspraak gepubliceerd door NEN.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              OGI kan worden ingezet als onderdeel van een LDAR-programma (de zogenaamde &apos;SMART LDAR&apos;-aanpak),
              voor het inspecteren van opslagtanks en bij verladingen. Het voordeel: snellere screening van
              grote installaties. De beperking: OGI werkt alleen bij gassen die IR-straling absorberen en
              geeft geen exacte debietmeting.
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              EU Methaanverordening: Verordening (EU) 2024/1787
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De EU-methaanverordening, in werking getreden op 4 augustus 2024, stelt strengere eisen aan
              de opsporing en rapportage van methaanlekkages in de olie- en gassector. Operators moesten
              vóór 5 mei 2025 een LDAR-programma indienen bij de bevoegde autoriteiten. De verordening
              stelt specifieke eisen aan meetfrequentie, detectiedrempels (type 1: 7.000 ppm of 17 g/h,
              type 2: 500 ppm) en reparatietermijnen (binnen 5 dagen na detectie). Per 5 februari 2026
              geldt een verbod op routinematig affakkelen en venting. Voor bedrijven in de Nederlandse
              olie- en gassector is dit een directe aanscherping van de bestaande praktijk.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Het normenlandschap in een overzicht
            </h2>

            {/* Tabel normen */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '560px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Norm / richtlijn', 'Doel', 'Toepassing in Nederland'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 14 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {normenTabel.map((rij, i) => (
                      <tr
                        key={rij.norm}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: i % 2 === 0 ? '#ffffff' : '#F4F7FA',
                        }}
                      >
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 14, whiteSpace: 'nowrap' }}>{rij.norm}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, lineHeight: 1.5 }}>{rij.doel}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, lineHeight: 1.5 }}>{rij.toepassing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              PGS-richtlijnen: de Nederlandse praktijk
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De Publicatiereeks Gevaarlijke Stoffen (PGS) is specifiek Nederlands en wordt gebruikt door
              het bevoegd gezag bij vergunningverlening. Twee richtlijnen zijn direct relevant voor lekdetectie:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">PGS-13</strong> regelt de veiligheid van ammoniak-koelinstallaties.
              De richtlijn stelt eisen aan gasdetectie in machinekamers en aangrenzende ruimtes. In de praktijk
              wordt dit ingevuld met vaste NH₃-detectoren. Leidingwerk buiten de machinekamer valt vaak buiten
              die bewaking.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">PGS-29</strong> behandelt de opslag van gevaarlijke stoffen
              in verpakking en tanks. De richtlijn bevat eisen voor het voorkomen en detecteren van lekkage,
              maar laat de keuze van detectiemethode doorgaans open.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Beide richtlijnen schrijven geen specifieke detectiemethode voor. Ze stellen functionele eisen:
              lekken moeten tijdig worden gesignaleerd. Hoe je dat doet, is aan de exploitant.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar past akoestische lekdetectie in dit landschap?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische lekdetectie (ultrasoon) is geen vervanging van EPA Method 21, OGI of vaste
              gasdetectie. Het is een aanvulling die een ander deel van het probleem oplost.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Binnen LDAR-programma&apos;s.</strong>{' '}
              Akoestische detectie kan worden ingezet als snelle screeningsmethode om grote aantallen
              componenten te scannen. De camera dekt een breed gebied per positie en is niet afhankelijk
              van het type gas. Het resultaat: een prioriteitenlijst van de zwaarste lekken, waarna
              gerichte FID/PID-metingen of OGI de concentratie en het gastype bevestigen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Naast vaste gasdetectie.</strong>{' '}
              Vaste detectoren bewaken continu, maar hebben blinde vlekken. Een periodieke akoestische
              scan vult die gaten. Dit sluit aan op de functionele eisen van PGS-13 en PGS-29: het
              leidingwerk buiten het bereik van vaste sensoren wordt alsnog geïnspecteerd.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Bij ammoniak en F-gassen.</strong>{' '}
              In de F&amp;B-sector waar NH₃-koelinstallaties standaard zijn, detecteert akoestische
              inspectie lekken in leidingwerk door productieruimtes en technische gangen, buiten het
              bereik van de vaste NH₃-sensoren in de machinekamer.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Bij waterstof.</strong>{' '}
              Waterstof absorbeert geen IR-straling, waardoor OGI en infraroodsensoren niet werken.
              Akoestische detectie is een van de weinige methoden die H₂-lekken op afstand kan lokaliseren.
              Lees meer:{' '}
              <Link href="/kennisbank/waterstoflekdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Waterstoflekdetectie: waarom traditionele methoden tekortschieten
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Het verschil met ISO 11011
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <Link href="/kennisbank/iso-11011-persluchtaudit" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ISO 11011
              </Link>{' '}
              richt zich uitsluitend op perslucht en kijkt vanuit energie-efficiëntie. De normen in dit
              artikel richten zich op industriële gassen en kijken vanuit veiligheid, milieu en compliance.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het meetprincipe is hetzelfde: akoestische detectie werkt op drukverschil, ongeacht of het
              gas perslucht, stikstof, methaan of ammoniak is. Maar de context verschilt. Bij perslucht
              is het kostenargument leidend. Bij industriële gassen zijn veiligheid en milieu de primaire
              drijfveren, met kosten als secundair argument.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt een LDAR-programma en zoekt een aanvullende screeningsmethode.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan (ultrasoon) geeft je in een dagdeel een indicatief beeld van je
                  installatie. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt vaste gasdetectie en vermoedt blinde vlekken.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Lees hoe akoestische detectie je vaste systeem aanvult:{' '}
                  <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Akoestische lekdetectie naast je vaste gasdetectie
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten welke gassen akoestisch detecteerbaar zijn.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Lees ons overzicht:{' '}
                  <Link href="/kennisbank/welke-gassen-akoestische-lekdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Welke gassen kun je met akoestische lekdetectie opsporen?
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt sparren over hoe lekdetectie past in je compliance-programma.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Plan een{' '}
                  <Link href="/contact" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    kennismakingsgesprek
                  </Link>.
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
                Een quickscan geeft je in een dagdeel een compleet beeld van je perslucht- of gassysteem.
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
                <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Akoestische lekdetectie naast je vaste gasdetectie: waar zit de aanvulling?
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
