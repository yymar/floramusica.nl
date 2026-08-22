# Design-context · Muziekpraktijk Flora Musica

Zelfstandige context voor ontwerpwerk (Claude Design, design system, nieuwe assets). Alles hieronder is de vastgestelde waarheid van het huidige ontwerp; bronbestanden staan erbij.

## Wat dit is

One-pager voor de lespraktijk van Christa ten Berg, muziekdocent in Oss (hoofdinstrument klarinet; ook basklarinet, saxofoon, piano, blokfluit). Publiek: ouders die les zoeken voor hun kind, en volwassen (her)beginners. Doel: aanmeldingen via het contactformulier én een professioneel visitekaartje voor doorverwijzers. Er is ruim plek voor nieuwe leerlingen; de site mag actief uitnodigen. Live op floramusica.nl (GitHub Pages, Astro 7 + Tailwind 4, statisch, geen tracking).

## Centraal concept: de partituurregel

De pagina is één regel bladmuziek. De omslag (hero, diep bordeaux) opent met een toon-op-toon notenbalk van rand tot rand met een echte solsleutel aan het begin; de footer sluit af met dezelfde notenbalk mét eindstreep (dun + dik). Daartussen is de pagina gedisciplineerd stil: warm papier, een marge-grid waarin sectielabels in de linkermarge op de kop-baseline staan (nul eyebrows), en verder géén muzikale ornamenten. Regel: het motief is opening en slot, nooit strooiwerk.

## Het merk: fm

De forte-f (U+E522) en mezzo-m (U+E521) uit **Bravura**, Steinbergs professionele muzieknotatiefont (SIL Open Font License, commercieel vrij). Dit zijn de dynamiek-letters die elke muzikant kent van *f*, *mf*, *ff* — het monogram "fm" is dus letterlijk muzieknotatie.

- Wordmark: [forte-f]lora [mezzo-m]usica, rest in Bricolage Grotesque 600, tracking −0.015em. Alle maten in em (schaalt mee): f = 1.35em hoog, overlap −0.33em; m = 0.69em hoog.
- Monogram: f en m ineengehaakt (m links −0.36× f-breedte, baselines gelijk).
- Vectorpaden: `src/data/dynamiek.ts` (f viewBox `-141 -444 505 596`, m viewBox `-20 -274 466 284`, renderen met `scale(1,-1)`).
- Toepassingen: `src/components/Wordmark.astro` (header 1.2rem, hero op `--text-omslag`, footer 1.25rem), `public/favicon.svg` (fm op bordeaux tegel, radius 6/32), `public/og.png` (1200×630).
- De solsleutel (Bravura U+E050) staat in `src/components/PartituurRegel.astro`.

## Kleur (exact, niet benaderen)

| Token | Hex | Rol |
|---|---|---|
| `--paper` | `#FAF6F3` | achtergrond, warm wit |
| `--paper-deep` | `#F1E9E4` | rustige sectiewissel |
| `--ink` | `#231A1C` | tekst (nooit zuiver zwart) |
| `--ink-soft` | `#6B5A5D` | bijschriften, secundair |
| `--bordeaux` | `#7B1E2B` | hét accent: links, knoppen, merk, labels |
| `--bordeaux-deep` | `#4A1219` | hero-vlak, header, hover |
| `--paper-dim` | `#E8D8D5` | secundaire tekst op bordeaux |
| `--rule` | `#DCCFC9` | decoratieve hairlines |
| `--border-strong` | `#9A8180` | formulierveld-randen |

Regels: bordeaux is de enige accentkleur, overal identiek; hover verdiept naar bordeaux-deep; geen paars- of roze-verschuiving; geen zuiver wit/zwart. Alle paren zijn WCAG-gecheckt (laagste tekstpaar 5,40:1; volledige tabel in DESIGN.md). Alleen licht thema — het concept is een papier-referentie; het bordeaux vlak is een sectietint, geen dark mode.

## Typografie

- **Display: Bricolage Grotesque** (variabel, 600–700, tracking −0.02em; wordmark −0.015em). Zelf-gehost via @fontsource; op Google Fonts beschikbaar voor ontwerptools.
- **Tekst: Atkinson Hyperlegible Next** (400/700, regelafstand 1.65, 17px basis). Gekozen om leesbaarheid: publiek omvat snel scannende ouders en oudere herbeginners.
- Schaal (clamp, ratio ±1,25): `--text-omslag` tot 5.5rem (alleen de hero-wordmark) · `--text-kop` tot 2.25rem · `--text-subkop` tot 1.4rem · basis 17px · klein 15px. Lopende tekst max 62ch.
- Geen derde familie. Geen serif. Notatieglyphs (Bravura) tellen als beeld, niet als tekstfont.

## Spacing en vorm

- 4px-basis; secties ademen via `clamp(4rem, 2.5rem + 6vw, 8rem)`.
- Hoekradius: klein en consequent — `rounded-sm` voor knoppen/velden/kaarten; merktegel 22/150 verhouding; nooit pill-knoppen.
- Notenbalk-maat: 5 lijnen van 1px, 10px hart-op-hart (footer); hero-versie in font-units (lijnen op 0/250/500/750/1000).
- Eindstreep: dun 1px + dik 4px, hoogte exact de balk (41px footer).

## Toon en copy

Nederlands, je-vorm. Warm, persoonlijk, vakkundig, rustig. Geen superlatieven, geen uitroeptekens, geen marketingtaal. Harde regel: **niets verzinnen** (geen reviews, aantallen, jaartallen, prijzen) en **weglaten, nooit placeholder tonen** — lege data rendert niet; alleen de twee foto-slots zijn zichtbaar als "… volgt". CTA overal: "Neem contact op" (één intentie, één label).

## Componenten-inventaris (bron = autoriteit)

- `Wordmark.astro` — fm-wordmark, prop `toon: 'bordeaux' | 'paper'`
- `PartituurRegel.astro` — notenbalk + solsleutel, full-bleed
- `Sectie.astro` — marge-grid (label links op kop-baseline; mobiel label boven kop), prop `tint`
- `Figuur.astro` — fotoslot: Astro `<Image>` of tonale placeholder, prop `toon`
- `ContactFormulier.astro` — Web3Forms, no-JS-pad, NL-validatie na blur/submit, draft in localStorage (7 dagen TTL, flush op pagehide), spamtimer vanaf eerste interactie
- Alle content in getypeerde datafiles: `src/data/{site,copy,instrumenten,organisaties,tarieven,navigatie,dynamiek}.ts`

## Aanwezige assets

- `public/og.png` — social-kaart met fm-wordmark (herbruikbare stijl: bordeaux vlak, wordmark, notenbalk+eindstreep onderaan)
- `public/favicon.svg` — fm op tegel
- `src/assets/portret-christa.jpg` — tijdelijk portret, vierkant zwart-wit, 640×640
- Canvas met merk + schetsen: claude.ai/code/artifact/198374a2-4f62-4d2a-888f-73c7c6df7542

## Wat nog ontbreekt (niet verzinnen)

Definitieve portretfoto (~4:5) en praktijkfoto (~3:4), biografie, tarieven/lesduur, e-mail, telefoon, KvK-nummer, postcode. Zie CONTENT-TODO.md.

## Waar ruimte zit voor een hoger niveau

1. **Fotografie-richtlijn**: zwart-wit of warm getint beeld op bordeaux werkt bewezen goed (huidig portret); definieer een bewerkingsrecept (duotone bordeaux/papier?) zodat toekomstige foto's één familie vormen.
2. **Drukwerk/uitingen**: visitekaartje, lesrooster-pdf, briefpapier — de partituurregel (sleutel opent, eindstreep sluit) vertaalt zich 1:1 naar print.
3. **Micro-interacties**: nu alleen kleurtransities; er is ruimte voor één ingetogen authored moment (bijv. de notenbalk die bij laden van links "getrokken" wordt), altijd achter `prefers-reduced-motion`.
4. **Instrument-iconografie**: de vijf lescellen zijn nu tekst; een eigen getekende monolijn-set (zelfde streekdikte-gevoel als de dynamiekletters) zou de Lessen-sectie kunnen dragen — mits professioneel getekend, anders weglaten.
5. **Grenzen**: geen bloemenbehang, geen extra kleuren, geen dark mode, geen notatie-ornamenten tussen opening en slot, geen derde lettertype.
