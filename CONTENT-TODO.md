# CONTENT-TODO

Alles wat nog aangeleverd moet worden. Elke regel verwijst naar de plek in de code waar het ingevuld wordt; zoeken op `TODO` in `src/` vindt ze allemaal.

## Teksten

- [x] **Biografie** en eigen teksten van Christa verwerkt (september 2026) · `src/data/copy.ts`, `src/data/instrumenten.ts`
- [x] **Saxofoon** verwijderd (geeft ze geen les in)
- [ ] **Keuze: blokfluit** houden of weg? Christa noemt alleen klarinet, basklarinet en piano; de tekst bij blokfluit is niet van haar · `src/data/instrumenten.ts`, ook `src/data/site.ts` (`omschrijving`)
- [ ] **Keuze: teksten zonder aanlevering** houden, laten herschrijven door Christa of weg: intro bij Lessen, blok "Voor wie", teksten bij Locatie, Praktisch en Contact · `src/data/copy.ts`
- [ ] **Controleren**: schrijfwijze "Trio En-Semble" (stond als "En- Semble") · `src/data/copy.ts` (`over.bio`)
- [ ] **Controleren**: bij het Mozart-citaat stond "brief over het 3e deel van het klarinetconcert voor Anton Stadler"; het citaat komt uit een brief aan zijn vader uit Mannheim (1778). Op de site staat nu alleen "Wolfgang Amadeus Mozart" · `src/data/copy.ts` (`hero.citaat`)
- [ ] **Plaats van Muziekvereniging Zeelandia en Phoenix Cultuur** bevestigen · `src/data/organisaties.ts`

## Praktisch

- [x] **Tarieven** komen niet op de site (keuze van Christa); de sectie verwijst naar contact
- [ ] **Lesduur en info over (proef)lessen**; daarna `bekend: true` zetten · `src/data/tarieven.ts`
- [x] **Proefles**: ja; de knop in de hero is nu "Vraag een proefles aan" · `src/data/copy.ts` (`hero.cta`)

## Contact en zakelijk

- [x] **E-mailadres**: christa.muziek@gmail.com · `src/data/site.ts` (`email`)
- [ ] **Telefoonnummer** · `src/data/site.ts` (`telefoon`)
- [ ] **KvK-nummer** · `src/data/site.ts` (`kvk`)
- [ ] **Postcode** van Floraliastraat 68 · `src/data/site.ts` (`adres.postcode`)
- [x] **Web3Forms-key** aanvragen en instellen (lokaal in `.env`, op GitHub als secret `PUBLIC_WEB3FORMS_KEY`) · zie README.md

## Beeld (fase 2)

- [x] **Definitieve portretfoto** voor de hero (professionele serie, 4:5) · `src/assets/portret-christa.jpg`
- [x] **Foto uit de lespraktijk** (Christa aan de piano, 3:4) · `src/assets/lespraktijk.jpg`
- [x] **Galerij**: veertien foto's als quilted spread · `src/data/fotos.ts`, `src/sections/Galerij.astro`
- [ ] **Toestemming portretrecht** checken voor galerijfoto's met herkenbare personen · `src/data/fotos.ts`
  - № 3 — briefje met de voornaam van een leerling ("Luna")
  - № 6 — twee jonge klarinettistes, beiden goed herkenbaar in beeld
  - № 8 — het klarinetensemble
  - № 9 — het optreden
  - № 11 — de klarinetkring; vooral handen, maar enkele gezichten deels in beeld
  - Let op: № 6 en № 11 zijn erbij gekomen in augustus 2026 en tonen (mogelijk
    minderjarige) leerlingen. Voor een openbare site is dat het punt om
    expliciet af te tikken vóór de eerstvolgende deploy.
  - De nummers hierboven zijn posities in `fotos.ts`; ze schuiven mee als je
    een foto tussenvoegt.
- [ ] **Bijschriften galerij** aanvullen of corrigeren (nu № 3, 5, 7, 8 en 11) · `src/data/fotos.ts`
- [ ] **Citaat voor de galerij** (optioneel): een kort tekstfragment voor een bordeaux cel in het grid, zodat het niet mechanisch voelt · `src/sections/Galerij.astro`
- [x] **Logo / wordmark**: het fm-merk (forte-f + mezzo-m uit Bravura) staat in `Wordmark.astro`
- [x] **Favicon**: forte-f op bordeaux tegel in `public/favicon.svg`
- [x] **Open Graph-afbeelding**: `public/og.png` met de fm-wordmark
