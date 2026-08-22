# floramusica.nl

Portfoliowebsite van Muziekpraktijk Flora Musica: muziekles in Oss en omgeving (klarinet, basklarinet, saxofoon, piano en blokfluit). Gebouwd met [Astro](https://astro.build) en Tailwind CSS, gehost op GitHub Pages.

## Lokaal draaien

Vereist Node.js 22.12 of nieuwer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # productie-build naar dist/
npm run preview    # de build lokaal bekijken
```

## Waar staat welke content

Alle bewerkbare inhoud staat in `src/data/`; de layout hoef je daarvoor niet aan te raken.

| Bestand | Inhoud |
|---|---|
| `src/data/site.ts` | naam, adres, e-mail, telefoon, KvK, kaartlink |
| `src/data/copy.ts` | alle lopende teksten per sectie |
| `src/data/instrumenten.ts` | instrumenten en doelgroepen |
| `src/data/organisaties.ts` | organisaties waarvoor gewerkt wordt |
| `src/data/tarieven.ts` | lesvormen, tarieven ("op aanvraag" zolang `bekend: false`) |
| `src/data/navigatie.ts` | menu-items |

Openstaande punten staan in `CONTENT-TODO.md`. De ontwerpkeuzes (kleuren, contrast, typografie) staan in `DESIGN.md`. Logo en favicon zijn placeholders: vervang `src/components/Wordmark.astro` en `public/favicon.svg`.

## Contactformulier (Web3Forms)

Het formulier verstuurt via [Web3Forms](https://web3forms.com); berichten komen binnen op het gekoppelde e-mailadres.

1. Ga naar https://web3forms.com en vraag met het gewenste ontvangst-e-mailadres een gratis access key aan (komt per mail).
2. Lokaal: kopieer `.env.example` naar `.env` en vul de key in bij `PUBLIC_WEB3FORMS_KEY`.
3. Voor de live site: zet de key als repository secret. GitHub-repo → Settings → Secrets and variables → Actions → New repository secret, naam `PUBLIC_WEB3FORMS_KEY`.

Zonder key werkt de site gewoon; het formulier meldt dan dat het nog niet is ingesteld en verwijst naar het e-mailadres. De key is publiek (hij staat in de pagina); dat is bij Web3Forms de bedoeling.

## Deployen

Elke push naar `main` bouwt en deployt automatisch via GitHub Actions (`.github/workflows/deploy.yml`).

Eenmalig instellen in de GitHub-repo:

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `floramusica.nl` invullen.
3. Zodra het certificaat is uitgegeven (kan een uur duren): **Enforce HTTPS** aanvinken.

## DNS-records

Zet bij de domeinregistrar van `floramusica.nl`:

**Apex-domein (`floramusica.nl`), vier A-records:**

```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

**En de bijbehorende AAAA-records (IPv6):**

```
AAAA  @  2606:50c0:8000::153
AAAA  @  2606:50c0:8001::153
AAAA  @  2606:50c0:8002::153
AAAA  @  2606:50c0:8003::153
```

**Voor `www`, één CNAME-record:**

```
CNAME  www  yymar.github.io
```

`public/CNAME` bevat al `floramusica.nl`, zodat het custom domain een deploy overleeft.

## Statistieken (later, optioneel)

Er staat bewust geen tracking op de site: geen cookies, geen externe scripts, dus ook geen cookiebanner nodig. Wil je later bezoekersaantallen zien, dan zijn [Plausible](https://plausible.io) of [GoatCounter](https://www.goatcounter.com) privacyvriendelijke opties die zonder cookiebanner kunnen.
