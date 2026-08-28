# Assets

Foto's staan los in deze map en in `fotos/`; de decoratieve set is Imkes
handgetekende werk: de losse omslagtekeningen (`imke-*.png`, plat in deze
map) en de ornamentset in `imke/`. **`MANIFEST.md` is de bron**: daar staat
per bestand waar het voor bedoeld is en hoe je een tekening toevoegt
(`scripts/imke-assets.mjs`).

De oude Figma-vectorset (`ribbons/`, `sprigs/`, currentColor-SVG's) is in
aug 2026 volledig vervangen door de handgetekende PNG's en verwijderd.

## Gebruik

Via de componenten in `src/components/ornaments/` (`Tekening.astro` voor
losse ornamenten). De tekeningen hebben een vaste bordeaux-kleur, dus het
zijn PNG's via `<img>`/`<image>`; dekking en maat stuurt de omgeving. Zie de
doc-comments daar en `.design-sync/conventions.md` voor de plaatsingsregels.

## `layers/`

Bestaat lokaal, maar staat in `.gitignore` en hoort nergens in sitecode: de
losse lagen per oud vector-ornament (SVG + PNG op 2048px). Sinds de
handgetekende set gebruikt de site er niets meer van.
