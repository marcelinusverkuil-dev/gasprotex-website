import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import ContactForm from '@/components/marketing/ContactForm'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Contact en Quickscan aanvragen | GasProtex',
  description:
    'Vraag een Quickscan aan of plan een vrijblijvend kennismakingsgesprek. Werkgebied heel Nederland. ATEX-gecertificeerd, VCA-vol.',
  alternates: {
    canonical: 'https://gasprotex.nl/contact',
  },
  openGraph: {
    title: 'Contact | GasProtex',
    description: 'Neem contact op met GasProtex. Plan een gesprek, bel direct of stuur een bericht. Quickscan aanvragen kan ook direct.',
    url: 'https://gasprotex.nl/contact/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | GasProtex',
    description: 'Plan een gesprek, bel direct of stuur een bericht. Quickscan aanvragen kan ook direct.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      url: 'https://gasprotex.nl/contact/',
      name: 'Contact GasProtex',
    },
    {
      '@type': 'LocalBusiness',
      name: 'GasProtex',
      telephone: '+31613055282',
      email: 'info@gasprotex.nl',
      url: 'https://gasprotex.nl',
      areaServed: 'NL',
      description: 'Specialist in akoestische gaslekdetectie voor de Nederlandse industrie.',
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sectie 1 — Hero + contactgegevens */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="container-main">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <h1
                className="font-bold text-[#0A2238] mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Contact
              </h1>
              <p className="text-[#3D5A6E] text-lg leading-relaxed" style={{ marginBottom: '32px' }}>
                Wil je weten wat lekdetectie voor jouw bedrijf kan betekenen?
              </p>

              <div className="flex flex-col gap-3">

                <div className="flex items-start gap-6">
                  <p className="text-[#0A2238] font-semibold" style={{ minWidth: '150px' }}>Bel direct:</p>
                  <a
                    href="tel:+31613055282"
                    className="text-[#1E87B4] hover:text-[#F07830] font-semibold transition-colors"
                  >
                    +31 6 1305 5282
                  </a>
                </div>

                <div className="flex items-start gap-6">
                  <p className="text-[#0A2238] font-semibold" style={{ minWidth: '150px' }}>E-mail:</p>
                  <a
                    href="mailto:info@gasprotex.nl"
                    className="text-[#1E87B4] hover:text-[#F07830] font-semibold transition-colors"
                  >
                    info@gasprotex.nl
                  </a>
                </div>

                <div className="flex items-start gap-6">
                  <p className="text-[#0A2238] font-semibold" style={{ minWidth: '150px' }}>Plan een gesprek</p>
                  <a
                    href={BOOKINGS_URL}
                    className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold rounded-md transition-colors"
                    style={{ padding: '14px 32px' }}
                  >
                    Plan kennismakingsgesprek →
                  </a>
                </div>

              </div>
            </div>

            <div
              className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
              style={{ background: '#ffffff', padding: '24px' }}
            >
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Sectie 2 — CTA */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md border border-[#0A2238]/10 hover:shadow-md transition-shadow duration-200"
            style={{ background: '#ffffff', padding: '20px 24px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-[#0A2238] font-bold text-2xl mb-1">
                  Liever eerst zien wat het kost?
                </h2>
              </div>
              <Link
                href="/bereken-uw-besparing/perslucht"
                className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                style={{ padding: '14px 32px' }}
              >
                Bereken jouw besparing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
