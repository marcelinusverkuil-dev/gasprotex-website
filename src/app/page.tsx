import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/marketing/Navbar'
import Footer from '@/components/marketing/Footer'
import FAQ from '@/components/home/FAQ'
import CallbackForm from '@/components/home/CallbackForm'

export const metadata: Metadata = {
  title: 'Gaslekdetectie en persluchtlekdetectie als dienst | GasProtex',
  description:
    'GasProtex levert akoestische gas- en persluchtlekdetectie als dienst voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Plan een inventarisatie.',
  alternates: {
    canonical: 'https://gasprotex.nl',
  },
  openGraph: {
    title: 'Gaslekdetectie en persluchtlekdetectie als dienst | GasProtex',
    description: 'GasProtex levert akoestische gas- en persluchtlekdetectie als dienst voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Plan een inventarisatie.',
    url: 'https://gasprotex.nl/',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'GasProtex',
  },
  twitter: {
    card: 'summary',
    title: 'Gaslekdetectie en persluchtlekdetectie als dienst | GasProtex',
    description: 'GasProtex levert akoestische gas- en persluchtlekdetectie als dienst voor industrie en voedingsmiddelensector. ATEX-gecertificeerd. Plan een inventarisatie.',
  },
}

const BOOKINGS = 'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── 1. Hero ── */}
        <section className="relative overflow-hidden" style={{ paddingTop: 160, paddingBottom: 80, color: 'white', minHeight: 520 }}>
          <Image
            src="/images/hero-bg-v3.png"
            alt="GasProtex technicus met tablet in industriële installatie"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,28,48,0.75) 0%, rgba(10,28,48,0.55) 60%, rgba(10,28,48,0.30) 100%)' }} />
          <div className="container-main relative z-10">
            <p style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 500, lineHeight: 1.12, margin: '0 0 20px', color: 'white', letterSpacing: '-0.8px', maxWidth: 720 }}>
              Je weet dat ze lekken zijn. Wij zorgen ervoor dat ze gevonden worden.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', margin: '0 0 28px', maxWidth: 620 }}>
              Specialist in gaslekdetectie en persluchtlekdetectie voor industrie en voedingsmiddelensector.
            </p>
          </div>
        </section>

        {/* ── 2. Probleemspiegel ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 32px', letterSpacing: '-0.5px', maxWidth: 640 }}>
              Herken je dit?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: 1080, margin: '0 auto' }}>
              {[
                'Er komt een audit aan en je weet niet of je alle gaslekken in beeld hebt.',
                'Je perslucht kost meer dan vorig jaar, maar je weet niet door welke lekkages.',
                'Je vaste gasdetectie geeft alarm. Maar waar zit het lek?',
              ].map((tekst) => (
                <div key={tekst} className="hover:shadow-md transition-shadow duration-200" style={{ padding: '24px 22px', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, background: 'white' }}>
                  <p style={{ fontSize: 15, color: '#0A2238', lineHeight: 1.55, margin: 0 }}>{tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Waarom nu ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2
              style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 32px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}
              dangerouslySetInnerHTML={{ __html: 'Drie redenen,<br>waarom lekken niet langer kunnen wachten.' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: 1140, margin: '0 auto' }}>
              {[
                {
                  titel: 'Energiekosten lopen op',
                  tekst: 'Elk lek kost meer dan vorig jaar. Een gemiddeld productiebedrijf verliest 20 tot 30 procent van zijn perslucht. Energiebesparing op perslucht heeft directe impact op je stroomrekening.',
                },
                {
                  titel: 'Veiligheid en regelgeving knellen',
                  tekst: "ATEX, F-gassen, de EU-methaanverordening en NH3-protocollen worden strenger gehandhaafd. Risico's die je niet kunt aantonen, worden steeds kostbaarder. Zowel juridisch als financieel.",
                },
                {
                  titel: 'Rapportageplicht groeit',
                  tekst: 'CSRD en EED maken meetbare emissies verplicht voor steeds meer bedrijven. Wat je nu in kaart brengt, levert je straks de bewijslast die je rapportage nodig heeft.',
                },
              ].map((item) => (
                <div key={item.titel} className="hover:shadow-md transition-shadow duration-200" style={{ padding: '24px 22px', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, background: 'white' }}>
                  <p style={{ fontSize: 17, fontWeight: 500, color: '#0A2238', margin: '0 0 10px', letterSpacing: '-0.2px', lineHeight: 1.3 }}>{item.titel}</p>
                  <p style={{ fontSize: 14, color: 'rgba(10,34,56,0.6)', lineHeight: 1.55, margin: 0 }}>{item.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Dienst-blokken ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 12px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Twee diensten, één methode
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(10,34,56,0.6)', textAlign: 'center', margin: '0 auto 32px', maxWidth: 580, lineHeight: 1.55 }}>
              Akoestische lekdetectie (ultrasoon) werkt voor perslucht en voor alle andere gassen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: 1160, margin: '0 auto' }}>

              {/* Persluchtlekken */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(10,34,56,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 120, position: 'relative', background: 'linear-gradient(135deg,#E8EEF3 0%,#D4DEE7 100%)', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
                  <Image
                    src="/images/home/perslucht.png"
                    alt="Perslucht leidingen en koppelingen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.95)', color: '#0A2238', fontSize: 10.5, fontWeight: 600, padding: '5px 10px', borderRadius: 4, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                    Persluchtinstallatie
                  </span>
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 500, color: '#0A2238', margin: '0 0 8px', letterSpacing: '-0.3px' }}>Persluchtlekken</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)', margin: '0 0 14px', fontStyle: 'italic' }}>Geld dat letterlijk wegloopt</p>
                  <p style={{ fontSize: 14, color: '#0A2238', lineHeight: 1.6, margin: '0 0 16px' }}>
                    Een installatie van 200 kW verliest gemiddeld 15.000 tot 25.000 euro per jaar door persluchtlekkage. De kosten van persluchtlekkage lopen snel op bij continue bedrijfsvoering.
                  </p>
                  <div style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 14px', padding: '11px 14px', background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 6 }}>
                    <strong style={{ color: '#0A2238', fontWeight: 500 }}>Voor:</strong> productiebedrijven met perslucht.
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <Link
                      href="/bereken-uw-besparing/perslucht"
                      style={{ background: 'white', color: '#0A2238', border: '1px solid rgba(10,34,56,0.2)', padding: '11px 18px', fontSize: 13.5, fontWeight: 500, borderRadius: 5, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                    >
                      Bereken je besparing →
                    </Link>
                    <Link href="/diensten" style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)', textDecoration: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', paddingBottom: 1 }}>
                      Lees meer →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gaslekken */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(10,34,56,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 120, position: 'relative', background: 'linear-gradient(135deg,#E8EEF3 0%,#D4DEE7 100%)', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
                  <Image
                    src="/images/home/gaslekdetectie.png"
                    alt="Technicus bij industriële gaslekdetectie-inspectie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.95)', color: '#0A2238', fontSize: 10.5, fontWeight: 600, padding: '5px 10px', borderRadius: 4, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                    Procesgasinstallatie
                  </span>
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 500, color: '#0A2238', margin: '0 0 8px', letterSpacing: '-0.3px' }}>Gaslekken</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)', margin: '0 0 14px', fontStyle: 'italic' }}>Geld en veiligheid tegelijk</p>
                  <p style={{ fontSize: 14, color: '#0A2238', lineHeight: 1.6, margin: '0 0 16px' }}>
                    Elke gaslekkage in je installatie kost je dubbel: in euro&apos;s en in risico voor je mensen, je omgeving en je vergunningen. Vaste gasdetectie ziet niet alles. Akoestische lekdetectie (ultrasoon) vult de blinde vlekken in.
                  </p>
                  <div className="grid grid-cols-2 gap-2" style={{ marginBottom: 14 }}>
                    <div style={{ padding: '12px 14px', background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 6 }}>
                      <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.6px', color: 'rgba(10,34,56,0.45)', margin: '0 0 4px', textTransform: 'uppercase' }}>In euro&apos;s</p>
                      <p style={{ fontSize: 12.5, color: '#0A2238', lineHeight: 1.45, margin: 0 }}>Productverlies en CO₂-equivalenten die meetellen voor je rapportage.</p>
                    </div>
                    <div style={{ padding: '12px 14px', background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 6 }}>
                      <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.6px', color: 'rgba(10,34,56,0.45)', margin: '0 0 4px', textTransform: 'uppercase' }}>In risico</p>
                      <p style={{ fontSize: 12.5, color: '#0A2238', lineHeight: 1.45, margin: 0 }}>ATEX-incidenten, vergunningen en je zorgplicht naar personeel en omgeving.</p>
                    </div>
                  </div>
                  <div style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 14px', padding: '11px 14px', background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 6 }}>
                    <strong style={{ color: '#0A2238', fontWeight: 500 }}>Gassen:</strong> Stikstof, Perslucht, CO₂, NH3, Methaan, Waterstof, Zuurstof, F-gassen. ATEX-gecertificeerd (zone 2).
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <Link
                      href="/diensten"
                      style={{ background: 'white', color: '#0A2238', border: '1px solid rgba(10,34,56,0.2)', padding: '11px 18px', fontSize: 13.5, fontWeight: 500, borderRadius: 5, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                    >
                      Meer over gaslekdetectie →
                    </Link>
                    <Link href="/diensten" style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)', textDecoration: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', paddingBottom: 1 }}>
                      Lees meer →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. Werkwijze ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 12px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Zo werken we
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(10,34,56,0.6)', textAlign: 'center', margin: '0 auto 32px', maxWidth: 580, lineHeight: 1.55 }}>
              Drie stappen van een eerste gesprek tot een werkend dashboard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: 1060, margin: '0 auto 32px' }}>
              {[
                { nr: '01', titel: 'Gesprek aan tafel', tekst: 'Je vertelt wat er speelt. Wij stellen vragen, denken hardop, en weten snel of we wat voor elkaar kunnen betekenen.', filled: false },
                { nr: '02', titel: 'Rondgang door je plant', tekst: 'We lopen samen door je installatie. Akoestische scan ter plekke. We vinden lekken in het eerste bezoek, want ze zijn er altijd.', filled: false },
                { nr: '03', titel: 'Je dashboard', tekst: "Nog dezelfde dag krijg je toegang tot je portaal. Elk lek met euro's en CO₂. Daarna ontvang je een offerte voor de hele plant.", filled: true },
              ].map((stap) => (
                <div key={stap.nr} style={{ textAlign: 'left' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: stap.filled ? '#0A2238' : 'white',
                    border: stap.filled ? '1.5px solid #0A2238' : '1.5px solid rgba(10,34,56,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 0 16px',
                    fontSize: 15, fontWeight: 500,
                    color: stap.filled ? 'white' : '#0A2238',
                  }}>
                    {stap.nr}
                  </div>
                  <p style={{ fontSize: 15.5, fontWeight: 500, color: '#0A2238', margin: '0 0 10px' }}>{stap.titel}</p>
                  <p style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.55, margin: 0 }}>{stap.tekst}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href={BOOKINGS}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#F07830', color: 'white', textDecoration: 'none', padding: '13px 24px', fontSize: 14.5, fontWeight: 500, borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Maak een afspraak →
              </a>
            </div>
          </div>
        </section>

        {/* ── 6. Klantenportaal ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 12px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Je lekken, in kaart, met euro&apos;s en CO₂ erbij.
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(10,34,56,0.6)', textAlign: 'center', margin: '0 auto 32px', maxWidth: 580, lineHeight: 1.55 }}>
              Na elke inventarisatie krijg je toegang tot je eigen portaal. Elke gevonden lek met locatie, omvang, jaarlijkse kosten en CO₂-impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ maxWidth: 1080, margin: '0 auto 32px' }}>
              {[
                { titel: 'Overzicht', tekst: 'Alle lekken op één plek, met locatie en omvang.' },
                { titel: 'Inzicht', tekst: "Euro's per jaar en CO₂-impact, bruikbaar voor je rapportages." },
                { titel: 'Prioritering', tekst: 'Je team bepaalt welke lekken eerst aan de beurt zijn.' },
              ].map((v) => (
                <div key={v.titel}>
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#0A2238', margin: '0 0 8px' }}>{v.titel}</p>
                  <p style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.55, margin: 0 }}>{v.tekst}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', border: '2px dashed rgba(30,135,180,0.32)', borderRadius: 12, padding: '48px 32px', textAlign: 'center', maxWidth: 1140, margin: '0 auto' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(30,135,180,0.1)', color: '#1E87B4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0A2238', margin: '0 0 6px' }}>Hier komt screenshot van het demo-portaal</p>
              <p style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)', margin: '0 auto', maxWidth: 460, lineHeight: 1.5 }}>
                Volle breedte ongeveer 1200 x 700 px, met realistische locatienamen en een mix van perslucht- en gaslekken.
              </p>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(10,34,56,0.6)', textAlign: 'center', margin: '24px auto 0', maxWidth: 580, lineHeight: 1.6 }}>
              Toegang werkt op abonnementsbasis, in drie varianten van read-only tot volledige bewerking. Wat past, bespreken we in het gesprek.
            </p>
          </div>
        </section>

        {/* ── 7. Sectoren ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 32px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Twee sectoren die we van binnen kennen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 1140, margin: '0 auto 24px' }}>
              {[
                {
                  titel: 'Voedingsmiddelensector',
                  tekst: "NH3-koeling, CO₂-leidingen, perslucht in productiehallen. We begrijpen de specifieke risico's en hygiëne-eisen.",
                  gassen: 'NH3 · CO₂ · Perslucht · N₂',
                  href: '/sectoren/voedingsmiddelensector',
                  src: '/images/sectoren/voedingsmiddelensector.png',
                  alt: 'Gaslekdetectie in de voedingsmiddelensector',
                },
                {
                  titel: 'Petrochemie en chemie',
                  tekst: 'Methaan, H₂, andere koolwaterstoffen. ATEX-omgevingen, vergunningseisen, strikte rapportageplichten.',
                  gassen: 'Stikstof · Perslucht · CO₂ · NH3 · Methaan · Waterstof · Zuurstof · F-gassen',
                  href: '/sectoren/petrochemie-chemie',
                  src: '/images/sectoren/petrochemie-chemie.png',
                  alt: 'Lekdetectie in petrochemie en chemie',
                },
              ].map((s) => (
                <Link key={s.titel} href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(10,34,56,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: 120, position: 'relative', background: 'linear-gradient(135deg,#E8EEF3 0%,#D4DEE7 100%)', flexShrink: 0 }}>
                      <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 500, color: '#0A2238', margin: '0 0 10px' }}>{s.titel}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(10,34,56,0.6)', lineHeight: 1.55, margin: '0 0 16px' }}>{s.tekst}</p>
                      <div style={{ paddingTop: 14, borderTop: '1px solid rgba(10,34,56,0.08)', marginTop: 'auto' }}>
                        <span style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 6 }}>Veelvoorkomende gassen</span>
                        <span style={{ fontSize: 13, color: '#0A2238', fontWeight: 500 }}>{s.gassen}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="hover:shadow-md transition-shadow duration-200" style={{ maxWidth: 700, margin: '24px auto 0', textAlign: 'center', padding: 24, background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12 }}>
              <p style={{ fontSize: 14.5, color: '#0A2238', margin: '0 0 14px', lineHeight: 1.5 }}>
                Werk je in een andere sector? Bel even, dan kijken we samen of het past.
              </p>
              <a
                href="tel:+31613055282"
                style={{ background: 'white', color: '#0A2238', border: '1px solid rgba(10,34,56,0.2)', padding: '12px 22px', fontSize: 14, fontWeight: 500, borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                className="hover:border-orange hover:text-orange transition-colors duration-200"
              >
                Bel 06-13055282 →
              </a>
            </div>
          </div>
        </section>

        {/* ── 7B. Voorbeeldberekening ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              style={{ maxWidth: 1080, margin: '0 auto' }}
            >
              <div>
                <p style={{ fontSize: 11, color: '#1E87B4', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 10px' }}>
                  Reken het zelf na
                </p>
                <h2 style={{ fontSize: 26, fontWeight: 500, color: '#0A2238', margin: '0 0 12px', letterSpacing: '-0.5px', lineHeight: 1.25 }}>
                  Wat kost persluchtlekkage een gemiddeld bedrijf?
                </h2>
                <p style={{ fontSize: 14.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.55, margin: 0 }}>
                  Een voorbeeldberekening voor een middelgroot productiebedrijf. Wil je je eigen situatie doorrekenen?{' '}
                  <Link href="/bereken-uw-besparing/perslucht" style={{ color: '#1E87B4', textDecoration: 'none', borderBottom: '1px solid rgba(30,135,180,0.4)', paddingBottom: 1 }}>
                    Ga naar de volledige calculator.
                  </Link>{' '}
                  Energiebesparing op perslucht heeft directe impact op je stroomrekening.
                </p>
              </div>

              <div
                role="region"
                aria-label="Voorbeeldberekening middelgroot productiebedrijf"
                className="hover:shadow-md transition-shadow duration-200"
                style={{ background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, padding: 28 }}
              >
                {/* Card header */}
                <p style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
                  Voorbeeldberekening
                </p>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#0A2238', margin: '0 0 18px', letterSpacing: '-0.2px' }}>
                  Middelgroot productiebedrijf
                </p>

                {/* Lekkages */}
                <div style={{ borderBottom: '1px solid rgba(10,34,56,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                  {[
                    { label: 'Kleine lekken (1 mm gat)', waarde: '15' },
                    { label: 'Middelgrote lekken (3 mm gat)', waarde: '5' },
                    { label: 'Grote lekken (5 mm gat)', waarde: '0' },
                  ].map((r) => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
                      <span style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)' }}>{r.label}</span>
                      <span style={{ fontSize: 14, color: '#0A2238', fontWeight: 500 }}>{r.waarde}</span>
                    </div>
                  ))}
                </div>

                {/* Aannames */}
                <div style={{ borderBottom: '1px solid rgba(10,34,56,0.08)', paddingBottom: 14, marginBottom: 0 }}>
                  {[
                    { label: 'Bedrijfsuren', waarde: '2.000 per jaar' },
                    { label: 'Stroomprijs', waarde: '€ 0,26 / kWh' },
                  ].map((r) => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
                      <span style={{ fontSize: 13.5, color: 'rgba(10,34,56,0.6)' }}>{r.label}</span>
                      <span style={{ fontSize: 14, color: '#0A2238', fontWeight: 500 }}>{r.waarde}</span>
                    </div>
                  ))}
                </div>

                {/* Resultaat */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, borderTop: '1px solid rgba(10,34,56,0.1)', marginTop: 18, paddingTop: 18 }}>
                  <div>
                    <p style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
                      Verlies per jaar
                    </p>
                    <p style={{ fontSize: 28, fontWeight: 500, color: '#F07830', letterSpacing: '-0.5px', margin: 0, lineHeight: 1.1 }}>
                      € 15.070
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: 'rgba(10,34,56,0.45)', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
                      CO₂-uitstoot
                    </p>
                    <p style={{ fontSize: 22, fontWeight: 500, color: '#0A2238', letterSpacing: '-0.3px', margin: 0, lineHeight: 1.1 }}>
                      12 ton
                    </p>
                  </div>
                </div>

                <Link
                  href="/bereken-uw-besparing/perslucht"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#0A2238', textDecoration: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', paddingBottom: 1, marginTop: 16 }}
                >
                  Naar de volledige calculator →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 32px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Veelgestelde vragen
            </h2>
            <FAQ />
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link
                href="/kennisbank"
                style={{ fontSize: 13.5, color: '#0A2238', textDecoration: 'none', borderBottom: '1px solid rgba(10,34,56,0.25)', paddingBottom: 1, display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                Meer vragen en achtergronden in de kennisbank →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. Contact ── */}
        <section style={{ background: 'white', paddingTop: 36, paddingBottom: 36 }}>
          <div className="container-main">
            <h2 style={{ fontSize: 30, fontWeight: 500, color: '#0A2238', textAlign: 'center', margin: '0 auto 10px', letterSpacing: '-0.5px', maxWidth: 700, lineHeight: 1.22 }}>
              Vier manieren om een inventarisatie te plannen
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(10,34,56,0.6)', textAlign: 'center', margin: '0 auto 28px' }}>
              Kies wat voor jou het makkelijkst is.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ maxWidth: 1160, margin: '0 auto' }}>

              {/* Bel direct */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', border: '1px solid #F07830', borderRadius: 12, padding: '22px 18px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(240,120,48,0.12)', border: '1px solid rgba(240,120,48,0.25)', color: '#F07830', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 500, color: '#0A2238', margin: '0 0 6px' }}>Bel direct</h3>
                <p style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 12px' }}>Je krijgt direct iemand aan de lijn.</p>
                <a
                  href="tel:+31613055282"
                  style={{ fontSize: 15, color: '#0A2238', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                  className="hover:text-orange transition-colors"
                >
                  06-13055282
                </a>
              </div>

              {/* WhatsApp */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, padding: '22px 18px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'white', border: '1px solid rgba(10,34,56,0.1)', color: '#0A2238', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 500, color: '#0A2238', margin: '0 0 6px' }}>WhatsApp</h3>
                <p style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 12px' }}>Werkt ook buiten kantooruren.</p>
                <a
                  href="https://wa.me/31613055282"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 15, color: '#0A2238', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                  className="hover:text-orange transition-colors"
                >
                  06-13055282
                </a>
              </div>

              {/* Callback */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, padding: '22px 18px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'white', border: '1px solid rgba(10,34,56,0.1)', color: '#0A2238', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 500, color: '#0A2238', margin: '0 0 6px' }}>Laat ons bellen</h3>
                <p style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 12px' }}>Drie velden, wij bellen terug.</p>
                <CallbackForm />
              </div>

              {/* Agenda */}
              <div className="hover:shadow-md transition-shadow duration-200" style={{ background: 'white', border: '1px solid rgba(10,34,56,0.1)', borderRadius: 12, padding: '22px 18px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'white', border: '1px solid rgba(10,34,56,0.1)', color: '#0A2238', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 500, color: '#0A2238', margin: '0 0 6px' }}>Plan zelf in</h3>
                <p style={{ fontSize: 12.5, color: 'rgba(10,34,56,0.6)', lineHeight: 1.5, margin: '0 0 12px' }}>Kies een tijdslot dat je uitkomt.</p>
                <a
                  href={BOOKINGS}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#0A2238', color: 'white', border: 'none', padding: '11px 16px', fontSize: 13.5, fontWeight: 500, borderRadius: 5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, textDecoration: 'none' }}
                >
                  Open de agenda →
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
