import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Over GasProtex, specialist in lekdetectie als dienst',
  description:
    'Marcelinus Verkuil, 10+ jaar ervaring in industriële instrumentatie en lekdetectie. Specialist met focus op lekdetectie als dienst. ATEX-gecertificeerd.',
  alternates: {
    canonical: 'https://gasprotex.nl/over-ons',
  },
  openGraph: {
    title: 'Over GasProtex — Specialist in lekdetectie | Marcelinus Verkuil',
    description: '10+ jaar ervaring in industriële instrumentatie en lekdetectie. Lekdetectie als dienst: geen apparatuur-verkoop, wel het resultaat. ATEX-gecertificeerd.',
    url: 'https://gasprotex.nl/over-ons/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Over GasProtex — Specialist in lekdetectie | Marcelinus Verkuil',
    description: '10+ jaar ervaring in industriële instrumentatie en lekdetectie. ATEX-gecertificeerd.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Marcelinus Verkuil',
      jobTitle: 'Oprichter',
      worksFor: { '@type': 'Organization', name: 'GasProtex' },
    },
    {
      '@type': 'Organization',
      name: 'GasProtex',
      url: 'https://gasprotex.nl',
      founder: { '@type': 'Person', name: 'Marcelinus Verkuil' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
        { '@type': 'ListItem', position: 2, name: 'Over ons', item: 'https://gasprotex.nl/over-ons/' },
      ],
    },
  ],
}

const certificeringen = [
  {
    titel: 'ATEX-gecertificeerd',
    tekst: 'Onze Crysound 8125 is ATEX-gecertificeerd voor zone 2 en zone 22. Het is \'s werelds eerste TÜV-gecertificeerde intrinsiek veilige akoestische camera.',
  },
  {
    titel: 'VCA-vol',
    tekst: 'Veiligheidscertificering voor werken op industriële locaties.',
  },
  {
    titel: 'Crysound-gecertificeerd',
    tekst: 'Getraind en gecertificeerd operator op de Crysound 8125 ultrasone camera.',
  },
]

const werkwijze = [
  {
    titel: 'Werkgebied: Nederland',
    tekst: 'We werken door heel Nederland. Geen reiskosten-toeslag.',
    link: null,
  },
  {
    titel: 'Specialist met focus',
    tekst: 'Lekdetectie als dienst: niets anders. Geen breed onderhoudsbedrijf, geen apparatuur-verkoop.',
    link: { href: '/diensten/', label: 'Bekijk wat we doen →' },
  },
  {
    titel: 'Klantportaal voor opvolging',
    tekst: 'Elke scan levert een rapport op dat je terugziet in het klantportaal. QR-code per lek, status-tracking, trend-overzicht.',
    link: null,
  },
  {
    titel: 'Naast je bestaande onderhoud',
    tekst: 'Wij vervangen je onderhoudspartner niet. Wij vullen aan, specifiek op lekdetectie, met QR-code per lek en opvolging via het klantportaal.',
    link: { href: '/diensten/', label: 'Bekijk wat we doen →' },
  },
]

export default function OverOnsPage() {
  return (
    <>
      <Script
        id="over-ons-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sectie 1 — Hero */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1
                className="font-bold text-[#0A2238] mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Over GasProtex
              </h1>
              <p className="text-[#3D5A6E] text-lg leading-relaxed">
                Specialist met focus: lekdetectie als dienst, niets anders.
              </p>
            </div>

            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3', background: '#F4F7FA' }}
            />
          </div>

        </div>
      </section>

      {/* Sectie 2 — Wie en waarom */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <div>
                <p className="text-[#7AADCC] text-xs tracking-widest uppercase font-medium mb-4">Wie</p>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-4" style={{ lineHeight: 1.2 }}>
                  Marcelinus Verkuil
                </h2>
                <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Ruim 10 jaar ervaring in de Nederlandse industrie, met focus op
                  instrumentatie, meettechniek en industriële veiligheid. Ik werkte aan
                  de leveranciers-kant en zag van dichtbij hoe bedrijven worstelden
                  met dezelfde uitdaging: dure apparatuur aanschaffen, een training
                  volgen, en er daarna zelf uit moeten komen. De meeste hadden daar
                  de tijd niet voor. De apparatuur verdween in de kast.
                </p>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Bij GasProtex draai ik het om. Geen apparatuur verkopen, wel de
                  dienst leveren. Ik kom langs, vind de lekken, lever het rapport,
                  en zorg via het klantportaal dat er ook iets mee gebeurt.
                </p>
              </div>

              <div>
                <p className="text-[#7AADCC] text-xs tracking-widest uppercase font-medium mb-4">Waarom GasProtex bestaat</p>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-4" style={{ lineHeight: 1.2 }}>
                  Apparatuur kopen lost geen lekken op.
                </h2>
                <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  De markt zit vol apparatuur-verkopers. Goede camera's, geavanceerde
                  detectiesystemen, gespecialiseerde merken. Maar wie komt er daadwerkelijk
                  langs om de lekken te vinden? Vrijwel niemand levert lekdetectie als
                  pure dienstverlening.
                </p>
                <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een ultrasone camera met ATEX-kit kost €60-100k. Plus
                  opleiding, kalibratie, onderhoud, operator-tijd. Voor de
                  meeste bedrijven is dat geen reële investering.
                </p>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Een Quickscan bij ons begint bij €2.500. Wij brengen de
                  apparatuur, de ervaring en de rapportage. Jij krijgt het resultaat.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3 — Certificeringen + werkwijze */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200" style={{ padding: '24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-[#0A2238] font-bold text-2xl mb-6">Certificeringen</h2>
              <div className="space-y-4">
                {certificeringen.map((c) => (
                  <div key={c.titel} className="flex items-start gap-4">
                    <div>
                      <p className="text-[#0A2238] font-semibold mb-1">{c.titel}</p>
                      <p className="text-[#3D5A6E]" style={{ fontSize: 15 }}>{c.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[#0A2238] font-bold text-2xl mb-6">Hoe we werken</h2>
              <div className="space-y-4">
                {werkwijze.map((w) => (
                  <div key={w.titel} className="flex items-start gap-4">
                    <div>
                      <p className="text-[#0A2238] font-semibold mb-1">{w.titel}</p>
                      <p className="text-[#3D5A6E] text-sm">{w.tekst}</p>
                      {w.link && (
                        <Link
                          href={w.link.href}
                          className="inline-block text-[#1E87B4] hover:text-[#0A2238] transition-colors"
                          style={{ fontSize: 13, marginTop: '6px' }}
                        >
                          {w.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>

      {/* Sectie 4 — CTA-banner */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '20px 24px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-1">
                  Wil je weten wat we voor jou kunnen doen?
                </h2>
              </div>
              <a
                href={BOOKINGS_URL}
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                style={{ padding: '14px 32px' }}
              >
                Plan kennismakingsgesprek →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
