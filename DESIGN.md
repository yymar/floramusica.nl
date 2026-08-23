# DESIGN.md · Muziekpraktijk Flora Musica

## Doelgroep en toon

Twee groepen: ouders die muziekles zoeken voor hun kind, en volwassen (her)beginners. Beiden zoeken vertrouwen, niet spektakel. De toon is warm, persoonlijk, vakkundig en rustig; Nederlands in de je-vorm, zonder superlatieven en zonder uitroeptekens.

## Centraal concept: het programmaboekje

De pagina is opgebouwd als een concertprogramma. De hero is de omslag: een diep bordeaux vlak met de naam van de praktijk groot in display ("Flora Musica"), daaronder "Muziekles in Oss en omgeving" als ondertitel (beide in de h1), en één uitnodiging. Het portretfoto-slot staat op de omslag als tonale outline, niet als licht vlak. Daarna volgt het binnenwerk op warm papier, met op desktop een marge-grid: het sectielabel staat in de linkermarge op de baseline van de kop, de inhoud in de brede rechterkolom. Dat grid vervangt de gebruikelijke "eyebrow boven elke kop" volledig; de pagina telt nul eyebrows. Op mobiel klapt alles naar één kolom, label boven kop.

## De bewuste esthetische keuze: de partituurregel

De pagina is één partituurregel. Hij opent op de omslag met een toon-op-toon notenbalk die van rand tot rand loopt, met een echte solsleutel aan het begin (ook op mobiel, iets compacter, zodat de parallax daar voelbaar is), en hij sluit boven de footer af met dezelfde notenbalk mét eindstreep (dunne plus dikke streep, muzikaal correct). De sleutel is de G-sleutel uit Bravura, het professionele notatiefont van Steinberg (SIL Open Font License), als vectorpad overgenomen in `src/components/PartituurRegel.astro` zodat er geen notatiefont geladen wordt. Tussen opening en slot is de pagina gedisciplineerd stil: het marge-grid en het bordeaux vlak doen het werk. Geen verdere notatie-ornamenten strooien; het systeem is opening en slot, niets ertussen.

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

Typeschaal met `clamp()`, ratio ±1,25: `--text-omslag` (tot 5.5rem, alleen de hero-naam), `--text-hero`, `--text-kop`, `--text-subkop`, `--text-basis` (17px), `--text-klein` (15px). Lopende tekst maximaal 62ch breed.

## Spacing

4px-basis (Tailwind-standaardschaal: 4 8 12 16 24 32 48 64 96 128). Secties ademen via `--spacing-sectie: clamp(4rem, 2.5rem + 6vw, 8rem)`. Binnen secties: kop → inhoud 24px, subkop → tekst 8px.

## Beweging

Beweging is een ontwerpbeslissing; de pagina kent drie geregisseerde momenten en verder niets. Alles is compositor-vriendelijk (alleen `transform`/`opacity`), CSS-only via scroll-driven animations achter `@supports (animation-timeline: view())`, en `prefers-reduced-motion: reduce` schakelt alles uit — content staat er dan gewoon, volledig zichtbaar. Geen animatiebibliotheken, geen scroll-listeners.

1. **Parallax op de omslag** (`Hero.astro`): twee lagen die achterlopen op de scroll terwijl de omslag het beeld uit schuift — de partituurregel 3.5rem, het portret 1.25rem (~10% van de scrollafstand); op mobiel reizen ze verder (5.5rem en 3rem) omdat het scherm en de scrollafstand daar kleiner zijn. Lineair aan de scroll gekoppeld (`animation-range: exit`), dus geen eigen duur of easing: de vinger van de bezoeker is de easing.
2. **Cel-reveal in de galerij** (`Galerij.astro`): opacity 0.25→1 plus 12px translate per cel, met een kleine stagger via verschoven `animation-range` per nth-child. Bewust niet herhaald op andere secties; één moment, geen entree-parade. Daarnaast een heel lichte hover-scale (1.02) van het beeld binnen de cel.
3. **Lightbox-open** (`Galerij.astro`): 240ms `cubic-bezier(0.2, 0, 0, 1)` (uitgesproken uitloop), opacity plus 8px translate.

Micro-interacties (hover op knoppen, links en formulier­velden) zijn kleurwissels via `transition-colors`, circa 150ms, binnen het bordeaux-palet.

Bewuste afwijkingen van de briefing: geen IntersectionObserver-fallback (waar scroll-driven animations ontbreken staat content er direct — rustiger dan een tweede codepad voor hetzelfde effect), en geen reveal op elke sectie (dat wordt een parade; het marge-grid draagt de pagina).

## Galerij-lightbox

Native `<dialog>`: klik of Enter opent de plaat groot (webp, 1600px) op een donker bordeaux doek, met plaatnummer en bijschrift. Vorige/volgende via zichtbare knoppen (44px), pijltjestoetsen en swipe; sluiten met Esc, de knop of een klik op het doek. Focus-trap komt van `<dialog>` zelf; bij sluiten keert de focus terug naar de aangeklikte plaat. Zonder JavaScript linkt elke plaat gewoon naar het beeldbestand.

## Thema

Alleen licht. Het concept is een papier-referentie; een donker thema zou een tweede ontwerp zijn zonder aanwijsbare winst voor deze doelgroep, en de briefing koos expliciet licht. Het bordeaux hero-vlak is een sectietint binnen het lichte thema, geen thema-wissel.

## Regel voor onvolledige content

Lege of nog niet aangeleverde gegevens worden weggelaten, nooit als zichtbare placeholder-tekst getoond. Geen "TODO" in de gerenderde pagina; de administratie leeft in CONTENT-TODO.md en in code-comments. De twee foto-slots zijn de enige zichtbare uitzondering en heten daar "… volgt". De tarievensectie blijft één zin plus formulierverwijzing tot `tarieven.bekend` waar is.

## Social preview

`public/og.png` (1200×630): bordeaux kaart met "Flora Musica" in Bricolage, ondertitel in Atkinson en de notenbalk onderaan; gekoppeld via og:image en twitter:card summary_large_image. Opnieuw genereren kan met canvas op de site zelf (fonts staan daar al klaar).

## Beeld

De foto's zijn aangeleverd (professionele serie plus praktijk-archief) en staan verkleind in `src/assets/`. `Figuur.astro` rendert Astro's `<Image>`; zonder `src` valt hij terug op een rustig placeholder-vlak.

1. Hero: staand portret 4:5 met klarinet (`portret-christa.jpg`).
2. Over: Christa aan de piano, 3:4 (`lespraktijk.jpg`).

## De galerij: een editoriale spread

`src/sections/Galerij.astro` toont de foto's uit `src/data/fotos.ts` niet als fotomodule maar als pagina's uit het programmaboekje: een herhalend ritme van drie rijen (breed liggend 3:2 · staand 4:5 rechts naast witruimte · een paar 4:5 naast elkaar, de tweede iets verlaagd), elke cyclus gespiegeld. Vanaf het marge-grid claimt de spread de labelmarge terug en krijgt zo de volle boekbreedte. Bijschriften zijn plaatnummers ("№ 3", Bricolage, bordeaux) met optioneel een cursieve regel in Atkinson; er is bewust geen lightbox (de platen staan groot genoeg op de pagina, en CSS-only lightboxes breken terugknop of focus). Nul JavaScript; de enige beweging is een CSS scroll-reveal achter `@supports (animation-timeline: view())` en `prefers-reduced-motion: no-preference`. Op mobiel klapt alles naar één kolom met een licht wisselende inspringing. De sectie verdwijnt vanzelf als `fotos` leeg is.

## Beeldmerk: fm

Het merk is gekozen (canvas: "Flora Musica beeldmerk"): de **forte-f** (U+E522) en **mezzo-m** (U+E521) uit Bravura, de dynamiek-letters uit echte bladmuziek. Professioneel getekend, SIL Open Font License, dus commercieel vrij. De paden staan in `src/data/dynamiek.ts`; `Wordmark.astro` combineert ze met Bricolage 600 (em-maten, schaalt mee met de context) en wordt gebruikt in header, hero-omslag en footer. `public/favicon.svg` is de forte-f op een bordeaux tegel; `public/og.png` draagt dezelfde wordmark.
