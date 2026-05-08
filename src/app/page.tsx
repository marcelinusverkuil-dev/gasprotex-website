import type { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '@/components/marketing/Navbar'
import HeroSection from '@/components/marketing/HeroSection'
import DienstenSection from '@/components/marketing/DienstenSection'
import CalculatorSection from '@/components/marketing/CalculatorSection'
import HoeWerkenWeSection from '@/components/marketing/HoeWerkenWeSection'
import ContactCTASection from '@/components/marketing/ContactCTASection'
import Footer from '@/components/marketing/Footer'

export const metadata: Metadata = {
  title: 'Gaslekdetectie en persluchtlekdetectie | GasProtex',
  description:
    'Specialist in akoestische gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Quickscan vanaf een dagdeel.',
  alternates: {
    canonical: 'https://gasprotex.nl/',
  },
  openGraph: {
    title: 'Gaslekdetectie en persluchtlekdetectie als dienst | GasProtex',
    description: 'Specialist in akoestische gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Quickscan vanaf een dagdeel.',
    url: 'https://gasprotex.nl/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Gaslekdetectie en persluchtlekdetectie als dienst | GasProtex',
    description: 'Specialist in akoestische gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Quickscan vanaf een dagdeel.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://gasprotex.nl/#organization',
      name: 'GasProtex',
      url: 'https://gasprotex.nl',
      description:
        'Specialist in gaslekdetectie en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NL',
      },
      areaServed: 'NL',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@gasprotex.nl',
        contactType: 'customer service',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <DienstenSection />
        <CalculatorSection />
        <HoeWerkenWeSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  )
}
