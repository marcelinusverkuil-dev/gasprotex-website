import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Wat kost een persluchtlek per jaar? | GasProtex',
  description:
    'Een lek van 1 mm kost al 500 tot 1500 euro per jaar. Hoe je de kosten zelf berekent en welke lekkage-oorzaken het meest voorkomen.',
  alternates: {
    canonical: 'https://gasprotex.nl/kennisbank/wat-kost-een-persluchtlek',
  },
  openGraph: {
    title: 'Wat kost een persluchtlek? De berekening met voorbeelden | GasProtex',
    description: 'Wat kost een persluchtlek per jaar? Concrete berekeningen per lekgrootte bij 24/7 bedrijfsvoering. Met CO₂-impact en besparingstips.',
    url: 'https://gasprotex.nl/kennisbank/wat-kost-een-persluchtlek/',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Wat kost een persluchtlek? De berekening met voorbeelden | GasProtex',
    description: 'Wat kost een persluchtlek per jaar? Concrete berekeningen per lekgrootte bij 24/7 bedrijfsvoering.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost een persluchtlek? De berekening met voorbeelden',
  description:
    'Wat kost een persluchtlek per jaar? Concrete berekeningen per lekgrootte bij 24/7 bedrijfsvoering. Met CO₂-impact en besparingstips.',
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
  datePublished: '2026-05-07T09:00:00+02:00',
  dateModified: '2026-05-07T09:00:00+02:00',
  mainEntityOfPage: 'https://gasprotex.nl/kennisbank/wat-kost-een-persluchtlek/',
  inLanguage: 'nl-NL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://gasprotex.nl/kennisbank' },
    { '@type': 'ListItem', position: 3, name: 'Wat kost een persluchtlek?', item: 'https://gasprotex.nl/kennisbank/wat-kost-een-persluchtlek' },
  ],
}

const kostentabel = [
  { label: 'Klein lek (1 mm)', druk: '6 bar', debiet: '64 l/min', m3: '33.586', kwh: '6.449', kosten: '€ 1.290', highlight: false },
  { label: 'Middelgroot lek (3 mm)', druk: '7 bar', debiet: '657 l/min', m3: '345.319', kwh: '70.445', kosten: '€ 14.089', highlight: false },
  { label: 'Groot lek (5 mm)', druk: '8 bar', debiet: '2.053 l/min', m3: '1.078.857', kwh: '233.033', kosten: '€ 46.607', highlight: true },
]

const co2tabel = [
  { label: 'Klein lek', co2: '1,4 ton', bomen: '234', km: '9.200 km', highlight: false },
  { label: 'Middelgroot lek', co2: '15,5 ton', bomen: '2.589', km: '100.700 km', highlight: false },
  { label: 'Groot lek', co2: '51,3 ton', bomen: '8.567', km: '333.200 km', highlight: true },
]

export default function WatKostPersluchtlekPage() {
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
              Perslucht
            </p>
            <h1
              className="font-bold text-[#0A2238] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Wat kost een persluchtlek? De berekening met voorbeelden
            </h1>
            <p className="text-[#6B8FA6] mb-6" style={{ fontSize: 15 }}>
              GasProtex · 7 mei 2026 · 5 minuten leestijd
            </p>
            <p className="text-[#3D5A6E] text-lg leading-relaxed">
              Perslucht is een van de duurste energiedragers in de industrie. Toch weten veel bedrijven
              niet wat hun lekken kosten. In dit artikel rekenen we het voor: van de factoren die de kosten
              bepalen tot concrete voorbeelden per lekgrootte. Zodat je weet wat er weglekt, en wat je kunt besparen.
            </p>
          </div>

          {/* Artikel-body */}
          <div style={{ maxWidth: '720px', marginTop: '48px' }}>

            <h2 className="text-[#0A2238] font-bold mt-8 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waarom perslucht zo duur is
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Van alle industrieel verbruikte elektriciteit in Nederland gaat ongeveer 10% naar persluchtopwekking.
              Bij de gemiddelde installatie vormen de energiekosten 70 tot 75% van de totale kosten over de levensduur.
              Investering en onderhoud zijn bijzaak vergeleken met de stroomrekening.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              En daar zit het probleem: verliespercentages van 15 tot 30% zijn normaal in de industrie.
              Bij een compressor die continu draait om lekken te compenseren, betaal je letterlijk voor lucht
              die nergens terechtkomt. De compressor merkt het niet. De productie merkt het niet.
              Alleen de energierekening merkt het.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Waar hangt de kostprijs van een lek vanaf?
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De kosten van een persluchtlek worden bepaald door een combinatie van factoren:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">De grootte van het lek.</strong>{' '}
              Gemeten in liter per minuut. Een gaatje van 1 mm lekt bij 6 bar ongeveer 64 liter per minuut.
              Een gat van 5 mm bij 8 bar al meer dan 2.000 liter per minuut. Het verschil in kosten is enorm.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">De systeemdruk.</strong>{' '}
              Hoe hoger de druk in je systeem, hoe meer energie het kost om diezelfde lucht te comprimeren.
              Een installatie op 8 bar is duurder per gelekt volume dan een op 6 bar.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">De draaiuren van de installatie.</strong>{' '}
              De meeste industriële persluchtsystemen draaien 24 uur per dag, 365 dagen per jaar.
              Elk lek kost dan 8.760 uur per jaar geld. Bij installaties die alleen overdag draaien zijn
              de kosten per lek lager, maar het principe is hetzelfde.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">De energieprijs.</strong>{' '}
              In Nederland betaalt een gemiddeld MKB-bedrijf momenteel rond de €0,20 per kWh aan elektriciteit.
              Dit tarief verschilt per contract en per verbruiksprofiel. Hoe hoger je stroomprijs, hoe duurder elk lek.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Het specifiek vermogen van de compressor.</strong>{' '}
              Een moderne, goed onderhouden compressor verbruikt minder energie per kubieke meter perslucht
              dan een ouder exemplaar. Standaard wordt gerekend met 0,12 kWh per m³. Bij oudere of minder
              efficiënte installaties kan dit hoger liggen.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Drie voorbeelden: van klein tot groot
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Hieronder drie scenario&apos;s bij continue bedrijfsvoering (24/7, 8.760 uur per jaar) en
              een stroomprijs van €0,20 per kWh.
            </p>

            {/* Tabel 1 — Kosten */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '560px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['', 'Druk', 'Lekdebiet', 'm³/jaar', 'kWh/jaar', 'Kosten/jaar'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {kostentabel.map((rij) => (
                      <tr
                        key={rij.label}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-medium'} style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.label}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.druk}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.debiet}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.m3}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.kwh}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-semibold'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-[#6B8FA6]" style={{ fontSize: 12, lineHeight: 1.6 }}>
              Rekenmethode: (l/min ÷ 1.000 × 60) × 8.760 uur × 0,12 kWh/m³ × drukfactor × €0,20/kWh.
            </p>

            <p className="text-[#3D5A6E] leading-relaxed mt-6 mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Dat zijn de kosten van één lek. Bij een gemiddelde inspectie vinden we tien tot dertig lekken
              per locatie. Tel dat bij elkaar op en je begrijpt waarom bedrijven die voor het eerst een
              akoestische scan laten doen, schrikken van het resultaat.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Een gemiddelde productielocatie met vijftien kleine tot middelgrote lekken verliest al snel
              €12.000 tot €30.000 per jaar aan ongebruikte perslucht. Dat is geld dat letterlijk de lucht ingaat.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              De CO₂-impact
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Naast de financiële kosten is er de milieubelasting. Per verbruikte kWh stoot een gemiddelde
              Nederlandse stroomproducent 0,22 kg CO₂ uit. In de drie voorbeelden hierboven:
            </p>

            {/* Tabel 2 — CO₂ */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(10,34,56,0.1)', minWidth: '480px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      {['', 'CO₂/jaar', 'Equivalent bomen', 'Equivalent auto-km'].map((h) => (
                        <th key={h} className="text-left text-[#0A2238] font-semibold" style={{ padding: '10px 14px', fontSize: 15 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {co2tabel.map((rij) => (
                      <tr
                        key={rij.label}
                        style={{
                          borderTop: '1px solid rgba(10,34,56,0.08)',
                          background: rij.highlight ? '#E8F1FB' : 'transparent',
                        }}
                      >
                        <td className={rij.highlight ? 'text-[#0A2238] font-bold' : 'text-[#0A2238] font-medium'} style={{ padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{rij.label}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.co2}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.bomen}</td>
                        <td className={rij.highlight ? 'text-[#0A2238] font-semibold' : 'text-[#3D5A6E]'} style={{ padding: '10px 14px', fontSize: 15 }}>{rij.km}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-[#6B8FA6]" style={{ fontSize: 12, lineHeight: 1.6 }}>
              CO₂-factor: 0,22 kg/kWh (NL stroommix). Auto-equivalent: 6,5 km per kg CO₂. Bomen: 6 kg CO₂-opname per boom per jaar.
            </p>

            <p className="text-[#3D5A6E] leading-relaxed mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Voor bedrijven met duurzaamheidsdoelstellingen of ESG-rapportages is persluchtlekkage een
              directe, meetbare en relatief eenvoudig te reduceren emissiebron.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Wat de meeste bedrijven onderschatten
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De kosten per individueel lek lijken soms beheersbaar. Maar drie factoren maken het totaalplaatje
              groter dan verwacht:
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Aantal lekken.</strong>{' '}
              Een persluchtinstallatie met honderden koppelingen, aftakkingen, cilinders en slangaansluitingen
              heeft vrijwel altijd meerdere lekken tegelijk. Vijf kleine lekken kosten bij continue
              bedrijfsvoering samen al bijna €6.500 per jaar.
            </p>
            <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/waar-zitten-persluchtlekken" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Waar zitten persluchtlekken meestal?
              </Link>
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">Lekken groeien.</strong>{' '}
              Een lek dat vandaag klein is, is over zes maanden groter. Koppelingen die trillen, slijtage
              aan afdichtingen, thermische uitzetting: de debietverliezen nemen toe als je niet ingrijpt.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <strong className="text-[#0A2238]">De compressor compenseert.</strong>{' '}
              Zolang de compressor het verlies kan bijhouden, merkt de productie niets. Het systeem werkt
              gewoon. Maar de compressor draait langer, verbruikt meer stroom, slijt sneller en het onderhoud
              wordt duurder. Die kosten zijn onzichtbaar tot je ze meet. Het resultaat: bedrijven die nog
              nooit een lekdetectie hebben laten doen, zijn vaak verrast door het totaalbedrag. Niet omdat
              de individuele lekken zo groot zijn, maar omdat het er zoveel zijn.
            </p>

            <h2 className="text-[#0A2238] font-bold mt-12 mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2 }}>
              Zelf rekenen of laten uitrekenen
            </h2>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Op{' '}
              <Link href="/bereken-uw-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                gasprotex.nl/bereken-uw-besparing/perslucht/
              </Link>{' '}
              staat onze calculator. Vul je geschatte lekdebiet, systeemdruk en stroomtarief in en je ziet
              direct wat persluchtlekkage je kost. Geen registratie nodig, direct resultaat.
            </p>
            <p className="text-[#3D5A6E] leading-relaxed mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              De calculator geeft een indicatie op basis van gemiddelden. Wil je weten wat de werkelijke
              lekken in jouw installatie kosten? Dan is een inspectie ter plaatse nodig. Bij een akoestische
              scan brengen we elk lek in kaart: locatie, geschat debiet, jaarlijkse kosten en herstelprioriteit.
            </p>
            <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Lees ook:{' '}
              <Link href="/kennisbank/lekdetectie-methoden-vergeleken" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                Lekdetectie methoden vergeleken
              </Link>
              {' '}·{' '}
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
                  Je wilt eerst een indicatie van de kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Gebruik onze{' '}
                  <Link href="/bereken-uw-besparing/perslucht" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    calculator
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0A2238] mb-2" style={{ fontSize: 15 }}>
                  Je wilt weten waar de lekken zitten en wat ze kosten.
                </p>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een akoestische scan geeft je in een dagdeel een indicatief beeld. Lees meer over onze{' '}
                  <Link href="/diensten" className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
                    aanpak
                  </Link>.
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
                <Link href="/kennisbank/atex-zones-uitgelegd" className="block">
                  <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200 p-6" style={{ background: '#ffffff' }}>
                    <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-2">ATEX &amp; Compliance</p>
                    <h3 className="font-bold text-base text-[#0A2238] mb-3 leading-snug">
                      ATEX-zones uitgelegd: wat betekent zone 2 voor lekdetectie?
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
