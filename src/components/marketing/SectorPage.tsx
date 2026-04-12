import Link from 'next/link'
import type { SectorData } from '@/lib/sectoren-data'

export default function SectorPage({ data: d }: { data: SectorData }) {
  return (
    <>
      {/* Witte header */}
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="flex items-center gap-3 mb-4">
            <Link href="/sectoren" className="text-[#6B8FA6] hover:text-[#0F2D4B] transition-colors" style={{ fontSize: 13 }}>
              Sectoren
            </Link>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
            <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>{d.title}</span>
          </div>
          <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {d.title}
          </h1>
        </div>
      </section>

      {/* Intro + KPI stats */}
      <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.8 }}>
                  {d.hero.sub}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-0">
                {d.kpiStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{ borderLeft: i > 0 ? '1px solid rgba(122,173,204,0.2)' : 'none', paddingLeft: i > 0 ? '24px' : '0' }}
                  >
                    <p className="font-bold text-[#D97737]" style={{ fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                      {stat.value}
                    </p>
                    <p className="text-[#7AADCC] uppercase tracking-widest mt-1" style={{ fontSize: 10, letterSpacing: '1.5px' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uitdagingen + Aanpak */}
      <section style={{ background: '#ffffff', paddingTop: '8px', paddingBottom: '8px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* Links: uitdagingen */}
              <div>
                <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Uw uitdagingen
                </p>
                <h2 className="font-bold text-white mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Wat speelt er in uw sector?
                </h2>
                <ul className="space-y-5">
                  {d.uitdagingen.map((u) => (
                    <li key={u.titel} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D97737]" style={{ marginTop: '9px' }} />
                      <div>
                        <p className="font-semibold text-white mb-1" style={{ fontSize: 15 }}>{u.titel}</p>
                        <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>{u.tekst}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rechts: aanpak + voordelen + case */}
              <div>
                <p className="text-[#7AADCC] mb-2" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Onze aanpak
                </p>
                <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Hoe wij helpen
                </h2>
                <p className="text-[#C2DCE8] mb-8" style={{ fontSize: 15, lineHeight: 1.8 }}>
                  {d.hoeWijHelpen}
                </p>

                <ul className="space-y-2 mb-8">
                  {d.voordelen.map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D97737]" style={{ marginTop: '9px' }} />
                      <span className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>{v}</span>
                    </li>
                  ))}
                </ul>

                {d.caseHighlight && (
                  <div style={{ borderTop: '1px solid rgba(122,173,204,0.2)', paddingTop: '24px' }}>
                    <p className="text-[#7AADCC] uppercase tracking-widest mb-3" style={{ fontSize: 11, letterSpacing: '1.5px' }}>
                      Case resultaat
                    </p>
                    <p className="text-[#C2DCE8] mb-2" style={{ fontSize: 15 }}>{d.caseHighlight.resultaat}</p>
                    <p className="font-bold text-[#D97737] mb-1" style={{ fontSize: 24, letterSpacing: '-0.02em' }}>
                      {d.caseHighlight.besparing}
                    </p>
                    <p className="text-[#7AADCC]" style={{ fontSize: 13 }}>{d.caseHighlight.locatie}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ffffff', paddingTop: '8px', paddingBottom: '32px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div
            className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
          >
            <div>
              <p className="font-bold text-white mb-1" style={{ fontSize: 20, letterSpacing: '-0.02em' }}>
                Klaar voor een gratis quickscan?
              </p>
              <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
                Wij plannen een vrijblijvende inspectie bij u op locatie.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors"
              style={{ fontSize: 14 }}
            >
              Quickscan aanvragen
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
