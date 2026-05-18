# Build-brief — Kennisbank-artikel "Akoestische camera kopen of dienst inkopen?"

**URL of locatie:** `/kennisbank/akoestische-camera-kopen-of-dienst-inkopen`
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

Een eerlijk afwegings-artikel publiceren dat de keuze "akoestische camera kopen of dienst inkopen" met onderbouwde cijfers en concrete beslis-criteria uitwerkt, om search-traffic op apparatuur-termen op te vangen en te leiden naar onze dienst-propositie zonder druk-verkoop.

---

## Cijfer-onderbouwing (intern — niet in artikel-copy plaatsen)

Alle cijfers in dit artikel zijn herleidbaar tot één van deze bronnen:

| Cijfer | Bron | Datum |
|---|---|---|
| Camera €40.000 – €60.000 (ATEX-gecertificeerd) | Marcelinus (GasProtex marktkennis 2026) | 2026-05-18 |
| Software-licentie / updates: inbegrepen bij leverancier | Marcelinus | 2026-05-18 |
| Operator-FTE NL: ~€55-70k werkgeverskosten/jaar (incl. lasten) | CAO Metaal & Techniek 2026 (FNV / Strevon kennisbank) | 2026 |
| ATEX-cursus: €180 (basis) tot €3.565 (Professional, ex BTW) | Springest, Kader Academy | 2026 |
| Quickscan vanaf €2.500 | GasProtex eigen prijslijst (huidige homepage WaaromSection) | 2026 |

**Niet vermeld in artikel** (geen onderbouwing of bewust weggelaten):
- Jaarlijkse kalibratie + onderhoudscontract
- Verzekering apparatuur
- ATEX-kit accessoires (vaak onderdeel van leverancier-pakket)
- Specifieke concurrent-merken (algemene regel — geen namen)

---

## Context

**Waarom deze pagina:**

SEO-scan op 17 mei 2026 toont dat de sterkste concurrenten in de NL gaslekdetectie-markt allemaal apparatuur verkopen, niet dienst. Bezoekers van die pagina's overwegen vaak nog of ze het apparaat zelf moeten kopen of een dienst moeten inhuren — een typische "consideration phase"-zoektocht.

GasProtex heeft op de homepage al een korte sectie hierover (`WaaromSection.tsx` met titel "Apparatuur kopen of dienst inkopen?"), maar geen losse pagina die rankt voor zoekopdrachten als:
- `akoestische camera kopen`
- `ultrasone lekdetectie apparatuur prijs`
- `lekdetectie zelf doen of uitbesteden`

**Wat deze pagina moet bereiken:**

1. Bezoekers in afwegingsfase (apparatuur vs. dienst) opvangen
2. De **verborgen kosten** van eigen aanschaf concreet maken — niet alleen de hardware
3. Een eerlijke beslismatrix bieden (wanneer is kopen wél logisch?) — vertrouwen opbouwen
4. Doorleiden naar Quickscan-CTA + besparing-calculator

---

## Scope

**In scope:**

- Eén nieuwe `page.tsx` onder `src/app/(marketing)/kennisbank/akoestische-camera-kopen-of-dienst-inkopen/page.tsx`
- Volledige copy uitgewerkt in deze brief — Claude Code mag light edits doen voor leesbaarheid, geen inhoudelijke wijzigingen zonder vraag
- Article + BreadcrumbList JSON-LD schema's (per kennisbank-template)
- Metadata (title, description, OG, Twitter)
- Toevoegen aan `sitemap.ts` als kennisbank-route
- Toevoegen aan `KennisbankFilter.tsx` artikelen-array
- Internal links naar `/diensten/lekdetectie-abonnement`, `/bereken-je-besparing/perslucht`, `/contact`, en 2 gerelateerde kennisbank-artikelen

**Out of scope:**

- Foto/infographic
- Wijzigingen aan bestaande `WaaromSection.tsx` op homepage
- Bronvermelding in de artikel-copy zichtbaar maken (bronnen blijven in deze brief, niet in publieke tekst)

---

## SEO

**Title tag (max 60 tekens):**
`Akoestische camera kopen of dienst inkopen? | GasProtex`

**Meta description (max 155 tekens):**
`Wat zit er écht in de keuze tussen een eigen akoestische camera en lekdetectie als dienst? Eerlijke afweging met scenario's en beslismatrix.`

**H1:**
`Akoestische camera kopen of dienst inkopen?`

**Schema:** Article + BreadcrumbList (zelfde patroon als `wat-kost-een-persluchtlek/page.tsx`)

**Canonical:** `https://gasprotex.nl/kennisbank/akoestische-camera-kopen-of-dienst-inkopen` (geen trailing slash)

**Keywords (natuurlijk verwerken):**
- `akoestische camera kopen`
- `ultrasone lekdetectie apparatuur`
- `lekdetectie zelf doen of uitbesteden`
- `akoestische lekdetectie als dienst`
- `lekdetectie inhuren industrie`

**Niet noemen:** specifieke leveranciers- of merknamen (algemene regel — concurrenten niet bij naam in publieke content).

---

## Pagina-structuur + volledige copy

Volg de bestaande kennisbank-template van `wat-kost-een-persluchtlek/page.tsx`. Layout-conventies staan in `CLAUDE.md` onder "Kennisbank-artikelen — template".

### Eyebrow + H1 + meta

**Eyebrow (oranje, uppercase):** `Afwegingen`
**H1:** `Akoestische camera kopen of dienst inkopen?`
**Datum + leestijd:** `18 mei 2026 · 5 min leestijd`

**Intro (cursief, max-width 720px):**

> Een ATEX-gecertificeerde akoestische camera is een serieuze investering — tussen de €40.000 en €60.000 voor de hardware, naast een operator die ermee om kan gaan en jaarlijkse vaste kosten die doorlopen. Hoe weeg je dat af tegen een dienst die per inspectie of per jaar afrekent? Dit artikel geeft de cijfers, geen verkooppraat.

### Sectie 1 — H2: "De korte versie"

> Eigen aanschaf rendeert pas wanneer je **meer dan zes inspecties per jaar** doet én een ATEX-gecertificeerde technicus in huis hebt die de camera consequent inzet. Onder die drempel betaal je voor capaciteit die ongebruikt blijft.
>
> Dienst inkopen rendeert wanneer je **één tot vier inspectie-momenten per jaar** hebt, geen eigen ATEX-bevoegd team in huis, of behoefte aan rapportage met euro-impact per lek in plaats van locatie-coördinaten.

### Sectie 2 — H2: "Wat kost een eigen camera?"

> De hardware is het deel dat het meest opvalt, maar zelden de grootste kostenpost over een aantal jaren.

**Tabel — eenmalige kosten bij aanschaf**

| Kostenpost | Bandbreedte |
|---|---|
| Akoestische camera, ATEX-uitvoering | €40.000 – €60.000 |
| ATEX-opleiding voor de operator (afhankelijk van niveau) | €180 – €3.565 per persoon |
| Aanvullende kit (afhankelijk van zone-classificatie + leverancier) | Op offerte |

Onder de tabel:

> De software voor analyse en rapportage wordt door de meeste leveranciers gratis bij de camera geleverd. Geen jaarlijkse licentie-kosten dus, maar het scheelt veel of je bij een nieuwe versie wel of niet automatisch toegang hebt.

**Tabel — terugkerende kosten per jaar**

| Kostenpost | Toelichting |
|---|---|
| Operator-tijd | Een ATEX-bevoegde technicus kost een werkgever in 2026 grofweg €55.000 – €70.000 per jaar (CAO Metaal & Techniek, inclusief werkgeverslasten). Bij intensief gebruik (10–15% van een FTE) is dat circa €5.500 – €10.500 per jaar aan toegerekende personeelskosten. |
| Kalibratie + onderhoud | Variabel per leverancier en gebruiksintensiteit. Vraag dit expliciet uit in een offerte voordat je beslist. |

> Tel daar nog de **leertijd** bij op: een operator komt niet meteen tot bruikbare meetresultaten op dag één. Reken in de eerste 6-12 maanden op meer scan-tijd per inspectie en op gemiste lekken die een ervaren technicus wel zou hebben gezien.

### Sectie 3 — H2: "Wat kost dienst-inkoop?"

> Een **Quickscan** bij GasProtex start vanaf €2.500: één dagdeel ter plaatse, akoestische camera-inspectie, rapport binnen 24 uur met euro-impact en CO₂-impact per gevonden lek. Geen kapitaalinvestering, geen operator-opleiding, geen kalibratie-zorgen.
>
> Voor klanten met meerdere inspectiemomenten per jaar bieden we een **abonnementsvorm** waarin inspecties, het klantportaal, rapportage en doorlopende monitoring zijn meegenomen. De jaarprijs hangt af van schaal en frequentie — vraag een offerte aan voor jouw situatie.

### Sectie 4 — H2: "Twee scenario's, zij aan zij"

> Twee voorbeelden, conservatief gerekend. Beide scenario's veronderstellen dat de operator-tijd ook werkelijk wordt toegerekend (en niet onbetaalde overhead is voor een al rondlopende technicus).

**Scenario A — twee inspecties per jaar (typisch bij kleine of middelgrote installaties)**

| | Eigen camera | Dienst inkopen |
|---|---|---|
| Eerste jaar | €40.000 – €60.000 hardware + €180 – €3.565 opleiding + ~€2.000 – €3.500 operator-tijd | 2 × Quickscan = €5.000 |
| Jaar 2 t/m 5 (per jaar) | ~€2.000 – €3.500 operator-tijd | €5.000 |
| **5-jaars totaal (conservatief)** | **€48.000 – €77.500** | **€25.000** |

**Scenario B — twaalf inspecties per jaar (intensieve monitoring of BRZO-omgeving)**

| | Eigen camera | Dienst inkopen |
|---|---|---|
| Eerste jaar | €40.000 – €60.000 hardware + opleiding + ~€8.000 – €10.500 operator-tijd | Abonnement (op offerte) |
| Jaar 2 t/m 5 (per jaar) | ~€8.000 – €10.500 operator-tijd | Abonnement |
| **5-jaars totaal (conservatief)** | **€72.000 – €115.000+** | Afhankelijk van offerte, vaak gunstiger dan zelf aanschaffen bij dit volume |

> Het kantelpunt ligt rond **zes inspecties per jaar**. Onder die frequentie is dienst-inkoop bijna altijd gunstiger; erboven kantelt de balans richting eigen aanschaf — mits je een ervaren operator in huis hebt.

### Sectie 5 — H2: "Wanneer is kopen wél logisch?"

> Eerlijke vergelijking. Eigen aanschaf is in deze vier situaties verdedigbaar:

> **Hoge frequentie (zes of meer inspecties per jaar)** — Bij dagelijks of wekelijks scannen drukt de TCO per scan ver onder dienst-prijzen.
>
> **Eigen ATEX-bevoegd technisch team beschikbaar** — Een full-time technicus die het toch al druk heeft kan de camera als integraal onderdeel van het onderhoudsprogramma inzetten. De operator-tijd is dan geen incrementele kostenpost.
>
> **Strategische in-house monitoring (BRZO/Seveso)** — Sommige BRZO-bedrijven kiezen voor in-house gasdetectie omdat continue beschikbaarheid een veiligheidsvereiste is, los van pure ROI.
>
> **Lange-termijn budget en CAPEX-cultuur** — Als jouw organisatie kapitaalinvesteringen prefereert boven operationele uitgaven (fiscaal of administratief), sluit aanschaf daarbij aan.

### Sectie 6 — H2: "Wanneer is dienst-inkoop logisch?"

> **Eén tot vier inspecties per jaar** — Onder deze drempel zit je vast aan capaciteit waarvoor je vaste kosten betaalt zonder ze terug te verdienen. Dienst-inkoop schaalt met je echte behoefte.
>
> **Geen eigen ATEX-bevoegde technicus** — Een operator opleiden, certificeren en up-to-date houden is een meerjarige investering. Bij dienst-inkoop zit dat in het tarief.
>
> **Variabele inspectie-momenten (audits, incidenten)** — Als je behoefte piekt rond audits (BRZO, ATEX 153, EU-Methaanverordening) maar daarbuiten laag is, kun je beter ad-hoc inkopen dan vaste capaciteit aanhouden.
>
> **Behoefte aan euro-impact rapportage** — Een eigen camera levert lekkage-coördinaten. Een dienst-rapport geeft euro's per lek, CO₂-impact, prioritering en herstel-advies. Dat versnelt besluitvorming én ROI.

### Sectie 7 — H2: "Beslismatrix — welke route past bij jou?"

> Beantwoord vijf vragen. Drie of meer "kopen" → koop is verdedigbaar. Drie of meer "dienst" → kies dienst-inkoop.

**Tabel — beslismatrix**

| Factor | Wijst op kopen | Wijst op dienst |
|---|---|---|
| Aantal inspecties per jaar | Zes of meer | Eén tot vier |
| ATEX-bevoegde technicus in huis? | Ja, full-time | Nee, of deeltijd / inhuur |
| Budgetstructuur | CAPEX-georiënteerd | OPEX-georiënteerd, voorspelbare kosten gewenst |
| Behoefte aan externe rapportage (BRZO, ESG, ATEX) | Intern team verzorgt zelf | Externe rapportage gewenst |
| Verwachte gebruiksduur camera | 8 – 10 jaar | < 5 jaar of onbekend |

### Sectie 8 — H2: "Wat past bij jouw situatie?"

> **1. Je twijfelt nog — eerst een Quickscan**
>
> De eenvoudigste manier om de impact van akoestische gaslekdetectie voor jouw specifieke installatie te peilen, is een eenmalige Quickscan. Eén dagdeel, geen verplichting, concreet rapport met euro-impact per gevonden lek. Daarna beslis je: blijvend dienst inkopen, of toch in eigen apparatuur investeren.
>
> [→ Plan een Quickscan](/contact)
>
> **2. Je wil eerst weten wat je verliest**
>
> Onze [perslucht-besparingscalculator](/bereken-je-besparing/perslucht) berekent in twee minuten wat een typisch lek in jouw situatie per jaar kost — inclusief CO₂-impact en auto-kilometer-equivalent. Geeft je de business case-ruimte om een vervolggesprek aan te gaan.

### Footer-tekst (cursief, kleur `#6B8FA6`, max-width 720px)

Standaard GasProtex-signoff — gebruik exact dezelfde tekst die in `wat-kost-een-persluchtlek/page.tsx` staat (consistent across kennisbank).

### CTA-blok (navy `#0A2238`, padding 48px)

**Kop:** `Wil je weten waar jouw lekken zitten?`
**Sub:** `Plan een vrijblijvend kennismakingsgesprek of een Quickscan ter plaatse.`
**Oranje knop:** `Plan een kennismakingsgesprek` → link naar Microsoft Bookings URL (hergebruik exacte URL uit `Navbar.tsx`)
**Witte link:** `Bekijk onze diensten →` → `/diensten`

### Gerelateerde artikelen (grid van 2)

- Kaart 1: `/kennisbank/wat-kost-een-persluchtlek` — "Wat kost een persluchtlek per jaar?"
- Kaart 2: `/kennisbank/akoestische-lekdetectie-naast-vaste-gasdetectie` — "Akoestische naast vaste gasdetectie: aanvulling, geen vervanging"

---

## Implementatiedetails — niet inhoudelijk

### Bestand aanmaken

`src/app/(marketing)/kennisbank/akoestische-camera-kopen-of-dienst-inkopen/page.tsx` — gebruik `wat-kost-een-persluchtlek/page.tsx` als template voor structuur, JSON-LD, metadata, en layout-conventies.

### `src/app/sitemap.ts`

Voeg toe aan de `kennisbankSlugs` array:

```ts
'akoestische-camera-kopen-of-dienst-inkopen',
```

### `src/components/marketing/KennisbankFilter.tsx`

Voeg entry toe aan de `artikelen`-array. Categorie: `Afwegingen` — als die niet bestaat als filter-optie, flag het in de PR-beschrijving zodat Marcelinus kan beslissen of er een nieuwe filter-categorie nodig is. Niet zelf toevoegen zonder vraag.

### Cross-links

Reciprocaal: voeg in `wat-kost-een-persluchtlek/page.tsx` en `akoestische-lekdetectie-naast-vaste-gasdetectie/page.tsx` ook een link naar dit nieuwe artikel toe in hun "Gerelateerde artikelen"-blok — vervang de minst relevante kaart als er al twee staan.

---

## Acceptatiecriteria

- [ ] Nieuw bestand bestaat met de volledige copy zoals in deze brief
- [ ] **Geen specifieke leveranciers- of merknamen in de copy** (algemene regel — `grep -ic "distran\|crysound\|sorama\|fluke\|teledyne\|flir\|ue systems" page.tsx` geeft 0)
- [ ] Article + BreadcrumbList JSON-LD aanwezig
- [ ] Metadata, canonical, OG, Twitter velden gevuld
- [ ] `src/app/sitemap.ts` bevat de nieuwe slug
- [ ] `src/components/marketing/KennisbankFilter.tsx` toont het nieuwe artikel
- [ ] Twee gerelateerde artikelen reciprocaal gelinkt
- [ ] `npm run build` slaagt zonder errors
- [ ] `npm run lint` geeft geen nieuwe warnings/errors
- [ ] Tabellen renderen correct op mobiel (320px) en desktop (1440px) — gebruik bestaande tabel-styling
- [ ] Commit-bericht: bv. `feat(kennisbank): nieuw artikel akoestische camera kopen vs dienst inkopen`

---

## Open vragen voor Claude Code

- **Categorie in KennisbankFilter** — als "Afwegingen" niet bestaat als filter, kies dan de meest passende bestaande categorie en flag het in de PR-beschrijving. Niet zelfstandig een nieuwe categorie toevoegen.
- **CTA-knop link** — gebruik exact dezelfde Microsoft Bookings URL die in `Navbar.tsx` staat voor consistency.
- **Cijfers in tabellen** — niet aanpassen of toevoegen zonder vraag. Alle cijfers zijn bewust gekozen vanuit de onderbouwing-tabel bovenin deze brief.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router)
- Styling: Tailwind 4 + bestaande kennisbank-conventies (zie `CLAUDE.md` → "Kennisbank-artikelen — template")
- JSON-LD via bestaande `JsonLd`-component en `getBreadcrumbSchema` helper uit `@/lib/schema`
- Geen nieuwe dependencies

---

## Out of scope

- Infographic
- A/B-test van CTA-tekst
- Engelse vertaling
- Promotie via LinkedIn-post — past in `backlink-bootstrap` brief

---

## Hand-off naar Claude Code

```
Lees docs/briefs/2026-05-18-kennisbank-camera-kopen-vs-dienst.md en
implementeer het artikel direct. Verifieer met de acceptatiecriteria
voor je de wijziging commit.
```
