import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Akoestische lekdetectie naast vaste gasdetectie | GasProtex',
  description:
    'Vaste gasdetectie heeft blinde vlekken. Waar ze zitten en hoe akoestische lekdetectie ze aanvult, niet als vervanging maar als aanvulling.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie/',
  },
  openGraph: {
    title: 'Akoestische lekdetectie naast je vaste gasdetectie: waar zit de aanvulling? | GasProtex',
    description: 'Vaste gasdetectie heeft blinde vlekken. Lees waar ze zitten en hoe akoestische lekdetectie (ultrasoon) ze aanvult. Inclusief vergelijkingstabel.',
    url: 'https://gasprotex.nl/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Akoestische lekdetectie naast je vaste gasdetectie | GasProtex',
    description: 'Vaste gasdetectie heeft blinde vlekken. Hoe akoestische lekdetectie (ultrasoon) ze aanvult.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Akoestische lekdetectie naast je vaste gasdetectie: waar zit de aanvulling?',
  description:
    'Vaste gasdetectie heeft blinde vlekken. Lees waar ze zitten en hoe akoestische lekdetectie (ultrasoon) ze aanvult.',
  author: { '@type': 'Organization', name: 'GasProtex', url: 'https://gasprotex.nl' },
  publisher: { '@type': 'Organization', name: 'GasProtex', url: 'https://gasprotex.nl' },
  datePublished: '2026-05-07',
  dateModified: '2026-05-07',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie/',
}

const vergelijkingstabel = [
  { eigenschap: 'Meetprincipe', vast: 'Gasconcentratie op sensorpositie', akoestisch: 'Ultrasoon geluid van lekbron' },
  { eigenschap: 'Bereik', vast: 'Punt: meters rond sensor. Open-pad: tot 200 m langs pad', akoestisch: 'Tot tientallen meters per positie' },
  { eigenschap: 'Lokalisatie', vast: 'Punt: zone. Open-pad: ergens langs het pad', akoestisch: 'Exacte bron (visueel)' },
  { eigenschap: 'Gasspecifiek', vast: 'Ja, per sensortype', akoestisch: 'Nee, detecteert drukverschil' },
  { eigenschap: 'Weer-/windgevoelig', vast: 'Punt: wind. Open-pad: mist, regen, stof', akoestisch: 'Nee' },
  { eigenschap: 'Continu', vast: 'Ja (24/7)', akoestisch: 'Periodiek (inspectie)' },
  { eigenschap: 'ATEX-zones', vast: 'Ja', akoestisch: 'Ja (zone 2/22)' },
  { eigenschap: 'Kosten', vast: 'Hoog (installatie + onderhoud)', akoestisch: 'Medium (inspectiedienst)' },
]

export default function AkoestischNaastVasteGasdetectiePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              Akoestische lekdetectie naast je vaste gasdetectie: waar zit de aanvulling?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 7 mei 2026 · 7 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              Vaste gasdetectie is de standaard in de chemie, petrochemie en voedingsmiddelenindustrie.
              Terecht: het biedt 24/7 bewaking van bekende risicozones. Maar vaste detectoren hebben
              blinde vlekken. In dit artikel laten we zien waar die zitten, en hoe akoestische
              lekdetectie (ultrasoon) ze aanvult. Niet als vervanging, maar als aanvulling.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat vaste gasdetectie goed doet
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Vaste gasdetectoren meten continu gasconcentraties op vooraf bepaalde posities. Ze zijn
              gasspecifiek: een katalytische sensor voor brandbare gassen, een elektrochemische sensor
              voor toxische gassen als H₂S of NH₃, een infraroodsensor voor koolwaterstoffen of CO₂.
              Bij een overschrijding van de ingestelde drempelwaarde volgt een alarm. Bij hoge
              concentraties kan het systeem automatisch ventilatie activeren of een proces uitschakelen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Dit is de eerste verdedigingslijn. In ATEX-zones, bij koelinstallaties met ammoniak, bij
              opslag van brandbare gassen: vaste detectie is wettelijk vaak verplicht en is de basis van
              je gasbeheersing. Daar verandert niets aan.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Naast puntdetectoren wordt in de petrochemie en bij opslagtanks ook open-pad detectie
              (line-of-sight IR) ingezet. Daarbij loopt een infraroodstraal tussen een zender en ontvanger
              over afstanden van 5 tot 200 meter. Het voordeel: een groter bereik per detectiepaar dan
              een puntdetector, waardoor open-pad detectie standaard is voor perimeterbewaking van grote
              installaties en laad- en losplaatsen. Het valt onder dezelfde categorie als vaste
              gasdetectie: continu, stationair en gasspecifiek.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar vaste gasdetectie tekortschiet
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het probleem is niet dat vaste detectoren niet werken. Het probleem is dat ze alleen werken
              op de plek waar ze hangen. En daar zitten vijf fundamentele beperkingen aan.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>
              1. Beperkt bereik per sensor
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een vaste puntdetector meet gasconcentratie in zijn directe omgeving, meestal binnen een
              straal van een paar meter. Een lek dat tien meter verderop zit, of achter een obstakel,
              of op een andere hoogte, wordt niet opgepikt. Om een volledige installatie te dekken heb
              je tientallen tot honderden sensoren nodig. In de praktijk zijn er altijd zones zonder dekking.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Open-pad detectie lost het bereikprobleem deels op, maar introduceert eigen beperkingen.
              Het systeem is gevoelig voor neerslag, mist, stof en stoom, die het IR-signaal verzwakken.
              De uitlijning tussen zender en ontvanger is kritisch: trillingen van installaties of
              windbelasting kunnen vals alarm veroorzaken. En het belangrijkste: open-pad detectie
              vertelt je dat er ergens langs het pad gas aanwezig is, maar niet waar precies. Bij een
              pad van 100 meter kan het lek overal zitten.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>
              2. Windrichting en ventilatie
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Gas verspreidt zich met de luchtstroom. Als de wind het gas van de sensor af blaast, komt
              er geen alarm. Buiten is windrichting onvoorspelbaar. Binnen is het niet beter:
              productieruimtes in de voedingsmiddelenindustrie hebben vaak geforceerde afzuiging,
              koelinstallaties staan in mechanisch geventileerde ruimtes. De luchtstroom voert het gas
              weg voordat het de sensor bereikt.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>
              3. Intermitterende lekken
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Niet elk lek is constant. Lekken die alleen optreden bij bepaalde procesomstandigheden,
              temperaturen of drukvariaties worden door vaste detectie niet altijd opgepikt. De sensor
              meet op het moment dat het gas er is. Maar als het lek alleen lekt tijdens een proceswissel
              of bij opwarming, en de sensor op dat moment niet genoeg concentratie meet, blijft het
              onzichtbaar.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>
              4. Geen lokalisatie
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een vaste detector geeft aan dát er gas aanwezig is, maar niet wáár het lek zit. Bij een
              alarm weet je dat er ergens in de buurt van sensor 47 een verhoogde concentratie is. Maar
              de exacte bron (of het een flensverbinding is, een klep, een pakking of een lasnaad)
              dat vertelt het systeem je niet. Voor reparatie moet je alsnog zoeken.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 19, lineHeight: 1.3 }}>
              5. Gasspecifiek, niet universeel
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Elke sensor is afgestemd op een specifiek gas of gasgroep. Een methaansensor detecteert
              geen ammoniak. Een H₂S-sensor reageert niet op waterstof. Als er een onverwacht gas
              vrijkomt, of als een installatie meerdere gassen verwerkt, kunnen er gaten in de detectie
              zitten die pas zichtbaar worden bij een incident.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/lekdetectie-methoden-vergeleken/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie methoden vergeleken
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat akoestische lekdetectie anders doet
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Akoestische lekdetectie (ultrasoon) werkt op een fundamenteel ander principe. In plaats
              van gasconcentratie te meten, detecteert het geluid: het ultrasone geluid dat ontstaat
              wanneer gas onder druk door een opening ontsnapt. Dat geluid is onafhankelijk van het
              type gas, de windrichting of de ventilatie.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Concreet betekent dit:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Geen blinde vlekken door wind of ventilatie.</strong>{' '}
              Het geluid van een lek verplaatst zich niet met de luchtstroom. Of de wind nu van links
              of rechts komt, het ultrasone signaal blijft op de bron.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Lokalisatie tot op de bron.</strong>{' '}
              De camera toont een live beeld met een overlay die aangeeft waar het geluid vandaan komt.
              Je ziet niet alleen dát er een lek is, maar exact wáár.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Gastype-onafhankelijk.</strong>{' '}
              Perslucht, stikstof, waterstof, CO₂, ammoniak, methaan, propaan: elk gas dat onder druk
              door een opening ontsnapt, produceert ultrasoon geluid. Één instrument dekt alle gastypen.
            </p>
            <p className="mt-1 mb-4 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/welke-gassen-akoestische-lekdetectie/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Welke gassen kun je met akoestische lekdetectie opsporen?
              </Link>
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Op afstand, zonder stilstand.</strong>{' '}
              Detectie tot tientallen meters afstand, zonder dat je het proces hoeft te onderbreken.
              Geen steigers nodig om bij hoog leidingwerk te komen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een andere mobiele methode is Optical Gas Imaging (OGI): een handheld infraroodcamera die
              gaswolken visualiseert. OGI is effectief voor het opsporen van grotere fugitieve emissies,
              maar heeft beperkingen. Het werkt alleen bij gassen die infraroodstraling absorberen
              (koolwaterstoffen, SF₆), niet bij perslucht, stikstof of waterstof. Er is een
              temperatuurverschil nodig tussen het gas en de achtergrond, wat detectie in sommige
              omstandigheden lastig maakt. En de aanschafkosten liggen boven de €80.000. Akoestische
              detectie is gastype-onafhankelijk, niet afhankelijk van temperatuurverschillen en werkt
              op basis van het geluid van de lekbron zelf in plaats van de gaswolk.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De vergelijking in één overzicht
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '560px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#0A2238' }}>
                      <th className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15, width: '28%' }}></th>
                      <th className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>Vaste gasdetectie (punt + open-pad)</th>
                      <th className="text-left text-white font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>Akoestische detectie (ultrasoon)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vergelijkingstabel.map((rij, i) => (
                      <tr key={rij.eigenschap} style={{ borderTop: '1px solid rgba(10,34,56,0.08)', background: i % 2 === 0 ? 'transparent' : '#FAFBFC' }}>
                        <td className="text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{rij.eigenschap}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.vast}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.5 }}>{rij.akoestisch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Geen van beide methoden vervangt de ander. Vaste detectie bewaakt continu. Akoestische
              detectie lokaliseert en vindt wat vaste detectie mist.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              ATEX en mobiele inspectie-apparatuur
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een veelgestelde vraag: mag je met mobiele apparatuur een ATEX-zone in? Het antwoord is
              ja, mits de apparatuur ATEX-gecertificeerd is voor de betreffende zone.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De VNCI heeft samen met Vemobin, VOTOB, NOVE en Deltalinqs de &ldquo;ATEX-handreiking
              Industrie&rdquo; opgesteld (versie 4.0, gepubliceerd via Veiligheid Voorop). Deze
              handreiking geeft bedrijven handvatten bij het selecteren van tijdelijke mobiele
              apparatuur voor gebruik in ATEX-gezoneerde gebieden. Onder voorwaarden biedt de
              handreiking ruimte voor maatwerk in zone 2 en zone 22, onder begeleiding van een
              ATEX-deskundige.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De Crysound 8125, de akoestische camera waarmee GasProtex werkt, is ATEX-gecertificeerd
              voor zone 2 en zone 22. Dat betekent dat inspecties in explosiegevaarlijke zones direct
              uitvoerbaar zijn, zonder dezonering of aanvullende maatregelen. Dit past binnen het kader
              van de VNCI-handreiking.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/atex-zones-uitgelegd/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar de aanvulling concreet zit
            </h2>

            <h3 className="text-[#0A2238] font-bold mb-3 mt-6" style={{ fontSize: 19, lineHeight: 1.3 }}>
              Chemie en petrochemie
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In een chemisch complex met honderden flensverbindingen, kleppen en instrumentaansluitingen
              is volledige dekking met vaste sensoren economisch niet haalbaar. Een periodieke
              akoestische inspectie dicht de gaten. Je vindt lekken die tussen sensoren in zitten,
              achter isolatie, op hoogte, of in zones waar de ventilatie het gas wegvoert voordat het
              een sensor bereikt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Bij een turnaround of onderhoudsperiode is een scan van het volledige leidingsysteem in
              een dagdeel uitvoerbaar. Het resultaat: een kaart van alle actieve lekken, met locatie,
              geschat debiet en herstelprioriteit.
            </p>

            <h3 className="text-[#0A2238] font-bold mb-3 mt-8" style={{ fontSize: 19, lineHeight: 1.3 }}>
              Voedingsmiddelenindustrie
            </h3>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Bij zuivelfabrieken, brouwerijen en aardappelverwerkers zijn NH₃-koelinstallaties en
              CO₂-systemen standaard. Vaste detectie bewaakt de machinekamer. Maar leidingwerk door
              productieruimtes, laadperrons en technische gangen valt vaak buiten de dekking. Een
              periodieke akoestische scan brengt deze blinde vlekken in kaart.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Perslucht speelt hier ook mee: voedingsmiddelenbedrijven gebruiken grote hoeveelheden
              perslucht voor verpakking, transport en reiniging. Persluchtlekken vallen buiten het
              bereik van gasdetectoren (het is immers lucht, geen gevaarlijk gas), maar kosten net
              zo goed duizenden euro&apos;s per jaar aan energie.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat dit in de praktijk oplevert
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een akoestische scan levert per gevonden lek: de exacte locatie (foto met overlay), een
              geschat debiet in liter per minuut, de berekende jaarlijkse kosten en een
              herstelprioriteit. Alle lekken worden vastgelegd in een klantportaal met QR-codes per
              asset, zodat bij een vervolgbezoek direct duidelijk is of een lek gerepareerd is of niet.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het doel is niet om vaste gasdetectie overbodig te maken. Het doel is om de blinde vlekken
              te dichten die vaste detectie per definitie heeft. De combinatie van continue monitoring
              (vast) en periodieke inspectie (akoestisch) geeft het meest complete beeld van je installatie.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/wat-kost-een-persluchtlek/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Wat kost een persluchtlek?
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt vaste gasdetectie en vermoedt blinde vlekken.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan geeft je in een dagdeel een indicatief beeld. Lees meer over onze{' '}
                  <Link href="/diensten/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">aanpak</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten wat je lekken kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-uw-besparing/perslucht/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">calculator</Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt eerst sparren over wat zinvol is voor jouw installatie.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Plan een{' '}
                  <Link href="/contact/" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">kennismakingsgesprek</Link>.
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
                  href="/contact/"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
                  style={{ padding: '14px 32px' }}
                >
                  Vraag een Quickscan aan →
                </a>
                <Link
                  href="/contact/"
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
                <Link href="/kennisbank/lekdetectie-methoden-vergeleken/" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Lekdetectie methoden vergeleken: welke past bij jouw situatie?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/wat-kost-een-persluchtlek/" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Wat kost een persluchtlek per jaar?
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
