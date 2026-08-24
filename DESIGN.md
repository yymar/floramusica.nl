# DESIGN.md · Muziekpraktijk Flora Musica

## Doelgroep en toon

Twee groepen: ouders die muziekles zoeken voor hun kind, en volwassen (her)beginners. Beiden zoeken vertrouwen, niet spektakel. De toon is warm, persoonlijk, vakkundig en rustig; Nederlands in de je-vorm, zonder superlatieven en zonder uitroeptekens.

## Centraal concept: het programmaboekje

De pagina is opgebouwd als een concertprogramma. De hero is de omslag: een diep bordeaux vlak met de naam van de praktijk groot in display ("Flora Musica"), daaronder "Muziekles in Oss en omgeving" als ondertitel (beide in de h1), en één uitnodiging. Het portretfoto-slot staat op de omslag als tonale outline, niet als licht vlak. Daarna volgt het binnenwerk op warm papier, met op desktop een marge-grid: het sectielabel staat in de linkermarge op de baseline van de kop, de inhoud in de brede rechterkolom. Dat grid vervangt de gebruikelijke "eyebrow boven elke kop" volledig; de pagina telt nul eyebrows. Op mobiel klapt alles naar één kolom, label boven kop.

## De bewuste esthetische keuze: de partituurregel

De pagina is één partituurregel. Hij opent op de omslag met een toon-op-toon notenbalk die van rand tot rand loopt, met een echte solsleutel aan het begin (ook op mobiel, iets compacter, zodat de parallax daar voelbaar is), en hij sluit boven de footer af met dezelfde notenbalk mét eindstreep (dunne plus dikke streep, muzikaal correct). De sleutel is de G-sleutel uit Bravura, het professionele notatiefont van Steinberg (SIL Open Font License), als vectorpad overgenomen in `src/components/PartituurRegel.astro` zodat er geen notatiefont geladen wordt. Tussen opening en slot is de pagina gedisciplineerd stil: het marge-grid en het bordeaux vlak doen het werk. Geen verdere *notatie*-ornamenten strooien; als systeem is de partituurregel opening en slot, niets ertussen. Wat er sinds de assetset wél aan decoratie bij is gekomen, en met welke terughoudendheid, staat hieronder onder Ornamenten.

## Ornamenten

Naast de partituurregel draagt de pagina een decoratieve set (Figma Make, `src/assets/`, beschreven in `MANIFEST.md`): een motief, linten en takjes, alle in één kleur via `currentColor`. Ze gaan inline de HTML in via de componenten in `src/components/ornaments/`, want alleen dan volgen ze de cascade en kosten ze geen extra request.

Drie regels bepalen waar ze mogen staan.

**1. Een ornament is nooit inhoud.** Het leeft in de achtergrond- of accentlaag van een sectie: `position: absolute` of een eigen band, achter de inhoud, `aria-hidden`. De inhoud loopt alsof het er niet is. Een ornament bezet nooit een inhoudsplek, vult nooit een kaartlichaam en reserveert geen layouthoogte. Verandert de layout als je het weghaalt, dan staat het verkeerd.

**2. Drie maten, meer niet.**

| Maat | Waar | Grootte |
|---|---|---|
| Omslagmaat | uitsluitend het klarinetmotief op de omslag | het enige ornament op inhoudsschaal |
| Accentmaat | naast een kop, op een kaarthoek, aan een sectierand | 32–72px, altijd verankerd |
| Textuurmaat | volle-breedte banden uit naadloos geketende linten | 5–8% dekking, achter de inhoud, trage parallax |

**3. Elk ornament heeft een taak:** twee secties verbinden (de stengel of een band over de naad), een kop markeren (accent), of de omslag componeren (het motief). Is de taak niet te benoemen, dan hoort het ornament er niet.

**De stengel.** De rode draad van de pagina, vanaf 80rem: één vijflijnige notenbalk die als slingerpad door alle secties golft — hij begint onder de omslagrand waar de beker van de klarinet onderduikt en gaat via één kwartbocht liggen als de footerbalk. Sinds de herbouw is het letterlijk één object: `StengelBaan.astro` meet de secties en de footerbalk runtime en genereert er in pixelruimte één doorlopend pad van (route in `src/data/stengel.ts`), met echte normaal-offsets — constante breedte over de hele route (1,75× de footerbalkmaat, lijndikte en -afstand van het slot gemeten), dekking 0,5 zoals de balk zelf, en als enige breedteverandering de taper over de laatste ~400px arc naar exact balkmaat op de landing. Harde routeregels: ≥48px vrij van elk tekstblok en formulierveld (1280–2560, geauditeerd), contentkolom alleen kruisen in de witruimte tussen secties, minimale bochtstraal ≥2× de linthoogte. Loten (noten, takjes, bloemen) groeien op sectiehoogte-fracties uit het pad, om en om, onder footerdichtheid. Zonder JavaScript is er geen stengel (pure decoratie); de rest van de pagina is daar niet van afhankelijk.

Wat er staat:

| Waar | Ornament | Maat | Taak |
|---|---|---|---|
| Hele pagina (≥80rem) | de stengel (gegenereerd) | textuur | de rode draad: hij begint onder de omslagrand waar de beker onderduikt en wordt in de footer de liggende balk |
| Omslag | `motif-klarinet-bloei` | omslag | de bloem waar de stengel uit groeit (de stengel zelf begint pas onder de omslagrand, precies waar de beker onderduikt); boven de notenbalk, onder tekst en portret, papier op 20%, in de rechtermarge met één bewuste bleed onder de sectierand; onder 80rem verborgen |
| Over / Beelden / Locatie | `tak-blad` / `bloem-open` / `bloem-knop` | accent | drukkersornament in de goot links van het sectielabel, op de kopregel (alleen vanaf 48rem) |
| Lessen | `motif-klarinet-instrument` | accent | hoge kolom tegen de rechterkant van het klarinetvlak, bloedt aan de bovenkant het vlak uit |
| Lessen | `sprig-noten-blad` | accent | absoluut in de goot links van de kop "Voor wie" — accenten verplaatsen nooit tekst |
| Praktisch → Contact | `ribbon-a/b-quiet` | textuur | de enige horizontale band: half boven, half onder de naad, 7% |
| Footer | `a/b-quiet`/`-noten`/`-blad` | textuur | het slot: vanaf 80rem landt de stengel via de aanloopbocht op de balk (één doorlopende tekening) en beginnen de tegels pas na de landing; daaronder loopt de balk van de vensterrand tot de dubbele eindstreep |

Vijf varianten, elk met één doel: vol detail voor de voorgrond, `-quiet` uitsluitend als achtergrondwatermerk op 5–15% dekking, `-centerline` uitsluitend voor de draw-animatie, en `-noten`/`-blad` als losse lagen die pixel-op-pixel over de balk vallen. Een quiet-variant boven 15% wint van de tekst en hoort daar dus niet.

De banden zijn geketend, niet herhaald als beeld: `a` en `b` staan aan hun tegelrand allebei met hun vijf lijnen vlak op dezelfde hoogte, dus a→b→a→b sluit naadloos aan. Het aantal paren schaalt met de breedte (één, twee of drie), zodat de bandhoogte overal tussen 30 en 70px blijft en de tegelranden — de enige plekken waar de golf vlak ligt — samenvallen met de vensterranden. Daar staat de eindstreep in de footer dus haaks op de vijf lijnen. Herhaalde tegels gaan via `<symbol>`/`<use>` (`LintDefs` in de layout); anders zou elke tegel zijn eigen padgegevens meedragen.

**Gewicht.** De hele decoratieve set staat inline in `index.html`: 94 kB rauw, 34 kB gzipped. Dat is meer dan de richtlijn van ~60 kB uit de oorspronkelijke briefing. De oorzaak is de opdracht zelf — twee volle-breedte banden, een omslagmotief, een instrumentkolom en drie plantaardige accenten passen niet in 60 kB van deze set. Wat er nog af kan, in volgorde van opbrengst: het omslagmotief naar `-quiet` (−24 kB, maar dat is een gevuld silhouet in plaats van een lijntekening — zichtbaar minder), één van de drie plantaardige accenten weglaten (−10 kB), of de bloeiband laten vallen (−0 kB inline, die deelt zijn symbolen al). De padgegevens worden bij het inlezen al op twee decimalen afgerond; dat scheelde 13 kB en is op deze schaal onzichtbaar.

`src/assets/layers/` (de losse lagen om met de hand af te maken in Procreate) staat in `.gitignore` en komt nooit in de build. Drie lagen die de site wél gebruikt — de instrumentlaag van het motief en de noten- en bladlaag van lint a en b — staan als gewoon bestand in `motifs/` en `ribbons/`, zodat de build niet van een genegeerde map afhangt.

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
