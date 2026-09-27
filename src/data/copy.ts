/**
 * Alle lopende teksten van de pagina, in twee talen. Nederlands is de
 * hoofdtaal (rustig, je-vorm, geen superlatieven en geen uitroeptekens);
 * het Engels volgt dezelfde toon. Teksten met [TODO: ...] zijn
 * placeholders; zie CONTENT-TODO.md voor het volledige lijstje.
 *
 * Componenten halen hun teksten op via `copy(Astro.currentLocale)`.
 */

const nl = {
  hero: {
    titel: 'Flora Musica',
    subtitel: 'Muziekles in Oss en omgeving',
    citaat: 'Ach, wenn wir nur auch Clarinetti hätten',
    citaatBron: 'Wolfgang Amadeus Mozart',
    intro:
      'Muziekpraktijk Flora Musica is de lespraktijk van Christa ten Berg, docent klarinet. Ze geeft hier klarinet-, basklarinet- & pianoles voor jong tot oud, van beginner tot (ver)gevorderde. Daarnaast verzorgt zij lezingen over klassieke muziek en dirigeert en coacht ze ensembles. Ook als je je wilt verdiepen in de muziektheorie en/of jouw kennis wilt bijspijkeren, ben je bij haar aan het goede adres.',
    cta: 'Vraag een proefles aan',
    portretAlt: 'Christa ten Berg met haar klarinet',
  },

  over: {
    label: 'Over',
    kop: 'Over de praktijk',
    /** Teksten van Christa zelf; alleen spelling en zinsbouw zijn bijgewerkt. */
    alineas: [
      'De klarinet is het hart van haar muziekpraktijk, en van daaruit is alles gegroeid: van basklarinet tot piano. Les op maat, op het niveau & in het tempo dat bij je past, of je nu voor het eerst een instrument vastpakt of na jaren weer begint.',
      'Naast het overbrengen van de passie voor het klarinetspelen heeft zij ook altijd veel interesse gehad in de mens achter het instrument. Het vertrouwen dat leerlingen haar geven en de band die ze in de loop der jaren met hen opbouwt, maken het lesgeven zo interessant, aantrekkelijk & uitdagend. Door te kijken en te luisteren naar haar leerlingen wil ze de sleutel tot ieders muzikale talent vinden. Op deze manier kan iedere leerling, ongeacht aanleg of niveau, met veel plezier leren spelen en zo zijn muzikale talent maximaal laten bloeien.',
    ],
    bioKop: 'Over Christa ten Berg',
    bio: [
      'Al vanaf heel jonge leeftijd heeft de klarinet een magische aantrekkingskracht op Christa. Tien jaar oud, eindelijk mocht zij dit mooie instrument gaan leren bespelen.',
      'Opgegroeid in de wereld van het harmonieorkest, ging zij studeren aan het Prins Claus Conservatorium te Groningen. In 1995 rondde zij haar studie succesvol af. Vervolgens studeerde zij nog aan de kunsthogeschool ArtEZ en volgde ze een specialisatie kamermuziek bij de Belgische klarinettist Eddy Vanoosthuyse in Gent (België).',
      'Al sinds haar studie geeft Christa met veel passie en enthousiasme les aan mensen van jong tot oud. Daarnaast is zij ook werkzaam als klarinetdocent bij diverse kunstinstellingen en verenigingen. In 2015 is zij haar eigen muziekpraktijk gestart onder de naam Flora Musica, waar ze naast lesgeven ook dirigeert en lezingen over het luisteren naar klassieke muziek geeft.',
      'Naast het lesgeven speelt zij nog in diverse ensembles, waaronder Trio En-Semble, waarmee zij Franse chansons vertolkt.',
    ],
    fotoAlt: 'Christa met haar klarinet aan de piano in de lespraktijk',
  },

  lessen: {
    label: 'Lessen',
    kop: 'Lessen',
    intro:
      'Iedere les is individueel, afgestemd op je eigen doelen en tempo. Dit zijn de instrumenten waarin je les kunt krijgen.',
    doelgroepLabel: 'Voor wie',
    doelgroepTekst:
      'De lessen zijn er voor kinderen, jongeren en volwassenen. Ook als je na jaren weer wilt beginnen ben je welkom.',
  },

  locatie: {
    label: 'Locatie',
    kop: 'Waar je haar vindt',
    praktijkKop: 'De lespraktijk',
    praktijkTekst:
      'De meeste lessen vinden plaats aan huis, in de eigen lespraktijk aan de Floraliastraat in Oss. Toepasselijker kan een straatnaam voor deze praktijk bijna niet zijn. Hier neemt ze zelf leerlingen aan; neem gerust contact op.',
    kaartLabel: 'Bekijk op de kaart',
    organisatiesKop: 'Daarnaast werkt ze voor',
    organisatiesTekst:
      'Naast de eigen praktijk geeft ze les en verzorgt ze opleidingen bij organisaties en verenigingen in de regio.',
  },

  praktisch: {
    label: 'Praktisch',
    kop: 'Praktisch',
    intro: 'Voor tarieven en lestijden neem je het beste persoonlijk contact op.',
    introVraagVoor: 'Dat kan via',
    introVraagLink: 'het contactformulier',
    opAanvraag: 'op aanvraag',
  },

  contact: {
    label: 'Contact',
    kop: 'Contact',
    intro:
      'Wil je een les afspreken of heb je een vraag, laat hieronder een bericht achter. Je krijgt persoonlijk antwoord.',
    mailtoTekst: 'Liever direct mailen? Dat kan ook:',
  },

  formulier: {
    onderwerpVoor: 'Nieuw bericht via',
    labels: {
      naam: 'Naam',
      email: 'E-mailadres',
      telefoon: 'Telefoonnummer (niet verplicht)',
      instrument: 'Instrument',
      instrumentPlaceholder: 'Kies een instrument',
      instrumentAnders: 'Anders / weet ik nog niet',
      voorWie: 'Voor wie is de les?',
      voorMezelf: 'Voor mezelf',
      voorKind: 'Voor mijn kind',
      bericht: 'Bericht',
      versturen: 'Verstuur bericht',
      bezig: 'Versturen…',
    },
    fouten: {
      naam: 'Vul je naam in.',
      email: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.',
      voorWie: 'Kies voor wie de les is.',
      bericht: 'Schrijf een kort bericht.',
      teSnel: 'Dat ging wel heel snel. Controleer je bericht en probeer het opnieuw.',
    },
    status: {
      succes: 'Je bericht is verstuurd. Je krijgt zo snel mogelijk antwoord.',
      fout: 'Het versturen is niet gelukt. Je bericht staat er nog; probeer het over een moment opnieuw.',
      geenKey: 'Het formulier is nog niet ingesteld. Gebruik voorlopig het e-mailadres hieronder.',
    },
    concept: {
      melding: 'We hebben je eerdere bericht bewaard.',
      wissen: 'Wis concept',
    },
  },

  bedankt: {
    titel: 'Bedankt voor je bericht',
    tekst: 'Je bericht is verstuurd. Je krijgt zo snel mogelijk persoonlijk antwoord.',
    terug: 'Terug naar de site',
  },

  nietGevonden: {
    titel: 'Deze pagina bestaat niet',
    tekst: 'De pagina die je zocht is er niet, of niet meer. Alles staat op de voorpagina.',
    terug: 'Naar de voorpagina',
  },

  footer: {
    emailLabel: 'E-mail',
    telefoonLabel: 'Telefoon',
    kvkLabel: 'KvK',
    regioVoor: 'Muziekles in',
    colofon: `© ${new Date().getFullYear()} Muziekpraktijk Flora Musica`,
    creditsLabel: 'Site door',
    creditsNaam: 'yymar',
    creditsUrl: 'https://github.com/yymar',
  },

  galerij: {
    label: 'Beelden',
    kop: 'De praktijk in beeld',
    bekijkFoto: (nummer: number, alt: string) => `Bekijk foto ${nummer} groot: ${alt}`,
    fotoVolgt: 'Foto volgt',
    dialoogLabel: 'Fotoweergave',
    fout: 'De foto kon niet laden.',
    opnieuw: 'Probeer opnieuw',
    sluiten: 'Sluiten',
    vorige: 'Vorige foto',
    volgende: 'Volgende foto',
  },

  basis: {
    skiplink: 'Direct naar de inhoud',
    titelRest: 'Muziekles in Oss en omgeving',
    ogAlt: 'Muziekpraktijk Flora Musica, muziekles in Oss en omgeving',
    navLabel: 'Hoofdnavigatie',
    menu: 'Menu',
    /** Opschrift op de taalknop: de taal waar je naartoe schakelt. */
    andereTaalKnop: 'EN',
    andereTaalLabel: 'Switch to English',
    nieuwTabblad: 'opent in nieuw tabblad',
  },
};

/** Engels: zelfde structuur, zelfde rustige toon. */
const en: typeof nl = {
  hero: {
    titel: 'Flora Musica',
    subtitel: 'Music lessons in Oss and the surrounding area',
    citaat: 'Ach, wenn wir nur auch Clarinetti hätten',
    citaatBron: 'Wolfgang Amadeus Mozart',
    intro:
      'Muziekpraktijk Flora Musica is the teaching practice of Christa ten Berg, clarinet teacher. Here she teaches clarinet, bass clarinet & piano to young and old, from beginner to (very) advanced. She also gives talks on classical music, and conducts and coaches ensembles. And if you want to dive deeper into music theory and/or brush up your knowledge, she is the right person to go to.',
    cta: 'Book a trial lesson',
    portretAlt: 'Christa ten Berg with her clarinet',
  },

  over: {
    label: 'About',
    kop: 'About the practice',
    alineas: [
      'The clarinet is the heart of her music practice, and everything has grown from there: from bass clarinet to piano. Lessons made to measure, at the level & pace that suit you, whether you are picking up an instrument for the first time or starting again after years.',
      'Besides passing on her passion for playing the clarinet, she has always been very interested in the person behind the instrument. The trust her students give her and the bond she builds with them over the years make teaching so interesting, appealing & challenging. By watching and listening to her students, she wants to find the key to everyone’s musical talent. That way every student, whatever their aptitude or level, can learn to play with a lot of enjoyment and let their musical talent flourish to the full.',
    ],
    bioKop: 'About Christa ten Berg',
    bio: [
      'From a very young age the clarinet has had a magical pull on Christa. At ten years old she was finally allowed to start learning this beautiful instrument.',
      'Having grown up in the world of the wind band, she went on to study at the Prince Claus Conservatoire in Groningen, graduating successfully in 1995. She then studied at the ArtEZ University of the Arts and specialised in chamber music with the Belgian clarinettist Eddy Vanoosthuyse in Ghent (Belgium).',
      'Ever since her studies, Christa has taught people young and old with a great deal of passion and enthusiasm. She also works as a clarinet teacher for various arts institutions and music societies. In 2015 she started her own music practice under the name Flora Musica, where besides teaching she also conducts and gives talks on listening to classical music.',
      'Alongside teaching she plays in various ensembles, including Trio En-Semble, with whom she performs French chansons.',
    ],
    fotoAlt: 'Christa with her clarinet at the piano in the teaching practice',
  },

  lessen: {
    label: 'Lessons',
    kop: 'Lessons',
    intro:
      'Every lesson is individual, tuned to your own goals and pace. These are the instruments you can take lessons in.',
    doelgroepLabel: 'Who it is for',
    doelgroepTekst:
      'Lessons are open to children, teenagers and adults. You are equally welcome if you want to pick an instrument up again after years.',
  },

  locatie: {
    label: 'Location',
    kop: 'Where to find her',
    praktijkKop: 'The teaching practice',
    praktijkTekst:
      'Most lessons take place at her home practice on Floraliastraat in Oss — a street name that could hardly suit this practice better. This is where she takes on students herself; feel free to get in touch.',
    kaartLabel: 'View on the map',
    organisatiesKop: 'She also works for',
    organisatiesTekst:
      'Alongside her own practice she teaches and runs courses for organisations and music societies in the region.',
  },

  praktisch: {
    label: 'Practical',
    kop: 'Practical',
    intro: 'For rates and lesson times, it is best to get in touch personally.',
    introVraagVoor: 'You can do so via',
    introVraagLink: 'the contact form',
    opAanvraag: 'on request',
  },

  contact: {
    label: 'Contact',
    kop: 'Contact',
    intro:
      'Want to book a lesson or ask a question? Leave a message below and you will get a personal reply.',
    mailtoTekst: 'Prefer to email directly? That works too:',
  },

  formulier: {
    onderwerpVoor: 'New message via',
    labels: {
      naam: 'Name',
      email: 'Email address',
      telefoon: 'Phone number (optional)',
      instrument: 'Instrument',
      instrumentPlaceholder: 'Choose an instrument',
      instrumentAnders: 'Other / not sure yet',
      voorWie: 'Who is the lesson for?',
      voorMezelf: 'For myself',
      voorKind: 'For my child',
      bericht: 'Message',
      versturen: 'Send message',
      bezig: 'Sending…',
    },
    fouten: {
      naam: 'Please fill in your name.',
      email: 'Please enter a valid email address, for example name@example.com.',
      voorWie: 'Please choose who the lesson is for.',
      bericht: 'Please write a short message.',
      teSnel: 'That was very quick. Please check your message and try again.',
    },
    status: {
      succes: 'Your message has been sent. You will get a reply as soon as possible.',
      fout: 'Sending did not work. Your message is still here; please try again in a moment.',
      geenKey: 'The form has not been set up yet. Please use the email address below for now.',
    },
    concept: {
      melding: 'We kept your earlier message.',
      wissen: 'Clear draft',
    },
  },

  bedankt: {
    titel: 'Thank you for your message',
    tekst: 'Your message has been sent. You will get a personal reply as soon as possible.',
    terug: 'Back to the site',
  },

  nietGevonden: {
    titel: 'This page does not exist',
    tekst: 'The page you were looking for is not here, or not any more. Everything is on the front page.',
    terug: 'To the front page',
  },

  footer: {
    emailLabel: 'Email',
    telefoonLabel: 'Phone',
    kvkLabel: 'Chamber of Commerce (KvK)',
    regioVoor: 'Music lessons in',
    colofon: `© ${new Date().getFullYear()} Muziekpraktijk Flora Musica`,
    creditsLabel: 'Site by',
    creditsNaam: 'yymar',
    creditsUrl: 'https://github.com/yymar',
  },

  galerij: {
    label: 'Pictures',
    kop: 'The practice in pictures',
    bekijkFoto: (nummer: number, alt: string) => `View photo ${nummer} enlarged: ${alt}`,
    fotoVolgt: 'Photo to follow',
    dialoogLabel: 'Photo view',
    fout: 'The photo could not be loaded.',
    opnieuw: 'Try again',
    sluiten: 'Close',
    vorige: 'Previous photo',
    volgende: 'Next photo',
  },

  basis: {
    skiplink: 'Skip to content',
    titelRest: 'Music lessons in and around Oss',
    ogAlt: 'Muziekpraktijk Flora Musica, music lessons in Oss and the surrounding area',
    navLabel: 'Main navigation',
    menu: 'Menu',
    andereTaalKnop: 'NL',
    andereTaalLabel: 'Wissel naar Nederlands',
    nieuwTabblad: 'opens in a new tab',
  },
};

export type Taal = 'nl' | 'en';
export type Copy = typeof nl;

/** Normaliseert Astro.currentLocale (mogelijk undefined) naar 'nl' | 'en'. */
export const taalVan = (locale?: string): Taal => (locale === 'en' ? 'en' : 'nl');

export const copy = (locale?: string): Copy => (taalVan(locale) === 'en' ? en : nl);
