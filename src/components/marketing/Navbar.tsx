'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dienstenDropdown = [
  { label: 'Gas- en persluchtlekdetectie', href: '/diensten/' },
  { label: 'Lekdetectie-abonnement', href: '/diensten/lekdetectie-abonnement/' },
]

const navLinks = [
  { label: 'Sectoren', href: '/sectoren' },
  { label: 'Bereken uw besparing', href: '/bereken-uw-besparing' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
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
            ? 'bg-[#0A2238]/97 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div
          className="container-main flex items-center justify-between"
          style={{ height: 72, paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}
        >
          {/* Logo */}
          <Link href="/" aria-label="GasProtex homepage">
            <img src="/images/gasprotex-logo.png" alt="GasProtex" style={{ height: '44px', width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-5 list-none">

            {/* Diensten dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="font-display font-semibold text-sm uppercase text-[#C2DCE8] hover:text-[#F07830] transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                style={{ letterSpacing: '1px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Diensten
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: '1px', opacity: 0.7 }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-3"
                  style={{ minWidth: '240px' }}
                >
                  <div
                    className="rounded-md overflow-hidden shadow-xl"
                    style={{ background: '#0A2238', border: '1px solid rgba(122,173,204,0.15)' }}
                  >
                    {dienstenDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 text-[#C2DCE8] hover:text-[#F07830] hover:bg-white/5 transition-colors"
                        style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.5px' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display font-semibold text-sm uppercase text-[#C2DCE8] hover:text-[#F07830] transition-colors duration-200 whitespace-nowrap"
                  style={{ letterSpacing: '1px' }}
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
                className="font-display font-semibold text-sm uppercase text-[#C2DCE8] hover:text-white transition-colors whitespace-nowrap"
                style={{ letterSpacing: '1px' }}
              >
                Afspraak Inplannen
              </a>
            </li>
          </ul>

          {/* Klantenportaal rechts */}
          <a
            href="https://gasprotex-portal.vercel.app/login"
            className="hidden lg:inline-flex items-center self-center font-display font-semibold text-sm uppercase text-[#C2DCE8] hover:text-white transition-colors whitespace-nowrap"
            style={{ letterSpacing: '1px' }}
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
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0A1E30]/98 backdrop-blur-xl border-b-2 border-[#F07830] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="container-main py-6 flex flex-col gap-4">
          {/* Diensten sub-items */}
          <span
            className="font-display font-semibold text-xs tracking-widest uppercase text-[#7AADCC] py-1"
            style={{ letterSpacing: '2px' }}
          >
            Diensten
          </span>
          {dienstenDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-[#F07830] transition-colors py-1 pl-3"
              style={{ letterSpacing: '1.5px' }}
            >
              {item.label}
            </Link>
          ))}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm tracking-widest uppercase text-[#C2DCE8] hover:text-[#F07830] transition-colors py-2"
              style={{ letterSpacing: '2px' }}
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
            style={{ letterSpacing: '2px' }}
          >
            Afspraak Inplannen
          </a>
        </div>
      </div>
    </>
  )
}
