# Workflow: Claude AI ↔ Claude Code

Dit document beschrijft hoe Claude AI (Cowork) en Claude Code samenwerken in dit project. De rode draad: **één gedeelde projectmap, één plek voor briefs, vaste slash commands**.

---

## De rolverdeling

| | Claude AI (Cowork) | Claude Code |
|---|---|---|
| **Waarvoor** | Sparren, onderzoek, briefs schrijven, copy, content | Bouwen, refactoren, testen, deploys |
| **Werkt in** | Deze map (geselecteerd via Cowork folder picker) | Deze map (`cd` in terminal) |
| **Schrijft naar** | `docs/briefs/`, `docs/`, copy-bestanden | Code in `src/`, `public/`, configs |
| **Leest** | CLAUDE.md, AGENTS.md, design.md, alles in docs/ | Idem + alle code |

Beide kanten lezen en schrijven naar **dezelfde map** (`C:\Users\marce\Projects\gasprotex-website`). Daarom is er geen download- of kopieerstap nodig: wat de één schrijft, ziet de ander direct.

---

## De standaardflow

```
┌─────────────────┐    1. spar      ┌────────────────────────┐
│  Claude AI      │ ──────────────► │  schrijft brief in     │
│  (Cowork)       │                 │  docs/briefs/<naam>.md │
└─────────────────┘                 └────────────────────────┘
                                                │
                                                ▼
                                    2. /review-brief in Claude Code
                                                │
                                                ▼
                                    3. brief bijschaven indien nodig
                                                │
                                                ▼
                                    4. /buildbrief in Claude Code
                                                │
                                          plan mode → akkoord → bouwen
                                                │
                                                ▼
                                    5. /changelog (logt naar CHANGELOG.md)
                                                │
                                                ▼
                                    6. volgende sparring in Claude AI
                                       (leest CHANGELOG.md voor context)
```

---

## Slash commands (in Claude Code)

| Command | Wat het doet |
|---|---|
| `/buildbrief [pad]` | Leest een brief, schakelt naar plan mode, wacht op akkoord, bouwt |
| `/spar [onderwerp]` | Sparringsmodus — geen code, alleen meedenken en vragen stellen |
| `/review-brief [pad]` | Reviewt een brief op volledigheid voor je gaat bouwen |
| `/changelog` | Schrijft een korte regel naar CHANGELOG.md over deze sessie |

Definities staan in `.claude/commands/`. Aanpassen kan: pas het md-bestand aan en de slash command verandert mee.

---

## Briefs

Locatie: `docs/briefs/`

- Template: `docs/briefs/_template.md`
- Naamgeving: `YYYY-MM-DD-korte-titel.md`
- Concept (work-in-progress): `_concept-<titel>.md` (start met underscore)

---

## MCP servers

Geconfigureerd in `.mcp.json`:

- **github** — issue- en PR-toegang vanuit Claude Code. Vereist `GITHUB_TOKEN` als environment variable (fine-grained PAT, zie SETUP-NOTES.md).

Web search/fetch is al ingebouwd in Claude Code (geen MCP nodig).

Toekomstige toevoegingen die zinvol zijn voor dit project:
- **Supabase MCP** — direct queries en migraties tegen je db
- **Vercel MCP** — deploy status en preview URLs
- **Stripe MCP** — testbetalingen, productdata

---

## Hoe je een sessie begint

**In Claude AI (Cowork):**
1. Open Cowork, selecteer de map `C:\Users\marce\Projects\gasprotex-website` (eenmalig, daarna onthouden)
2. Start gesprek: "Lees CHANGELOG.md voor context. We gaan sparren over [onderwerp]."

**In Claude Code:**
1. Terminal openen in `C:\Users\marce\Projects\gasprotex-website`
2. `claude` (start Claude Code in deze map — leest automatisch CLAUDE.md + .mcp.json)
3. `/buildbrief docs/briefs/<bestand>.md` of `/spar <onderwerp>`

---

## Vuistregels om de naad dicht te houden

1. **Niets in chat dat ook in een bestand kan.** Sparringsuitkomsten → brief. Implementatiebeslissingen → CHANGELOG.md.
2. **Claude AI schrijft, Claude Code bouwt.** Laat Claude AI niet code-snippets in chat plakken — laat ze in de brief landen.
3. **Plan mode in Claude Code is verplicht voor briefs >1 bestand.** Voorkomt dat 'ie iets bouwt wat jij niet bedoelde.
4. **CHANGELOG.md is je geheugen.** Elke sessie afsluiten met `/changelog`, elke sessie openen met een blik daarop.
