'use client'

import { useState } from 'react'
import { sendContact } from '@/app/actions/sendContact'

const diensten = ['Quickscan (vanaf €2.500)', 'Fabrieksaudit (vanaf €5.000)', 'Serviceabonnement (vanaf €18.000/jaar)', 'Adviesgesprek (gratis)']
const sectoren = ['Petrochemie & Chemie', 'Food & Beverage', 'Energie & Utilities', 'Algemene Industrie', 'Anders']


export default function ContactPage() {
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', telefoon: '',
    dienst: '', sector: '', bericht: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (honeypot) return // bot detected
    setStatus('sending')
    try {
      await sendContact({ ...form, functie: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <>
      <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="flex flex-col gap-6">

            {/* Header */}
            <div style={{ paddingBottom: 8 }}>
              <p style={{ fontSize: 12, color: '#D97737', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: 12 }}>Contact</p>
              <h1 className="font-bold text-[#0F2D4B]" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                Neem contact op
              </h1>
            </div>

            {/* Info + form container */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                {/* Links: logo + contactinfo */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gasprotex-logo.png" alt="GasProtex" style={{ height: 44, width: 'auto', display: 'block', alignSelf: 'flex-start' }} />
                  <a href="mailto:info@gasprotex.nl" className="flex items-center gap-3 text-[#C2DCE8] hover:text-white transition-colors" style={{ fontSize: 15, textDecoration: 'none' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7AADCC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    info@gasprotex.nl
                  </a>
                  <a href="tel:+31613055282" className="flex items-center gap-3 text-[#C2DCE8] hover:text-white transition-colors" style={{ fontSize: 15, textDecoration: 'none' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7AADCC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                    </svg>
                    +31 (0)6 13055282
                  </a>
                </div>

                {/* Rechts: formulier */}
                <div className="lg:col-span-3">
                  {status === 'sent' ? (
                    <div className="rounded-xl p-10 text-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full text-xl text-[#D97737]"
                        style={{ background: 'rgba(217,119,55,0.15)', border: '1px solid rgba(217,119,55,0.3)' }}>
                        ✓
                      </div>
                      <h3 className="font-bold text-white mb-3" style={{ fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Aanvraag ontvangen
                      </h3>
                      <p className="text-[#C2DCE8]" style={{ fontSize: 15 }}>
                        Bedankt, {form.naam.split(' ')[0]}. Wij nemen binnen één werkdag contact met u op.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot — verborgen voor mensen, ingevuld door bots */}
                      <input
                        type="text"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="Naam *" placeholder="Jan de Vries" required value={form.naam} onChange={set('naam')} />
                        <InputField label="Bedrijf *" placeholder="Uw Bedrijf BV" required value={form.bedrijf} onChange={set('bedrijf')} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="E-mailadres *" type="email" placeholder="jan@bedrijf.nl" required value={form.email} onChange={set('email')} />
                        <InputField label="Telefoon *" type="tel" placeholder="+31 6 12 34 56 78" required value={form.telefoon} onChange={set('telefoon')} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField label="Dienst *" required value={form.dienst} onChange={set('dienst')} options={diensten} placeholder="Kies een dienst" />
                        <SelectField label="Sector" value={form.sector} onChange={set('sector')} options={sectoren} placeholder="Kies uw sector" />
                      </div>
                      <div>
                        <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>Uw situatie</label>
                        <textarea
                          rows={4}
                          value={form.bericht}
                          onChange={set('bericht')}
                          placeholder="Beschrijf kort uw installatie: type gassen, oppervlakte, urgentie..."
                          className="w-full outline-none transition-colors resize-none text-white placeholder-[#7AADCC]"
                          style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0, padding: '8px 0' }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full inline-flex items-center justify-center gap-3 bg-[#D97737] hover:bg-[#E8893A] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        style={{ fontSize: 15 }}
                      >
                        {status === 'sending' ? 'Verzenden...' : 'Aanvraag versturen'}
                        {status !== 'sending' && (
                          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                      {status === 'error' && (
                        <p className="text-red-400 text-center" style={{ fontSize: 13 }}>
                          Er is iets misgegaan. Probeer het opnieuw of mail ons direct op info@gasprotex.nl.
                        </p>
                      )}
                    </form>
                  )}
                </div>

              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  )
}

function InputField({
  label, placeholder, required, type = 'text', value, onChange,
}: {
  label: string; placeholder: string; required?: boolean; type?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-white placeholder-[#7AADCC] outline-none transition-colors"
        style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0, padding: '8px 0' }}
      />
    </div>
  )
}

function SelectField({
  label, required, value, onChange, options, placeholder,
}: {
  label: string; required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[#7AADCC] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className="w-full text-white outline-none transition-colors"
        style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', borderRadius: 0, padding: '8px 0' }}
      >
        <option value="" style={{ background: '#0F2D4B' }}>{placeholder}</option>
        {options.map((o) => <option key={o} value={o} style={{ background: '#0F2D4B' }}>{o}</option>)}
      </select>
    </div>
  )
}
