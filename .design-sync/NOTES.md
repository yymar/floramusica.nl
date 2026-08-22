# design-sync notities · floramusica.nl

- De site zelf is Astro; het React-DS-pakket leeft in `ds/` en is speciaal voor Claude Design gebouwd (zelfde tokens/merk als de site, bron: ontwerp/design-context.md en DESIGN.md).
- Geen Storybook en die komt er ook niet; shape is definitief `package`.
- Build: `cd ds && npm run build` (tsc). Eigen node_modules in `ds/node_modules` (react 18 + @types/react).
- Fonts laden remote via Google Fonts `@import` in `ds/src/styles.css` (bewuste keuze; site zelf host via @fontsource). `[FONT_REMOTE]` is verwacht.
- Glyphs (forte-f, mezzo-m, solsleutel) zijn inline SVG-paden uit Bravura (SIL OFL) in `ds/src/glyphs.ts` — geen notatiefont nodig.

## Known render warns
- (geen; render check 8/8 schoon na de Figuur-fontfix en Veld cardMode column)

## Re-sync risks
- Fonts komen remote van Google Fonts (`@import` in ds/src/styles.css); als Claude Design ooit remote fonts blokkeert, wisselen naar `extraFonts` met de @fontsource-woff2's uit de site.
- `ds/` deelt tokens met de site handmatig (bron: DESIGN.md / src/styles/global.css). Verandert het sitepalet of de typeschaal, werk `ds/src/styles.css` en `ontwerp/design-context.md` mee bij.
- Glyph-paden in `ds/src/glyphs.ts` zijn gekopieerd uit Bravura; ook gebruikt door de site (`src/data/dynamiek.ts`). Twee kopieën, bewust: het DS-pakket blijft zelfstandig.
- Converter: eerst `cd ds && npm run build`, dan `--entry ./ds/dist/index.js --node-modules ds/node_modules`.
