# Build-brief — Pillar page "Lekdetectie in ATEX-zones"

**URL of locatie:** `/kennisbank/lekdetectie-in-atex-zones`
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

De centrale pillar-page van het ATEX-content cluster bouwen: een uitgebreid overzichtsartikel dat ranket op de kernterm "lekdetectie ATEX" en alle subthema's kort introduceert met links naar de gespecialiseerde cluster-artikelen die later in de week volgen.

---

## Cijfer-onderbouwing (intern — niet in artikel-copy plaatsen)

| Cijfer / claim | Bron | Datum |
|---|---|---|
| ATEX 114 (2014/34/EU) — productrichtlijn voor apparatuur in expl. atmosferen | Europese richtlijn, officiële tekst EU-Lex | EU 2014, geldend in 2026 |
| ATEX 153 (1999/92/EG) — werkgeversrichtlijn voor veilige werkomgeving | Europese richtlijn, officiële tekst EU-Lex | EU 1999, geldend in 2026 |
| Zone-classificatie 0/1/2 gas, 20/21/22 stof | EN-IEC 60079-10 norm | Internationale standaard |
| EVD (Explosieveiligheidsdocument) max 5 jaar oud | Nederlandse Arbeidsinspectie + Arbobesluit § 3.5e | 2026 |
| ATEX-cursus tarief in NL: €180 (basis) – €3.565 (Professional, ex BTW) | Springest, Kader Academy | 2026 |
| Akoestische camera werkt op 20-80 kHz ultrasoon | Algemene physics + leverancier-specs | 2026 |
| Akoestische camera werkt op afstand (geen contact, geen ontstekingsbron) | Algemene principe van non-invasieve meting | — |
| GasProtex ATEX-zone 2 + zone 22 gecertificeerd | layout.tsx schema.org credentials | 2026 |

**Niet vermeld (geen onderbouwing of bewust weggelaten):**
- Specifieke meetfrequenties of "marktstandaard" cijfers zonder bron
- Specifieke leveranciers- of merknamen (algemene regel)
- Cijfers over inspectie-tijden (sterk afhankelijk van installatie)

---

## Context

**Waarom deze pillar:**

ATEX-lekdetectie is een onderbenutte SEO-niche in NL. Concurrenten ranken hier zwakker dan op breedte-termen, en geen enkele speler heeft een samenhangende content-strategie rond ATEX. Dit cluster (1 pillar + 5 sub-artikelen) claimt die niche.

Deze pillar page is het **hart** van het cluster: hij linkt naar alle 5 sub-artikelen en is de pagina die we willen laten ranken op de kernterm `lekdetectie atex` of `atex lekdetectie`. De sub-artikelen ranken later op long-tail termen en sturen autoriteit terug naar de pillar via interne links.

**Strategische context:**

- GasProtex' kernpropositie (non-invasief, ATEX-gecertificeerd, geen productiestilstand) komt hier maximaal tot zijn recht
- BRZO-bedrijven en chemie zijn target nummer 1 voor jou
- HSE-managers en plant-inspecteurs zoeken op deze termen wanneer ze een compliance-vraag hebben

---

## Scope

**In scope:**

- Eén nieuwe `page.tsx` onder `src/app/(marketing)/kennisbank/lekdetectie-in-atex-zones/page.tsx`
- Volledige copy uitgewerkt in deze brief — Claude Code mag light edits doen voor leesbaarheid, geen inhoudelijke wijzigingen zonder vraag
- Article + BreadcrumbList JSON-LD schema's
- Metadata (title, description, OG, Twitter)
- Toevoegen aan `sitemap.ts` als kennisbank-route (slug: `lekdetectie-in-atex-zones`)
- Toevoegen aan `KennisbankFilter.tsx` artikelen-array onder categorie **"ATEX & Compliance"** (bestaande categorie, hergebruiken — geen nieuwe categorie nodig)
- Internal links naar `/kennisbank/atex-zones-uitgelegd`, `/sectoren/petrochemie-chemie`, `/diensten`, `/contact`
- Placeholder-links naar de 4 nog-te-bouwen cluster-artikelen (zie sectie "Internal-link plaatsing" verderop)

**Out of scope:**

- De 4 nog-te-bouwen cluster-artikelen (komen in aparte briefs deze week)
- Foto/infographic
- Het bestaande `atex-zones-uitgelegd` artikel updaten (gebeurt later in een aparte mini-brief)
- Bronvermelding in publieke copy

---

## SEO

**Title tag (max 60 tekens):**
`Lekdetectie in ATEX-zones: methodes & compliance | GasProtex`

**Meta description (max 155 tekens):**
`Hoe spoor je gaslekken op in ATEX-zone 1 en 2 zonder ontstekingsrisico? Methodes, certificering en de rol van akoestische camera-inspectie uitgelegd.`

**H1:**
`Lekdetectie in ATEX-zones`

**Schema:** Article + BreadcrumbList

**Canonical:** `https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zones` (geen trailing slash)

**Keywords (natuurlijk verwerken):**
- `lekdetectie atex` — primair
- `atex lekdetectie` — primair
- `lekdetectie atex zones`
- `gaslekdetectie atex zone 1`
- `gaslekdetectie atex zone 2`
- `non-invasieve lekdetectie atex`

---

## Pagina-structuur + volledige copy

Volg de kennisbank-template uit `wat-kost-een-persluchtlek/page.tsx` en `atex-zones-uitgelegd/page.tsx`. Layout-conventies in `CLAUDE.md`.

### Eyebrow + H1 + meta

**Eyebrow (oranje):** `ATEX & Compliance`
**H1:** `Lekdetectie in ATEX-zones`
**Datum + leestijd:** `18 mei 2026 · 8 min leestijd`

**Intro (cursief, max-width 720px):**

> Gaslekken opsporen in een ATEX-omgeving is een ander spel dan in een gewone fabriek. Geen open vuur, geen elektrische ontsteking, geen warmtebron — en toch moet je weten waar je lekken zitten. Dit overzichtsartikel zet de vier methodes naast elkaar, legt uit wat de zone-classificatie betekent voor je keuze, en laat zien welke rol akoestische lekdetectie speelt in compliance met ATEX 153 en BRZO.

### Sectie 1 — H2: "ATEX-zones in 60 seconden"

> Een ATEX-zone is een ruimte waar een explosieve atmosfeer kan ontstaan door ontvlambare gassen, dampen of stof. Europese wetgeving (ATEX 114 en ATEX 153) verplicht werkgevers om die zones in kaart te brengen en alleen apparatuur in te zetten die voor die specifieke zone gecertificeerd is.
>
> Voor gas en damp: Zone 0 (continu of langdurig aanwezig), Zone 1 (af en toe bij normaal bedrijf), Zone 2 (zelden en kortstondig). Voor stof bestaan de overeenkomstige zones 20, 21 en 22.
>
> Voor een diepere uitleg van de zones en hoe ze worden geclassificeerd: lees ons artikel [ATEX-zones uitgelegd](/kennisbank/atex-zones-uitgelegd).

### Sectie 2 — H2: "Vier methodes voor lekdetectie in ATEX-omgeving"

> Niet elke detectie-methode is in elke zone toegelaten, en niet elke methode is even efficiënt. Een overzicht:

**Tabel — methodes vergeleken**

| Methode | Werkingsprincipe | Geschikt voor | Beperkingen in ATEX |
|---|---|---|---|
| Vaste/stationaire gasdetectie | Sensor op vaste positie meet gasconcentratie ter plaatse | Continue bewaking van bekende risicopunten | Mist lekken buiten meetstraal; bewaakt concentratie, niet bron |
| Snuffeldetectie (handheld) | Operator loopt rond met handheld gasdetector | Lokale verificatie van vermoede lekken | Vereist menselijke aanwezigheid in zone; meet pas dichtbij bron |
| Tracer gas (helium of waterstof) | Inert gas wordt onder druk in systeem geblazen, detector pikt ontsnapping op | Hoge gevoeligheid op afgesloten systemen | Vereist productiestilstand; inert gas inkopen en inbrengen |
| Akoestische camera (ultrasoon) | Microfoon-array detecteert ultrasoon geluid van turbulente uitstroming | Brede inspectie op afstand, op druk | Werkt bij overdruk; geen detectie bij zeer lage drukverschillen |

> Elke methode heeft zijn plek. Een professionele inspectie combineert er vaak twee of drie. Akoestische detectie is dominant geworden voor brede plant-scans omdat het non-invasief werkt en geen productiestilstand vereist.

### Sectie 3 — H2: "Waarom akoestische camera-inspectie werkt in ATEX"

> Een akoestische camera bestaat uit een microfoon-array (vaak 64-200 microfoons) gecombineerd met een optische camera. De microfoons pikken ultrasone geluiden op (20.000 tot 80.000 Hz) die ontstaan wanneer gas of perslucht onder druk door een opening ontsnapt. Het systeem visualiseert de geluidsbron als een "hot spot" op een live beeld — zo zie je waar het lek zit, ook op afstand.
>
> Voor ATEX-omgevingen is dit een belangrijke methode:
>
> - **Geen ontstekingsbron** — een akoestische camera maakt geen vonk, geen warmte, geen elektrische ontlading die een explosieve atmosfeer zou kunnen ontsteken.
> - **Werkt op afstand** — meten kan vanaf tientallen meters, dus de operator hoeft de risico-zone niet binnen te lopen.
> - **Geen contact met de installatie** — geen aansluitingen, geen openen van leidingen, geen monsters nemen.
> - **Geen productiestilstand** — de installatie blijft op druk, de meting verstoort niets.
>
> Voor de specifieke werking en ATEX-certificering van akoestische camera's: lees [Akoestische camera in ATEX-omgeving](/kennisbank/akoestische-camera-in-atex-omgeving).

### Sectie 4 — H2: "ATEX 153: jouw verplichting als werkgever"

> ATEX 153 (de werkgeversrichtlijn) verplicht je tot drie dingen:
>
> 1. **Inventarisatie** van plaatsen waar explosieve atmosferen kunnen ontstaan
> 2. **Zone-classificatie** (zone 0, 1, 2 voor gas; 20, 21, 22 voor stof)
> 3. **Risicobeperking** door technische én organisatorische maatregelen, vastgelegd in een Explosieveiligheidsdocument (EVD)
>
> De Arbeidsinspectie accepteert EVD's niet ouder dan vijf jaar. Bij plant-wijzigingen, nieuwe installaties of incidenten moet de EVD eerder geactualiseerd worden.
>
> Lekkage-inventarisatie is een vast onderdeel van het EVD: je moet weten waar lekken kúnnen ontstaan en je inspanningen om die te detecteren documenteren. Een rapport van een ATEX-gecertificeerde akoestische inspectie is daarvoor bruikbaar bewijs.
>
> Hoe een ATEX 153 lekkage-inventarisatie eruitziet en welke template je daarvoor kunt gebruiken, lees je in [ATEX 153 lekkage-inventarisatie](/kennisbank/atex-153-lekkage-inventarisatie).

### Sectie 5 — H2: "Zone 1 en Zone 2: wat is het verschil voor lekdetectie?"

> Zone 1 betekent dat een explosieve atmosfeer regelmatig aanwezig kan zijn bij normaal bedrijf. Zone 2 betekent dat zo'n atmosfeer onder normale omstandigheden niet aanwezig is, en als ze ontstaat dan slechts kortstondig.
>
> Voor lekdetectie-apparatuur betekent dat verschil:
>
> - **Zone 1** vereist intrinsiek veilige (Ex-i) of drukvaste (Ex-d) certificering. Apparatuur moet zo ontworpen zijn dat het geen ontsteking kan veroorzaken, óók niet bij fouttoestand.
> - **Zone 2** accepteert lichtere certificeringen, bijvoorbeeld niet-vonkende (Ex-n) categorieën. Apparatuur moet bij normaal bedrijf veilig zijn; bij fouttoestand zijn aanvullende maatregelen toegestaan.
>
> GasProtex inspecteert standaard in Zone 2 (gas) en Zone 22 (stof). Voor Zone 1-inspecties werken we met gespecialiseerd partner-team dat over de juiste hogere certificering beschikt.
>
> Voor de praktische gevolgen van zone-classificatie op je inspectie-keuze: lees [Lekdetectie in ATEX zone 1 en 2](/kennisbank/lekdetectie-in-atex-zone-1-en-2).

### Sectie 6 — H2: "Wie is verantwoordelijk voor wat?"

> ATEX-verantwoordelijkheid is verdeeld over twee rollen:
>
> - **Fabrikant** (onder ATEX 114): zorgt dat apparatuur ATEX-conform is ontworpen, gecertificeerd en gemarkeerd. CE-markering, ATEX-categorie en zone-aanduiding moeten zichtbaar zijn.
> - **Werkgever** (onder ATEX 153): zorgt dat de juiste apparatuur op de juiste plek wordt ingezet, dat zones correct zijn geclassificeerd, en dat werknemers veilig kunnen werken.
>
> In de praktijk: jij als plant-eigenaar koopt apparatuur van een ATEX 114-conforme fabrikant en zet 'm in volgens ATEX 153-regels. Als wij bij jou langs komen om te meten, vallen we onder jouw ATEX 153-verplichting voor zolang we op je terrein zijn — met onze eigen ATEX-gecertificeerde apparatuur en bevoegde technici.
>
> Verdere uitleg in [ATEX 114 vs ATEX 153](/kennisbank/atex-114-vs-atex-153).

### Sectie 7 — H2: "Hoe GasProtex inspecties uitvoert in ATEX-omgevingen"

> Onze aanpak bij een ATEX-omgeving:
>
> 1. **Voorbereiding** — we vragen je EVD en zone-classificatie op, plus een installatie-overzicht. We bepalen op basis daarvan welke meetposities relevant zijn en welke certificeringseisen gelden.
> 2. **On-site briefing** — bij aankomst gaan we langs jullie veiligheids-coördinator. We krijgen werkvergunning, we stemmen af welke zones we wel of niet betreden, en we passen ons aan jullie regels aan (PBM, communicatie, evacuatie).
> 3. **Akoestische scan** — vanuit toegestane posities (vaak buiten de zone, op afstand) inspecteren we de installatie. Lekken visualiseren we direct op het scherm, met locatie en intensiteit.
> 4. **Verificatie** — bij elk gevonden lek meten we druk, type gas (op basis van procesinformatie) en lekgrootte. Bij onduidelijkheid voeren we een aanvullende meting uit.
> 5. **Rapportage** — binnen 24 uur ontvang je een rapport met locatie per lek, geschatte uitstroom (l/min), geschatte jaarlijkse kosten en CO₂-impact, en herstel-prioritering. Bruikbaar als bijlage bij je EVD.
>
> [→ Plan een Quickscan voor jouw installatie](/contact)

### Sectie 8 — H2: "Veelgestelde vragen"

> **Mag ik met een gewone akoestische camera in een ATEX-zone werken?**
> Nee. Voor Zone 1 en Zone 2 moet je een ATEX-gecertificeerde camera gebruiken met de juiste categorie (Ex-i of Ex-d voor Zone 1, Ex-n of hoger voor Zone 2). Een niet-gecertificeerde camera mag wel in de "veilige" omgeving rond de zone, niet erin.
>
> **Werkt akoestische detectie bij elk type gas?**
> Ja, de methode pikt het geluid van turbulente uitstroming op — dat is fysisch gedrag, niet gas-specifiek. Waterstof, methaan, ammoniak, CO₂, perslucht: allemaal detecteerbaar zolang er een drukverschil is. De gevoeligheid varieert wel: kleinere moleculen (waterstof) geven sterkere ultrasone signatuur dan grote moleculen.
>
> **Hoe vaak moet ik mijn ATEX-installatie laten inspecteren?**
> ATEX 153 schrijft geen vaste frequentie voor. De EVD bepaalt zelf de inspectie-intervalen op basis van risico. In praktijk zien we jaarlijkse inspecties bij BRZO-bedrijven en chemische installaties, halfjaarlijks bij hogere risico-categorieën. Voor de EU-Methaanverordening gelden aparte LDAR-frequenties.
>
> **Moet ik mijn productie stilleggen tijdens een akoestische inspectie?**
> Nee. Dat is een van de grote voordelen van deze methode: de installatie blijft op druk en in bedrijf. We meten op afstand, zonder contact. Productiestilstand is alleen vereist bij tracer-gas-methoden of fysieke inspecties.
>
> **Kunnen jullie ook in Zone 0 of Zone 20 meten?**
> Zone 0 (continu explosieve atmosfeer in gas) en Zone 20 (continu stofwolk) komen in praktijk bijna niet voor als toegankelijke meetomgeving — dat zijn vaak binnenruimtes van tanks en silo's. In zulke ruimtes is geen inspectie tijdens bedrijf mogelijk; ze worden gemeten bij periodiek onderhoud met aparte protocollen.

### Footer-tekst (cursief, kleur `#6B8FA6`, max-width 720px)

Standaard GasProtex-signoff — gebruik exact dezelfde tekst die in andere kennisbank-artikelen staat.

### CTA-blok (navy `#0A2238`, padding 48px)

**Kop:** `Lekdetectie nodig in jouw ATEX-omgeving?`
**Sub:** `Plan een vrijblijvend kennismakingsgesprek of een Quickscan ter plaatse.`
**Oranje knop:** `Plan een kennismakingsgesprek` → link naar Microsoft Bookings URL (hergebruik exacte URL uit `Navbar.tsx`)
**Witte link:** `Bekijk onze diensten →` → `/diensten`

### Gerelateerde artikelen (grid van 2)

- Kaart 1: `/kennisbank/atex-zones-uitgelegd` — "ATEX-zones uitgelegd: zone 0, 1 en 2"
- Kaart 2: `/kennisbank/akoestische-camera-kopen-of-dienst-inkopen` — "Akoestische camera kopen of dienst inkopen?"

---

## Internal-link plaatsing (intern)

Deze pillar linkt naar de volgende cluster-artikelen. **Vier daarvan bestaan nog niet** — ze komen deze week. Claude Code: maak alle 5 als gewone `<Link href="...">`-elementen aan, ook al geven ze nu 404. Zodra de sub-artikelen live zijn, werken de links automatisch.

| Doel | Sectie waar gelinkt | Status |
|---|---|---|
| `/kennisbank/atex-zones-uitgelegd` | Sectie 1 (foundational) | ✅ bestaat |
| `/kennisbank/akoestische-camera-in-atex-omgeving` | Sectie 3 (akoestische camera diep) | ⏳ komt deze week |
| `/kennisbank/atex-153-lekkage-inventarisatie` | Sectie 4 (compliance diep) | ⏳ komt deze week |
| `/kennisbank/lekdetectie-in-atex-zone-1-en-2` | Sectie 5 (zone-verschil diep) | ⏳ komt deze week |
| `/kennisbank/atex-114-vs-atex-153` | Sectie 6 (verantwoordelijkheden diep) | ⏳ komt deze week |

Plus links naar:
- `/sectoren/petrochemie-chemie` (waar relevant in body)
- `/contact` (in CTA-blok + bovenste deel sectie 7)
- `/diensten` (in CTA-blok witte link)
- `/kennisbank/akoestische-camera-kopen-of-dienst-inkopen` (gerelateerde artikelen)

---

## Acceptatiecriteria

- [ ] Nieuw bestand `src/app/(marketing)/kennisbank/lekdetectie-in-atex-zones/page.tsx` bestaat met de volledige copy zoals in deze brief
- [ ] **Geen specifieke leveranciers- of merknamen in de copy** (algemene regel)
- [ ] Article + BreadcrumbList JSON-LD aanwezig
- [ ] Metadata, canonical, OG, Twitter velden gevuld
- [ ] `src/app/sitemap.ts` bevat de nieuwe slug `lekdetectie-in-atex-zones`
- [ ] `src/components/marketing/KennisbankFilter.tsx` toont het nieuwe artikel onder bestaande categorie **"ATEX & Compliance"**
- [ ] Alle 5 cluster-internal-links zijn geplaatst (de 4 nog-te-bouwen geven nu 404, dat is verwacht)
- [ ] `npm run build` slaagt zonder errors
- [ ] `npm run lint` geeft geen nieuwe warnings/errors
- [ ] Tabellen renderen correct op mobiel (320px) en desktop (1440px)
- [ ] Commit-bericht: bv. `feat(kennisbank): pillar page lekdetectie in ATEX-zones`

---

## Open vragen voor Claude Code

- **De 4 cluster-links wijzen naar URLs die nog niet bestaan.** Doe geen voorlopige redirect, geen placeholder-mock-pagina. Laat ze gewoon 404 geven tot de cluster-artikelen later deze week worden gepubliceerd. Voeg geen "comingsoon" of disabled state toe.
- **Eyebrow tekst:** `ATEX & Compliance` (gelijk aan filter-categorie, consistent met `atex-zones-uitgelegd`)
- **Lengte:** dit artikel is langer dan andere kennisbank-artikelen (~2.000 woorden). Dat is bewust — pillar pages horen langer en breder te zijn dan cluster-artikelen.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router)
- Styling: Tailwind 4 + bestaande kennisbank-conventies (zie `CLAUDE.md`)
- JSON-LD via bestaande `JsonLd`-component en `getBreadcrumbSchema` helper
- Geen nieuwe dependencies

---

## Out of scope

- 4 cluster-artikelen (komen in aparte briefs)
- Update aan bestaand `atex-zones-uitgelegd` artikel om terug te linken naar pillar (komt in latere mini-brief)
- Infographic of vergelijkings-illustratie
- Engelse vertaling
- LinkedIn-promotie post

---

## Hand-off naar Claude Code

```
Lees docs/briefs/2026-05-18-pillar-lekdetectie-in-atex-zones.md en
implementeer het artikel direct. Verifieer met de acceptatiecriteria
voor je de wijziging commit. De 4 internal links naar nog-te-bouwen
cluster-artikelen mogen 404 geven — niet aanpassen, dat is verwacht.
```
