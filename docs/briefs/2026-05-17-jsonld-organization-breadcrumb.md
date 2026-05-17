# Build-brief — JsonLd-component + Organization + BreadcrumbList schema

**URL of locatie:** site-breed (alle marketing-pagina's)
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

GasProtex herkenbaar maken als entiteit voor AI-zoeksystemen (ChatGPT, Perplexity, Google AI Mode, Gemini) door een herbruikbaar JsonLd-component en gestructureerde Organization- en BreadcrumbList-schema's op alle marketing-pagina's, zodat we de eerste stap zetten naar AEO-vindbaarheid.

---

## Context

**Probleem (gemeten 2026-05-17):** In een baseline AEO-test scoorde GasProtex 1 op 8 — alleen ChatGPT noemde GasProtex bij de breedste leveranciersvraag, en dan vaag ("actief in gasveiligheid"). Google AI Mode en Claude.ai noemen GasProtex helemaal niet als leverancier van akoestische gaslekdetectie in Nederland, ook niet bij directe vragen daarover. Concurrenten als Hitma Gasdetectie, Sorama, UE Systems en BaSystemen worden in elke engine bij elke query consequent genoemd.

**Diagnose:** AI-systemen kunnen GasProtex niet als entiteit herkennen, omdat:
1. De Organization-schema is inline in `src/app/layout.tsx` en mist sameAs-links (LinkedIn, KvK), `foundingDate`, `numberOfEmployees`, en `slogan`/`legalName`.
2. Er staat geen BreadcrumbList op subpagina's — AI-systemen gebruiken breadcrumbs om sitestructuur te begrijpen.
3. Er is geen `@id`-graph waarin Service/Article-schema's later op Organization kunnen verwijzen.

Deze brief lost punt 1-3 op. Service/FAQPage/Article-schema's volgen in vervolgbriefs.

---

## Scope van deze brief

**In scope:**
- Centraal bestand `src/lib/schema.ts` met getter-functies per schema-type
- Herbruikbaar React Server Component `src/components/marketing/JsonLd.tsx`
- Refactor van de inline Organization-schema in `src/app/layout.tsx`
- Uitbreiding Organization met ontbrekende velden (zie hieronder)
- BreadcrumbList op alle marketing-pagina's onder `src/app/(marketing)/`
- Validatie via Google's Rich Results Test (handmatig na build)

**Out of scope (volgt in latere briefs):**
- Service-schema op dienstpagina's
- FAQPage-schema (eerst FAQ-content schrijven)
- Article-schema op kennisbank-artikelen
- Person-schema voor Marcelinus als oprichter
- Wikidata-entry voor GasProtex

---

## Implementatiedetails

### 1. `src/lib/schema.ts` — centrale schema-bouwer

Een bestand met getter-functies die JSON-LD objecten teruggeven. Per schema één functie. Alle schemas linken via `@id` naar de centrale Organization.

**Constanten bovenaan:**

```ts
export const ORG_ID = 'https://gasprotex.nl/#organization'
export const SITE_URL = 'https://gasprotex.nl'
```

**Functies:**

```ts
getOrganizationSchema()         // de bestaande inline schema, uitgebreid
getBreadcrumbSchema(items)      // items = [{ name, url }]
```

**Uitbreiding Organization-schema (toevoegen aan bestaande velden):**

- `legalName: 'GasProtex'`  (statutaire naam gelijk aan handelsnaam — bevestigd door Marcelinus)
- `slogan: 'Gaslekken gevonden. Risico\'s gereduceerd. 10x sneller dan traditioneel.'`
- `foundingDate: '2026'`  (oprichtingsjaar — bevestigd door Marcelinus)
- `sameAs: []`  bewust leeg — LinkedIn-bedrijfspagina bestaat nog niet. Zodra die live is, voegt Marcelinus die toe in een vervolgupdate.
- `contactPoint: { '@type': 'ContactPoint', telephone: '+31613055282', email: 'info@gasprotex.nl', contactType: 'customer service', availableLanguage: ['nl', 'en'] }`
- `keywords: 'akoestische gaslekdetectie, persluchtlekdetectie, ultrasoon gasdetectie, gaslekinspectie, ATEX, LDAR, methaandetectie, waterstoflekdetectie, Nederland'`

### 2. `src/components/marketing/JsonLd.tsx` — render-component

Server component, geen `'use client'`. Accepteert één of meerdere schema-objecten en rendert die als `<script type="application/ld+json">`.

```tsx
type Props = { data: object | object[] }

export default function JsonLd({ data }: Props) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <>
      {payload.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
```

### 3. Refactor `src/app/layout.tsx`

- De huidige inline `<script type="application/ld+json">` (regel 31-66) verwijderen.
- Vervangen door `<JsonLd data={getOrganizationSchema()} />` in de `<body>`.
- Import bovenaan: `import JsonLd from '@/components/marketing/JsonLd'` en `import { getOrganizationSchema } from '@/lib/schema'`.

### 4. BreadcrumbList per marketing-pagina

Op elke pagina onder `src/app/(marketing)/` (behalve de homepage):

```tsx
import JsonLd from '@/components/marketing/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

const breadcrumbs = getBreadcrumbSchema([
  { name: 'Home', url: 'https://gasprotex.nl' },
  { name: 'Diensten', url: 'https://gasprotex.nl/diensten' },
])
```

En dan binnen de `return` van de page-component: `<JsonLd data={breadcrumbs} />`.

**Pagina's die breadcrumbs krijgen (zelf bepalen op basis van URL-structuur):**
- `/diensten`, `/diensten/lekdetectie-abonnement`
- `/sectoren`, `/sectoren/chemie`, `/sectoren/petrochemie-chemie`, `/sectoren/energie`, `/sectoren/food`, `/sectoren/voedingsmiddelensector`, `/sectoren/industrie`
- `/over-ons`, `/cases`, `/contact`, `/privacy`
- `/kennisbank` + alle subpagina's
- `/bereken-uw-verlies` + subpagina's (perslucht/co2/stikstof/waterstof)
- `/bereken-uw-besparing` + subpagina's
- `/lekkosten-calculator`

**Niet:** de root layout (zit Organization), de homepage zelf (`/`).

---

## Acceptatiecriteria

- [ ] `src/lib/schema.ts` bestaat met de twee genoemde functies en de uitgebreide Organization
- [ ] `src/components/marketing/JsonLd.tsx` is een server component, rendert correct `application/ld+json`
- [ ] `src/app/layout.tsx` heeft geen inline JSON-LD meer — gebruikt `JsonLd` + `getOrganizationSchema`
- [ ] Elke marketing-subpagina rendert een geldige BreadcrumbList
- [ ] Geen TypeScript-errors, geen ESLint-fouten
- [ ] Lokaal getest met Google's Rich Results Test op minimaal homepage + één subpagina + één kennisbankartikel (handmatig door Marcelinus, niet door Claude Code)
- [ ] Lighthouse Performance niet gezakt door deze wijziging (geen extra netwerk-calls)

---

## Open vragen voor Claude Code

Vragen die je tijdens implementatie kunt parkeren in plaats van zelf besluiten:

- **Breadcrumb-naamgeving** — Bij subpagina's: gebruik de zichtbare paginanaam (H1) of een korte URL-slug-vertaling? Voorkeur: zichtbare naam.
- **BreadcrumbList centraal of per pagina?** — Niet alle pagina's onder `(marketing)` zitten in dezelfde layout. Check of er een logische plek is om de BreadcrumbList centraal toe te voegen via een gedeelde wrapper, of moet het per pagina? Voorkeur: per pagina, expliciet — anders worden breadcrumb-items hardcoded en mis je context.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router) — let op: deze versie wijkt af, raadpleeg `node_modules/next/dist/docs/` indien nodig
- Styling: nvt (JSON-LD is onzichtbaar)
- Formulieren: nvt
- E-mail: nvt
- Database/auth: nvt

Extra eisen:
- Server components only — geen `'use client'` op JsonLd of schema.ts
- `JSON.stringify` gebruiken zonder pretty-print (productie-output zo klein mogelijk)
- Bestaande Tawk.to- en Clarity-scripts in `layout.tsx` ongemoeid laten

---

## Out of scope

- Service-schema op `/diensten` en `/diensten/lekdetectie-abonnement` — komt in vervolgbrief
- FAQPage-schema — komt zodra FAQ-content op pagina's staat
- Article-schema op kennisbank — komt in vervolgbrief samen met `author` en `datePublished`
- Person-schema voor Marcelinus als oprichter
- Sitemap.xml-updates (al aanwezig)
- robots.txt-aanpassingen voor AI-crawlers (apart te beslissen)

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
Lees docs/briefs/2026-05-17-jsonld-organization-breadcrumb.md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
