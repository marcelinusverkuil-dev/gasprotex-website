# Build-brief — SEO indexering quick-fixes (robots + .env opschoning)

**URL of locatie:** site-breed (config-bestanden)
**Status:** klaar voor bouw
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

De resterende rommel van de inmiddels verwijderde wachtwoordbeveiliging opruimen en de robots-configuratie consolideren naar één bron van waarheid, zodat Googlebot een schoon en eenduidig signaal krijgt nu de site eindelijk publiek bereikbaar is.

---

## Context

**Waarom nu:** Op 2026-05-11 is de wachtwoordbeveiliging volledig uit de code verwijderd (commit `0fa4e28`). Sindsdien staat de site écht open voor Googlebot. Een SEO-scan op 2026-05-17 bevestigt: `site:gasprotex.nl` retourneert 0 resultaten in Google — de site is nog niet geïndexeerd. Dat is normaal voor een site van 6 dagen oud zonder backlinks, maar er staat nog config-rommel in de repo die verwarrend kan zijn voor crawlers (en voor ons).

**Wat er nog rondslingert:**

1. **`.env.local`** heeft nog `PREVIEW_PASSWORD=<waarde>` plus de comment "Tijdelijke wachtwoordbeveiliging pre-launch — verwijder deze regel na de lancering". Code gebruikt deze env-var nergens meer (geverifieerd met grep over hele `src/`). Cosmetisch dus, maar de comment zegt zelf dat 'ie weg moet.

2. **Twee robots-bronnen die elkaar tegenspreken:**
   - `public/robots.txt`: bevat `Disallow: /toegang` — die route bestaat niet meer (deleted in `0fa4e28`).
   - `src/app/robots.ts`: bevat `allow: '/'` zonder enige Disallow.
   - In Next.js wint de statische `public/robots.txt` van de dynamische `src/app/robots.ts`. Resultaat: de dynamische robots.ts wordt nooit geserveerd, maar staat wel in de codebase als dode code.

3. **`.env.example`** heeft nog de `PREVIEW_PASSWORD=` regel met dezelfde "Tijdelijke wachtwoordbeveiliging pre-launch" comment. Misleidend voor toekomstige Marcelinus / nieuwe collaborators.

**Wat NIET in scope is:** Google Search Console aanmelden, sitemap indienen bij GSC, Vercel deployment-protection check, backlink-strategie. Dat zijn taken voor Marcelinus zelf (buiten de codebase) en staan in een aparte to-do.

---

## Scope van deze brief

**In scope:**
- `.env.local` regel `PREVIEW_PASSWORD=…` + bijbehorende comment verwijderen
- `.env.example` regel `PREVIEW_PASSWORD=` + bijbehorende comment verwijderen
- Kies één bron van waarheid voor robots — voorstel: **houd `src/app/robots.ts` (Next.js native, type-safe) en verwijder `public/robots.txt`**. Argumenten staan onder Implementatiedetails.
- Verifieer dat geen enkele andere referentie naar `/toegang` of `PREVIEW_PASSWORD` meer in de codebase staat (grep over `src/`, `public/`, `*.ts`, `*.tsx`, `*.md` config-files)

**Out of scope:**
- `next.config.ts` aanpassen — was al opgeschoond in `0fa4e28`, geen actie nodig
- Google Search Console / Bing Webmaster Tools (Marcelinus zelf)
- Vercel dashboard checken op platform-level password protection (Marcelinus zelf)
- Sitemap.ts wijzigen (al correct, 24 URLs)
- Backlink-werk (LinkedIn, KvK, directories — apart in brief 2026-05-17-backlink-bootstrap.md indien gewenst)

---

## Implementatiedetails

### 1. `.env.local` opschonen

Verwijder regels:

```
# Tijdelijke wachtwoordbeveiliging pre-launch — verwijder deze regel na de lancering
PREVIEW_PASSWORD=<waarde>
```

**Let op:** `.env.local` staat in `.gitignore` en wordt niet gecommit. Marcelinus moet deze wijziging ook in de **Vercel project environment variables** doorvoeren (dashboard → Settings → Environment Variables) om consistentie te houden. Claude Code: zet dit als reminder in de PR-beschrijving, voer het zelf niet uit (geen Vercel-toegang).

### 2. `.env.example` opschonen

Verwijder regels:

```
# Tijdelijke wachtwoordbeveiliging pre-launch
PREVIEW_PASSWORD=
```

Dit bestand wordt wél gecommit, dus deze wijziging is permanent.

### 3. Robots-bron consolideren

**Voorgestelde keuze:** behoud `src/app/robots.ts`, verwijder `public/robots.txt`.

**Argumenten:**
- Next.js App Router-conventie — `src/app/robots.ts` is de moderne, idiomatische manier
- Type-safe via `MetadataRoute.Robots`
- DRY: één bestand om in de gaten te houden bij toekomstige wijzigingen
- De statische `public/robots.txt` bevat een stale `Disallow: /toegang` die we sowieso moeten weghalen — opheffen is netter dan een lege/herwerkte file laten staan

**Acties:**
- Verwijder `public/robots.txt`
- Verifieer dat `src/app/robots.ts` na een `next build` correct wordt geserveerd op `https://gasprotex.nl/robots.txt` (lokaal testen met `npm run build && npm run start`)
- Inhoud van `src/app/robots.ts` blijft zoals nu (allow `/`, sitemap-referentie) — geen wijziging nodig

**Alternatief (als je toch `public/robots.txt` wilt houden):** verwijder dan `src/app/robots.ts` en haal `Disallow: /toegang` uit de statische file. Maar dat is minder elegant. Doe deze route alleen als er een goede reden is die ik niet zie.

### 4. Sweep voor stale referenties

Grep over de hele codebase voor:

```
PREVIEW_PASSWORD
/toegang
toegang
checkPassword
```

**Verwachte vondsten (allemaal harmless, niet aanpassen):**
- `src/app/(marketing)/diensten/lekdetectie-abonnement/page.tsx` regel ~76 — gebruikt "toegang" in copy, niet route-gerelateerd
- `src/app/(marketing)/privacy/page.tsx` regel ~58 — copy over portaal-toegang
- `src/app/page.tsx` regel ~223, ~262 — copy
- `src/lib/sectoren-data.ts` regel ~35 — copy

Als je iets onverwachts vindt (echte route-referentie, env-check, redirect), meld het en wacht op input voor je iets verwijdert.

---

## Acceptatiecriteria

- [ ] `.env.local` bevat geen `PREVIEW_PASSWORD` regel meer
- [ ] `.env.example` bevat geen `PREVIEW_PASSWORD` regel meer
- [ ] `public/robots.txt` is verwijderd (of: `src/app/robots.ts` is verwijderd, één van beide)
- [ ] `npm run build` slaagt zonder errors
- [ ] `npm run lint` geeft geen nieuwe warnings/errors
- [ ] Lokaal getest: `curl http://localhost:3000/robots.txt` geeft de verwachte content (User-agent: *, Allow: /, Sitemap-referentie)
- [ ] Geen enkele route-referentie naar `/toegang` meer in code (alleen copy-strings in pagina-content mag blijven)
- [ ] Git-diff is klein en gefocust — alleen de hierboven genoemde bestanden gewijzigd
- [ ] Commit-bericht: bv. `chore: opschoning stale PREVIEW_PASSWORD en robots-consolidatie naar src/app/robots.ts`

---

## Open vragen voor Claude Code

- **Welke robots-bron wil ik écht behouden?** — Mijn voorstel hierboven is `src/app/robots.ts`. Als je tijdens implementatie ontdekt dat dat onverwachte side-effects heeft (bv. de Next.js versie serveert het niet correct), val terug op het alternatief (statische `public/robots.txt`, opgeschoond) en meld het.
- **Moet er nog een `<link rel="canonical">` site-breed?** — Per-page canonical staat al in metadata van elke page.tsx. Vermoedelijk niet nodig om iets toe te voegen. Niet aanpassen tenzij je iets vreemds vindt.

---

## Techniek-eisen

- Framework: Next.js 16 (App Router) — let op: deze versie wijkt af, raadpleeg `node_modules/next/dist/docs/` indien nodig
- Styling: nvt
- Formulieren: nvt
- E-mail: nvt
- Database/auth: nvt

Extra eisen:
- Geen nieuwe dependencies
- Geen wijzigingen aan `next.config.ts` (was al opgeschoond op 11 mei)
- `src/app/sitemap.ts` niet aanraken

---

## Out of scope

- Google Search Console aanmelden + sitemap indienen → Marcelinus zelf, deze week
- Vercel deployment protection checken in dashboard → Marcelinus zelf
- Bing Webmaster Tools setup → Marcelinus zelf
- Backlink-strategie (LinkedIn, KvK, branchedirectories) → mogelijk aparte brief
- AI-crawler-specifieke robots-regels (GPTBot, ClaudeBot, etc.) → apart te beslissen, niet nu
- Service-schema, FAQPage-schema, Article-schema → al benoemd in brief `2026-05-17-jsonld-organization-breadcrumb.md`

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
Lees docs/briefs/2026-05-17-seo-indexering-quickfixes.md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
