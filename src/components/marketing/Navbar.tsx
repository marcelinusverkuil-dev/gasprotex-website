'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dienstenDropdown = [
  { label: 'Gas- en persluchtlekdetectie', href: '/diensten/' },
  { label: 'Lekdetectie-abonnement', href: '/diensten/lekdetectie-abonnement/' },
]

const sectorenDropdown = [
  { label: 'Voedingsmiddelensector', href: '/sectoren/voedingsmiddelensector/' },
  { label: 'Petrochemie & Chemie', href: '/sectoren/petrochemie-chemie/' },
]

const navLinks = [
  { label: 'Bereken uw besparing', href: '/bereken-uw-besparing' },
  { label: 'Kennisbank', href: '/kennisbank' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contact', href: '/contact' },
]

function DropdownMenu({
  label,
  items,
  active = false,
}: {
  label: string
  items: { label: string; href: string }[]
  active?: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="font-display font-semibold text-sm uppercase hover:text-[#F07830] transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
        style={{ color: active ? '#F07830' : '#C2DCE8', background: 'none', border: 'none', cursor: 'pointer', padding: 0, letterSpacing: '1px' }}
        aria-expanded={open}
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            marginTop: '1px',
            opacity: 0.7,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 200ms ease',
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Altijd gerenderd — zichtbaarheid via CSS-transitie */}
      <div
        className="absolute top-full left-0"
        style={{
          minWidth: '230px',
          paddingTop: '10px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 160ms ease, transform 160ms ease',
        }}
      >
        <div
          className="rounded-md overflow-hidden"
          style={{
            background: '#0D2A40',
            border: '1px solid rgba(122,173,204,0.18)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
          }}
        >
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-[#C2DCE8] hover:text-white hover:bg-white/5 transition-colors"
              style={{
                padding: '13px 20px',
                fontSize: 14,
                fontWeight: 500,
                borderTop: i > 0 ? '1px solid rgba(122,173,204,0.1)' : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dienstenMobiel, setDienstenMobiel] = useState(false)
  const [sectorenMobiel, setSectorenMobiel] = useState(false)
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
          <Link href="/" aria-label="GasProtex homepage" style={{ flexShrink: 0 }}>
            <img src="/images/gasprotex-logo.png" alt="GasProtex" style={{ height: '44px', width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-3 list-none">
            <DropdownMenu label="Diensten" items={dienstenDropdown} active={pathname.startsWith('/diensten')} />
            <DropdownMenu label="Sectoren" items={sectorenDropdown} active={pathname.startsWith('/sectoren')} />

            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display font-semibold text-sm uppercase hover:text-[#F07830] transition-colors duration-200 whitespace-nowrap"
                    style={{ letterSpacing: '1px', color: active ? '#F07830' : '#C2DCE8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}

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

          {/* Desktop: Bel ons + Klantenportaal */}
          <div className="hidden lg:flex items-center gap-3" style={{ flexShrink: 0 }}>
            <a
              href="tel:+31613055282"
              className="inline-flex items-center gap-2 text-[#C2DCE8] hover:text-white text-sm font-semibold whitespace-nowrap transition-colors"
              style={{ letterSpacing: '1px' }}
              aria-label="Bel ons via 06-13055282"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="uppercase">Bel ons</span>
              <span>06-13055282</span>
            </a>
            <a
              href="https://portaal.gasprotex.nl/login"
              className="font-display font-semibold text-sm uppercase text-[#C2DCE8] hover:text-white transition-colors whitespace-nowrap"
              style={{ letterSpacing: '1px' }}
            >
              Klantenportaal
            </a>
          </div>

          {/* Mobile: telefoon-icoon + hamburger */}
          <div className="lg:hidden flex items-center">
            <a
              href="tel:+31613055282"
              className="inline-flex items-center justify-center text-[#C2DCE8] hover:text-white transition-colors"
              style={{ width: 44, height: 44 }}
              aria-label="Bel ons via 06-13055282"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <button
              className="flex flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu openen"
            >
              <span className="block w-6 h-0.5 bg-white transition-all" />
              <span className="block w-6 h-0.5 bg-white transition-all" />
              <span className="block w-6 h-0.5 bg-white transition-all" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0A1E30]/98 backdrop-blur-xl border-b-2 border-[#F07830] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="container-main py-6 flex flex-col gap-1">

          {/* Diensten */}
          <button
            onClick={() => setDienstenMobiel(!dienstenMobiel)}
            className="flex items-center justify-between w-full text-left font-display font-semibold text-xs tracking-widest uppercase text-[#7AADCC] py-3"
            style={{ letterSpacing: '2px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Diensten
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
              style={{ transform: dienstenMobiel ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease', opacity: 0.6 }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {dienstenMobiel && dienstenDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm text-[#C2DCE8] hover:text-[#F07830] transition-colors py-2 pl-4"
            >
              {item.label}
            </Link>
          ))}

          {/* Sectoren */}
          <button
            onClick={() => setSectorenMobiel(!sectorenMobiel)}
            className="flex items-center justify-between w-full text-left font-display font-semibold text-xs tracking-widest uppercase text-[#7AADCC] py-3"
            style={{ letterSpacing: '2px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Sectoren
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
              style={{ transform: sectorenMobiel ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease', opacity: 0.6 }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {sectorenMobiel && sectorenDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm text-[#C2DCE8] hover:text-[#F07830] transition-colors py-2 pl-4"
            >
              {item.label}
            </Link>
          ))}

          <div style={{ height: 8 }} />

          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-semibold text-sm tracking-widest uppercase hover:text-[#F07830] transition-colors py-2"
                style={{ letterSpacing: '2px', color: active ? '#F07830' : '#C2DCE8' }}
              >
                {link.label}
              </Link>
            )
          })}

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
