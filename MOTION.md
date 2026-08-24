# MOTION.md · Flora Musica — Concept B "Crescendo"

> Deze spec staat op twee plekken en hoort identiek te blijven: in de repo
> (`MOTION.md`, naast de code die hem uitvoert) en in het Claude Design-project
> "Flora Musica Design System", naast het scroll-prototype
> `Flora Musica - Scroll-prototype.html` dat elke keyframe en range letterlijk
> bevat. Alles tot en met "Implementatienotities" is de oorspronkelijke spec;
> onderaan staat wat er bij het bouwen uit kwam.

## Het concept in drie zinnen

De pagina is één partituurregel, en de scroll is de uitvoering: een doorlopende maatstreep tekent zich in de labelmarge van sectie naar sectie, terwijl elk onderdeel zijn eigen, korte entree krijgt op het moment dat het in beeld komt. Het klarinet-hart van de praktijk opent als een crescendo — een bordeaux vlak dat zich links-naar-rechts opent en over de gridgrens naar de paginarand bloedt. Alle beweging is lineair aan de scroll gekoppeld (de vinger van de bezoeker is de easing); alleen micro-interacties hebben een eigen duur en easing.

## Motion-tokens (additief op de bestaande tokens)

```css
:root {
  --ease-organic: cubic-bezier(0.2, 0, 0, 1); /* bestond al impliciet; nu benoemd */
  --dur-s: 150ms;  /* kleurwissels (hover links/knoppen) */
  --dur-m: 240ms;  /* micro-beweging: onderstreping, pijl */
  --dur-l: 350ms;  /* beeld-scale in galerijcellen */
  --schuif-s: 0.75rem; /* reveal-afstand galerijcellen */
  --schuif-m: 1rem;    /* reveal-afstand tekstblokken en koppen */
  --schuif-l: 1.5rem;  /* galerij-drift amplitude */
  --overlap-hero: 4rem; /* portret-overhang over de hero/Over-grens; 2.5rem onder 48rem */
  --drift-galerij: 1.5rem;  /* micro-parallax in de spread */
  --z-achter: 0; --z-inhoud: 1; --z-accent: 2; /* dieptelagen; header blijft z-40 */
}
```

Scroll-gekoppelde animaties zijn `linear` zonder duur: positie in de `animation-range` = voortgang. Guard overal:
`@media (prefers-reduced-motion: no-preference) { @supports (animation-timeline: view()) { … } }` — daarbuiten staat alle content er direct en volledig zichtbaar. Alleen `transform`, `opacity` en `clip-path`. Geen JS.

## Specificaties per sectie

### Header (micro-interacties, overal dezelfde taal)
- Navlinks: onderstreping groeit — `::after` 1px, `scaleX 0→1`, origin links, `--dur-m` `--ease-organic`; kleur `--dur-s`. Hover-pijlen (heroknop, kaartlink): `translateX(4px)`, `--dur-m` `--ease-organic`.
- Reduced: transities ~0ms (globale reduce-regel).

### Hero — drie parallaxlagen
- Trigger: `animation-timeline: view()` per laag, `animation-range: exit 0% exit 100%` (terwijl de omslag het beeld uit schuift). Lineair, `both`.
- Achter — partituurregel: `translateY 0 → 3.5rem` (mobiel `5.5rem`), in een eigen clip zodat niets uitsteekt.
- Midden — tekstblok (h1, intro, knop): `translateY 0 → 0.9rem` (mobiel `1.25rem`).
- Voor — portret: `translateY 0 → −1.5rem` (mobiel `−1.25rem`), z-laag `--z-accent`, en statisch `margin-bottom: calc(−1 · (var(--overlap-hero) + hero-padding-bottom))` — de negatieve marge moet ook de padding-bottom van de hero (6rem, mobiel 4rem) overbruggen, anders absorbeert die de overhang — zodat het beeld echt 4rem (mobiel 2.5rem) over de bordeaux/papier-grens hangt; zachte slagschaduw verkoopt de diepte.
- Reduced: alle drie uit; portret-overhang blijft (layout, geen animatie).

### Maatstreep (rode draad)
- Eén verticale lijn, 2px `--bordeaux` op 30% opacity, absoluut in het binnenwerk op `left: calc(50% − 16.75rem)` (het gat tussen labelkolom en inhoud), alleen ≥64rem.
- `scaleY 0→1`, origin top, `view()` op de lijn zelf, `animation-range: cover 0% cover 85%` — hij tekent zich af naarmate je door het binnenwerk speelt.
- Mobiel: uit (display none). Reduced: staat er volledig.

### Sectiekoppen — opbouw per woord
- Elke kop is opgesplitst in `.wrd`-spans (max 4). Per woord: `opacity 0→1` + `translateY 1rem→0`, `view()`, ranges `entry 0–30%`, per volgend woord +6% (`6–36`, `12–42`, `18–48`).
- Mobiel: alle woorden samen op `entry 0–30%`. Reduced: uit.

### Over
- Kop per woord (boven). Tekstblok: `.rijs r2` = `opacity 0→1` + `1rem` op, `entry 8–46%`; foto `.rijs r3` `entry 16–54%`.
- Reduced: uit.

### Beelden (galerij)
- Cel-reveal gerepareerd: `opacity 0→1` (was 0.25) + `translateY 0.75rem`, ranges `entry 0–40%`, `nth-child(3n+2)` `8–48%`, `nth-child(3n)` `16–56%`.
- Drift (B): binnen elke cel krijgt de link `translateY ±1.5rem` over `cover 0%–100%` — oneven op, even neer; de spread "bladert". Alleen ≥48rem.
- Hover: beeld `scale(1.02)`, `--dur-l` `--ease-organic`; bijschrift-overlay fade 200ms (bestaand).
- Reduced: reveal en drift uit, hover-scale uit.

### Lessen — de bordeaux-golf
- Het klarinet-artikel is een bordeaux-deep vlak (`--paper`-tekst, contrast 14:1) dat rechts uit de container bloedt: `margin-right: calc(50% − 50vw)`.
- Opening: `clip-path: inset(0 100% 0 0) → inset(0 0 0 0)`, `view()`, `entry 10%–70%` — het vlak opent links→rechts als een crescendo-haarspeld; tekst en vlak verschijnen samen, dus leesbaarheid is nooit tussenin.
- Overige instrumenten: hairline groeit (`scaleX 0→1`, origin links, `entry 0–35%`, +7% per item) en de tekst rijst mee (`.rijs`-ranges).
- Mobiel: golf identiek maar korter voelbaar (kleiner element = korter range-venster); staggers halveren. Reduced: vlak staat open, lijnen staan er.

### Locatie
- Kop per woord; praktijkblok `.rijs r2`, organisatieblok `.rijs r3`.
- Organisatielijst: hairlines groeien per item (`scaleX 0→1`, `entry 0–35%`, +6% per item, zes items).
- Reduced: uit.

### Praktisch / Contact
- Praktisch: één `.rijs r2` op de intro; bewust bijna stil (rustpunt tussen golf en formulier).
- Contact: velden in drie groepjes (`r2`/`r2`/`r3`) — geen parade, twee zichtbare stappen. Focus/hover op velden en knop: kleurwissels `--dur-s`.
- Reduced: uit.

### Footer — notenbalkslot tekent zichzelf
- `view-timeline: --slot` op de footer; de vijf lijnen `scaleX 0→1` origin links, ranges `entry 0–45%` +6% per lijn; de eindstreep (dun+dik) fade `entry 45–80%`.
- Reduced: balk staat er compleet.
- **Gebouwd anders, zie Afwijkingen:** het slot is nu het geketende lint in
  zijn volle behandeling. De aanloop (centerline) tekent zichzelf op
  `entry 0–30%`, daarna schrijft de balk zich van links naar rechts met
  `clip-path` op `entry 22–78%`, en valt de eindstreep in op `entry 72–95%`.

## Voor/na per sectie (wat het houterige oplost)

| Sectie | Voor | Na |
|---|---|---|
| Hero | 2 lagen, alles lag achter | 3 lagen (achter/midden/voor), portret leidt en hangt 4rem over de sectiegrens — de omslag krijgt fysieke diepte |
| Over | verscheen instant | kop bouwt per woord, tekst en foto volgen gestaggerd; portret-overhang verbindt hero en Over |
| Beelden | reveal vanaf 0.25 (leek laadfout) | echte reveal 0→1 + tegengestelde drift per cel: de spread bladert i.p.v. staat |
| Lessen | klarinet even passief als de rest | klarinet opent als bordeaux crescendo-vlak dat de paginarand raakt; de rest volgt op groeiende hairlines |
| Locatie | statische lijst | lijst bouwt zich op hairline voor hairline, zelfde taal als Lessen |
| Praktisch | stil | bewust bijna stil gehouden — rustpunt is nu een keuze i.p.v. een gat |
| Contact | formulier stond er | twee rustige groepsentrees; micro-taal (focus, knop) consistent |
| Doorlopend | zes losse blokken | maatstreep tekent van Over t/m Contact; footer-notenbalk schrijft zichzelf als slotakkoord |

## Afwijkingen van de briefing (bewust)

1. De golf "trekt zich terug bij Locatie" uit concept B is geschrapt: een vlak dat weer verdwijnt onder gelezen tekst schendt de rust- en leesbaarheidseis. Het vlak opent één keer en blijft.
2. Koppen bouwen per woord, niet per regel: regels zijn responsief onvoorspelbaar in statisch CSS; woorden zijn stabiel en de koppen zijn kort.
3. Geen IntersectionObserver-helper nodig gebleken: alles kan met `animation-timeline: view()` + `@supports`-guard, conform de bestaande DESIGN.md-lijn.

## Implementatienotities voor Claude Code

- Het prototype (`Flora Musica — Scroll-prototype.html`) is de referentie: elke keyframe, range en guard staat er letterlijk in en mag 1-op-1 naar de Astro-componenten (Hero.astro, Galerij.astro, Lessen.astro, Locatie.astro, Footer.astro, global.css voor tokens + utilityklassen `.rijs`/`.wrd`).
- `overflow-x: clip` hoort op de binnenwerk-wrapper rond de secties, NOOIT op `html`/`body` — daar maakt het de viewport onscrollbaar. Het vangt de rechtsbloedende golf; verticaal blijft alles zichtbaar (portret-overhang).
- De maatstreep-positie `calc(50% − 16.75rem)` geldt bij container 64rem + labelkolom 12rem + gap 2.5rem; herleid hem uit die tokens, niet hardcoden naast het grid.
- Structuur en content zijn ongewijzigd; alleen `Sectie.astro`-koppen krijgen word-spans en het klarinet-artikel wisselt `border-t-2` in voor het golf-vlak.

---

## Implementatiestatus (augustus 2026)

Volledig gebouwd. Gemeten in headless chromium: alle veertien scroll-animaties
hebben een actieve timeline en de waarden lopen ook echt — omslag motief 0→72px,
notenbalk 0→56px, tekst 0→14,4px, portret 0→−24px; maatstreep scaleY 0,23 → 1;
golf `inset(0 97,8% 0 0)` → `inset(0 0 0 0)`; slotbalk vijf lijnen
`[0,89 0,76 0,63 0,49 0,36]` met de eindstreep daarna op 0,7. Bij
`prefers-reduced-motion: reduce` staat alles compleet en blijft de
portret-overhang (−160px) staan. Geen horizontale overflow op 360–1920px.

### Twee vallen die het prototype niet kon zien

1. **Nooit `animation:`-shorthand naast `animation-timeline`.** In een los,
   niet-geminificeerd bestand werkt die combinatie (de timeline-declaratie
   erna wint), maar zodra de CSS door Lightning CSS gaat vouwt die hem tot
   `animation: … view()` — en browsers wijzen die vorm af. `animation-name`
   blijft dan `none` en er beweegt niets. Alle scroll-animaties staan daarom in
   longhands. Dit was al stilletjes stuk vóór dit werk: de hero-parallax en de
   galerij-reveal draaiden in de gebouwde site nooit.
2. **De hero-clip moet `overflow: clip` zijn, niet `hidden`.** `hidden` maakt
   van dat blok een scrollcontainer, en dan resolvet de `view()`-timeline van
   de lagen erbinnen tegen dát blok — dat nooit scrolt — in plaats van tegen
   de viewport. De notenbalk en het motief stonden stil terwijl de rest liep.
   Dezelfde reden als `overflow-x: clip` op het binnenwerk, één niveau dieper.

Het scroll-prototype is op beide punten bijgewerkt, zodat de referentie klopt
met wat er draait. Vóór die fix bleef `.parallax-balk` daar op `translateY(0)`;
na de fix loopt hij tot 56px, gelijk aan de site.

### Afwijkingen van deze spec in de gebouwde site

- **De omslag heeft vier parallaxlagen, geen drie.** Het sier-motief uit de
  decoratieve assetset (`motif-klarinet-bloei`) lag er al toen dit gebouwd werd
  en ligt als achterste laag achter de notenbalk, met de grootste lag (4,5rem
  desktop, 6,5rem mobiel). Deze spec is van vóór die assetset.
- **`--schuif-s` en `--schuif-l` zijn geen tokens geworden.** Beide waarden
  komen maar op één plek voor en staan daar direct in de keyframe.
  `--drift-galerij` is er wél, want die wordt in twee keyframes gespiegeld.
- **De contactvelden staan in twee groepen, niet drie.** De spec noemt
  `r2`/`r2`/`r3` en beschrijft dat zelf al als "twee zichtbare stappen"; de
  code volgt die twee stappen (NAW op `r2`, de rest op `r3`).
- **De instrumentteksten staggeren `''`/`r2`/`r2`/`r3`** zoals het prototype,
  niet allemaal gelijk.
- **Het notenbalkslot bestaat niet meer uit vijf losse rechte lijnen.** Het is
  het geketende lint met noten en bladvlaggen geworden (zie DESIGN.md,
  Ornamenten). Vijf `scaleX`-lijnen kunnen dat niet dragen — de balk van het
  lint golft — dus schrijft de hele balk zich met één `clip-path: inset()` van
  links naar rechts. Dezelfde beweging, hetzelfde verhaal (lijn eerst,
  eindstreep laatst), ander middel. De ranges zijn iets opgeschoven omdat er nu
  drie fasen in plaats van twee in passen.
- **Er is één textuurband** (Praktisch → Contact). Hij drijft verticaal
  ±1,25rem over `cover 0–100%`: trage parallax, zodat de naad diepte krijgt.
  Bij reduced motion staat hij stil en gewoon zichtbaar.
- **De stengel** (zie DESIGN.md, Ornamenten) tekent zichzelf als één
  doorlopend front: de zichtbare lengte is een pure functie van de
  scrollpositie (elk frame herberekend, dus ook na End, ankerlinks en
  herladen), met de teken-tip op 60% van de viewporthoogte en een uitloop
  naar de paginavoet zodat de landing op maximale scroll af is. De tip is
  organisch: de middellijn loopt ~26px voor op de buitenste lijnen. Bij
  reduced motion staat alles er volledig en statisch; de reveal gebruikt
  gewone dashoffsets in pixelruimte (geen pathLength/non-scaling-stroke —
  die combinatie rendert in Chromium stuk).
- **Het omslagmotief beweegt niet meer mee** (was de vierde parallaxlaag):
  de stengel begint onder de omslagrand waar de beker onderduikt, en die
  aansluiting breekt zodra de bloem schuift. De notenbalk erachter beweegt nog wel — drie
  lagen dus, zoals deze spec oorspronkelijk zei.
