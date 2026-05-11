import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten | GasProtex',
  description:
    'Waarom schieten IR-sensoren, katalytische sensoren en OGI tekort bij waterstof? Overzicht van H₂-detectiemethoden en de rol van akoestische lekdetectie.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/waterstoflekdetectie',
  },
  openGraph: {
    title: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten',
    description:
      'Waarom schieten IR-sensoren, katalytische sensoren en OGI tekort bij waterstof? Overzicht van H₂-detectiemethoden en de rol van akoestische lekdetectie.',
    url: 'https://gasprotex.nl/kennisbank/waterstoflekdetectie/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten',
    description:
      'Waarom schieten IR-sensoren, katalytische sensoren en OGI tekort bij waterstof? Overzicht van H₂-detectiemethoden en de rol van akoestische lekdetectie.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten',
  description:
    'Waarom schieten IR-sensoren, katalytische sensoren en OGI tekort bij waterstof? Overzicht van H₂-detectiemethoden en de rol van akoestische lekdetectie.',
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
  datePublished: '2026-05-09',
  dateModified: '2026-05-09',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/waterstoflekdetectie/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://gasprotex.nl/kennisbank/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Waterstoflekdetectie: waarom traditionele methoden tekortschieten',
      item: 'https://gasprotex.nl/kennisbank/waterstoflekdetectie/',
    },
  ],
}

const detectieTabel = [
  {
    methode: 'NDIR / OGI',
    werkt: 'Nee',
    bereik: 'n.v.t.',
    lokalisatie: 'n.v.t.',
    beperking: 'H₂ absorbeert geen IR-straling',
    accent: false,
  },
  {
    methode: 'Katalytisch (pellistor)',
    werkt: 'Beperkt',
    bereik: 'Nabij sensor',
    lokalisatie: 'Zone',
    beperking: 'Vergiftiging, verzadiging boven LEL',
    accent: false,
  },
  {
    methode: 'Elektrochemisch',
    werkt: 'Ja',
    bereik: 'Nabij sensor',
    lokalisatie: 'Zone',
    beperking: 'Langzame respons, kruisgevoeligheid, korte levensduur',
    accent: false,
  },
  {
    methode: 'Thermal conductivity',
    werkt: 'Ja (hoog)',
    bereik: 'Nabij sensor',
    lokalisatie: 'Zone',
    beperking: 'Alleen boven 1% vol, niet selectief',
    accent: false,
  },
  {
    methode: 'Akoestisch (ultrasoon)',
    werkt: 'Ja',
    bereik: 'Groot',
    lokalisatie: 'Exact',
    beperking: 'Geen gasidentificatie, vereist drukverschil',
    accent: true,
  },
]

export default function WaterstoflekdetectiePage() {
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

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              Gaslekdetectie
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Waterstoflekdetectie: waarom traditionele methoden tekortschieten
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 9 mei 2026 · 7 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ fontStyle: 'italic' }}>
              Waterstof is onzichtbaar, reukloos en extreem brandbaar. De explosiegrenzen liggen breed:
              4 tot 75% in lucht. En toch schieten de meeste gangbare gasdetectiemethoden tekort bij waterstof.
              In dit artikel leggen we uit waarom dat zo is, welke methoden wel werken en hoe akoestische
              lekdetectie (ultrasoon) een rol speelt in de groeiende waterstofinfrastructuur.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waarom waterstof anders is dan andere gassen
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Waterstof heeft een combinatie van eigenschappen die het tot een bijzonder gas maken vanuit detectieperspectief:
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen kleur, geen geur.</strong>{' '}
                Waterstof is volledig onzichtbaar en reukloos. Er is geen sensorische waarschuwing bij een lek.
                Menselijke zintuigen zijn waardeloos.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Kleinste molecuul.</strong>{' '}
                Het H₂-molecuul is het kleinste dat bestaat. Waterstof lekt sneller en door kleinere openingen
                dan elk ander gas. Afdichtingen die voor aardgas of stikstof voldoen, kunnen voor waterstof
                onvoldoende zijn.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Brede explosiegrenzen.</strong>{' '}
                Waterstof is brandbaar bij concentraties van 4 tot 75% in lucht. Ter vergelijking: aardgas is
                brandbaar van 5 tot 15%. Het veilige venster is bij waterstof veel kleiner.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Lage ontstekingsenergie.</strong>{' '}
                Waterstof heeft meer dan tien keer minder energie nodig om te ontbranden dan aardgas.
                Een statische ontlading die je niet eens voelt, kan voldoende zijn.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Snelle verspreiding.</strong>{' '}
                Waterstof stijgt snel op (14 keer lichter dan lucht) en verspreidt zich razendsnel. Een lek
                dissipeert in een open omgeving snel, maar in afgesloten ruimtes accumuleert het onmerkbaar
                tot gevaarlijke concentraties.
              </p>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar traditionele detectiemethoden tekortschieten
            </h2>

            <h3 className="text-[#0A2238] font-bold mt-6 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Infraroodsensoren (NDIR): werken niet
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Non-dispersive infrared (NDIR) sensoren, de werkpaarden van de gasdetectie-industrie voor
              koolwaterstoffen en CO₂, werken niet op waterstof. H₂ absorbeert geen infraroodstraling.
              Een IR-sensor is letterlijk blind voor waterstof, ongeacht de concentratie. Dat geldt ook
              voor Optical Gas Imaging (OGI): een infraroodcamera kan een waterstofwolk niet zichtbaar maken.
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Katalytische sensoren (pellistor): beperkt
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Katalytische bead sensoren detecteren waterstof via de warmte die vrijkomt bij katalytische
              verbranding op het sensoroppervlak. Ze werken, maar met beperkingen. Bij hoge concentraties
              (boven de LEL) kan de sensor verzadigen of beschadigd raken. De sensor heeft zuurstof nodig
              om te functioneren. En de levensduur wordt verkort door blootstelling aan siliconen, zwavel
              en andere katalysatorvergiften die in industriële omgevingen veelvoorkomend zijn.
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Elektrochemische sensoren: langzaam
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-2" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Elektrochemische sensoren kunnen waterstof detecteren via een elektrochemische reactie.
              Ze zijn gevoelig bij lage concentraties (ppm-bereik), maar de responstijd is relatief lang
              en ze zijn gevoelig voor kruisgevoeligheid met andere gassen. De levensduur is beperkt
              (doorgaans 2–3 jaar) en ze vereisen regelmatige kalibratie.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/kruisgevoeligheid-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Kruisgevoeligheid bij vaste gasdetectie
              </Link>
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Thermal conductivity sensoren: alleen hoge concentraties
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              TC-sensoren meten het verschil in warmtegeleiding tussen het monster en referentielucht.
              Waterstof heeft een zeer hoge warmtegeleiding, waardoor TC-sensoren in principe geschikt zijn.
              Maar ze werken alleen bij hoge concentraties (boven 1% vol) en zijn niet selectief: elk gas
              met afwijkende warmtegeleiding geeft een signaal.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Detectiemethoden voor waterstof vergeleken
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '620px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Methode', 'Werkt op H₂?', 'Bereik', 'Lokalisatie', 'Beperking bij H₂'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 13 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detectieTabel.map((rij) => (
                      <tr
                        key={rij.methode}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.accent ? '#EBF4FA' : '#ffffff',
                        }}
                      >
                        <td
                          className="text-[#0A2238]"
                          style={{ padding: '10px 14px', fontSize: 13, fontWeight: rij.accent ? 700 : 400, whiteSpace: 'nowrap' }}
                        >
                          {rij.methode}
                        </td>
                        <td
                          className="text-[#3D5A6E]"
                          style={{ padding: '10px 14px', fontSize: 13, fontWeight: rij.accent ? 700 : 400 }}
                        >
                          {rij.werkt}
                        </td>
                        <td
                          className="text-[#3D5A6E]"
                          style={{ padding: '10px 14px', fontSize: 13, fontWeight: rij.accent ? 700 : 400 }}
                        >
                          {rij.bereik}
                        </td>
                        <td
                          className="text-[#3D5A6E]"
                          style={{ padding: '10px 14px', fontSize: 13, fontWeight: rij.accent ? 700 : 400 }}
                        >
                          {rij.lokalisatie}
                        </td>
                        <td
                          className="text-[#3D5A6E]"
                          style={{ padding: '10px 14px', fontSize: 13, lineHeight: 1.5, fontWeight: rij.accent ? 700 : 400 }}
                        >
                          {rij.beperking}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat akoestische detectie anders doet bij waterstof
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische lekdetectie (ultrasoon) omzeilt de chemische beperkingen van conventionele sensoren
              volledig. De camera detecteert niet het gas zelf, maar het geluid dat ontstaat wanneer waterstof
              onder druk door een opening stroomt. Dat geluid is onafhankelijk van de chemische of optische
              eigenschappen van het gas.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen blinde vlek voor H₂.</strong>{' '}
                Waar IR-sensoren niets zien en katalytische sensoren beperkt werken, detecteert de akoestische
                camera elk waterstoflek onder druk zonder enige beperking op basis van gastype.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Lokalisatie op afstand.</strong>{' '}
                De camera toont een live beeld met overlay die aangeeft waar het geluid vandaan komt. Bij
                waterstof, waar je niet wilt dat een technicus met een handheld sniffer op zoek gaat in de
                directe omgeving van een brandbaar lek, is afstandsdetectie een direct veiligheidsvoordeel.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen zuurstof nodig.</strong>{' '}
                De camera werkt in elke atmosfeer. In geïnertiseerde ruimtes of bij hoge H₂-concentraties
                waar katalytische sensoren falen, blijft akoestische detectie functioneren.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">ATEX-gecertificeerd.</strong>{' '}
                De Crysound 8125 is gecertificeerd voor zone 2 en zone 22. Inspecties in explosiegevaarlijke
                zones zijn direct uitvoerbaar.
              </p>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              NPR 3378-3:2025: waterstof in het normenlandschap
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              NEN heeft in 2025 NPR 3378-3:2025 gepubliceerd: &apos;Praktijkrichtlijn gasinstallaties –
              Sectie gasleidingen – Deel 3: Dimensionering gasleiding voor aardgas, propaan en waterstof
              met de grafiekmethode&apos;. Dit is het eerste NPR-deel waar de werkwijze voor het
              dimensioneren van gasleidingen met waterstof is opgenomen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De publicatie onderstreept dat waterstof geen toekomstmuziek meer is. Er is nu een normatief
              kader voor het ontwerp van waterstofleidingen. Maar ontwerp is één kant. De andere kant is
              inspectie en onderhoud: hoe stel je vast dat een waterstofleiding na installatie en gedurende
              de levensduur lekvrij blijft?
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Daarmee wordt lekdetectie voor waterstof geen nice-to-have maar een essentieel onderdeel van
              de exploitatie. En gezien de beperkingen van conventionele detectiemethoden is akoestische
              detectie een van de weinige methoden die H₂-lekken betrouwbaar op afstand kan lokaliseren.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De gelaagde aanpak
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Waterstofveiligheid vraagt om meerdere detectielagen. Geen enkele methode dekt alles:
            </p>

            <div className="space-y-4 mb-4">
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Laag 1: vaste gasdetectie.</strong>{' '}
                Elektrochemische of TC-sensoren op strategische posities voor continue bewaking van
                H₂-concentraties. Eerste alarmlijn.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Laag 2: periodieke akoestische inspectie.</strong>{' '}
                Scannen van het volledige leidingsysteem op lekken die buiten het bereik van vaste sensoren
                zitten. Lokalisatie tot op de bron.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Laag 3: vlamdetectie.</strong>{' '}
                UV/IR-vlamdetectoren voor het geval een lek leidt tot ontbranding. Waterstofvlammen zijn
                in daglicht vrijwel onzichtbaar.
              </p>
            </div>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische detectie is laag 2: het dicht de blinde vlekken tussen de vaste sensoren en
              lokaliseert lekken voordat ze een veiligheidsincident worden.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je werkt met waterstof en wilt weten of je installatie lekvrij is.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan (ultrasoon) geeft je in een dagdeel een indicatief beeld. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
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
                  Je wilt sparren over lekdetectie voor je waterstofinstallatie.
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
                <Link href="/kennisbank/welke-gassen-akoestische-lekdetectie" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Welke gassen kun je met akoestische lekdetectie opsporen?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/lekdetectie-normen-industriele-gassen" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399
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
