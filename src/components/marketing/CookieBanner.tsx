'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner({ onAccept }: { onAccept: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
    else if (consent === 'accepted') onAccept()
  }, [onAccept])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    onAccept()
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999,
      background: '#0F2D4B', borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '16px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
    }}>
      <p style={{ fontSize: 13, color: '#C2DCE8', lineHeight: 1.6, margin: 0, maxWidth: 700 }}>
        Wij gebruiken cookies om het websitebezoek te analyseren via Google Analytics.
        Zo verbeteren wij onze dienstverlening. Uw gegevens worden anoniem verwerkt.{' '}
        <a href="/privacy" style={{ color: '#D97737', textDecoration: 'underline' }}>Meer informatie</a>.
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0, marginRight: 80 }}>
        <button
          onClick={decline}
          style={{ fontSize: 12, color: '#7AADCC', background: 'transparent', border: '1px solid rgba(122,173,204,0.3)', borderRadius: 6, padding: '8px 16px', cursor: 'pointer', fontWeight: 500 }}
        >
          Weigeren
        </button>
        <button
          onClick={accept}
          style={{ fontSize: 12, color: '#fff', background: '#D97737', border: 'none', borderRadius: 6, padding: '8px 20px', cursor: 'pointer', fontWeight: 600 }}
        >
          Akkoord
        </button>
      </div>
    </div>
  )
}
