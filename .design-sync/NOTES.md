# design-sync notities · floramusica.nl

- De site zelf is Astro; het React-DS-pakket leeft in `ds/` en is speciaal voor Claude Design gebouwd (zelfde tokens/merk als de site, bron: ontwerp/design-context.md en DESIGN.md).
- Geen Storybook en die komt er ook niet; shape is definitief `package`.
- Build: `cd ds && npm run build` (tsc). Eigen node_modules in `ds/node_modules` (react 18 + @types/react). Die map is gitignored: op een verse machine eerst `cd ds && npm install`, anders faalt de tsc-build op ontbrekende JSX-types (en `astro check` in de site-repo meldt dan ~89 fouten in `.design-sync/previews/*.tsx` die niets met de site te maken hebben).
- Fonts laden remote via Google Fonts `@import` in `ds/src/styles.css` (bewuste keuze; site zelf host via @fontsource). `[FONT_REMOTE]` is verwacht.
- Glyphs (forte-f, mezzo-m, solsleutel) zijn inline SVG-paden uit Bravura (SIL OFL) in `ds/src/glyphs.ts` — geen notatiefont nodig.
- `ds/src/ornaments.ts` is gegenereerd uit `src/assets/{motifs,ribbons,sprigs}` en bevat alleen de ornamenten die de site echt gebruikt (~69 kB). Wijzigt de assetset, dan opnieuw genereren; de bestandslijst staat bovenin het script-commentaar. `src/assets/layers/` blijft er altijd buiten.

## Known render warns
- (geen; render check 12/12 schoon. `Galerij` staat als `fallbackCard` in .render-check.json — dat is de floor card, geen fout.)

## Previews: geleerd bij het ornament-werk (aug 2026)
- Cellen met lopende tekst moeten in `<div className="fm-basis">`, anders valt de tekst terug op de serif-standaard van de browser. Een inline `background` overschrijft alleen het papier van die klasse; font en inktkleur blijven staan. Kostte één ronde bij `Takje`.
- Geef ornamenten in previews een expliciete, kleine breedte. `Motief` op 200–260px wordt onderaan door de kaart afgesneden (80×112 viewBox = veel hoogte); 130–150px past wel. `cardMode: column` lost dat niet op, dat regelt alleen de breedte.
- Een preview die het sitegebruik 1-op-1 kopieert kan als DS-kaart onbruikbaar zijn: `Takje` op 24px in een kaart van 630px las als een stofje. Toon de variant-as op leesbare maat én één echte compositie.

## Re-sync risks
- Fonts komen remote van Google Fonts (`@import` in ds/src/styles.css); als Claude Design ooit remote fonts blokkeert, wisselen naar `extraFonts` met de @fontsource-woff2's uit de site.
- `ds/` deelt tokens met de site handmatig (bron: DESIGN.md / src/styles/global.css). Verandert het sitepalet of de typeschaal, werk `ds/src/styles.css` en `ontwerp/design-context.md` mee bij.
- Glyph-paden in `ds/src/glyphs.ts` zijn gekopieerd uit Bravura; ook gebruikt door de site (`src/data/dynamiek.ts`). Twee kopieën, bewust: het DS-pakket blijft zelfstandig.
- Idem voor `ds/src/ornaments.ts`: tweede kopie van de assetset, bewust, om het DS-pakket zelfstandig te houden. Bron blijft `src/assets/MANIFEST.md`.
- Converter: eerst `cd ds && npm run build`, dan `--entry ./ds/dist/index.js --node-modules ds/node_modules`.
- Playwright staat niet in de repo. Op een verse machine: `cd .ds-sync && npm i playwright && npx playwright install chromium`. Op macOS landt de cache in `~/Library/Caches/ms-playwright`, niet in `~/.cache/ms-playwright` — de skill noemt alleen die laatste, dus een `ls` daarop zegt niets.
- `Galerij` staat bewust op de floor card (geen `.design-sync/previews/Galerij.tsx`). Wil je hem echt tonen, dan is dat het eerstvolgende preview-klusje; hij vraagt een `fotos`-array met echte beelden.
- `conventions.md` beschrijft `Galerij` en `Monogram` niet. Bewust niet stilletjes aangevuld — die tekst is van de auteur; het is een openstaand voorstel.
