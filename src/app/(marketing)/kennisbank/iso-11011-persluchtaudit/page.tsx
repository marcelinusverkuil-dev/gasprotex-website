import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op? | GasProtex',
  description:
    'Wat is ISO 11011? Hoe past lekdetectie in een persluchtaudit? Uitleg over de norm, de drie subsystemen en wat een audit concreet oplevert.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/iso-11011-persluchtaudit',
  },
  openGraph: {
    title: 'ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op?',
    description: 'Wat is ISO 11011? Hoe past lekdetectie in een persluchtaudit? Uitleg over de norm, de drie subsystemen en wat een audit concreet oplevert.',
    url: 'https://gasprotex.nl/kennisbank/iso-11011-persluchtaudit/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op?',
    description: 'Wat is ISO 11011? Hoe past lekdetectie in een persluchtaudit? Uitleg over de norm, de drie subsystemen en wat een audit concreet oplevert.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op?',
  description:
    'Wat is ISO 11011? Hoe past lekdetectie in een persluchtaudit? Uitleg over de norm, de drie subsystemen en wat een audit concreet oplevert.',
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
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/iso-11011-persluchtaudit/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Kennisbank', url: 'https://gasprotex.nl/kennisbank' },
  { name: 'ISO 11011 persluchtaudit', url: 'https://gasprotex.nl/kennisbank/iso-11011-persluchtaudit' },
])

const subsystemen = [
  {
    naam: 'Supply (opwekking)',
    beoordeeld: 'Energieverbruik compressor, specifiek vermogen (kWh/m³), belastingsprofiel, regeling',
    methoden: 'Energiemeting, debietmeting, drukregistratie',
    accent: false,
  },
  {
    naam: 'Transmission (distributie)',
    beoordeeld: 'Drukval over het leidingnet, condensaatbeheer, leidingconfiguratie',
    methoden: 'Drukvalsensoren, dauwpuntmeting, visuele inspectie',
    accent: false,
  },
  {
    naam: 'Demand (verbruik)',
    beoordeeld: 'Productief verbruik, onproductief verbruik (lekkage), kunstmatige vraag',
    methoden: 'Akoestische lekdetectie, debietmeting per afdeling, drukverliestest',
    accent: true,
  },
]

export default function Iso11011PersluchtauditPage() {
  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              ATEX &amp; Compliance
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              ISO 11011: wat verwacht de norm en wat levert een persluchtaudit op?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 8 mei 2026 · 5 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ fontStyle: 'italic' }}>
              ISO 11011 is de internationale norm voor het beoordelen van de energie-efficiëntie van persluchtsystemen.
              De norm beschrijft hoe je een persluchtaudit uitvoert, van opwekking tot verbruik. In dit artikel leggen
              we uit wat de norm inhoudt, hoe lekdetectie daarin past en wat een audit je concreet oplevert.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat is ISO 11011?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ISO 11011:2013 (in Nederland gepubliceerd als NEN-EN-ISO 11011:2015 &apos;Perslucht - Energie-rendement -
              Beoordeling&apos;) is een norm die eisen stelt aan het uitvoeren en rapporteren van een energiebeoordeling
              van persluchtsystemen. De norm bekijkt het hele systeem, van de energie die erin gaat tot het werk dat
              eruit komt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De norm verdeelt een persluchtsysteem in drie subsystemen:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Supply (opwekking).</strong>{' '}
              De compressor en alles wat daarbij hoort: nakoeler, droger, ontvanger. Hier wordt elektriciteit omgezet
              in perslucht-energie. De norm kijkt naar het energieverbruik per eenheid geproduceerde perslucht.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Transmission (distributie).</strong>{' '}
              Het leidingwerk van compressorkamer tot aan de verbruikspunten. De norm kijkt naar drukval,
              condensaatbeheer en de efficiëntie van het leidingnet.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Demand (verbruik).</strong>{' '}
              Alle eindgebruikers van perslucht, inclusief productief gebruik én verspilling. Lekkage valt expliciet
              onder deze categorie: het is onproductief verbruik van perslucht.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat de norm van een audit verwacht
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ISO 11011 schrijft geen specifieke meetmethoden voor, maar stelt eisen aan het proces en het resultaat:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Systeembrede benadering.</strong>{' '}
              De audit moet het volledige systeem omvatten: opwekking, distributie en verbruik. Een audit die alleen
              naar de compressor kijkt, voldoet niet.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Data-analyse.</strong>{' '}
              Meetgegevens moeten verzameld, geanalyseerd en gedocumenteerd worden. Denk aan: energieverbruik van
              compressoren, drukniveaus in het leidingnet, luchtverbruik per afdeling en lekkageverliezen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Rapportage.</strong>{' '}
              De norm vereist een rapport met bevindingen en een schatting van het energiebesparingspotentieel. Het
              rapport moet concreet genoeg zijn om als basis te dienen voor verbetermaatregelen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Rollen en verantwoordelijkheden.</strong>{' '}
              De norm beschrijft wie er bij de audit betrokken moet zijn en wat hun verantwoordelijkheden zijn.
              De opdrachtgever, de auditor en de eigenaar van het persluchtsysteem hebben elk een rol.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar past lekdetectie in de norm?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lekkage is in ISO 11011 onderdeel van het subsysteem Demand. De norm noemt lekkage expliciet als vorm
              van onproductief verbruik dat in kaart gebracht moet worden.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In de praktijk betekent dit: een audit die geen lekdetectie bevat, mist een wezenlijk onderdeel van het
              verbruiksprofiel. Verliespercentages van 15 tot 30% zijn normaal in de industrie. Zonder lekdetectie
              weet je niet hoeveel van je persluchtproductie daadwerkelijk productief wordt ingezet.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een akoestische scan (ultrasoon) levert precies de data die de norm vraagt: per lek de locatie, het
              geschatte debiet, de berekende jaarlijkse kosten en een herstelprioriteit. Die data vormt de basis voor
              de besparingsschatting die ISO 11011 in het auditrapport vereist.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De drie subsystemen en wat er gemeten wordt
            </h2>

            {/* Tabel subsystemen */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '540px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['Subsysteem', 'Wat wordt beoordeeld', 'Meetmethoden (voorbeelden)'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 14 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subsystemen.map((rij) => (
                      <tr
                        key={rij.naam}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.accent ? '#EBF4FA' : '#ffffff',
                        }}
                      >
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 14, whiteSpace: 'nowrap' }}>{rij.naam}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, lineHeight: 1.5 }}>{rij.beoordeeld}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, lineHeight: 1.5 }}>{rij.methoden}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              ISO 11011 en ISO 50001: hoe ze samenhangen
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ISO 50001 is de norm voor energiemanagementsystemen. Steeds meer bedrijven implementeren ISO 50001 om
              hun energieverbruik structureel te verlagen, gedreven door kostenbesparing en ESG-doelstellingen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ISO 11011 is geen onderdeel van ISO 50001, maar de resultaten van een persluchtaudit conform ISO 11011
              kunnen rechtstreeks worden ingezet als onderbouwing binnen een ISO 50001-traject. De audit levert immers
              meetdata, besparingsschattingen en een verbeterplan, precies wat ISO 50001 vraagt als bewijs van
              continue verbetering.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Hetzelfde geldt voor de EU Energy Efficiency Directive (EED), die grote ondernemingen verplicht tot
              periodieke energie-audits. De EED is recent herzien: vanaf eind 2026 worden de auditcriteria gebaseerd
              op energiegebruik (vanaf 10 TJ/jaar) in plaats van bedrijfsomvang. Een persluchtaudit conform ISO 11011
              kan als onderdeel van die verplichting dienen.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat een persluchtaudit concreet oplevert
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een audit conform ISO 11011 levert meer op dan een rapport voor het archief. Concreet kun je verwachten:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Inzicht in je werkelijke verlies.</strong>{' '}
              Niet een schatting op basis van vuistregels, maar gemeten data. Hoeveel m³ per jaar gaat er verloren
              aan lekkage? Hoeveel kWh kost dat? Wat is het besparingspotentieel?
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Een geprioriteerde lekkenlijst.</strong>{' '}
              Niet alle lekken zijn even urgent. Een groot lek op het hoofdleidingwerk heeft meer impact dan een klein
              lek op een zelden gebruikte aftakking. De audit levert een lijst met herstelprioriteit, zodat je begint
              waar het meeste te winnen valt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Onderbouwing voor investeringen.</strong>{' '}
              Een rapport met concrete getallen maakt het makkelijker om budget vrij te krijgen voor reparaties,
              leidingvernieuwing of compressoroptimalisatie. De terugverdientijd van lekreparaties ligt doorgaans
              tussen de 4 en 8 maanden.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Nulmeting voor periodieke opvolging.</strong>{' '}
              Een eerste audit is een nulmeting. Bij periodieke herhalingen zie je of reparaties effect hebben gehad
              en of er nieuwe lekken zijn ontstaan. Dat is de basis voor een structureel besparingsprogramma.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Hoe GasProtex hierbij past
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              GasProtex voert geen volledige ISO 11011-audit uit. Dat zou de supply- en transmissie-kant omvatten,
              en dat is het domein van gespecialiseerde compressordienstverleners. Wat we wél leveren is het
              Demand-onderdeel: een akoestische scan (ultrasoon) van het volledige persluchtsysteem, met per lek de
              locatie, het debiet, de jaarlijkse kosten en een herstelprioriteit.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Die data kun je gebruiken als zelfstandig verbeterproject, of als input voor een breder ISO 11011-auditrapport.
              Voor bedrijven die werken aan ISO 50001 of die onder de EED-verplichting vallen, levert onze scan direct
              bruikbare onderbouwing.
            </p>
            <p className="mt-4 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/lekdetectie-normen-industriele-gassen" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie-normen voor industriële gassen: van LDAR tot NTA 8399
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten hoeveel perslucht je verliest aan lekkage.
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
                  Je wilt eerst een indicatie van de kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-je-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    calculator
                  </Link>.{' '}
                  Of lees ons artikel:{' '}
                  <Link href="/kennisbank/wat-kost-een-persluchtlek" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Wat kost een persluchtlek?
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt sparren over hoe lekdetectie past in je energiemanagement.
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
                <Link href="/kennisbank/waar-zitten-persluchtlekken" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Persluchtsysteem in kaart: waar lekken meestal zitten
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/wat-kost-een-persluchtlek" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Wat kost een persluchtlek per jaar? Rekenmethode en voorbeelden.
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
