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
  '@type': 'LocalBusiness',
  '@id': 'https://gasprotex.nl/#business',
  name: 'GasProtex',
  url: 'https://gasprotex.nl',
  image: 'https://gasprotex.nl/images/gasprotex-logo.png',
  description: 'Specialist in akoestische gas- en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Quickscan vanaf een dagdeel.',
  telephone: '+31613055282',
  email: 'info@gasprotex.nl',
  priceRange: '€€',
  address: { '@type': 'PostalAddress', addressCountry: 'NL' },
  areaServed: [{ '@type': 'Country', name: 'Nederland' }],
  serviceType: ['Gaslekdetectie', 'Persluchtlekdetectie', 'Akoestische lekdetectie'],
  knowsAbout: [
    'Akoestische lekdetectie',
    'Ultrasone gaslekdetectie',
    'ATEX-gecertificeerde inspectie',
    'Compressed air leak detection',
    'Industrial gas detection',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'ATEX-certificering',
      name: 'ATEX-gecertificeerd voor zone 2 (gas) en zone 22 (stof)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'VCA-certificering',
      name: 'VCA-vol',
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
