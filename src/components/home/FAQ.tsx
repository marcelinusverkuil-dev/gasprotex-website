'use client'

import { useState } from 'react'

const items = [
  {
    q: 'Wat kost een inventarisatie?',
    a: 'De eerste afspraak duurt ongeveer 1 uur op je locatie. Je krijgt je dashboard met bevindingen, en op basis daarvan een offerte voor de hele plant. De kosten van de inventarisatie zelf bespreken we vooraf.',
  },
  {
    q: 'Wat als je geen lekken vindt?',
    a: 'Dat komt in onze ervaring zelden voor. Vrijwel elke installatie heeft lekken, of de eigenaar het nu weet of niet. Als we onverhoopt niets vinden, dan weet je voor het eerst zeker dat je systeem in orde is. Dat is op zichzelf waardevolle informatie.',
  },
  {
    q: 'Werken jullie samen met onze installateur of onderhoudspartij?',
    a: 'Ja. Wij sporen de lekkages op, jouw vaste partij repareert. We leveren een rapport waarmee jouw installateur direct aan de slag kan, inclusief locatie en prioriteit per lek. We vervangen niemand, we vullen aan met meetapparatuur en methode die de meeste installateurs zelf niet hebben.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: '1px solid rgba(10,34,56,0.1)',
            borderTop: i === 0 ? '1px solid rgba(10,34,56,0.1)' : undefined,
            padding: '18px 0',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: '#0A2238', flex: 1, lineHeight: 1.4 }}>
              {item.q}
            </span>
            <span style={{ fontSize: 18, color: 'rgba(10,34,56,0.6)', flexShrink: 0, lineHeight: 1 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{
              fontSize: 14.5,
              color: 'rgba(10,34,56,0.6)',
              lineHeight: 1.6,
              margin: '10px 0 0',
              paddingRight: 30,
              maxHeight: 300,
              overflow: 'hidden',
              transition: 'max-height 200ms ease',
            }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
