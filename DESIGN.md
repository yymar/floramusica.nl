# DESIGN.md · Muziekpraktijk Flora Musica

## Doelgroep en toon

Twee groepen: ouders die muziekles zoeken voor hun kind, en volwassen (her)beginners. Beiden zoeken vertrouwen, niet spektakel. De toon is warm, persoonlijk, vakkundig en rustig; Nederlands in de je-vorm, zonder superlatieven en zonder uitroeptekens.

## Centraal concept: het programmaboekje

De pagina is opgebouwd als een concertprogramma. De hero is de omslag: een diep bordeaux vlak met de naam van de praktijk groot in display ("Flora Musica"), daaronder "Muziekles in Oss en omgeving" als ondertitel (beide in de h1), en één uitnodiging. Het portretfoto-slot staat op de omslag als tonale outline, niet als licht vlak. Daarna volgt het binnenwerk op warm papier, met op desktop een marge-grid: het sectielabel staat in de linkermarge op de baseline van de kop, de inhoud in de brede rechterkolom. Dat grid vervangt de gebruikelijke "eyebrow boven elke kop" volledig; de pagina telt nul eyebrows. Op mobiel klapt alles naar één kolom, label boven kop.

## De bewuste esthetische keuze: de partituurregel

De pagina is één partituurregel. Hij opent op de omslag met een toon-op-toon notenbalk die van rand tot rand loopt, met een echte solsleutel aan het begin (ook op mobiel, iets compacter, zodat de parallax daar voelbaar is), en hij sluit boven de footer af met dezelfde notenbalk mét eindstreep (dunne plus dikke streep, muzikaal correct). De sleutel is de G-sleutel uit Bravura, het professionele notatiefont van Steinberg (SIL Open Font License), als vectorpad overgenomen in `src/components/PartituurRegel.astro` zodat er geen notatiefont geladen wordt. Tussen opening en slot is de pagina gedisciplineerd stil: het marge-grid en het bordeaux vlak doen het werk. Geen verdere *notatie*-ornamenten strooien; als systeem is de partituurregel opening en slot, niets ertussen. Wat er sinds de assetset wél aan decoratie bij is gekomen, en met welke terughoudendheid, staat hieronder onder Ornamenten.

## Ornamenten

Naast de partituurregel draagt de pagina een kleine decoratieve set (Figma Make, `src/assets/`, beschreven in `MANIFEST.md`): een motief, linten en takjes, alle in één kleur via `currentColor`. Ze gaan inline de HTML in via de componenten in `src/components/ornaments/`, want alleen dan volgen ze de cascade en kosten ze geen extra request.

De set is bewust spaarzaam ingezet — vijf ornamenten op de hele pagina, samen 48 kB inline (20 kB gzipped):

| Waar | Ornament | Rol |
|---|---|---|
| Omslag | `motif-klarinet-bloei` (full) | derde en achterste parallaxlaag, papier op 14%, bloedend over de rechteronderrand; onder 640px verborgen |
| Lessen | `sprig-sol-sleutel` | opent het instrumentenprogramma boven de bordeaux regel |
| Lessen | `sprig-noten-blad` | sluit de sectie af |
| Praktisch | `ribbon-a-quiet` | de draad als stil watermerk op 12% |
| Footer | `ribbon-a-centerline` | de finale, tekent zichzelf; zie Beweging |

Drie varianten, elk met één doel: vol detail voor de voorgrond, `-quiet` uitsluitend als achtergrondwatermerk op 8–15% dekking, `-centerline` uitsluitend voor de draw-animatie. Een quiet-variant boven 15% wint van de tekst en hoort daar dus niet.

Dit verruimt de eerdere regel "opening en slot, niets ertussen" bewust, maar houdt de geest ervan aan: geen ornament staat naast lopende tekst, alles is `aria-hidden` en niet focusbaar, en per sectie blijft het bij hoogstens twee. `src/assets/layers/` (de losse lagen om met de hand af te maken in Procreate) staat in `.gitignore` en komt nooit in de build; het omslagmotief staat op precies één plek in de code, zodat het later in één regel te vervangen is door een met de hand afgemaakte PNG.

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

Beweging is een ontwerpbeslissing. De volledige choreografie staat in **MOTION.md** (concept "Crescendo"); hieronder alleen het principe en waar het vandaan komt.

De pagina is één partituurregel en de scroll is de uitvoering. Een maatstreep tekent zich van Over tot Contact in de labelmarge; elk onderdeel krijgt één korte entree op het moment dat het in beeld komt; het klarinet-hart opent als een bordeaux vlak dat links-naar-rechts opengaat en tot de paginarand bloedt; de footer schrijft zijn eigen notenbalk als slotakkoord.

Alles is scroll-gekoppeld en `linear` zonder eigen duur: de positie in de `animation-range` ís de voortgang, dus de vinger van de bezoeker is de easing. Alleen micro-interacties (hover op links, knoppen en velden) hebben een duur en een curve — `--dur-s`/`--dur-m` met `--ease-organic`. Uitsluitend `transform`, `opacity` en `clip-path`; CSS-only via scroll-driven animations, geen animatiebibliotheek en geen scroll-listeners.

Twee guards, altijd samen: `@media (prefers-reduced-motion: no-preference)` en `@supports (animation-timeline: view())`. Daarbuiten staat alle content er direct en volledig — koppen zichtbaar, lijnen getrokken, het golf-vlak open. De enige beweging die géén animatie is en dus altijd blijft staan, is de overhang van het portret over de omslag/papier-grens: dat is layout, en het is wat de omslag aan het binnenwerk knoopt.

Eén bewuste afwijking van "alleen transform/opacity": het lint in de footer tekent zichzelf met `stroke-dashoffset` (een paint-property). Een vorm valt niet met een transform te tekenen, en het gaat om één pad van ruim driehonderd bytes.

## Galerij-lightbox

Native `<dialog>`: klik of Enter opent de plaat groot (webp, 1600px) op een donker bordeaux doek, met plaatnummer en bijschrift. Vorige/volgende via zichtbare knoppen (44px), pijltjestoetsen en swipe; sluiten met Esc, de knop of een klik op het doek. Focus-trap komt van `<dialog>` zelf; bij sluiten keert de focus terug naar de aangeklikte plaat. Zonder JavaScript linkt elke plaat gewoon naar het beeldbestand.

## Elevatie

De pagina is vlak: geen kaartschaduwen, geen diepte-effecten. Eén uitzondering, als token vastgelegd (`--schaduw-overhang`): het portret op de omslag hangt over de grens tussen het bordeaux vlak en het papier heen, en zonder schaduw leest die overlap als een plakfout in plaats van als diepte. Dezelfde waarde draagt de uitklap van de mobiele navigatie, die om dezelfde reden boven de pagina moet zweven. Verder nergens schaduw; een nieuwe schaduw hoort een token te zijn of niet te bestaan.

## Navigatie

Onder 40rem past de ankerlijst niet naast het woordmerk. Daar staat hij in een `<details>`-uitklap: native, dus toetsenbordbedienbaar en schermlezer-correct zonder eigen ARIA, en zichtbaar zonder JavaScript. De Contact-knop blijft altijd los zichtbaar — dat is de enige intentie van de pagina en die hoort niet achter een klik. Het enige script is één regel die de lade sluit nadat je een anker kiest.

## Thema

Alleen licht. Het concept is een papier-referentie; een donker thema zou een tweede ontwerp zijn zonder aanwijsbare winst voor deze doelgroep, en de briefing koos expliciet licht. Het bordeaux hero-vlak is een sectietint binnen het lichte thema, geen thema-wissel.

## Regel voor onvolledige content

Lege of nog niet aangeleverde gegevens worden weggelaten, nooit als zichtbare placeholder-tekst getoond. Geen "TODO" in de gerenderde pagina; de administratie leeft in CONTENT-TODO.md en in code-comments. De twee foto-slots zijn de enige zichtbare uitzondering en heten daar "… volgt". De tarievensectie blijft één zin plus formulierverwijzing tot `tarieven.bekend` waar is.

## Social preview

`public/og.png` (1200×630): bordeaux kaart met "Flora Musica" in Bricolage, ondertitel in Atkinson en de notenbalk onderaan; gekoppeld via og:image en twitter:card summary_large_image. Opnieuw genereren kan met canvas op de site zelf (fonts staan daar al klaar).

## Beeld

De foto's zijn aangeleverd (professionele serie plus praktijk-archief) en staan verkleind in `src/assets/`. Elk beeldkader heeft een vaste verhouding en snijdt bij met `object-fit: cover`; waar dat gebeurt bepaalt het `focus`-veld (`object-position`, standaard het midden). Zet het zodra het onderwerp niet centraal zit — een hoofd tegen de bovenrand overleeft een center-crop niet. Zo is een foto vervangen één regel, ook als de nieuwe een andere verhouding heeft. `Figuur.astro` rendert Astro's `<Image>`; zonder `src` valt hij terug op een rustig placeholder-vlak.

1. Hero: staand portret 4:5 met klarinet (`portret-christa.jpg`).
2. Over: Christa aan de piano, 3:4 (`lespraktijk.jpg`).

## De galerij: een editoriale spread

`src/sections/Galerij.astro` toont de foto's uit `src/data/fotos.ts` niet als fotomodule maar als pagina's uit het programmaboekje: een herhalend ritme van drie rijen (breed liggend 3:2 · staand 4:5 rechts naast witruimte · een paar 4:5 naast elkaar, de tweede iets verlaagd), elke cyclus gespiegeld. Vanaf het marge-grid claimt de spread de labelmarge terug en krijgt zo de volle boekbreedte. Bijschriften zijn plaatnummers ("№ 3", Bricolage, bordeaux) met optioneel een cursieve regel in Atkinson; er is bewust geen lightbox (de platen staan groot genoeg op de pagina, en CSS-only lightboxes breken terugknop of focus). Nul JavaScript; de enige beweging is een CSS scroll-reveal achter `@supports (animation-timeline: view())` en `prefers-reduced-motion: no-preference`. Op mobiel klapt alles naar één kolom met een licht wisselende inspringing. De sectie verdwijnt vanzelf als `fotos` leeg is.

## Beeldmerk: fm

Het merk is gekozen (canvas: "Flora Musica beeldmerk"): de **forte-f** (U+E522) en **mezzo-m** (U+E521) uit Bravura, de dynamiek-letters uit echte bladmuziek. Professioneel getekend, SIL Open Font License, dus commercieel vrij. De paden staan in `src/data/dynamiek.ts`; `Wordmark.astro` combineert ze met Bricolage 600 (em-maten, schaalt mee met de context) en wordt gebruikt in header, hero-omslag en footer. `public/favicon.svg` is de forte-f op een bordeaux tegel; `public/og.png` draagt dezelfde wordmark.
