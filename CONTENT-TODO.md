# CONTENT-TODO

Alles wat nog aangeleverd moet worden. Elke regel verwijst naar de plek in de code waar het ingevuld wordt; zoeken op `TODO` in `src/` vindt ze allemaal.

## Teksten

- [x] **Biografie** en eigen teksten van Christa verwerkt (september 2026) · `src/data/copy.ts`, `src/data/instrumenten.ts`
- [x] **Saxofoon** verwijderd (geeft ze geen les in)
- [x] **Blokfluit** verwijderd (voorlopig niet) · `src/data/instrumenten.ts`, ook `src/data/site.ts` (`omschrijving`)
- [x] **Teksten zonder aanlevering** doorgenomen door Christa (oktober 2026): intro Lessen ingekort, "Voor wie" en Contact herschreven, Locatie en Praktisch blijven · `src/data/copy.ts`
- [x] **Schrijfwijze "Trio En-Semble"** bevestigd · `src/data/copy.ts` (`over.bio`)
- [x] **Mozart-citaat**: bron is nu "in een brief aan zijn vader (1778)". Christa wilde "uit brief over het klarinetconcert", maar dat klopt niet: het concert is van 1791. Oorspronkelijke notitie: stond "brief over het 3e deel van het klarinetconcert voor Anton Stadler"; het citaat komt uit een brief aan zijn vader uit Mannheim (1778). Op de site staat nu alleen "Wolfgang Amadeus Mozart" · `src/data/copy.ts` (`hero.citaat`)
- [x] **Plaats van Muziekvereniging Zeelandia en Phoenix Cultuur**: Zeeland en Veghel kloppen volgens hun eigen sites · `src/data/organisaties.ts`

## Praktisch

- [x] **Handige links** (Klarinetatelier Arnhem zonder link: de site werkt niet) · `src/data/links.ts`

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

- [x] **Definitieve portretfoto** voor de hero: het zwart-witportret ("Foto Biografie 2018"), keuze van Christa · `src/assets/portret-christa.jpg`
- [x] **Foto uit de lespraktijk** (Christa aan de piano, 3:4) · `src/assets/lespraktijk.jpg`
- [x] **Galerij**: twintig foto's uit Christa's selectie ("fotos mam 2e ronde", oktober 2026) als quilted spread · `src/data/fotos.ts`, `src/sections/Galerij.astro`
- [x] **Toestemming portretrecht**: in orde volgens Christa (oktober 2026); de foto's met leerlingen stonden al via de praktijk op Facebook
- [ ] **Bijschriften galerij** aanvullen of corrigeren (nu alleen Klarinetdag en Samenspel in de klas) · `src/data/fotos.ts`
- [ ] **Citaat voor de galerij** (optioneel): een kort tekstfragment voor een bordeaux cel in het grid, zodat het niet mechanisch voelt · `src/sections/Galerij.astro`
- [x] **Logo / wordmark**: het fm-merk (forte-f + mezzo-m uit Bravura) staat in `Wordmark.astro`
- [x] **Favicon**: forte-f op bordeaux tegel in `public/favicon.svg`
- [x] **Open Graph-afbeelding**: `public/og.png` met de fm-wordmark
