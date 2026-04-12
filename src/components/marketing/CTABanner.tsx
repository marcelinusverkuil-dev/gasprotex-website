import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-28 lg:py-36" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <div
          className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
        >
          <div>
            <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
              Klaar voor een gratis quickscan?
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>
              Wij adviseren u gratis op basis van uw installatie en situatie.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors"
            style={{ fontSize: 14 }}
          >
            Gratis adviesgesprek
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
