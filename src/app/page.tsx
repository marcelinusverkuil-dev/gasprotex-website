import type { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '@/components/marketing/Navbar'
import HeroSection from '@/components/marketing/HeroSection'
import DienstenSection from '@/components/marketing/DienstenSection'
import WaaromSection from '@/components/marketing/WaaromSection'
import CalculatorSection from '@/components/marketing/CalculatorSection'
import HoeWerkenWeSection from '@/components/marketing/HoeWerkenWeSection'
import ContactCTASection from '@/components/marketing/ContactCTASection'
import Footer from '@/components/marketing/Footer'

export const metadata: Metadata = {
  title: 'GasProtex — Gas- en persluchtlekdetectie als dienst',
  description:
    'Specialist in gaslekdetectie en persluchtlekdetectie voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Vraag een Quickscan aan.',
  alternates: {
    canonical: 'https://gasprotex.nl/',
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
        <WaaromSection />
        <CalculatorSection />
        <HoeWerkenWeSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  )
}
