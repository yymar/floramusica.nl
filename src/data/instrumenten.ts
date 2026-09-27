/**
 * De instrumenten waarin les wordt gegeven. Klarinet is het hoofdinstrument
 * en krijgt visueel voorrang; wijzig `hoofdinstrument` om dat te verplaatsen.
 * De volgorde hier is de volgorde op de pagina en in het contactformulier.
 * `id` is taalonafhankelijk: het is de waarde in het contactformulier.
 */
import { taalVan } from './copy';

export interface Instrument {
  /** Wordt gebruikt als waarde in het contactformulier. */
  id: string;
  naam: string;
  hoofdinstrument: boolean;
  /** Korte regel onder de naam, zoals Christa die zelf meegaf. */
  motto?: string;
  /** Alinea's. Klarinet, basklarinet en piano zijn Christa's eigen teksten. */
  omschrijving: string[];
}

const nl: Instrument[] = [
  {
    id: 'klarinet',
    naam: 'Klarinet',
    hoofdinstrument: true,
    omschrijving: [
      'De klarinet is een houten blaasinstrument met een diep, warm geluid in de laagte en een sprankelend, frivool geluid in de hoogte. Er bestaat een hele klarinetfamilie, variërend van de es-klarinet, die heel hoog klinkt, tot de contrabasklarinet, die heel laag klinkt. Je kunt met de klarinet alle soorten muziek spelen: van volksmuziek tot klassieke muziek tot popmuziek.',
      'Meestal begin je met spelen op een bes-klarinet. Je leert de elementen van goed klarinetspel: lichaamshouding, toonvorming, ademhaling, techniek/vingervlugheid en muzikale expressie. Plezier hebben in muziek staat daarbij voorop!',
      'Vraag een proefles aan via het contactformulier.',
    ],
  },
  {
    id: 'basklarinet',
    naam: 'Basklarinet',
    hoofdinstrument: false,
    omschrijving: [
      'Toen haar kinderen klein waren, zeiden ze vaak: “Mama, ik wil…” En dan antwoordde zij: “Weet je wat mama wil?” En dan zeiden ze: “Ja, ja, een BASKlarinet!” (Ze konden het niet meer horen ;) )',
      'Daar moet je dan 50 jaar voor worden en denken: nu of nooit… Sinds een paar jaar is zij de trotse bespeler van haar Tosca-basklarinet, en hiermee kwam een van haar grootste wensen in vervulling. Verliefd op het geweldig volle, diepe, voelbare geluid in de laagte. Het breekbare, kwetsbare, melancholische geluid in de hoogte. Maar ook de looks, niet te doen.',
      'Wil jij nou ook ervaren hoe het is om basklarinet te spelen, schrijf je dan in voor een proefles (je moet wel zelf een instrument hebben).',
    ],
  },
  {
    id: 'piano',
    naam: 'Piano',
    hoofdinstrument: false,
    motto: '“Een uit de hand gelopen liefde…”',
    omschrijving: [
      'Gestart op het conservatorium als bijvak, heeft dit instrument haar verleid. Later in haar leven heeft ze de draad weer opgepakt. De piano is met haar 88 toetsen een heel orkest dat je in je eentje kunt bespelen. Je kunt er allerlei soorten muziek op spelen: van klassiek tot jazz, van pop- tot volksmuziek.',
      'Kun jij nou ook nooit zomaar aan dit prachtige instrument voorbijlopen zonder het even aan te raken, schrijf je dan in voor een proefles piano.',
    ],
  },
];

const en: Instrument[] = [
  {
    id: 'klarinet',
    naam: 'Clarinet',
    hoofdinstrument: true,
    omschrijving: [
      'The clarinet is a wooden wind instrument with a deep, warm sound in the low register and a sparkling, playful sound in the high register. There is a whole clarinet family, ranging from the E-flat clarinet, which sounds very high, to the contrabass clarinet, which sounds very low. You can play every kind of music on the clarinet: from folk to classical to pop.',
      'You usually start on a B-flat clarinet. You learn the elements of good clarinet playing: posture, tone production, breathing, technique/finger dexterity and musical expression. Enjoying music always comes first!',
      'Request a trial lesson via the contact form.',
    ],
  },
  {
    id: 'basklarinet',
    naam: 'Bass clarinet',
    hoofdinstrument: false,
    omschrijving: [
      'When her children were little, they often said: “Mum, I want…” And she would answer: “You know what Mum wants?” And then they would say: “Yes, yes, a BASS clarinet!” (They were sick of hearing it ;) )',
      'You have to turn 50 for that and think: now or never… For a few years now she has been the proud player of her Tosca bass clarinet, and with it one of her greatest wishes came true. In love with the wonderfully full, deep sound in the low register that you can feel. The fragile, vulnerable, melancholy sound up high. And the looks, too — irresistible.',
      'Would you like to experience what it is like to play the bass clarinet? Then sign up for a trial lesson (you do need your own instrument).',
    ],
  },
  {
    id: 'piano',
    naam: 'Piano',
    hoofdinstrument: false,
    motto: '“A love that got out of hand…”',
    omschrijving: [
      'She started it as a second subject at the conservatoire, and this instrument won her over. Later in life she picked it up again. With its 88 keys, the piano is a whole orchestra you can play on your own. You can play all kinds of music on it: from classical to jazz, from pop to folk.',
      'Can you never walk past this beautiful instrument without touching it for a moment either? Then sign up for a trial piano lesson.',
    ],
  },
];

export const instrumenten = (locale?: string): Instrument[] => (taalVan(locale) === 'en' ? en : nl);

/** Aanbod naast de instrumentlessen; staat bij Lessen, niet in het formulier. */
export type Aanbod = Omit<Instrument, 'id' | 'hoofdinstrument'>;

const aanbodNl: Aanbod[] = [
  {
    naam: 'Klassieke muziek: lezingen',
    omschrijving: [
      'Zolang Christa zich kan herinneren, ligt haar hart bij klassieke muziek. In haar lezingen neemt ze je, aan de hand van muziekfragmenten, mee op reis door de tijd, het leven, de stijl van de componisten en hun muziek. Zo ontstaat er ruimte voor verdieping, met een ander oor leren luisteren en natuurlijk gewoon voor je plezier luisteren naar klassieke muziek. Na 13 jaar ervaring op dit gebied is geen onderwerp haar te gek.',
      'Misschien maak je op deze manier voor het eerst kennis met klassieke muziek, of vul je jouw kennis aan. Het maakt je hopelijk heel nieuwsgierig om zelf jouw weg door de klassieke muziek te vinden en zo jouw favorieten te ontdekken.',
    ],
  },
  {
    naam: 'Dirigeren en coachen',
    omschrijving: [
      '25 jaar lang heeft Christa met veel enthousiasme haar eigen klarinetensemble gedirigeerd, tot corona roet in het eten gooide. (Plannen voor een nieuw te vormen ensemble zijn in de maak, houd deze site in de gaten.)',
      'Ook in het coachen van sectierepetities van harmonieorkesten heeft zij veel ervaring. Je kunt haar hier altijd voor benaderen. Met de klarinetsectie van jullie orkest gaat ze de door jullie te spelen stukken instuderen. Samen met jullie gaat ze werken aan specifiek klarinettechnische uitdagingen. Denk aan houding, ademhaling, toonvorming, techniek, muzikale expressie, articulatie, samenspel en intonatie. Hiermee komen alle facetten van het klarinetspel weer aan bod, waardoor je je individuele spel en het groepsspel kunt verbeteren en verder kunt groeien. Alles vanuit positieve feedback, en met plezier in het muziek maken voorop!',
    ],
  },
];

const aanbodEn: Aanbod[] = [
  {
    naam: 'Classical music: talks',
    omschrijving: [
      'For as long as Christa can remember, her heart has been with classical music. In her talks she takes you, through musical excerpts, on a journey through time, through the lives and styles of the composers and their music. That leaves room to go deeper, to learn to listen with different ears, and of course simply to enjoy listening to classical music. After 13 years of experience in this field, no subject is too much for her.',
      'Perhaps this is your first introduction to classical music, or a way to add to what you already know. Hopefully it makes you very curious to find your own way through classical music and discover your own favourites.',
    ],
  },
  {
    naam: 'Conducting and coaching',
    omschrijving: [
      'For 25 years Christa conducted her own clarinet ensemble with great enthusiasm, until corona threw a spanner in the works. (Plans for a new ensemble are in the making; keep an eye on this site.)',
      'She also has a lot of experience coaching sectional rehearsals for wind bands, and you can always approach her for this. With the clarinet section of your band she rehearses the pieces you are going to play, and works with you on clarinet-specific technical challenges: posture, breathing, tone production, technique, musical expression, articulation, ensemble playing and intonation. This brings every aspect of clarinet playing back into focus, so that you can improve both your own playing and the section as a whole, and keep growing. All based on positive feedback, with the joy of making music first!',
    ],
  },
];

export const aanbod = (locale?: string): Aanbod[] => (taalVan(locale) === 'en' ? aanbodEn : aanbodNl);

/** Voor wie de lessen zijn; wordt onder het lesaanbod getoond. */
export const doelgroepen = (locale?: string): string[] =>
  taalVan(locale) === 'en' ? ['children', 'teenagers', 'adults'] : ['kinderen', 'jongeren', 'volwassenen'];
