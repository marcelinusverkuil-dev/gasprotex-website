---
description: Lees een build-brief en implementeer in plan mode
---

Je gaat een build-brief implementeren voor het GasProtex website project.

**Stap 1 — Lezen.** Lees het volgende bestand: $ARGUMENTS

Als er geen argument is meegegeven, lees dan de meest recent gewijzigde brief in `docs/briefs/` (of `docs/` als die map leeg is) — niet eentje die met `_` begint (dat zijn concepten of templates).

**Stap 2 — Samenvatten.** Geef in maximaal 6 bullets:
- Wat er gebouwd moet worden
- Welke bestanden je verwacht aan te maken/aan te passen
- Welke open vragen er in de brief staan
- Eventuele risico's of onduidelijkheden die je ziet

**Stap 3 — Plan mode.** Schakel naar plan mode (geen code schrijven). Stel een stap-voor-stap plan op met:
- Bestandsstructuur
- Componenten die hergebruikt worden (kijk eerst in `src/components/`)
- Volgorde van implementatie
- Hoe je gaat testen / valideren

**Stap 4 — Wacht op akkoord.** Vraag expliciet om akkoord voor je begint. Pas dan code schrijven.

Belangrijk:
- Houd je aan de tech-eisen in CLAUDE.md / AGENTS.md / design.md
- Next.js 16 wijkt af van standaard — raadpleeg `node_modules/next/dist/docs/` waar nodig
- Schrijf nooit code zonder akkoord op het plan
