/**
 * Alle lopende teksten van de pagina. Rustig Nederlands, je-vorm,
 * geen superlatieven en geen uitroeptekens. Teksten met [TODO: ...]
 * zijn placeholders; zie CONTENT-TODO.md voor het volledige lijstje.
 */

export const hero = {
  titel: 'Muziekles in Oss en omgeving',
  intro:
    'Muziekpraktijk Flora Musica is de lespraktijk van [TODO: voornaam], docent klarinet. Ze geeft ook les in basklarinet, saxofoon, piano en blokfluit, aan kinderen, jongeren en volwassenen.',
  cta: 'Neem contact op',
};

export const over = {
  kop: 'Over de praktijk',
  /**
   * TODO: biografie aanleveren. Hieronder staat alleen wat vaststaat;
   * er zijn bewust geen jaartallen, opleidingen of anekdotes verzonnen.
   */
  alineas: [
    'De klarinet is haar hoofdinstrument, en van daaruit is de praktijk gegroeid: van basklarinet en saxofoon tot piano en blokfluit. Les op maat, in een rustig tempo dat bij je past, of je nu voor het eerst een instrument vastpakt of na jaren weer begint.',
    '[TODO: persoonlijke biografie aanleveren: achtergrond, opleiding, hoe ze lesgeeft en wat haar drijft.]',
  ],
  fotoAlt: 'Portret van de docent met haar klarinet', // TODO: echte foto + alt-tekst
};

export const lessen = {
  kop: 'Lessen',
  intro:
    'Iedere les is individueel, afgestemd op je eigen doelen en tempo. Dit zijn de instrumenten waarin je les kunt krijgen.',
  doelgroepLabel: 'Voor wie',
  doelgroepTekst:
    'De lessen zijn er voor kinderen, jongeren en volwassenen. Ook als je na jaren weer wilt beginnen ben je welkom.',
};

export const locatie = {
  kop: 'Waar je haar vindt',
  praktijkKop: 'De lespraktijk',
  praktijkTekst:
    'De meeste lessen vinden plaats aan huis, in de eigen lespraktijk aan de Floraliastraat in Oss. Toepasselijker kan een straatnaam voor deze praktijk bijna niet zijn. Hier neemt ze zelf leerlingen aan; neem gerust contact op.',
  kaartLabel: 'Bekijk op de kaart',
  organisatiesKop: 'Daarnaast werkt ze voor',
  organisatiesTekst:
    'Naast de eigen praktijk geeft ze les en verzorgt ze opleidingen bij organisaties en verenigingen in de regio.',
};

export const praktisch = {
  kop: 'Praktisch',
  intro:
    'De tarieven en lestijden staan hieronder zodra ze zijn vastgesteld. Wil je nu al iets weten, stel je vraag via het contactformulier.',
  opAanvraag: 'op aanvraag',
};

export const contact = {
  kop: 'Contact',
  intro:
    'Wil je een les afspreken of heb je een vraag, laat hieronder een bericht achter. Je krijgt persoonlijk antwoord.',
  mailtoTekst: 'Liever direct mailen? Dat kan ook:',
};

export const formulier = {
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
    geenKey:
      'Het formulier is nog niet ingesteld. Gebruik voorlopig het e-mailadres hieronder.',
  },
  concept: {
    melding: 'We hebben je eerdere bericht bewaard.',
    wissen: 'Wis concept',
  },
};

export const bedankt = {
  titel: 'Bedankt voor je bericht',
  tekst: 'Je bericht is verstuurd. Je krijgt zo snel mogelijk persoonlijk antwoord.',
  terug: 'Terug naar de site',
};

export const nietGevonden = {
  titel: 'Deze pagina bestaat niet',
  tekst: 'De pagina die je zocht is er niet, of niet meer. Alles staat op de voorpagina.',
  terug: 'Naar de voorpagina',
};

export const footer = {
  kvkLabel: 'KvK',
  colofon: `© ${new Date().getFullYear()} Muziekpraktijk Flora Musica`,
};
