'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In-memory rate limiter: max 5 submissions per IP per uur
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (entry.count >= 5) return false
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

function validateForm(form: {
  naam: string; functie: string; bedrijf: string; email: string
  telefoon: string; dienst: string; sector: string; bericht: string
}): string | null {
  if (!form.naam?.trim() || form.naam.length > 100)
    return 'Naam is verplicht (max. 100 tekens)'
  if (!form.bedrijf?.trim() || form.bedrijf.length > 100)
    return 'Bedrijfsnaam is verplicht (max. 100 tekens)'
  if (!form.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 200)
    return 'Ongeldig e-mailadres'
  if (form.telefoon && form.telefoon.length > 30)
    return 'Ongeldig telefoonnummer'
  if (!form.dienst?.trim())
    return 'Kies een dienst'
  if (form.bericht && form.bericht.length > 5000)
    return 'Bericht te lang (max. 5000 tekens)'
  return null
}

export async function sendContact(form: {
  naam: string
  functie: string
  bedrijf: string
  email: string
  telefoon: string
  dienst: string
  sector: string
  bericht: string
}) {
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (!checkRateLimit(ip)) {
    throw new Error('Te veel aanvragen. Probeer het later opnieuw.')
  }

  const validationError = validateForm(form)
  if (validationError) {
    throw new Error(validationError)
  }

  const to = process.env.CONTACT_TO_EMAIL!
  const from = process.env.CONTACT_FROM_EMAIL!

  const e = (s: string) => escapeHtml(s || '—')

  const html = `
    <h2 style="color:#0A2238">Nieuwe aanvraag via gasprotex.nl</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600;width:160px">Naam</td><td style="padding:8px 12px">${e(form.naam)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Functie</td><td style="padding:8px 12px">${e(form.functie)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Bedrijf</td><td style="padding:8px 12px">${e(form.bedrijf)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">E-mail</td><td style="padding:8px 12px"><a href="mailto:${e(form.email)}">${e(form.email)}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Telefoon</td><td style="padding:8px 12px">${e(form.telefoon)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Dienst</td><td style="padding:8px 12px">${e(form.dienst)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Sector</td><td style="padding:8px 12px">${e(form.sector)}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600;vertical-align:top">Situatie</td><td style="padding:8px 12px;white-space:pre-wrap">${e(form.bericht)}</td></tr>
    </table>
  `

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: form.email,
    subject: `Aanvraag van ${e(form.naam)} — ${e(form.bedrijf)}`,
    html,
  })

  if (error) {
    console.error('[sendContact] Resend error:', JSON.stringify(error))
    throw new Error(error.message)
  }

  const voornaam = escapeHtml(form.naam.split(' ')[0])
  const bevestigingHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0A2238;padding:32px 40px;border-radius:8px 8px 0 0">
        <img src="https://gasprotex.nl/images/gasprotex-logo.png" alt="GasProtex" style="height:40px" />
      </div>
      <div style="background:#F4F7FA;padding:40px;border-radius:0 0 8px 8px">
        <h2 style="color:#0A2238;margin:0 0 16px">Bedankt voor je aanvraag, ${voornaam}</h2>
        <p style="color:#3D5A6E;line-height:1.7;margin:0 0 16px">
          Wij hebben je aanvraag in goede orde ontvangen en nemen binnen <strong>één werkdag</strong> contact met je op.
        </p>
        <div style="background:#fff;border:1px solid #E8EDF2;border-radius:6px;padding:20px 24px;margin:24px 0">
          <p style="color:#6B8FA6;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px">Je aanvraag</p>
          <table style="border-collapse:collapse;width:100%">
            ${form.dienst ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px;width:100px">Dienst</td><td style="padding:6px 0;color:#0A2238;font-size:13px">${e(form.dienst)}</td></tr>` : ''}
            ${form.bedrijf ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px">Bedrijf</td><td style="padding:6px 0;color:#0A2238;font-size:13px">${e(form.bedrijf)}</td></tr>` : ''}
            ${form.bericht ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px;vertical-align:top">Situatie</td><td style="padding:6px 0;color:#0A2238;font-size:13px;white-space:pre-wrap">${e(form.bericht)}</td></tr>` : ''}
          </table>
        </div>
        <p style="color:#3D5A6E;line-height:1.7;margin:0 0 8px">Met vriendelijke groet,</p>
        <p style="color:#0A2238;font-weight:600;margin:0">Team GasProtex</p>
        <p style="color:#6B8FA6;font-size:13px;margin:4px 0 0"><a href="mailto:info@gasprotex.nl" style="color:#F07830">info@gasprotex.nl</a></p>
      </div>
    </div>
  `

  await resend.emails.send({
    from,
    to: form.email,
    replyTo: to,
    subject: `Je aanvraag bij GasProtex is ontvangen`,
    html: bevestigingHtml,
  })
}
