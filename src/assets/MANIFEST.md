# floramusica asset manifest

Bordeaux `#7B1E2B` op crème `#FAF6EF`. Alle ornamenten zijn Imkes
handgetekende tekeningen (Procreate): vaste kleur, dus PNG via `<img>`/`<image>`
en niet inline-SVG/currentColor. De oude Figma-vectorset (ribbons, sprigs) is
in aug 2026 vervangen en verwijderd.

## Handgetekende tekeningen (Imke, Procreate)

Bron: Dropbox `Flora Musica Website/tekeningen_imke/` (4000x5000); hier
bijgesneden op inhoud en verkleind.

### Losse omslagtekeningen (met de hand geëxporteerd)

| bestand | maat (px) | gebruik |
| --- | --- | --- |
| `assets/imke-klarinet-creme.png` | 323 x 900 | omslagmotief in `Hero.astro` en het vlak in `Lessen.astro` (crème op bordeaux) |
| `assets/imke-sleutel-bordeaux.png` | 327 x 700 | solsleutel op de notenbalk in `PartituurRegel.astro` (toon-op-toon) |

### Ornamentset `assets/imke/` (via `scripts/imke-assets.mjs`)

Allemaal bordeaux, langste zijde 400px. Toevoegen = naam in het script,
script draaien, naam in de union in `components/ornaments/tekeningen.ts`.

| bestand | tekening |
| --- | --- |
| `blad-1.png`, `blad-2.png` | los blad, gebogen blad met knop |
| `bloem-1.png` | open bloem, vijf kroonbladen |
| `bloem-2.png` | bloemtros, twee bloemen |
| `noot-1.png`, `noot-1a.png`, `noot-2a.png` | kwartnoot (a = gevulde kop) |
| `noot-3.png`, `noot-3a.png`, `noot-4a.png` | noot met bladvlag |
| `noot-5.png`, `noot-5a.png`, `noot-6a.png` | twee noten aan een waardestreep |
| `noot-7.png`, `noot-7a.png`, `noot-8a.png` | drie noten aan een waardestreep, met blad |
| `noot-9a.png` | vier noten aan een waardestreep |

Gebruikers: `PartituurRegel.astro` (omslagbalk), `StengelBaan.astro` (loten
langs de stengel, via `data/stengel.ts`), `Footer.astro` (het notenbalkslot),
`Sectie.astro`/`Lessen.astro` (margeaccenten via `Tekening.astro`).

## Overig

`layers/` bevat Procreate/laag-bronbestanden van de oude vectorset
(gitignored); de foto's staan in `fotos/` en de wortel van deze map.
