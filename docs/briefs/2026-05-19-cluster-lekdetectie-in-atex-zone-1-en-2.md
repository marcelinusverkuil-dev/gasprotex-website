# Build-brief — Cluster-artikel "Lekdetectie in ATEX zone 1 en 2"

**URL of locatie:** `/kennisbank/lekdetectie-in-atex-zone-1-en-2`
**Status:** klaar voor bouw (na pillar page is gepubliceerd)
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

Een diepgaand cluster-artikel publiceren dat het praktische verschil tussen lekdetectie in ATEX Zone 1 en Zone 2 uitlegt — welke apparatuur-categorieën zijn vereist, welke detectie-methodes mogen wel of niet, en hoe je dat in praktijk inzet — om de long-tail-termen `atex zone 1 lekdetectie` en `atex zone 2 lekdetectie` te claimen.

---

## Cijfer-onderbouwing (intern — niet in artikel-copy plaatsen)

| Cijfer / claim | Bron | Datum |
|---|---|---|
| Zone 1 = explosieve atmosfeer kan regelmatig aanwezig zijn (richtlijn: 10–1.000 uur/jaar) | EN-IEC 60079-10-1 norm | 2020 (geldend in 2026) |
| Zone 2 = explosieve atmosfeer onder normale omstandigheden niet aanwezig (<10 uur/jaar) | EN-IEC 60079-10-1 norm | 2020 (geldend in 2026) |
| ATEX-categorie 2G voor Zone 1 (high protection) | ATEX 114 richtlijn 2014/34/EU | EU 2014, geldend |
| ATEX-categorie 3G voor Zone 2 (normal protection) | ATEX 114 richtlijn 2014/34/EU | EU 2014, geldend |
| Ex-i (intrinsic safety) gedefinieerd in EN 60079-11 | EN-IEC 60079-11 norm | 2012 |
| Ex-d (flameproof enclosure) gedefinieerd in EN 60079-1 | EN-IEC 60079-1 norm | 2014 |
| Ex-n (non-sparking) gedefinieerd in EN 60079-15 | EN-IEC 60079-15 norm | 2019 |
| GasProtex eigen Zone 2 + Zone 22 certificering | `src/app/layout.tsx` schema.org credentials | 2026 |
| Zone 1 inspectie vereist gespecialiseerd partner-team (jouw input) | Marcelinus | 2026-05-18 |

**Niet vermeld:** specifieke fabrikanten, "marktstandaarden" zonder bron, prijzen apparatuur.

---

## Context

**Waarom dit artikel:**

Onderdeel van het ATEX-content cluster. Pillar page (`/kennisbank/lekdetectie-in-atex-zones`) introduceert het Zone 1/2 onderscheid kort; dit artikel werkt het diep uit voor lezers die specifiek met die zonering moeten omgaan.

**Audience:** HSE-managers, plant-inspecteurs, KAM-coördinatoren in BRZO/Seveso-bedrijven, raffinaderijen, chemie, en de petrochemische industrie. Mensen die de zone-classificatie van hun installatie kennen en willen weten welke detectie-methodes daar mogen.

**Beoogde keyword-claim:**
- `atex zone 1 lekdetectie`
- `atex zone 2 lekdetectie`
- `lekdetectie zone 1`
- `lekdetectie zone 2`
- `welke apparatuur zone 1`

Geen sterke #1 in NL — Sorama staat op #4 voor `atex zone 1 lekdetectie`, ruimte voor #1.

---

## Scope

**In scope:**

- Nieuw bestand `src/app/(marketing)/kennisbank/lekdetectie-in-atex-zone-1-en-2/page.tsx`
- Volledige copy uitgewerkt in deze brief
- Article + BreadcrumbList JSON-LD
- Metadata
- Toevoegen aan `sitemap.ts` (slug: `lekdetectie-in-atex-zone-1-en-2`)
- Toevoegen aan `KennisbankFilter.tsx` onder categorie **"ATEX & Compliance"**
- Internal links naar pillar, atex-zones-uitgelegd, sectoren/petrochemie-chemie, contact

**Out of scope:**

- Stof-zones (20/21/22) — apart te overwegen, niet in dit artikel
- Praktische uitleg van Ex-i circuit-design (te technisch, niet de doelgroep)
- Vergelijking specifieke camera-modellen (geen merknamen)
- Diepe duik op compliance-rapportage (zit in atex-153-lekkage-inventarisatie artikel)

---

## SEO

**Title tag (max 60 tekens):**
`Lekdetectie in ATEX zone 1 en zone 2: wat mag waar? | GasProtex`

**Meta description (max 155 tekens):**
`Welke detectie-apparatuur is toegestaan in ATEX zone 1 versus zone 2? Categorieën Ex-i, Ex-d en Ex-n uitgelegd, met praktische gevolgen voor inspecties.`

**H1:**
`Lekdetectie in ATEX zone 1 en zone 2`

**Schema:** Article + BreadcrumbList

**Canonical:** `https://gasprotex.nl/kennisbank/lekdetectie-in-atex-zone-1-en-2` (geen trailing slash)

**Keywords (natuurlijk verwerken):**
- `atex zone 1 lekdetectie` — primair
- `atex zone 2 lekdetectie` — primair
- `ex-i ex-d ex-n verschil`
- `welke apparatuur zone 1`
- `non-invasieve inspectie zone 1`

---

## Pagina-structuur + volledige copy

### Eyebrow + H1 + meta

**Eyebrow (oranje):** `ATEX & Compliance`
**H1:** `Lekdetectie in ATEX zone 1 en zone 2`
**Datum + leestijd:** `19 mei 2026 · 5 min leestijd`

**Intro (cursief, max-width 720px):**

> Zone 1 en Zone 2 lijken op papier slechts één cijfer verschil. In praktijk bepalen ze welke camera je mag meebrengen, hoe dicht je op de installatie mag komen, en welke methodes überhaupt zijn toegestaan. Dit artikel zet de praktische gevolgen van zone-classificatie naast elkaar — geen norm-recitatie maar werkbare beslis-input voor je volgende inspectie.

### Sectie 1 — H2: "De korte versie"

> **Zone 1**: explosieve atmosfeer kan regelmatig aanwezig zijn bij normaal bedrijf — apparatuur moet ATEX-categorie 2G hebben (hoge bescherming), in praktijk Ex-i of Ex-d.
>
> **Zone 2**: explosieve atmosfeer is bij normaal bedrijf afwezig, kortstondig aanwezig bij fouttoestanden — apparatuur mag categorie 3G zijn (normale bescherming), in praktijk Ex-n of hoger.
>
> Een akoestische camera die voor Zone 2 is gecertificeerd, mag je dus **niet** in Zone 1 inzetten. Voor Zone 1 heb je een zwaarder gecertificeerd toestel nodig — of je werkt vanuit een aangrenzende veilige zone met een gewone camera die de Zone 1-installatie van buitenaf inspecteert.

### Sectie 2 — H2: "Zone 1 versus Zone 2: de definities"

> ATEX-zones worden geclassificeerd op basis van hoe vaak een explosieve atmosfeer aanwezig kan zijn. Het is een **kans-classificatie**, niet een gevarenklasse — de stof zelf is in beide zones even explosief, maar de frequentie waarmee een ontvlambare wolk kan ontstaan verschilt.
>
> - **Zone 1**: een explosieve atmosfeer kan af en toe aanwezig zijn bij normaal bedrijf. Richtlijn: tussen 10 en 1.000 uur per jaar. Typisch rond pompen, kleppen, flenzen, monsterpunten, vulpunten — plekken waar productieprocessen regelmatig kortstondig lekken of ontluchten.
> - **Zone 2**: een explosieve atmosfeer is onder normale omstandigheden niet aanwezig. Als ze ontstaat — door een storing of bij onderhoud — dan slechts kortstondig. Richtlijn: minder dan 10 uur per jaar. Typisch de bredere omgeving van procesinstallaties, de productiehal rondom de actieve installatie-zones.
>
> De classificatie is een verantwoordelijkheid van de werkgever (onder ATEX 153). Zonering wordt vastgelegd in het Explosieveiligheidsdocument (EVD) en moet onderbouwd zijn met een risico-analyse.

### Sectie 3 — H2: "Apparatuur-categorieën: 1G, 2G, 3G"

> Onder ATEX 114 (de productrichtlijn) moet elke apparatuur in een explosiegevaarlijke omgeving in een **categorie** vallen die past bij de zone waarin 'ie wordt ingezet:

**Tabel — ATEX categorieën en zones**

| Categorie | Zone (gas) | Beschermingsniveau | Toepassing |
|---|---|---|---|
| 1G | Zone 0 | Zeer hoge bescherming | Permanent risico — apparatuur veilig bij twee fouttoestanden |
| 2G | Zone 1 | Hoge bescherming | Regelmatig risico — apparatuur veilig bij één fouttoestand |
| 3G | Zone 2 | Normale bescherming | Zelden risico — apparatuur veilig bij normaal bedrijf |

> Hetzelfde geldt voor stof (categorieën 1D, 2D, 3D voor zones 20, 21, 22).
>
> Een 2G-camera mag in Zone 1 (en in Zone 2, want hoger gecertificeerd dan vereist). Een 3G-camera mag alleen in Zone 2 — als je hem in Zone 1 inzet, ben je in overtreding van je eigen ATEX 153-verplichting.

### Sectie 4 — H2: "Beschermings-types: Ex-i, Ex-d, Ex-n"

> Binnen elke categorie zijn er verschillende **beschermings-types** (gedefinieerd in de EN 60079-serie normen). De drie meest voorkomende:

> **Ex-i — Intrinsiek veilig** (EN 60079-11)
>
> Het apparaat is zo ontworpen dat de energie in het circuit fysiek te laag is om een explosie te veroorzaken — óók niet bij kortsluiting of breuk. De veiligheid zit in het elektrische ontwerp zelf, niet in de behuizing.
>
> **Voorkomt:** ontsteking door vonk of warmte.
> **Geschikt voor:** Zone 0, 1 en 2.

> **Ex-d — Drukvast omhulsel** (EN 60079-1)
>
> Het apparaat zit in een omhulsel dat een interne explosie kan bevatten zonder vlam of druk naar buiten te laten ontsnappen. Een soort "explosie-proof safe".
>
> **Voorkomt:** dat een eventuele explosie binnenin zich verspreidt.
> **Geschikt voor:** Zone 1 en 2.

> **Ex-n — Niet-vonkend** (EN 60079-15)
>
> Het apparaat is zo ontworpen dat het bij normaal bedrijf geen ontstekingsbron kan zijn — geen vonken, geen hete oppervlakken. Onder foutcondities geldt deze garantie niet, daarom is het type niet geschikt voor Zone 1.
>
> **Voorkomt:** ontsteking onder normaal bedrijf.
> **Geschikt voor:** Zone 2 (alleen).

> Een akoestische camera kan in al deze types worden uitgevoerd — afhankelijk van de leveranciers-keuze en certificering. Bij aanschaf of inhuur is dit het kritieke spec-punt: vraag altijd om de ATEX-markering en bijbehorende certificaten. Een markering ziet eruit als bijvoorbeeld `II 2G Ex db IIC T4 Gb`. Dit is geen optioneel sticker — zonder geldig certificaat mag het apparaat niet de zone in.

### Sectie 5 — H2: "Welke methodes mogen in welke zone?"

> Dezelfde detectie-methode kan in Zone 1 of Zone 2 worden ingezet — afhankelijk van de gecertificeerde uitvoering. Een overzicht van wat in praktijk het meest voorkomt:

**Tabel — methode × zone**

| Methode | Zone 2 | Zone 1 | Zone 0 |
|---|---|---|---|
| Vaste/stationaire gasdetectie (vast gemonteerd) | ✅ | ✅ (mits gecertificeerd) | ✅ (mits gecertificeerd) |
| Snuffeldetectie (handheld) | ✅ | ✅ (mits gecertificeerd handheld) | ❌ (operator-aanwezigheid niet veilig) |
| Tracer gas inspectie | ✅ | ✅ | ❌ (productiestop vereist sowieso) |
| Akoestische camera (ultrasoon) | ✅ | ⚠️ (alleen met zwaardere certificering) | ❌ (geen toegang voor inspectie) |
| Akoestische camera vanuit aangrenzende veilige zone | ✅ (van buitenaf) | ✅ (van buitenaf) | ✅ (van buitenaf) |

> Een belangrijke nuance: een akoestische camera werkt op afstand. Voor Zone 1- of Zone 0-installaties is het vaak praktischer om vanuit de aangrenzende **veilige zone** (geen ATEX-classificatie) de installatie te inspecteren met een gewone, niet-ATEX-gecertificeerde camera. Zolang het apparaat zelf niet de risicozone betreedt, gelden geen ATEX-eisen aan het apparaat — wel aan de operator-procedure en aan eventuele kabels.

### Sectie 6 — H2: "Praktijkvoorbeeld: een chemische installatie met beide zones"

> Een typische chemische plant heeft minstens drie zone-niveaus naast elkaar:
>
> - **Zone 0**: binnenkant van reactor-vaten en opslagtanks
> - **Zone 1**: directe omgeving van flenzen, kleppen, pompen, monsterpunten
> - **Zone 2**: bredere installatie-omgeving, de buitenrand van de plant
>
> Voor zo'n locatie verloopt een akoestische inspectie als volgt:
>
> 1. **Vanuit de buitenrand (Zone 2 of vrij)** scannen we de hele installatie. Met een niet-ATEX-gecertificeerde camera kunnen we 80-90% van de lekken al van afstand lokaliseren — perslucht-, gas- en stoom-lekken zijn op tientallen meters afstand hoorbaar.
> 2. **Voor de installatiedelen in Zone 1** brengen we onze ATEX-gecertificeerde partner-camera mee. Onze inspecteur betreedt Zone 1 alleen na werkvergunning en met aangepaste PBM.
> 3. **Zone 0 (binnenkant tanks)** scannen we niet tijdens bedrijf. Dat gebeurt bij periodiek onderhoud met aparte protocollen, of via vaste sensoren die zijn vooraf gemonteerd.
>
> Wat je krijgt: één rapport met locatie en intensiteit per lek, gegroepeerd per zone, met aanduiding van urgentie. Bruikbaar voor zowel directe reparatie-acties als compliance-rapportage onder ATEX 153.

### Sectie 7 — H2: "Wat doet GasProtex in Zone 1 en Zone 2?"

> Onze standaard-inspectie is **ATEX-gecertificeerd voor Zone 2 (gas) en Zone 22 (stof)**. Voor de grote meerderheid van industriële inspecties is dat voldoende — de installatie wordt vanuit Zone 2 of vrij gebied geïnspecteerd op afstand.
>
> Voor **Zone 1**-inspecties werken we met een gespecialiseerd partner-team dat over de zwaardere certificering beschikt. Dat regelen we voor je: één aanvraag, één rapport, één aanspreekpunt. Je hoeft niet zelf bij twee partijen aan te kloppen.
>
> Wat we niet doen: Zone 0 betreden tijdens bedrijf. Voor inspecties in tanks of reactorvaten verwijzen we je door naar gespecialiseerde onderhoudspartijen die periodiek werk verrichten.
>
> [→ Plan een inspectie voor jouw installatie](/contact)

### Sectie 8 — H2: "Wat als ik niet zeker weet welke zone ik heb?"

> De zone-classificatie hoort vastgelegd te zijn in het Explosieveiligheidsdocument (EVD) van je werkgever. Als die niet bestaat, of niet up-to-date is, ben je in overtreding van ATEX 153 — en dat is een directe ingang voor de Arbeidsinspectie.
>
> Wij komen niet de zone-classificatie voor je maken — dat is een specialistisch werk dat door ATEX-adviesbureaus wordt gedaan en bij ons buiten scope valt. Maar als je twijfelt over je huidige classificatie en wil weten of een inspectie zinvol is, kunnen we tijdens een Quickscan een **eerste indicatie** geven van waar je risicogebieden liggen. Voor de formele zone-classificatie verwijzen we je door naar een ATEX-adviseur.
>
> Lees ook: [ATEX 153 lekkage-inventarisatie](/kennisbank/atex-153-lekkage-inventarisatie) voor de bredere compliance-context.

### Footer-tekst (cursief, kleur `#6B8FA6`, max-width 720px)

Standaard GasProtex-signoff — hergebruik uit `wat-kost-een-persluchtlek/page.tsx`.

### CTA-blok (navy `#0A2238`, padding 48px)

**Kop:** `Inspectie nodig in Zone 1 of Zone 2?`
**Sub:** `Plan een vrijblijvend kennismakingsgesprek of een Quickscan ter plaatse.`
**Oranje knop:** `Plan een kennismakingsgesprek` → Microsoft Bookings URL (uit `Navbar.tsx`)
**Witte link:** `Bekijk onze diensten →` → `/diensten`

### Gerelateerde artikelen (grid van 2)

- Kaart 1: `/kennisbank/lekdetectie-in-atex-zones` — "Lekdetectie in ATEX-zones (pillar)"
- Kaart 2: `/kennisbank/atex-zones-uitgelegd` — "ATEX-zones uitgelegd: zone 0, 1 en 2"

---

## Internal-link plaatsing (intern)

| Doel | Sectie | Status |
|---|---|---|
| `/kennisbank/lekdetectie-in-atex-zones` (pillar) | Gerelateerde artikelen | ⏳ wordt deze week gepubliceerd |
| `/kennisbank/atex-zones-uitgelegd` | Sectie 2 (impliciet via "veroorzaakt door"), gerelateerde artikelen | ✅ bestaat |
| `/kennisbank/atex-153-lekkage-inventarisatie` | Sectie 8 | ⏳ komt deze week |
| `/sectoren/petrochemie-chemie` | Sectie 6 (impliciet, kan toegevoegd) | ✅ bestaat |
| `/contact` | Sectie 7 + CTA-blok | ✅ bestaat |
| `/diensten` | CTA-blok witte link | ✅ bestaat |

---

## Acceptatiecriteria

- [ ] Nieuw bestand `src/app/(marketing)/kennisbank/lekdetectie-in-atex-zone-1-en-2/page.tsx` bestaat met de volledige copy
- [ ] **Geen specifieke leveranciers- of merknamen** (grep-check: `grep -ic "distran\|crysound\|sorama\|fluke\|teledyne\|flir\|ue systems" page.tsx` = 0)
- [ ] Article + BreadcrumbList JSON-LD aanwezig
- [ ] Metadata, canonical, OG, Twitter velden gevuld
- [ ] `src/app/sitemap.ts` bevat slug `lekdetectie-in-atex-zone-1-en-2`
- [ ] `src/components/marketing/KennisbankFilter.tsx` toont het artikel onder **"ATEX & Compliance"**
- [ ] Tabel "ATEX categorieën" en "methode × zone" renderen correct op 320px mobiel
- [ ] `npm run build` slaagt
- [ ] `npm run lint` clean
- [ ] Commit-bericht: bv. `feat(kennisbank): cluster-artikel ATEX zone 1 en 2`

---

## Open vragen voor Claude Code

- **De link naar pillar page** (`/kennisbank/lekdetectie-in-atex-zones`) bestaat nog niet als deze brief wordt gebouwd vóór de pillar. Geen voorlopige redirect of placeholder — laat 'm 404 geven tot de pillar live is. Brief eerder deze week dekt dat ook expliciet.
- **De link naar atex-153 lekkage-inventarisatie** geeft ook nog 404 — zelfde principe.
- **Tabel categorieën zone 0/1/2:** dit overlapt deels met de tabel in `atex-zones-uitgelegd`. Bewust — dat artikel is foundational ("wat zijn zones"), dit artikel is praktisch ("welke apparatuur mag waar"). Geen duplicate content omdat de invalshoek anders is.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router)
- Styling: Tailwind 4 + bestaande kennisbank-conventies
- JSON-LD via `JsonLd`-component en `getBreadcrumbSchema` helper
- Geen nieuwe dependencies

---

## Out of scope

- Stof-zones (20, 21, 22) — verdienen eigen artikel als er volume voor is
- Specifieke ATEX-markeringen lezen ("II 2G Ex db IIC T4 Gb" decoderen) — kan later in een eigen artikel
- Internationale equivalenten (NEC-classes in VS) — niet relevant voor NL-markt
- Engelse vertaling

---

## Hand-off naar Claude Code

```
Lees docs/briefs/2026-05-19-cluster-lekdetectie-in-atex-zone-1-en-2.md en
implementeer het artikel direct. Verifieer met de acceptatiecriteria
voor je de wijziging commit. De 2 internal links naar nog-te-bouwen
artikelen mogen 404 geven — niet aanpassen.
```
