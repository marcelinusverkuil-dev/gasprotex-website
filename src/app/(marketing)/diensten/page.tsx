import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Gas- en persluchtlekdetectie als dienst | GasProtex',
  description:
    'Ultrasone gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Rapport met euro-impact per lek. Vraag een Quickscan aan.',
  alternates: {
    canonical: 'https://gasprotex.nl/diensten/',
  },
}

const faqItems = [
  {
    question: 'Hoe werkt ultrasone lekdetectie?',
    answer:
      'Elk lek onder druk produceert ultrasone geluidsgolven. Onze camera vangt die op en toont de exacte locatie — ook in lawaaierige productieomgevingen.',
  },
  {
    question: 'Hoe lang duurt een scan?',
    answer:
      'Meestal een dagdeel (3–4 uur). Geen stilstand nodig — we meten tijdens normale productie.',
  },
  {
    question: 'Wat kost een persluchtlek per jaar?',
    answer:
      'Afhankelijk van druk en debiet. Een lek van 1 mm kost al €500–€1.500 per jaar aan energie. Bij 20–30 lekken loopt dat snel op.',
  },
  {
    question: 'Is gasdetectie met ultrasoon ATEX-gecertificeerd?',
    answer:
      'Ja. Onze Crysound 8125 is gecertificeerd voor ATEX zone 1. Wij zijn VCA-vol gecertificeerd als operator.',
  },
  {
    question: 'Vervangt dit onze vaste gasdetectie?',
    answer:
      'Nee. Wij vullen aan waar vaste detectoren blinde vlekken hebben. Je bestaande systeem blijft gewoon draaien.',
  },
  {
    question: 'Wat als jullie wegvallen?',
    answer: 'Je data en rapportage zijn van jou. Crysound als backup bij noodgevallen.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas- en persluchtlekdetectie',
  provider: {
    '@type': 'Organization',
    name: 'GasProtex',
    url: 'https://gasprotex.nl',
  },
  description:
    'Ultrasone gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd.',
  areaServed: 'NL',
}

function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path
        d="M8.5 1L13 5L8.5 9M1 5H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DienstenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Sectie 1 — Hero (licht) */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1
                className="font-bold text-[#0A2238] mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                Gas- en persluchtlekdetectie als dienst.
              </h1>
              <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 18, lineHeight: 1.75 }}>
                Wij vinden lekken die je niet hoort, ziet of ruikt. Met een ultrasone camera
                lokaliseren we elk lek — tijdens normale productie, zonder stilstand.
              </p>
              <p className="text-[#3D5A6E] mb-4" style={{ fontSize: 18, lineHeight: 1.75 }}>
                Geen apparatuur kopen of eigen operator opleiden. Wij komen langs, scannen, en
                leveren een rapport met exacte locaties en euro-impact per lek.
              </p>
              <p className="text-[#6B8FA6] mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
                ATEX-gecertificeerd. VCA-vol. Voor industrie en voedingsmiddelensector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
                  style={{ padding: '14px 32px' }}
                >
                  Vraag een Quickscan aan
                  <ArrowRight />
                </a>
                <a
                  href={BOOKINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#0A2238]/25 text-[#0A2238] hover:border-[#0A2238]/50 text-sm font-semibold rounded-md transition-colors"
                  style={{ padding: '14px 32px' }}
                >
                  Plan kennismakingsgesprek
                </a>
              </div>
            </div>

            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src="/hero-image-v2.jpg"
                alt="Operator met Crysound ultrasone camera in industriële setting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 2 — Twee kaarten */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Kaart: Perslucht */}
            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}>
              <p className="text-[#7AADCC] mb-6" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Perslucht</p>
              <h2
                className="font-bold text-white mb-6"
                style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                20–30% perslucht gaat verloren. Bij 200&nbsp;kW is dat €15.000–€25.000 per jaar.
              </h2>
              <p className="text-[#C2DCE8] mb-4" style={{ fontSize: 16, lineHeight: 1.75 }}>
                Een gemiddeld productiebedrijf verliest 20–30% van zijn perslucht door lekken.
                Bij een installatie van 200&nbsp;kW is dat €15.000–€25.000 per jaar aan
                verloren energie.
              </p>
              <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 16, lineHeight: 1.75 }}>
                Je hebt al een onderhoudspartner? Wij vervangen die niet — wij vullen aan met
                ultrasone inspectie die sneller en gerichter is dan zeepsop of handmatige
                controle.
              </p>
              <Link
                href="/bereken-uw-besparing/perslucht/"
                className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                style={{ fontSize: 14 }}
              >
                Bereken jouw besparing
                <ArrowRight />
              </Link>
            </div>

            {/* Kaart: Gevaarlijke gassen */}
            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}>
              <p className="text-[#7AADCC] mb-6" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Gevaarlijke gassen</p>
              <h2
                className="font-bold text-white mb-6"
                style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Vaste detectoren hebben blinde vlekken. Wij vinden wat zij missen.
              </h2>
              <p className="text-[#C2DCE8] mb-4" style={{ fontSize: 16, lineHeight: 1.75 }}>
                Vaste gasdetectie ziet hoge concentraties op vaste plekken. Wat het mist: lage
                concentraties, intermitterende lekken, blinde vlekken tussen sensors. Daar komen
                wij.
              </p>
              <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 16, lineHeight: 1.75 }}>
                Detecteerbaar: CO₂, NH₃, N₂, H₂, F-gassen, methaan, propaan — elk gas onder
                druk. ATEX-gecertificeerd voor zone&nbsp;1.
              </p>
              <Link
                href="/kennisbank/atex-zones-uitgelegd/"
                className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                style={{ fontSize: 14 }}
              >
                Meer over ATEX en zones
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3 — Wat krijg je */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <p className="text-xs tracking-widest uppercase text-[#F07830] font-medium mb-3">
            Wat je krijgt
          </p>
          <h2
            className="font-bold text-[#0A2238] mb-10"
            style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Wat krijg je?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px' }}>
              <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Rapport</p>
              <p className="text-[#C2DCE8] mb-6" style={{ fontSize: 15, lineHeight: 1.75 }}>
                Per lek: locatie, foto, jaarverlies in euro&apos;s, herstelprioriteit.
              </p>
              <a
                href="/voorbeeldrapport.pdf"
                className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                style={{ fontSize: 14 }}
              >
                Bekijk voorbeeld
                <ArrowRight />
              </a>
            </div>

            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px' }}>
              <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Klantportaal</p>
              <p className="text-[#C2DCE8] mb-6" style={{ fontSize: 15, lineHeight: 1.75 }}>
                Alle lekken online. Status per lek. QR-code op de plek zelf.
              </p>
              <Link
                href="/klantportaal/"
                className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors"
                style={{ fontSize: 14 }}
              >
                Bekijk het portaal
                <ArrowRight />
              </Link>
            </div>

            <div className="rounded-md" style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px' }}>
              <p className="text-[#7AADCC] mb-4" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Herstelplan</p>
              <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.75 }}>
                Gesorteerd op impact. Je onderhoudsteam weet direct waar te beginnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 4 — FAQ */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <h2
            className="font-bold text-[#0A2238] mb-10"
            style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Veelgestelde vragen
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3
                  className="font-semibold text-[#0A2238] mb-2"
                  style={{ fontSize: 16, lineHeight: 1.4 }}
                >
                  {item.question}
                </h3>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15, lineHeight: 1.75 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 5 — CTA (licht) */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2
                className="font-bold text-[#0A2238] mb-1"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 32px)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                }}
              >
                Weten waar je lekken zitten?
              </h2>
              <p className="text-[#6B8FA6]" style={{ fontSize: 15 }}>
                Een Quickscan geeft je binnen een dagdeel concreet antwoord.
              </p>
            </div>
            <a
              href={BOOKINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md flex-shrink-0"
              style={{ padding: '14px 32px' }}
            >
              Vraag een Quickscan aan
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
