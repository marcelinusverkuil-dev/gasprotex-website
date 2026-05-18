# Build-brief — 301-redirects voor oude `/bereken-uw-besparing/` URLs

**URL of locatie:** `next.config.ts` (redirects-functie)
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

5 permanente 301-redirects toevoegen van de oude `/bereken-uw-besparing/`-URLs naar de hernoemde `/bereken-je-besparing/`-URLs, zodat Google-rankings + eventuele oude bookmarks/externe links niet verloren gaan.

---

## Context

**Wat er is gebeurd:**

- 17 mei 2026 (commit `cd6e9bd`): folder `bereken-uw-besparing/` hernoemd naar `bereken-je-besparing/` als onderdeel van de `u/uw` → `je/jouw` aanspreekvorm-overhaul.
- Commit-message vermeldde: *"geen 301-redirect (nog geen externe traffic)"*.

**Wat de aanname over "geen externe traffic" miste:**

GSC-data op 18 mei 2026 laat zien dat Google in de week vóór de rename **5 oude URLs heeft geïndexeerd**:

| Status | URL |
|---|---|
| Geïndexeerd | `https://gasprotex.nl/bereken-uw-besparing` |
| Geïndexeerd | `https://gasprotex.nl/bereken-uw-besparing/co2` |
| Geïndexeerd | `https://gasprotex.nl/bereken-uw-besparing/stikstof` |
| Geïndexeerd | `https://gasprotex.nl/bereken-uw-besparing/waterstof` |
| Gevonden, niet geïndexeerd | `https://gasprotex.nl/bereken-uw-besparing/perslucht` |

Nu geven die URLs 404 (folder bestaat niet meer). Gevolgen:
1. **SEO-juice verloren** — Google's opgebouwde autoriteit voor deze 5 URLs vervalt; bij natural decay verdwijnen ze uit de index zonder dat de nieuwe `/bereken-je-besparing/`-URLs daarvan profiteren.
2. **Eventuele bookmarks/externe links breken** — onbekend hoeveel, maar potentieel niet-nul (Google zou ze niet indexeren als er geen enkele referentie was).

Een 301-redirect lost beide op: Google brengt autoriteit over naar de nieuwe URL en oude links blijven werken.

---

## Scope

**In scope:**

- 5 permanente 301-redirects toevoegen in `next.config.ts` → `async redirects()`
- Pad-mapping is 1-op-1, alleen de folder-naam verandert

**Out of scope:**

- Andere oude URLs die mogelijk in Google staan (alleen deze 5 zijn bevestigd via GSC)
- `bereken-uw-verlies` of varianten — bestaan niet, niet relevant
- Wijzigingen aan de `/bereken-je-besparing/`-pagina's zelf
- GSC URL-removal aanvragen — overbodig zodra de 301's live zijn, Google werkt z'n index dan vanzelf bij

---

## Implementatiedetails

### Wijziging in `next.config.ts`

Bestaande structuur in `async redirects()`:

```ts
async redirects() {
  return [
    {
      source: '/:path+/',
      destination: '/:path+',
      permanent: true,
    },
  ]
}
```

**Toevoegen** (vóór de bestaande trailing-slash regel, anders kan de slash-stripper eerst toeslaan en valt de match):

```ts
{
  source: '/bereken-uw-besparing',
  destination: '/bereken-je-besparing',
  permanent: true,
},
{
  source: '/bereken-uw-besparing/perslucht',
  destination: '/bereken-je-besparing/perslucht',
  permanent: true,
},
{
  source: '/bereken-uw-besparing/co2',
  destination: '/bereken-je-besparing/co2',
  permanent: true,
},
{
  source: '/bereken-uw-besparing/stikstof',
  destination: '/bereken-je-besparing/stikstof',
  permanent: true,
},
{
  source: '/bereken-uw-besparing/waterstof',
  destination: '/bereken-je-besparing/waterstof',
  permanent: true,
},
```

**Alternatief — generieke wildcard (overweeg):**

Eén entry die alle subpaden ineens vangt:

```ts
{
  source: '/bereken-uw-besparing/:path*',
  destination: '/bereken-je-besparing/:path*',
  permanent: true,
},
```

**Voorkeur tussen expliciet of wildcard:** wildcard is korter en vangt ook eventuele toekomstige sub-URLs (`bereken-uw-besparing/iets-anders` → automatisch geredirect). Risico: nul — er bestaat geen `/bereken-uw-besparing/iets-anders` waar je naartoe wil. Geen reden om expliciet te zijn, behalve "een lijstje is leesbaarder in git-blame". Claude Code: kies wildcard tenzij er een goede reden tegen is.

**Volgorde van regels:** plaats de nieuwe redirect(s) **vóór** de bestaande `/:path+/` trailing-slash redirect, voor de zekerheid. Next.js evalueert top-to-bottom, dus zo wordt de hostname-rename match eerst gedaan.

---

## Acceptatiecriteria

- [ ] `next.config.ts` bevat een 301-redirect (`permanent: true`) van `/bereken-uw-besparing` naar `/bereken-je-besparing` (en alle 4 subpaden, ofwel expliciet ofwel via wildcard)
- [ ] `npm run build` slaagt zonder errors
- [ ] `npm run lint` geeft geen nieuwe warnings/errors
- [ ] Lokaal getest: `curl -I http://localhost:3000/bereken-uw-besparing/perslucht` retourneert `HTTP/1.1 308` of `301` met `Location: /bereken-je-besparing/perslucht`
- [ ] Lokaal getest: alle 5 oude URLs redirecten correct (overzicht + 4 gas-subpaden)
- [ ] Bestaande trailing-slash redirect blijft werken (test: `/bereken-je-besparing/perslucht/` → `/bereken-je-besparing/perslucht`)
- [ ] Commit-bericht: bv. `feat(redirects): 301 van /bereken-uw-besparing/* naar /bereken-je-besparing/*`
- [ ] PR-beschrijving bevat reminder: na deploy in GSC URL-inspectie doen voor `/bereken-uw-besparing` → bevestig 301-status. Geen indexering opnieuw aanvragen (Google werkt vanzelf bij).

---

## Open vragen voor Claude Code

- **Expliciet vs. wildcard?** Mijn voorkeur is wildcard (`:path*`), maar als je bezwaar hebt om welke reden dan ook (Next.js 16 quirks, bv.) val terug op de 5 expliciete entries.
- **`permanent: true` correct?** Ja — dit zijn definitieve renames, geen tijdelijke. Een 301 (in Vercel-Next combo komt dat soms uit als 308, dat is hetzelfde verhaal voor SEO) signaleert Google om hun cache bij te werken.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router)
- Geen nieuwe dependencies
- Geen wijzigingen elders in de codebase

---

## Out of scope

- Andere route-renames die ooit nog kunnen komen
- `bereken-je-verlies` aanmaken — bestaat niet, geen plan
- Sitemap-update — `sitemap.ts` heeft al de nieuwe URLs, geen wijziging nodig
- GSC actions — niet nodig zodra redirects live zijn

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
Lees docs/briefs/2026-05-18-redirects-bereken-uw-besparing.md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
