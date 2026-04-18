'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function BevestigingContent() {
  const params = useSearchParams()
  const naam = params.get('name') ?? ''
  const voornaam = naam ? naam.split(' ')[0] : ''

  return (
    <section style={{ background: '#F4F7FA', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-2xl mx-auto w-full" style={{ paddingLeft: 24, paddingRight: 24 }}>

        {/* Card */}
        <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,45,75,0.08)' }}>

          {/* Top bar */}
          <div style={{ background: 'linear-gradient(to right, #0F2D4B, #1E5A8A)', padding: '28px 40px', display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gasprotex-logo.png" alt="GasProtex" style={{ height: 36 }} />
          </div>

          {/* Body */}
          <div style={{ padding: '48px 40px', textAlign: 'center' }}>

            {/* Check icon */}
            <div style={{
              width: 64, height: 64, borderRadius: '50%', background: 'rgba(217,119,55,0.12)',
              border: '2px solid rgba(217,119,55,0.3)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 24px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97737" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#0F2D4B', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Afspraak bevestigd
            </h1>

            <p style={{ fontSize: 16, color: '#3D5A6E', margin: '0 0 32px', lineHeight: 1.6 }}>
              {voornaam
                ? `Bedankt, ${voornaam}. We hebben een bevestiging naar uw e-mailadres gestuurd.`
                : 'Uw afspraak is ingepland. We hebben een bevestiging naar uw e-mailadres gestuurd.'
              }
            </p>

            {/* Info block */}
            <div style={{ background: '#F4F7FA', borderRadius: 10, padding: '20px 24px', marginBottom: 32, textAlign: 'left' }}>
              <p style={{ fontSize: 14, color: '#3D5A6E', margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: '#0F2D4B' }}>Wat kunt u verwachten?</strong><br />
                Onze specialist neemt contact met u op ter voorbereiding van de afspraak.
                Heeft u in de tussentijd vragen? Neem gerust contact op.
              </p>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginBottom: 36 }}>
              <a href="mailto:info@gasprotex.nl" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#3D5A6E', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@gasprotex.nl
              </a>
              <a href="tel:+31613055282" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#3D5A6E', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                +31 (0)6 130 55 282
              </a>
            </div>

            <Link href="/"
              style={{
                display: 'inline-block', background: '#D97737', color: '#fff',
                borderRadius: 8, padding: '12px 28px', fontSize: 14, fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.02em',
              }}
            >
              Terug naar GasProtex.nl
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function AfspraakBevestigdPage() {
  return (
    <Suspense>
      <BevestigingContent />
    </Suspense>
  )
}
