import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

const BOOKINGS = 'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Lekdetectie in ATEX-zones: methodes & compliance | GasProtex',
  description:
    'Hoe spoor je gaslekken op in ATEX-zone 1 en 2 zonder ontstekingsrisico? Methodes, certificering en de rol van akoestische camera-inspectie uitgelegd.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zones',
  },
  openGraph: {
    title: 'Lekdetectie in ATEX-zones: methodes & compliance | GasProtex',
    description:
      'Hoe spoor je gaslekken op in ATEX-zone 1 en 2 zonder ontstekingsrisico? Methodes, certificering en de rol van akoestische camera-inspectie.',
    url: 'https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zones',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Lekdetectie in ATEX-zones: methodes & compliance | GasProtex',
    description:
      'Hoe spoor je gaslekken op in ATEX-zone 1 en 2 zonder ontstekingsrisico? Vier methodes en ATEX 153-compliance uitgelegd.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lekdetectie in ATEX-zones',
  description:
    'Hoe spoor je gaslekken op in ATEX-zone 1 en 2 zonder ontstekingsrisico? Methodes, certificering en de rol van akoestische camera-inspectie uitgelegd.',
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
  datePublished: '2026-05-18T09:00:00+02:00',
  dateModified: '2026-05-18T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zones',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Kennisbank', url: 'https://gasprotex.nl/kennisbank' },
  { name: 'Lekdetectie in ATEX-zones', url: 'https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zones' },
])

const methodes = [
  {
    methode: 'Vaste/stationaire gasdetectie',
    werking: 'Sensor op vaste positie meet gasconcentratie ter plaatse',
    geschikt: 'Continue bewaking van bekende risicopunten',
    beperking: 'Mist lekken buiten meetstraal; bewaakt concentratie, niet bron',
  },
  {
    methode: 'Snuffeldetectie (handheld)',
    werking: 'Operator loopt rond met handheld gasdetector',
    geschikt: 'Lokale verificatie van vermoede lekken',
    beperking: 'Vereist menselijke aanwezigheid in zone; meet pas dichtbij bron',
  },
  {
    methode: 'Tracer gas (helium of waterstof)',
    werking: 'Inert gas wordt onder druk in systeem geblazen, detector pikt ontsnapping op',
    geschikt: 'Hoge gevoeligheid op afgesloten systemen',
    beperking: 'Vereist productiestilstand; inert gas inkopen en inbrengen',
  },
  {
    methode: 'Akoestische camera (ultrasoon)',
    werking: 'Microfoon-array detecteert ultrasoon geluid van turbulente uitstroming',
    geschikt: 'Brede inspectie op afstand, op druk',
    beperking: 'Werkt bij overdruk; geen detectie bij zeer lage drukverschillen',
    highlight: true,
  },
]

export default function LekdetectieInAtexZonesPage() {
  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              ATEX & Compliance
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Lekdetectie in ATEX-zones
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 18 mei 2026 · 8 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed italic">
              Gaslekken opsporen in een ATEX-omgeving is een ander spel dan in een gewone fabriek. Geen open vuur, geen elektrische ontsteking, geen warmtebron — en toch moet je weten waar je lekken zitten. Dit overzichtsartikel zet de vier methodes naast elkaar, legt uit wat de zone-classificatie betekent voor je keuze, en laat zien welke rol akoestische lekdetectie speelt in compliance met ATEX 153 en BRZO.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              ATEX-zones in 60 seconden
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een ATEX-zone is een ruimte waar een explosieve atmosfeer kan ontstaan door ontvlambare gassen, dampen of stof. Europese wetgeving (ATEX 114 en ATEX 153) verplicht werkgevers om die zones in kaart te brengen en alleen apparatuur in te zetten die voor die specifieke zone gecertificeerd is.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor gas en damp: Zone 0 (continu of langdurig aanwezig), Zone 1 (af en toe bij normaal bedrijf), Zone 2 (zelden en kortstondig). Voor stof bestaan de overeenkomstige zones 20, 21 en 22.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor een diepere uitleg van de zones en hoe ze worden geclassificeerd: lees ons artikel{' '}
              <Link href="/kennisbank/atex-zones-uitgelegd" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ATEX-zones uitgelegd
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Vier methodes voor lekdetectie in ATEX-omgeving
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Niet elke detectie-methode is in elke zone toegelaten, en niet elke methode is even efficiënt. Een overzicht:
            </p>

            {/* Tabel — methodes vergeleken */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '720px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['Methode', 'Werkingsprincipe', 'Geschikt voor', 'Beperkingen in ATEX'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {methodes.map((rij) => (
                      <tr
                        key={rij.methode}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold align-top' : 'text-[#0A2238] font-medium align-top'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.methode}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold align-top' : 'text-[#3D5A6E] align-top'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.werking}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold align-top' : 'text-[#3D5A6E] align-top'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.geschikt}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold align-top' : 'text-[#3D5A6E] align-top'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.beperking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Elke methode heeft zijn plek. Een professionele inspectie combineert er vaak twee of drie. Akoestische detectie is dominant geworden voor brede plant-scans omdat het non-invasief werkt en geen productiestilstand vereist.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waarom akoestische camera-inspectie werkt in ATEX
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een akoestische camera bestaat uit een microfoon-array (vaak 64-200 microfoons) gecombineerd met een optische camera. De microfoons pikken ultrasone geluiden op (20.000 tot 80.000 Hz) die ontstaan wanneer gas of perslucht onder druk door een opening ontsnapt. Het systeem visualiseert de geluidsbron als een &quot;hot spot&quot; op een live beeld — zo zie je waar het lek zit, ook op afstand.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor ATEX-omgevingen is dit een belangrijke methode:
            </p>
            <ul className="space-y-3 mb-6 list-disc pl-6">
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen ontstekingsbron</strong> — een akoestische camera maakt geen vonk, geen warmte, geen elektrische ontlading die een explosieve atmosfeer zou kunnen ontsteken.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Werkt op afstand</strong> — meten kan vanaf tientallen meters, dus de operator hoeft de risico-zone niet binnen te lopen.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen contact met de installatie</strong> — geen aansluitingen, geen openen van leidingen, geen monsters nemen.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Geen productiestilstand</strong> — de installatie blijft op druk, de meting verstoort niets.
              </li>
            </ul>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor de specifieke werking en ATEX-certificering van akoestische camera&apos;s: lees{' '}
              <Link href="/kennisbank/akoestische-camera-in-atex-omgeving" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Akoestische camera in ATEX-omgeving
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              ATEX 153: jouw verplichting als werkgever
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ATEX 153 (de werkgeversrichtlijn) verplicht je tot drie dingen:
            </p>
            <ol className="space-y-3 mb-6 list-decimal pl-6">
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Inventarisatie</strong> van plaatsen waar explosieve atmosferen kunnen ontstaan
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Zone-classificatie</strong> (zone 0, 1, 2 voor gas; 20, 21, 22 voor stof)
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Risicobeperking</strong> door technische én organisatorische maatregelen, vastgelegd in een Explosieveiligheidsdocument (EVD)
              </li>
            </ol>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De Arbeidsinspectie accepteert EVD&apos;s niet ouder dan vijf jaar. Bij plant-wijzigingen, nieuwe installaties of incidenten moet de EVD eerder geactualiseerd worden.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lekkage-inventarisatie is een vast onderdeel van het EVD: je moet weten waar lekken kúnnen ontstaan en je inspanningen om die te detecteren documenteren. Een rapport van een ATEX-gecertificeerde akoestische inspectie is daarvoor bruikbaar bewijs.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Hoe een ATEX 153 lekkage-inventarisatie eruitziet en welke template je daarvoor kunt gebruiken, lees je in{' '}
              <Link href="/kennisbank/atex-153-lekkage-inventarisatie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ATEX 153 lekkage-inventarisatie
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Zone 1 en Zone 2: wat is het verschil voor lekdetectie?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Zone 1 betekent dat een explosieve atmosfeer regelmatig aanwezig kan zijn bij normaal bedrijf. Zone 2 betekent dat zo&apos;n atmosfeer onder normale omstandigheden niet aanwezig is, en als ze ontstaat dan slechts kortstondig.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor lekdetectie-apparatuur betekent dat verschil:
            </p>
            <ul className="space-y-3 mb-6 list-disc pl-6">
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Zone 1</strong> vereist intrinsiek veilige (Ex-i) of drukvaste (Ex-d) certificering. Apparatuur moet zo ontworpen zijn dat het geen ontsteking kan veroorzaken, óók niet bij fouttoestand.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Zone 2</strong> accepteert lichtere certificeringen, bijvoorbeeld niet-vonkende (Ex-n) categorieën. Apparatuur moet bij normaal bedrijf veilig zijn; bij fouttoestand zijn aanvullende maatregelen toegestaan.
              </li>
            </ul>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              GasProtex inspecteert standaard in Zone 2 (gas) en Zone 22 (stof). Voor Zone 1-inspecties werken we met gespecialiseerd partner-team dat over de juiste hogere certificering beschikt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor de praktische gevolgen van zone-classificatie op je inspectie-keuze: lees{' '}
              <Link href="/kennisbank/lekdetectie-in-atex-zone-1-en-2" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie in ATEX zone 1 en 2
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wie is verantwoordelijk voor wat?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              ATEX-verantwoordelijkheid is verdeeld over twee rollen:
            </p>
            <ul className="space-y-3 mb-6 list-disc pl-6">
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Fabrikant</strong> (onder ATEX 114): zorgt dat apparatuur ATEX-conform is ontworpen, gecertificeerd en gemarkeerd. CE-markering, ATEX-categorie en zone-aanduiding moeten zichtbaar zijn.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Werkgever</strong> (onder ATEX 153): zorgt dat de juiste apparatuur op de juiste plek wordt ingezet, dat zones correct zijn geclassificeerd, en dat werknemers veilig kunnen werken.
              </li>
            </ul>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              In de praktijk: jij als plant-eigenaar koopt apparatuur van een ATEX 114-conforme fabrikant en zet &apos;m in volgens ATEX 153-regels. Als wij bij jou langs komen om te meten, vallen we onder jouw ATEX 153-verplichting voor zolang we op je terrein zijn — met onze eigen ATEX-gecertificeerde apparatuur en bevoegde technici.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Verdere uitleg in{' '}
              <Link href="/kennisbank/atex-114-vs-atex-153" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                ATEX 114 vs ATEX 153
              </Link>.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Hoe GasProtex inspecties uitvoert in ATEX-omgevingen
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Onze aanpak bij een ATEX-omgeving:
            </p>
            <ol className="space-y-4 mb-6 list-decimal pl-6">
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Voorbereiding</strong> — we vragen je EVD en zone-classificatie op, plus een installatie-overzicht. We bepalen op basis daarvan welke meetposities relevant zijn en welke certificeringseisen gelden.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">On-site briefing</strong> — bij aankomst gaan we langs jullie veiligheids-coördinator. We krijgen werkvergunning, we stemmen af welke zones we wel of niet betreden, en we passen ons aan jullie regels aan (PBM, communicatie, evacuatie).
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Akoestische scan</strong> — vanuit toegestane posities (vaak buiten de zone, op afstand) inspecteren we de installatie. Lekken visualiseren we direct op het scherm, met locatie en intensiteit.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Verificatie</strong> — bij elk gevonden lek meten we druk, type gas (op basis van procesinformatie) en lekgrootte. Bij onduidelijkheid voeren we een aanvullende meting uit.
              </li>
              <li className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                <strong className="text-[#0A2238]">Rapportage</strong> — binnen 24 uur ontvang je een rapport met locatie per lek, geschatte uitstroom (l/min), geschatte jaarlijkse kosten en CO₂-impact, en herstel-prioritering. Bruikbaar als bijlage bij je EVD.
              </li>
            </ol>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <Link href="/contact" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                → Plan een Quickscan voor jouw installatie
              </Link>
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Veelgestelde vragen
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Mag ik met een gewone akoestische camera in een ATEX-zone werken?
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Nee. Voor Zone 1 en Zone 2 moet je een ATEX-gecertificeerde camera gebruiken met de juiste categorie (Ex-i of Ex-d voor Zone 1, Ex-n of hoger voor Zone 2). Een niet-gecertificeerde camera mag wel in de &quot;veilige&quot; omgeving rond de zone, niet erin.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Werkt akoestische detectie bij elk type gas?
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Ja, de methode pikt het geluid van turbulente uitstroming op — dat is fysisch gedrag, niet gas-specifiek. Waterstof, methaan, ammoniak, CO₂, perslucht: allemaal detecteerbaar zolang er een drukverschil is. De gevoeligheid varieert wel: kleinere moleculen (waterstof) geven sterkere ultrasone signatuur dan grote moleculen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Hoe vaak moet ik mijn ATEX-installatie laten inspecteren?
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  ATEX 153 schrijft geen vaste frequentie voor. De EVD bepaalt zelf de inspectie-intervalen op basis van risico. In praktijk zien we jaarlijkse inspecties bij{' '}
                  <Link href="/sectoren/petrochemie-chemie" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    BRZO-bedrijven en chemische installaties
                  </Link>
                  , halfjaarlijks bij hogere risico-categorieën. Voor de EU-Methaanverordening gelden aparte LDAR-frequenties.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Moet ik mijn productie stilleggen tijdens een akoestische inspectie?
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Nee. Dat is een van de grote voordelen van deze methode: de installatie blijft op druk en in bedrijf. We meten op afstand, zonder contact. Productiestilstand is alleen vereist bij tracer-gas-methoden of fysieke inspecties.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Kunnen jullie ook in Zone 0 of Zone 20 meten?
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Zone 0 (continu explosieve atmosfeer in gas) en Zone 20 (continu stofwolk) komen in praktijk bijna niet voor als toegankelijke meetomgeving — dat zijn vaak binnenruimtes van tanks en silo&apos;s. In zulke ruimtes is geen inspectie tijdens bedrijf mogelijk; ze worden gemeten bij periodiek onderhoud met aparte protocollen.
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
                Lekdetectie nodig in jouw ATEX-omgeving?
              </h2>
              <p className="text-[#7AADCC] mb-8" style={{ fontSize: 15 }}>
                Plan een vrijblijvend kennismakingsgesprek of een Quickscan ter plaatse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href={BOOKINGS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
                  style={{ padding: '14px 32px' }}
                >
                  Plan een kennismakingsgesprek →
                </a>
                <Link
                  href="/diensten"
                  className="text-white hover:text-[#C2DCE8] transition-colors font-medium underline underline-offset-4"
                  style={{ fontSize: 15, paddingTop: '14px' }}
                >
                  Bekijk onze diensten →
                </Link>
              </div>
            </div>

            {/* Gerelateerde artikelen */}
            <div style={{ marginTop: '64px' }}>
              <h2 className="text-[#0A2238] font-bold text-xl mb-6">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/kennisbank/atex-zones-uitgelegd" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">ATEX &amp; Compliance</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      ATEX-zones uitgelegd: zone 0, 1 en 2
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/akoestische-camera-kopen-of-dienst-inkopen" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Afwegingen</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Akoestische camera kopen of dienst inkopen?
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
