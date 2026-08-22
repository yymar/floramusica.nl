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

- [ ] **Definitieve portretfoto** voor de hero, staand ± 4:5 (tijdelijke vierkante zwart-witfoto staat in `src/assets/portret-christa.jpg`) · `src/sections/Hero.astro`
- [ ] **Foto uit de lespraktijk**, ± 3:4 · `src/sections/Over.astro`
- [x] **Logo / wordmark**: het fm-merk (forte-f + mezzo-m uit Bravura) staat in `Wordmark.astro`
- [x] **Favicon**: forte-f op bordeaux tegel in `public/favicon.svg`
- [x] **Open Graph-afbeelding**: `public/og.png` met de fm-wordmark
