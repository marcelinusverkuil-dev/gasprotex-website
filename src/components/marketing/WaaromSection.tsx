export default function WaaromSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="container-main">
        <div
          className="rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <p
                className="text-[#7AADCC] mb-4"
                style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}
              >
                Waarom dienst in plaats van apparatuur
              </p>
              <h2
                className="text-white font-bold text-3xl mb-4"
                style={{ lineHeight: 1.2 }}
              >
                Apparatuur kopen of dienst inkopen?
              </h2>
              <p className="text-[#C2DCE8] mb-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Een ultrasone camera met ATEX-kit kost €60-100k, plus opleiding en jaarlijks
                onderhoud. Een Quickscan bij ons begint bij €2.500. Voor de prijs van één eigen
                camera doen we 24 scans of 3+ jaar abonnement.
              </p>
              <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Gasdetectie als dienst in plaats van als investering. Wij komen, meten,
                rapporteren. Jij krijgt het resultaat zonder de overhead.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6">
              {[
                'Geen operator opleiden — wij zijn gecertificeerd',
                'Geen kalibratie, geen onderhoud — dat regelen wij',
                'Rapport met euro-impact per lek — niet alleen locaties',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-[#F07830]"
                    style={{ marginTop: '8px' }}
                  />
                  <p className="text-[#C2DCE8]" style={{ fontSize: 15 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
