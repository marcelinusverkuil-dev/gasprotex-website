import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons – GasProtex',
  description: 'GasProtex brengt akoestische gaslekdetectie naar de Nederlandse industrie. Sneller, veiliger, zonder productiestilstand.',
}

const waarden = [
  { titel: 'Precisie', tekst: 'Tot op de centimeter nauwkeurig. Geen schattingen, geen vage zones — exacte locaties die uw onderhoudsdienst direct kan opvolgen.' },
  { titel: 'Veiligheid', tekst: 'ATEX-gecertificeerd voor explosiegevaarlijke zones. Detectie op afstand, zonder uw team of installatie te riskeren.' },
  { titel: 'Transparantie', tekst: 'Elk lek krijgt een euro-waarde. Uw directie ziet direct wat lekken kosten — en wat de besparing is na herstel.' },
  { titel: 'Snelheid', tekst: '10× sneller dan traditionele methoden. Één specialist, één dag, complete rapportage. Terwijl uw productie doorloopt.' },
]

const tijdlijn = [
  { jaar: '2022', tekst: 'Oprichting GasProtex na ervaring met perslucht-energieverlies in de procesindustrie.' },
  { jaar: '2023', tekst: 'Eerste akoestische camera-inspecties bij chemische producenten in Rotterdam en Zeeland.' },
  { jaar: '2024', tekst: 'ATEX-certificering behaald. Uitbreiding naar food & beverage en energiesector.' },
  { jaar: '2025', tekst: 'Lancering klantportaal met realtime lekstatus en kostenrapportage voor abonnementsklanten.' },
]

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0F2D4B] pb-20" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <p className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}>
            Over GasProtex
          </p>
          <h1 className="font-display font-black uppercase text-white leading-none mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Wij Maken Gaslekken Zichtbaar
          </h1>
          <p className="text-[#C2DCE8] max-w-xl" style={{ fontSize: 17, lineHeight: 1.75 }}>
            GasProtex brengt akoestische camera-technologie naar de Nederlandse industrie.
            Wat vroeger onzichtbaar en onhoorbaar was, is nu precies in kaart te brengen — in één dag, zonder stilstand.
          </p>
        </div>
      </section>

      {/* Missie */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}>
                Onze Missie
              </p>
              <h2 className="font-display font-black uppercase text-[#0F2D4B] leading-none mb-6" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1 }}>
                Geen Enkel Lek Onopgemerkt
              </h2>
              <p className="text-[#3D5A6E] leading-relaxed mb-6" style={{ fontSize: 16, lineHeight: 1.8 }}>
                De Nederlandse industrie verliest jaarlijks honderden miljoenen euro&apos;s aan gaslekken.
                Niet omdat niemand ze wil aanpakken — maar omdat ze tot nu toe onmogelijk snel en veilig te detecteren waren.
              </p>
              <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 16, lineHeight: 1.8 }}>
                Met akoestische camera-technologie brengen wij elk lek in kaart. Snel, veilig en
                met directe kostenberekening — zodat uw maintenance-team exact weet waar te beginnen.
              </p>
            </div>

            {/* Stats — clean zonder randen */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30%', label: 'Gem. perslucht verlies', sub: 'Gemiddeld in de industrie' },
                { value: '10×', label: 'Sneller', sub: 'Vs. traditionele methoden' },
                { value: '200m', label: 'Detectiebereik', sub: 'Veilige afstandsdetectie' },
                { value: 'ATEX', label: 'Gecertificeerd', sub: 'Zone 1 & Zone 2' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-lg" style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)', background: '#fff' }}>
                  <div className="font-display font-black text-[#D97737] leading-none mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36 }}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-[#0F2D4B] mb-0.5" style={{ fontSize: 14 }}>{stat.label}</div>
                  <div className="text-[#6B8FA6]" style={{ fontSize: 12 }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waarden — clean zonder iconen en randen */}
      <section className="py-20 lg:py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="text-center mb-14">
            <p className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}>
              Onze Kernwaarden
            </p>
            <h2 className="font-display font-black uppercase text-[#0F2D4B] leading-none" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1 }}>
              Waarop U Ons Kunt Aanspreken
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {waarden.map((w) => (
              <div key={w.titel} className="bg-white p-7 rounded-lg" style={{ boxShadow: '0 2px 12px rgba(15,45,75,0.06)' }}>
                <h3 className="font-display font-bold uppercase text-[#0F2D4B] mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 18 }}>
                  {w.titel}
                </h3>
                <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 14, lineHeight: 1.7 }}>
                  {w.tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="max-w-2xl mx-auto">
            <p className="font-display font-bold uppercase tracking-[4px] text-[#D97737] mb-4 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 12 }}>
              Onze Geschiedenis
            </p>
            <h2 className="font-display font-black uppercase text-[#0F2D4B] leading-none mb-14 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1 }}>
              Hoe GasProtex Ontstond
            </h2>
            <div className="space-y-0">
              {tijdlijn.map((item) => (
                <div key={item.jaar} className="flex gap-8 py-6">
                  <span className="font-display font-black text-[#D97737] flex-shrink-0 w-12" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22 }}>
                    {item.jaar}
                  </span>
                  <p className="text-[#3D5A6E] leading-relaxed" style={{ fontSize: 15, lineHeight: 1.7 }}>
                    {item.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F2D4B' }}>
        <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div>
            <h2 className="font-display font-black uppercase text-white mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1 }}>
              Laat Ons Uw Installatie Scannen
            </h2>
            <p className="text-[#7AADCC]" style={{ fontSize: 15 }}>
              Gratis quickscan-advies. Reactie binnen één werkdag.
            </p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D97737] hover:bg-[#E8893A] text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-colors" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 14, letterSpacing: '2px' }}>
            Contact Opnemen
          </Link>
        </div>
      </section>
    </>
  )
}
