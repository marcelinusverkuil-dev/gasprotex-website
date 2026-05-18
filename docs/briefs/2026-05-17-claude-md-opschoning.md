# Build-brief — CLAUDE.md opschonen (stale routes + URL-renames)

**URL of locatie:** `CLAUDE.md` (gasprotex-website root)
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

`CLAUDE.md` (de project-documentatie waarop zowel Claude Code als Claude in Cowork mode hun mentale model baseren) opschonen zodat het de huidige codebase weerspiegelt — geen verwijzingen meer naar verwijderde routes of oude URL-paden.

---

## Context

Tijdens een route-audit op 17 mei 2026 bleken drie punten in `CLAUDE.md` niet meer te kloppen met de werkelijke filesystem-status. Beide Claudes lezen `CLAUDE.md` bij het begin van elke sessie, dus stale info veroorzaakt verkeerde aannames en wasted-werk.

Wat er fout staat (alleen documentatie, geen code-impact):

1. **`/bereken-uw-besparing/` referenties** — de folder is in commit `cd6e9bd` (17 mei) hernoemd naar `/bereken-je-besparing/`. Routes in code zijn aangepast, maar CLAUDE.md noemt nog overal de oude URL.

2. **`/bereken-uw-verlies/` (en `bereken-je-verlies/`) bestaat niet** — wordt in CLAUDE.md genoemd als bestaande route met page.tsx + perslucht/stikstof/waterstof/co2-subroutes, maar in de filesystem bestaat geen enkele `verlies`-folder. Verlies-tak is dus nooit gebouwd of compleet verwijderd. Bevestigd: Marcelinus bedoelde "bereken-je-besparing" toen hij dit eerder noemde.

3. **`/sectoren/page.tsx ← overzicht`** — staat in CLAUDE.md als bestaand, maar `src/app/(marketing)/sectoren/page.tsx` bestaat niet. Bezoekers/links naar `gasprotex.nl/sectoren` krijgen 404. (Geen bekende interne link wijst ernaartoe — Navbar gebruikt een dropdown, geen directe sectoren-overzicht-link, dus geen functioneel probleem in productie.)

4. **`/lekkosten-calculator`** — CLAUDE.md zegt: "Redirect naar `/bereken-uw-verlies/perslucht`". Werkelijke redirect (in `src/app/(marketing)/lekkosten-calculator/page.tsx`): naar `/bereken-je-besparing/perslucht`.

---

## Scope

**In scope (alleen `CLAUDE.md` aanpassen):**

- Sectie "Structuur" (folder-tree): `bereken-uw-besparing/` → `bereken-je-besparing/`
- Sectie "Structuur": hele `bereken-uw-verlies/` blok verwijderen
- Sectie "Structuur": `sectoren/page.tsx ← overzicht` regel verwijderen (bestaat niet)
- Sectie "Paginastatus" tabel: regel `/bereken-uw-besparing` → `/bereken-je-besparing`
- Sectie "Paginastatus" tabel: regel `/bereken-uw-verlies` volledig verwijderen
- Sectie "Secties per pagina": header `### /bereken-uw-besparing · /bereken-uw-verlies` → `### /bereken-je-besparing`
- Sectie "Secties per pagina": header `### /bereken-uw-besparing/perslucht (en andere gassoorten)` → `### /bereken-je-besparing/perslucht (en andere gassoorten)`
- Sectie "/lekkosten-calculator": redirect-doel corrigeren naar `/bereken-je-besparing/perslucht`

**Out of scope:**

- Status van de 4 sectoren-subroutes (`chemie`, `energie`, `food`, `industrie`) — Marcelinus wil eerst zelf in incognito bekijken voordat hij beslist of die blijven of verwijderd worden. CLAUDE.md noemt ze al correct als routes met `SectorPage`-template, dat klopt nog steeds.
- Daadwerkelijke code-wijzigingen — niets in `src/`
- `STATUS.md` aanpassen — apart te beslissen, niet nu
- Het feit dat `SectorenSection.tsx` dode code is — apart op te ruimen

---

## Implementatiedetails

### Wijziging 1 — folder-tree in "Structuur"

Vervang:

```
bereken-uw-besparing/
  page.tsx
  perslucht/ stikstof/ waterstof/ co2/
bereken-uw-verlies/
  page.tsx
  perslucht/ stikstof/ waterstof/ co2/
```

Door:

```
bereken-je-besparing/
  page.tsx
  perslucht/ stikstof/ waterstof/ co2/
```

En in dezelfde tree-sectie de regel `sectoren/page.tsx ← overzicht` verwijderen.

### Wijziging 2 — paginastatus-tabel

Verwijder de regel:

```
| `/bereken-uw-verlies` | ✅ klaar |
```

En wijzig:

```
| `/bereken-uw-besparing` | ✅ klaar |
```

In:

```
| `/bereken-je-besparing` | ✅ klaar |
```

### Wijziging 3 — "Secties per pagina" headers

Vervang:

```
### `/bereken-uw-besparing` · `/bereken-uw-verlies`
1. Hero
2. Vier gassoort-kaarten — Perslucht, Stikstof, Waterstof, CO₂
3. Disclaimer banner

### `/bereken-uw-besparing/perslucht` (en andere gassoorten)
```

Door:

```
### `/bereken-je-besparing`
1. Hero
2. Vier gassoort-kaarten — Perslucht, Stikstof, Waterstof, CO₂
3. Disclaimer banner

### `/bereken-je-besparing/perslucht` (en andere gassoorten)
```

### Wijziging 4 — /lekkosten-calculator

Vervang:

```
### `/lekkosten-calculator`
Redirect naar `/bereken-uw-verlies/perslucht`.
```

Door:

```
### `/lekkosten-calculator`
Redirect naar `/bereken-je-besparing/perslucht`.
```

---

## Acceptatiecriteria

- [ ] Geen string `bereken-uw-besparing` meer in `CLAUDE.md` (`grep -c "bereken-uw-besparing" CLAUDE.md` geeft 0)
- [ ] Geen string `bereken-uw-verlies` meer in `CLAUDE.md`
- [ ] Geen string `bereken-je-verlies` meer (was hoe dan ook niet aanwezig, maar controleren)
- [ ] Geen verwijzing naar een bestaande `sectoren/page.tsx ← overzicht` meer
- [ ] `/lekkosten-calculator` redirect-doel klopt: `/bereken-je-besparing/perslucht`
- [ ] Geen wijzigingen in `src/` of andere bestanden — alleen `CLAUDE.md`
- [ ] Commit-bericht: bv. `docs(CLAUDE.md): opschoning stale routes en bereken-je-besparing rename`

---

## Open vragen voor Claude Code

- Geen — wijzigingen zijn mechanisch find-and-replace, geen oordeel nodig.

---

## Techniek-eisen

- nvt — alleen markdown-bestand
- Geen build/lint check nodig (markdown wordt niet gebundled)

---

## Out of scope

- `STATUS.md` opschonen (apart)
- `SectorenSection.tsx` dode-code-cleanup (apart)
- 4 sectoren-subroutes verwijderen of toevoegen aan sitemap (apart, on hold)
- Andere `.md`-bestanden in de repo

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
Lees docs/briefs/2026-05-17-claude-md-opschoning.md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
