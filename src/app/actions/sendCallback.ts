'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (entry.count >= 3) return false
  entry.count++
  return true
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendCallback(form: {
  naam: string
  bedrijf: string
  telefoon: string
}) {
  if (!form.naam?.trim() || form.naam.length > 100) throw new Error('Naam is verplicht')
  if (!form.bedrijf?.trim() || form.bedrijf.length > 100) throw new Error('Bedrijfsnaam is verplicht')
  if (!form.telefoon?.trim() || form.telefoon.length > 30) throw new Error('Telefoonnummer is verplicht')

  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!checkRateLimit(ip)) throw new Error('Te veel aanvragen. Probeer het later opnieuw.')

  const e = (s: string) => escapeHtml(s || '—')

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    subject: `Terugbelverzoek van ${e(form.naam)} — ${e(form.bedrijf)}`,
    html: `
      <h2 style="color:#0A2238">Terugbelverzoek via gasprotex.nl</h2>
      <table style="border-collapse:collapse;width:100%;max-width:400px">
        <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600;width:120px">Naam</td><td style="padding:8px 12px">${e(form.naam)}</td></tr>
        <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Bedrijf</td><td style="padding:8px 12px">${e(form.bedrijf)}</td></tr>
        <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Telefoon</td><td style="padding:8px 12px">${e(form.telefoon)}</td></tr>
      </table>
    `,
  })

  if (error) throw new Error(error.message)
}
