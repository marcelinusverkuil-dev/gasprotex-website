'use client'

import { useState } from 'react'
import { sendContact } from '@/app/actions/sendContact'

const diensten = ['Quickscan (vanaf €2.500)', 'Fabrieksaudit (vanaf €5.000)', 'Serviceabonnement (vanaf €18.000/jaar)', 'Adviesgesprek (gratis)']
const sectoren = ['Petrochemie & Chemie', 'Voedingsmiddelensector', 'Energie & Utilities', 'Algemene Industrie', 'Anders']

export default function ContactForm() {
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', telefoon: '',
    dienst: '', sector: '', bericht: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (honeypot) return
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

  if (status === 'sent') {
    return (
      <div className="rounded-md p-10 text-center" style={{ background: '#F4F7FA' }}>
        <div
          className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full text-xl text-[#F07830]"
          style={{ background: 'rgba(240,120,48,0.15)', border: '1px solid rgba(240,120,48,0.3)' }}
        >
          ✓
        </div>
        <h3 className="font-bold text-[#0A2238] mb-3" style={{ fontSize: 22, lineHeight: 1.2 }}>
          Aanvraag ontvangen
        </h3>
        <p className="text-[#3D5A6E]" style={{ fontSize: 15 }}>
          Bedankt, {form.naam.split(' ')[0]}. Wij nemen binnen één werkdag contact met je op.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <InputField label="Bedrijf *" placeholder="Je bedrijf BV" required value={form.bedrijf} onChange={set('bedrijf')} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="E-mailadres *" type="email" placeholder="jan@bedrijf.nl" required value={form.email} onChange={set('email')} />
        <InputField label="Telefoon *" type="tel" placeholder="+31 6 12 34 56 78" required value={form.telefoon} onChange={set('telefoon')} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField label="Dienst *" required value={form.dienst} onChange={set('dienst')} options={diensten} placeholder="Kies een dienst" />
        <SelectField label="Sector" value={form.sector} onChange={set('sector')} options={sectoren} placeholder="Kies je sector" />
      </div>
      <div>
        <label className="block text-[#6B8FA6] font-medium mb-2" style={{ fontSize: 13 }}>Je situatie</label>
        <textarea
          rows={4}
          value={form.bericht}
          onChange={set('bericht')}
          placeholder="Beschrijf kort je installatie: type gassen, oppervlakte, urgentie..."
          className="w-full outline-none transition-colors resize-none text-[#0A2238] placeholder-[#6B8FA6]"
          style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', borderRadius: 0, padding: '8px 0' }}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-3 bg-[#F07830] hover:bg-[#FF8A40] disabled:opacity-60 text-white font-semibold rounded-md transition-colors"
        style={{ fontSize: 15, padding: '14px 32px' }}
      >
        {status === 'sending' ? 'Verzenden...' : 'Aanvraag versturen'}
        {status !== 'sending' && (
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-center" style={{ fontSize: 13 }}>
          Er is iets misgegaan. Probeer het opnieuw of mail ons op info@gasprotex.nl.
        </p>
      )}
    </form>
  )
}

function InputField({ label, placeholder, required, type = 'text', value, onChange }: {
  label: string; placeholder: string; required?: boolean; type?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-[#6B8FA6] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-[#0A2238] placeholder-[#6B8FA6] outline-none transition-colors"
        style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', borderRadius: 0, padding: '8px 0' }}
      />
    </div>
  )
}

function SelectField({ label, required, value, onChange, options, placeholder }: {
  label: string; required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[#6B8FA6] font-medium mb-2" style={{ fontSize: 13 }}>{label}</label>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className="w-full text-[#0A2238] outline-none transition-colors"
        style={{ fontSize: 15, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(10,34,56,0.2)', borderRadius: 0, padding: '8px 0' }}
      >
        <option value="" style={{ background: '#ffffff', color: '#0A2238' }}>{placeholder}</option>
        {options.map((o) => <option key={o} value={o} style={{ background: '#ffffff', color: '#0A2238' }}>{o}</option>)}
      </select>
    </div>
  )
}
