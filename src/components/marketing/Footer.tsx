import Link from 'next/link'
import GasProtexLogo from '@/components/ui/GasProtexLogo'

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
    <footer style={{ background: '#08192A' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-[#4A7A99] leading-relaxed max-w-xs" style={{ fontSize: 14, lineHeight: 1.75 }}>
              Akoestische gaslekdetectie voor de Nederlandse industrie.
              Sneller, veiliger, zonder productiestilstand.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['ATEX Gecertificeerd', 'ISO 50001', 'HSE Compliant'].map((cert) => (
                <span
                  key={cert}
                  className="inline-block text-[#4A7A99] uppercase tracking-widest"
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
              <p
                className="font-display font-bold uppercase text-white mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 13, letterSpacing: '2px' }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#4A7A99] hover:text-[#D97737] transition-colors"
                      style={{ fontSize: 14 }}
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
      <div style={{ borderTop: '1px solid rgba(74,122,153,0.15)' }}>
        <div className="max-w-7xl mx-auto section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#2E5470]" style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} GasProtex B.V. — Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacybeleid', href: '/privacy' },
              { label: 'Algemene Voorwaarden', href: '/voorwaarden' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#2E5470] hover:text-[#4A7A99] transition-colors" style={{ fontSize: 13 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
