'use client'

import { useState } from 'react'
import { sendContact } from '@/app/actions/sendContact'

const diensten = ['Quickscan (vanaf €2.500)', 'Fabrieksaudit (vanaf €5.000)', 'Serviceabonnement (vanaf €18.000/jaar)', 'Adviesgesprek (gratis)']
const sectoren = ['Petrochemie & Chemie', 'Food & Beverage', 'Energie & Utilities', 'Algemene Industrie', 'Anders']

const stappen = [
  { stap: '01', titel: 'Formulier invullen', tekst: 'Beschrijf kort uw situatie en kies een dienst.' },
  { stap: '02', titel: 'Reactie binnen 1 werkdag', tekst: 'Wij nemen telefonisch of per mail contact op.' },
  { stap: '03', titel: 'Inspectie inplannen', tekst: 'Op basis van uw installatie plannen wij een datum.' },
  { stap: '04', titel: 'Rapportage ontvangen', tekst: 'U ontvangt dezelfde dag of binnen 3 werkdagen het rapport.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    naam: '', functie: '', bedrijf: '', email: '', telefoon: '',
    dienst: '', sector: '', bericht: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (honeypot) return // bot detected
    setStatus('sending')
    try {
      await sendContact(form)
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

            {/* Info + form container */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                {/* Links: info + stappen */}
                <div className="lg:col-span-2">
                  <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    Wij reageren binnen één werkdag
                  </h2>
                  <p className="text-[#C2DCE8] mb-10" style={{ fontSize: 15, lineHeight: 1.8 }}>
                    Vertel ons over uw installatie en wij adviseren u welke dienst het beste past.
                    Geen verplichtingen, gewoon eerlijk advies.
                  </p>
                  <div className="space-y-0">
                    {stappen.map((item) => (
                      <div key={item.stap} className="flex gap-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span className="font-bold text-[#D97737] flex-shrink-0" style={{ fontSize: 18 }}>
                          {item.stap}
                        </span>
                        <div>
                          <p className="font-semibold text-white mb-0.5" style={{ fontSize: 14 }}>{item.titel}</p>
                          <p className="text-[#7AADCC]" style={{ fontSize: 13 }}>{item.tekst}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                        <InputField label="Functie" placeholder="HSE Manager" value={form.functie} onChange={set('functie')} />
                      </div>
                      <InputField label="Bedrijf *" placeholder="Uw Bedrijf BV" required value={form.bedrijf} onChange={set('bedrijf')} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="E-mailadres *" type="email" placeholder="jan@bedrijf.nl" required value={form.email} onChange={set('email')} />
                        <InputField label="Telefoon" type="tel" placeholder="+31 6 12 34 56 78" value={form.telefoon} onChange={set('telefoon')} />
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
                      <p className="text-[#7AADCC] text-center" style={{ fontSize: 13 }}>
                        Uw gegevens worden alleen gebruikt voor het beantwoorden van uw aanvraag.
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Klachtenprocedure */}
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px', marginTop: 24 }}>
          <div style={{ padding: '20px 24px', background: '#F4F7FA', borderRadius: 10, borderLeft: '3px solid #D97737' }}>
            <p style={{ fontSize: 13, color: '#3D5A6E', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: '#0F2D4B' }}>Klachten?</strong> Klachten over onze dienstverlening kunt u indienen via{' '}
              <a href="mailto:info@gasprotex.nl" style={{ color: '#D97737' }}>info@gasprotex.nl</a>.
              Wij streven ernaar uw klacht binnen 5 werkdagen te beantwoorden. Komt u er met ons niet uit,
              dan kunt u zich wenden tot de bevoegde rechter in het arrondissement van onze vestigingsplaats.
            </p>
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
