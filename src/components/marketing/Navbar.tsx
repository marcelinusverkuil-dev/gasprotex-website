'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A1E30]/97 shadow-lg shadow-black/20 backdrop-blur-md border-b border-[#D97737]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: 72 }}>

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
            <Link
              href="/contact"
              className="clip-btn inline-flex items-center gap-2 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
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
            aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-7 h-0.5 bg-[#C2DCE8] transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-7 h-0.5 bg-[#C2DCE8] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-[#C2DCE8] transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0A1E30]/98 backdrop-blur-xl border-b-2 border-[#D97737] transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-semibold text-xl tracking-widest uppercase text-[#C2DCE8] hover:text-[#D97737] py-4 border-b border-white/7 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-semibold text-xl tracking-widest uppercase text-[#C2DCE8] hover:text-[#D97737] py-4 border-b border-white/7 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="clip-btn mt-4 text-center bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold text-lg tracking-widest uppercase py-4 transition-colors"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
          >
            Offerte Aanvragen
          </Link>
        </div>
      </div>
    </>
  )
}
