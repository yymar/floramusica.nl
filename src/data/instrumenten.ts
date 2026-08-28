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
  omschrijving: string;
}

const nl: Instrument[] = [
  {
    id: 'klarinet',
    naam: 'Klarinet',
    hoofdinstrument: true,
    omschrijving:
      'Haar eigen instrument, en het hart van de praktijk. Van de eerste toon tot samenspel in een orkest of ensemble.',
  },
  {
    id: 'basklarinet',
    naam: 'Basklarinet',
    hoofdinstrument: false,
    omschrijving:
      'De warme, donkere broer van de klarinet. Ook geschikt als vervolgstap voor klarinettisten.',
  },
  {
    id: 'saxofoon',
    naam: 'Saxofoon',
    hoofdinstrument: false,
    omschrijving: 'Van klassiek tot jazz en pop. Voor beginners en gevorderden.',
  },
  {
    id: 'piano',
    naam: 'Piano',
    hoofdinstrument: false,
    omschrijving: 'Een brede basis voor iedere muzikant. Spelen vanaf de eerste les.',
  },
  {
    id: 'blokfluit',
    naam: 'Blokfluit',
    hoofdinstrument: false,
    omschrijving:
      'Een fijne eerste kennismaking met muziek, en een volwaardig instrument op zich.',
  },
];

const en: Instrument[] = [
  {
    id: 'klarinet',
    naam: 'Clarinet',
    hoofdinstrument: true,
    omschrijving:
      'Her own instrument, and the heart of the practice. From the very first note to playing together in an orchestra or ensemble.',
  },
  {
    id: 'basklarinet',
    naam: 'Bass clarinet',
    hoofdinstrument: false,
    omschrijving:
      'The warm, dark sibling of the clarinet. Also a fine next step for clarinettists.',
  },
  {
    id: 'saxofoon',
    naam: 'Saxophone',
    hoofdinstrument: false,
    omschrijving: 'From classical to jazz and pop. For beginners and advanced players.',
  },
  {
    id: 'piano',
    naam: 'Piano',
    hoofdinstrument: false,
    omschrijving: 'A broad foundation for every musician. Playing from the very first lesson.',
  },
  {
    id: 'blokfluit',
    naam: 'Recorder',
    hoofdinstrument: false,
    omschrijving:
      'A lovely first introduction to music, and a full instrument in its own right.',
  },
];

export const instrumenten = (locale?: string): Instrument[] => (taalVan(locale) === 'en' ? en : nl);

/** Voor wie de lessen zijn; wordt onder het lesaanbod getoond. */
export const doelgroepen = (locale?: string): string[] =>
  taalVan(locale) === 'en' ? ['children', 'teenagers', 'adults'] : ['kinderen', 'jongeren', 'volwassenen'];
