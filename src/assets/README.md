# Assets

Foto's staan los in deze map en in `fotos/`; de decoratieve set staat in
`ribbons/` en `sprigs/`, en Imkes handgetekende PNG's (`imke-*.png`) staan
plat in deze map. **`MANIFEST.md` is de bron**: daar staat
per bestand de viewBox en waar het voor bedoeld is. Nieuw ornament toevoegen
is: bestand in de map, regel in MANIFEST.md — de componenten lezen de map in
en leiden hun naam-types uit de bestandsnamen af, dus registreren hoeft niet.

## Varianten

| Variant | Waarvoor | Dekking |
| --- | --- | --- |
| (geen achtervoegsel) | voorgrond, vol detail | 40–100% |
| `-quiet` | achtergrondwatermerk, vereenvoudigd silhouet | 8–15%, niet hoger |
| `-centerline` | uitsluitend de draw-animatie (`<Ribbon draw>`) | n.v.t. |
| `-noten` | notenlaag van het lint, los; zelfde viewBox als de balk | 25–35% over een balk |
| `-blad` | blad/knoplaag van het lint, los; zelfde viewBox als de balk | 10–35% over een balk |

Kleurparen: bordeaux op papier, papier op het bordeaux vlak. De SVG's dragen
`currentColor`, dus de kleur komt van de omgeving (`text-bordeaux`,
`text-paper`) en de dekking van een utility.

## Gebruik

Via de componenten in `src/components/ornaments/`, nooit als `<img>`: alleen
inline volgen ze `currentColor` en kosten ze geen extra request. Zie de
doc-comments daar en `.design-sync/conventions.md` voor de plaatsingsregels.

## `layers/`

Bestaat lokaal, maar staat in `.gitignore` en hoort nergens in sitecode. Drie
lagen die de site wél gebruikt zijn daarom als gewoon bestand overgenomen in
de platte set — de build mag niet van een genegeerde map afhangen:

| Uit `layers/` | Als |
| --- | --- |
| `ribbon-a/…-02-notes.svg` (en b) | `ribbons/floramusica-ribbon-a-noten.svg` (en b) |
| `ribbon-a/…-03-leaves-buds.svg` (en b) | `ribbons/floramusica-ribbon-a-blad.svg` (en b) |

Verder: Het
zijn de losse lagen per ornament (SVG + PNG op 2048px) om met de hand bij te
werken in Procreate — 1,6 MB, en de site gebruikt er niets van.

Het hero-motief is inmiddels Imkes handgetekende PNG (`imke-klarinet-creme.png`),
gebruikt op de omslag (Hero) en op de Klarinetkaart (Lessen); de gegenereerde
`motifs/`-set is opgeruimd.
