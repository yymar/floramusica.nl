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
    intro:
      'Muziekpraktijk Flora Musica is de lespraktijk van Christa ten Berg, docent klarinet. Ze geeft ook les in basklarinet, saxofoon, piano en blokfluit, aan kinderen, jongeren en volwassenen.',
    cta: 'Neem contact op',
    portretAlt: 'Christa ten Berg met haar klarinet',
  },

  over: {
    label: 'Over',
    kop: 'Over de praktijk',
    /**
     * TODO: biografie aanleveren. Hieronder staat alleen wat vaststaat;
     * er zijn bewust geen jaartallen, opleidingen of anekdotes verzonnen.
     */
    alineas: [
      'De klarinet is haar hoofdinstrument, en van daaruit is de praktijk gegroeid: van basklarinet en saxofoon tot piano en blokfluit. Les op maat, in een rustig tempo dat bij je past, of je nu voor het eerst een instrument vastpakt of na jaren weer begint.',
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
    intro: 'De tarieven en lestijden staan hier zodra ze zijn vastgesteld.',
    introVraagVoor: 'Wil je nu al iets weten, stel je vraag gerust via',
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
  },
};

/** Engels: zelfde structuur, zelfde rustige toon. */
const en: typeof nl = {
  hero: {
    titel: 'Flora Musica',
    subtitel: 'Music lessons in Oss and the surrounding area',
    intro:
      'Muziekpraktijk Flora Musica is the teaching practice of Christa ten Berg, clarinet teacher. She also teaches bass clarinet, saxophone, piano and recorder, to children, teenagers and adults.',
    cta: 'Get in touch',
    portretAlt: 'Christa ten Berg with her clarinet',
  },

  over: {
    label: 'About',
    kop: 'About the practice',
    alineas: [
      'The clarinet is her main instrument, and the practice has grown from there: from bass clarinet and saxophone to piano and recorder. Lessons made to measure, at a calm pace that suits you, whether you are picking up an instrument for the first time or returning after years.',
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
      'Most lessons take place at her home practice on the Floraliastraat in Oss — a street name that could hardly suit this practice better. This is where she takes on students herself; feel free to get in touch.',
    kaartLabel: 'View on the map',
    organisatiesKop: 'She also works for',
    organisatiesTekst:
      'Alongside her own practice she teaches and runs courses for organisations and music societies in the region.',
  },

  praktisch: {
    label: 'Practical',
    kop: 'Practical',
    intro: 'Rates and lesson times will appear here once they have been set.',
    introVraagVoor: 'Want to know something already? Feel free to ask via',
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
    titelRest: 'Music lessons in Oss and the surrounding area',
    ogAlt: 'Muziekpraktijk Flora Musica, music lessons in Oss and the surrounding area',
    navLabel: 'Main navigation',
    menu: 'Menu',
    andereTaalKnop: 'NL',
    andereTaalLabel: 'Wissel naar Nederlands',
  },
};

export type Taal = 'nl' | 'en';
export type Copy = typeof nl;

/** Normaliseert Astro.currentLocale (mogelijk undefined) naar 'nl' | 'en'. */
export const taalVan = (locale?: string): Taal => (locale === 'en' ? 'en' : 'nl');

export const copy = (locale?: string): Copy => (taalVan(locale) === 'en' ? en : nl);
