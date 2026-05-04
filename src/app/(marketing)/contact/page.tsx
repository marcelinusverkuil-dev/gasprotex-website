import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export const metadata: Metadata = {
  title: 'Contact | GasProtex',
  description:
    'Neem contact op met GasProtex. Plan een gesprek via Outlook Bookings, bel direct, of stuur een e-mail.',
  alternates: {
    canonical: 'https://gasprotex.nl/contact/',
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

          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
              Home
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <h1
                className="font-bold text-[#0A2238] mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Contact
              </h1>
              <p className="text-[#3D5A6E] text-lg leading-relaxed mb-8">
                Wil je weten wat lekdetectie voor jouw bedrijf kan betekenen?
                Plan een vrijblijvend gesprek of neem direct contact op.
              </p>

              <div className="space-y-8">

                <div>
                  <p className="text-[#0A2238] font-semibold mb-1">Plan een gesprek</p>
                  <p className="text-[#3D5A6E] text-sm mb-4">
                    Kies een moment dat jou uitkomt. Vrijblijvend, 30 minuten.
                  </p>
                  <a
                    href={BOOKINGS_URL}
                    className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold rounded-md transition-colors"
                    style={{ padding: '14px 32px' }}
                  >
                    Plan kennismakingsgesprek →
                  </a>
                </div>

                <div>
                  <p className="text-[#0A2238] font-semibold mb-1">Bel direct</p>
                  <a
                    href="tel:+31613055282"
                    className="text-[#1E87B4] hover:text-[#F07830] font-semibold transition-colors"
                  >
                    +31 6 1305 5282
                  </a>
                </div>

                <div>
                  <p className="text-[#0A2238] font-semibold mb-1">E-mail</p>
                  <a
                    href="mailto:info@gasprotex.nl"
                    className="text-[#1E87B4] hover:text-[#F07830] font-semibold transition-colors"
                  >
                    info@gasprotex.nl
                  </a>
                </div>

              </div>
            </div>

            <div>
              <div
                className="rounded-md"
                style={{ border: '1px solid rgba(10,34,56,0.1)', padding: '32px' }}
              >
                <p className="text-[#0A2238] font-semibold mb-3">GasProtex</p>
                <p className="text-[#3D5A6E] text-sm leading-relaxed mb-4">
                  Marcelinus Verkuil
                </p>
                <p className="text-[#3D5A6E] text-sm leading-relaxed">
                  Werkgebied: heel Nederland<br />
                  Geen reiskosten-toeslag
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectie 2 — CTA */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container-main">
          <div
            className="rounded-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px 48px' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h2 className="text-white font-bold text-2xl mb-1">
                  Liever eerst zien wat het kost?
                </h2>
                <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                  Bereken in 2 minuten wat persluchtlekken jouw bedrijf kosten.
                </p>
              </div>
              <Link
                href="/bereken-uw-besparing/perslucht/"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
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
