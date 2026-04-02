import Link from 'next/link'
import type { SectorData } from '@/lib/sectoren-data'

export default function SectorPage({ data: d }: { data: SectorData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2D4B] pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-[600px] h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at right, rgba(217,119,55,0.1) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto section-container">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/sectoren" className="text-[#7AADCC] hover:text-white transition-colors" style={{ fontSize: 13 }}>
              Sectoren
            </Link>
            <span className="text-[#3D5A6E]">/</span>
            <span className="text-[#D97737]" style={{ fontSize: 13 }}>{d.title}</span>
          </div>
          <div className="flex items-start gap-5 mb-6">
            <span className="text-5xl">{d.icon}</span>
            <div>
              <p
                className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
              >
                {d.hero.tagline}
              </p>
              <h1
                className="font-display font-black uppercase text-white leading-none"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1 }}
              >
                {d.hero.headline}
              </h1>
            </div>
          </div>
          <p className="text-[#C2DCE8] max-w-2xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            {d.hero.sub}
          </p>

          {/* KPI stats */}
          <div className="flex flex-wrap gap-0 mt-12">
            {d.kpiStats.map((stat, i) => (
              <div
                key={stat.label}
                className="px-8 py-5 text-center"
                style={{
                  background: 'rgba(28,46,66,0.9)',
                  border: '1px solid rgba(217,119,55,0.2)',
                  borderRight: i < d.kpiStats.length - 1 ? 'none' : '1px solid rgba(217,119,55,0.2)',
                }}
              >
                <div
                  className="font-display font-black text-[#D97737] leading-none"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 32 }}
                >
                  {stat.value}
                </div>
                <div className="text-[#7AADCC] uppercase tracking-widest mt-1" style={{ fontSize: 10, letterSpacing: '1.5px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uitdagingen */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <p
                className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
              >
                Uw Uitdagingen
              </p>
              <h2
                className="font-display font-black uppercase text-[#0F2D4B] leading-none mb-10"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1 }}
              >
                Wat Speelt Er In Uw Sector?
              </h2>
              <div className="space-y-0">
                {d.uitdagingen.map((u, i) => (
                  <div
                    key={u.titel}
                    className="py-6"
                    style={{ borderBottom: i < d.uitdagingen.length - 1 ? '1px solid #E2EAF0' : 'none' }}
                  >
                    <h3
                      className="font-display font-bold uppercase text-[#0F2D4B] mb-2"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 17, letterSpacing: '0.5px' }}
                    >
                      {u.titel}
                    </h3>
                    <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                      {u.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
              >
                Onze Aanpak
              </p>
              <h2
                className="font-display font-black uppercase text-[#0F2D4B] leading-none mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1 }}
              >
                Hoe Wij Helpen
              </h2>
              <p className="text-[#3D5A6E] leading-relaxed mb-8" style={{ fontSize: 16, lineHeight: 1.8 }}>
                {d.hoeWijHelpen}
              </p>

              {/* Voordelen */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {d.voordelen.map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <span className="text-[#D97737] font-bold flex-shrink-0" style={{ fontSize: 14 }}>✓</span>
                    <span className="text-[#0F2D4B] font-medium" style={{ fontSize: 14 }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Case highlight */}
              {d.caseHighlight && (
                <div
                  className="p-6"
                  style={{ background: '#F4F7FA', border: '1px solid #E2EAF0', borderLeft: '3px solid #D97737' }}
                >
                  <p
                    className="font-display font-bold uppercase text-[#D97737] mb-3"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 11, letterSpacing: '2px' }}
                  >
                    Case Resultaat
                  </p>
                  <p className="font-semibold text-[#0F2D4B] mb-1" style={{ fontSize: 15 }}>{d.caseHighlight.resultaat}</p>
                  <p
                    className="font-display font-black text-[#D97737] mb-1"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 28 }}
                  >
                    {d.caseHighlight.besparing}
                  </p>
                  <p className="text-[#6B8FA6]" style={{ fontSize: 13 }}>{d.caseHighlight.locatie}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F2D4B' }}>
        <div className="max-w-7xl mx-auto section-container py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2
              className="font-display font-black uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1 }}
            >
              Klaar Voor Een Gratis Quickscan?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Wij plannen een vrijblijvende inspectie in bij u op locatie.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="clip-btn inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
            >
              Quickscan Aanvragen
            </Link>
            <Link
              href="/diensten"
              className="clip-btn inline-flex items-center gap-3 text-[#C2DCE8] hover:text-[#D97737] hover:border-[#D97737] font-display font-semibold uppercase tracking-widest px-8 py-4 transition-all"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 14,
                letterSpacing: '2px',
                border: '1px solid rgba(194,220,232,0.35)',
              }}
            >
              Bekijk Diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
