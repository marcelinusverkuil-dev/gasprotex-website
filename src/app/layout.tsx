import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import AnalyticsWithConsent from '@/components/marketing/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'GasProtex – Akoestische Gaslekdetectie | Nederland',
  description:
    'GasProtex detecteert gaslekken 10x sneller met akoestische camera-technologie. Non-invasief, ATEX gecertificeerd, zonder productiestilstand. Voor de Nederlandse industrie.',
  openGraph: {
    title: 'GasProtex – Akoestische Gaslekdetectie',
    description: "Gaslekken gevonden. Risico's gereduceerd. 10x sneller dan traditioneel.",
    url: 'https://gasprotex.nl',
    siteName: 'GasProtex',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GasProtex',
              legalName: 'GasProtex B.V.',
              url: 'https://gasprotex.nl',
              logo: 'https://gasprotex.nl/images/gasprotex-logo.png',
              image: 'https://gasprotex.nl/images/gasprotex-logo.png',
              description: 'Specialist in akoestische gas- en persluchtlekdetectie als dienst voor industrie en voedingsmiddelensector. ATEX-gecertificeerd.',
              telephone: '+31613055282',
              areaServed: { '@type': 'Country', name: 'Nederland' },
              founder: { '@type': 'Person', name: 'Marcelinus Verkuil' },
              knowsAbout: ['Gaslekdetectie', 'Persluchtlekdetectie', 'Akoestische lekdetectie', 'Ultrasone lekdetectie', 'ATEX', 'ISO 11011', 'BRZO', 'F-gassenverordening'],
              sameAs: [],
            }),
          }}
        />
        {children}
        <AnalyticsWithConsent />
<Script id="tawk-to" strategy="afterInteractive">{`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69d5314312bb3f1c39797527/1jlkcgru4';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}</Script>
      </body>
    </html>
  )
}
