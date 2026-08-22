/**
 * De instrumenten waarin les wordt gegeven. Klarinet is het hoofdinstrument
 * en krijgt visueel voorrang; wijzig `hoofdinstrument` om dat te verplaatsen.
 * De volgorde hier is de volgorde op de pagina en in het contactformulier.
 */

export interface Instrument {
  /** Wordt gebruikt als waarde in het contactformulier. */
  id: string;
  naam: string;
  hoofdinstrument: boolean;
  omschrijving: string;
}

export const instrumenten: Instrument[] = [
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
    omschrijving:
      'Van klassiek tot jazz en pop. Voor beginners en gevorderden.',
  },
  {
    id: 'piano',
    naam: 'Piano',
    hoofdinstrument: false,
    omschrijving:
      'Een brede basis voor iedere muzikant. Spelen vanaf de eerste les.',
  },
  {
    id: 'blokfluit',
    naam: 'Blokfluit',
    hoofdinstrument: false,
    omschrijving:
      'Een fijne eerste kennismaking met muziek, en een volwaardig instrument op zich.',
  },
];

/** Voor wie de lessen zijn; wordt onder het lesaanbod getoond. */
export const doelgroepen: string[] = ['kinderen', 'jongeren', 'volwassenen'];
