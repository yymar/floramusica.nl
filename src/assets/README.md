# Assets

Foto's staan los in deze map en in `fotos/`; de decoratieve set staat in
`motifs/`, `ribbons/` en `sprigs/`. **`MANIFEST.md` is de bron**: daar staat
per bestand de viewBox en waar het voor bedoeld is. Nieuw ornament toevoegen
is: bestand in de map, regel in MANIFEST.md — de componenten lezen de map in
en leiden hun naam-types uit de bestandsnamen af, dus registreren hoeft niet.

## Varianten

| Variant | Waarvoor | Dekking |
| --- | --- | --- |
| (geen achtervoegsel) | voorgrond, vol detail | 40–100% |
| `-quiet` | achtergrondwatermerk, vereenvoudigd silhouet | 8–15%, niet hoger |
| `-centerline` | uitsluitend de draw-animatie (`<Ribbon draw>`) | n.v.t. |

Kleurparen: bordeaux op papier, papier op het bordeaux vlak. De SVG's dragen
`currentColor`, dus de kleur komt van de omgeving (`text-bordeaux`,
`text-paper`) en de dekking van een utility.

## Gebruik

Via de componenten in `src/components/ornaments/`, nooit als `<img>`: alleen
inline volgen ze `currentColor` en kosten ze geen extra request. Zie de
doc-comments daar en `.design-sync/conventions.md` voor de plaatsingsregels.

## `layers/`

Bestaat lokaal, maar staat in `.gitignore` en hoort nergens in sitecode. Het
zijn de losse lagen per ornament (SVG + PNG op 2048px) om met de hand bij te
werken in Procreate — 1,6 MB, en de site gebruikt er niets van.

Het hero-motief is met het oog daarop opgezet als één plek: in
`src/sections/Hero.astro` staat precies één `<Motief name="klarinet-bloei" />`.
Komt er een met de hand afgemaakte transparante PNG, dan is dat één regel
wisselen (`<Motief>` → `<Image>`) in dat ene bestand.
