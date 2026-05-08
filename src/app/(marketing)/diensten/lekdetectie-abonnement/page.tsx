import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Lekdetectie-abonnement met jaarlijkse opvolging | GasProtex',
  description:
    'Quickscan, audit en jaarlijkse herhaling. Klantportaal met status per lek, QR-code op locatie. Voor industrie en voedingsmiddelensector.',
  alternates: {
    canonical: 'https://gasprotex.nl/diensten/lekdetectie-abonnement/',
  },
  openGraph: {
    title: 'Lekdetectie-abonnement: Quickscan, audit en jaarlijkse opvolging | GasProtex',
    description: 'Van Quickscan naar doorlopend abonnement. Jaarlijkse herhaling met klantportaal, status per lek en QR-codes op locatie. Voor industrie en voedingsmiddelensector.',
    url: 'https://gasprotex.nl/diensten/lekdetectie-abonnement/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Lekdetectie-abonnement met klantportaal en QR-tracking | GasProtex',
    description: 'Van Quickscan naar doorlopend abonnement. Jaarlijkse opvolging met klantportaal en QR-codes per lek.',
  },
}

const stappen = [
  {
    nr: 'Stap 1',
    title: 'Quickscan',
    duur: 'Een dagdeel',
    body: [
      'We komen langs voor een dagdeel en scannen je installatie met de ultrasone camera. Je krijgt een rapport met exacte locaties, geschat verlies per lek in euro\'s, en een herstelprioriteit. Geen verplichtingen daarna.',
      'Dit is het bewijs. Als de scan niets oplevert, ben je klaar. Als het wél wat oplevert (en dat doet het vrijwel altijd) beslis je zelf wat je ermee doet.',
    ],
  },
  {
    nr: 'Stap 2',
    title: 'Fabrieksaudit',
    duur: '1–3 dagen',
    body: [
      'Na de Quickscan weet je dat er lekken zijn. De Fabrieksaudit brengt je hele locatie systematisch in kaart. Elk perslucht- of gaslek wordt gelokaliseerd, gefotografeerd en voorzien van een QR-code op de plek zelf.',
      'Het eindrapport voldoet aan ISO 11011-vereisten en levert directe input voor je energie-audit of BRZO-rapportage.',
    ],
  },
  {
    nr: 'Stap 3',
    title: 'Abonnement',
    duur: 'Doorlopend, jaarlijkse herhaling',
    body: [
      'Lekken komen terug. Nieuwe koppelingen, slijtage, montageveranderingen: elk jaar ontstaan er nieuwe lekpunten. Met een abonnement herhalen we de scan jaarlijks en houden we je klantportaal actueel.',
      'In het portaal zie je per lek: status (open, in herstel, opgelost), jaarverlies, trend over de jaren. Je onderhoudsteam weet altijd waar ze moeten zijn.',
    ],
  },
]

const faqs = [
  {
    vraag: 'Zit ik vast aan een contract na de Quickscan?',
    antwoord:
      'Nee. De Quickscan is een eenmalige opdracht. Je beslist zelf of je verder wilt met een Audit of Abonnement.',
  },
  {
    vraag: 'Kan ik ook alleen een Audit doen zonder Quickscan?',
    antwoord:
      'Ja. Bij grotere locaties slaan we de Quickscan soms over en beginnen direct met een volledige Audit.',
  },
  {
    vraag: 'Hoe vaak wordt er gescand bij een abonnement?',
    antwoord:
      'Standaard jaarlijks. Bij bedrijven met hoge lekkage-frequentie is halfjaarlijks of per kwartaal mogelijk.',
  },
  {
    vraag: 'Wat gebeurt er als ik het abonnement opzeg?',
    antwoord:
      'Je behoudt toegang tot al je data en rapporten in het klantportaal. Die zijn van jou, niet van ons.',
  },
  {
    vraag: 'Hoe verhoudt een abonnement zich tot zelf apparatuur kopen?',
    antwoord:
      'Een Crysound 8125 met ATEX-kit kost €60-100k plus opleiding en onderhoud. Voor datzelfde bedrag doen we 3+ jaar abonnementsscans inclusief rapportage en klantportaal.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.vraag,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.antwoord,
    },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lekdetectie-abonnement',
  url: 'https://gasprotex.nl/diensten/lekdetectie-abonnement/',
  description: 'Quickscan, audit en jaarlijkse herhaling. Klantportaal met status per lek, QR-code op locatie. Voor industrie en voedingsmiddelensector.',
  provider: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  serviceType: 'Lekdetectie-abonnement',
  areaServed: { '@type': 'Country', name: 'Nederland' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gasprotex.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://gasprotex.nl/diensten/' },
    { '@type': 'ListItem', position: 3, name: 'Lekdetectie-abonnement', item: 'https://gasprotex.nl/diensten/lekdetectie-abonnement/' },
  ],
}

export default function AbonnementPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Sectie 1 — Hero */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main">

          <h1
            className="font-bold text-[#0A2238]"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              maxWidth: '720px',
            }}
          >
            Begin met een Quickscan. Daarna beslis je zelf.
          </h1>

          <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ maxWidth: '600px' }}>
            Geen langlopend contract, geen grote investering vooraf.
            Wij bewijzen eerst wat we vinden. Jij beslist of je verder wilt.
          </p>

        </div>
      </section>

      {/* Sectie 2 — Drie stappen */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >
            <div className="space-y-12">
              {stappen.map((stap, i) => (
                <div key={stap.nr}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <p className="text-[#F07830] text-sm font-semibold mb-2">{stap.nr}</p>
                      <h2 className="text-[#0A2238] font-bold text-2xl mb-2">{stap.title}</h2>
                      <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>{stap.duur}</p>
                    </div>
                    <div className="lg:col-span-2">
                      {stap.body.map((alinea, j) => (
                        <p
                          key={j}
                          className="text-[#3D5A6E]"
                          style={{ fontSize: 15, lineHeight: 1.7, marginBottom: j < stap.body.length - 1 ? '16px' : 0 }}
                        >
                          {alinea}
                        </p>
                      ))}
                    </div>
                  </div>
                  {i < stappen.length - 1 && (
                    <div className="border-t border-[#E8EDF2] mt-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3 — FAQ */}
      <section style={{ background: '#ffffff', paddingTop: '16px', paddingBottom: '4px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '24px' }}
          >

          <h2
            className="font-bold text-[#0A2238] text-4xl mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Veelgestelde vragen
          </h2>

          <div style={{ maxWidth: '640px' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: '1px solid rgba(10,34,56,0.1)' }}
              >
                <p className="font-bold text-[#0A2238] text-base mb-2">{faq.vraag}</p>
                <p className="text-[#3D5A6E] text-sm leading-relaxed">{faq.antwoord}</p>
              </div>
            ))}
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
                  Klein beginnen, zelf beslissen.
                </h2>
              </div>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                style={{ padding: '14px 32px' }}
              >
                Vraag een Quickscan aan →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
