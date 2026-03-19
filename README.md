# GasProtex — Akoestische Gaslekdetectie

B2B marketing website + klantportaal voor GasProtex, gebouwd met Next.js 16, Supabase en Tailwind CSS.

---

## Tech Stack

| Laag | Technologie |
|------|-------------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Auth & Database | Supabase (PostgreSQL + RLS) |
| Fonts | Barlow + Barlow Condensed (Google Fonts) |
| Email | Resend (transactioneel) |
| Billing | Stripe (abonnementen) |
| Deployment | Vercel |

---

## Projectstructuur

```
src/
├── app/
│   ├── (marketing)/          # Publieke marketingpagina's
│   │   ├── layout.tsx        # Gedeelde Navbar + Footer
│   │   ├── diensten/         # /diensten
│   │   ├── sectoren/         # /sectoren + /sectoren/[chemie|food|energie|industrie]
│   │   ├── over-ons/         # /over-ons
│   │   ├── contact/          # /contact
│   │   └── cases/            # /cases (nog te bouwen)
│   ├── (portaal)/            # Beschermd klantportaal (vereist login)
│   │   └── portaal/
│   │       ├── dashboard/
│   │       ├── inspecties/
│   │       ├── lekken/
│   │       ├── documenten/
│   │       └── abonnement/
│   ├── auth/                 # Login / registratie
│   ├── scan/                 # QR-code landingspagina's (/scan/[assetId])
│   ├── globals.css           # Design tokens, animaties, brand-kleuren
│   └── layout.tsx            # Root layout (fonts, metadata)
├── components/
│   ├── marketing/            # Homepage en pagina-secties
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TickerStrip.tsx
│   │   ├── DienstenSection.tsx
│   │   ├── WaaromSection.tsx
│   │   ├── SectorenSection.tsx
│   │   ├── ContactCTASection.tsx
│   │   ├── Footer.tsx
│   │   └── SectorPage.tsx    # Herbruikbare sector-detailpagina template
│   └── ui/
│       └── GasProtexLogo.tsx # Logo component (light/dark variant)
├── lib/
│   ├── supabase/
│   │   ├── client.ts         # Browser Supabase client
│   │   └── server.ts         # Server Supabase client (SSR)
│   └── sectoren-data.ts      # Statische data voor alle 4 sectoren
├── types/
│   └── index.ts              # Centrale TypeScript types
└── middleware.ts             # Auth middleware — beschermt /portaal/*
```

---

## Lokaal opstarten

### 1. Vereisten

- Node.js 18+
- npm

### 2. Repository clonen

```bash
git clone https://github.com/marcelinusverkuil-dev/gasprotex-website.git
cd gasprotex-website
npm install
```

### 3. Environment variabelen instellen

Kopieer het voorbeeld-bestand en vul de waarden in:

```bash
cp .env.example .env.local
```

Open `.env.local` en vul in:

```env
# Supabase — verplicht voor auth en database
NEXT_PUBLIC_SUPABASE_URL=https://jouw-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=jouw-anon-key

# Stripe — voor abonnementsbeheer (optioneel voor alleen marketing)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Resend — voor contactformulier e-mails (optioneel voor alleen marketing)
RESEND_API_KEY=re_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> De marketing-pagina's werken zonder Supabase of Stripe. Alleen `/portaal` en het contactformulier vereisen een werkende configuratie.

### 4. Development server starten

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in uw browser.

---

## Brand & Design

### Kleuren

| Token | Hex | Gebruik |
|-------|-----|---------|
| `steel` | `#0F2D4B` | Primaire achtergrond, koppen |
| `orange` | `#D97737` | Accent, CTA-knoppen, highlights |
| `brand-blue` | `#1E87B4` | Links, secundaire accenten |
| `fog` | `#7AADCC` | Subtekst op donkere achtergrond |
| `mist` | `#C2DCE8` | Body tekst op donkere achtergrond |

### Typografie

- **Display / headings**: Barlow Condensed (font-black, uppercase)
- **Body**: Barlow (font-light / font-normal)

### Design conventies

- Knoppen gebruiken `clip-btn` klasse (parallelogram clip-path)
- Secties wisselen: donker (`#0F2D4B`) → wit → lichtgrijs (`#F4F7FA`) → donker
- Hover states: `hover:border-[#D97737]` + `hover:-translate-y-1`

---

## Scripts

```bash
npm run dev        # Development server (Turbopack)
npm run build      # Productie build
npm run start      # Productie server
npm run lint       # ESLint
```

---

## Pagina-overzicht

| Route | Status | Beschrijving |
|-------|--------|--------------|
| `/` | ✅ Klaar | Homepage met alle secties |
| `/diensten` | ✅ Klaar | 3 diensten met prijzen en details |
| `/sectoren` | ✅ Klaar | Overzicht 4 sectoren |
| `/sectoren/chemie` | ✅ Klaar | Petrochemie & Chemie detail |
| `/sectoren/food` | ✅ Klaar | Food & Beverage detail |
| `/sectoren/energie` | ✅ Klaar | Energie & Utilities detail |
| `/sectoren/industrie` | ✅ Klaar | Algemene Industrie detail |
| `/over-ons` | ✅ Klaar | Over GasProtex |
| `/contact` | ✅ Klaar | Contactformulier |
| `/cases` | 🚧 In progress | Klantcases |
| `/portaal/dashboard` | 🚧 In progress | Klantportaal (auth vereist) |
| `/portaal/inspecties` | 🚧 In progress | Inspectieoverzicht |
| `/portaal/lekken` | 🚧 In progress | Lekkenbeheer |
| `/portaal/documenten` | 🚧 In progress | Rapportages & PDF's |
| `/portaal/abonnement` | 🚧 In progress | Abonnementsbeheer |
| `/auth/login` | 🚧 In progress | Inlogpagina |
| `/scan/[assetId]` | 🚧 In progress | QR-code landing |

---

## Bijdragen

1. Maak een nieuwe branch aan: `git checkout -b feature/naam-van-feature`
2. Commit uw wijzigingen met [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` nieuwe functionaliteit
   - `fix:` bugfix
   - `style:` visuele aanpassingen
   - `refactor:` code-herstructurering
3. Push en open een Pull Request naar `main`

---

## Contact & Eigenaar

**GasProtex** — [gasprotex.nl](https://gasprotex.nl)
Projecteigenaar: Marcelinus Verkuil
