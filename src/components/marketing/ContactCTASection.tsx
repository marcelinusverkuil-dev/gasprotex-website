const BOOKINGS_URL =
  'https://outlook.office.com/bookwithme/user/4ced7b7b91134a18840e6a4ea975b021@gasprotex.nl?anonymous&ismsaljsauthenabled&ep=plink';

export default function ContactCTASection() {
  return (
    <section style={{ background: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="container-main">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-[#0A2238] font-bold text-2xl mb-1">
              Weten waar je lekken zitten?
            </h2>
            <p className="text-[#3D5A6E]">
              Een Quickscan geeft je binnen een dagdeel concreet antwoord.
            </p>
          </div>
          <a
            href={BOOKINGS_URL}
            className="inline-flex items-center gap-2 bg-[#F07830] hover:bg-[#FF8A40] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
            style={{ padding: '14px 32px' }}
          >
            Vraag een Quickscan aan →
          </a>
        </div>
      </div>
    </section>
  );
}
