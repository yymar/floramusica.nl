# CONTENT-TODO

Alles wat nog aangeleverd moet worden. Elke regel verwijst naar de plek in de code waar het ingevuld wordt; zoeken op `TODO` in `src/` vindt ze allemaal.

## Teksten

- [ ] **Biografie**: achtergrond, opleiding, manier van lesgeven · `src/data/copy.ts` (`over.alineas`)
- [ ] **Plaats van Muziekvereniging Zeelandia en Phoenix Cultuur** bevestigen · `src/data/organisaties.ts`

## Praktisch

- [ ] **Tarieven en lesduur** per lesvorm; daarna `bekend: true` zetten · `src/data/tarieven.ts`
- [ ] **Opmerkingen** bij tarieven (proefles? btw-vrijstelling onder 21?) · `src/data/tarieven.ts`
- [ ] **Vraag**: biedt ze proeflessen aan? Zo ja, kan de call-to-action "Plan een proefles" worden in plaats van "Neem contact op" · `src/data/copy.ts` (`hero.cta`)

## Contact en zakelijk

- [ ] **E-mailadres** · `src/data/site.ts` (`email`)
- [ ] **Telefoonnummer** · `src/data/site.ts` (`telefoon`)
- [ ] **KvK-nummer** · `src/data/site.ts` (`kvk`)
- [ ] **Postcode** van Floraliastraat 68 · `src/data/site.ts` (`adres.postcode`)
- [ ] **Web3Forms-key** aanvragen en instellen (lokaal in `.env`, op GitHub als secret `PUBLIC_WEB3FORMS_KEY`) · zie README.md

## Beeld (fase 2)

- [x] **Definitieve portretfoto** voor de hero (professionele serie, 4:5) · `src/assets/portret-christa.jpg`
- [x] **Foto uit de lespraktijk** (Christa aan de piano, 3:4) · `src/assets/lespraktijk.jpg`
- [x] **Galerij**: acht foto's als editoriale spread · `src/data/fotos.ts`, `src/sections/Galerij.astro`
- [ ] **Toestemming portretrecht** checken voor galerijfoto's met herkenbare personen: het klarinetensemble (№ 5), het optreden (№ 6) en het briefje met de voornaam van een leerling (№ 3, "Luna") · `src/data/fotos.ts`
- [ ] **Bijschriften galerij** aanvullen of corrigeren (nu alleen № 3 en № 5) · `src/data/fotos.ts`
- [x] **Logo / wordmark**: het fm-merk (forte-f + mezzo-m uit Bravura) staat in `Wordmark.astro`
- [x] **Favicon**: forte-f op bordeaux tegel in `public/favicon.svg`
- [x] **Open Graph-afbeelding**: `public/og.png` met de fm-wordmark
