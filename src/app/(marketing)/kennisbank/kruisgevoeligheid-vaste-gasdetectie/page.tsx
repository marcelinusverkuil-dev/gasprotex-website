import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet | GasProtex',
  description:
    'Kruisgevoeligheid veroorzaakt valse alarmen en gemiste lekken bij vaste gasdetectoren. Hoe het werkt, welke combinaties voorkomen en waarom akoestische detectie dit omzeilt.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/kruisgevoeligheid-vaste-gasdetectie',
  },
  openGraph: {
    title: 'Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet',
    description:
      'Kruisgevoeligheid veroorzaakt valse alarmen en gemiste lekken bij vaste gasdetectoren. Hoe het werkt, welke combinaties voorkomen en waarom akoestische detectie dit omzeilt.',
    url: 'https://gasprotex.nl/kennisbank/kruisgevoeligheid-vaste-gasdetectie/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet',
    description:
      'Kruisgevoeligheid veroorzaakt valse alarmen en gemiste lekken bij vaste gasdetectoren. Hoe het werkt, welke combinaties voorkomen en waarom akoestische detectie dit omzeilt.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet',
  description:
    'Kruisgevoeligheid veroorzaakt valse alarmen en gemiste lekken bij vaste gasdetectoren. Hoe het werkt, welke combinaties voorkomen en waarom akoestische detectie dit omzeilt.',
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
  datePublished: '2026-05-11',
  dateModified: '2026-05-11',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/kruisgevoeligheid-vaste-gasdetectie/',
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
      name: 'Kruisgevoeligheid bij vaste gasdetectie',
      item: 'https://gasprotex.nl/kennisbank/kruisgevoeligheid-vaste-gasdetectie/',
    },
  ],
}

const kruisTabel = [
  {
    sensor: 'CO (elektrochemisch)',
    interferent: 'Waterstof (H₂)',
    effect: 'Vals CO-alarm door H₂-oxidatie op de elektrode',
    sector: 'Waterstofinstallaties, brandstofcellen, acculaadruimtes',
  },
  {
    sensor: 'H₂S (elektrochemisch)',
    interferent: 'SO₂',
    effect: 'Vals H₂S-alarm (positieve respons)',
    sector: 'Petrochemie, raffinaderijen',
  },
  {
    sensor: 'H₂S (elektrochemisch)',
    interferent: 'NO₂',
    effect: 'Onderdrukte uitlezing, lek wordt gemist',
    sector: 'Petrochemie, rioolwaterzuivering',
  },
  {
    sensor: 'H₂S (elektrochemisch)',
    interferent: 'H₂',
    effect: 'Vals H₂S-alarm (positieve respons)',
    sector: 'Waterstofnabije installaties',
  },
  {
    sensor: 'LEL/methaan (pellistor)',
    interferent: 'Siliconen, zwavel',
    effect: 'Sensorvergiftiging, permanent gevoeligheidsverlies',
    sector: 'Chemie, farmaceutische productie, cleanrooms',
  },
  {
    sensor: 'LEL/methaan (pellistor)',
    interferent: 'Propaan, butaan, ethanol',
    effect: 'Afwijkende uitlezing (te hoog of te laag, afhankelijk van responsfactor)',
    sector: 'Tankopslag, LPG, voedingsmiddelenindustrie',
  },
]

export default function KruisgevoeligheidPage() {
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
              Kruisgevoeligheid bij vaste gasdetectie: wat je mist en wat akoestische detectie wel ziet
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 11 mei 2026 · 6 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ fontStyle: 'italic' }}>
              Vaste gasdetectoren zijn ontworpen om een beperkt aantal gassen te meten (vaak één). In de praktijk
              reageren ze ook op andere gassen. Dat fenomeen heet kruisgevoeligheid, en het leidt tot twee problemen:
              valse alarmen bij gassen die er niet toe doen, en gemiste lekken bij gassen die de sensor niet herkent.
              In dit artikel leggen we uit hoe kruisgevoeligheid werkt, welke combinaties in de industrie het vaakst
              voorkomen en waarom akoestische lekdetectie (ultrasoon) dit probleem omzeilt.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat is kruisgevoeligheid?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Kruisgevoeligheid (cross-sensitivity) treedt op wanneer een gassensor reageert op een gas waarvoor hij
              niet is ontworpen. Dat is geen defect. Het is een inherente eigenschap van de meetprincipes waarop
              chemische en elektrochemische sensoren werken.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een elektrochemische CO-sensor werkt door koolmonoxide te oxideren op een elektrode. Maar waterstof
              ondergaat dezelfde oxidatiereactie. Het gevolg: de CO-sensor geeft een uitlezing alsof er koolmonoxide
              aanwezig is, met een respons van 20 tot 60 procent (afhankelijk van het sensortype). 200 ppm waterstof
              kan zo een alarm geven dat lijkt op 40 tot 120 ppm CO. De sensor doet precies wat hij ontworpen is om
              te doen, maar interpreteert het verkeerde gas.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Hetzelfde geldt voor katalytische sensoren (pellistors). Ze meten de warmte die vrijkomt bij verbranding
              van een brandbaar gas op het sensoroppervlak. Maar elk brandbaar gas produceert warmte bij verbranding.
              Een methaan-sensor reageert daardoor ook op propaan, butaan, waterstof en ethanol, elk met een andere
              gevoeligheidsfactor.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Multigas-detectoren combineren meerdere sensoren in één behuizing. Dat lost het kruisgevoeligheidsprobleem
              niet op: elke sensor heeft dezelfde beperkingen als wanneer hij afzonderlijk zou werken. Het voordeel is
              dat een ervaren operator de uitlezingen naast elkaar kan leggen. Maar die interpretatie vereist kennis van
              de kruisgevoeligheidsdata per sensor, en die kennis is in de praktijk niet altijd aanwezig bij de operator
              ter plaatse.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Twee problemen: vals alarm en gemiste lekken
            </h2>

            <h3 className="text-[#0A2238] font-bold mt-6 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Vals alarm (false positive)
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een sensor geeft alarm terwijl het doelgas niet aanwezig is. Het alarm wordt veroorzaakt door een ander
              gas dat de sensor triggert. Het directe gevolg: onnodige evacuaties, productiestilstand, en na verloop
              van tijd alarmvermoeidheid. Als operators regelmatig te maken krijgen met valse alarmen, neemt het
              vertrouwen in het systeem af. Op het moment dat er een echt alarm komt, is de reactie trager.
            </p>

            <h3 className="text-[#0A2238] font-bold mt-8 mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3 }}>
              Gemist lek (false negative)
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Minder bekend maar gevaarlijker: kruisgevoeligheid kan ook leiden tot een te lage uitlezing. Als een
              interfererend gas de sensor op een andere manier beïnvloedt — door vergiftiging of verzadiging — kan de
              gevoeligheid voor het doelgas afnemen. Het resultaat: het lek is er, de concentratie stijgt, maar de
              sensor geeft geen alarm. Siliconen, zwavel en andere katalysatorvergiften zijn berucht om dit effect
              bij pellistor-sensoren.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Veelvoorkomende kruisgevoeligheden in de industrie
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '620px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Sensor (doelgas)', 'Interfererend gas', 'Effect', 'Sector waar dit speelt'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 13 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {kruisTabel.map((rij, i) => (
                      <tr
                        key={i}
                        style={{ borderTop: '1px solid rgba(10,34,56,0.08)', background: '#ffffff' }}
                      >
                        <td className="text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 13, whiteSpace: 'nowrap' }}>
                          {rij.sensor}
                        </td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 13 }}>
                          {rij.interferent}
                        </td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 13, lineHeight: 1.5 }}>
                          {rij.effect}
                        </td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 13, lineHeight: 1.5 }}>
                          {rij.sector}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Deze tabel is niet uitputtend. Elke sensorfabrikant publiceert kruisgevoeligheidsdata voor zijn
              specifieke sensoren. Het punt is dat kruisgevoeligheid geen randgeval is, maar een structureel
              gegeven in elke installatie met meerdere gastypen.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Alarmvermoeidheid: het onzichtbare risico
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het gevaarlijkste gevolg van kruisgevoeligheid is niet het individuele valse alarm, maar het patroon
              dat erop volgt. Als een CO-detector in een acculaadruimte regelmatig afgaat door waterstof uit ladende
              accu&apos;s, leert het team dat alarm te negeren. Als een H₂S-sensor in een raffinaderij regelmatig
              reageert op SO₂ uit een naburig proces, wordt de drempel verhoogd.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mt-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Dat is alarmvermoeidheid. Het systeem werkt technisch, maar het vertrouwen is weg. En op het moment
              dat er een echt lek optreedt, is de reactie te laat of blijft uit.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waarom akoestische detectie dit probleem niet heeft
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische lekdetectie (ultrasoon) werkt op een fundamenteel ander principe. De camera detecteert
              geen gasconcentratie en voert geen chemische reactie uit. Hij detecteert geluid: het ultrasone geluid
              dat ontstaat wanneer gas onder druk door een opening stroomt.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen kruisgevoeligheid.</strong>{' '}
                Er is geen chemisch of elektrochemisch meetprincipe dat door andere stoffen beïnvloed kan worden.
                Of er nu methaan, waterstof, ammoniak of schoonmaakmiddel in de lucht hangt, het meetresultaat
                wordt niet beïnvloed.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen valse alarmen door interfererende gassen.</strong>{' '}
                De camera reageert alleen op het geluid van een lek. Achtergrondgassen, dampen of stof
                veroorzaken geen vals signaal.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen sensorvergiftiging.</strong>{' '}
                Er is geen katalytisch oppervlak dat aangetast kan worden. De camera heeft geen verbruikbare
                sensor die na blootstelling aan siliconen of zwavel vervangen moet worden.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen kalibratie tegen specifieke gassen.</strong>{' '}
                De camera hoeft niet gekalibreerd te worden voor een doelgas. Hij werkt voor elk gas onder druk,
                zonder correctiefactoren of responsfactortabellen.
              </p>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Niet óf-óf, maar én-én
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische detectie vervangt vaste gasdetectie niet. Vaste sensoren meten concentratie en geven
              continu alarm bij gevaarlijke niveaus. Dat is essentieel en wettelijk vaak verplicht.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Maar vaste sensoren hebben blinde vlekken, en kruisgevoeligheid is er een van. Een periodieke
              akoestische scan vult die gaten: het vindt lekken ongeacht het gastype, zonder last van
              interfererende gassen, en lokaliseert de bron tot op de exacte positie.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De combinatie van continue concentratiemeting (vast) en periodieke leklokalisatie (akoestisch)
              geeft het meest betrouwbare beeld van je installatie.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt last van valse alarmen en vermoedt kruisgevoeligheid.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan (ultrasoon) kan bevestigen of er daadwerkelijk lekken zijn op de posities
                  waar je sensoren alarm geven. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten hoe akoestische detectie zich verhoudt tot je vaste systeem.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Lees ons artikel:{' '}
                  <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Akoestische lekdetectie naast je vaste gasdetectie
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt sparren over de betrouwbaarheid van je gasdetectiesysteem.
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
