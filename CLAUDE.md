@design.md

# GasProtex Website

## Project
Marketingwebsite voor GasProtex — akoestische gaslekdetectie voor de Nederlandse industrie. Eigenaar: Marcelinus Verkuil.

## Stack
- Next.js (App Router) — `src/app/(marketing)/` bevat alle publieke pagina's
- Tailwind CSS v4
- TypeScript
- Vercel — hosting en deployment (branch: main)

## Repositories
- **Website**: `gasprotex-website` (dit project)
- **Portaal**: `gasprotex-portal` (apart project, zie aldaar)

## Externe diensten
| Dienst | Doel |
|---|---|
| Vercel | Hosting |
| Google Analytics | Statistieken (met cookietoestemming) |
| Tawk.to | Live chat widget |
| Microsoft Bookings | Afspraken inplannen (link in navbar) |
| Resend | E-mail (gebruikt via portal, niet direct via website) |

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
    marketing/       ← gedeelde UI componenten
      Navbar.tsx
      Footer.tsx
      ...
```

## Ontwerpregels
Zie `design.md` voor het volledige design system. Samenvatting:
- **Hoofdkleuren**: Navy `#0F2D4B` (staal) + Oranje `#D97737` (CTA)
- **Bijkleuren**: Blauw `#1E87B4`, Fog `#7AADCC`, Mist `#C2DCE8`
- **Lettertypes**: Barlow Condensed (koppen) + Barlow (body)
- Industrieel, betrouwbaar, technisch gevoel — geen SaaS-aesthetiek

## Werkregels
- Geen comments toevoegen tenzij de *waarom* niet-voor-de-hand-liggend is
- Geen hardcoded hex in className — gebruik CSS-variabelen of Tailwind-tokens
- Geen eyebrow-labels boven H1 paginakoppen
- Geen onnodige animaties
- Taal van de website: Nederlands
