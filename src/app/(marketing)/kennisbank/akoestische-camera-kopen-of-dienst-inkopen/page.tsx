import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

const BOOKINGS = 'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Akoestische camera kopen of dienst inkopen? | GasProtex',
  description:
    'Wat zit er écht in de keuze tussen een eigen akoestische camera en lekdetectie als dienst? Eerlijke afweging met scenario\'s en beslismatrix.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/akoestische-camera-kopen-of-dienst-inkopen',
  },
  openGraph: {
    title: 'Akoestische camera kopen of dienst inkopen? | GasProtex',
    description:
      'Eerlijke afweging tussen eigen akoestische camera en lekdetectie als dienst. Met cijfers, scenario\'s en een beslismatrix.',
    url: 'https://gasprotex.nl/kennisbank/akoestische-camera-kopen-of-dienst-inkopen',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Akoestische camera kopen of dienst inkopen? | GasProtex',
    description:
      'Eerlijke afweging tussen eigen akoestische camera en lekdetectie als dienst. Met cijfers en beslismatrix.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Akoestische camera kopen of dienst inkopen?',
  description:
    'Wat zit er écht in de keuze tussen een eigen akoestische camera en lekdetectie als dienst? Eerlijke afweging met scenario\'s en beslismatrix.',
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
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/akoestische-camera-kopen-of-dienst-inkopen',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Kennisbank', url: 'https://gasprotex.nl/kennisbank' },
  { name: 'Akoestische camera kopen of dienst inkopen', url: 'https://gasprotex.nl/kennisbank/akoestische-camera-kopen-of-dienst-inkopen' },
])

const eenmaligeKosten = [
  { label: 'Akoestische camera, ATEX-uitvoering', bandbreedte: '€40.000 – €60.000' },
  { label: 'ATEX-opleiding voor de operator (afhankelijk van niveau)', bandbreedte: '€180 – €3.565 per persoon' },
  { label: 'Aanvullende kit (afhankelijk van zone-classificatie + leverancier)', bandbreedte: 'Op offerte' },
]

const terugkerendeKosten = [
  {
    label: 'Operator-tijd',
    toelichting:
      'Een ATEX-bevoegde technicus kost een werkgever in 2026 grofweg €55.000 – €70.000 per jaar (CAO Metaal & Techniek, inclusief werkgeverslasten). Bij intensief gebruik (10–15% van een FTE) is dat circa €5.500 – €10.500 per jaar aan toegerekende personeelskosten.',
  },
  {
    label: 'Kalibratie + onderhoud',
    toelichting:
      'Variabel per leverancier en gebruiksintensiteit. Vraag dit expliciet uit in een offerte voordat je beslist.',
  },
]

const scenarioA = [
  { label: 'Eerste jaar', eigen: '€40.000 – €60.000 hardware + €180 – €3.565 opleiding + ~€2.000 – €3.500 operator-tijd', dienst: '2 × Quickscan = €5.000' },
  { label: 'Jaar 2 t/m 5 (per jaar)', eigen: '~€2.000 – €3.500 operator-tijd', dienst: '€5.000' },
  { label: '5-jaars totaal (conservatief)', eigen: '€48.000 – €77.500', dienst: '€25.000', highlight: true },
]

const scenarioB = [
  { label: 'Eerste jaar', eigen: '€40.000 – €60.000 hardware + opleiding + ~€8.000 – €10.500 operator-tijd', dienst: 'Abonnement (op offerte)' },
  { label: 'Jaar 2 t/m 5 (per jaar)', eigen: '~€8.000 – €10.500 operator-tijd', dienst: 'Abonnement' },
  { label: '5-jaars totaal (conservatief)', eigen: '€72.000 – €115.000+', dienst: 'Afhankelijk van offerte, vaak gunstiger dan zelf aanschaffen bij dit volume', highlight: true },
]

const beslismatrix = [
  { factor: 'Aantal inspecties per jaar', kopen: 'Zes of meer', dienst: 'Eén tot vier' },
  { factor: 'ATEX-bevoegde technicus in huis?', kopen: 'Ja, full-time', dienst: 'Nee, of deeltijd / inhuur' },
  { factor: 'Budgetstructuur', kopen: 'CAPEX-georiënteerd', dienst: 'OPEX-georiënteerd, voorspelbare kosten gewenst' },
  { factor: 'Behoefte aan externe rapportage (BRZO, ESG, ATEX)', kopen: 'Intern team verzorgt zelf', dienst: 'Externe rapportage gewenst' },
  { factor: 'Verwachte gebruiksduur camera', kopen: '8 – 10 jaar', dienst: '< 5 jaar of onbekend' },
]

export default function AkoestischeCameraKopenOfDienstInkopenPage() {
  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '32px' }}>
        <div className="container-main">

          {/* Header */}
          <div style={{ maxWidth: '720px' }}>
            <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-4">
              Afwegingen
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Akoestische camera kopen of dienst inkopen?
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 18 mei 2026 · 5 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed italic">
              Een ATEX-gecertificeerde akoestische camera is een serieuze investering — tussen de €40.000 en €60.000 voor de hardware, naast een operator die ermee om kan gaan en jaarlijkse vaste kosten die doorlopen. Hoe weeg je dat af tegen een dienst die per inspectie of per jaar afrekent? Dit artikel geeft de cijfers, geen verkooppraat.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De korte versie
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Eigen aanschaf rendeert pas wanneer je <strong className="text-[#0A2238]">meer dan zes inspecties per jaar</strong> doet én een ATEX-gecertificeerde technicus in huis hebt die de camera consequent inzet. Onder die drempel betaal je voor capaciteit die ongebruikt blijft.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Dienst inkopen rendeert wanneer je <strong className="text-[#0A2238]">één tot vier inspectie-momenten per jaar</strong> hebt, geen eigen ATEX-bevoegd team in huis, of behoefte aan rapportage met euro-impact per lek in plaats van locatie-coördinaten.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat kost een eigen camera?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De hardware is het deel dat het meest opvalt, maar zelden de grootste kostenpost over een aantal jaren.
            </p>

            <h3 className="text-[#0A2238] font-semibold mt-4 mb-3" style={{ fontSize: 17 }}>
              Eenmalige kosten bij aanschaf
            </h3>

            {/* Tabel 1 — Eenmalige kosten */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '480px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['Kostenpost', 'Bandbreedte'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {eenmaligeKosten.map((rij) => (
                      <tr key={rij.label} style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                        <td className="text-[#0A2238] font-medium" style={{ padding: '10px 14px', fontSize: 15 }}>{rij.label}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15 }}>{rij.bandbreedte}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-6 mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De software voor analyse en rapportage wordt door de meeste leveranciers gratis bij de camera geleverd. Geen jaarlijkse licentie-kosten dus, maar het scheelt veel of je bij een nieuwe versie wel of niet automatisch toegang hebt.
            </p>

            <h3 className="text-[#0A2238] font-semibold mt-8 mb-3" style={{ fontSize: 17 }}>
              Terugkerende kosten per jaar
            </h3>

            {/* Tabel 2 — Terugkerende kosten */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '620px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['Kostenpost', 'Toelichting'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {terugkerendeKosten.map((rij) => (
                      <tr key={rij.label} style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                        <td className="text-[#0A2238] font-medium align-top" style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.label}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.toelichting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Tel daar nog de <strong className="text-[#0A2238]">leertijd</strong> bij op: een operator komt niet meteen tot bruikbare meetresultaten op dag één. Reken in de eerste 6-12 maanden op meer scan-tijd per inspectie en op gemiste lekken die een ervaren technicus wel zou hebben gezien.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat kost dienst-inkoop?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een <strong className="text-[#0A2238]">Quickscan</strong> bij GasProtex start vanaf €2.500: één dagdeel ter plaatse, akoestische camera-inspectie, rapport binnen 24 uur met euro-impact en CO₂-impact per gevonden lek. Geen kapitaalinvestering, geen operator-opleiding, geen kalibratie-zorgen.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor klanten met meerdere inspectiemomenten per jaar bieden we een <strong className="text-[#0A2238]">abonnementsvorm</strong> waarin inspecties, het klantportaal, rapportage en doorlopende monitoring zijn meegenomen. De jaarprijs hangt af van schaal en frequentie — vraag een offerte aan voor jouw situatie.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Twee scenario&apos;s, zij aan zij
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Twee voorbeelden, conservatief gerekend. Beide scenario&apos;s veronderstellen dat de operator-tijd ook werkelijk wordt toegerekend (en niet onbetaalde overhead is voor een al rondlopende technicus).
            </p>

            <h3 className="text-[#0A2238] font-semibold mt-6 mb-3" style={{ fontSize: 17 }}>
              Scenario A — twee inspecties per jaar (typisch bij kleine of middelgrote installaties)
            </h3>

            {/* Tabel 3 — Scenario A */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '680px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['', 'Eigen camera', 'Dienst inkopen'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioA.map((rij) => (
                      <tr
                        key={rij.label}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-medium'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.label}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.eigen}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.dienst}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-[#0A2238] font-semibold mt-10 mb-3" style={{ fontSize: 17 }}>
              Scenario B — twaalf inspecties per jaar (intensieve monitoring of BRZO-omgeving)
            </h3>

            {/* Tabel 4 — Scenario B */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '680px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['', 'Eigen camera', 'Dienst inkopen'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioB.map((rij) => (
                      <tr
                        key={rij.label}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-medium'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.label}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.eigen}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.dienst}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#3D5A6E] leading-relaxed mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Het kantelpunt ligt rond <strong className="text-[#0A2238]">zes inspecties per jaar</strong>. Onder die frequentie is dienst-inkoop bijna altijd gunstiger; erboven kantelt de balans richting eigen aanschaf — mits je een ervaren operator in huis hebt.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wanneer is kopen wél logisch?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Eerlijke vergelijking. Eigen aanschaf is in deze vier situaties verdedigbaar:
            </p>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Hoge frequentie (zes of meer inspecties per jaar)
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Bij dagelijks of wekelijks scannen drukt de TCO per scan ver onder dienst-prijzen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Eigen ATEX-bevoegd technisch team beschikbaar
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een full-time technicus die het toch al druk heeft kan de camera als integraal onderdeel van het onderhoudsprogramma inzetten. De operator-tijd is dan geen incrementele kostenpost.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Strategische in-house monitoring (BRZO/Seveso)
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Sommige BRZO-bedrijven kiezen voor in-house gasdetectie omdat continue beschikbaarheid een veiligheidsvereiste is, los van pure ROI.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Lange-termijn budget en CAPEX-cultuur
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Als jouw organisatie kapitaalinvesteringen prefereert boven operationele uitgaven (fiscaal of administratief), sluit aanschaf daarbij aan.
                </p>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wanneer is dienst-inkoop logisch?
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Eén tot vier inspecties per jaar
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Onder deze drempel zit je vast aan capaciteit waarvoor je vaste kosten betaalt zonder ze terug te verdienen. Dienst-inkoop schaalt met je echte behoefte.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Geen eigen ATEX-bevoegde technicus
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een operator opleiden, certificeren en up-to-date houden is een meerjarige investering. Bij dienst-inkoop zit dat in het tarief.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Variabele inspectie-momenten (audits, incidenten)
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Als je behoefte piekt rond audits (BRZO, ATEX 153, EU-Methaanverordening) maar daarbuiten laag is, kun je beter ad-hoc inkopen dan vaste capaciteit aanhouden.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Behoefte aan euro-impact rapportage
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een eigen camera levert lekkage-coördinaten. Een dienst-rapport geeft euro&apos;s per lek, CO₂-impact, prioritering en herstel-advies. Dat versnelt besluitvorming én ROI.
                </p>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Beslismatrix — welke route past bij jou?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Beantwoord vijf vragen. Drie of meer &quot;kopen&quot; → koop is verdedigbaar. Drie of meer &quot;dienst&quot; → kies dienst-inkoop.
            </p>

            {/* Tabel 5 — Beslismatrix */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '680px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['Factor', 'Wijst op kopen', 'Wijst op dienst'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {beslismatrix.map((rij) => (
                      <tr key={rij.factor} style={{ borderTop: '1px solid rgba(10,34,56,0.08)' }}>
                        <td className="text-[#0A2238] font-medium align-top" style={{ padding: '10px 14px', fontSize: 15 }}>{rij.factor}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.kopen}</td>
                        <td className="text-[#3D5A6E]" style={{ padding: '10px 14px', fontSize: 15, lineHeight: 1.6 }}>{rij.dienst}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat past bij jouw situatie?
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  1. Je twijfelt nog — eerst een Quickscan
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  De eenvoudigste manier om de impact van akoestische gaslekdetectie voor jouw specifieke installatie te peilen, is een eenmalige Quickscan. Eén dagdeel, geen verplichting, concreet rapport met euro-impact per gevonden lek. Daarna beslis je: blijvend dienst inkopen, of toch in eigen apparatuur investeren.{' '}
                  <Link href="/contact" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    Plan een Quickscan
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  2. Je wil eerst weten wat je verliest
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Onze{' '}
                  <Link href="/bereken-je-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    perslucht-besparingscalculator
                  </Link>
                  {' '}berekent in twee minuten wat een typisch lek in jouw situatie per jaar kost — inclusief CO₂-impact en auto-kilometer-equivalent. Geeft je de business case-ruimte om een vervolggesprek aan te gaan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  3. Je wil meer weten over onze aanpak
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Lees over ons{' '}
                  <Link href="/diensten/lekdetectie-abonnement" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    lekdetectie-abonnement
                  </Link>
                  {' '}— de drie stappen van Quickscan tot doorlopende monitoring.
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
                <Link href="/kennisbank/wat-kost-een-persluchtlek" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Perslucht</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Wat kost een persluchtlek per jaar?
                    </h3>
                    <span className="text-[#F07830] text-sm font-semibold">Lees meer →</span>
                  </div>
                </Link>
                <Link href="/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">Gaslekdetectie</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      Akoestische naast vaste gasdetectie: aanvulling, geen vervanging
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
