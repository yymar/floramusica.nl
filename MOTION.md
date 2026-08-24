# MOTION.md · Flora Musica — Concept B "Crescendo"

> Deze spec is geschreven in het Claude Design-project ("Flora Musica Design
> System") en staat daar naast het scroll-prototype
> `Flora Musica - Scroll-prototype.html`, dat elke keyframe en range letterlijk
> bevat. Hij staat hier omdat de spec hoort te leven naast de code die hem
> uitvoert. Onderaan staat wat er bij de implementatie is afgeweken.

## Het concept in drie zinnen

De pagina is één partituurregel, en de scroll is de uitvoering: een doorlopende maatstreep tekent zich in de labelmarge van sectie naar sectie, terwijl elk onderdeel zijn eigen, korte entree krijgt op het moment dat het in beeld komt. Het klarinet-hart van de praktijk opent als een crescendo — een bordeaux vlak dat zich links-naar-rechts opent en over de gridgrens naar de paginarand bloedt. Alle beweging is lineair aan de scroll gekoppeld (de vinger van de bezoeker is de easing); alleen micro-interacties hebben een eigen duur en easing.

## Motion-tokens (additief op de bestaande tokens)

```css
:root {
  --ease-organic: cubic-bezier(0.2, 0, 0, 1);
  --dur-s: 150ms;  /* kleurwissels (hover links/knoppen) */
  --dur-m: 240ms;  /* micro-beweging: onderstreping, pijl */
  --dur-l: 350ms;  /* beeld-scale in galerijcellen */
  --schuif-m: 1rem;    /* reveal-afstand tekstblokken en koppen */
  --overlap-hero: 4rem; /* portret-overhang; 2.5rem onder 48rem */
  --drift-galerij: 1.5rem;  /* micro-parallax in de spread */
  --z-achter: 0; --z-inhoud: 1; --z-accent: 2; /* header blijft z-40 */
}
```

Scroll-gekoppelde animaties zijn `linear` zonder duur: positie in de `animation-range` = voortgang. Guard overal:
`@media (prefers-reduced-motion: no-preference) { @supports (animation-timeline: view()) { … } }` — daarbuiten staat alle content er direct en volledig zichtbaar. Alleen `transform`, `opacity` en `clip-path`. Geen JS.

## Specificaties per sectie

### Header (micro-interacties, overal dezelfde taal)
- Navlinks: onderstreping groeit — `::after` 1px, `scaleX 0→1`, origin links, `--dur-m` `--ease-organic`; kleur `--dur-s`. Hover-pijlen (heroknop, kaartlink): `translateX(4px)`, `--dur-m` `--ease-organic`.

### Hero — drie parallaxlagen
- Trigger: `animation-timeline: view()` per laag, `animation-range: exit 0% exit 100%`. Lineair, `both`.
- Achter — partituurregel: `translateY 0 → 3.5rem` (mobiel `5.5rem`), in een eigen clip zodat niets uitsteekt.
- Midden — tekstblok (h1, intro, knop): `translateY 0 → 0.9rem` (mobiel `1.25rem`).
- Voor — portret: `translateY 0 → −1.5rem` (mobiel `−1.25rem`), z-laag `--z-accent`, plus statisch `margin-bottom: calc(−1 · (var(--overlap-hero) + hero-padding-bottom))` — de negatieve marge moet ook de padding-bottom van de hero (6rem, mobiel 4rem) overbruggen, anders absorbeert die de overhang. Zachte slagschaduw verkoopt de diepte.
- Reduced: alle drie uit; portret-overhang blijft (layout, geen animatie).

### Maatstreep (rode draad)
- Eén verticale lijn, 2px `--bordeaux` op 30% opacity, absoluut in het binnenwerk op `left: calc(50% − 16.75rem)` (het gat tussen labelkolom en inhoud), alleen ≥64rem.
- `scaleY 0→1`, origin top, `view()` op de lijn zelf, `animation-range: cover 0% cover 85%`.
- Mobiel: uit. Reduced: staat er volledig.

### Sectiekoppen — opbouw per woord
- Elke kop opgesplitst in `.wrd`-spans (max 4). Per woord: `opacity 0→1` + `translateY 1rem→0`, ranges `entry 0–30%`, per volgend woord +6%.
- Mobiel: alle woorden samen op `entry 0–30%`. Reduced: uit.

### Over
- Kop per woord. Tekstblok `.rijs r2` (`entry 8–46%`); foto `.rijs r3` (`entry 16–54%`).

### Beelden (galerij)
- Cel-reveal: `opacity 0→1` (was 0.25) + `translateY 0.75rem`, ranges `entry 0–40%`, `nth-child(3n+2)` `8–48%`, `nth-child(3n)` `16–56%`.
- Drift: binnen elke cel `translateY ±1.5rem` over `cover 0%–100%`; oneven op, even neer — de spread "bladert". Alleen ≥48rem.
- Hover: beeld `scale(1.02)`, `--dur-l`; bijschrift-overlay fade 200ms.

### Lessen — de bordeaux-golf
- Het klarinet-artikel is een bordeaux-deep vlak (`--paper`-tekst, contrast 14:1) dat rechts uit de container bloedt: `margin-right: calc(50% − 50vw)`.
- Opening: `clip-path: inset(0 100% 0 0) → inset(0 0 0 0)`, `entry 10%–70%` — links→rechts als een crescendo-haarspeld; tekst en vlak verschijnen samen, dus leesbaarheid is nooit tussenin.
- Overige instrumenten: hairline groeit (`scaleX 0→1`, origin links, `entry 0–35%`, +7% per item), tekst rijst mee.
- Reduced: vlak staat open, lijnen staan er.

### Locatie
- Kop per woord; praktijkblok `.rijs r2`, organisatieblok `.rijs r3`.
- Organisatielijst: hairlines groeien per item (`entry 0–35%`, +6% per item, zes items).

### Praktisch / Contact
- Praktisch: één `.rijs r2` op de intro; bewust bijna stil (rustpunt tussen golf en formulier).
- Contact: velden in twee zichtbare stappen (`r2` / `r3`) — geen parade. Focus/hover: kleurwissels `--dur-s`.

### Footer — notenbalkslot tekent zichzelf
- `view-timeline: --slot` op de footer; de vijf lijnen `scaleX 0→1` origin links, ranges `entry 0–45%` +6% per lijn; de eindstreep (dun+dik) fade `entry 45–80%`.
- Reduced: balk staat er compleet.

## Afwijkingen van de briefing (bewust, uit de oorspronkelijke spec)

1. De golf "trekt zich terug bij Locatie" is geschrapt: een vlak dat weer verdwijnt onder gelezen tekst schendt de rust- en leesbaarheidseis. Het vlak opent één keer en blijft.
2. Koppen bouwen per woord, niet per regel: regels zijn responsief onvoorspelbaar in statisch CSS; woorden zijn stabiel en de koppen zijn kort.
3. Geen IntersectionObserver-helper nodig: alles kan met `animation-timeline: view()` + `@supports`-guard.

## Implementatienotities

- `overflow-x: clip` hoort op de binnenwerk-wrapper rond de secties, NOOIT op `html`/`body` — daar maakt het de viewport onscrollbaar. Het vangt de rechtsbloedende golf en de linksbloedende galerij-spread; verticaal blijft alles zichtbaar (portret-overhang).
- De maatstreep-positie `calc(50% − 16.75rem)` geldt bij container 64rem (incl. 2rem padding) + labelkolom 12rem + gap 2.5rem; herleid hem uit die maten, niet hardcoden naast het grid.
- Structuur en content zijn ongewijzigd; alleen `Sectie.astro`-koppen krijgen word-spans en het klarinet-artikel wisselt `border-t-2` in voor het golf-vlak.

## Implementatiestatus (aug 2026)

Volledig gebouwd. Twee dingen die tijdens de implementatie naar boven kwamen en
waar de code van het prototype afwijkt:

1. **Nooit `animation:`-shorthand naast `animation-timeline`.** De minifier
   (Lightning CSS) vouwt de timeline dan de shorthand in — `animation: … view()`
   — en browsers wijzen die vorm af, waarna `animation-name` op `none` blijft en
   er niets beweegt. Alle scroll-animaties staan daarom in longhands. Dit was al
   stilletjes stuk vóór dit werk: de hero-parallax en de galerij-reveal draaiden
   in productie nooit.
2. **De hero-clip is `overflow: clip`, niet `hidden`.** `hidden` maakt van dat
   blok een scrollcontainer, en dan resolvet de `view()`-timeline van de lagen
   erbinnen tegen dát blok — dat nooit scrolt — in plaats van tegen de viewport.
   De notenbalk en het motief stonden daardoor stil terwijl de rest wél liep.
   Dezelfde reden als `overflow-x: clip` op het binnenwerk.
