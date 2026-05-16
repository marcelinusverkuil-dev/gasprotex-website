# Build-brief — [Naam pagina/feature]

**URL of locatie:** `/pad/`
**Status:** [concept / in review / klaar voor bouw / gebouwd]
**Datum:** [maand jaar]
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

Wat moet deze pagina/feature bereiken? (Bv. "leads laten een Quickscan aanvragen", "bezoeker begrijpt het verschil tussen onze dienst en stationaire detectie", "afrekenen via Stripe werkt end-to-end".)

---

## SEO (alleen bij publieke pagina's)

**Title tag (max 60 tekens):**

**Meta description (max 155 tekens):**

**H1:**

**Schema:** [Service / FAQPage / Article / Product / nvt]

**Canonical:** https://gasprotex.nl/

**Keywords (natuurlijk verwerken):**
- … (volume per maand) — hoofd
- …
- …

---

## Pagina-structuur / componenten

### Sectie 1 — [Naam]

Layout: [bv. twee kolommen, links tekst, rechts foto]

```
Copy hier letterlijk uittypen zoals 'ie op de pagina komt.
```

Foto/visual: [beschrijving]

CTA: [knoptekst → bestemming]

---

### Sectie 2 — [Naam]

…

---

## Techniek-eisen

- Framework: Next.js 16 (App Router) — let op: deze versie wijkt af, raadpleeg `node_modules/next/dist/docs/` indien nodig
- Styling: Tailwind 4 + shadcn-ui componenten
- Formulieren: react-hook-form + zod
- E-mail: Resend via React Email templates
- Database/auth: Supabase
- Betalen: Stripe (alleen waar van toepassing)

Eventuele extra eisen voor dit onderdeel:
- …

---

## Acceptatiecriteria

- [ ] …
- [ ] …
- [ ] Lighthouse Performance > 90, Accessibility > 95
- [ ] Werkt op mobiel (320px) en desktop (1440px)
- [ ] Geen ESLint-fouten

---

## Out of scope

- …
- …

---

## Open vragen voor Claude Code

Vragen die je tijdens implementatie kunt parkeren in plaats van zelf besluiten:
- …
- …

---

## Hand-off naar Claude Code

Standaard opdracht in Claude Code:

```
/buildbrief docs/briefs/[naam-van-dit-bestand].md
```

Of handmatig:

```
Lees docs/briefs/[naam-van-dit-bestand].md, ga in plan mode,
wacht op mijn akkoord voor je begint te bouwen.
```
