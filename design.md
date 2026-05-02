# GasProtex — Design System

## Merkgevoel
Industrieel, betrouwbaar, technisch. Donker staal, oranje accenten, scherpe typografie. Het voelt als een bedrijf dat écht op industriële locaties werkt.

**Sfeer-referenties:**
- **I-care (icareweb.com)**: rust, witruimte, professionele kaartstructuur voor diensten — geen drukke animaties die afleiden van de boodschap
- **Sensorfact (sensorfact.nl)**: overzichtelijk, modulair, helder — wit als primaire contentachtergrond, focus op leesbaarheid

De balans: donkere hero + nav (GasProtex-identiteit) + lichte content-secties met rust en structuur (I-care/Sensorfact-sfeer).

---

## Kleurenpalet

### Primair (donker — voor achtergronden)
| Token / hex       | Waarde    | Gebruik                                      |
|-------------------|-----------|----------------------------------------------|
| `#0A2238`         | —         | Donkere sectie-achtergrond, navbar, gradient  |
| `--blue` / `#1E87B4` | CSS-var | Accentkleur, highlights, links op gradient   |

> `--navy` in globals.css is `#1E4A75` en wordt gebruikt als `--text-dark`. Voor donkere achtergronden gebruik altijd hardcoded `#0A2238`.

### Accent (oranje — voor CTA's en energie)
| Token          | Hex       | Gebruik                              |
|----------------|-----------|--------------------------------------|
| `--orange`     | `#F07830` | Primaire CTA-kleur, actieve states   |
| `#FF8A40`      | —         | Hover state van orange (geen token)  |
| `#F5A555`      | —         | Subtiel warm accent (incidenteel)    |

### Licht (voor tekst en lichte secties)
| Token            | Hex       | Gebruik                              |
|------------------|-----------|--------------------------------------|
| `--fog`          | `#7AADCC` | Body-tekst op donker, iconen         |
| `#C2DCE8`        | —         | Nav-links, subtiele tekst op donker (geen token) |
| `--off-white`    | `#F0F6FA` | Koppen op donkere secties            |
| `#ffffff`        | —         | Tekst op oranje knoppen              |
| `--surface`      | `#F4F7FA` | Achtergrond lichte secties           |
| `#0A2238`        | —         | Koppen op lichte secties             |
| `#3D5A6E`        | —         | Body-tekst op lichte secties         |
| `#6B8FA6`        | —         | Subkoppen / labels op lichte secties |

### Beschikbare Tailwind-tokens (via `@theme inline` in globals.css)
`text-navy`, `bg-navy`, `text-blue`, `bg-blue`, `text-orange`, `bg-orange`, `text-fog`, `bg-fog`, `text-off-white`, `bg-surface`

Ontbrekende tokens (gebruik hardcoded hex): `#FF8A40`, `#C2DCE8`, `#0A2238`, `#3D5A6E`, `#6B8FA6`.

---

## Typografie

### Lettertypes
- **Display / koppen**: `font-display` → Aptos (Bold/SemiBold)
- **Body**: `font-body` → Aptos (Regular/Medium)

### Stijlregels
- Sectionlabels: `text-xs tracking-widest uppercase text-orange font-medium` — **alleen binnen secties**, nooit als eyebrow boven een pagina-H1
- H1 (paginakop): `font-bold text-[#0A2238]`, `fontSize: clamp(32px, 4vw, 52px)`, `lineHeight: 1.2`, `letterSpacing: -0.02em` — **geen eyebrow/label erboven**
- H2: `font-bold`, `fontSize: clamp(26px, 3vw, 38px)` of `text-4xl`
- Body: `text-fog` op donker, `text-[#3D5A6E]` op licht, `text-lg leading-relaxed`

---

## Knoppen

### Primaire CTA (oranje) — lichte achtergrond
```tsx
<a
  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md"
  style={{ padding: '14px 32px' }}
>
  Label
</a>
```
> Geen `clip-btn` op lichte achtergronden. Referentie: homepage "Vraag een demo aan".

### Primaire CTA (oranje) — donkere achtergrond
Zelfde stijl. `clip-btn` optioneel voor industrieel karakter.

### Secundaire (outline) — lichte achtergrond
```tsx
<a
  className="inline-flex items-center justify-center border border-[#0A2238]/25 text-[#0A2238] hover:border-[#0A2238]/50 text-sm font-semibold rounded-md transition-colors"
  style={{ padding: '14px 32px' }}
>
  Label
</a>
```

### Secundaire (outline) — donkere achtergrond
```tsx
<button className="border border-fog/30 text-[#C2DCE8] hover:border-fog/60 hover:text-white text-sm font-medium rounded-md px-8 py-3 transition-colors">
  Label
</button>
```

### Industriële hoekige knopvorm (optioneel)
- `.clip-btn`: `polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)`
- `.clip-btn-sm`: kleinere versie (6px offset)
- Gebruik alleen op donkere secties of als bewuste stijlkeuze

---

## Secties & Layout

### Container
Gebruik altijd de `.container-main` CSS klasse (gedefinieerd in `globals.css`):
```tsx
<div className="container-main">
  {/* content */}
</div>
```
- Max breedte: `1440px`, gecentreerd via `margin: auto`
- Padding: `var(--container-pad)` = `clamp(24px, 5vw, 80px)` — schaalt mee met schermbreedte
- Gebruik **nooit** `max-w-7xl mx-auto` met inline padding — vervangen door `.container-main`
- Gebruik **nooit** Tailwind `px-6 lg:px-20` — veroorzaakt uitlijningsproblemen

Als een container extra klassen nodig heeft (zoals `flex`, `items-center`):
```tsx
<div className="container-main flex items-center justify-between">
```

### Sectie-spacing (vertical padding)
| Positie | paddingTop | paddingBottom |
|---------|-----------|--------------|
| Header / hero (eerste sectie na navbar) | `100px` | `40px` |
| Tussenliggende secties met gradient containers | `32px` | `8px` |
| Laatste sectie / CTA | `32px` | `32px` |

- Navbar is ~80px hoog (fixed) — hero-sectie compenseert met `paddingTop: 100px`

### Navbar
- Achtergrond bij scrollen of op niet-homepagina: `bg-[#0A2238]/97` met `backdrop-blur-md`
- Op de homepage transparant totdat gebruiker scrollt
- **Structuur desktop**: Logo (links) | nav-links + Afspraak Inplannen in één `<ul>` met `gap-5` (midden) | Klantenportaal (uiterst rechts)
- Nav-links: `uppercase text-sm font-semibold`, `letterSpacing: 1px`, `whitespace-nowrap`
- Geen "Offerte Aanvragen" knop in de navbar

### Donkere secties
- Achtergrond: `#0A2238` of `rgba(10,34,56,0.95)` voor subtiele variatie
- Optioneel: `noise-overlay` voor subtiele textuur, `hero-grid` voor geanimeerd grid

### Standaard paginaachtergrond
De standaard achtergrond van elke sectie is **`#ffffff` (wit)**. Uitzonderingen:
- **Navbar** — `#0A2238/97` (bij scrollen of niet-homepage)
- **Hero** — donker (`#0A2238`) of licht (`#ffffff`), afhankelijk van de pagina
- **Footer** — `#0A2238`
- **Gradient containers** — `linear-gradient(to bottom right, #0A2238, #1E5A8A)`

Gebruik `#F4F7FA` (surface) alleen als bewuste keuze voor subtiele afwisseling binnen lichte secties.

### Lichte secties
- Achtergrond: `#ffffff` (standaard) of `#F4F7FA` (surface, incidenteel)
- Tekst: `#0A2238` voor koppen, `#3D5A6E` voor body

### Sectieverdeling patroon
Standaard: donker → licht → donker. Content-pagina's (zoals Diensten) mogen starten met een lichte hero als de homepage al een donkere hero heeft.

### Hero-varianten

#### Homepage — donkere hero
Fullwidth achtergrondafbeelding met gradient-overlay. Tekst links, stat-badges rechts.
```tsx
<section className="relative min-h-[480px] flex items-center overflow-hidden bg-navy">
  <Image src="/images/hero-bg.jpg" alt="..." fill className="object-cover" style={{ filter: 'brightness(0.9)' }} priority />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,28,48,0.92) 0%, rgba(10,28,48,0.65) 50%, rgba(10,28,48,0.10) 100%)' }} />
  <div className="relative z-10 w-full container-main flex items-center justify-between gap-12 py-16">
    {/* tekst links */}
    {/* stat-badges rechts */}
  </div>
</section>
```
- H1: `text-off-white`, eyebrow-label mag op homepage (uitzondering op de H1-regel)
- CTA-knop: oranje, geen outline

#### Subpagina's — lichte hero
Witte achtergrond, `paddingTop: 100px, paddingBottom: 40px`. Optioneel: foto in 2-koloms grid.
```tsx
<section style={{ background: '#ffffff', paddingTop: '100px', paddingBottom: '40px' }}>
  <div className="container-main">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>{/* tekst + knoppen */}</div>
      <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image src="..." alt="..." fill className="object-cover" priority />
      </div>
    </div>
  </div>
</section>
```
- H1: `font-bold text-[#0A2238]`, geen eyebrow/label erboven
- Twee knoppen: primair oranje + secundaire outline

---

## Gradient containers

Gradient containers zijn de primaire kaart-component voor diensten, FAQ-alternatieven, etc.

### Stijl
```tsx
<div
  className="rounded-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
  style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
>
```
- Richting: altijd `to bottom right`
- Border-radius: `rounded-md` — **nooit** `rounded-2xl`
- Hover: **altijd** `hover:-translate-y-1 hover:shadow-xl transition-transform duration-200` — consequent op alle gradient containers

### Tekstkleuren op gradient
- Koppen (h2): `text-white`, `font-bold`
- Labels / uppercase: `text-[#7AADCC]` (fog), `fontSize: 12`, `letterSpacing: 1.5px`
- Body: `text-[#C2DCE8]`
- Links / accenten: `text-[#F07830]` hover `text-[#FF8A40]`

### Opbouw per pagina (met gradient containers)
1. **Lichte header** — `paddingTop: 100px, paddingBottom: 40px`, H1, geen label erboven
2. **Secties met gradient containers** — witte achtergrond, `paddingTop: 32px, paddingBottom: 8px`
3. **CTA** — gradient container of eenvoudige lichte banner, `paddingTop: 32px, paddingBottom: 32px`

### CTA-container (gradient, onderaan pagina)
```tsx
<div
  className="rounded-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
  style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '40px 48px' }}
>
  <div>
    <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
      Titel
    </h2>
    <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>Subtekst</p>
  </div>
  <a className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hot text-white text-sm font-semibold transition-colors rounded-md flex-shrink-0" style={{ padding: '14px 32px' }}>
    Label
  </a>
</div>
```

### Lijst-stijl binnen gradient containers
```tsx
<ul className="space-y-2">
  <li className="flex items-start gap-2 text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F07830]" style={{ marginTop: '9px' }} />
    Lijstitem tekst
  </li>
</ul>
```

---

## Statistieken / KPI-blokken

### Blok-stijl (donkere variant)
```tsx
<div className="flex flex-col gap-1 px-8 py-6 border-l border-fog/20 first:border-l-0">
  <p className="font-display font-bold text-4xl text-off-white">+30%</p>
  <p className="text-fog text-sm leading-snug">Label</p>
</div>
```

### Blok-stijl (lichte variant)
```tsx
<div className="flex flex-col gap-1 px-8 py-6 border-l border-[#E2EAF0] first:border-l-0">
  <p className="font-display font-bold text-4xl text-[#0A2238]">+30%</p>
  <p className="text-[#6B8FA6] text-sm leading-snug">Label</p>
</div>
```

### Regels
- **Geen animaties** — geen tellers die optellen, geen fade-in per cijfer
- Scheidingslijn via `border-l`, niet via kaarten of achtergrondblokken

---

## Animaties

| Klasse              | Effect                          | Gebruik                        |
|---------------------|---------------------------------|--------------------------------|
| `animate-fade-up`   | Fade in + slide omhoog (0.7s)   | Primair hero-element           |
| `animate-fade-up-1` | 0.1s delay                      | Tweede element                 |
| `animate-fade-up-2` | 0.2s delay                      | Derde element                  |
| `animate-fade-up-3` | 0.35s delay                     | Vierde element                 |
| `animate-fade-up-4` | 0.5s delay                      | Vijfde element                 |
| `ticker-animate`    | Horizontale scroll (30s loop)   | Ticker / merkenrij             |
| `hero-grid`         | Grid verschuift omhoog (20s)    | Hero-achtergrond               |

---

## Iconen
- Bibliotheek: `lucide-react`
- Grootte: `size={16}` of `size={20}`, `strokeWidth={1.8}`
- Kleur: `text-fog` op donker, `text-orange` voor accenten

---

## Formulieren

- Geen zichtbare zware randen — gebruik underline-stijl (alleen `borderBottom`)
- Verzendknop altijd oranje (`bg-orange`)

### Underline input stijl (donkere secties)
```tsx
style={{
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.25)',
  borderRadius: 0,
  padding: '8px 0',
  fontSize: 15,
  color: '#ffffff',
}}
className="placeholder-[#7AADCC] outline-none transition-colors"
```
- Label: `text-[#7AADCC] font-medium`, `fontSize: 13`

### Autofill override
```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #0A2238 inset !important;
  -webkit-text-fill-color: #ffffff !important;
  caret-color: #ffffff;
  transition: background-color 0s 600000s, color 0s 600000s !important;
}
```
- Voor gradient-containers: vervang `#0A2238` door `#1E5C8C`

---

## Footer

Achtergrond: `#0A2238`. Layout: `grid-cols-1 lg:grid-cols-5` — 2 kolommen brand + 3 nav-kolommen.

### Structuur
```tsx
<footer style={{ background: '#0A2238' }}>
  {/* Hoofdgedeelte */}
  <div className="container-main section-container py-16 lg:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="lg:col-span-2">{/* Brand + certificeringen */}</div>
      {/* 3x nav-kolom */}
    </div>
  </div>
  {/* Bottom bar */}
  <div style={{ marginTop: 32 }}>
    <div className="container-main section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Copyright links, juridische links rechts */}
    </div>
  </div>
</footer>
```

### Tekstkleuren
- Body / nav-links: `text-[#7AADCC]`, `fontSize: 15`
- Hover nav-links: `hover:text-[#F07830] transition-colors`
- Kolomkoppen: `font-bold text-white`, `fontSize: 14`, `letterSpacing: -0.02em`
- Certificeringen: `text-[#7AADCC] uppercase tracking-widest`, `fontSize: 10`, `letterSpacing: 1.5px`
- Bottom bar tekst + links: `text-[#7AADCC]`, `fontSize: 13`

---

## Inline links

Links in lopende tekst (body-koppelingen, niet standalone CTA's):

**Op lichte achtergrond:**
```tsx
<a className="text-[#1E87B4] hover:text-[#0A2238] transition-colors underline-offset-2">
```

**Op donkere achtergrond / gradient:**
```tsx
<a className="text-[#F07830] hover:text-[#FF8A40] transition-colors">
```
Geen `underline` op donkere achtergronden.

---

## Contactinfo-stijl (links met icoon)

E-mail en telefoon als klikbare link met inline Lucide-icoon, op donkere/gradient achtergrond:
```tsx
<a
  href="mailto:info@gasprotex.nl"
  className="flex items-center gap-3 text-[#C2DCE8] hover:text-white transition-colors"
  style={{ fontSize: 15, textDecoration: 'none' }}
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7AADCC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* icoon path */}
  </svg>
  info@gasprotex.nl
</a>
```
- Icoonauto: `stroke="#7AADCC"`, `strokeWidth="1.8"`, `size 18`
- Tekst: `text-[#C2DCE8]` → hover `text-white`

---

## Sector-kaartoverlay

Kaartcomponent met foto, staande verhouding `3/4`, breedte `280px`. Scrollbaar via `overflow-x-auto` + `scrollSnapType: 'x mandatory'`.

```tsx
<Link
  href={`/sectoren/${slug}`}
  className="group relative overflow-hidden rounded-2xl flex-shrink-0"
  style={{ aspectRatio: '3/4', width: '280px', scrollSnapAlign: 'start' }}
>
  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

  {/* Standaard: titelbalk onderaan */}
  <div
    className="absolute inset-x-0 bottom-0 px-6 py-5 text-center transition-opacity duration-300 group-hover:opacity-0"
    style={{ background: 'linear-gradient(to top, rgba(10,28,48,0.92) 0%, transparent 100%)' }}
  >
    <h2 className="font-bold text-white" style={{ fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{title}</h2>
  </div>

  {/* Hover: volledige overlay */}
  <div
    className="absolute inset-0 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{ background: 'rgba(10,28,48,0.88)' }}
  >
    <div style={{ margin: '32px 24px' }}>
      <h2 className="font-bold text-white mb-3" style={{ fontSize: 18 }}>{title}</h2>
      <p className="text-[#C2DCE8] mb-5" style={{ fontSize: 15, lineHeight: 1.8 }}>{intro}</p>
      <span className="inline-flex items-center gap-2 font-semibold text-[#F07830]" style={{ fontSize: 14 }}>
        Meer lezen <ArrowRight />
      </span>
    </div>
  </div>
</Link>
```
- Let op: kaarten gebruiken `rounded-2xl` (uitzondering — foto-kaarten mogen dit)
- Scroll-navigatie: pijlknoppen `w-9 h-9 rounded-full`, `background: #F4F7FA`, `border: 1px solid #E2EAF0`, `color: #0A2238`

---

## Stat-badges (hero)

Rechts van de hero-tekst op de homepage. Twee varianten: navy en oranje.

```tsx
<div
  className={`flex items-center gap-6 px-7 py-6 rounded-lg min-w-[280px] backdrop-blur-sm border ${
    isOrange ? 'bg-orange/90 border-orange-hot/30' : 'bg-navy/90 border-fog/20'
  }`}
>
  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
    isOrange ? 'border-white/60' : 'border-fog/60'
  }`}>
    <Icon size={22} className={isOrange ? 'text-white' : 'text-fog'} strokeWidth={1.8} />
  </div>
  <div>
    <p className={`text-2xl font-bold leading-tight ${isOrange ? 'text-white' : 'text-off-white'}`}>{value}</p>
    <p className={`text-sm leading-snug ${isOrange ? 'text-white/75' : 'text-fog'}`}>{label}</p>
  </div>
</div>
```
- Alleen op de homepage dark hero, desktop only (`hidden lg:flex`)
- `rounded-lg` — uitzondering op `rounded-md` regel, omdat het een losstaand badge-element is

---

## Grid-patronen

Veelgebruikte kolomindelingen:

| Patroon | Klasse | Toepassing |
|---|---|---|
| 1 → 2 kolommen | `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16` | Hero, 2-koloms content |
| 1 → 3 kolommen | `grid-cols-1 md:grid-cols-3 gap-6` | Diensten-cards, 3 gradient containers |
| 1 → 4 kolommen | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` | Kernwaarden, voordelen |
| 2/3 + 1/3 | `grid-cols-1 lg:grid-cols-3 gap-12` met `lg:col-span-2` links | Cases, contactformulier |
| 2 + 3 kolommen | `grid-cols-1 lg:grid-cols-5 gap-12` met `lg:col-span-2` links | Footer, contactpagina |

---

## Navigatie-patronen

### Breadcrumb
Boven de H1 op subpagina's (bijv. sectorpagina's):
```tsx
<div className="flex items-center gap-3 mb-4">
  <Link href="/sectoren" className="text-[#6B8FA6] hover:text-[#0A2238] transition-colors" style={{ fontSize: 13 }}>
    Sectoren
  </Link>
  <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>/</span>
  <span className="text-[#6B8FA6]" style={{ fontSize: 13 }}>Huidige pagina</span>
</div>
```

### Terugknop / back-link
Op detailpagina's (bijv. calculator-subpagina's), boven de H1:
```tsx
<Link href="/bereken-uw-besparing" className="inline-flex items-center gap-2 text-[#7AADCC] hover:text-[#C2DCE8] mb-6 transition-colors" style={{ fontSize: 13 }}>
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ transform: 'rotate(180deg)' }}>
    <path d="M8.5 1L13 5L8.5 9M1 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  Terug naar overzicht
</Link>
```

### Sectionlabel bóven H1 (uitzondering)
Op calculator-subpagina's mag een label boven de H1 staan als contextuele aanduiding (bijv. "Perslucht" boven "Lekkostencalculator perslucht"). Dit is een uitzondering op de algemene regel — alleen bij calculator/tool-pagina's.

---

## Tijdlijn

Verticale tijdlijn binnen een gradient container. Rijen gescheiden door `borderBottom`:
```tsx
{items.map((item) => (
  <div key={item.jaar} className="flex gap-8 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
    <span className="font-bold text-[#F07830] flex-shrink-0 w-12" style={{ fontSize: 20 }}>
      {item.jaar}
    </span>
    <p className="text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
      {item.tekst}
    </p>
  </div>
))}
```

---

## Vergelijkingstabel

Binnen een gradient container, 3 kolommen: aspect | traditioneel | GasProtex:
```tsx
{/* Header */}
<div className="grid grid-cols-3 pb-3">
  <span /> {/* leeg */}
  <span className="text-[#7AADCC]" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Traditioneel</span>
  <span className="text-[#F07830]" style={{ fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>GasProtex</span>
</div>
{/* Rijen */}
{rows.map((row) => (
  <div key={row.aspect} className="grid grid-cols-3 py-3">
    <span className="text-[#C2DCE8] font-medium" style={{ fontSize: 15 }}>{row.aspect}</span>
    <span className="text-[#7AADCC] flex items-center gap-1" style={{ fontSize: 15 }}>
      <span className="text-red-400">✕</span> {row.traditioneel}
    </span>
    <span className="text-white font-semibold flex items-center gap-1" style={{ fontSize: 15 }}>
      <span style={{ color: '#F07830' }}>✓</span> {row.gasprotex}
    </span>
  </div>
))}
```

---

## Calculator-patronen

### Oranje resultaat-container (primaire uitkomst)
```tsx
<div className="rounded-md" style={{ background: 'linear-gradient(135deg, #F07830 0%, #C4631E 100%)', padding: '48px' }}>
  <p className="text-orange-100 mb-2" style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Label</p>
  <p className="font-bold text-white" style={{ fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em' }}>
    €12.500
  </p>
  <p className="text-orange-100 mt-3" style={{ fontSize: 14 }}>Subtekst</p>
</div>
```

### Toggle-knoppen (optie-selectie)
Actieve/inactieve staat:
```tsx
<button
  style={{
    background: isActive ? 'rgba(217,119,55,0.25)' : 'rgba(255,255,255,0.06)',
    border: isActive ? '1px solid #F07830' : '1px solid rgba(255,255,255,0.12)',
    padding: '12px 14px',
    borderRadius: 6,
  }}
>
  <span className="block font-semibold text-white" style={{ fontSize: 15 }}>Waarde</span>
  <span className="text-[#7AADCC]" style={{ fontSize: 12 }}>Label</span>
</button>
```

### Lichte CTA-box (inline, na calculator)
Lichte kaart op witte sectie — voor inline CTA zonder gradient:
```tsx
<div
  className="rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
  style={{ background: '#F5F7FA', border: '1px solid #E2E8F0', padding: '28px 32px' }}
>
  <div>
    <p className="font-semibold text-[#0A2238]" style={{ fontSize: 16 }}>Titel</p>
    <p className="text-[#4A6880] mt-1" style={{ fontSize: 14 }}>Subtekst</p>
  </div>
  <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#F07830] hover:text-[#C4631E] flex-shrink-0 transition-colors" style={{ fontSize: 14 }}>
    Label <ArrowRight />
  </Link>
</div>
```

### Voetnoot / rekenmethode
Kleine disclaimertekst onder calculator, gescheiden door dunne lijn:
```tsx
<div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '32px', marginTop: 32 }}>
  <p className="text-[#4A6880]" style={{ fontSize: 13, lineHeight: 1.8 }}>
    <span className="font-semibold text-[#0A2238]">Rekenmethode:</span> ...
  </p>
</div>
```

---

## Mini KPI-stats in gradient container

2×2 raster van statistieken binnen een gradient container. Scheiding via `borderBottom`:
```tsx
<div className="grid grid-cols-2 gap-4">
  {stats.map((stat) => (
    <div key={stat.label} className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="font-bold text-[#F07830] leading-none mb-1" style={{ fontSize: 36 }}>{stat.value}</div>
      <div className="font-semibold text-white mb-0.5" style={{ fontSize: 14 }}>{stat.label}</div>
      <div className="text-[#7AADCC]" style={{ fontSize: 12 }}>{stat.sub}</div>
    </div>
  ))}
</div>
```
Horizontale KPI-rij (3 kolommen, borderLeft-scheiding) — zie ook KPI-blokken sectie.

---

## Wat te vermijden
- Geen zachte pastelkleuren of gradient-rainbows
- Geen grote border-radius: gebruik `rounded-md`, **nooit** `rounded-2xl` of `rounded-full` voor blokken
- Geen generieke SaaS-look (blauwe #3B82F6 knoppen, witte kaartjes met zware slagschaduw)
- Geen extra commentaar of docstrings toevoegen aan bestaande code
- Geen onnodige animaties — alleen fade-up bij initieel laden
- Geen typewriter-effecten of roterende tekst
- Nooit meer dan 3 kleuren per sectie
- Geen eyebrow-labels boven H1 paginakoppen
- Geen gekleurde badges of tags
- Geen "pill" knoppen — `border-radius` max `rounded-md`
- Geen tekst in volledig capslock, behalve bij labels/eyebrows
