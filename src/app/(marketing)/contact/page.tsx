'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata can't be exported from 'use client' — moved to a separate layout or head

const diensten = ['Quickscan (vanaf €2.500)', 'Fabrieksaudit (vanaf €5.000)', 'Serviceabonnement (vanaf €18.000/jaar)', 'Adviesgesprek (gratis)']
const sectoren = ['Petrochemie & Chemie', 'Food & Beverage', 'Energie & Utilities', 'Algemene Industrie', 'Anders']

export default function ContactPage() {
  const [form, setForm] = useState({
    naam: '', functie: '', bedrijf: '', email: '', telefoon: '',
    dienst: '', sector: '', medewerkers: '', bericht: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setStatus('sending')
    // TODO: POST to /api/contact → Resend
    await new Promise((r) => setTimeout(r, 900))
    setStatus('sent')
  }

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <>
      {/* Header */}
      <section className="pb-0" style={{ paddingTop: '120px', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <p className="text-sm font-semibold mb-3" style={{ color: '#D97737', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Contact
          </p>
          <h1 className="font-bold text-[#0F2D4B] leading-none" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Neem Contact Op
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — info */}
            <div className="lg:col-span-2">
              <h2
                className="font-bold text-[#0F2D4B] leading-none mb-6"
                style={{ fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Wij Reageren Binnen Één Werkdag
              </h2>
              <p className="text-[#3D5A6E] leading-relaxed mb-10" style={{ fontSize: 16, lineHeight: 1.8 }}>
                Vertel ons over uw installatie en wij adviseren u welke dienst het beste past.
                Geen verplichtingen, geen verkoopgesprek — gewoon eerlijk advies.
              </p>

              {/* Proces */}
              <div className="space-y-0">
                {[
                  { stap: '01', titel: 'Formulier invullen', tekst: 'Beschrijf kort uw situatie en kies een dienst.' },
                  { stap: '02', titel: 'Reactie binnen 1 werkdag', tekst: 'Wij nemen telefonisch of per mail contact op.' },
                  { stap: '03', titel: 'Inspectie inplannen', tekst: 'Op basis van uw installatie plannen wij een datum.' },
                  { stap: '04', titel: 'Rapportage ontvangen', tekst: 'U ontvangt dezelfde dag of binnen 3 werkdagen het rapport.' },
                ].map((item, i, arr) => (
                  <div
                    key={item.stap}
                    className="flex gap-5 py-5"
                    style={{ borderBottom: 'none' }}
                  >
                    <span
                      className="font-display font-black text-[#D97737] flex-shrink-0"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 20, lineHeight: 1.4 }}
                    >
                      {item.stap}
                    </span>
                    <div>
                      <p
                        className="font-bold text-[#0F2D4B] mb-1"
                        style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 16, letterSpacing: '0.5px' }}
                      >
                        {item.titel}
                      </p>
                      <p className="text-[#6B8FA6]" style={{ fontSize: 14 }}>{item.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {status === 'sent' ? (
                <div
                  className="p-10 text-center"
                  style={{ background: '#ffffff', border: '1px solid #E2EAF0' }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl text-[#D97737]"
                    style={{ background: 'rgba(217,119,55,0.1)', border: '1px solid rgba(217,119,55,0.3)' }}
                  >
                    ✓
                  </div>
                  <h3
                    className="font-bold text-[#0F2D4B] mb-3"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 28, lineHeight: 1.2, letterSpacing: '-0.02em' }}
                  >
                    Aanvraag Ontvangen
                  </h3>
                  <p className="text-[#3D5A6E]" style={{ fontSize: 16 }}>
                    Bedankt, {form.naam.split(' ')[0]}. Wij nemen binnen één werkdag contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Naam *" placeholder="Jan de Vries" required value={form.naam} onChange={set('naam')} />
                    <InputField label="Functie" placeholder="HSE Manager" value={form.functie} onChange={set('functie')} />
                  </div>
                  <InputField label="Bedrijf *" placeholder="Uw Bedrijf BV" required value={form.bedrijf} onChange={set('bedrijf')} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="E-mailadres *" type="email" placeholder="jan@bedrijf.nl" required value={form.email} onChange={set('email')} />
                    <InputField label="Telefoon" type="tel" placeholder="+31 6 12 34 56 78" value={form.telefoon} onChange={set('telefoon')} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField label="Dienst *" required value={form.dienst} onChange={set('dienst')} options={diensten} placeholder="Kies een dienst" />
                    <SelectField label="Sector" value={form.sector} onChange={set('sector')} options={sectoren} placeholder="Kies uw sector" />
                  </div>
                  <div>
                    <label className="block text-[#0F2D4B] font-medium mb-2" style={{ fontSize: 13 }}>Uw situatie</label>
                    <textarea
                      rows={5}
                      value={form.bericht}
                      onChange={set('bericht')}
                      placeholder="Beschrijf kort uw installatie: type gassen, oppervlakte, urgentie of specifieke zones..."
                      className="w-full border-0 border-b border-[#D1DDE6] px-4 py-3 text-[#0F2D4B] outline-none focus:border-[#D97737] transition-colors resize-none"
                      style={{ fontSize: 15 }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#D97737] hover:bg-[#E8893A] disabled:opacity-60 text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}
                  >
                    {status === 'sending' ? 'Verzenden...' : 'Aanvraag Versturen'}
                    {status !== 'sending' && (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  <p className="text-[#6B8FA6] text-center" style={{ fontSize: 13 }}>
                    Uw gegevens worden alleen gebruikt voor het beantwoorden van uw aanvraag.
                  </p>
                </form>
              )}
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
      <label className="block text-[#0F2D4B] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-0 border-b border-[#D1DDE6] px-4 py-3 text-[#0F2D4B] outline-none focus:border-[#D97737] transition-colors"
        style={{ fontSize: 15 }}
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
      <label className="block text-[#0F2D4B] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border-0 border-b border-[#D1DDE6] px-4 py-3 text-[#0F2D4B] outline-none focus:border-[#D97737] transition-colors bg-white"
        style={{ fontSize: 15 }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
