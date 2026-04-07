import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GasProtex – Akoestische Gaslekdetectie | Nederland',
  description:
    'GasProtex detecteert gaslekken 10x sneller met akoestische camera-technologie. Non-invasief, ATEX gecertificeerd, zonder productiestilstand. Voor de Nederlandse industrie.',
  keywords: [
    'gaslekdetectie',
    'akoestische camera',
    'ultrasone lekdetectie',
    'perslucht inspectie',
    'ATEX',
    'chemische industrie',
    'gaslek Nederland',
  ],
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
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
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
