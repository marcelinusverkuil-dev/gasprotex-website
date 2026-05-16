---
description: Review een build-brief op volledigheid voordat je gaat bouwen
---

Review de volgende build-brief op volledigheid en uitvoerbaarheid: $ARGUMENTS

Als er geen pad is meegegeven, lees de meest recent gewijzigde brief in `docs/briefs/`.

Check op:

**Volledigheid**
- [ ] Doel in één zin aanwezig
- [ ] Acceptatiecriteria meetbaar (niet "moet mooi zijn" maar "Lighthouse > 90")
- [ ] Out-of-scope expliciet
- [ ] Copy letterlijk uitgetypt (niet "iets met productinfo")

**Technische haalbaarheid**
- [ ] Past binnen huidige tech stack (Next.js 16, Tailwind 4, Supabase, Stripe, shadcn-ui)
- [ ] Bestaande componenten in `src/components/` overwogen?
- [ ] Conflicten met design.md / AGENTS.md?

**Onduidelijkheden**
Lijst alle plekken op waar je als bouwer een eigen interpretatie moet maken. Dat zijn de plekken waar de brief nog tekortschiet.

Output:
1. Score 1-10 op gereed-voor-bouw
2. Top 3 verbeterpunten in volgorde van impact
3. Concrete vragen die nog beantwoord moeten worden vóór `/buildbrief` gedraaid kan worden

Schrijf **geen code** in deze command — alleen review.
