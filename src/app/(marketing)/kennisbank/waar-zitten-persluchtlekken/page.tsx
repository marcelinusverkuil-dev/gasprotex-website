import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Persluchtsysteem in kaart: waar lekken meestal zitten | GasProtex',
  description:
    'Waar zitten de meeste persluchtlekken? Top 10 leklocaties van compressor tot pneumatische cilinder. Met praktische tips om lekken te voorkomen.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/waar-zitten-persluchtlekken',
  },
  openGraph: {
    title: 'Persluchtsysteem in kaart: waar lekken meestal zitten',
    description: 'Waar zitten de meeste persluchtlekken? Top 10 leklocaties van compressor tot pneumatische cilinder.',
    url: 'https://gasprotex.nl/kennisbank/waar-zitten-persluchtlekken/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Persluchtsysteem in kaart: waar lekken meestal zitten',
    description: 'Waar zitten de meeste persluchtlekken? Top 10 leklocaties van compressor tot pneumatische cilinder.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Persluchtsysteem in kaart: waar lekken meestal zitten',
  description:
    'Waar zitten de meeste persluchtlekken? Top 10 leklocaties van compressor tot pneumatische cilinder. Met praktische tips om lekken te voorkomen.',
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
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/waar-zitten-persluchtlekken/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://gasprotex.nl/kennisbank' },
    { '@type': 'ListItem', position: 3, name: 'Persluchtsysteem in kaart: waar lekken meestal zitten', item: 'https://gasprotex.nl/kennisbank/waar-zitten-persluchtlekken' },
  ],
}

const leklocaties = [
  { nr: '1', component: 'Snelkoppelingen', reden: 'O-ring slijtage, verkeerd gemonteerd, mechanische schade door vallen en slepen', zone: 'Distributie + eindgebruik' },
  { nr: '2', component: 'Pneumatische cilinders', reden: 'Zuigerstangafdichting slijt door continue beweging en trillingen', zone: 'Eindgebruik' },
  { nr: '3', component: 'FRL-units (filter/regelaar/smeerder)', reden: 'Slechte montage, verouderde afdichtingen, vervuiling', zone: 'Distributie + eindgebruik' },
  { nr: '4', component: 'Condensaatafvoeren', reden: 'Klep blijft openstaan, defect magneetventiel, vuile afdichting', zone: 'Compressorkamer + distributie' },
  { nr: '5', component: 'Schroefverbindingen en fittingen', reden: 'Verkeerde of ontbrekende tape/sealant, thermische uitzetting', zone: 'Alle zones' },
  { nr: '6', component: 'Slangen en tubing', reden: 'Veroudering, knikken, schuurschade door contact met machines', zone: 'Distributie + eindgebruik' },
  { nr: '7', component: 'Afsluitkleppen', reden: 'Pakking rond de spindel slijt bij frequent gebruik', zone: 'Distributie' },
  { nr: '8', component: 'Drukregelaars', reden: 'Interne afdichting versleten, membraan verouderd', zone: 'Distributie + eindgebruik' },
  { nr: '9', component: 'Flenzen en lasnaden', reden: 'Gemiste lasnaden, pakking niet goed aangetrokken, corrosie', zone: 'Hoofddistributie' },
  { nr: '10', component: 'Ongebruikte machines (niet afgesloten)', reden: 'Systeem blijft onder druk staan terwijl machine niet draait', zone: 'Eindgebruik' },
]

export default function WaarZittenPersluchtlekkenPage() {
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
              Perslucht
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Persluchtsysteem in kaart: waar lekken meestal zitten
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 8 mei 2026 · 5 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ fontStyle: 'italic' }}>
              Een persluchtsysteem bestaat uit meer dan een compressor en een paar leidingen. Van compressorkamer
              tot pneumatische cilinder op de productielijn zitten tientallen tot honderden verbindingen, filters,
              regelaars en aftakkingen. En bij elke verbinding is er kans op een lek. In dit artikel lopen we het
              systeem van begin tot eind door en laten we zien waar de lekken in de praktijk zitten.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Van compressor tot eindgebruiker: de vier zones
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een persluchtsysteem kun je opdelen in vier zones, elk met eigen lekrisico&apos;s:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Zone 1: Compressorkamer.</strong>{' '}
              Compressor, nakoeler, droger, vochtvanger, hoofdontvanger. Relatief weinig verbindingen, maar de druk
              is hier het hoogst. Lekken bij de condensaatafvoer en bij flensverbindingen van de droger komen het vaakst voor.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Zone 2: Hoofddistributie.</strong>{' '}
              De ringleiding of stam van het systeem, inclusief aftakkingen naar productieafdelingen. Lekken ontstaan
              bij lasnaden, flenzen en T-stukken. Bij oudere systemen met verzinkte stalen leidingen is corrosie een
              veelvoorkomende oorzaak.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Zone 3: Secundaire distributie.</strong>{' '}
              De aftakkingen naar individuele machines en werkplekken. Hier neemt het aantal verbindingen sterk toe:
              dalers, snelkoppelingen, reduceerventiel, filters. Elke verbinding is een potentieel lekpunt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Zone 4: Pneumatische eindgebruikspunten.</strong>{' '}
              Hier wordt de perslucht daadwerkelijk ingezet: cilinders, kleppen, grijpers, blaaspistolen,
              verpakkingsmachines. Dit is veruit het kwetsbaarste deel van het systeem. Niet omdat de componenten
              slechter zijn, maar omdat ze continu in beweging zijn, aan slijtage onderhevig en het vaakst worden
              aan- en losgekoppeld.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar zitten de meeste lekken?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De meeste lekken ontstaan niet in het hoofdleidingwerk, maar bij verbindingen en eindgebruikspunten.
              Dit zijn de tien meest voorkomende leklocaties, op basis van inspectiedata en brancheliteratuur:
            </p>

            {/* Tabel leklocaties */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '580px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      {['#', 'Component', 'Waarom het lekt', 'Zone'].map((h) => (
                        <th key={h} className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 14 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leklocaties.map((rij, i) => (
                      <tr
                        key={rij.nr}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: i % 2 === 0 ? '#ffffff' : '#F4F7FA',
                        }}
                      >
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 14, whiteSpace: 'nowrap' }}>{rij.nr}</td>
                        <td className="text-[#0A2238] font-bold" style={{ padding: '10px 14px', fontSize: 14 }}>{rij.component}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, lineHeight: 1.5 }}>{rij.reden}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 14, whiteSpace: 'nowrap' }}>{rij.zone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Pneumatische systemen: de grootste bron van lekken
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De bovenste helft van deze lijst bestaat vrijwel volledig uit pneumatische componenten:
              snelkoppelingen, cilinders, FRL-units, regelaars. Dat is geen toeval.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Pneumatische systemen zijn het werkende uiteinde van je persluchtinstallatie. Hier wordt de lucht
              gebruikt om te bewegen, te grijpen, te doseren, te verpakken. De componenten zijn continu in beweging,
              worden regelmatig aan- en losgekoppeld en zijn onderhevig aan trillingen, temperatuurwisselingen en
              mechanische slijtage.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In de voedingsmiddelenindustrie zie je dit op elke verpakkingslijn en transportband. In de chemie bij
              pneumatisch aangestuurde kleppen in procesinstallaties. In de maakindustrie bij robotcellen, persen en
              assemblagelijnen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het gevolg: de meeste lekken ontstaan niet in het leidingwerk dat je nooit aanraakt, maar in de
              componenten die dagelijks in bedrijf zijn. En juist die lekken zijn moeilijk te vinden met
              conventionele methoden, omdat ze vaak klein zijn, verspreid zitten en worden overstemd door
              productiegeluid.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De laatste 9 meter
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In de praktijk zit 30 tot 40 procent van alle persluchtlekken in de laatste 9 meter van het systeem,
              van het aftakpunt tot de pneumatische actuator. Dat komt door de combinatie van veel verbindingen op
              een kort traject, flexibele slangen die slijten, en snelkoppelingen die dagelijks worden gebruikt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Bij een akoestische scan (ultrasoon) beginnen we daarom vaak bij de eindgebruikspunten. Niet omdat
              het hoofdleidingwerk geen lekken kan hebben, maar omdat de kans op een lek per meter leiding het
              hoogst is bij de machines zelf.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Onzichtbare lekken: wat je niet hoort
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Bijna 80 procent van alle persluchtlekken is niet hoorbaar in een productieomgeving. Een lek van
              1 mm bij 6 bar produceert 64 liter per minuut aan verlies, maar wordt overstemd door het
              achtergrondgeluid van machines en ventilatie. Het ultrasone signaal is er wel, en een akoestische
              camera pikt het op.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Daarnaast zijn er lekken die alleen optreden onder bepaalde omstandigheden: bij opwarming, bij
              drukverschillen tijdens proceswissels, of bij machines die onder belasting staan. Deze intermitterende
              lekken worden bij een momentopname soms gemist, maar kosten op jaarbasis net zo goed geld.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat je er zelf aan kunt doen
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Afsluiten wat niet draait.</strong>{' '}
              Machines die niet in gebruik zijn maar nog wel onder druk staan, lekken gegarandeerd. Een simpele
              afsluiter in de aftakleiding voorkomt onnodig verlies.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Snelkoppelingen vervangen, niet repareren.</strong>{' '}
              Een versleten O-ring in een snelkoppeling is goedkoper om te vervangen dan om te laten lekken. De
              kosten van het lek overstijgen de kosten van een nieuwe koppeling binnen weken.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Condensaatafvoeren controleren.</strong>{' '}
              Een condensaatafvoer die openstaat, blaast continu perslucht af. Dit is een van de makkelijkst te
              verhelpen lekken, maar wordt vaak over het hoofd gezien.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Periodiek laten inspecteren.</strong>{' '}
              Omdat lekken groeien en nieuwe lekken ontstaan, is een eenmalige inspectie niet genoeg. Een
              periodieke akoestische scan (ultrasoon) houdt het systeem in beeld.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/iso-11011-persluchtaudit" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ISO 11011 en persluchtaudits
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten waar je lekken zitten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan (ultrasoon) geeft je in een dagdeel een indicatief beeld van je volledige
                  persluchtsysteem. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt eerst weten wat je lekken kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-uw-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
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
                  Je wilt eerst sparren over wat zinvol is.
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
                <Link href="/kennisbank/wat-kost-een-persluchtlek" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Wat kost een persluchtlek per jaar? Rekenmethode en voorbeelden.
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/lekdetectie-methoden-vergeleken" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Lekdetectie methoden vergeleken: welke past bij jouw situatie?
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
