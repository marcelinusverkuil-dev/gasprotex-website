import Link from 'next/link'

const nav = {
  Diensten: [
    { label: 'Quickscan', href: '/diensten#quickscan' },
    { label: 'Fabrieksaudit', href: '/diensten#audit' },
    { label: 'Serviceabonnement', href: '/diensten#abonnement' },
  ],
  Sectoren: [
    { label: 'Petrochemie & Chemie', href: '/sectoren/chemie' },
    { label: 'Food & Beverage', href: '/sectoren/food' },
    { label: 'Energie & Utilities', href: '/sectoren/energie' },
    { label: 'Algemene Industrie', href: '/sectoren/industrie' },
  ],
  Bedrijf: [
    { label: 'Over GasProtex', href: '/over-ons' },
    { label: 'Cases', href: '/cases' },
    { label: 'Contact', href: '/contact' },
    { label: 'Klantportaal', href: '/portaal' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0F2D4B' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-[#7AADCC] leading-relaxed max-w-xs" style={{ fontSize: 15, lineHeight: 1.8 }}>
              Akoestische gaslekdetectie voor de Nederlandse industrie.
              Sneller, veiliger, zonder productiestilstand.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['ATEX Gecertificeerd', 'ISO 50001', 'HSE Compliant'].map((cert) => (
                <span
                  key={cert}
                  className="inline-block text-[#7AADCC] uppercase tracking-widest"
                  style={{ fontSize: 10, letterSpacing: '1.5px' }}
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
                      className="text-[#7AADCC] hover:text-[#D97737] transition-colors"
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
        <div className="max-w-7xl mx-auto section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7AADCC]" style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} GasProtex B.V. — Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-10">
            {[
              { label: 'Privacybeleid', href: '/privacy' },
              { label: 'Algemene Voorwaarden', href: '/voorwaarden' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#7AADCC] hover:text-[#7AADCC] transition-colors" style={{ fontSize: 13 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
