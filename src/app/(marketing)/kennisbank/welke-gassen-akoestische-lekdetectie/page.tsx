import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'


export const metadata: Metadata = {
  title: 'Welke gassen kun je met akoestisch detecteren? | GasProtex',
  description:
    'Akoestische lekdetectie werkt op elk gas onder druk: van perslucht tot waterstof, ammoniak en methaan. Per gastype toepassing, risico en sector.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/welke-gassen-akoestische-lekdetectie',
  },
  openGraph: {
    title: 'Welke gassen kun je met akoestische lekdetectie opsporen? | GasProtex',
    description: 'Akoestische lekdetectie werkt op elk gas onder druk. Van perslucht tot waterstof, ammoniak en methaan. Per gastype: toepassing, risico en sector.',
    url: 'https://gasprotex.nl/kennisbank/welke-gassen-akoestische-lekdetectie/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Welke gassen kun je met akoestische lekdetectie opsporen? | GasProtex',
    description: 'Akoestische lekdetectie werkt op elk gas onder druk. Van perslucht tot waterstof, ammoniak en methaan.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Welke gassen kun je met akoestische lekdetectie opsporen?',
  description:
    'Akoestische lekdetectie werkt op elk gas onder druk. Van perslucht tot waterstof, ammoniak en methaan. Per gastype: toepassing, risico en sector.',
  image: 'https://gasprotex.nl/images/gasprotex-logo.png',
  author: { '@type': 'Organization', name: 'GasProtex', url: 'https://gasprotex.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'GasProtex',
    logo: { '@type': 'ImageObject', url: 'https://gasprotex.nl/images/gasprotex-logo.png' },
  },
  datePublished: '2026-05-07T09:00:00+02:00',
  dateModified: '2026-05-07T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/welke-gassen-akoestische-lekdetectie/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Kennisbank', url: 'https://gasprotex.nl/kennisbank' },
  { name: 'Welke gassen akoestische lekdetectie', url: 'https://gasprotex.nl/kennisbank/welke-gassen-akoestische-lekdetectie' },
])

const overzichtTabel = [
  { gas: 'Perslucht', toepassing: 'Pneumatiek, verpakking, reiniging', risico: 'Energieverlies', sector: 'Alle industrie' },
  { gas: 'Stikstof (N₂)', toepassing: 'Inertisering, blanketing, MAP', risico: 'Energieverlies + hoge gaskosten', sector: 'Chemie, F&B' },
  { gas: 'Waterstof (H₂)', toepassing: 'Energiedrager, procesgas', risico: 'Brand/explosie + zeer hoge gaskosten', sector: 'Chemie, energie' },
  { gas: 'CO₂', toepassing: 'Carbonatatie, koeling, pH-regulering', risico: 'Verstikking in afgesloten ruimte', sector: 'F&B, waterbehandeling' },
  { gas: 'Ammoniak (NH₃)', toepassing: 'Koelinstallaties', risico: 'Toxisch + explosief, PGS-13', sector: 'F&B, logistiek' },
  { gas: 'F-gassen', toepassing: 'Klimaat, industriële koeling', risico: 'Extreem broeikaswerend (GWP)', sector: 'Alle industrie' },
  { gas: 'Methaan (CH₄)', toepassing: 'Olie/gas, biogas, afval', risico: 'Brand/explosie + broeikasgas', sector: 'Petrochemie, energie' },
  { gas: 'Propaan/butaan', toepassing: 'Opslag, LPG, chemische processen', risico: 'Brand/explosie', sector: 'Petrochemie, tankopslag' },
]

export default function WelkeGassenPage() {
  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Breadcrumb */}

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              Gaslekdetectie
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Welke gassen kun je met akoestische lekdetectie opsporen?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 7 mei 2026 · 6 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              Akoestische lekdetectie (ultrasoon) werkt niet op één specifiek gas. Het werkt op elk gas
              dat onder druk door een opening ontsnapt. In dit artikel leggen we uit waarom dat zo is,
              welke gassen je in de praktijk tegenkomt en wat een lek per gastype betekent voor je bedrijf.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Het principe: geluid, niet gas
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een akoestische camera detecteert geen gasconcentratie. Hij detecteert geluid: het ultrasone
              geluid dat ontstaat wanneer gas onder druk door een opening stroomt. Of dat nu perslucht is,
              stikstof, waterstof of ammoniak maakt voor het meetprincipe niet uit. Zolang er een
              drukverschil is, produceert het lek een geluidssignaal.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Dit is het fundamentele verschil met conventionele gasdetectie. Vaste sensoren en handheld
              sniffers zijn gasspecifiek: een ammoniak-sensor detecteert geen methaan, een infraroodsensor
              reageert niet op waterstof. Een akoestische camera detecteert ze allemaal met één instrument.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De beperking is het omgekeerde: akoestische detectie vertelt je niet welk gas er lekt.
              Alleen dát er gelekt wordt en wáár. In de meeste industriële situaties weet je welk gas er
              in een leiding zit, dus dat is zelden een probleem.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De gassen in de praktijk
            </h2>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Perslucht</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het meest voorkomende medium bij akoestische lekdetectie. Perslucht is in vrijwel elke
              productiefaciliteit aanwezig: voor pneumatiek, verpakking, transport, reiniging en
              instrumentatie. Lekken in persluchtleidingen kosten geen gas maar wel energie. Bij continue
              bedrijfsvoering (24/7) lopen de kosten van één klein lek al op tot meer dan €1.200 per jaar.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Stikstof (N₂)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Stikstof wordt breed ingezet als inert gas: voor blanketing van opslagtanks, inertisering
              van reactoren en leidingen, als beschermgas bij lasprocessen, en in MAP-verpakking in de
              voedingsmiddelenindustrie. Stikstof is 3 tot 8 keer duurder dan perslucht*. Een stikstoflek
              is dus per liter significant duurder dan een persluchtlek.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Waterstof (H₂)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Waterstof is onzichtbaar, reukloos en extreem brandbaar. Conventionele gasdetectie van
              waterstof is lastig: infraroodsensoren werken niet op H₂ (waterstof absorbeert geen
              IR-straling), en katalytische sensoren hebben beperkingen bij hoge concentraties. Akoestische
              detectie omzeilt dit probleem volledig: het geluid van het lek is onafhankelijk van de
              chemische eigenschappen van het gas. Met de groei van waterstof als energiedrager neemt het
              belang van betrouwbare lekdetectie toe. Waterstof is bovendien het duurste industriegas,
              waardoor elk lek direct financieel voelbaar is.{' '}
              <Link href="/kennisbank/waterstoflekdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lees ook: Waterstoflekdetectie: waarom traditionele methoden tekortschieten
              </Link>
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>CO₂ (kooldioxide)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              CO₂ wordt gebruikt bij carbonatatie in brouwerijen en frisdrankindustrie, als natuurlijk
              koelmiddel (R-744), voor pH-regulering in waterbehandeling, en als beschermgas bij lassen.
              In hoge concentraties is CO₂ verstikkend. Een lek in een afgesloten ruimte is een direct
              veiligheidsrisico. Akoestische detectie vindt het lek voordat concentraties gevaarlijk worden.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Ammoniak (NH₃)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Standaard koelmiddel in de voedingsmiddelenindustrie: zuivelfabrieken,
              vleesverwerkingsbedrijven, distributiecentra met vriesopslag. Ammoniak is toxisch, al bij
              lage concentraties irriterend en in bepaalde mengverhoudingen met lucht explosief.
              Ammoniak-koelinstallaties vallen onder PGS-13 en de machinekamer wordt aangemerkt als
              ATEX-zone. Vaste ammoniak-detectie bewaakt de machinekamer. Maar leidingwerk door
              productieruimtes en technische gangen valt vaak buiten die bewaking. Een periodieke
              akoestische inspectie brengt lekken in kaart die buiten het bereik van vaste sensoren zitten.
            </p>
            <p className="mb-8 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/atex-zones-uitgelegd" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?
              </Link>
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>F-gassen (koudemiddelen)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              F-gassen zoals R-134a, R-410A en R-32 worden gebruikt in klimaatinstallaties en industriële
              koeling. Ze zijn sterk broeikaswerend: het Global Warming Potential (GWP) van R-410A is
              2.088 keer dat van CO₂. De F-gassenverordening verplicht bedrijven tot periodieke
              lekcontrole. Akoestische detectie kan een aanvulling zijn op de verplichte lekcontrole,
              met name voor het lokaliseren van lekken in complexe installaties.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Methaan (CH₄)</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Methaan komt voor in de olie- en gaswinning, biogasinstallaties en afvalverwerking. Het is
              brandbaar, explosief en een krachtig broeikasgas (GWP van 80 over 20 jaar).
              LDAR-programma&apos;s (Leak Detection and Repair) in de petrochemie richten zich voor een
              belangrijk deel op methaanlekken. Akoestische detectie wordt hierbij ingezet als snelle
              screeningsmethode om grote aantallen componenten te scannen.
            </p>
            <p className="mb-8 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/lekdetectie-normen-industriele-gassen" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399
              </Link>
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>Propaan, butaan en andere koolwaterstoffen</h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Bij opslagterminals, LPG-installaties en chemische processen. Brandbaar en explosief.
              Lekdetectie is hier primair een veiligheidskwestie, niet een kostenvraag. Akoestische
              detectie werkt voor alle koolwaterstoffen onder druk.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-4 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Overzicht per gastype
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '560px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Gas', 'Typische toepassing', 'Risico bij lek', 'Primaire sector'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {overzichtTabel.map((rij, i) => (
                      <tr key={rij.gas} style={{ borderTop: '1px solid rgba(10,34,56,0.08)', background: i % 2 === 0 ? 'transparent' : '#FAFBFC' }}>
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.gas}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.toepassing}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.risico}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.sector}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wanneer akoestische detectie niet werkt
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Geen druk, geen geluid.</strong>{' '}
              Akoestische detectie werkt op basis van het geluid dat drukverschil produceert. Bij systemen
              zonder druk (bijvoorbeeld zwaartekrachtleidingen of open tanks) is er geen signaal om te detecteren.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Vacuümsystemen.</strong>{' '}
              Bij vacuümlekken stroomt lucht naar binnen in plaats van gas naar buiten. Het geluidssignaal
              is veel zwakker en moeilijker te lokaliseren. Vacuümlekdetectie vereist doorgaans een
              aanvullende ultrasone geluidbron in de leiding.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Zeer kleine lekken onder lage druk.</strong>{' '}
              Bij hele kleine openingen in combinatie met lage systeemdruk kan het ultrasone signaal onder
              de detectiedrempel vallen. In deze gevallen zijn tracer-gasmethoden (helium, waterstof) geschikter.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Geen gasidentificatie.</strong>{' '}
              De camera vertelt je niet welk gas er lekt. In installaties met meerdere gastypen in dezelfde
              ruimte moet je weten welk gas in welke leiding zit.
            </p>
            <p className="text-[#3D5A6E] mt-2" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/kruisgevoeligheid-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Kruisgevoeligheid bij vaste gasdetectie: waarom gasspecifieke sensoren hun eigen blinde vlekken hebben
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je werkt met meerdere gastypen en wilt weten waar je lekken zitten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan (ultrasoon) dekt alle gastypen in één inspectie. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">aanpak</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten wat je persluchtlekken kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-je-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">persluchtcalculator</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten hoe akoestische detectie zich verhoudt tot je vaste gasdetectie.
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
                  Je wilt eerst sparren over wat zinvol is.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Plan een{' '}
                  <Link href="/contact" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">kennismakingsgesprek</Link>.
                </p>
              </div>
            </div>

            {/* Voetnoot */}
            <p className="mt-10" style={{ fontSize: 15, color: '#6B8FA6', fontStyle: 'italic', lineHeight: 1.7 }}>
              * Factor 3 bij eigen stikstofproductie ter plaatse (PSA-generator). Factor 8 bij inkoop van
              vloeibare stikstof in bulk. Het verschil hangt af van verbruiksvolume, contractvorm en locatie.
            </p>

            {/* Footer-tekst */}
            <p className="mt-3" style={{ fontSize: 15, color: '#6B8FA6', fontStyle: 'italic', lineHeight: 1.7 }}>
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
                <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Akoestische lekdetectie naast je vaste gasdetectie
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
