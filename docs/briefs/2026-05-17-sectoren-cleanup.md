# Build-brief — Sectoren-cleanup (4 oude routes + dode code + assets verwijderen)

**URL of locatie:** `src/app/(marketing)/sectoren/{chemie,energie,food,industrie}/`, `src/components/marketing/`, `src/lib/`, `public/images/sectoren/`, `CLAUDE.md`
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

De vier oude sectoren-subpagina's (`chemie`, `energie`, `food`, `industrie`) en de bijbehorende dode code uit de codebase verwijderen, zodat alleen de twee actueel onderhouden sectoren (`voedingsmiddelensector` en `petrochemie-chemie`) overblijven — geen orphan pages, geen dode dependencies, geen verwarring voor toekomstige sessies.

---

## Context

**Wat we hebben uitgezocht (17 mei 2026):**

In de codebase staan zes sectoren-routes:

| Route | Type | Marcelinus' beslissing |
|---|---|---|
| `/sectoren/voedingsmiddelensector` | Eigen volledige pagina | **Behouden** |
| `/sectoren/petrochemie-chemie` | Eigen volledige pagina | **Behouden** |
| `/sectoren/chemie` | SectorPage-template + sectoren-data.ts | **Verwijderen — oud** |
| `/sectoren/energie` | SectorPage-template + sectoren-data.ts | **Verwijderen — oud** |
| `/sectoren/food` | SectorPage-template + sectoren-data.ts | **Verwijderen — oud** |
| `/sectoren/industrie` | SectorPage-template + sectoren-data.ts | **Verwijderen — oud** |

**Bewijs uit grep-onderzoek:**

- `SectorPage.tsx` wordt alleen geïmporteerd door de 4 te-verwijderen routes → dode dependency na cleanup
- `sectoren-data.ts` wordt alleen geïmporteerd door de 4 te-verwijderen routes → dode dependency na cleanup
- `SectorenSection.tsx` linkt naar de 4 te-verwijderen routes, en wordt nergens in de codebase geïmporteerd → al dode code, niet gerenderd
- Navbar (`src/components/marketing/Navbar.tsx`) heeft een dropdown "Sectoren" met alleen `/sectoren/voedingsmiddelensector` en `/sectoren/petrochemie-chemie` → geen interne links naar de 4 te-verwijderen routes
- Footer (`src/components/marketing/Footer.tsx`) idem → alleen de 2 te-behouden routes
- Homepage (`src/app/page.tsx`) linkt naar voedingsmiddelensector + petrochemie-chemie → idem

**SEO-context:** GSC toont 6 pagina's in "Gevonden - momenteel niet geïndexeerd". Hoogstwaarschijnlijk zijn 4 daarvan de oude sectoren-routes. Door ze te verwijderen krijgen die URLs 404 → Google ruimt ze vanzelf op uit de discovery-rij.

---

## Scope

**In scope (deze brief = één commit):**

1. **Verwijderen 4 routes:**
   - `src/app/(marketing)/sectoren/chemie/` (folder + page.tsx)
   - `src/app/(marketing)/sectoren/energie/` (folder + page.tsx)
   - `src/app/(marketing)/sectoren/food/` (folder + page.tsx)
   - `src/app/(marketing)/sectoren/industrie/` (folder + page.tsx)

2. **Verwijderen dode code/dependencies:**
   - `src/components/marketing/SectorenSection.tsx` (al dode code, niet gerenderd)
   - `src/components/marketing/SectorPage.tsx` (template, alleen door de 4 verwijderde routes gebruikt)
   - `src/lib/sectoren-data.ts` (data, alleen door de 4 verwijderde routes gebruikt)

3. **Verwijderen ongebruikte image-assets:**
   - `public/images/sectoren/chemie.jpg`
   - `public/images/sectoren/energie.avif`
   - `public/images/sectoren/food.jpg`
   - `public/images/sectoren/industrie.jpg`
   - **Niet** weghalen: `voedingsmiddelensector.jpg`, `voedingsmiddelensector.png`, `petrochemie-chemie.jpg`, `petrochemie-chemie.png` — die zijn nog in gebruik

4. **Updaten `CLAUDE.md`** in dezelfde commit, voor de sectoren-references:
   - Folder-tree-sectie: regels `chemie/page.tsx`, `food/page.tsx`, `energie/page.tsx`, `industrie/page.tsx` onder `sectoren/` verwijderen
   - Pagina-status-tabel: rij `/sectoren/[chemie\|food\|energie\|industrie]` verwijderen
   - Sectie "Secties per pagina": de subsectie over `SectorPage`-template + `sectoren-data.ts` weghalen of herschrijven (alleen voedingsmiddelensector + petrochemie-chemie overhouden)
   - Sectie "Sectorpagina's" onderaan: regel `/sectoren/[chemie|food|energie|industrie]` weghalen, dependency-uitleg over `lib/sectoren-data.ts` ook weghalen

5. **Sweep** voor stale referenties:
   - `grep -rn "sectoren/chemie\|sectoren/energie\|sectoren/food\|sectoren/industrie" src/` → alle hits in komende verwijdering meenemen of melden indien onverwacht
   - `grep -rn "SectorPage\|SectorenSection\|sectoren-data\|sectorenData" src/` → idem
   - Eventuele resterende referenties in `STATUS.md` of `WORKFLOW.md`: meld, niet zelf wijzigen

**Out of scope:**

- Daadwerkelijke wijzigingen aan `sitemap.ts` — die bevat geen referenties naar de 4 routes (al gecheckt), dus geen aanpassing nodig
- Sectoren-uitbreiding of nieuwe sectorpagina's bouwen → niet nu
- De CLAUDE.md-opschoning voor `bereken-uw-besparing` / `bereken-uw-verlies` / `/sectoren-overzicht` → staat in **aparte brief** `2026-05-17-claude-md-opschoning.md`, niet hier
- `STATUS.md` aanpassen → apart te beslissen
- GSC URL-removal aanvragen → apart, voor Marcelinus zelf (de 404s lossen het vanzelf op)

---

## Implementatiedetails

### Volgorde van verwijderen

Doe het in deze volgorde om TypeScript-errors te voorkomen tijdens de tussenstadia:

1. Eerst de 4 page.tsx-routes verwijderen (dat zijn de "consumers")
2. Daarna de components (`SectorenSection.tsx`, `SectorPage.tsx`)
3. Daarna `sectoren-data.ts`
4. Daarna de image-assets
5. Daarna `CLAUDE.md` aanpassen
6. Tot slot `npm run build` om alles te valideren

### Verificatie tussen stappen

Na stap 4 (alle code verwijderd) draai `npm run build`. Eventuele errors verwachten:
- Import-errors als ergens nog naar `sectoren-data` of `SectorPage` of `SectorenSection` wordt verwezen → opzoeken en oplossen
- 404 routes: niet relevant, dat is juist de bedoeling

### `CLAUDE.md` aanpassingen — specifiek

Zoek deze blokken en pas ze aan:

**Folder-tree (in "Structuur"-sectie):** verwijder regels voor chemie/food/energie/industrie onder `sectoren/`. Behoud: `voedingsmiddelensector/page.tsx`, `petrochemie-chemie/page.tsx`.

**Paginastatus-tabel:** verwijder de rij:
```
| `/sectoren/[chemie|food|energie|industrie]` | ✅ klaar |
```

**Secties per pagina:** verwijder of herschrijf de subsectie die `SectorPage`-template + `sectoren-data.ts` uitlegt.

**"Sectorpagina's"-blok onderaan:** verwijder regel over de 4 oude routes en de `SectorPage` dependency-uitleg.

---

## Acceptatiecriteria

- [ ] Alle 4 sectoren-subpagina-folders verwijderd uit `src/app/(marketing)/sectoren/`
- [ ] `src/components/marketing/SectorenSection.tsx` verwijderd
- [ ] `src/components/marketing/SectorPage.tsx` verwijderd
- [ ] `src/lib/sectoren-data.ts` verwijderd
- [ ] 4 image-assets verwijderd uit `public/images/sectoren/`
- [ ] `CLAUDE.md` bevat geen verwijzingen meer naar `chemie/`, `energie/`, `food/`, `industrie/` (als sectoren-subroutes), `SectorPage`, `SectorenSection`, `sectoren-data`
- [ ] `npm run build` slaagt zonder errors
- [ ] `npm run lint` geeft geen nieuwe warnings/errors
- [ ] `grep -rn "sectoren/chemie\|sectoren/energie\|sectoren/food\|sectoren/industrie" src/` → 0 hits
- [ ] `grep -rn "SectorPage\|SectorenSection\|sectoren-data\|sectorenData" src/` → 0 hits
- [ ] Lokaal getest: `/sectoren/voedingsmiddelensector` en `/sectoren/petrochemie-chemie` laden nog steeds correct
- [ ] Lokaal getest: `/sectoren/chemie` (en de andere 3) geven 404
- [ ] Commit-bericht: bv. `refactor(sectoren): verwijder 4 oude sectoren-subpagina's + dode dependencies`

---

## Open vragen voor Claude Code

- **Bestaat er nog een `(marketing)/sectoren/page.tsx` (overzicht)?** Nee, bevestigd door audit op 17 mei. Als je toch iets vindt: meld het, niet zelf wijzigen.
- **Wat als `sectoren-data.ts` ergens onverwachts wordt geïmporteerd?** Meld de hit en wacht op input — niet stilzwijgend kapotmaken.
- **`SectorenSection.tsx` was al dode code — moet zeker weg?** Ja. Bevestigd door Marcelinus.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router)
- Styling: nvt
- Formulieren: nvt
- E-mail: nvt
- Database/auth: nvt

Extra eisen:
- Geen nieuwe dependencies
- Geen wijzigingen aan `sitemap.ts`, `robots.ts`, `layout.tsx`, of de te-behouden sectorpagina's (`voedingsmiddelensector`, `petrochemie-chemie`)

---

## Out of scope

- Aanmaken van een `/sectoren` overzicht-pagina → niet nu, geen vraag van klanten/SEO
- Vervanging-content voor verwijderde sectoren (energie, industrie, etc.) → niet nu; mocht je later willen mikken op 'energie'- of 'industrie'-zoekverkeer, dan komt dat in een aparte content-brief
- GSC URL-removal aanvragen voor de 4 verwijderde routes → Marcelinus zelf, optioneel, niet noodzakelijk
- CLAUDE.md-opschoning voor `bereken-uw-besparing` / `bereken-uw-verlies` / `/sectoren-overzicht` → staat in `2026-05-17-claude-md-opschoning.md`

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
Lees docs/briefs/2026-05-17-sectoren-cleanup.md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
