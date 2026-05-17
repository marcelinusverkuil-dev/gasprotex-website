# Build-brief — Backlink-bootstrap (LinkedIn, KvK, vakbladen, directories)

**URL of locatie:** extern (LinkedIn, KvK, vakbladen) + kleine code-update in `src/lib/schema.ts`
**Status:** klaar voor uitvoering (grotendeels door Marcelinus zelf)
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)

---

## Doel in één zin

Eerste autoritaire backlinks opbouwen naar `gasprotex.nl` zodat Google de site sneller ontdekt, beter ranked, en de E-E-A-T-signalen (Expertise-Experience-Authoritativeness-Trust) opbouwt die nodig zijn om uit de "Gevonden - momenteel niet geïndexeerd" categorie te komen voor de resterende pagina's.

---

## Context

**Wat we weten (17 mei 2026):**

- Site is 6 dagen écht publiek (sinds wachtwoordbeveiliging verwijderd op 11 mei).
- Google heeft 12 van 24 pagina's geïndexeerd, 15 pagina's wachten op autoriteit-signalen.
- GSC toont geen externe verwijzende pagina's — alleen `www.gasprotex.nl` (intern) en `gasprotex-website.vercel.app` (preview, wordt opgelost in canonicalisatie-brief).
- Marcelinus is gevonden als entiteit op LinkedIn (post 7259492272239529985), maar zijn profiel verwijst nog niet naar `gasprotex.nl`.
- Branchezoekopdrachten tonen vaak Hitma, Sorama, Maintenance Benelux, Solids Processing als domeinen die er toe doen — daar moet GasProtex zichtbaar worden.

**Waarom backlinks vóór content-uitbreiding:**

Een nieuwe site zonder backlinks heeft het probleem dat Google geen "vertrouwen" heeft om diep te crawlen. Pagina's blijven in "Gevonden - niet geïndexeerd" hangen. Drie autoritaire backlinks van branche-relevante domeinen zijn vaak een betere indexerings-versneller dan tien nieuwe blog-artikelen.

---

## Strategie: drie sporen, in volgorde van effort/impact

### Spoor 1 — Owned media (LinkedIn) — DEZE WEEK

**Effort:** 1-2 uur · **Impact:** Hoog · **Wie:** Marcelinus zelf

**Acties:**

1. **LinkedIn-bedrijfspagina aanmaken** voor GasProtex
   - Pagina-type: Showcase Page (als onderdeel van persoonlijke account) of Company Page (zelfstandig)
   - **Voorkeur: Company Page** — geeft een eigen LinkedIn-URL die je in schema.org's `sameAs` kunt zetten
   - Naam: `GasProtex`
   - Branche: "Industrial Machinery Manufacturing" of "Environmental Services"
   - Website-URL: `https://gasprotex.nl`
   - Beschrijving (max 2.000 tekens): zie copy-blok hieronder

2. **Persoonlijk profiel Marcelinus updaten**
   - Functie: "Founder & Owner @ GasProtex" met einddatum bij Hitma (als die er nog stond)
   - Website-link: `https://gasprotex.nl`
   - Headline: bv. `Founder @ GasProtex | Akoestische gaslekdetectie voor de NL-industrie | ATEX | ISO 11011`

3. **Launch-post** plaatsen (zie copy-blok)
   - Tag relevante NL-vakcommunities: #maintenance #perslucht #industrie #safety #ATEX
   - Vraag 5-10 vakgenoten/oud-collega's om te reageren of delen (kost je een appje)

**Copy-blok — LinkedIn bedrijfsbeschrijving:**

```
GasProtex levert akoestische gaslekdetectie als dienst voor de Nederlandse industrie en
voedingsmiddelensector. Met ultrasone camera-technologie sporen we lekken op tot 10x
sneller dan met traditionele methoden — non-invasief, ATEX-gecertificeerd, zonder
productiestilstand.

Wat we doen:
• Akoestische gas- en persluchtlekdetectie ter plaatse
• Quickscan + uitgebreide audit (volgens ISO 11011)
• Klantportaal met lekkaart, kostenberekening en CO₂-impact per lek
• Compliance-ondersteuning: BRZO, F-gassen, EU-Methaanverordening

Voor wie:
Voedingsmiddelenproducenten, (petro)chemie, energie, brouwerijen, koeltechniek en alle
industriële installaties met perslucht- of gasleidingen.

Plan een kennismakingsgesprek op gasprotex.nl
```

**Copy-blok — LinkedIn launch-post (Marcelinus persoonlijk account):**

```
Vandaag een nieuwe stap: GasProtex is officieel live. 🟠

Na 10+ jaar in gaslekdetectie zag ik dezelfde drie problemen telkens terugkomen:
1. Stationaire detectoren missen lekken die niet onder hun "neus" zitten.
2. Audits gebeuren één keer per jaar — daartussen lekt er duizenden euro's
   aan perslucht en kilo's CO₂ weg.
3. Een lekrapport in een Excel-bestand verdwijnt in een lade.

GasProtex pakt die drie aan met één dienst:
→ Akoestische camera-technologie die op 200 meter afstand een lek hoort.
→ Audit + abonnement i.p.v. eenmalige rapporten.
→ Klantportaal waar elk lek een eigen euro- en CO₂-cijfer krijgt — zodat je
  weet wat te repareren en wat eerst.

Nieuwsgierig? gasprotex.nl

#gaslekdetectie #perslucht #industrie #ATEX #ISO11011 #onderhoud #CO2
```

**Acceptatie:**
- [ ] LinkedIn-bedrijfspagina staat live met website-link naar `gasprotex.nl`
- [ ] Persoonlijk LinkedIn-profiel toont GasProtex als huidige werkgever met website-link
- [ ] Launch-post staat live en is gedeeld door minimaal 3 vakgenoten

---

### Spoor 2 — Bedrijfsregisters & directories — WEEK 2

**Effort:** 2-3 uur · **Impact:** Middel · **Wie:** Marcelinus zelf

**Volgorde van prioriteit (eerst de hoge-autoriteit registers):**

1. **KvK Handelsregister** — controleer dat handelsnaam `GasProtex`, KvK-nummer, en website-URL `gasprotex.nl` correct staan vermeld. KvK is een `gov.nl`-equivalent qua autoriteit; één link daarvandaan = serieuze trust.

2. **Google Business Profile** (business.google.com)
   - Categorie: "Industrial equipment supplier" of "Safety equipment supplier"
   - Servicegebied: heel Nederland
   - Website: `https://gasprotex.nl`
   - Telefoonnummer: jouw 06-nummer of zakelijk vast nummer
   - Foto's: logo + 2-3 inspectiefoto's (akoestische camera in actie)
   - **Niet:** een fysiek adres tonen als je geen kantoor hebt waar klanten komen. Zonder fysiek adres → "Servicegebied"-modus.

3. **Bing Places for Business** — equivalent van GBP, voor Bing/DuckDuckGo zichtbaarheid

4. **NL B2B-directories** (kies 3-4, niet allemaal):
   - **Bedrijvenpagina.nl** — algemeen NL bedrijfsregister
   - **Bizzy.org** — combineert KvK + functionarissen + website (zag je TotalProtex hier)
   - **Telefoonboek.nl Zakelijk** — oud, maar nog steeds gratis backlink
   - **Industry.nl** of **Allebedrijven.nl** — algemene B2B directories

5. **Branche-specifieke registers** (kies 1-2):
   - **VTN (Veiligheidstechniek Nederland)** — als lid worden financieel haalbaar is
   - **FME** — koepelorganisatie technologische industrie (lid worden = directorylinking)
   - **Maintenance Benelux Buyers' Guide** — relevante doelgroep

**Out of scope:** lidmaatschappen met hoge kosten (alleen waar je nu al lid bent of plannen hebt te worden).

**Acceptatie:**
- [ ] Minimaal 3 autoritaire registers (KvK + GBP + 1 directory) tonen `gasprotex.nl`
- [ ] Google Business Profile is geverifieerd (postcard of telefoon)

---

### Spoor 3 — Earned media (vakbladen + persbericht) — WEEK 3-4

**Effort:** 4-8 uur (per artikel) · **Impact:** Hoog (maar kost tijd) · **Wie:** Marcelinus zelf + eventueel content-ondersteuning

**Doelvakbladen (Nederlandstalig, B2B-industrie):**

| Vakblad | URL | Type content dat wordt geplaatst | Contactpersoon zoeken via |
|---|---|---|---|
| Maintenance Benelux | maintenancebenelux.nl | Cases + experts-artikelen | Hoofdredactie + LinkedIn |
| Solids Processing | solidsprocessing.nl | Innovaties + nieuwe technieken | "Suggestie voor artikel" formulier |
| Fluids Processing | fluidsprocessing.nl | Persberichten + cases | Vergelijkbaar |
| Engineers Online | engineersonline.nl | Productnieuws + cases | Email redactie |
| Industrie Utility | industrie-utility.nl | Persluchtoptimalisatie content | Email redactie |

**Twee soorten content om aan te bieden:**

1. **Persbericht launch** (kort, 300 woorden) — "GasProtex lanceert akoestische lekdetectie als abonnement voor NL-industrie"
   - Hook: ROI / 10x sneller / klantportaal innovation
   - Citeerbare quote van Marcelinus
   - Foto: akoestische camera in actie
   - Boilerplate met `https://gasprotex.nl` link

2. **Expert-artikel** (700-1.200 woorden) — bv. "Waarom stationaire gasdetectie 80% van de lekken mist"
   - Onderbouwing met data uit jouw eigen audits
   - Geen verkoopverhaal, wel positionering als deskundige
   - Auteurslink naar Marcelinus + GasProtex

**Acceptatie:**
- [ ] Minimaal 2 vakbladen hebben een artikel of bericht geplaatst met link naar `gasprotex.nl`
- [ ] LinkedIn-amplificatie van elk artikel (post met link)

---

## Code-kant (Claude Code, klein)

Wat Claude Code doet ná spoor 1:

### Update `src/lib/schema.ts` — `sameAs` invullen

Zodra de LinkedIn-bedrijfspagina live is, voeg de URL toe aan het Organization-schema in `src/lib/schema.ts` (dat bestand wordt aangemaakt in brief `2026-05-17-jsonld-organization-breadcrumb.md` — wacht tot die brief is uitgevoerd, daarna deze update).

```ts
sameAs: [
  'https://www.linkedin.com/company/gasprotex/',
  // Eventueel later: KvK-URL, GBP-URL, persoonlijke LinkedIn van oprichter
],
```

**Reden:** AI-systemen (ChatGPT, Perplexity, Google AI Mode) gebruiken `sameAs` om entiteiten te verifiëren. Een lege array = "deze organisatie kan ik nergens anders bevestigen". Een gevulde array met LinkedIn-link = bevestiging.

### Eventueel later: `Person`-schema voor Marcelinus

Niet nu, maar zodra LinkedIn live is en je persoonlijke profiel ververst, kan Claude Code een `Person`-schema toevoegen aan `/over-ons` met `sameAs` naar zijn LinkedIn — staat al benoemd in brief `2026-05-17-jsonld-organization-breadcrumb.md` als out-of-scope-item.

---

## Acceptatiecriteria (totale brief)

- [ ] LinkedIn-bedrijfspagina + post live, persoonlijk profiel updated
- [ ] Minimaal 3 autoritaire backlinks naar `gasprotex.nl` aanwezig: KvK + Google Business Profile + 1 directory
- [ ] Minimaal 2 vakbladen hebben gepubliceerd met link
- [ ] `sameAs` in Organization-schema bevat minstens 1 URL (LinkedIn-company)
- [ ] Na ~2 weken: opnieuw GSC checken → "Gevonden - niet geïndexeerd" zou moeten dalen, totale geïndexeerde pagina's stijgen

---

## Open vragen voor Marcelinus

- **LinkedIn Showcase Page vs. Company Page?** — Voorkeur: Company Page (eigen URL, eigen feed, schema.org `sameAs` werkt beter). Showcase Page hangt onder een hoofd-account en is meer voor sub-merken.
- **Wil je een fysiek adres tonen in Google Business Profile?** — Zonder fysiek adres → Servicegebied-modus, dat is voor B2B-dienstverlening prima.
- **Tijd voor expert-artikel?** — Spoor 3 kost het meeste tijd. Als je er nu geen tijd voor hebt: doe alleen spoor 1 + 2, dat is al een grote sprong voorwaarts. Spoor 3 kan over 1-2 maanden.

---

## Out of scope

- **Betaalde backlinks of "guest posting" services** — Google detecteert die patroon en kan straffen
- **Reciprocal-linking netwerken** — zelfde reden
- **Buitenlandse directories** — focus nu op NL, internationaal komt later
- **Press release distribution services** (PRWeb e.d.) — lage kwaliteit backlinks, niet relevant voor NL B2B
- **Influencer marketing** — geen match met B2B-industrie
- **Andere code-wijzigingen** — alleen `sameAs` invullen, rest staat in andere briefs

---

## Hand-off

**Voor Marcelinus (handmatig):** spoor 1, 2, en 3 hierboven.

**Voor Claude Code (na spoor 1 + JsonLd-brief is verwerkt):**

```
LinkedIn-bedrijfspagina staat live op https://www.linkedin.com/company/gasprotex/.
Update src/lib/schema.ts: voeg deze URL toe aan sameAs in getOrganizationSchema().
Geen andere wijzigingen.
```
