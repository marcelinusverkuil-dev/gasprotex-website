'use client'

import { useState } from 'react'

export default function ContactCTASection() {
  const [form, setForm] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', bericht: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire up to Resend / Supabase
    await new Promise((r) => setTimeout(r, 800))
    setStatus('sent')
  }

  return (
    <section className="bg-[#0F2D4B] py-24 lg:py-32 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(217,119,55,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div>
            <p
              className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}
            >
              Contact
            </p>
            <h2
              className="font-display font-black uppercase text-white leading-none mb-6"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1,
              }}
            >
              Klaar Voor Een<br />
              <span className="text-[#D97737]">Gratis Quickscan?</span>
            </h2>
            <p className="text-[#C2DCE8] leading-relaxed mb-10" style={{ fontSize: 17, lineHeight: 1.75 }}>
              Vertel ons kort over uw installatie. Wij nemen binnen één werkdag contact op
              voor het inplannen van een vrijblijvende inspectie.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                'Reactie binnen 1 werkdag',
                'Geheel vrijblijvend',
                'ATEX-gecertificeerd team',
                'NDA beschikbaar op verzoek',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#D97737] font-bold"
                    style={{ fontSize: 14 }}
                  >
                    ✓
                  </span>
                  <span className="text-[#7AADCC]" style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="p-8 lg:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(217,119,55,0.2)',
            }}
          >
            {status === 'sent' ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(217,119,55,0.15)', border: '1px solid rgba(217,119,55,0.4)' }}
                >
                  ✓
                </div>
                <h3
                  className="font-display font-bold uppercase text-white mb-2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22 }}
                >
                  Bericht Ontvangen
                </h3>
                <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
                  Wij nemen binnen één werkdag contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Naam *
                    </label>
                    <input
                      required
                      value={form.naam}
                      onChange={(e) => setForm({ ...form, naam: e.target.value })}
                      className="w-full bg-transparent text-white px-4 py-3 outline-none focus:border-[#D97737] transition-colors"
                      style={{ fontSize: 15 }}
                      placeholder="Jan de Vries"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Bedrijf *
                    </label>
                    <input
                      required
                      value={form.bedrijf}
                      onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                      className="w-full bg-transparent text-white px-4 py-3 outline-none focus:border-[#D97737] transition-colors"
                      style={{ fontSize: 15 }}
                      placeholder="Uw Bedrijf BV"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    E-mailadres *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-white px-4 py-3 outline-none focus:border-[#D97737] transition-colors"
                    style={{ fontSize: 15 }}
                    placeholder="jan@bedrijf.nl"
                  />
                </div>
                <div>
                  <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    value={form.telefoon}
                    onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                    className="w-full bg-transparent text-white px-4 py-3 outline-none focus:border-[#D97737] transition-colors"
                    style={{ fontSize: 15 }}
                    placeholder="+31 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Uw situatie
                  </label>
                  <textarea
                    rows={4}
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full bg-transparent text-white px-4 py-3 outline-none focus:border-[#D97737] transition-colors resize-none"
                    style={{ fontSize: 15 }}
                    placeholder="Bijv. type installatie, oppervlakte, urgentie..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#D97737] hover:bg-[#E8893A] disabled:opacity-60 text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
                >
                  {status === 'sending' ? 'Verzenden...' : 'Verstuur Aanvraag'}
                  {status !== 'sending' && (
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
