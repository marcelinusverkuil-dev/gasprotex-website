const stappen = [
  {
    nr: 'Stap 1',
    title: 'Quickscan',
    body: 'Een dagdeel, eerste bewijs. Je ziet direct wat er lekt en wat het kost.',
  },
  {
    nr: 'Stap 2',
    title: 'Audit',
    body: 'Systematische scan van de hele locatie met volledig rapport.',
  },
  {
    nr: 'Stap 3',
    title: 'Abonnement',
    body: 'Jaarlijkse herhaling, klantportaal met actuele status per lek.',
  },
]

export default function HoeWerkenWeSection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '8px' }}>
      <div className="container-main">
        <div
          className="rounded-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
        >
          <h2
            className="text-white font-bold text-3xl mb-8"
            style={{ lineHeight: 1.2 }}
          >
            Begin met een Quickscan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stappen.map((stap) => (
              <div key={stap.nr}>
                <p className="text-[#F07830] text-sm font-semibold mb-2">{stap.nr}</p>
                <h3 className="text-white font-bold text-lg mb-2">{stap.title}</h3>
                <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {stap.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/diensten/lekdetectie-abonnement/"
            className="inline-flex items-center gap-2 text-[#F07830] hover:text-[#FF8A40] font-semibold transition-colors mt-8"
            style={{ fontSize: 14 }}
          >
            Meer over het abonnement →
          </a>
        </div>
      </div>
    </section>
  )
}
