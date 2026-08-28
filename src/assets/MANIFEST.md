# floramusica asset manifest

Bordeaux `#7B1E2B` on cream `#FAF6EF`. Every SVG uses `currentColor` on a
transparent ground; PNGs are rasterized at 2048px on the longest side in bordeaux.

## Flat assets

| file | viewBox | intended use |
| --- | --- | --- |
| `assets/motifs/floramusica-motif-klarinet-bloei.svg` | `0 0 80 112` | foreground hero motif |
| `assets/motifs/floramusica-motif-klarinet-bloei-quiet.svg` | `0 0 80 112` | background watermark (10–12% opacity) |
| `assets/motifs/floramusica-motif-klarinet-instrument.svg` | `0 0 80 112` | instrument only, from the layer pack; tall accent column |
| `assets/ribbons/floramusica-ribbon-a.svg` | `0 0 144 24` | foreground divider / frame |
| `assets/ribbons/floramusica-ribbon-a-quiet.svg` | `0 0 144 24` | background watermark (10–12% opacity) |
| `assets/ribbons/floramusica-ribbon-a-centerline.svg` | `0 0 144 24` | stroke-dasharray draw animation |
| `assets/ribbons/floramusica-ribbon-a-noten.svg` | `0 0 144 24` | notes layer, registers on the staff |
| `assets/ribbons/floramusica-ribbon-a-blad.svg` | `0 0 144 24` | leaves/buds layer, registers on the staff |
| `assets/ribbons/floramusica-ribbon-b.svg` | `0 0 96 24` | foreground divider / frame |
| `assets/ribbons/floramusica-ribbon-b-quiet.svg` | `0 0 96 24` | background watermark (10–12% opacity) |
| `assets/ribbons/floramusica-ribbon-b-centerline.svg` | `0 0 96 24` | stroke-dasharray draw animation |
| `assets/ribbons/floramusica-ribbon-b-noten.svg` | `0 0 96 24` | notes layer, registers on the staff |
| `assets/ribbons/floramusica-ribbon-b-blad.svg` | `0 0 96 24` | leaves/buds layer, registers on the staff |
| `assets/ribbons/floramusica-ribbon-c.svg` | `0 0 60 76` | foreground divider / frame |
| `assets/ribbons/floramusica-ribbon-c-quiet.svg` | `0 0 60 76` | background watermark (10–12% opacity) |
| `assets/ribbons/floramusica-ribbon-c-centerline.svg` | `0 0 60 76` | stroke-dasharray draw animation |
| `assets/sprigs/floramusica-sprig-bloem-knop.svg` | `0 0 52 66` | foreground accent |
| `assets/sprigs/floramusica-sprig-bloem-open.svg` | `0 0 60 60` | foreground accent |
| `assets/sprigs/floramusica-sprig-tak-blad.svg` | `0 0 62 74` | foreground accent |
| `assets/sprigs/floramusica-sprig-tak-blad-quiet.svg` | `0 0 62 74` | background watermark (10–12% opacity) |
| `assets/sprigs/floramusica-sprig-noten-blad.svg` | `0 0 74 50` | foreground accent |
| `assets/sprigs/floramusica-sprig-sol-sleutel.svg` | `0 0 48 104` | foreground accent |
| `assets/sprigs/floramusica-sprig-sol-sleutel-quiet.svg` | `0 0 48 104` | background watermark (10–12% opacity) |

## Layer packs (identical viewBox per pack for pixel-perfect registration)

| file | viewBox | intended use | stacking order |
| --- | --- | --- | --- |

### assets/layers/motif-klarinet-bloei/ — stack bottom→top
| `assets/layers/motif-klarinet-bloei/floramusica-motif-klarinet-bloei-01-instrument.svg` (+ `.png`) | `0 0 80 112` | hand-edit layer | 01 |
| `assets/layers/motif-klarinet-bloei/floramusica-motif-klarinet-bloei-02-vine-dominant.svg` (+ `.png`) | `0 0 80 112` | hand-edit layer | 02 |
| `assets/layers/motif-klarinet-bloei/floramusica-motif-klarinet-bloei-03-flower.svg` (+ `.png`) | `0 0 80 112` | hand-edit layer | 03 |
| `assets/layers/motif-klarinet-bloei/floramusica-motif-klarinet-bloei-04-leaf-accent-right.svg` (+ `.png`) | `0 0 80 112` | hand-edit layer | 04 |
| `assets/layers/motif-klarinet-bloei/floramusica-motif-klarinet-bloei-05-hatching.svg` (+ `.png`) | `0 0 80 112` | hand-edit layer | 05 |

### assets/layers/ribbon-a/ — stack bottom→top
| `assets/layers/ribbon-a/floramusica-ribbon-a-01-stafflines.svg` (+ `.png`) | `0 0 144 24` | hand-edit layer | 01 |
| `assets/layers/ribbon-a/floramusica-ribbon-a-02-notes.svg` (+ `.png`) | `0 0 144 24` | hand-edit layer | 02 |
| `assets/layers/ribbon-a/floramusica-ribbon-a-03-leaves-buds.svg` (+ `.png`) | `0 0 144 24` | hand-edit layer | 03 |

### assets/layers/ribbon-b/ — stack bottom→top
| `assets/layers/ribbon-b/floramusica-ribbon-b-01-stafflines.svg` (+ `.png`) | `0 0 96 24` | hand-edit layer | 01 |
| `assets/layers/ribbon-b/floramusica-ribbon-b-02-notes.svg` (+ `.png`) | `0 0 96 24` | hand-edit layer | 02 |
| `assets/layers/ribbon-b/floramusica-ribbon-b-03-leaves-buds.svg` (+ `.png`) | `0 0 96 24` | hand-edit layer | 03 |

### assets/layers/ribbon-c/ — stack bottom→top
| `assets/layers/ribbon-c/floramusica-ribbon-c-01-stafflines.svg` (+ `.png`) | `0 0 60 76` | hand-edit layer | 01 |
| `assets/layers/ribbon-c/floramusica-ribbon-c-02-notes.svg` (+ `.png`) | `0 0 60 76` | hand-edit layer | 02 |

### assets/layers/sprig-bloem-open/ — stack bottom→top
| `assets/layers/sprig-bloem-open/floramusica-sprig-bloem-open-01-petals.svg` (+ `.png`) | `0 0 60 60` | hand-edit layer | 01 |
| `assets/layers/sprig-bloem-open/floramusica-sprig-bloem-open-02-stamens.svg` (+ `.png`) | `0 0 60 60` | hand-edit layer | 02 |
| `assets/layers/sprig-bloem-open/floramusica-sprig-bloem-open-03-stem-leaves.svg` (+ `.png`) | `0 0 60 60` | hand-edit layer | 03 |

### assets/layers/sprig-sol-sleutel/ — stack bottom→top
| `assets/layers/sprig-sol-sleutel/floramusica-sprig-sol-sleutel-01-clef.svg` (+ `.png`) | `0 0 48 104` | hand-edit layer | 01 |
| `assets/layers/sprig-sol-sleutel/floramusica-sprig-sol-sleutel-02-leaf.svg` (+ `.png`) | `0 0 48 104` | hand-edit layer | 02 |
| `assets/layers/sprig-sol-sleutel/floramusica-sprig-sol-sleutel-03-bud.svg` (+ `.png`) | `0 0 48 104` | hand-edit layer | 03 |

## Handgetekende tekeningen (Imke, Procreate)

Vaste kleur (bordeaux `#7b1e2b` resp. crème `#faf6f3`), dus als PNG via
`<img>`/`<image>` — niet in het inline-SVG/currentColor-systeem hierboven.
Bron: Dropbox `Flora Musica Website/tekeningen_imke/` (4000x5000);
hier bijgesneden op inhoud en verkleind.

| bestand | maat (px) | gebruik |
| --- | --- | --- |
| `assets/imke-klarinet-creme.png` | 323 x 900 | omslagmotief in `Hero.astro` (crème op bordeaux) |
| `assets/imke-sleutel-bordeaux.png` | 327 x 700 | solsleutel op de notenbalk in `PartituurRegel.astro` (toon-op-toon) |
