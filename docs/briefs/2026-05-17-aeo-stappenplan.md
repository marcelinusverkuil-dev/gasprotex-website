# Stappenplan AEO-vindbaarheid GasProtex

**Status:** levend document
**Datum:** mei 2026
**Auteur:** Marcelinus (via Claude AI sparring)
**Vervolgmeting:** elke 4 weken (zie Fase 5)

---

## Vertrekpunt

Baseline-meting van 17 mei 2026: GasProtex werd in **1 van 8 testen** genoemd door grote AI-zoeksystemen (ChatGPT, Google AI Mode, Claude.ai). Die ene vermelding was vaag ("actief in gasveiligheid"). Bij Google AI Mode en Claude.ai blijft GasProtex volledig onzichtbaar, ook bij directe vragen over leveranciers van akoestische gaslekdetectie in Nederland.

Concurrenten die in elke engine bij elke query opduiken: **Hitma Gasdetectie** (Distran-distributeur), **Sorama**, **UE Systems Benelux**, **BaSystemen** (SONAPHONE), **MSA Safety** (Observer-i), **Leak Control Benelux**, **Havé-Digitap**, **Hatech Gasdetectietechniek**, **7Solutions in Gasdetectie**.

---

## Doel (12 maanden)

Tegen mei 2027:
1. GasProtex wordt in **5 van 8** baseline-testen genoemd (van 1/8 naar 5/8)
2. Bij de query "leveranciers van akoestische gaslekdetectie in Nederland" verschijnt GasProtex in de top-7 genoemde bedrijven op alle drie engines
3. Bij de query "alternatieven voor Distran" wordt GasProtex genoemd als service-positionering — niet als concurrent van het Distran-apparaat zelf, maar als alternatief afnamemodel ("inhuren in plaats van kopen")

---

## Waarom alleen schema niet genoeg is

AI-systemen citeren entiteiten die ze (a) machineleesbaar herkennen en (b) elders bevestigd zien. Punt (a) los je op met schema markup; punt (b) vereist externe signalen: LinkedIn, vakbladen, branchedirectories, Wikidata. Zonder die externe signalen kan een AI je site wel lezen, maar je niet als legitieme speler in een lijstvraag opnemen. Het stappenplan adresseert beide.

---

## De zes fases

Volgorde is op afhankelijkheid en impact. Fase 0-2 zijn jouw werk binnen de website. Fase 3 is werk buiten de website (KvK-afhankelijk). Fase 4-5 lopen continu naast de rest.

---

### Fase 0 — Fundament (mei 2026, lopend)

**Doel:** basis-entiteit machineleesbaar maken, externe registraties starten.

**Deliverables:**
- ✅ Baseline-meting AEO uitgevoerd (17 mei 2026 — in chat)
- 🔨 **Brief `2026-05-17-jsonld-organization-breadcrumb.md`** uitvoeren via Claude Code
- ⏳ KvK-inschrijving afronden _(extern, geen Claude-werk)_
- ⏳ LinkedIn-bedrijfspagina aanmaken zodra KvK rond is

**Volgorde:** schema-brief kan direct, KvK + LinkedIn-pagina parallel. Beide moeten af zijn voor Fase 3 kan starten.

**Blokkeert:** Fase 3 (externe entiteitsautoriteit)

---

### Fase 1 — Content-baseline (juni 2026)

**Doel:** voor elke pagina antwoorden klaarzetten die AI-systemen letterlijk kunnen citeren. AI's citeren content met definitieve antwoorden van 40-60 woorden bovenaan een sectie, gevolgd door uitleg.

**Deliverables (briefs te schrijven):**
- **Brief `2026-05-xx-faq-homepage.md`** — 5-7 FAQ-vragen onderaan homepage. Vragen die concurrenten niet beantwoorden: "is akoestische gaslekdetectie veilig in productie?", "wat kost gaslekinspectie per jaar?", "verschil tussen aanschaf en inhuren van akoestische camera?"
- **Brief `2026-05-xx-faq-pagina-centraal.md`** — een aparte `/veelgestelde-vragen` pagina met 20-25 vragen, gegroepeerd per thema (techniek, kosten, ATEX, sectoren).
- **Brief `2026-05-xx-kennisbank-p8.md`** — het ontbrekende artikel uit de P1-P11 reeks (uit memory: P8 ontbreekt nog).
- **Brief `2026-05-xx-leveranciers-pagina.md`** — een pagina die de query "welke leveranciers van akoestische gaslekdetectie zijn er in NL?" beantwoordt. Hier positioneer je GasProtex expliciet binnen het landschap, zonder concurrenten bij naam te noemen (zie memory: concurrenten niet in publieke content).

**Voorwaarde voor elke FAQ-pagina:** antwoorden zijn 40-60 woorden, beginnen met de directe conclusie, vermelden cijfers waar mogelijk, eindigen met een verwijzing naar dieper materiaal.

**Blokkeert:** Fase 2 (FAQPage-schema heeft FAQ-content nodig)

---

### Fase 2 — Schema-uitbreiding (juni-juli 2026)

**Doel:** elke pagina krijgt het schema dat erbij past, met @id-graph terugkoppelend naar Organization.

**Deliverables (briefs te schrijven, na Fase 1):**
- **Brief `2026-06-xx-service-schema.md`** — Service-schema op `/diensten` en `/diensten/lekdetectie-abonnement`. Inclusief `provider` (terugverwijzend naar Organization @id), `areaServed`, `serviceType`, `offers`.
- **Brief `2026-06-xx-faqpage-schema.md`** — FAQPage-schema overal waar FAQ-secties staan (uit Fase 1).
- **Brief `2026-07-xx-article-schema-kennisbank.md`** — Article-schema op elk kennisbank-artikel. Inclusief `author` (Person-schema voor Marcelinus), `datePublished`, `dateModified`, `headline`, `articleSection`.
- **Brief `2026-07-xx-person-schema-marcelinus.md`** — Person-schema voor jou als oprichter, met `jobTitle`, `worksFor` (Organization @id), `knowsAbout`, en zodra LinkedIn live is: `sameAs`.

**Volgorde:** Service-schema en FAQPage-schema parallel, Article-schema daarna omdat het Person-schema vereist.

---

### Fase 3 — Entiteitsautoriteit extern (augustus-oktober 2026)

**Doel:** AI-systemen zien GasProtex bevestigd op meerdere onafhankelijke plekken. Dit is de zwaarste fase qua tijd — niet codewerk, maar geduldig pluggen.

**Deliverables (geen briefs, wel concrete acties):**

1. **LinkedIn-bedrijfspagina volledig invullen** zodra KvK rond is. Beschrijving = letterlijk de Organization-schema-description. Specialiteiten = letterlijk de Organization-keywords. Wekelijks een post de eerste maand om indexering te triggeren.
2. **Toevoegen aan `sameAs` array in `lib/schema.ts`:** LinkedIn-bedrijfspagina URL, KvK-uittreksel-URL, Google Business Profile URL.
3. **Google Business Profile** volledig invullen (dienstgebied, foto's, diensten, openingstijden).
4. **Vakblad-vermeldingen** — minimaal 2 publicaties: één gastartikel in een NL-industrieel vakblad (bv. Industrial Health & Safety, Petrochem, Aandrijftechniek), één persbericht bij oprichting/eerste klant.
5. **Branchedirectories** — vermeldingen in: NEN, FME, KvK-bedrijfsdatabase, MSDS-relevante lijsten, ISO 11011-gerelateerde directories. Mikt op consistente NAP-data (Naam, Adres, Phone) overal.
6. **Wikidata-entry voor GasProtex** — pas opzetten wanneer er minimaal 3 onafhankelijke externe bronnen zijn (vakblad, branche-directory, eigen site). Eerder geweigerd.
7. **Backlink-bootstrap** _(volgens memory: on hold tot KvK rond is — check status bij elke sessie)_

**Voorwaarde voor elke vermelding:** identieke schrijfwijze van "GasProtex", identieke adres- en contactinformatie. Inconsistentie ondermijnt entiteitsherkenning.

**Blokkeert niet:** Fase 4-5 kunnen parallel lopen.

---

### Fase 4 — Concurrent-content & positionering (september-november 2026)

**Doel:** content schrijven die specifiek de queries beantwoordt waar concurrenten nu de top vullen. Concurrenten worden in deze content niet bij naam genoemd (zie memory).

**Deliverables (briefs te schrijven):**
- **Brief `2026-09-xx-wanneer-service-vs-apparatuur.md`** — pagina die uitlegt wanneer service-inhuur logischer is dan apparatuurkoop. Mikt op de query "alternatieven voor Distran" en "verschil tussen kopen en inhuren akoestische camera".
- **Brief `2026-09-xx-akoestisch-vs-andere-methoden.md`** — vergelijkende uitleg akoestisch vs OGI vs sniffers vs laser. Mikt op "verschil tussen lekdetectie-methoden".
- **Brief `2026-10-xx-use-cases-per-sector.md`** — concrete cases per sector aanvullen op `/cases` (uit memory: Cases ontbreekt nog).
- **Brief `2026-10-xx-quickscan-landingspagina.md`** — landingspagina specifiek voor de query "gaslekinspectie aanvragen" en variaties. Mikt op directe-conversievragen.

**Strategie:** elke pagina mikt op één specifieke query waar GasProtex nu absent is. Per pagina meting volgens Fase 5.

---

### Fase 5 — Meting & iteratie (continu, vanaf juni 2026)

**Doel:** weten of het werkt. Zonder herhaalde meting is dit hele plan blind.

**Maandelijkse cadens:**
- Eerste week van de maand: herhaling van de 8 baseline-testen (3 queries × 3 engines, plus query 3 op Claude.ai).
- Wijzigingen per engine en query bijhouden in `gasprotex-website/docs/aeo-metingen.md` (apart bestand, nog te maken).
- Google Search Console: filter op "AI" / "ChatGPT" referrers, monitor CTR en impressies (memory: GSC is gezaghebbend voor SEO-indexering, niet WebSearch).

**Per gevonden gap:** brief schrijven in `docs/briefs/`.

**Quarterly (per kwartaal):**
- Heroverweging stappenplan: kloppen de fase-aannames nog?
- Eventueel betaalde tool: HubSpot AEO Grader ($50/maand) — alleen overwegen na maand 6 als er nog grote gaps zijn.

---

## Volgordeschema (kritieke pad)

```
Fase 0 (mei 2026)         ────────────► [Brief 17 mei schema-bouw]
   │                                            │
   │ KvK rond ─────► LinkedIn-pagina ───┐       │
   │                                    │       ▼
Fase 1 (juni)        ─────► [Briefs FAQ + leveranciers-pagina]
   │                                            │
   │                                            ▼
Fase 2 (juni-juli)   ─────► [Briefs Service + FAQPage + Article + Person schema]
   │                                            │
   ▼                                            ▼
Fase 3 (aug-okt)     ◄───  KvK + LinkedIn  ───┘
   externe entiteit-signalen                     
   │
   ▼
Fase 4 (sept-nov)    ─────► concurrent-content
   │
   ▼
Fase 5 (continu vanaf juni)   ─────► maandelijkse hermeting
```

---

## Prioriteit van briefs (volgorde van uitvoering)

1. **2026-05-17-jsonld-organization-breadcrumb.md** _(klaar, in Claude Code)_
2. **FAQ-homepage** — laagste effort, hoogste leesbaarheidswinst voor AI-systemen
3. **FAQ-pagina centraal** — geeft FAQPage-schema iets om aan te haken
4. **Service-schema dienstpagina's** — direct effect op leveranciersvragen
5. **Leveranciers-pagina** — mikt direct op de baseline-query waar je nu absent bent
6. **Article-schema kennisbank + Person-schema** — voor citatie-autoriteit
7. **Kennisbank P8** — sluit reeks af
8. **Wanneer-service-vs-apparatuur** — mikt op alternatieven-voor-Distran-query
9. **Akoestisch-vs-andere-methoden** — bredere vergelijkingsqueries
10. **Quickscan-landingspagina** — conversie-laag

---

## Wat dit plan **niet** is

- Geen garantie op resultaat. AI-citatie hangt af van factoren buiten je controle (welke bronnen Google/OpenAI/Anthropic indexeren, hoe hun ranking-algoritmes wegen).
- Geen vervanging voor klassieke SEO. AEO is een laag bovenop SEO, niet ervoor in de plaats. Search Console-monitoring blijft de bron voor SEO-indexering.
- Geen technische single-shot. Het werkt alleen als alle fases consequent worden uitgevoerd. Schema zonder content faalt; content zonder externe signalen blijft achter; externe signalen zonder schema worden niet aan de site gekoppeld.

---

## Direct te beslissen

Voordat we Fase 1 starten zijn 2 keuzes nodig:

1. **FAQ-vragen:** wil je dat ik de 25 FAQ-vragen uit het oorspronkelijke AEO-plan letterlijk uitwerk in een aparte sparring-sessie, of pakken we het brief-voor-brief op (per pagina)?
2. **Aparte AEO-metingen-file:** moet `docs/aeo-metingen.md` als bijhoud-bestand er nu al komen (lege opzet) of pas bij eerste hermeting?
