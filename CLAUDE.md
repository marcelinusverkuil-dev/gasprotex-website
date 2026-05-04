@design.md

# GasProtex Website — Projectspecifiek

## Stack
- Next.js (App Router) — `src/app/(marketing)/` bevat alle publieke pagina's
- Tailwind CSS v4
- TypeScript
- Supabase — auth & database (portaal)
- Resend — transactionele e-mails
- Stripe — abonnementen/billing

## Structuur
```
src/
  app/
    page.tsx                ← homepage / (staat op app-rootniveau, NIET in (marketing))
    (marketing)/            ← alle publieke pagina's
      layout.tsx            (Navbar + Footer wrapper)
      diensten/
        page.tsx
        lekdetectie-abonnement/page.tsx
      sectoren/
        page.tsx            ← overzicht
        chemie/page.tsx
        food/page.tsx
        energie/page.tsx
        industrie/page.tsx
        petrochemie-chemie/page.tsx
        voedingsmiddelensector/page.tsx
      bereken-uw-besparing/
        page.tsx
        perslucht/ stikstof/ waterstof/ co2/
      bereken-uw-verlies/
        page.tsx
        perslucht/ stikstof/ waterstof/ co2/
      lekkosten-calculator/page.tsx
      kennisbank/
        page.tsx
        atex-zones-uitgelegd/page.tsx
      over-ons/page.tsx
      contact/page.tsx
      cases/page.tsx        ← in progress
      privacy/page.tsx
    (portaal)/              ← beveiligd klantportaal (in progress)
      portaal/
        dashboard/ inspecties/ lekken/ documenten/ abonnement/
    auth/                   ← login/registratie (in progress)
    scan/                   ← QR-code /scan/[assetId]
  components/
    marketing/              ← Navbar, Footer, HeroSection, SectorPage, etc.
    ui/                     ← shadcn-ui componenten
  lib/
    supabase/               ← client.ts, server.ts
    sectoren-data.ts        ← statische data voor sectorpagina's
  types/index.ts
  actions/sendContact.ts    ← server action contactformulier
  middleware.ts             ← beschermt /portaal/*

public/
  images/
    gasprotex-logo.png
    gasprotex_logo_transparent.svg
    GasProtex logo oranje.png
    hero-bg.jpg             ← homepage hero background
    hero-bg V1.avif
    sectoren/
      chemie.jpg
      energie.avif
      food.jpg
      industrie.jpg
  hero-image.jpg
  hero-image-v2.jpg
```

## Afbeeldingen toevoegen
Nieuwe afbeeldingen horen in `public/images/` (of een logische submap). Verwijzen in code via `/images/bestandsnaam.jpg`.

## Paginastatus
| Route | Status |
|---|---|
| `/` | ✅ klaar |
| `/diensten` | ✅ klaar |
| `/diensten/lekdetectie-abonnement` | ✅ klaar |
| `/sectoren` | ✅ klaar |
| `/sectoren/[chemie\|food\|energie\|industrie]` | ✅ klaar |
| `/bereken-uw-besparing` | ✅ klaar |
| `/bereken-uw-verlies` | ✅ klaar |
| `/lekkosten-calculator` | ✅ klaar |
| `/kennisbank` | ✅ klaar |
| `/over-ons` | ✅ klaar |
| `/contact` | ✅ klaar |
| `/cases` | 🚧 in progress |
| `/privacy` | ✅ klaar |
| `/portaal/*` | 🚧 in progress |
| `/auth/*` | 🚧 in progress |

## Secties per pagina

### `/` — Homepage
Opgebouwd uit losse componenten in `src/components/marketing/`:
1. **HeroSection** — grote hoofdtitel + achtergrondafbeelding (`hero-bg.jpg`)
2. **DienstenSection** — "Wat doen wij?" — twee kaarten: Perslucht (`perslucht-lekkages.jpg`) + Gaslekdetectie (`gaslekdetectie.jpg`)
3. **WaaromSection** — "Apparatuur kopen of dienst inkopen?" — voordelen op donkerblauwe achtergrond
4. **CalculatorSection** — "Bereken wat je verliest" — invoer compressorvermogen → geschat verlies
5. **HoeWerkenWeSection** — "Begin met een Quickscan" — 3 stappen (Quickscan → Audit → Abonnement)
6. **ContactCTASection** — "Weten waar je lekken zitten?" — CTA Quickscan

### `/diensten`
1. Hero + breadcrumb — titel, twee actieknoppen (Quickscan + gesprek)
2. Twee servicekaarten — Perslucht + Gevaarlijke gassen (ATEX), met afbeeldingen
3. "Wat krijg je?" — drie kaarten: Rapport, Klantportaal, Herstelplan
4. FAQ — 7 vragen over ultrasoon detectie, duur, kosten, ATEX
5. CTA banner — Quickscan aanvragen

### `/diensten/lekdetectie-abonnement`
1. Hero + breadcrumb — "Begin met een Quickscan. Daarna beslis je zelf."
2. Drie stappen — Quickscan (1 dagdeel), Audit (1-3 dagen), Abonnement (jaarlijks)
3. FAQ — 5 vragen over contracten, scanfrequentie, gegevenseigendom
4. CTA banner — Quickscan aanvragen

### `/sectoren` — Overzicht
Sectorkaarten verwijzen naar subsectoren.

### `/sectoren/chemie` · `/sectoren/food` · `/sectoren/energie` · `/sectoren/industrie`
Gebruiken `SectorPage`-template component met data uit `lib/sectoren-data.ts`.
Afbeeldingen: `public/images/sectoren/chemie.jpg`, `food.jpg`, `energie.avif`, `industrie.jpg`

### `/sectoren/voedingsmiddelensector`
1. Hero + breadcrumb — afbeelding: `sectoren/voedingsmiddelensector.jpg`
2. "Welke lekken vinden we?" — 4 gassoorten: Perslucht, CO₂, NH₃, N₂
3. "Wat we tegenkomen in de praktijk" — 3 cases (Friesland, Brabant, Gelderland)
4. CTA banner — Calculator + Kennismakingsgesprek

### `/sectoren/petrochemie-chemie`
1. Hero + breadcrumb — afbeelding: `sectoren/petrochemie-chemie.jpg`
2. ATEX + Gassen — twee kolommen: ATEX zone 1 uitleg + gassoorten
3. Compliance ondersteuning — BRZO, F-gassen, ISO 11011, ESG
4. CTA banner — Kennismakingsgesprek

### `/over-ons`
1. Hero + breadcrumb — lege afbeeldingsruimte (nog geen foto)
2. "Wie en Waarom" — twee kolommen: Marcelinus Verkuil + achtergrond Hitma / marktanalyse
3. Certificeringen + Werkwijze — ATEX, VCA-vol, Crysound + werkgebied/portaal/samenwerking
4. CTA banner — Kennismakingsgesprek

### `/contact`
1. Hero + contactinfo + `ContactForm` — Bookings-link, telefoon, e-mail, formulier
2. CTA banner — link naar perslucht calculator

### `/kennisbank`
1. Hero + `KennisbankFilter` — artikelen filteren
2. CTA banner — Kennismakingsgesprek

### `/kennisbank/atex-zones-uitgelegd`
Kennisbankartikel over ATEX-zones.

### `/bereken-uw-besparing` · `/bereken-uw-verlies`
1. Hero
2. Vier gassoort-kaarten — Perslucht, Stikstof, Waterstof, CO₂
3. Disclaimer banner

### `/bereken-uw-besparing/perslucht` (en andere gassoorten)
1. Hero + breadcrumb
2. Calculator invoer — 6 velden (debiet, druk, bedrijfsuren, tarief, vermogen, aantal lekken)
3. Resultaten — kosten, energieverbruik, CO₂, auto-equivalent
4. Quickscan CTA
5. Rekenmethode uitleg

### `/cases` — in progress
1. Hero
2. Drie placeholder-cases (sector, titel, resultaten, conclusie)
3. CTA banner

### `/lekkosten-calculator`
Redirect naar `/bereken-uw-verlies/perslucht`.

---

## Ontwerpregels
Zie `design.md` voor het volledige design system. Geen hardcoded hex in className — gebruik CSS-variabelen of Tailwind-tokens. Geen eyebrow-labels boven H1 paginakoppen.
