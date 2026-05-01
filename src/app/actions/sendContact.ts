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
    <h2 style="color:#0A2238">Nieuwe aanvraag via gasprotex.nl</h2>
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

  // Bevestigingsmail naar klant
  const voornaam = form.naam.split(' ')[0]
  const bevestigingHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0A2238;padding:32px 40px;border-radius:8px 8px 0 0">
        <img src="https://gasprotex-website.vercel.app/images/gasprotex-logo.png" alt="GasProtex" style="height:40px" />
      </div>
      <div style="background:#F4F7FA;padding:40px;border-radius:0 0 8px 8px">
        <h2 style="color:#0A2238;margin:0 0 16px">Bedankt voor uw aanvraag, ${voornaam}</h2>
        <p style="color:#3D5A6E;line-height:1.7;margin:0 0 16px">
          Wij hebben uw aanvraag in goede orde ontvangen en nemen binnen <strong>één werkdag</strong> contact met u op.
        </p>
        <div style="background:#fff;border:1px solid #E8EDF2;border-radius:6px;padding:20px 24px;margin:24px 0">
          <p style="color:#6B8FA6;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px">Uw aanvraag</p>
          <table style="border-collapse:collapse;width:100%">
            ${form.dienst ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px;width:100px">Dienst</td><td style="padding:6px 0;color:#0A2238;font-size:13px">${form.dienst}</td></tr>` : ''}
            ${form.bedrijf ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px">Bedrijf</td><td style="padding:6px 0;color:#0A2238;font-size:13px">${form.bedrijf}</td></tr>` : ''}
            ${form.bericht ? `<tr><td style="padding:6px 0;color:#6B8FA6;font-size:13px;vertical-align:top">Situatie</td><td style="padding:6px 0;color:#0A2238;font-size:13px;white-space:pre-wrap">${form.bericht}</td></tr>` : ''}
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
    subject: `Uw aanvraag bij GasProtex is ontvangen`,
    html: bevestigingHtml,
  })
}
