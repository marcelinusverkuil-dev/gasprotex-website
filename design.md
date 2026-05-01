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

### Lichte secties
- Achtergrond: `#F4F7FA` (surface) of `#ffffff`
- Tekst: `#0A2238` voor koppen, `#3D5A6E` voor body

### Sectieverdeling patroon
Standaard: donker → licht → donker. Content-pagina's (zoals Diensten) mogen starten met een lichte hero als de homepage al een donkere hero heeft.

---

## Gradient containers

Gradient containers zijn de primaire kaart-component voor diensten, FAQ-alternatieven, etc.

### Stijl
```tsx
<div
  className="rounded-md"
  style={{ background: 'linear-gradient(to bottom right, #0A2238, #1E5A8A)', padding: '48px' }}
>
```
- Richting: altijd `to bottom right`
- Border-radius: `rounded-md` — **nooit** `rounded-2xl`
- Geen hover-animatie vereist; optioneel: `hover:-translate-y-1 hover:shadow-xl`

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
