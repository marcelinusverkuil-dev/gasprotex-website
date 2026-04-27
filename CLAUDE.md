@design.md

# GasProtex Website — Projectspecifiek

## Stack
- Next.js (App Router) — `src/app/(marketing)/` bevat alle publieke pagina's
- Tailwind CSS v4
- TypeScript

## Structuur
```
src/
  app/
    (marketing)/     ← alle publieke pagina's
      page.tsx       ← homepage
      diensten/
      sectoren/
      over-ons/
      cases/
      contact/
      afspraak-bevestigd/
  components/
    marketing/       ← Navbar, Footer, etc.
```

## Ontwerpregels
Zie `design.md` voor het volledige design system. Geen hardcoded hex in className — gebruik CSS-variabelen of Tailwind-tokens. Geen eyebrow-labels boven H1 paginakoppen.
