'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Sectoren', href: '/sectoren' },
  { label: 'Bereken uw besparing', href: '/bereken-uw-besparing' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contact', href: '/contact' },
  { label: 'Portaal', href: 'https://gasprotex-portal.vercel.app/login', external: true },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#0F2D4B]/97 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between"
          style={{ height: 72, paddingLeft: '80px', paddingRight: '80px' }}
        >
          {/* Logo */}
          <Link href="/" aria-label="GasProtex homepage">
            <img src="/images/gasprotex-logo.png" alt="GasProtex" style={{ height: '44px', width: 'auto' }} />
          </Link>

          {/* Desktop nav + Afspraak */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-[#D97737] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
              >
                Afspraak Inplannen
              </a>
            </li>
          </ul>

          {/* Klantenportaal rechts */}
          <a
            href="https://gasprotex-portal.vercel.app/login"
            className="hidden lg:block font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
          >
            Klantenportaal
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            <span className="block w-6 h-0.5 bg-white transition-all" />
            <span className="block w-6 h-0.5 bg-white transition-all" />
            <span className="block w-6 h-0.5 bg-white transition-all" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0A1E30]/98 backdrop-blur-xl border-b-2 border-[#D97737] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-[#D97737] transition-colors py-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors py-2"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
          >
            Afspraak Inplannen
          </a>
        </div>
      </div>
    </>
  )
}
