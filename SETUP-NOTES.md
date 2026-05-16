# Setup-notities — Claude AI ↔ Claude Code integratie

Dit document is voor jou (Marcelinus). Hier staat wat er is opgezet en wat je nog zelf moet doen om de Cowork-workflow werkend te krijgen.

## ✅ Wat al klaar staat

### Bestanden die zijn aangemaakt

| Pad | Wat het doet |
|---|---|
| `WORKFLOW.md` | Beschrijft hoe Claude AI en Claude Code samenwerken |
| `CLAUDE.md` | Importeert nu ook WORKFLOW.md |
| `.mcp.json` | GitHub MCP server config voor Claude Code |
| `.claude/commands/buildbrief.md` | Slash command `/buildbrief` |
| `.claude/commands/spar.md` | Slash command `/spar` |
| `.claude/commands/review-brief.md` | Slash command `/review-brief` |
| `.claude/commands/changelog.md` | Slash command `/changelog` |
| `docs/briefs/_template.md` | Template voor nieuwe build-briefs |
| `docs/briefs/README.md` | Uitleg van de briefs-workflow |

### Bestaande bestanden waar niet aan gerommeld is

- `AGENTS.md`, `design.md`, `README.md` — allemaal intact gelaten.

---

## 🔧 Wat jij nog moet doen

### 1. GitHub Personal Access Token aanmaken (5 min) — alleen als je de GitHub MCP server wilt gebruiken

De GitHub MCP server heeft een token nodig om bij je repo te kunnen.

> **Belangrijk:** dit moet een **aparte, fine-grained PAT** zijn — niet dezelfde als je gh CLI gebruikt. gh CLI heeft sinds 16 mei 2026 zijn eigen OAuth-token in Windows Credential Manager (`gho_...`).

1. Ga naar https://github.com/settings/tokens?type=beta
2. "Generate new token" → "Fine-grained personal access token"
3. Naam: `claude-code-gasprotex-mcp`
4. Expiration: 90 dagen (en dan opnieuw maken)
5. Repository access: alleen je `gasprotex-website` repo (en eventueel `gasprotex-portal`)
6. Permissions die je aan moet zetten:
   - **Contents**: Read and write
   - **Issues**: Read and write
   - **Pull requests**: Read and write
   - **Metadata**: Read (verplicht)
7. Genereer en kopieer de token

### 2. Token opslaan als environment variable

In **PowerShell** op Windows, eenmalig instellen:

```powershell
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'github_pat_jouw_token_hier', 'User')
```

Daarna PowerShell sluiten en opnieuw openen zodat de variabele actief wordt. Test met:

```powershell
echo $env:GITHUB_TOKEN
```

### 3. Claude Code starten in deze map

```powershell
cd C:\Users\marce\Projects\gasprotex-website
claude
```

Eerste keer zal Claude Code je vragen of `.mcp.json` mag worden geladen — kies "yes, project". Daarna laadt 'ie de GitHub MCP automatisch elke sessie.

Controleer dat het werkt:

```
/mcp
```

Je zou `github` als verbonden moeten zien.

### 4. Slash commands testen

Probeer:

```
/spar moet de Quickscan-pagina voor onze Diensten een aparte URL krijgen?
```

En:

```
/review-brief docs/briefs/<een-bestaande-brief>.md
```

---

## 🎯 De nieuwe workflow in praktijk

### Voor een nieuw onderdeel

**In Claude AI (Cowork) — sparren + brief:**
```
"Laten we sparren over een case-studies pagina. Daarna schrijf je een brief
naar docs/briefs/2026-05-16-case-studies.md volgens _template.md."
```

**In Claude Code — review + bouwen:**
```
/review-brief docs/briefs/2026-05-16-case-studies.md
```
Brief bijschaven indien nodig (kan in Cowork óf Claude Code).

```
/buildbrief docs/briefs/2026-05-16-case-studies.md
```
Plan mode → jij geeft akkoord → 'ie bouwt.

**Na afloop:**
```
/changelog
```
Schrijft een regel naar CHANGELOG.md.

### Voor de volgende sessie

In Claude AI begin je met:
```
"Lees CHANGELOG.md voor context. We gaan verder met X."
```

Daarmee weet Cowork wat er al gebouwd is en hoef je niets te herhalen.

---

## 🔮 Wanneer je verder wil opschalen

Mogelijke uitbreidingen op volgorde van impact:

1. **Hooks** — automatisch lint draaien na elke file save, of automatisch CHANGELOG.md updaten na een commit. Zie `.claude/settings.json` als je dit wil opzetten.
2. **Supabase MCP** — directe db-queries vanuit Claude Code, handig voor migrations en seed data.
3. **Vercel MCP** — deploy status en preview URLs zonder browser.
4. **Sub-agents** — pas in `.claude/agents/` aan voor gespecialiseerd werk (bv. een SEO-reviewer agent).

Zeg het maar wanneer je hier verder mee wil — dan zet ik 'm op.

---

## ❓ Vragen die ik vooruit zie

**"Kan Claude AI nu vanzelf code schrijven?"**
Nee, en dat is bewust. Claude AI schrijft briefs en copy in deze map; Claude Code bouwt op basis van die briefs. Twee verschillende tools, één gedeeld werkterrein.

**"Wat als ik een brief direct in Claude Code wil schrijven?"**
Kan prima. Gebruik dan `/spar` om eerst te denken, daarna laat je 'm de brief schrijven naar `docs/briefs/`. De flow werkt beide kanten op.

**"Moet ik CHANGELOG.md zelf bijhouden?"**
Nee — gebruik `/changelog` aan het eind van elke sessie. 'ie pakt git diff op en schrijft de entry.

**"Wat als de slash commands niet werken?"**
Controleer dat je Claude Code in de projectmap gestart hebt (`pwd` moet `C:\Users\marce\Projects\gasprotex-website` zijn). Slash commands worden alleen geladen vanuit de map waar Claude Code draait.
