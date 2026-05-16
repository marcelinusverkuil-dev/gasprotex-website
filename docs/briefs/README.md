# docs/briefs/ — Build-briefs

Hier komen alle build-briefs die in **Claude AI (Cowork)** worden uitgewerkt en in **Claude Code** worden geïmplementeerd.

## Hoe het werkt

1. **Sparren** doe je in Claude AI. Bedenk samen wat er gebouwd moet worden.
2. **Brief schrijven** doet Claude AI in deze map, op basis van `_template.md`. Naamgeving: `YYYY-MM-DD-korte-titel.md` (bv. `2026-05-16-contactformulier.md`).
3. **Reviewen** in Claude Code met `/review-brief docs/briefs/<bestand>.md` — vóór je laat bouwen.
4. **Bouwen** in Claude Code met `/buildbrief docs/briefs/<bestand>.md` — gaat eerst in plan mode, wacht op je akkoord.
5. **Loggen** na het bouwen met `/changelog` — schrijft een korte regel naar `CHANGELOG.md` zodat Claude AI bij de volgende sparringsessie weet wat er klaar is.

## Naamgeving

- Werk-in-uitvoering: `_concept-<titel>.md` (begint met underscore = niet klaar)
- Klaar voor bouw: `YYYY-MM-DD-<titel>.md`
- Gebouwd: hernoem naar `done/<datum>-<titel>.md` of laat staan met "Status: gebouwd" in de header

## Template

Zie `_template.md` voor de standaardstructuur.
