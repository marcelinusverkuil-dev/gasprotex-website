import Link from 'next/link'

export default function CalculatorSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2
              className="font-bold text-[#0A2238] text-4xl"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              Bereken wat je verliest
            </h2>
            <p className="text-[#3D5A6E] text-lg leading-relaxed mt-4 mb-8">
              Een gemiddeld productiebedrijf verliest 20-30% van zijn perslucht door lekken.
              Bereken in 2 minuten wat dat voor jouw bedrijf betekent.
            </p>
            <Link
              href="/bereken-uw-besparing/perslucht/"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
              style={{ padding: '14px 32px' }}
            >
              Bereken jouw besparing →
            </Link>
          </div>

          <div className="border border-[#0A2238]/10 rounded-md p-6">
            <p className="text-[#6B8FA6] text-sm mb-2">Compressorvermogen</p>
            <div className="h-10 bg-[#F4F7FA] rounded-md border border-[#0A2238]/10 mb-6" />
            <p className="text-[#6B8FA6] text-sm mb-1">Geschat verlies per jaar</p>
            <p className="text-[#0A2238] font-bold text-4xl">€18.500</p>
          </div>

        </div>
      </div>
    </section>
  )
}
