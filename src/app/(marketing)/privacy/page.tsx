export default function PrivacyPage() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container-main" style={{ paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)' }}>
        <div style={{ maxWidth: 800 }}>

          <h1 className="font-bold text-[#0A2238]" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 8 }}>
            Privacybeleid
          </h1>
          <p style={{ fontSize: 13, color: '#6B8FA6', marginBottom: 48 }}>Laatst bijgewerkt: april 2026</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

            <Sectie titel="1. Wie zijn wij">
              <p>GasProtex is een onderneming gespecialiseerd in akoestische gas- en lekdetectie voor de Nederlandse industrie.</p>
              <p style={{ marginTop: 12 }}>
                <strong>Adres:</strong> Hoogstraat 87, Nederland<br />
                <strong>E-mail:</strong> <a href="mailto:info@gasprotex.nl" style={{ color: '#F07830' }}>info@gasprotex.nl</a><br />
                <strong>KVK:</strong> Aanvraag in behandeling
              </p>
            </Sectie>

            <Sectie titel="2. Welke gegevens verzamelen wij">
              <p>Wij verzamelen de volgende persoonsgegevens:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><strong>Contactformulier:</strong> naam, functie, bedrijfsnaam, e-mailadres, telefoonnummer en uw omschrijving van de situatie.</li>
                <li><strong>Klantenportaal:</strong> inloggegevens (e-mailadres), bedrijfsgegevens en lekrapportagedata.</li>
                <li><strong>Websitebezoek:</strong> anonieme gebruiksstatistieken via Google Analytics (alleen na uw toestemming).</li>
              </ul>
            </Sectie>

            <Sectie titel="3. Waarvoor gebruiken wij uw gegevens">
              <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Het beantwoorden van uw aanvraag via het contactformulier</li>
                <li>Het verlenen van toegang tot het klantenportaal</li>
                <li>Het verbeteren van onze website en dienstverlening op basis van anonieme statistieken</li>
              </ul>
              <p style={{ marginTop: 12 }}>Wij gebruiken uw gegevens niet voor commerciële mailings zonder expliciete toestemming.</p>
            </Sectie>

            <Sectie titel="4. Cookies en Google Analytics">
              <p>Wij gebruiken Google Analytics om het gebruik van onze website te analyseren. Dit gebeurt alleen na uw toestemming via de cookiebanner. De gegevens worden geanonimiseerd verwerkt en niet gedeeld met derden voor commerciële doeleinden.</p>
              <p style={{ marginTop: 12 }}>U kunt uw cookievoorkeur te allen tijde wijzigen door de cookies in uw browser te wissen.</p>
            </Sectie>

            <Sectie titel="5. Bewaartermijn">
              <p>Wij bewaren uw gegevens niet langer dan noodzakelijk:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Contactformulier: maximaal 1 jaar na laatste contact</li>
                <li>Klantenportaal: zolang u klant bent, daarna maximaal 2 jaar</li>
                <li>Google Analytics: 14 maanden (standaard instelling)</li>
              </ul>
            </Sectie>

            <Sectie titel="6. Derde partijen">
              <p>Wij maken gebruik van de volgende verwerkers:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><strong>Resend</strong> — voor het verzenden van e-mails via het contactformulier</li>
                <li><strong>Supabase</strong> — voor de opslag van portaaldata</li>
                <li><strong>Google Analytics</strong> — voor anonieme websitestatistieken (alleen met toestemming)</li>
                <li><strong>Vercel</strong> — voor hosting van de website en het portaal</li>
              </ul>
              <p style={{ marginTop: 12 }}>Met alle verwerkers zijn verwerkersovereenkomsten afgesloten.</p>
            </Sectie>

            <Sectie titel="7. Uw rechten">
              <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Recht op inzage in uw gegevens</li>
                <li>Recht op correctie van onjuiste gegevens</li>
                <li>Recht op verwijdering van uw gegevens</li>
                <li>Recht op bezwaar tegen verwerking</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                U kunt uw rechten uitoefenen door een e-mail te sturen naar{' '}
                <a href="mailto:info@gasprotex.nl" style={{ color: '#F07830' }}>info@gasprotex.nl</a>.
                Wij reageren binnen 30 dagen.
              </p>
            </Sectie>

            <Sectie titel="8. Klachten">
              <p>
                Heeft u een klacht over de verwerking van uw persoonsgegevens? Dan kunt u een klacht indienen bij de{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: '#F07830' }}>
                  Autoriteit Persoonsgegevens
                </a>.
              </p>
            </Sectie>

          </div>
        </div>
      </div>
    </section>
  )
}

function Sectie({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: '1px solid #E8EDF2', paddingTop: 32 }}>
      <h2 className="font-bold text-[#0A2238]" style={{ fontSize: 18, marginBottom: 16 }}>{titel}</h2>
      <div style={{ fontSize: 15, color: '#3D5A6E', lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
