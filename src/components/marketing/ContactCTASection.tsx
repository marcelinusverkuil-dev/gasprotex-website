'use client'

import { useState } from 'react'
import { sendContact } from '@/app/actions/sendContact'

export default function ContactCTASection() {
  const [form, setForm] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', bericht: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendContact({ ...form, functie: '', dienst: '', sector: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="mb-10">
          <h2 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Klaar voor een gratis quickscan?
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Links — trust signals */}
            <div className="flex flex-col gap-4">
              <p className="text-[#C2DCE8] mb-4" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Vertel ons kort over uw installatie. Wij nemen binnen één werkdag contact op voor een vrijblijvende inspectie.
              </p>
              {[
                'Reactie binnen 1 werkdag',
                'Geheel vrijblijvend',
                'ATEX-gecertificeerd team',
                'NDA beschikbaar op verzoek',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D97737]" style={{ marginTop: '1px' }} />
                  <span className="text-[#C2DCE8]" style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Rechts — formulier */}
            <div>
              {status === 'sent' ? (
                <div className="text-center py-8">
                  <h3 className="font-bold text-white mb-2" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
                    Bericht ontvangen
                  </h3>
                  <p className="text-[#C2DCE8]" style={{ fontSize: 15 }}>
                    Wij nemen binnen één werkdag contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Naam *</label>
                      <input required value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-white placeholder-[#7AADCC] outline-none transition-colors"
                        style={{ fontSize: 15, background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0 }}
                        placeholder="Jan de Vries" />
                    </div>
                    <div>
                      <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Bedrijf *</label>
                      <input required value={form.bedrijf} onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-white placeholder-[#7AADCC] outline-none transition-colors"
                        style={{ fontSize: 15, background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0 }}
                        placeholder="Uw Bedrijf BV" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>E-mailadres *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-white placeholder-[#7AADCC] outline-none transition-colors"
                      style={{ fontSize: 15, background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0 }}
                      placeholder="jan@bedrijf.nl" />
                  </div>
                  <div>
                    <label className="block text-[#7AADCC] mb-1.5" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Uw situatie</label>
                    <textarea rows={4} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-white placeholder-[#7AADCC] outline-none transition-colors resize-none"
                      style={{ fontSize: 15, background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0 }}
                      placeholder="Bijv. type installatie, oppervlakte, urgentie..." />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-center" style={{ fontSize: 13 }}>
                      Er is iets misgegaan. Probeer het opnieuw of mail ons op info@gasprotex.nl.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#D97737] hover:bg-[#E8893A] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                    style={{ fontSize: 15 }}>
                    {status === 'sending' ? 'Verzenden...' : 'Verstuur aanvraag'}
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
      </div>
    </section>
  )
}
