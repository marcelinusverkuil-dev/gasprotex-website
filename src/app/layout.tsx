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
              '@id': 'https://gasprotex.nl/#organization',
              name: 'GasProtex',
              url: 'https://gasprotex.nl',
              logo: 'https://gasprotex.nl/images/gasprotex-logo.png',
              image: 'https://gasprotex.nl/images/gasprotex-logo.png',
              description: 'Specialist in akoestische gas- en persluchtlekdetectie voor de Nederlandse industrie en voedingsmiddelensector.',
              telephone: '+31613055282',
              email: 'info@gasprotex.nl',
              address: { '@type': 'PostalAddress', addressCountry: 'NL' },
              areaServed: { '@type': 'Country', name: 'Nederland' },
              founder: { '@type': 'Person', name: 'Marcelinus Verkuil' },
              knowsAbout: ['Gaslekdetectie', 'Persluchtlekdetectie', 'Akoestische lekdetectie', 'ATEX', 'ISO 11011', 'BRZO'],
              sameAs: [],
            }),
          }}
        />
        {children}
        <AnalyticsWithConsent />
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}</Script>
        )}
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
