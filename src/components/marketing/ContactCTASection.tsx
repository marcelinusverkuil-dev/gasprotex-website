'use client'

import { useState } from 'react'

export default function ContactCTASection() {
  const [form, setForm] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', bericht: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire up to Resend / Supabase
    await new Promise((r) => setTimeout(r, 800))
    setStatus('sent')
  }

  return (
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-3" style={{ color: '#D97737', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Contact
          </p>
          <h2 className="font-bold text-[#0F2D4B] mb-5" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Klaar Voor Een Gratis Quickscan?
          </h2>
          <p className="text-[#3D5A6E] max-w-xl mx-auto leading-relaxed" style={{ fontSize: 17 }}>
            Vertel ons kort over uw installatie. Wij nemen binnen één werkdag contact op voor een vrijblijvende inspectie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — trust signals */}
          <div className="flex flex-col gap-4 lg:pt-2">
            {[
              'Reactie binnen 1 werkdag',
              'Geheel vrijblijvend',
              'ATEX-gecertificeerd team',
              'NDA beschikbaar op verzoek',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center font-bold" style={{ color: '#D97737', fontSize: 14 }}>✓</span>
                <span className="text-[#3D5A6E]" style={{ fontSize: 15 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            className="p-8 lg:p-10 rounded-lg"
            style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.08)', background: '#ffffff' }}
          >
            {status === 'sent' ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl rounded-lg"
                  style={{ background: 'rgba(217,119,55,0.1)', border: '1px solid rgba(217,119,55,0.3)' }}
                >
                  ✓
                </div>
                <h3 className="font-bold text-[#0F2D4B] mb-2" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
                  Bericht Ontvangen
                </h3>
                <p className="text-[#3D5A6E]" style={{ fontSize: 15 }}>
                  Wij nemen binnen één werkdag contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#6B8FA6] mb-1.5" style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      Naam *
                    </label>
                    <input
                      required
                      value={form.naam}
                      onChange={(e) => setForm({ ...form, naam: e.target.value })}
                      className="w-full text-[#0F2D4B] px-4 py-3 outline-none rounded transition-colors"
                      style={{ fontSize: 15, background: '#F4F7FA', border: '1px solid #E2EAF0' }}
                      placeholder="Jan de Vries"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B8FA6] mb-1.5" style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      Bedrijf *
                    </label>
                    <input
                      required
                      value={form.bedrijf}
                      onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                      className="w-full text-[#0F2D4B] px-4 py-3 outline-none rounded transition-colors"
                      style={{ fontSize: 15, background: '#F4F7FA', border: '1px solid #E2EAF0' }}
                      placeholder="Uw Bedrijf BV"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6B8FA6] mb-1.5" style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    E-mailadres *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full text-[#0F2D4B] px-4 py-3 outline-none rounded transition-colors"
                    style={{ fontSize: 15, background: '#F4F7FA', border: '1px solid #E2EAF0' }}
                    placeholder="jan@bedrijf.nl"
                  />
                </div>
                <div>
                  <label className="block text-[#6B8FA6] mb-1.5" style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    value={form.telefoon}
                    onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                    className="w-full text-[#0F2D4B] px-4 py-3 outline-none rounded transition-colors"
                    style={{ fontSize: 15, background: '#F4F7FA', border: '1px solid #E2EAF0' }}
                    placeholder="+31 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-[#6B8FA6] mb-1.5" style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Uw situatie
                  </label>
                  <textarea
                    rows={4}
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full text-[#0F2D4B] px-4 py-3 outline-none rounded transition-colors resize-none"
                    style={{ fontSize: 15, background: '#F4F7FA', border: '1px solid #E2EAF0' }}
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
