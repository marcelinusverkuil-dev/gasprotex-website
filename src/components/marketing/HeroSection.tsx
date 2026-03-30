'use client'

import Link from 'next/link'

const stats = [
  { value: '10×', label: 'Sneller dan Traditioneel' },
  { value: '200m', label: 'Detectiebereik' },
  { value: 'ATEX', label: 'Gecertificeerd' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F2D4B]">

      {/* Animated grid */}
      <div className="hero-grid absolute inset-0 z-0" />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Links — tekst */}
          <div>

            {/* Badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-3 mb-8"
              style={{
                background: 'rgba(217,119,55,0.15)',
                border: '1px solid rgba(217,119,55,0.4)',
                padding: '8px 18px',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#D97737]"
                style={{ animation: 'pulse 2s ease infinite' }}
              />
              <span
                className="font-display font-semibold text-[13px] tracking-[2.5px] uppercase text-[#D97737]"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Akoestische Gaslekdetectie · Nederland
              </span>
            </div>

            {/* H1 */}
            <h1
              className="animate-fade-up-1 font-display font-black uppercase leading-none mb-7 text-white"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 'clamp(48px, 6vw, 80px)',
                lineHeight: 0.95,
                letterSpacing: '-1px',
              }}
            >
              Gaslekken Gevonden.
              <span className="block text-[#D97737]">Risico&apos;s Gereduceerd.</span>
            </h1>

            {/* Subkop */}
            <p
              className="animate-fade-up-2 text-[#C2DCE8] font-light leading-relaxed mb-10"
              style={{ fontSize: 18, lineHeight: 1.75 }}
            >
              GasProtex opspoort gaslekken met akoestische camera-technologie — sneller,
              veiliger en zonder productiestilstand. Voor HSE-managers en maintenance-teams
              in de Nederlandse industrie.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="clip-btn inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold text-base tracking-widest uppercase px-9 py-4 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '2px' }}
              >
                Gratis Quickscan Aanvragen
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/diensten"
                className="clip-btn inline-flex items-center gap-3 text-[#C2DCE8] hover:text-[#D97737] hover:border-[#D97737] font-display font-semibold text-base tracking-widest uppercase px-9 py-4 transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  letterSpacing: '2px',
                  border: '1px solid rgba(194,220,232,0.35)',
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                }}
              >
                Bekijk Diensten
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-4 flex">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="px-7 py-5 text-center"
                  style={{
                    background: 'rgba(28,46,66,0.85)',
                    border: '1px solid rgba(217,119,55,0.2)',
                    borderRight: i < stats.length - 1 ? 'none' : '1px solid rgba(217,119,55,0.2)',
                  }}
                >
                  <div
                    className="font-display font-black text-[#D97737] leading-none"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#7AADCC] font-medium uppercase tracking-widest mt-1"
                    style={{ fontSize: 10, letterSpacing: '1.5px' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rechts — afbeelding */}
          <div className="animate-fade-up-2 hidden lg:flex items-center justify-center">
            <div
              className="relative w-full"
              style={{ maxWidth: 520 }}
            >
              {/* Oranje glow achter de afbeelding */}
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  background: 'radial-gradient(circle at center, rgba(217,119,55,0.2) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Placeholder — vervang src door je eigen foto */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: '4/3',
                  border: '1px solid rgba(217,119,55,0.3)',
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                }}
              >
                  <img
                  src="/hero-image.jpg"
                  alt="GasProtex inspecteur bij industriële installatie"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.85)' }}
                />
              </div>

              {/* Label rechtsonder */}
              <div
                className="absolute bottom-0 right-0 px-4 py-2"
                style={{ background: 'rgba(217,119,55,0.9)' }}
              >
                <p
                  className="font-display font-bold uppercase text-white"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 11, letterSpacing: '2px' }}
                >
                  Akoestische Camera
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex">
        <div
          className="w-px h-12 origin-top"
          style={{
            background: 'linear-gradient(to bottom, #D97737, transparent)',
            animation: 'scrollPulse 2s ease infinite',
          }}
        />
        <span
          className="text-[#7AADCC] uppercase tracking-widest"
          style={{ fontSize: 10, letterSpacing: '3px', writingMode: 'vertical-rl', marginTop: 8 }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
