import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Lekdetectie methoden vergeleken: 5 technieken | GasProtex',
  description:
    'Vergelijking van vijf veelgebruikte methoden om gas- en persluchtlekken op te sporen. Per methode: sterke en zwakke kanten en toepassingsgebied.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/lekdetectie-methoden-vergeleken',
  },
  openGraph: {
    title: 'Lekdetectie methoden vergeleken: welke past bij jouw situatie? | GasProtex',
    description: 'Vijf industriële lekdetectiemethoden vergeleken op lokalisatie, gevoeligheid, bereik en kosten. Van zeepsop tot akoestische detectie.',
    url: 'https://gasprotex.nl/kennisbank/lekdetectie-methoden-vergeleken/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Lekdetectie methoden vergeleken: welke past bij jouw situatie? | GasProtex',
    description: 'Vijf industriële lekdetectiemethoden vergeleken op lokalisatie, gevoeligheid, bereik en kosten.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lekdetectie in de industrie: welke methode past bij jouw situatie?',
  description:
    'Vijf industriële lekdetectiemethoden vergeleken op lokalisatie, gevoeligheid, bereik en kosten.',
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
  datePublished: '2026-05-06T09:00:00+02:00',
  dateModified: '2026-05-06T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/lekdetectie-methoden-vergeleken/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://gasprotex.nl/kennisbank' },
    { '@type': 'ListItem', position: 3, name: 'Lekdetectie methoden vergeleken', item: 'https://gasprotex.nl/kennisbank/lekdetectie-methoden-vergeleken' },
  ],
}

const methoden = [
  {
    nr: '1.',
    naam: 'Zeepsop (bellentest)',
    intro:
      'De oudste methode: breng een zeepoplossing aan op een verdachte plek en kijk of er bellen ontstaan.',
    werkt:
      'Als je al weet waar je moet zoeken. Een monteur die vermoedt dat een specifieke koppeling lekt, kan het met zeepsop snel bevestigen. De locatieprecisie is hoog, je ziet exact waar het lek zit.',
    tekortschiet:
      'De gevoeligheid is laag. Kleine lekken produceren geen zichtbare bellen. Daarnaast moet je fysiek bij elke koppeling kunnen komen. Tijdens productie staat het systeem weliswaar onder druk (wat nodig is voor de test), maar de toegankelijkheid is het probleem: bij leidingwerk op hoogte, achter machines of in beperkte ruimtes kan dat lastig en gevaarlijk zijn. Bij een systeem met vele koppelingen en tientallen aftakkingen controleer je dagen in plaats van uren. Lekken die je niet verwacht, vind je niet.',
    geschikt: 'Gerichte controle van een bekende locatie na reparatie.',
    nietGeschikt: 'Het in kaart brengen van een heel systeem.',
  },
  {
    nr: '2.',
    naam: 'Handheld detector (puntmeting)',
    intro:
      'Een draagbaar apparaat dat je op individuele koppelingen of leidingdelen richt om lekken te detecteren. Er zijn twee hoofdtypen: ultrasone detectors die geluid in het ultrasone bereik oppikken, en sniffers of halfgeleider-sensors die gasconcentratie meten.',
    werkt:
      'Kan ingezet worden tijdens productie. Het bereik is beperkt tot nabij de sensor. De gevoeligheid is gemiddeld, beter dan zeepsop maar minder dan een akoestische camera.',
    tekortschiet:
      'Punt voor punt meten. Je moet het apparaat op elke koppeling richten en afzonderlijk beoordelen. Het lokaliseren van de exacte lekpositie is bij complexe leidingwerk-bundels lastig. Geen automatische debiet-berekening of kostenrapportage. Net als bij zeepsop moet je op hoogte of in beperkte ruimtes werken om bij elke koppeling te komen.',
    geschikt: 'Gerichte inspectie van specifieke zones.',
    nietGeschikt: 'Snelle scan van een hele productielocatie.',
  },
  {
    nr: '3.',
    naam: 'Drukverliestest',
    intro:
      'Een drukverliestest berust op het onder druk zetten van een systeem en het meten van eventueel drukverlies over een bepaalde tijd. Drukverlies wijst op een lek.',
    werkt:
      'Om vast te stellen dát je een probleem hebt. Op een vrachtwagen productielocatie had men via een drukverliesberekening vastgesteld dat ze ongeveer 15% van hun perslucht verloren. Dat is een duidelijk signaal. Het bereik dekt het hele systeem in één meting.',
    tekortschiet:
      'Je weet hoevéél, maar niet wáár. Geen lokalisatie. Die 15% kan in één groot lek zitten of verspreid over 30 kleine. Zonder aanvullende inspectie weet je niet waar je moet repareren. De gevoeligheid is laag tot gemiddeld: zeer kleine lekken vallen binnen de meetonnauwkeurigheid. Belangrijk: het systeem moet afgesloten worden. Tijdens productie is een drukverliestest in de praktijk niet uitvoerbaar.',
    geschikt: 'Vaststellen of lekdetectie nodig is.',
    nietGeschikt: 'Lokaliseren van individuele lekken.',
  },
  {
    nr: '4.',
    naam: 'Vaste gasdetectie (stationair)',
    intro:
      'Sensoren op vaste posities die continu gasconcentraties meten. Standaard in de chemie, petrochemie en bij koelinstallaties met ammoniak of F-gassen. Belangrijk: vaste detectoren zijn gasspecifiek. Er bestaat geen universele sensor die elk gevaarlijk gas kan meten.',
    werkt:
      'Continue bewaking van bekende risicozones. Als er een gaslek optreedt in de buurt van een sensor, geeft het systeem alarm.',
    tekortschiet:
      'Vaste gasdetectie geeft aan dát er een lek is, maar de exacte locatie blijft onbekend. Een lek achter een object of op een andere hoogte kan onopgemerkt blijven. Intermitterende lekken die alleen onder bepaalde procesomstandigheden optreden, worden niet altijd opgepikt. Windrichting speelt mee: als de wind het gas van de sensor af blaast, komt er geen alarm. Vaste installaties zijn een serieuze investering: tientallen tot honderden sensoren, bekabeling, installatie, periodieke kalibratie en onderhoud.',
    geschikt: 'Continue monitoring als eerste verdedigingslijn.',
    nietGeschikt:
      'Het lokaliseren van de exacte bron van een lek, of het vinden van lekken buiten het bereik van de sensoren.',
  },
]

const tabelRijen = [
  { methode: 'Zeepsop', continu: 'Nee', productie: 'Beperkt', lokalisatie: 'Hoog', gevoeligheid: 'Laag', bereik: 'Contact', atex: 'Beperkt', kosten: 'Hoog*', highlight: false },
  { methode: 'Handheld detector', continu: 'Nee', productie: 'Beperkt', lokalisatie: 'Medium', gevoeligheid: 'Medium', bereik: 'Nabij sensor', atex: 'Ja**', kosten: 'Hoog*', highlight: false },
  { methode: 'Drukverliestest', continu: 'Nee', productie: 'Nee', lokalisatie: 'Geen', gevoeligheid: 'Laag–medium', bereik: 'Heel systeem', atex: 'Ja**', kosten: 'Laag', highlight: false },
  { methode: 'Vaste gasdetectie', continu: 'Ja', productie: 'Ja', lokalisatie: 'Laag', gevoeligheid: 'Hoog', bereik: 'Gelimiteerd', atex: 'Ja', kosten: 'Hoog', highlight: false },
  { methode: 'Akoestische lekdetectie', continu: 'Periodiek', productie: 'Ja', lokalisatie: 'Hoog', gevoeligheid: 'Hoog', bereik: 'Groot', atex: 'Ja', kosten: 'Medium', highlight: true },
]

export default function LekdetectieMethodenPage() {
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
              Lekdetectie in de industrie: welke methode past bij jouw situatie?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 6 mei 2026 · 6 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              Er zijn meerdere manieren om gas- en persluchtlekken op te sporen. Elk met eigen sterke en
              zwakke kanten. In dit artikel vergelijken we de vijf meest gebruikte methoden, met de voor-
              en nadelen. Zodat je weet welke aanpak past bij jouw installatie.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            {/* H2: Vijf methoden */}
            <h2 className="text-[#0A2238] font-bold mt-8 mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Vijf methoden naast elkaar
            </h2>

            {methoden.map((m) => (
              <div key={m.naam} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(10,34,56,0.08)' }}>
                <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 20 }}>
                  {m.nr} {m.naam}
                </h3>
                <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15 }}>
                  {m.intro}
                </p>

                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>Wanneer het werkt</p>
                <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {m.werkt}
                </p>

                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>Waar het tekortschiet</p>
                <p className="text-[#3D5A6E] leading-relaxed mb-5" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {m.tekortschiet}
                </p>

                <div className="rounded-md" style={{ background: '#F4F7FA', padding: '16px 20px' }}>
                  <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.6 }}>
                    <span className="font-semibold" style={{ color: '#15803d' }}>✓ Geschikt voor: </span>
                    {m.geschikt}
                  </p>
                  <p className="text-[#3D5A6E] mt-1" style={{ fontSize: 15, lineHeight: 1.6 }}>
                    <span className="font-semibold" style={{ color: '#b91c1c' }}>✕ Niet geschikt voor: </span>
                    {m.nietGeschikt}
                  </p>
                </div>
                {m.naam === 'Vaste gasdetectie (stationair)' && (
                  <p className="mt-3 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                    Lees ook:{' '}
                    <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                      Akoestische lekdetectie naast je vaste gasdetectie
                    </Link>
                  </p>
                )}
              </div>
            ))}

            {/* Methode 5: Akoestisch — apart uitgewerkt */}
            <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(10,34,56,0.08)' }}>
              <h3 className="text-[#0A2238] font-bold mb-3" style={{ fontSize: 20 }}>
                5. Akoestische lekdetectie (ultrasoon)
              </h3>
              <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15 }}>
                Een camera met een array van microfoons die geluid oppikt in het ultrasone bereik (2 tot 100 kHz).
                Op het scherm zie je een live beeld dat aangeeft waar ultrasoon geluid vandaan komt.
              </p>

              <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>Wanneer het werkt</p>
              <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Periodiek inzetbaar en geschikt tijdens normale productie: geen stilstand nodig. Scannen van
                een heel systeem in één inspectieronde. Hoge lokalisatie en hoge gevoeligheid: de camera
                detecteert lekken op afstand, tot tientallen meters afhankelijk van omgeving en lekgrootte.
                Werkt in lawaaierige omgevingen. Per gevonden lek: exacte locatie, geschat debiet, jaarverlies
                in euro&apos;s, herstelprioriteit. Met ATEX-gecertificeerde apparatuur inzetbaar in
                explosiegevaarlijke zones (zone 2 en zone 22).
              </p>

              <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>Waar het tekortschiet</p>
              <p className="text-[#3D5A6E] leading-relaxed mb-5" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Bij hele kleine lekken onder lage druk wordt het signaal zwak. Het apparaat toont alleen
                geluidsbronnen die boven een bepaalde drempelwaarde uitkomen. Bij vacuümsystemen werkt het
                alleen als je een ultrasone geluidbron in de leiding inbrengt.
              </p>

              <div className="rounded-md" style={{ background: '#F4F7FA', padding: '16px 20px' }}>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  <span className="font-semibold" style={{ color: '#15803d' }}>✓ Geschikt voor: </span>
                  Snelle, complete scan van perslucht- en gassystemen zonder productiestilstand.
                </p>
                <p className="text-[#3D5A6E] mt-1" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  <span className="font-semibold" style={{ color: '#b91c1c' }}>✕ Niet geschikt voor: </span>
                  Vacuümlekdetectie (zonder aanvullende bron) en kleine lekken onder zeer lage druk.
                </p>
              </div>
              <p className="mt-3 text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Lees ook:{' '}
                <Link href="/kennisbank/welke-gassen-akoestische-lekdetectie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                  Welke gassen kun je met akoestische lekdetectie opsporen?
                </Link>
              </p>
            </div>

            {/* H2: Vergelijkingstabel */}
            <h2 className="text-[#0A2238] font-bold mt-8 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De vergelijking in één overzicht
            </h2>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '640px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['Methode', 'Continu', 'Tijdens productie', 'Lokalisatie', 'Gevoeligheid', 'Bereik', 'ATEX', 'Kosten'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 12px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tabelRijen.map((rij) => (
                      <tr
                        key={rij.methode}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-medium'} style={{ padding: '10px 12px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.methode}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.continu}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.productie}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.lokalisatie}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.gevoeligheid}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.bereik}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.atex}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 12px', fontSize: 15 }}>{rij.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4" style={{ fontSize: 15, color: '#6B8FA6', lineHeight: 1.7 }}>
              <p>* Voor het controleren van een enkel lek zijn de kosten laag, echter voor een heel systeem zijn de kosten hoog i.v.m. de tijd die nodig is om alle lekken te controleren.</p>
              <p className="mt-1">** Mits Ex-gecertificeerde uitvoering. Drukverliestest: met inert gas (N₂) en gecertificeerde apparatuur.</p>
            </div>

            {/* H2: Niet óf-óf */}
            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Niet óf-óf, maar én-én
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De belangrijkste conclusie: deze methoden sluiten elkaar niet uit.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Vaste gasdetectie is en blijft je eerste verdedigingslijn voor continue monitoring. Maar er
              zijn blinde vlekken, en die vul je aan met periodieke akoestische inspectie.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Zeepsop en puntmeting verdwijnen niet. Na een reparatie wil je soms bevestigen dat het lek
              gedicht is. Maar als primaire opsporingsmethode voor een heel systeem zijn ze te langzaam,
              te arbeidsintensief en niet altijd veilig.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De drukverliestest is een goede startvraag: heb ik een probleem? Het antwoord op
              <em> waar</em> dat probleem zit, geeft een akoestische camera.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Op diezelfde productielocatie die 15% verlies had vastgesteld, bracht een akoestische scan
              meer dan 20 lekken aan het licht. Niet alleen op de kleine koppelingen waar je ze verwacht,
              maar ook in het hoofdleidingsysteem. Zonder de camera had dat hoofdleidinglek er nog steeds gezeten.
            </p>

            {/* H2: Wat past bij jouw situatie */}
            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je weet dát je lekt, maar niet waar.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed mb-2" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan geeft je in een dagdeel een indicatief beeld. Wil je eerst een
                  indicatie van de kosten? Gebruik onze{' '}
                  <Link href="/bereken-uw-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    persluchtcalculator
                  </Link>.
                </p>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Lees ook:{' '}
                  <Link href="/kennisbank/wat-kost-een-persluchtlek" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Wat kost een persluchtlek?
                  </Link>
                  {' '}·{' '}
                  <Link href="/kennisbank/waar-zitten-persluchtlekken" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Waar zitten persluchtlekken meestal?
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt vaste gasdetectie maar vermoedt blinde vlekken.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische inspectie vult de gaten. Werkt naast je bestaande systeem, niet als
                  vervanging. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je hebt nog nooit lekdetectie laten doen en wilt weten of het zinvol is.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  We denken graag met je mee. Plan een{' '}
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
            <div
              className="rounded-md mt-12"
              style={{ background: '#0A2238', padding: '48px' }}
            >
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
                <Link href="/kennisbank/atex-zones-uitgelegd" className="block">
                  <div
                    className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6"
                    style={{ background: '#ffffff' }}
                  >
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">ATEX &amp; Compliance</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/wat-kost-een-persluchtlek" className="block">
                  <div
                    className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6"
                    style={{ background: '#ffffff' }}
                  >
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
