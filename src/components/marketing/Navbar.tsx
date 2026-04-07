'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GasProtexLogo from '@/components/ui/GasProtexLogo'

const navLinks = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Sectoren', href: '/sectoren' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Cases', href: '/cases' },
  { label: 'Portaal', href: 'http://localhost:3000/login', external: true },
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
          true
            ? 'bg-[#0A1E30]/97 shadow-lg shadow-black/20 backdrop-blur-md border-b border-[#D97737]/20'
            : 'bg-transparent'
        }`}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between"
          style={{ height: 72, paddingLeft: '80px', paddingRight: '80px' }}
        >
          {/* Logo */}
          <Link href="/" aria-label="GasProtex homepage">
            <GasProtexLogo variant="light" size="md" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.slice(0, 4).map((link) => (
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
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="http://localhost:3000/login"
              className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
            >
              Inloggen
            </a>
            <a
              href="https://calendly.com/gasprotex-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
            >
              Afspraak Inplannen
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold text-sm tracking-widest uppercase px-14 py-3 rounded-md transition-colors duration-200"
              style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px', minWidth: '220px', justifyContent: 'center' }}
            >
              Offerte Aanvragen
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

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
            href="https://calendly.com/gasprotex-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-white transition-colors py-2"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
          >
            Afspraak Inplannen
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-[#D97737] text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-md"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
          >
            Offerte Aanvragen
          </Link>
        </div>
      </div>
    </>
  )
}
