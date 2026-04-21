import Navbar from '@/components/marketing/Navbar'
import HeroSection from '@/components/marketing/HeroSection'
import DienstenSection from '@/components/marketing/DienstenSection'
import WaaromSection from '@/components/marketing/WaaromSection'
import CalculatorSection from '@/components/marketing/CalculatorSection'
import SectorenSection from '@/components/marketing/SectorenSection'
import ContactCTASection from '@/components/marketing/ContactCTASection'
import Footer from '@/components/marketing/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DienstenSection />
        <WaaromSection />
        <CalculatorSection />
        <SectorenSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  )
}
