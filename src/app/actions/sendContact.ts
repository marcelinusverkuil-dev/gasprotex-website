'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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
  const to = process.env.CONTACT_TO_EMAIL!
  const from = process.env.CONTACT_FROM_EMAIL!

  const html = `
    <h2 style="color:#0F2D4B">Nieuwe aanvraag via gasprotex.nl</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600;width:160px">Naam</td><td style="padding:8px 12px">${form.naam}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Functie</td><td style="padding:8px 12px">${form.functie || '—'}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Bedrijf</td><td style="padding:8px 12px">${form.bedrijf}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">E-mail</td><td style="padding:8px 12px"><a href="mailto:${form.email}">${form.email}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Telefoon</td><td style="padding:8px 12px">${form.telefoon || '—'}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Dienst</td><td style="padding:8px 12px">${form.dienst}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600">Sector</td><td style="padding:8px 12px">${form.sector || '—'}</td></tr>
      <tr><td style="padding:8px 12px;background:#F4F7FA;font-weight:600;vertical-align:top">Situatie</td><td style="padding:8px 12px;white-space:pre-wrap">${form.bericht || '—'}</td></tr>
    </table>
  `

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: form.email,
    subject: `Aanvraag van ${form.naam} — ${form.bedrijf}`,
    html,
  })

  if (error) {
    console.error('[sendContact] Resend error:', JSON.stringify(error))
    throw new Error(error.message)
  }
}
