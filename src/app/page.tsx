import type { Metadata } from 'next'
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
    canonical: 'https://gasprotex.nl',
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

export default function HomePage() {
  return (
    <>
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
