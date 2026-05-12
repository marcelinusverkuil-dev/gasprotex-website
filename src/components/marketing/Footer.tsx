import Link from 'next/link'

const nav = {
  Diensten: [
    { label: 'Gas- en persluchtlekdetectie', href: '/diensten' },
    { label: 'Lekdetectie-abonnement', href: '/diensten/lekdetectie-abonnement' },
  ],
  Sectoren: [
    { label: 'Voedingsmiddelensector', href: '/sectoren/voedingsmiddelensector' },
    { label: 'Petrochemie & Chemie', href: '/sectoren/petrochemie-chemie' },
  ],
  Bedrijf: [
    { label: 'Over GasProtex', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
    { label: 'Maak een afspraak', href: 'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink' },
    { label: 'Klantportaal', href: 'https://portaal.gasprotex.nl/login' },
    { label: 'Bereken uw besparing', href: '/bereken-uw-besparing' },
    { label: 'Kennisbank', href: '/kennisbank' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0A2238' }}>
      {/* Main footer */}
      <div className="container-main section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-[#7AADCC] leading-relaxed max-w-xs" style={{ fontSize: 15, lineHeight: 1.8 }}>
              Akoestische gaslekdetectie voor de Nederlandse industrie.
              Sneller, veiliger en kosten besparend.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['ATEX Gecertificeerd'].map((cert) => (
                <span
                  key={cert}
                  className="inline-block text-[#7AADCC]"
                  style={{ fontSize: 13 }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([category, links]) => (
            <div key={category}>
              <p className="font-bold text-white mb-5" style={{ fontSize: 14, letterSpacing: '-0.02em' }}>
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#7AADCC] hover:text-[#F07830] transition-colors"
                      style={{ fontSize: 15 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: 32 }}>
        <div className="container-main section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7AADCC]" style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} GasProtex. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-10">
            <Link href="/privacy" className="text-[#7AADCC] hover:text-[#7AADCC] transition-colors" style={{ fontSize: 13 }}>
              Privacybeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
