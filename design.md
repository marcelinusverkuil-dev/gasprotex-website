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
| Token           | Hex       | Gebruik                              |
|-----------------|-----------|--------------------------------------|
| `--steel`       | `#0F2D4B` | Primaire donkere achtergrond         |
| `--iron`        | `#122840` | Iets donkerder variant van steel     |
| `--zinc`        | `#1A3A5C` | Subtiele contrast op steel secties   |
| `--brand-blue`  | `#1E87B4` | Accentkleur, highlights in koppen    |

### Accent (oranje — voor CTA's en energie)
| Token           | Hex       | Gebruik                              |
|-----------------|-----------|--------------------------------------|
| `--orange`      | `#D97737` | Primaire CTA-kleur, actieve states   |
| `--orange-hot`  | `#E8893A` | Hover state van orange               |
| `--amber`       | `#E8A84A` | Subtiel warm accent                  |

### Licht (voor tekst en lichte secties)
| Token           | Hex       | Gebruik                              |
|-----------------|-----------|--------------------------------------|
| `--fog`         | `#7AADCC` | Body-tekst op donker, iconen         |
| `--mist`        | `#C2DCE8` | Nav-links, subtiele tekst op donker  |
| `--off-white`   | `#F0F6FA` | Koppen op donkere secties            |
| `--pure`        | `#ffffff` | Tekst op oranje knoppen              |
| `--surface`     | `#F4F7FA` | Achtergrond lichte secties           |
| `--text-dark`   | `#0F2D4B` | Koppen op lichte secties             |
| `--text-body`   | `#3D5A6E` | Body-tekst op lichte secties         |
| `--text-muted`  | `#6B8FA6` | Subkoppen / labels op lichte secties |

### Gebruik in Tailwind
Alle tokens zijn beschikbaar via `text-steel`, `bg-orange`, `border-fog`, etc. Gebruik **nooit** hardcoded hex in className — gebruik altijd de CSS-variabelen of Tailwind-tokens.  
Uitzondering: als een kleur met opacity nodig is, gebruik dan `bg-[#D97737]/20` of `rgba()` in een `style`-prop.

---

## Typografie

### Lettertypes
- **Display / koppen**: `font-display` → Barlow Condensed (Bold/SemiBold)
- **Body**: `font-body` → Barlow (Regular/Medium)

### Stijlregels
- Koppen: `font-display font-bold`, grote tracking (`tracking-widest uppercase`) voor labels en nav
- Sectionlabels: `text-xs tracking-widest uppercase text-orange font-medium` — **alleen binnen secties**, nooit als eyebrow boven een pagina-H1
- H1 (paginakop): `font-bold text-[#0F2D4B]`, `fontSize: clamp(32px, 4vw, 52px)`, `lineHeight: 1.2`, `letterSpacing: -0.02em` — **geen eyebrow/label erboven**
- H2: `text-4xl font-bold`
- Body: `text-fog` op donker, `text-text-body` op licht, `text-lg leading-relaxed`

---

## Knoppen

### Primaire CTA (oranje)
```tsx
<button className="bg-orange hover:bg-orange-hot text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-md transition-colors clip-btn">
  Label
</button>
```

### Secundaire (outline)
```tsx
<button className="border border-fog/30 text-mist hover:border-fog/60 hover:text-off-white text-sm font-medium rounded-md px-8 py-3 transition-colors">
  Label
</button>
```

### Industriële hoekige knopvorm
- Gebruik `.clip-btn` voor de kenmerkende scheve clip-path: `polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)`
- Gebruik `.clip-btn-sm` voor kleinere knoppen (6px offset)
- Op mobiel (`max-width: 640px`) valt clip-path weg → `border-radius: 2px` als fallback

---

## Secties & Layout

### Container
- Max breedte: `max-w-7xl mx-auto`
- Padding desktop: `px-[80px]` of `px-20`
- Padding mobiel: `px-6`

### Navbar
- Achtergrond bij scrollen of op niet-homepagina: `bg-[#0F2D4B]/97` (= `--steel`) met `backdrop-blur-md`
- Op de homepage transparant totdat gebruiker scrollt
- **Structuur desktop**: Logo (links) | nav-links + Afspraak Inplannen in één `<ul>` met `gap-8` (midden) | Klantenportaal (uiterst rechts, los element)
- Nav-links: Diensten · Sectoren · Over Ons · Cases · Contact · Afspraak Inplannen — allemaal `gap-8`
- Geen "Offerte Aanvragen" knop in de navbar

### Donkere secties (default)
- Achtergrond: `bg-steel` of `bg-iron`
- Voeg altijd `noise-overlay` toe voor subtiele textuur (via `::before`)
- Gebruik `hero-grid` voor het geanimeerde grid-patroon (oranje lijnen, 6% opacity)

### Lichte secties
- Achtergrond: `bg-surface` of `bg-white`
- Tekst: `text-text-dark` voor koppen, `text-text-body` voor body

### Sectieverdeling patroon
Wissel af: donker → licht → donker. Begin altijd donker (hero).

---

## Dienstenkaarten / Nieuws-blokken (I-care stijl)

Geïnspireerd op de services/nieuws-blokken van I-care: rustig, veel witruimte, kaarten op een lichte achtergrond.

### Structuur
- Grid: 3 kolommen desktop, 2 tablet, 1 mobiel (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)
- Sectieachtergrond: `bg-white` of `bg-surface`
- Boven de grid: sectionlabel (oranje, uppercase) + H2

### Kaart-stijl
```tsx
<div className="bg-white border border-[--border-light] rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200">
  {/* Optioneel: afbeelding of icoon-blok bovenaan */}
  <div className="p-6">
    <p className="text-xs tracking-widest uppercase text-orange font-medium mb-2">Categorie</p>
    <h3 className="font-display font-bold text-xl text-text-dark mb-3 leading-snug">Diensttitel</h3>
    <p className="text-text-body text-sm leading-relaxed mb-4">Korte beschrijving van de dienst of het nieuws.</p>
    <a className="text-brand-blue text-sm font-semibold hover:text-orange transition-colors">
      Lees meer →
    </a>
  </div>
</div>
```

### Regels
- Geen zware schaduwen — alleen `hover:shadow-md` voor interactie-feedback
- Rand: `border border-[--border-light]` (subtiel, niet dikker dan 1px)
- Geen grote afbeeldingen die de kaart domineren — tekst is primair
- "Lees meer →" in `text-brand-blue`, hover naar `text-orange`

---

## Diensten-kaarten (gradient stijl)

Elke dienst staat in één zelfstandige container met gradient achtergrond — donkerblauw links, lichterblauw rechts.

### Structuur
```tsx
<div
  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '48px' }}
>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
    {/* Kolom 1: titel, subtitle, prijs, levertijd */}
    {/* Kolom 2: omschrijving + resultaat */}
    {/* Kolom 3: inbegrepen lijst + link */}
  </div>
</div>
```

### Tekstkleuren op gradient
- Titel: `text-white`
- Subtitle / levertijd / labels: `text-[#7AADCC]` (fog)
- Body: `text-[#C2DCE8]` (mist)
- Prijs / resultaat / link: `text-[#D97737]` (orange)
- Bullets: kleine oranje dot `bg-[#D97737]`

### Lettertypes binnen gradient containers
- Sectie-titel (h2): `clamp(26px, 3vw, 38px)`
- Card-titel (h3/h4): `18px`
- Body tekst: `15px`, lineHeight `1.7–1.8`
- Labels / uppercase: `13px`
- Vergelijkingstabel rijen: `15px`
- Prijzen: `18–22px`, bold, oranje

### Opbouw per pagina
Elke pagina volgt dit patroon:
1. **Witte header** — `paddingTop: 100px, paddingBottom: 40px`, simpele h1, geen eyebrow-label
2. **Sectie met gradient containers** — `paddingTop: 32px, paddingBottom: 8px` (laatste sectie: `32px` onder)
3. **CTA container** — zelfde gradient, kleinere padding `40px 48px`, tekst + pijl-link

### Opbouw per container
Elke container heeft:
- Buitenste wrapper: `rounded-2xl overflow-hidden`, gradient achtergrond, `padding: 48px`
- Optioneel: subtitle in `text-[#7AADCC]` boven de h2
- h2 titel in `text-white`
- Daarna grid met content (kolommen afhankelijk van inhoud)

### Grid-varianten
- **3 kolommen** (diensten): titel+meta / omschrijving+resultaat / inbegrepen+link
- **2 kolommen** (over ons missie, contact): info links / content rechts
- **4 kolommen** (sectoren, kernwaarden): gelijke kaartjes naast elkaar
- **Vergelijkingstabel**: `grid-cols-3`, header-rij in `text-[#7AADCC]` + `text-[#D97737]`, geen borders

### Lijst-stijl binnen containers
```tsx
<ul className="space-y-2">
  <li className="flex items-start gap-2 text-[#C2DCE8]" style={{ fontSize: 15, lineHeight: 1.7 }}>
    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D97737]" style={{ marginTop: '9px' }} />
    Lijstitem tekst
  </li>
</ul>
```

### CTA-container (onderaan elke pagina)
```tsx
<div
  className="rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
  style={{ background: 'linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)', padding: '40px 48px' }}
>
  <div>
    <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
      Titel
    </h2>
    <p className="text-[#7AADCC]" style={{ fontSize: 14 }}>Subtekst</p>
  </div>
  <Link className="inline-flex items-center gap-2 text-[#D97737] hover:text-[#E8893A] font-semibold transition-colors" style={{ fontSize: 14 }}>
    Linktext
    <svg ...pijl... />
  </Link>
</div>
```

### Regels
- Gradient altijd: `linear-gradient(to right, #0F2D4B 0%, #1E5A8A 100%)`
- Hover: `hover:-translate-y-1 hover:shadow-xl`
- Geen witte achtergrond, geen border — gradient is de container
- Geen inner containers (`rgba(255,255,255,0.07)`) — content direct op gradient
- CTA-blok onderaan volgt dezelfde gradient
- Geen strepen/borders binnen tabelrijen

---

## Statistieken / KPI-blokken

Geïnspireerd op I-care's statblokken — maar **zonder afleidende animaties**. De cijfers spreken voor zich.

### Structuur
- Rij van 3–4 blokken, horizontaal op desktop, gestapeld op mobiel
- Achtergrond: donkere sectie (`bg-steel`) of lichte sectie (`bg-surface`) — beide werken
- Geen roterende tekst of typewriter-effecten

### Blok-stijl (donkere variant)
```tsx
<div className="flex flex-col gap-1 px-8 py-6 border-l border-fog/20 first:border-l-0">
  <p className="font-display font-bold text-4xl text-off-white">+30%</p>
  <p className="text-fog text-sm leading-snug">Uptime van installaties</p>
</div>
```

### Blok-stijl (lichte variant)
```tsx
<div className="flex flex-col gap-1 px-8 py-6 border-l border-[--border-light] first:border-l-0">
  <p className="font-display font-bold text-4xl text-steel">+30%</p>
  <p className="text-text-muted text-sm leading-snug">Uptime van installaties</p>
</div>
```

### Regels
- Cijfer altijd in `font-display font-bold text-4xl`
- Label eronder in `text-sm`, gedempte kleur
- Scheidingslijn via `border-l` (niet via kaarten of achtergrondblokken)
- **Geen animaties** — geen tellers die optellen, geen fade-in per cijfer

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

- Geen zichtbare zware randen om invoervelden — gebruik underline-stijl (alleen borderbottom)
- Velden staan los van elkaar — geen rastereffect
- Verzendknop altijd oranje (`bg-orange`)

### Underline input stijl (standaard op donkere secties)
```tsx
// Input / Select / Textarea
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

- Label boven het veld: `text-[#7AADCC] font-medium`, `fontSize: 13`
- Geen achtergrond, geen border-radius — veld vloeit open in de sectie
- Placeholder in `#7AADCC` (fog)

### Autofill override (browser-autofill witte achtergrond voorkomen)
Toevoegen aan `globals.css` van zowel website als portal:
```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #0F2D4B inset !important;
  -webkit-text-fill-color: #ffffff !important;
  caret-color: #ffffff;
  transition: background-color 0s 600000s, color 0s 600000s !important;
}
```
- Kleur `#0F2D4B` (steel) voor donkere secties
- Voor de gradient-container op de contactpagina: `#1E5C8C`

---

## Paginastructuur

Elke pagina volgt dit patroon:
1. **Hero** — donkere achtergrond (`bg-steel`), grote kop, oranje CTA-knop
2. **Hoofdsectie(s)** — lichte achtergrond (`bg-white` of `bg-surface`), kaartgrid of tekst
3. **CTA-banner** — donkere achtergrond (`bg-steel`), korte tekst, oranje knop
4. **Footer** — donker

---

## Wat te vermijden
- Geen zachte pastelkleuren of gradient-rainbows
- Geen afgeronde grote border-radius (gebruik `rounded-md`, nooit `rounded-2xl` of `rounded-full` voor blokken)
- Geen generieke SaaS-look (blauwe #3B82F6 knoppen, witte kaartjes met zware slagschaduw)
- Geen extra commentaar of docstrings toevoegen aan bestaande code
- Geen onnodige animaties — alleen fade-up bij initieel laden, geen hover-shake etc.
- Geen afleidende loopanimaties naast KPI-cijfers of statistieken — de inhoud moet centraal staan
- Geen typewriter-effecten of roterende tekst in hero of stat-blokken
- Nooit meer dan 3 kleuren per sectie
- Geen eyebrow-labels boven H1 paginakoppen — de titel spreekt voor zichzelf
- Geen gekleurde badges of tags
- Geen "pill" knoppen — `border-radius` max `rounded-md` (6–8px)
- Geen tekst in volledig capslock, behalve bij labels/eyebrows
