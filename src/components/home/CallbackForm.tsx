'use client'

import { useState, useTransition } from 'react'
import { sendCallback } from '@/app/actions/sendCallback'

const inputStyle: React.CSSProperties = {
  background: 'white',
  border: '1px solid rgba(10,34,56,0.1)',
  borderRadius: 5,
  padding: '9px 12px',
  fontSize: 13,
  fontFamily: 'inherit',
  color: '#0A2238',
  width: '100%',
}

export default function CallbackForm() {
  const [naam, setNaam] = useState('')
  const [bedrijf, setBedrijf] = useState('')
  const [telefoon, setTelefoon] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [fout, setFout] = useState('')
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    setFout('')
    startTransition(async () => {
      try {
        await sendCallback({ naam, bedrijf, telefoon })
        setSuccess(true)
        setNaam('')
        setBedrijf('')
        setTelefoon('')
      } catch (err) {
        setFout(err instanceof Error ? err.message : 'Er is iets misgegaan.')
      }
    })
  }

  if (success) {
    return (
      <p style={{ fontSize: 13, color: '#0A2238', fontWeight: 500, margin: '12px 0' }}>
        Bedankt, we bellen je terug.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
      <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="sr-only" htmlFor="cb-naam">Naam</label>
      <input id="cb-naam" value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="Naam" required style={inputStyle} />
      <label className="sr-only" htmlFor="cb-bedrijf">Bedrijf</label>
      <input id="cb-bedrijf" value={bedrijf} onChange={(e) => setBedrijf(e.target.value)} placeholder="Bedrijf" required style={inputStyle} />
      <label className="sr-only" htmlFor="cb-telefoon">Telefoonnummer</label>
      <input id="cb-telefoon" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} placeholder="Telefoonnummer" required style={inputStyle} />
      {fout && <p style={{ fontSize: 12, color: '#c0392b', margin: 0 }}>{fout}</p>}
      <button
        type="submit"
        disabled={isPending}
        style={{
          background: '#0A2238',
          color: 'white',
          border: 'none',
          padding: '10px 14px',
          fontSize: 13.5,
          fontWeight: 500,
          borderRadius: 5,
          cursor: isPending ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? 'Versturen...' : 'Bel mij terug →'}
      </button>
    </form>
  )
}
