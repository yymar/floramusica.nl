# DESIGN.md · Muziekpraktijk Flora Musica

## Doelgroep en toon

Twee groepen: ouders die muziekles zoeken voor hun kind, en volwassen (her)beginners. Beiden zoeken vertrouwen, niet spektakel. De toon is warm, persoonlijk, vakkundig en rustig; Nederlands in de je-vorm, zonder superlatieven en zonder uitroeptekens.

## Centraal concept: het programmaboekje

De pagina is opgebouwd als een concertprogramma. De hero is de omslag: een diep bordeaux vlak met de titel en één uitnodiging. Daarna volgt het binnenwerk op warm papier, met op desktop een marge-grid: het sectielabel staat in de linkermarge op de baseline van de kop, de inhoud in de brede rechterkolom. Dat grid vervangt de gebruikelijke "eyebrow boven elke kop" volledig; de pagina telt nul eyebrows. Op mobiel klapt alles naar één kolom, label boven kop.

## De bewuste esthetische keuze

Het marge-grid, plus één notenbalk-motief: de bovenrand van de footer is een echte vijflijnige notenbalk in bordeaux hairlines. Eén keer op de pagina, nergens anders herhaald, als stille verwijzing naar het vak. Verder is de pagina gedisciplineerd stil, zodat het bordeaux vlak en het grid het werk doen.

## Kleur

Bordeaux is de signatuurkleur (wens van de eigenaar) en de enige accentkleur op de pagina. Geen paars, geen roze, ook niet in hover- of focusstaten: hover verdiept naar `--bordeaux-deep`, focus-ringen zijn bordeaux (op het bordeaux vlak: papierkleurig).

| Token | Hex | Rol |
|---|---|---|
| `--paper` | `#FAF6F3` | achtergrond, warm wit |
| `--paper-deep` | `#F1E9E4` | rustige sectiewissel |
| `--ink` | `#231A1C` | tekst, warm donker (geen zuiver zwart) |
| `--ink-soft` | `#6B5A5D` | bijschriften, secundaire tekst |
| `--bordeaux` | `#7B1E2B` | links, knoppen, labels, accent |
| `--bordeaux-deep` | `#4A1219` | hero-vlak, header, hover |
| `--paper-dim` | `#E8D8D5` | secundaire tekst op bordeaux |
| `--rule` | `#DCCFC9` | decoratieve hairlines |
| `--border-strong` | `#9A8180` | randen van formuliervelden |

### Contrastratio's (WCAG, berekend)

| Paar | Ratio | Eis | |
|---|---|---|---|
| `ink` op `paper` | 15,81 : 1 | 4,5 : 1 | ✓ |
| `ink` op `paper-deep` | 14,17 : 1 | 4,5 : 1 | ✓ |
| `ink-soft` op `paper` | 6,02 : 1 | 4,5 : 1 | ✓ |
| `ink-soft` op `paper-deep` | 5,40 : 1 | 4,5 : 1 | ✓ |
| `bordeaux` op `paper` (links, labels) | 9,47 : 1 | 4,5 : 1 | ✓ |
| `bordeaux` op `paper-deep` | 8,49 : 1 | 4,5 : 1 | ✓ |
| `paper` op `bordeaux-deep` (hero-tekst) | 14,04 : 1 | 4,5 : 1 | ✓ |
| `paper-dim` op `bordeaux-deep` (hero-subtekst) | 10,93 : 1 | 4,5 : 1 | ✓ |
| `paper` op `bordeaux` (knoptekst) | 9,47 : 1 | 4,5 : 1 | ✓ |
| `bordeaux-deep` op `paper` (hero-knoptekst) | 14,04 : 1 | 4,5 : 1 | ✓ |
| `border-strong` op `paper` (veldranden) | 3,35 : 1 | 3 : 1 (niet-tekst) | ✓ |

Narekenen: WCAG 2.x relatieve-luminantieformule; zie bijvoorbeeld webaim.org/resources/contrastchecker.

## Typografie

Twee families, zelf-gehost via `@fontsource`, nul externe requests:

- **Display: Bricolage Grotesque** (variabel, 600–700, tracking −0.02em). Een warme grotesk met karakter; hedendaags en persoonlijk zonder "template-serif" te zijn.
- **Tekst: Atkinson Hyperlegible Next** (400/700, regelafstand 1.65). Ontworpen door het Braille Institute voor maximale leesbaarheid, passend bij een publiek van ouders en volwassen beginners.

Typeschaal met `clamp()`, ratio ±1,25: `--text-hero`, `--text-kop`, `--text-subkop`, `--text-basis` (17px), `--text-klein` (15px). Lopende tekst maximaal 62ch breed.

## Spacing

4px-basis (Tailwind-standaardschaal: 4 8 12 16 24 32 48 64 96 128). Secties ademen via `--spacing-sectie: clamp(4rem, 2.5rem + 6vw, 8rem)`. Binnen secties: kop → inhoud 24px, subkop → tekst 8px.

## Thema

Alleen licht. Het concept is een papier-referentie; een donker thema zou een tweede ontwerp zijn zonder aanwijsbare winst voor deze doelgroep, en de briefing koos expliciet licht. Het bordeaux hero-vlak is een sectietint binnen het lichte thema, geen thema-wissel.

## Beeld (fase 2)

Slots staan klaar in `Figuur.astro` (placeholder zolang er geen foto is, Astro `<Image>` zodra die er wel is):

1. Hero: staand portret ± 4:5, bij voorkeur met klarinet.
2. Over: foto uit de lespraktijk, ± 3:4.

Logo en favicon zijn tijdelijke tekst/SVG-placeholders in `src/components/Wordmark.astro` en `public/favicon.svg`; beide op één plek vervangbaar.
