export type SectorData = {
  slug: string
  icon: string
  title: string
  urgentie: string
  urgentieColor: string
  metaDescription: string
  hero: { tagline: string; headline: string; sub: string }
  uitdagingen: { titel: string; tekst: string }[]
  hoeWijHelpen: string
  voordelen: string[]
  kpiStats: { value: string; label: string }[]
  caseHighlight?: { resultaat: string; besparing: string; locatie: string }
}

export const sectorenData: Record<string, SectorData> = {
  chemie: {
    slug: 'chemie',
    icon: '⚗️',
    title: 'Petrochemie & Chemie',
    urgentie: 'Bedrijfskritisch',
    urgentieColor: 'bg-red-50 text-red-600 border-red-200',
    metaDescription: 'Akoestische gaslekdetectie voor BRZO-bedrijven en ATEX-zones. HSE-compliant, geen productiestilstand.',
    hero: {
      tagline: 'Petrochemie & Chemie',
      headline: 'ATEX-Zones Veilig Geïnspecteerd',
      sub: 'BRZO-bedrijven en chemische fabrieken vereisen de hoogste veiligheidsstandaard. Onze akoestische camera opereert volledig ATEX-gecertificeerd — zonder productiestilstand, zonder open vuur.',
    },
    uitdagingen: [
      { titel: 'BRZO-compliance', tekst: 'Gaslekken in H₂, NH₃ of CL₂ systemen zijn direct meldingsplichtig. Onze rapportage is BRZO-proof en geschikt voor inspectie door de Omgevingsdienst.' },
      { titel: 'ATEX-zones', tekst: 'Traditionele detectiemethoden mogen in explosiegevaarlijke zones niet of beperkt worden ingezet. Onze akoestische camera werkt op veilige afstand — geen vonkrisico.' },
      { titel: 'Procesgassen', tekst: 'Waterstof, ammoniak, chloor en andere procesgassen zijn onzichtbaar en onhoorbaar. Akoestische detectie maakt de ontsnappende drukgolf zichtbaar als heatmap.' },
      { titel: 'HSE-rapportage', tekst: 'Uw HSE-manager heeft exacte data nodig: locatie, grootte, kostenpact en CO₂-impact. Onze rapportage levert dit automatisch op.' },
    ],
    hoeWijHelpen: 'Onze ATEX-gecertificeerde inspecteurs scannen uw gehele installatie met de akoestische camera. Elk lek verschijnt als een heatmap op het scherm — tot op 200 meter afstand, zonder toegang tot gevaarlijke zones. U ontvangt dezelfde dag een BRZO-proof rapport.',
    voordelen: [
      'ATEX Zone 1 & 2 gecertificeerd',
      'Detectie op 200 meter afstand',
      'BRZO-proof rapportage',
      'Geen productiestilstand',
      'CO₂-impact berekening',
      'HSE-ready documentatie',
    ],
    kpiStats: [
      { value: '200m', label: 'Detectiebereik' },
      { value: 'ATEX', label: 'Zone 1 & 2' },
      { value: '1 dag', label: 'Inspectie + rapport' },
    ],
    caseHighlight: {
      resultaat: '31 lekken gedetecteerd, 6 kritiek',
      besparing: '€68.000/jaar',
      locatie: 'Chemisch productiebedrijf, Rotterdam',
    },
  },
  food: {
    slug: 'food',
    icon: '🍺',
    title: 'Food & Beverage',
    urgentie: 'Kostenbesparing',
    urgentieColor: 'bg-green-50 text-green-700 border-green-200',
    metaDescription: 'Bespaar op persluchtkosten in de food-industrie. Snelle ROI, geen productiestilstand, ISO 50001 rapportage.',
    hero: {
      tagline: 'Food & Beverage',
      headline: 'Stop Met Geld Door Lekken Verliezen',
      sub: 'Perslucht is de duurste nutsvoorziening in uw fabriek. Gemiddeld 30% gaat verloren door lekken. Wij vinden ze allemaal — terwijl uw productie gewoon doorloopt.',
    },
    uitdagingen: [
      { titel: 'Energiekosten perslucht', tekst: 'Een gemiddeld lek in perslucht kost €1.200–€1.650 per jaar. In een fabriek met tientallen lekken loopt dit snel op tot €30.000+ onnodig energieverbruik.' },
      { titel: 'Contaminatierisico', tekst: 'Olie- en vochtcontaminatie via persluchtlekken kan uw productlijn raken. Vroege detectie voorkomt kwaliteitsproblemen en certificeringsissues.' },
      { titel: 'CO₂-doelstellingen', tekst: 'Persluchtlekken zijn een van de grootste CO₂-bronnen in food-productie. Onze rapportage levert directe input voor uw CO₂-reductieplan.' },
      { titel: 'ISO 50001', tekst: 'Voor ISO 50001-certificering heeft u aantoonbaar energiemanagement nodig. Onze rapportage en klantportaal leveren de bewijslast automatisch op.' },
    ],
    hoeWijHelpen: 'Wij scannen uw persluchtnet, compressors, verpakkingslijnen en koelsystemen tijdens normale productie. U verliest geen productietijd. Dezelfde dag heeft u een lijst met alle lekken, gesorteerd op kostenpact — zodat uw technische dienst direct prioriteiten kan stellen.',
    voordelen: [
      'Scannen tijdens productie',
      'Geen productieverlies',
      'Energiebesparing direct zichtbaar',
      'ISO 50001 rapportage',
      'CO₂-impact per lek',
      'ROI gemiddeld 3–5 maanden',
    ],
    kpiStats: [
      { value: '30%', label: 'Gem. perslucht verlies' },
      { value: '3–5 mnd', label: 'Gemiddelde ROI' },
      { value: '0', label: 'Productie-uren verloren' },
    ],
    caseHighlight: {
      resultaat: '18 lekken gevonden in 1 dag',
      besparing: '€26.400/jaar',
      locatie: 'Drankenproducent, Noord-Holland',
    },
  },
  energie: {
    slug: 'energie',
    icon: '⚡',
    title: 'Energie & Utilities',
    urgentie: 'Compliance',
    urgentieColor: 'bg-blue-50 text-blue-700 border-blue-200',
    metaDescription: 'Gaslekdetectie voor energie- en nutsbedrijven. Compliance-rapportage, emissie-registratie, continue monitoring.',
    hero: {
      tagline: 'Energie & Utilities',
      headline: 'Comply. Bespaar. Continueer.',
      sub: 'Gasdistributienetwerken en nutsbedrijven opereren onder toezicht. Lekdetectie is niet optioneel — het is wettelijk verplicht. Wij leveren de data die uw toezichthouder verwacht.',
    },
    uitdagingen: [
      { titel: 'Wettelijke rapportage', tekst: 'Energiebedrijven zijn verplicht gaslekken te registreren en te rapporteren aan toezichthouders zoals ACM en Omgevingsdiensten. Onze rapportage sluit hierop aan.' },
      { titel: 'Continuïteit', tekst: 'Inspectie van actieve gasdistributienetwerken kan niet met methoden die afsluiting vereisen. Akoestische detectie werkt op afstand, zonder onderbreking.' },
      { titel: 'Emissiebeheer', tekst: 'Methaanemissies uit gasdistributie tellen zwaar mee in ESG-rapportages. Wij kwantificeren elke lek in m³/uur en CO₂-equivalent.' },
      { titel: 'Grootschalige infrastructuur', tekst: 'Netwerken van tientallen kilometers kunnen niet handmatig worden geïnspecteerd. Onze camera dekt grote oppervlaktes snel af.' },
    ],
    hoeWijHelpen: 'Voor nutsbedrijven combineren wij onze akoestische camera met systematische rondgangen langs het distributienet. Per sectie wordt een heatmap gemaakt en elk afwijkend geluidsprofiel geanalyseerd. U ontvangt een rapportage die direct bruikbaar is voor uw toezichthouder.',
    voordelen: [
      'Toezichthouder-klare rapportage',
      'Methaanemissie kwantificering',
      'ESG/CO₂-rapportage data',
      'Geen netwerkonderbreking',
      'Grootschalige coverage',
      'Periodiek abonnement beschikbaar',
    ],
    kpiStats: [
      { value: '100%', label: 'Uptime tijdens inspectie' },
      { value: 'ESG', label: 'Rapport-klaar' },
      { value: '10×', label: 'Sneller dan visuele inspectie' },
    ],
    caseHighlight: {
      resultaat: '8 lekpunten in distributienet',
      besparing: '€41.000/jaar + compliance',
      locatie: 'Regionaal nutsbedrijf, Gelderland',
    },
  },
  industrie: {
    slug: 'industrie',
    icon: '🏭',
    title: 'Algemene Industrie',
    urgentie: 'ROI',
    urgentieColor: 'bg-orange-50 text-[#F07830] border-orange-200',
    metaDescription: 'Snelle ROI door perslucht-lekdetectie in productiebedrijven. Één dag inspectie, directe kostenbesparing.',
    hero: {
      tagline: 'Algemene Industrie',
      headline: 'ROI In Minder Dan 6 Maanden',
      sub: 'Elk productiebedrijf met perslucht verliest geld. Gemiddeld 30% van uw perslucht ontsnapt ongemerkt. Een quickscan van één dag laat u direct zien wat het kost — en wat u bespaart.',
    },
    uitdagingen: [
      { titel: 'Onzichtbaar energieverlies', tekst: 'Persluchtlekken zijn onhoorbaar boven de fabrieksgeluiden. Traditioneel detecteren kost dagenlang werk — akoestisch detecteren kost uren.' },
      { titel: 'Onderhoudsprioritering', tekst: 'Niet elk lek is even urgent. Onze rapportage geeft een prioriteitenmatrix: urgentie × besparing × bereikbaarheid, zodat uw technische dienst efficiënt werkt.' },
      { titel: 'Energiebeheer', tekst: 'Stijgende energieprijzen maken persluchtoptimalisatie steeds relevanter. Lekdetectie is de snelste ROI-maatregel in energiemanagement.' },
      { titel: 'Aantonen besparing', tekst: 'Uw directie wil bewijs van resultaat. Ons klantportaal toont open lekken, gedichte lekken en gerealiseerde besparingen in realtime.' },
    ],
    hoeWijHelpen: 'Wij plannen een quickscan van één dag in uw productiehal. Terwijl uw machines gewoon draaien scannen wij alle persluchtleidingen, compressors, cilinders en fittingen. Aan het einde van de dag heeft u een complete rapportage en weet u exact hoeveel u bespaart als de lekken worden gedicht.',
    voordelen: [
      'Inspectie tijdens productie',
      'Rapportage dezelfde dag',
      'Prioriteitenmatrix voor onderhoud',
      'Gemiddeld ROI 3–6 maanden',
      'Klantportaal voor opvolging',
      'Geschikt voor ISO 50001',
    ],
    kpiStats: [
      { value: '3–6 mnd', label: 'Gemiddelde ROI' },
      { value: '1 dag', label: 'Volledige inspectie' },
      { value: '20–40', label: 'Gem. lekken gevonden' },
    ],
    caseHighlight: {
      resultaat: '24 lekken gevonden in 1 dag',
      besparing: '€33.200/jaar',
      locatie: 'Metaalproducent, Brabant',
    },
  },
}
