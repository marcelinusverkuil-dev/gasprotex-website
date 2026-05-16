---
description: Log de laatste sessie naar CHANGELOG.md voor volgende sparring
---

Voeg een korte entry toe aan `CHANGELOG.md` in de project root over wat er in deze sessie gebouwd/gewijzigd is.

Stappen:
1. Kijk in de git diff van deze sessie (`git diff --stat HEAD` of vergelijkbaar) om te zien wat er veranderd is
2. Lees `CHANGELOG.md` (maak 'm aan als 'ie niet bestaat met een header `# Changelog`)
3. Voeg bovenaan onder de header een nieuwe sectie toe:

```
## YYYY-MM-DD — [korte titel]

**Brief:** docs/briefs/<bestand>.md (indien van toepassing)

- Wat is er gebouwd (1-3 bullets max)
- Welke bestanden zijn geraakt (alleen de belangrijkste, niet alles)
- Wat nog open staat / vervolgvragen

```

4. Houd het **kort** — dit is voor Claude AI om bij de volgende sparring snel te weten waar we staan, niet voor een volledige release notes.

Argument: $ARGUMENTS (optionele extra context die je in de entry moet meenemen)
