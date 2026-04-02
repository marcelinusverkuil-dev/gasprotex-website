import Link from 'next/link'

export default function CTABanner() {
  return (
    <section style={{ background: '#0F2D4B' }}>
      <div
        className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        style={{ paddingLeft: '80px', paddingRight: '80px' }}
      >
        <div>
          <h2
            className="font-display font-black uppercase text-white mb-2"
            style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1 }}
          >
            Klaar Voor Een Gratis Quickscan?
          </h2>
          <p className="text-[#7AADCC]" style={{ fontSize: 16 }}>
            Wij adviseren u gratis op basis van uw installatie en situatie.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
        >
          Gratis Adviesgesprek
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
